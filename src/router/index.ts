import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import AboutUs from '@/views/AboutView.vue'
import ContactUs from '@/views/ContactView.vue'
import Blogpost from '@/views/Blogpost.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs,
    },
    {
    path: '/Contact-us',
    name: 'ContactUs',
    component: ContactUs,
    },
    {
      path: '/Blogpost',
      name: 'BlogPost',
      component: Blogpost,
      },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPolicy,
    },
  ],
})

export default router
