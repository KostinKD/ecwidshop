import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//////IMPORTS ASSET
//CSS
import '@/assets/assets/css/owl.css'
import '@/assets/assets/css/templatemo-cyborg-gaming.css'
import '@/assets/assets/css/animate.css'
import '@/assets/assets/css/fontawesome.css'
import '@/assets/assets/css/flex-slider.css'
import '@/assets/vendor/bootstrap/css/bootstrap.min.css'

// JS
// import '@/assets/assets/js/owl-carousel'
// import '@/assets/assets/js/isotope.min'
// // import '@/assets/assets/js/tabs'
// import '@/assets/assets/js/popup'
// import '@/assets/assets/js/custom'
// import '@/assets/vendor/bootstrap/js/bootstrap.min'

createApp(App).use(store).use(router).mount('#app')
