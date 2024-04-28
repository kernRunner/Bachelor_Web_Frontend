import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StartView from '../views/StartView.vue'
import Favorite from '../views/Favorite.vue'
import { useAttractionStore } from '@/stores/favAttraction';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:jumpId?',
      name: 'home',
      component: StartView,
      meta: {
        title: 'Home Page',
        metaTags: [
          {
            name: 'description',
            content: 'Welcome to the home page!'
          }
        ]
      }
    },
    {
      path: '/:name/:country/:jumpId?',
      name: 'contentView',
      component: HomeView,
      meta: {
        title: 'Home Page',
        metaTags: [
          {
            name: 'description',
            content: 'Welcome to the home page!'
          }
        ]
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About Page',
        metaTags: [
          {
            name: 'description',
            content: 'Learn more about us.'
          }
        ]
      },
      props: {
        message: 'Southland',
      },
    }
    ,
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite,
      meta: {
        title: 'Favorite Page',
        metaTags: [
          {
            name: 'description',
            content: 'Learn more about us.'
          }
        ]
      },
      props: {
        message: 'Favorite',
      },
    }
  ]
})



export default router
