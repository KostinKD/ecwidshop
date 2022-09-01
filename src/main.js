import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//CSS
// import '@/assets/css/flex-slider.css'
// import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/vendor/bootstrap/css/bootstrap.min.css'
import '@/assets/css/templatemo-cyborg-gaming.css'


//JS
import 'bootstrap/dist/js/bootstrap.js'

createApp(App).use(store).use(router).mount('#app')
