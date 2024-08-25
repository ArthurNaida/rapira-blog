<script setup lang="ts">
import RInfoBar from '../ui/RInfoBar.vue';
import RTagItemsList from '../RTagItemsList.vue';
import RCommentBlock from '../RCommentBlock.vue';
import type Post from '@/types/post';

const {post} = defineProps<{
    post: Post
}>();
post.comments?.push('gugu')
</script>

<template>
<div class="flex flex-col p-4 gap-4 bg-white rounded-xl w-[630px]">
    <div class="flex flex-col gap-2.5">
        <h2 class="font-semibold text-24">{{ post.title }}</h2>
        <RInfoBar :comments-length="post.comments?.length"/>
    </div>
    <img :src="post.imgsrc" width="600" height="373"
    class="rounded-xl object-cover w-[600px] h-[373px]">
    <span class="font-medium text-base">{{ post.description }}</span>
    <RTagItemsList :tags="post.tags"/>
    <RCommentBlock :comments="post.comments" :max-comment-length="250"/>
</div>
</template>

