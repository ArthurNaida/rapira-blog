<script setup lang="ts">
import RPostCard from './post/RPostCard.vue';
import type Post from '../../types/post';
const props = defineProps<{
    cards: Post[]
}>();
</script>

<template>
<div class="grid grid-cols-3 gap-5 gap-y-10">
    <div class=""
    v-for="(card, index) in cards" :key="index">
        <RPostCard 
        :imgsrc="card.imgsrc"
        :title="card.title"
        :comments="card.comments"
        :description="card.description"
        :tags="card.tags"/>
    </div>
</div>
</template>