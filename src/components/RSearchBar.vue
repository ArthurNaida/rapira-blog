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
<div class="phone:container phone:mx-auto mx-2.5">
  <div class="sm:h-20 h-fit py-3 sm:py-0 flex justify-between sm:mx-5">
    <div class="flex items-center gap-10">
        <h1 class="font-bold text-gray-900 sm:text-3xl text-2xl">Блог</h1>
        <RSearchBox class="sm:block hidden w-96"
        @input="$emit('onInput', filteredPostsByText)" 
        v-model="inputText"/>
    </div>
    <RDropdownButton @on-open="(e) => showTags = e" :label-open="'Фильтр'" :label-hidden="'Скрыть фильтр'"/>
  </div>
  <div class="flex justify-center sm:hidden pb-3 sm:pb-0">
    <RSearchBox class="w-[375px]"
    @input="$emit('onInput', filteredPostsByText)" 
    v-model="inputText"/>
  </div>
  <RTagButtonsList class="py-5 mx-5" v-if="showTags"/>
</div>
</template>

