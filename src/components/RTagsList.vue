<script setup lang="ts">
import RTagButton from './ui/RTagButton.vue';
</script>

<template>
<div class="flex flex-wrap gap-2 items-center">
    <RTagButton :title="'Город'"/>
    <RTagButton :title="'Природа'"/>
    <RTagButton :title="'Люди'"/>
    <RTagButton :title="'Животные'"/>
    <RTagButton :title="'Еда'"/>
    <RTagButton :title="'Напитки'"/>
    <RTagButton :title="'Архитектура'"/>
    <RTagButton :title="'Искусство'"/>
</div>
</template>