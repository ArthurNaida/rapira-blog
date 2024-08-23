<template>
<div class="relative inline-flex items-center">
  <button @click="$emit('onOpen', dropdownOpen); dropdownOpen = !dropdownOpen" id="dropdown-default" type="button" class="text-gray-500 inline-flex items-center gap-x-2 text-sm font-medium disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    {{ dropdownOpen ? labelOpen : labelHidden }}
    <svg :class="{'rotate-180': dropdownOpen}"
    class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </button>
</div>
</template>

<script setup lang="ts">
const props = defineProps<{
    labelOpen: string,
    labelHidden: string
}>();
const emit = defineEmits<{
    onOpen: [value: boolean]
}>();
import { ref } from 'vue';
const dropdownOpen = ref(false);
</script>
/* Фильтр */

width: 52px;
height: 14px;

/* Body/B-14-14-500 */
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 14px;
/* identical to box height, or 100% */

/* Gray/Gray-500 */
color: #A1A5B7;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
