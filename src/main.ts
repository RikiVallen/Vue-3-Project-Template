import { createApp, normalizeStyle } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import 'modern-normalize'
import './scss/app.scss'
import routes from "./router/routes"
import App from "./App.vue"

const route = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(route)
    .mount("#app")
