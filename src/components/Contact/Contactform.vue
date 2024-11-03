<!-- components/Contact/ContactForm.vue -->
<template>
    <form class="mt-8 w-[768px] max-w-full" @submit.prevent="submitForm">
      <label for="fullName" class="sr-only">Full Name</label>
      <input
        id="fullName"
        type="text"
        placeholder="Full Name"
        v-model="form.fullName"
        class="gap-2.5 self-stretch p-6 mt-8 max-w-full text-base leading-7 text-gray-800 rounded-sm border border-solid border-zinc-500 border-opacity-50 w-full max-md:px-5"
      />
  
      <label for="email" class="sr-only">Your Email</label>
      <input
        id="email"
        type="email"
        placeholder="Your Email"
        v-model="form.email"
        class="gap-2.5 self-stretch p-6 mt-4 max-w-full text-base leading-7 text-gray-800 rounded-sm border border-solid border-zinc-500 border-opacity-50 w-full max-md:px-5"
      />
  
      <div class="flex flex-wrap gap-4 items-center mt-3.5 max-w-full text-base leading-7 text-gray-800 whitespace-nowrap w-full">
        <div class="flex flex-1 shrink gap-10 justify-between items-center self-stretch p-6 my-auto border border-solid basis-0 border-zinc-500 border-opacity-50 min-w-[240px] max-md:px-5">
          <label for="province" class="sr-only">Province</label>
          <select id="province" v-model="form.province" class="self-stretch my-auto bg-transparent w-full">
            <option value="">Province</option>
            <!-- Add more province options here -->
          </select>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd9d8e38273624b2c454ad42c7e3db3a8baa83bf4a9011a27bb1ba0114f3e3b?placeholderIfAbsent=true&apiKey=31c70b81d0f943a5b97da93940e5fb30" alt="" class="object-contain shrink-0 self-stretch my-auto w-2 aspect-[2]" />
        </div>
        <div class="flex flex-1 shrink gap-10 justify-between items-center self-stretch p-6 my-auto border border-solid basis-0 border-zinc-500 border-opacity-50 min-w-[240px] max-md:px-5">
          <label for="city" class="sr-only">City</label>
          <select id="city" v-model="form.city" class="self-stretch my-auto bg-transparent w-full">
            <option value="">City</option>
            <!-- Add more city options here -->
          </select>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd9d8e38273624b2c454ad42c7e3db3a8baa83bf4a9011a27bb1ba0114f3e3b?placeholderIfAbsent=true&apiKey=31c70b81d0f943a5b97da93940e5fb30" alt="" class="object-contain shrink-0 self-stretch my-auto w-2 aspect-[2]" />
        </div>
      </div>
  
      <label for="message" class="sr-only">Message</label>
      <textarea
        id="message"
        placeholder="Message"
        v-model="form.message"
        class="gap-2.5 px-6 pt-6 pb-24 mt-5 max-w-full text-base leading-7 text-gray-800 whitespace-nowrap rounded-sm border border-solid border-zinc-500 border-opacity-50 min-h-[144px] w-full max-md:px-5"
      ></textarea>
  
      <button type="submit" class="px-16 py-4 mt-4 max-w-full text-2xl font-bold leading-none text-gray-800 bg-blue-600 w-full max-md:px-5">
        Send Message
      </button>
    </form>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from 'vue';
  
  export default defineComponent({
    name: 'ContactForm',
    setup() {
      const form = reactive({
        fullName: '',
        email: '',
        province: '',
        city: '',
        message: ''
      });
  
      const submitForm = () => {
        console.log('Form submitted:', form);
        // Reset form if needed
       // Object.keys(form).forEach(key => (form[key] = ''));
      };
  
      return { form, submitForm };
    }
  });
  </script>
  
  <style scoped>
  /* Add component-specific styles here if needed */
  </style>
  
