<?php

use App\Models\Note;
use App\Models\User;
use Inertia\Testing\AssertableInertia;

test('guests cannot access notes', function () {
    $response = $this->get(route('notes.index'));
    $response->assertRedirect(route('login'));
});

test('authenticated users can view notes index', function () {
    $user = User::factory()->create();
    $notes = Note::factory(3)->create(['author_id' => $user->id]);

    $response = $this
        ->actingAs($user)
        ->get(route('notes.index'));

    $response
        ->assertInertia(
            fn(AssertableInertia $page) => $page
                ->component('Notes/Index')
                ->has('notes', 3)
        );
});

test('authenticated users can create notes', function () {
    $user = User::factory()->create();

    $response = $this
        ->actingAs($user)
        ->get(route('notes.create'));

    $response->assertInertia(
        fn(AssertableInertia $page) => $page
            ->component('Notes/Create')
    );

    $noteData = [
        'title' => 'Test Note',
        'content' => '# Test Content',
    ];

    $response = $this
        ->actingAs($user)
        ->post(route('notes.store'), $noteData);

    $note = Note::first();

    $response->assertRedirect(route('notes.show', $note));
    $this->assertDatabaseHas('notes', [
        'title' => 'Test Note',
        'content' => '# Test Content',
        'author_id' => $user->id,
    ]);
});

test('authenticated users can view individual notes', function () {
    $user = User::factory()->create();
    $note = Note::factory()->create(['author_id' => $user->id]);

    $response = $this
        ->actingAs($user)
        ->get(route('notes.show', $note));

    $response
        ->assertInertia(
            fn(AssertableInertia $page) => $page
                ->component('Notes/Show')
                ->has(
                    'note',
                    fn(AssertableInertia $prop) => $prop
                        ->where('id', $note->id)
                        ->where('title', $note->title)
                        ->where('content', $note->content)
                        ->where('author_id', $user->id)
                        ->where('created_at', $note->created_at->toJSON())
                        ->where('updated_at', $note->updated_at->toJSON())
                        ->has('html_content')
                        ->has('author')
                )
        );
});

test('authenticated users can edit their notes', function () {
    $user = User::factory()->create();
    $note = Note::factory()->create(['author_id' => $user->id]);

    $response = $this
        ->actingAs($user)
        ->get(route('notes.edit', $note));

    $response
        ->assertInertia(
            fn(AssertableInertia $page) => $page
                ->component('Notes/Edit')
                ->has('note')
        );

    $updatedData = [
        'title' => 'Updated Title',
        'content' => 'Updated content',
    ];

    $response = $this
        ->actingAs($user)
        ->put(route('notes.update', $note), $updatedData);

    $response->assertRedirect(route('notes.show', $note));
    $this->assertDatabaseHas('notes', [
        'id' => $note->id,
        'title' => 'Updated Title',
        'content' => 'Updated content',
    ]);
});

test('authenticated users can delete their notes', function () {
    $user = User::factory()->create();
    $note = Note::factory()->create(['author_id' => $user->id]);

    $response = $this
        ->actingAs($user)
        ->delete(route('notes.destroy', $note));

    $response->assertRedirect(route('notes.index'));
    $this->assertDatabaseMissing('notes', ['id' => $note->id]);
});

test('notes require a title', function () {
    $user = User::factory()->create();

    $response = $this
        ->actingAs($user)
        ->post(route('notes.store'), [
            'content' => 'Test content',
        ]);

    $response->assertSessionHasErrors(['title']);
});

test('notes require content', function () {
    $user = User::factory()->create();

    $response = $this
        ->actingAs($user)
        ->post(route('notes.store'), [
            'title' => 'Test Title',
        ]);

    $response->assertSessionHasErrors(['content']);
});

test('markdown content is converted to html when viewing note', function () {
    $user = User::factory()->create();
    $note = Note::factory()->create([
        'author_id' => $user->id,
        'content' => '# Hello World',
    ]);

    $response = $this
        ->actingAs($user)
        ->get(route('notes.show', $note));

    $response
        ->assertInertia(
            fn(AssertableInertia $page) => $page
                ->component('Notes/Show')
                ->has('note.html_content')
                ->where('note.html_content', "<h1>Hello World</h1>\n")
        );
});
