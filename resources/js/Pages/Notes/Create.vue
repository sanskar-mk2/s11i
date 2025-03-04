<script setup>
import { Head, useForm, Link } from "@inertiajs/vue3";
import { inject } from "vue";

const route = inject("route");

const form = useForm({
    title: "",
    content: "",
});

const submit = () => {
    form.post(route("notes.store"));
};
</script>

<template>
    <Head title="Create Note" />
    <div class="container mx-auto p-4">
        <div class="max-w-2xl mx-auto">
            <form @submit.prevent="submit" class="space-y-6">
                <fieldset class="fieldset bg-base-200 border border-base-300 p-4">
                    <legend class="fieldset-legend">Create Note</legend>

                    <div class="space-y-4">
                        <div>
                            <label class="label">Title</label>
                            <input
                                v-model="form.title"
                                type="text"
                                class="input w-full"
                                required
                            />
                            <p v-if="form.errors.title" class="text-error mt-1">
                                {{ form.errors.title }}
                            </p>
                        </div>

                        <div>
                            <label class="label">Content</label>
                            <textarea
                                v-model="form.content"
                                class="textarea w-full h-32"
                                required
                            ></textarea>
                            <p v-if="form.errors.content" class="text-error mt-1">
                                {{ form.errors.content }}
                            </p>
                        </div>
                    </div>

                    <div class="flex justify-end gap-2 mt-6">
                        <Link :href="route('notes.index')" class="btn">
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            class="btn btn-primary"
                            :disabled="form.processing"
                        >
                            {{ form.processing ? "Creating..." : "Create Note" }}
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</template> 