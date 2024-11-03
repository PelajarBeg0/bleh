<template>
    <article :class="['flex flex-col w-3/12 max-md:ml-0 max-md:w-full', bgColor]">
      <div class="flex flex-col grow items-center px-14 py-10 w-full leading-none max-md:px-5 max-md:mt-8">
        <img :src="image" :alt="`Portrait of ${name}`" class="object-contain w-32 max-w-full rounded-full aspect-square" loading="lazy" />
        <h3 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">{{ name }}</h3>
        <p class="self-stretch text-sm text-center text-zinc-500">{{ role }}</p>
        <img :src="socialImage" alt="Social media icons" class="object-contain mt-5 w-28 max-w-full aspect-[6.58]" loading="lazy" />
      </div>
    </article>
  </template>
  
  <script lang="ts">
  import { defineComponent} from 'vue';
  
  export default defineComponent({
    name: 'AuthorCard',
    props: {
      name: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      socialImage: {
        type: String,
        required: true
      },
      bgColor: {
        type: String,
        required: true
      }
    }
  });
  </script>
