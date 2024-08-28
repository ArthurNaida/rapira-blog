<script setup lang="ts">
import { stubSVGPath } from '@/assets-path';
import { stubSearchSVGPath } from '@/assets-path';

const {title, description, type} = defineProps<{
    title: string,
    description: string,
    type: 'view' | 'search'
}>();
</script>

<template>
<div class="flex flex-col">
    <img class="mx-auto" 
    v-if="type"
    :src="type === 'view' ? stubSVGPath.toString() : stubSearchSVGPath.toString()">
    <div class="mt-2">
        <span class="w-full block font-medium text-gray-500 text-center text-sm">{{ title }}</span>
        <span class="w-full block font-medium text-gray-400 text-center text-xs leading-5 mt-1">{{ description }}</span>
    </div>
</div>
</template>