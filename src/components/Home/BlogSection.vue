<template>
    <section class="flex flex-col items-center mt-28 max-w-full w-[1280px] max-md:mt-10">
      <article class="flex flex-col items-start w-full text-base font-bold max-md:pr-5">
        <div class="flex relative flex-col items-end px-20 pt-32 max-w-full min-h-[705px] w-[949px] max-md:pt-24 max-md:pl-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/35cf3d6450165144a0ef4eb8b2d9b1fa459630d3402d8949bbfde1d779507d11?placeholderIfAbsent=true&apiKey=635cf4c5f1e74f4fb3e41d11e8bc6ce8" alt="Background image for the blog post" class="object-cover absolute inset-0 size-full" />
          <div class="flex relative flex-col p-20 mr-0 max-w-full bg-white w-[706px] max-md:px-5">
            <h2 class="self-start font-semibold leading-none text-gray-800 uppercase tracking-[3px]">Why we started</h2>
            <h1 class="mt-6 text-5xl tracking-tighter text-gray-800 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">It started out as a simple idea and evolved into our passion</h1>
            <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button class="gap-3 self-start px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 max-md:px-5" @click="discoverStory">Discover our story &gt;</button>
          </div>
        </div>
      </article>
      <AuthorsList />
      <LogoComponent />
      <Testimonials />
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import AuthorsList from '@/components/Home/AuthorList.vue';
  import LogoComponent from '@/components/Home/LogoComponent.vue';
  import Testimonials from '@/components/Home/testimonialss.vue';
  
  export default defineComponent({
    name: 'BlogSection',
    components: {
      AuthorsList,
      LogoComponent,
      Testimonials
    },
    methods: {
      discoverStory() {
        // Implement the story discovery logic here
        console.log('Discovering our story');
      }
    }
  });
  </script>