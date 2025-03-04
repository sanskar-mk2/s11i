<script setup>
import { Head, useForm } from "@inertiajs/vue3";

const form = useForm({
    email: "",
    password: "",
});

const submit = () => {
    form.post(route("login"), {
        onSuccess: () => form.reset("password"),
        onError: () => form.reset("password"),
    });
};
</script>

<template>
    <Head title="Login" />
    <div class="flex items-center justify-center h-screen">
        <div class="w-full max-w-md">
            <form @submit.prevent="submit" class="flex flex-col gap-4">
                <fieldset
                    class="fieldset bg-base-200 border border-base-300 p-4"
                >
                    <legend class="fieldset-legend">Login</legend>

                    <div class="space-y-4">
                        <div>
                            <input
                                v-model="form.email"
                                type="email"
                                class="input w-full"
                                placeholder="Email"
                                required
                            />
                            <p v-if="form.errors.email" class="text-error">
                                {{ form.errors.email }}
                            </p>
                        </div>

                        <div>
                            <input
                                v-model="form.password"
                                type="password"
                                class="input w-full"
                                placeholder="Password"
                                required
                            />
                            <p v-if="form.errors.password" class="text-error">
                                {{ form.errors.password }}
                            </p>
                        </div>
                    </div>

                    <p class="fieldset-label">
                        Please enter your credentials to access your account
                    </p>

                    <div class="flex justify-end mt-4">
                        <button
                            class="btn btn-primary"
                            type="submit"
                            :disabled="form.processing"
                        >
                            {{ form.processing ? "Logging in..." : "Login" }}
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</template>
