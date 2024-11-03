<script setup lang="ts">
import Buttons from '@/components/Buttons.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import HeroSection from '@/components/Home/HeroSection.vue';
import FeaturePost from '@/components/Home/FeaturePost.vue';
import AboutUs from '@/components/Home/AboutUs.vue';
import AllCategory from '../components/Blog/AllCategories.vue';
import JoinOurTeam from '../components/join.vue';
import BlogSection from '@/components/Home/BlogSection.vue';
import AuthorList from '@/components/Home/AuthorList.vue';
import LogoComponent from '@/components/Home/LogoComponent.vue';
import Testimonials from '@/components/Home/testimonialss.vue';


</script>

<template>
  <MainLayout>
    <main class="flex-grow">
      <HeroSection />
      <FeaturePost />
      <AboutUs />
      <!-- Other sections -->

      <!-- Categories Section -->
      <AllCategory />

      <!-- Join Our Team Section -->
      <JoinOurTeam />

      <!-- Blog Section (Centered) -->
      <div class="flex justify-center w-full">
        <BlogSection />
      </div>

      <!-- Author List (Centered) -->
      <div class="flex justify-center w-full">
        <AuthorList />
      </div>

      <!-- Logo Component (Centered) -->
      <div class="flex justify-center w-full">
        <LogoComponent />
      </div>

      <!-- Testimonials Section -->
      <Testimonials />
    </main>
  </MainLayout>
</template>

