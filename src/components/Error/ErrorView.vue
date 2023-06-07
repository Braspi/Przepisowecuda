<template>
    <div class="h-[calc(100vh-200px)] flex items-center justify-center">
        <h1 class="text-4xl font-semibold text-center pr-3 border-r-2">{{ props.code }}</h1>
        <h3 class="text-3xl pl-3">{{ props.message }}</h3>
    </div>
</template>
<script setup>
const props = defineProps({
    message: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        required: true
    }
})
</script>