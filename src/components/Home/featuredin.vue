<template>
    <section class="flex justify-center mt-28 w-full max-md:mt-10 max-md:px-5">
      <article class="relative flex items-center w-full max-w-7xl">
        <!-- Background Image -->
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/35cf3d6450165144a0ef4eb8b2d9b1fa459630d3402d8949bbfde1d779507d11?placeholderIfAbsent=true&apiKey=31c70b81d0f943a5b97da93940e5fb30"
          alt="Background image for the blog post"
          class="object-cover w-full h-full rounded-lg"
        />
        
        <!-- Content Box (Solid Background) -->
        <div class="absolute left-16 top-1/2 transform -translate-y-1/2 p-12 bg-white rounded-lg shadow-lg max-md:left-5 max-md:p-6">
          <h2 class="text-sm font-semibold uppercase tracking-wider text-gray-800">
            Why we started
          </h2>
          <h1 class="mt-4 text-5xl font-bold tracking-tight text-gray-900 leading-snug max-md:text-4xl">
            It started out as a simple idea and evolved into our passion
          </h1>
          <p class="mt-4 text-base leading-7 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <button
            class="mt-8 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            @click="discoverStory"
          >
            Discover our story &gt;
          </button>
        </div>
      </article>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'SpecialPosts',
    methods: {
      discoverStory() {
        console.log('Discover our story clicked');
      }
    }
  });
  </script>
  