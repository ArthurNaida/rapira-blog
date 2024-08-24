<script setup lang="ts">
import { RouterView } from 'vue-router'
import RHeader from './components/ui/RHeader.vue'
</script>

<template>
  <RHeader class="relative" :pages="[
    {path: '/', title: 'Главная'},
    {path: '/blog', title: 'Блог'}
  ]"/>
  <RouterView />
</template>
