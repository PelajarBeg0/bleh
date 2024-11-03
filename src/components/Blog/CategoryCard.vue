<template>
    <article :class="['flex flex-col w-3/12 max-md:ml-0 max-md:w-full', { 'bg-blue-600': isHighlighted }]">
      <div :class="['flex flex-col grow items-start p-8 w-full max-md:px-5 max-md:mt-8', { 'border border-solid border-zinc-500': !isHighlighted }]">
        <img :src="icon" :alt="title + ' icon'" class="object-contain w-12 aspect-square" :class="{ 'fill-orange-50': !isHighlighted, 'fill-zinc-100': isHighlighted }" />
        <h3 :class="['mt-4 text-3xl font-bold tracking-tighter leading-none', { 'text-gray-800': !isHighlighted, 'text-orange-50': isHighlighted }]">
          {{ title }}
        </h3>
        <p :class="['self-stretch mt-1 text-base leading-7', { 'text-zinc-500': !isHighlighted, 'text-white': isHighlighted }]">
          {{ description }}
        </p>
      </div>
    </article>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'CategoryCard',
    props: {
      icon: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      isHighlighted: {
        type: Boolean,
        default: false,
      },
    },
  });
  </script>