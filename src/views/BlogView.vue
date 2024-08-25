<script setup lang="ts">
// import RPostCard from '@/components/post/RPostCard.vue';
import RPostsList from '@/components/RPostsList.vue';
import RSearchBar from '@/components/RSearchBar.vue';
import { usePostsStore } from '@/posts-store';
import { useTagsStore } from '@/tags-store';
import type Post from '@/types/post';
import type Tag from '@/types/tag';
import { ref, computed } from 'vue';

const {posts} = usePostsStore();
const {tags} = useTagsStore();

const filteredPostsByText = ref<Post[]>(posts);
const filteredPostsByTags = computed(() => {
    Array.prototype.includesAll = function<T>(arr: Array<T>) {return arr.every((e: T) => (this.includes(e)))};
    const checkedTags = tags.filter((tag: Tag) => (tag.checked)).map((tag: Tag) => (tag.title))
    console.log(checkedTags, posts[0].tags, posts[0].tags.includes(checkedTags[0]))
    return posts.filter((post: Post) => (post.tags.includesAll(checkedTags)))
})
const filteredPosts = computed(() => {
  return filteredPostsByTags.value.filter((post: Post) => (filteredPostsByText.value.includes(post)))
})
</script>

<template>
<div class="h-max">
    <div class="bg-white">
        <RSearchBar @on-input="(e) => filteredPostsByText = e"/>
    </div>
    <div v-if="filteredPosts.length" class="bg-white my-5 mx-auto p-7 rounded-xl w-fit">
        <RPostsList :cards="filteredPosts"/>
    </div>
</div>
</template>

