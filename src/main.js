import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

// Vuetify
import { useCreatedVuetify } from '@/setup/vuetify'

const pinia = createPinia()

const app = createApp(App)

app.use(useCreatedVuetify)
app.use(pinia)
app.mount('#app')
