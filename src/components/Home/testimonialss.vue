<template>
    <section class="flex flex-col mt-28 w-full rounded-none max-md:mt-10">
      <div class="flex flex-col justify-center items-center px-16 py-20 w-full bg-orange-50 max-md:px-5 max-md:max-w-full">
        <div class="flex flex-wrap gap-5 justify-between w-full max-w-[1057px] max-md:max-w-full">
          <div class="flex flex-col items-start self-start mt-3 text-base text-gray-800">
            <h2 class="font-semibold leading-none uppercase tracking-[3px]">Testimonials</h2>
            <h3 class="mt-3 text-4xl font-bold tracking-tighter leading-10">What people say about our blog</h3>
            <p class="self-stretch mt-4 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div class="shrink-0 w-px border border-solid opacity-40 bg-zinc-500 border-zinc-500 h-[310px]"></div>
          <div class="flex flex-col max-md:max-w-full">
            <blockquote class="self-start text-2xl font-bold leading-8 text-gray-800 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </blockquote>
            <div class="flex flex-wrap gap-5 justify-between items-start mt-28 w-full max-md:mt-10 max-md:max-w-full">
              <div class="flex gap-4 mt-2">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/830a66a5a38a6ee455158585ade9629a597165cac806aa06f0f7c3f150c67226?placeholderIfAbsent=true&apiKey=635cf4c5f1e74f4fb3e41d11e8bc6ce8" alt="Portrait of Jonathan Vallem" class="object-contain shrink-0 self-start w-12 rounded-full aspect-square" loading="lazy" />
                <div class="flex flex-col">
                  <h4 class="text-2xl font-bold leading-none text-gray-800">Jonathan Vallem</h4>
                  <p class="self-start text-base leading-7 text-zinc-500">New York, USA</p>
                </div>
              </div>
              <div class="flex gap-6">
                <button aria-label="Previous testimonial" class="focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3f5ae0b05f88175949425804e6e1196fc776b109748d2aa18fea9d1861879d4?placeholderIfAbsent=true&apiKey=635cf4c5f1e74f4fb3e41d11e8bc6ce8" alt="" class="object-contain shrink-0 my-auto w-12 aspect-square" />
                </button>
                <button aria-label="Next testimonial" class="focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/07b676eb085c0c013528d5ff088726665c65f255584b47cb51e5c4e4b02268d0?placeholderIfAbsent=true&apiKey=635cf4c5f1e74f4fb3e41d11e8bc6ce8" alt="" class="object-contain shrink-0 aspect-square w-[62px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Testimonials'
  });
  </script>