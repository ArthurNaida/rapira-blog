<script setup lang="ts">
import RPostsList from '@/components/RPostsList.vue';
import RPostModal from '@/components/post/RPostModal.vue';
import RSearchBar from '@/components/RSearchBar.vue';
import RModalWrapper from '@/components/ui/RModalWrapper.vue';
import { usePostsStore } from '@/posts-store';
import { useTagsStore } from '@/tags-store';
import type Post from '@/types/post';
import type Tag from '@/types/tag';
import { ref, computed, watch } from 'vue';

const {posts} = usePostsStore();
const {tags} = useTagsStore();

const targetPost = ref<Post | null>(null);
const showModal = ref<boolean>(false);
const toggleModal = () => (showModal.value = !showModal.value)
watch(showModal, () => {
    if (showModal.value) {
        document.body.classList.add("overflow-y-hidden");
        console.log(document.body.classList, showModal)
    } else {

        console.log(showModal)
        document.body.classList.remove("overflow-y-hidden");
        console.log(document.body.classList)
    }
})

const filteredPostsByText = ref<Post[]>(posts);
const filteredPostsByTags = computed(() => {
    Array.prototype.includesAll = function<T>(arr: Array<T>) {
        return arr.every((e: T) => (this.includes(e)))
    };
    const checkedTags = tags.filter((tag: Tag) => (tag.checked)).map((tag: Tag) => (tag.title))
    console.log(checkedTags, posts[0].tags, posts[0].tags.includes(checkedTags[0]))
    return posts.filter((post: Post) => (post.tags.includesAll(checkedTags)))
})
const filteredPosts = computed(() => {
  return filteredPostsByTags.value.filter((post: Post) => (filteredPostsByText.value.includes(post)))
})
</script>

<template>
<div class="h-max">
    <div class="bg-white"> 
        <RSearchBar @on-input="(e) => filteredPostsByText = e"/>
    </div>
    <div v-if="filteredPosts.length" class="bg-white my-5 phone:mx-auto mx-2 tablet:p-7 p-4 rounded-xl w-fit">
        <RPostsList 
        :cards="filteredPosts"
        @show-modal="(post) => (targetPost = post, toggleModal())"/>
    </div>
    <!-- <div class="overflow-y-auto overflow-x-hidden fixed top-[var(--header-height-desktop)] right-0 left-0 justify-center items-center w-full h-[calc(100vh-var(--header-height))] max-h-full bg-black bg-opacity-30"
    v-if="showModal">
        <div class="relative flex justify-center min-h-full h-fit my-10 -z-20">
            <div class="fixed top-[var(--header-height-desktop)] h-full w-full bg-black bg-opacity-30 -z-10"
            @click="toggleModal"></div>
            <RPostModal :post="targetPost"
            @close-modal="showModal = false"/>
        </div>
    </div> -->
    <RModalWrapper 
    v-if="showModal"
    :top-offset="'var(--header-height-desktop)'"
    @touchMask="toggleModal">
        <RPostModal :post="targetPost"
        @close-modal="showModal = false"/>
    </RModalWrapper>
</div>
</template>

