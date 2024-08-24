<script setup lang="ts">
// import RPostCard from '@/components/post/RPostCard.vue';
import RPostsList from '@/components/RPostsList.vue';
import RSearchBar from '@/components/RSearchBar.vue';
import { usePostsStore } from '@/posts-store';
import type Post from '@/types/post';
import { ref } from 'vue';

const store = usePostsStore();
const filteredPosts = ref<Post[]>(store.posts);
</script>

<template>
<div class="h-max">
    <div class="bg-white">
        <RSearchBar @on-input="(e) => filteredPosts = e"/>
    </div>
    <div v-if="filteredPosts.length" class="bg-white my-5 mx-auto p-7 rounded-xl w-fit">
        <RPostsList :cards="filteredPosts"/>
    </div>
</div>
</template>

