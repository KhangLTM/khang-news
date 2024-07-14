import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query';

import '@/http/axios/interceptor';
import '@/assets/index.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  }
};
app.use(VueQueryPlugin, vueQueryPluginOptions);

app.use(createPinia());
app.use(router);

app.mount('#app');
