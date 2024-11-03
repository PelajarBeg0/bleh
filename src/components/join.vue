<template>
    <section class="join-our-team flex flex-col items-center justify-center min-h-[50vh] font-bold max-w-[407px] mx-auto">
      <h2 class="z-10 self-stretch mt-0 w-full text-4xl tracking-tighter leading-10 text-center text-gray-800">
        Join our team to be a part of our story
      </h2>
      <p class="mt-4 text-base leading-7 text-center text-zinc-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
      <button
        @click="handleJoinNow"
        class="gap-3 px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        :aria-label="buttonLabel"
      >
        Join Now
      </button>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'JoinOurTeam',
    data() {
      return {
        buttonLabel: 'Join our team now',
      };
    },
    methods: {
      handleJoinNow(): void {
        console.log('Join Now clicked');
      },
    },
  });
  </script>