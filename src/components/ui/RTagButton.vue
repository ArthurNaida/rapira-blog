<script setup lang="ts">
import { provide } from 'vue';

const props = defineProps<{
    title: string,
    checked?: boolean
}>();
defineEmits<{
    onChecked: [value: Event]
}>();
</script>

<template>
<input type="checkbox" class="hidden"
:id="props.title" 
@input="(e) => $emit('onChecked', e)" 
:checked="props.checked">
<label :for="props.title" 
:class="{'bg-primary text-white': checked, 'bg-secondary text-primary-active': !checked}"
class="cursor-pointer flex py-2 px-3.5 rounded-2xl gap-2.5 w-fit h-fit font-medium">
    {{ props.title }}
    <img v-if="checked" src="../../assets/check.svg">
    <img v-else src="../../assets/plus.svg" alt="">
</label>
</template>

