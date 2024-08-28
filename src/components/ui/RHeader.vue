<script setup lang="ts">
import { ref } from 'vue';
import RLayoutMask from './RLayoutMask.vue';

interface Props {
    pages: Array<{
      path: string,
      title?: string,
    }>;
}
defineProps<Props>();

const showSidebar = ref(false);
const toggleSidebar = () => (showSidebar.value = !showSidebar.value)
</script>

<template>
    <header class="sticky top-0 z-30 bg-black h-[--header-height-tablet] tablet:h-[--header-height-desktop]">
        <button class="p-[22px] block tablet:hidden"
        @click="toggleSidebar">
            <img src="@/assets/nav.svg">
        </button>
        <div class="block tablet:hidden z-40 fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
        v-if="showSidebar">
            <div class="flex flex-row-reverse">
                <button class="pointer p-3.5"
                @click="toggleSidebar">
                    <img src="@/assets/close.svg">
                </button>
            </div>
            <ul class="flex gap-3 flex-col z-30">
                <li v-for="(page, index) in pages" :key="index">
                    <router-link 
                    class="text-gray-100 font-semibold inline-block border-0 w-full text-start rounded py-4 px-4" 
                    active-class="!text-blue-500 bg-white bg-opacity-10"
                    :to="page.path"
                    >{{ page.title }}</router-link>
                </li>
            </ul>
        </div>
        <RLayoutMask class="top-0 -z-50"
        v-if="showSidebar"
        @click="toggleSidebar"></RLayoutMask>
        <img class="p-1 tablet:p-0 tablet:pl-14" src="@/assets/logo.svg">
        <nav class="ml-20">
            <ul class="tablet:flex gap-7 hidden">
                <li v-for="(page, index) in pages" :key="index">
                    <router-link 
                    class="text-gray-100 font-semibold inline-block border-0 rounded py-2 px-4" 
                    active-class="!text-blue-500 bg-white bg-opacity-10"
                    :to="page.path"
                    >{{ page.title }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>