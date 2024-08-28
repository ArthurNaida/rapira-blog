<script setup lang="ts">
import type Post from '../../types/post';
import RInfoBar from '../ui/RInfoBar.vue';
import RTagItemsList from '../RTagItemsList.vue';
import { bindSrc } from '@/hooks';

const {post} = defineProps<{
    post: Post
}>();
if (post.comments === undefined) {
    post.comments = [];
}
</script>

<template>
<div class="flex flex-col gap-2.5 max:w-[400px] md:w-[365px] phone:w-[325px] w-full cursor-pointer"
@click="$emit('showModal')">
    <img :src="post.imgsrc.toString()" width="400" height="250"
    class="rounded-xl object-cover phone:w-inherit w-full max:h-[250px] md:h-[220px] phone:h-[200px]">
    <RInfoBar :comments-length="post.comments?.length"/>
    <h2 class="font-semibold text-22">{{ post.title }}</h2>
    <span class="font-medium text-base">{{ post.description }}</span>
    <RTagItemsList :tags="post.tags"/>
</div>
</template>

