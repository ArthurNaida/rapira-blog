<script setup lang="ts">
import RSearchBox from './ui/RSearchBox.vue';
import RDropdownButton from './ui/RDropdownButton.vue';
import RTagsList from './RTagsList.vue';
import { computed, ref } from 'vue';
import { usePostsStore } from '@/posts-store';
import type Post from '@/types/post';

const showTags = ref<boolean>(true);
const inputText = ref<string>('');
const { posts } = usePostsStore();

defineEmits<{
  onInput: [value: Post[]]
}>();

const filteredPosts = computed(() => {
  return posts.filter((post: Post) => (post.title + post.description).toLowerCase()
  .includes(inputText.value.toLowerCase().trim()))
})
</script>

<template>
<div class="container mx-auto">
  <div class="h-20 flex justify-between mx-5">
    <div class="flex items-center gap-10">
        <h1 class="font-bold text-gray-900 text-3xl">Блог</h1>
        <RSearchBox @input="$emit('onInput', filteredPosts)" v-model="inputText"/>
    </div>
    <RDropdownButton @on-open="(e) => showTags = e" :label-open="'Фильтр'" :label-hidden="'Скрыть фильтр'"/>
  </div>
  <RTagsList class="py-5 mx-5" v-if="showTags"/>
</div>
</template>

