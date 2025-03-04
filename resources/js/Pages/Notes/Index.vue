<script setup>
import { Head, Link } from "@inertiajs/vue3";
import { inject } from "vue";

const route = inject("route");

defineProps({
    notes: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <Head title="Notes" />
    <div class="container mx-auto p-4">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold">Notes</h1>
            <Link :href="route('notes.create')" class="btn btn-primary">
                Create Note
            </Link>
        </div>

        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Created</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="note in notes" :key="note.id">
                        <td>
                            <Link
                                :href="route('notes.show', note.id)"
                                class="hover:text-primary"
                            >
                                {{ note.title }}
                            </Link>
                        </td>
                        <td>{{ note.created_at }}</td>
                        <td class="space-x-2">
                            <Link
                                :href="route('notes.edit', note.id)"
                                class="btn btn-sm"
                            >
                                Edit
                            </Link>
                            <Link
                                :href="route('notes.destroy', note.id)"
                                method="delete"
                                as="button"
                                class="btn btn-sm btn-error"
                            >
                                Delete
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template> 