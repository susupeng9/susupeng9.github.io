<template>  
  <div class="welcome-page">  
    <img src="@/assets/icons/app-logo.png" alt="职途通图标" class="logo" /> <!-- 恢复图片 -->  
    <p class="slogan">大语言模型驱动 面向大学生就业的</p>  
    <p class="slogan">异步视频面试彩排服务设计</p>  
  </div>  
</template>  


<style scoped>  
.welcome-page {  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  justify-content: center;  
  height: 100vh;  
  background: linear-gradient(135deg, #ff7a45, #ffb48f);  
}  
.logo { width: 180px; height: 180px; margin-bottom: 20px; }  
.slogan { color: white; font-family: "HarmonyOS Sans SC"; font-size: 16px; margin: 5px 0; }  
</style>  

<script setup>  
import { onMounted } from 'vue';  
import { useRouter } from 'vue-router';  
const router = useRouter();  
onMounted(() => {  
  setTimeout(() => {  
    router.push('/splash'); // 确保 /home 路由配置正确  
  }, 2000);  
});  
</script>  


<style scoped>  
/* 清空原有复杂样式 */  
</style>  