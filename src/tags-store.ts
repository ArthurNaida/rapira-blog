import { defineStore } from "pinia";
import { ref } from "vue";

export const useTagsStore = defineStore('tags', () => {
    const tags = ref<Tag[]>([
        {title: "Город"}, 
        {title: "Природа"},  
        {title: "Люди"}, 
        {title: "Животные"}, 
        {title: "Еда"}, 
        {title: "Архитектура"}, 
        {title: "Напитки"}, 
        {title: "Искусство"},
    ]);
    tags.value.forEach((tag) => tag.checked = false);
    return { tags };
})