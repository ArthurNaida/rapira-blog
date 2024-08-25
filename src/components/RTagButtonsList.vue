<script setup lang="ts">
import { useTagsStore } from '@/tags-store';
import RTagButton from './ui/RTagButton.vue';

const { tags } = useTagsStore();
</script>

<template>
<div class="flex flex-wrap gap-2 items-center">
    <RTagButton  
    @on-checked="(e) => (tag.checked = e.target.checked)"
    v-for="(tag, index) in tags" :key="index"
    :title="tag.title"
    :checked="tag.checked"/>
</div>
</template>