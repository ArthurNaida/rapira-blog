<script setup lang="ts">
import RSearchBox from './ui/RSearchBox.vue';
import RDropdownButton from './ui/RDropdownButton.vue';
import RTagButton from './ui/RTagButton.vue';
import RTagsList from './RTagsList.vue';
import { ref } from 'vue';

const showTags = ref(true);
</script>

<template>
<div class="container mx-auto">
  <div class="h-20 flex justify-between">
    <div class="flex items-center gap-10">
        <h1 class="font-bold text-gray-900 text-3xl">Блог</h1>
        <RSearchBox/>
    </div>
    <RDropdownButton @on-open="(e) => showTags = e" :label-open="'Фильтр'" :label-hidden="'Скрыть фильтр'"/>
  </div>
  <RTagsList class="py-5" v-if="showTags" />
</div>
</template>

