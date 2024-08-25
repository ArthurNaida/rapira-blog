<script setup lang="ts">
import RSearchBox from './ui/RSearchBox.vue';
import RDropdownButton from './ui/RDropdownButton.vue';
import RTagButtonsList from './RTagButtonsList.vue';
import { computed, ref } from 'vue';
import { usePostsStore } from '@/posts-store';
import type Post from '@/types/post';
// import type Tag from '@/types/tag';
// import { useTagsStore } from '@/tags-store';

const showTags = ref<boolean>(true);
const inputText = ref<string>('');
const { posts } = usePostsStore();

defineEmits<{
  onInput: [value: Post[]]
}>();

const filteredPostsByText: Array<Post> = computed(() => {
  Array.prototype.includesAll = function<T>(arr: Array<T>) {return arr.every((e: T) => (this.includes(e)))};
  const separateString = ((string: string) => string?.toLowerCase().trim().replace(/[.,]/g, '').split(' '));
  const targetWords = (post: Post) => (separateString(post.title).concat(separateString(post.description)));
  const inputWords = separateString(inputText.value);
  if (inputText.value.trim().length === 0) {
    return posts;
  } else {
    return posts.filter((post: Post) => (targetWords(post).includesAll<string>(inputWords)));
  }
})
</script>

<template>
<div class="container mx-auto">
  <div class="h-20 flex justify-between mx-5">
    <div class="flex items-center gap-10">
        <h1 class="font-bold text-gray-900 text-3xl">Блог</h1>
        <RSearchBox @input="$emit('onInput', filteredPostsByText)" v-model="inputText"/>
    </div>
    <RDropdownButton @on-open="(e) => showTags = e" :label-open="'Фильтр'" :label-hidden="'Скрыть фильтр'"/>
  </div>
  <RTagButtonsList class="py-5 mx-5" v-if="showTags"/>
</div>
</template>

