<script setup lang="ts">
import RPostCard from './post/RPostCard.vue';
import type Post from '../../types/post';
const {cards} = defineProps<{
    cards: Post[]
}>();

defineEmits<{
    showModal: [value: Post]
}>();
</script>

<template>
<div class="grid grid-cols-3 gap-5 gap-y-10">
    <div class=""
    v-for="(cardContent, index) in cards" :key="index">
        <RPostCard
        @show-modal="$emit('showModal', cardContent)"
        :post="cardContent"/>
    </div>
</div>
</template>