<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import RHeader from './components/ui/RHeader.vue'
</script>

<template>
  <RHeader class="relative" :pages="[
    {path: '/', title: 'Главная'},
    {path: '/blog', title: 'Блог'}
  ]"/>

  <RouterView />
</template>

<style scoped>
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
</style>
