<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(false)
const props = defineProps<{
    title: string
}>();
</script>

<template>
<button @click="checked = !checked" 
:class="{'bg-primary text-white': checked, 'bg-secondary text-primary-active': !checked}"
class="flex py-2 px-3.5 rounded-2xl gap-2.5 w-fit h-fit font-medium">
    {{ props.title }}
    <img v-if="checked" src="../../assets/check.svg">
    <img v-else src="../../assets/plus.svg" alt="">
</button>
</template>
/* Город */

width: 48px;
height: 16px;

/* Body/B-16-16-500 */
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 16px;
/* identical to box height, or 100% */
text-align: center;

/* Primary/Primary-Active */
color: #2884EF;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

