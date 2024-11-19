import { createApp } from 'vue'
import App from './App.vue'
import { vuetifyPlugin } from './vuetifyPlugin'

const app = createApp(App)
app.use(vuetifyPlugin)
app.mount('#app')
