
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createRouter, createWebHistory } from 'vue-router';
import ComicReader from './components/ComicReader.vue';
import Main from './Main.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/comic/:id',
      name: 'ComicReader',
      component: ComicReader
    },
    {
        path: '/',
        name: 'Main',
        component: Main
      }
  ]
});

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount('#app');
