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
const onFocus = ref<boolean>(false);

const overflowComment = computed(() => (model?.value.length > maxCommentLength))
</script>

<template>
<div class="flex flex-col gap-2.5">
    <div class="flex gap-1.5">
        <h3 class="font-semibold">{{ capitalizeFirstLetter(commentLabel) }}</h3>
        <span class="text-gray-600">{{ comments?.length }}</span>
    </div>
    <textarea placeholder="Введите комментарий" class="resize-none p-3.5 border-gray-200 border-[2px] rounded-md h-[52px] 
    placeholder:font-medium placeholder:text-sm placeholder:text-gray-400
    outline-none focus:h-[131px]"
    :class="{
        'focus:border-danger focus:shadow-input-danger': overflowComment,
        'focus:border-primary focus:shadow-input-primary': !overflowComment
    }"
    @focus="onFocus = true"
    @focusout="onFocus = false"
    v-model="model"></textarea>
    <span class="font-medium text-xs text-gray-600"
    v-if="onFocus">
        <span class="text-xs" 
        :class="{'text-danger': overflowComment}">{{ model?.length }}</span> 
        из {{ maxCommentLength }} символов
    </span>
    <div class="flex justify-end gap-2.5"
    v-if="onFocus">
        <RActionButton :role="'secondary'">Отмена</RActionButton>
        <RActionButton 
        :role="!overflowComment ? 'primary' : 'disabled'">
            Опубликовать
        </RActionButton>
    </div>
</div>
</template>
/* 18 из 250 символов */

width: 600px;
height: 12px;

/* Body/B-12-12-500 */
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 12px;
/* identical to box height, or 100% */

/* Gray/Gray-600 */
color: #7E8299;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


