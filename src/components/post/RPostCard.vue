<script setup lang="ts">
// import RTagItem from '../ui/RTagItem.vue';
import type Post from '../../types/post';
import RInfoBar from '../ui/RInfoBar.vue';
import RTagItemsList from '../RTagItemsList.vue';

const {post} = defineProps<{
    post: Post
}>();
if (post.comments === undefined) {
    post.comments = [];
}
</script>

<template>
<div class="flex flex-col gap-2.5 w-[400px] cursor-pointer"
@click="$emit('showModal')">
    <img :src="post.imgsrc" width="400" height="250"
    class="rounded-xl object-cover w-[400px] h-[250px]">
    <RInfoBar :comments-length="post.comments?.length"/>
    <h2 class="font-semibold text-22">{{ post.title }}</h2>
    <span class="font-medium text-base">{{ post.description }}</span>
    <!-- <div class="flex flex-wrap gap-2.5">
        <RTagItem v-for="(tagTitle, index) in post.tags" :key="index" :title="tagTitle"/>
    </div> -->
    <RTagItemsList :tags="post.tags"/>
</div>
</template>

