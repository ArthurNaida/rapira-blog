<script setup lang="ts">
import RLayoutMask from './RLayoutMask.vue';

const {topOffset} = withDefaults(defineProps<{
    topOffset: string
}>(), {
    topOffset: '0px'
});
</script>

<template>
    <div :class="`overflow-y-auto overflow-x-hidden fixed top-[${topOffset}] right-0 left-0 justify-center items-center w-full h-[calc(100vh-${topOffset})] max-h-full bg-black bg-opacity-30`">
        <div class="relative flex justify-center min-h-full h-fit my-10 -z-20">
            <RLayoutMask 
            :class="`top-[${topOffset}]`"
            :top-offset="topOffset"
            @click="$emit('touchMask')"/>
            <slot></slot>
        </div>
    </div>
</template>