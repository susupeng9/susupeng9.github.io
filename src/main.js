import { createApp } from 'vue';  
import { createPinia } from 'pinia'; 
import App from './App.vue';  
import router from './router'; 
const app = createApp(App);  
const pinia = createPinia();
const showSplash = !localStorage.getItem('hasViewedSplash');  
if (showSplash) {  
  router.push('/splash');  
}  
app.use(pinia); // 新增：挂载 Pinia 到应用实例  
app.use(router).mount('#app'); 