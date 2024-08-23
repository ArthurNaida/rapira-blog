<script setup lang="ts">
const props = defineProps<{
    title: string
}>();
</script>

<template>
<div class="rounded-2.5xl bg-secondary text-primary-active w-fit h-fit font-medium py-1.5 px-3.5 text-sm">
    {{ props.title }}
</div>
</template>
