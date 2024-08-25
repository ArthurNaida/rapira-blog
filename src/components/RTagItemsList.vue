<script setup lang="ts">
import RTagItem from './ui/RTagItem.vue';

const {tags} = defineProps<{
    tags: string[]
}>();
console.log(tags)
</script>

<template>
    <div class="flex flex-wrap gap-2.5">
        <RTagItem v-for="(tagTitle, index) in tags" :key="index" :title="tagTitle"/>
    </div>
</template>