<script setup>
import { Head, Link } from "@inertiajs/vue3";
import dayjs from "dayjs";


defineProps({
    note: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <Head :title="note.title" />
    <div class="container mx-auto p-4">
        <div class="max-w-2xl mx-auto">
            <div class="mb-6 flex justify-between items-center">
                <Link :href="route('notes.index')" class="btn btn-ghost">
                    <span class="mr-2">←</span> Back to Notes
                </Link>
                <div class="space-x-2">
                    <Link
                        :href="route('notes.edit', note.id)"
                        class="btn btn-primary"
                    >
                        Edit Note
                    </Link>
                    <Link
                        :href="route('notes.destroy', note.id)"
                        method="delete"
                        as="button"
                        class="btn btn-error"
                    >
                        Delete
                    </Link>
                </div>
            </div>

            <div class="prose max-w-none">
                <h1>{{ note.title }}</h1>
                <div class="text-sm text-base-content/70">
                    Created {{ dayjs(note.created_at).format('MMM D, YYYY') }} by {{ note.author.name }}
                    <span v-if="note.updated_at !== note.created_at">
                        • Updated {{ dayjs(note.updated_at).format('MMM D, YYYY') }}
                    </span>
                </div>
                <div class="mt-6" v-html="note.html_content"></div>
            </div>
        </div>
    </div>
</template>
