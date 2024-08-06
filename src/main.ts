import './assets/main.css'

import { createHead } from "@vueuse/head"
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import clickOutside from './assets/jsfiles/ClickOutside';

const head = createHead()
const app = createApp(App)

app.use(createPinia())
app.use(head).use(router)

app.provide('endpointUrl', 'https://admin.api.distancereacher.de/');
app.provide('endpointUrlMeilisearch', 'https://search.api.distancereacher.de/');

app.directive('click-outside', clickOutside);

app.mount('#app')
