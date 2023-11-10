import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from '@/plugin/i18n/inedx'

import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
