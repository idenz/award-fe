import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/index.css'

import ApiService from "@/core/services/ApiService";
import App from './App.vue'
import router from './router'
import store from "./stores";

const app = createApp(App)

app.use(createPinia())
app.use(store)
app.use(router)

ApiService.init(app);

app.mount('#app')
