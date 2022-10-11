import { createApp } from 'vue'
import App from './App.vue'

//подключение bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

//подключение Vue Router
import router from './router'

// const app = app.use(router)
const app = createApp(App)
app.use(router).mount('#app')
