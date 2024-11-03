<template>
    <section class="flex flex-wrap gap-10 mt-28 max-w-full text-zinc-500 w-[1237px] max-md:mt-10">
      <div class="flex flex-col">
        <p class="self-start text-sm leading-none opacity-60">We are</p>
        <h2 class="text-2xl font-bold leading-none">Featured in</h2>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/44400a0686a89ca42258a679b41962a191f9967fcfc46ceba204f38c2a62f27c?placeholderIfAbsent=true&apiKey=635cf4c5f1e74f4fb3e41d11e8bc6ce8" alt="Logos of featured publications" class="object-contain grow shrink-0 my-auto aspect-[31.25] basis-0 w-fit max-md:max-w-full" loading="lazy" />
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'LogoComponent'
  });
  </script>