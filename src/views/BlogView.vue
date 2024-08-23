<script setup lang="ts">
// import RPostCard from '@/components/post/RPostCard.vue';
import RPostsList from '@/components/RPostsList.vue';
import RSearchBar from '@/components/RSearchBar.vue';
</script>

<template>
<div class="h-max">
    <div class="bg-white">
        <RSearchBar/>
    </div>
    <div class="bg-white my-5 mx-auto p-7 rounded-xl w-fit">
        <!-- <RPostCard/> -->
         <RPostsList :cards="[2, 'rtty',  ]"/>
    </div>
</div>
</template>

