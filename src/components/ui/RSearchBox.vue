<script setup lang="ts">
const model = defineModel();
</script>

<template>
<div class="relative" data-hs-combo-box='{
      "groupingType": "tabs",
      "isOpenOnFocus": true,
      "apiUrl": "https://fakestoreapi.com/products",
      "apiGroupField": "category",
      "outputItemTemplate": "<div class=\"cursor-pointer p-2 space-y-0.5 w-full text-sm text-gray-800 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:focus:bg-neutral-700\" data-hs-combo-box-output-item><div class=\"flex justify-between items-center w-full\"><div data-hs-combo-box-output-item-field=\"title\" data-hs-combo-box-search-text data-hs-combo-box-value></div></div></div><span class=\"hidden hs-combo-box-selected:block\"><svg class=\"shrink-0 size-3.5 text-blue-600 dark:text-blue-500\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg></span></img></div>",
      "groupingTitleTemplate": "<button type=\"button\" class=\"capitalize py-1 px-2 inline-flex items-center gap-x-2 text-sm text-nowrap rounded-md border border-gray-200 bg-white text-gray-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-100 hs-combo-box-tab-active:bg-blue-600 hs-combo-box-tab-active:border-blue-600 hs-combo-box-tab-active:focus:border-blue-600 hs-combo-box-tab-active:text-white disabled:opacity-50 disabled:pointer-events-none dark:hs-combo-box-tab-active:bg-blue-500 dark:hs-combo-box-tab-active:text-white dark:hs-combo-box-tab-active:border-blue-500 dark:hs-combo-box-tab-active:focus:border-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700\"></button>",
      "tabsWrapperTemplate": "<div class=\"overflow-x-auto p-4 rounded-t-xl border-b border-gray-200 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700\"></div>"
    }'>
    <div class="relative max-w-96">
        <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3.5">
            <img src="@/assets/search.svg">
        </div>
        <input v-model="model"
        class="bg-gray-100 py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" type="text" role="combobox" aria-expanded="false" placeholder="Поиск" value="" data-hs-combo-box-input="">
    </div>
</div>
</template>