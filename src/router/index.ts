import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StartView from '../views/StartView.vue'
import Favorite from '../views/Favorite.vue'
import About from '../views/About.vue'
import Privacy from '../views/Privacy.vue'
import Privacypolicy from '../views/PrivacyPolicyApp.vue'
import { useAttractionStore } from '@/stores/favAttraction';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:jumpId?',
      name: 'home',
      component: StartView,
      meta: {
        title: 'Home Page',
      }
    },
    {
      path: '/:name/:country/:jumpId?',
      name: 'contentView',
      component: HomeView,
      meta: {
        title: 'Home Page',
      }
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite,
      meta: {
        title: 'Favorite Page',
      },
      props: {
        message: 'Favorite',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'About Page',
      },
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy,
      meta: {
        title: 'Privacy Policy',
      },
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      component: Privacypolicy,
      meta: {
        title: 'Privacy Policy App',
      },
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: StartView }
  ]
})



export default router
