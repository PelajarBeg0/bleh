<template>
    <section class="flex flex-col items-center px-20 mt-8 w-full max-md:px-5 max-md:mt-6 max-md:max-w-full">
      <h1 class="self-start text-4xl font-bold tracking-tighter leading-none text-gray-800">
        All Categories
      </h1>
      <div class="self-stretch mt-6 max-md:mt-4 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <CategoryCard
            v-for="(category, index) in categories"
            :key="index"
            :icon="category.icon"
            :title="category.title"
            :description="category.description"
            :is-highlighted="category.isHighlighted"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import CategoryCard from './CategoryCard.vue';
  
  export default defineComponent({
    name: 'AllCategories',
    components: {
      CategoryCard,
    },
    data() {
      return {
        categories: [
          {
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ce335824448cbad56f38896330200d6bf9ede337a7a65aedb9c940df72afce49?placeholderIfAbsent=true&apiKey=31c70b81d0f943a5b97da93940e5fb30',
            title: 'Business',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            isHighlighted: false,
          },
          {
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8250d9eefae9b2ecf2f0f6780643200066ef7c25d353e7234f691aad66dec9e8?placeholderIfAbsent=true&apiKey=31c70b81d0f943a5b97da93940e5fb30',
            title: 'Startup',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            isHighlighted: true,
          },
          {
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/637773575d198fc5286fb0be6c342361f8e09c2c7af65a52633043571f3691f2?placeholderIfAbsent=true&apiKey=31c70b81d0f943a5b97da93940e5fb30',
            title: 'Economy',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            isHighlighted: false,
          },
          {
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ba52a322b7c5a457cb29fe4a75a6b17ffcf005e83c416286b8655f49dfd656f2?placeholderIfAbsent=true&apiKey=31c70b81d0f943a5b97da93940e5fb30',
            title: 'Technology',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            isHighlighted: false,
          },
        ],
      };
    },
  });
  </script>
  