<script setup lang="ts">
import RPostCard from './post/RPostCard.vue';
const props = defineProps<{
    cards: any[]
}>();
</script>

<template>
<div class="grid grid-cols-3 gap-5 gap-y-10">
    <div class=""
    v-for="(card, index) in cards" :key="index">
        <RPostCard/>
    </div>
</div>
</template>