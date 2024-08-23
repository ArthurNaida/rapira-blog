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
         <RPostsList :cards="[
            {
                imgsrc: '/src/assets/pics/1.jpg',
                title: 'Вдохновение в каждом шаге',
                description: 'Наши путешественники находят вдохновение в каждом шаге своего пути.',
                comments: ['sababa'],
                tags: ['Природа', 'Люди']
            },
            {
                imgsrc: '/src/assets/pics/2.jpg',
                title: 'Моменты тишины и покоя',
                description: 'В такие моменты наши фотографы ощущают гармонию и умиротворение.',
                comments: ['sababa', 'kuleku'],
                tags: ['Природа', 'Люди']
            },
            {
                imgsrc: '/src/assets/pics/3.png',
                title: 'Цвета природы в наших руках',
                description: 'Наши художники выражают всю красоту окружающего мира через творчество.',
                comments: ['sababa', 'kuleku'],
                tags: ['Природа', 'Люди']
            },
            {
                imgsrc: '/src/assets/pics/4.png',
                title: 'Семейные узы в дикой природе',
                description: 'Наблюдая за этими сценами, наши фотографы чувствуют тепло и единство.',
                comments: ['sababa', 'kuleku'],
                tags: ['Природа', 'Люди']
            },
            {
                imgsrc: '/src/assets/pics/5.png',
                title: 'Гармония городских и природных пейзажей ',
                description: 'Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии.',
                comments: ['sababa', 'kuleku'],
                tags: ['Природа', 'Люди']
            },
            {
                imgsrc: '/src/assets/pics/6.png',
                title: 'Моменты, которые остаются в сердце ',
                description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
                comments: ['sababa', 'kuleku'],
                tags: ['Природа', 'Люди']
            },
         ]"/>
    </div>
</div>
</template>

