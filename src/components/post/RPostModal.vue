<script setup lang="ts">
import RInfoBar from '../ui/RInfoBar.vue';
import RTagItemsList from '../RTagItemsList.vue';
import type Post from '@/types/post';

const {post} = defineProps<{
    post: Post
}>();
</script>

<template>
<div class="flex flex-col p-4 gap-4 bg-white rounded-xl w-[630px]">
    <div class="flex flex-col gap-2.5">
        <h2 class="font-semibold text-24">{{ post.title }}</h2>
        <RInfoBar :comments-length="post.comments?.length"/>
    </div>
    <img :src="post.imgsrc" width="600"
    class="rounded-xl">
    <span class="font-medium text-base">{{ post.description }}</span>
    <RTagItemsList :tags="post.tags"/>
</div>
</template>
/* Frame 2702 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 10px;

width: 600px;
height: 154px;


/* Inside auto layout */
flex: none;
order: 3;
align-self: stretch;
flex-grow: 0;

