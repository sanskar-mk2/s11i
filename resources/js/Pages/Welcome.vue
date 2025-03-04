<script setup>
import { Head } from "@inertiajs/vue3";
import { onMounted } from "vue";

const props = defineProps({
    value: {
        type: String,
        required: true,
    },
});

onMounted(() => {
    console.log(props.value);
});
</script>

<template>
    <Head title="Welcome" />
    <div
        class="flex items-center justify-center w-full transition-opacity opacity-100 duration-750 lg:grow starting:opacity-0"
    >
        <main
            class="prose flex max-w-[335px] w-full flex-col-reverse lg:max-w-4xl lg:flex-row"
        >
            <div v-html="value"></div>
        </main>
    </div>
</template>
