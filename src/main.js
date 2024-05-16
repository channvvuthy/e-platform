import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import './style.css'
import { i18n } from './i18n.js'


createApp(App)
    .use(store)
    .use(i18n)
    .use(router).mount('#app')
