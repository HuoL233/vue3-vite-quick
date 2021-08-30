import { createApp, App as AppInstance } from 'vue';
import i18n from './locales';
import router from './router';
import store from './store';
import App from './App.vue';

const instance: AppInstance = createApp(App);

instance.use(i18n);
instance.use(router);
instance.use(store);

instance.mount('#app');
