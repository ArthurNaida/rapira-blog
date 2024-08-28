<script setup lang="ts">
import RInfoBar from '../ui/RInfoBar.vue';
import RTagItemsList from '../RTagItemsList.vue';
import RCommentBlock from '../RCommentBlock.vue';
import RCloseButton from '../ui/RCloseButton.vue';
import { bindSrc } from '@/hooks';
import type Post from '@/types/post';

const {post} = defineProps<{
    post: Post
}>();
</script>

<template>
<div class="relative h-fit flex flex-col p-4 gap-4 bg-white rounded-xl w-[630px]">
    <RCloseButton class="absolute right-[21px] top-[23px]"
    @click="$emit('closeModal')"/>
    <div class="flex flex-col gap-2.5">
        <h2 class="font-semibold text-24">{{ post.title }}</h2>
        <RInfoBar :comments-length="post.comments?.length"/>
    </div>
    <img :src="post.imgsrc.toString()" width="600" height="373"
    class="rounded-xl object-cover w-[600px] h-[373px]">
    <span class="font-medium text-base">{{ post.description }}</span>
    <RTagItemsList :tags="post.tags"/>
    <RCommentBlock :comments="post.comments" :max-comment-length="250"/>
</div>
</template>

