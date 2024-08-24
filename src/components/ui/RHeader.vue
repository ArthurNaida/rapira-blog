<template>
    <header class="bg-black h-16">
        <img class="pl-14" src="../../assets/logo.svg" alt="">
        <nav class=" ml-20">
            <ul class="flex gap-7">
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

<script setup lang="ts">
interface Props {
    pages: Array<{
      path: string,
      title?: string,
    }>;
}
defineProps<Props>();
</script>
