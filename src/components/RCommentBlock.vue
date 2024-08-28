<script setup lang="ts">
import { capitalizeFirstLetter, useCommentLabel } from '@/hooks';
import { computed, ref } from 'vue';
import RActionButton from './ui/RActionButton.vue';

const {comments, maxCommentLength} = defineProps<{
    comments: string[],
    maxCommentLength: number
}>();

const model = defineModel<string>();
model.value = '';

const commentLabel = useCommentLabel(comments?.length);
const updateComments = ():void => {
    if (model?.value.length !== 0 && !overflowComment.value ) {
        comments.unshift(model?.value)
    }
}
const clearArea = ():void => {
    onFocus.value = false;
    model.value = '';
}

const onFocus = ref<boolean>(false);

const overflowComment = computed(() => (model?.value.length > maxCommentLength))
</script>

<template>
<div class="flex flex-col gap-2.5">
    <div class="flex flex-col gap-2.5">
        <div class="flex gap-1.5">
            <h3 class="font-semibold">{{ capitalizeFirstLetter(commentLabel) }}</h3>
            <span class="text-gray-600">{{ comments?.length }}</span>
        </div>
        <textarea placeholder="Введите комментарий" class="resize-none p-3.5 border-gray-200 border-[2px] rounded-md h-[52px] 
        placeholder:font-medium placeholder:text-sm placeholder:text-gray-400
        outline-none"
        :class="{
            'h-[131px]': onFocus,
            'focus:border-danger focus:shadow-input-danger': overflowComment,
            'focus:border-primary focus:shadow-input-primary': !overflowComment
        }"
        @focusin="onFocus = true"
        v-model="model"></textarea>
        <span class="font-medium text-xs text-gray-600"
        v-if="onFocus">
            <span class="text-xs" 
            :class="{'text-danger': overflowComment}">{{ model?.length }}</span> 
            из {{ maxCommentLength }} символов
        </span>
        <div class="flex justify-end gap-2.5"
        v-if="onFocus">
            <RActionButton 
            @click="clearArea"
            :role="'secondary'">
                Отмена
            </RActionButton>
            <RActionButton 
            @click="updateComments"
            :role="!overflowComment ? 'primary' : 'disabled'">
                Опубликовать
            </RActionButton>
        </div>
    </div>
    <div class="mt-3">
        <div class="flex pb-3 pl-3 gap-3"
        v-for="(comment, index) in comments" :key="index">
            <img src="/src/assets/pics/face.png" width="38" height="38"
            class="[clip-path:circle(50%)] bg-gray-200 h-fit">
            <div class="flex flex-col gap-1.5">
                <span class="text-gray-900 leading-4 font-semibold">Мира Гусева</span>
                <p class="text-gray-800 font-medium text-14 break-all">{{ comment }}</p>
                <label class=" text-gray-500 font-medium text-xs">9.04.2024 в 14:54</label>
            </div>
        </div>
    </div>
</div>
</template>


