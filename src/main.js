import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FontAwesomeIcon from "./assets/icons/font-awesome-icons.js";


const app = createApp(App)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(router)

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"


