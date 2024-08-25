<script setup lang="ts">
const props = defineProps<{
    role: 'primary' | 'secondary' | 'disabled'
}>();
</script>

<template>
    <button class="flex items-center justify-center py-3 px-4 min-w-[120px] max-w-fit  h-[38px] rounded-md font-semibold text-sm"
    :class="{
        'bg-secondary text-primary': role === 'secondary',
        'bg-primary text-white': role === 'primary',
        'bg-gray-100 text-gray-400 cursor-default': role === 'disabled'
    }">
        <slot></slot>
    </button>
</template>
/* Button */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 16px;
gap: 10px;

width: 120px;
height: 38px;

/* Primary/Primary-Light */
background: #EEF6FF;
border-radius: 6px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 1;
