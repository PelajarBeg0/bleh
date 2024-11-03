<template>
    <section class="flex flex-col mt-28 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
      <h2 class="self-center text-4xl font-bold tracking-tighter leading-none text-gray-800">List of Authors</h2>
      <div class="mt-12 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <AuthorCard
            v-for="author in authors"
            :key="author.name"
            :name="author.name"
            :role="author.role"
            :image="author.image"
            :socialImage="author.socialImage"
            :bgColor="author.bgColor"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import AuthorCard from './AuthorCard.vue';
  
  export default defineComponent({
    name: 'AuthorsList',
    components: {
      AuthorCard
    },
    data() {
      return {
        authors: [
          {
            name: 'Floyd Miles',
            role: 'Content Writer @Company',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9a08ac807213d9627fd7596c3e46ac3eb0e08d4f8417cb8b287915d18f59c9b0?placeholderIfAbsent=true&apiKey=635cf4c5f1e74f4fb3e41d11e8bc6ce8',
            socialImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e6ff016f6fccbda49d8b9a3ef043dbecbf8abdb47a2f8d1dce1f10cdff00c2f4?placeholderIfAbsent=true&apiKey=635cf4c5f1e74f4fb3e41d11e8bc6ce8',
            bgColor: 'bg-zinc-100'
          },
          {
            name: 'Dianne Russell',
            role: 'Content Writer @Company',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e22bc8df8cd660950385732d863cfe8a46f88897df05f7505ee7e97e51005442?placeholderIfAbsent=true&apiKey=635cf4c5f1e74f4fb3e41d11e8bc6ce8',
            socialImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/46ccf1b3d09a1fed441688b6821660616abf70957ac89b230c8e2bde16f55ac9?placeholderIfAbsent=true&apiKey=635cf4c5f1e74f4fb3e41d11e8bc6ce8',
            bgColor: 'bg-orange-50'
          },
          {
            name: 'Jenny Wilson',
            role: 'Content Writer @Company',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/431ba0a554f76db4c1d3c76b098c205bdd0514c081424011e52b03ec1dacf10c?placeholderIfAbsent=true&apiKey=635cf4c5f1e74f4fb3e41d11e8bc6ce8',
            socialImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/93d658da4590c3dc93a62dd63e20208d4f6f0053eda8b249ee90cdcf408d0d58?placeholderIfAbsent=true&apiKey=635cf4c5f1e74f4fb3e41d11e8bc6ce8',
            bgColor: 'bg-zinc-100'
          },
          {
            name: 'Leslie Alexander',
            role: 'Content Writer @Company',
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/54d3f7ddccbe68495e8eb4e094d3be6ca1098fc5100fa4f626206f477da5cb8f?placeholderIfAbsent=true&apiKey=635cf4c5f1e74f4fb3e41d11e8bc6ce8',
            socialImage: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b72f63db24c3c784fd49b0a479184191f8995d0cf444b98cac25ebd9b8f23af1?placeholderIfAbsent=true&apiKey=635cf4c5f1e74f4fb3e41d11e8bc6ce8',
            bgColor: 'bg-zinc-100'
          }
        ]
      };
    }
  });
  </script>