<template>  
  <div class="splash-container">  
    <!-- 固定展示三个内容块 -->  
    <div class="splash-slide">  
      <img :src="`/splash/splash1.png`" alt="启动页插画" class="splash-image" />  
      <h2 class="splash-title">规划美好的未来</h2>  
      <p class="splash-desc">页面功能简洁明了，明确愿景、为您绘制蓝图，不断成长，遇见更好的未来。</p>  
    </div>  
    <div class="splash-slide">  
      <img :src="`/splash/splash2.png`" alt="启动页插画" class="splash-image" />  
      <h2 class="splash-title">AI规划师</h2>  
      <p class="splash-desc">在线就升学、升职给出建议，重新定义未来规划应用体验，不再错过任何一个您的机会。</p>  
    </div>  
    <div class="splash-slide">  
      <img :src="`/splash/splash3.png`" alt="启动页插画" class="splash-image" />  
      <h2 class="splash-title">高校名师在线辅导解疑</h2>  
      <p class="splash-desc">在综合素质、学习方法和未来规划上多方面针对性给予学生建议和帮助。</p>  
    </div>  

    <!-- 始终显示登录注册按钮 -->  
    <div class="button-group">  
      <button class="login-btn" @click="goToAuth('login')">登录</button>  
      <button class="register-btn" @click="goToAuth('register')">注册</button>  
    </div>  
  </div>  
</template>  

<script setup>  
import { useRouter } from 'vue-router';  

const router = useRouter();  

// 跳转登录注册  
const goToAuth = (type) => {  
  router.push(type === 'login' ? '/login' : '/register');  
};  
</script>  

<style scoped>  
.splash-container {  
  position: relative;  
  height: 100vh;  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  justify-content: space-between;  
  padding: 20px;  
  box-sizing: border-box;  
}  

.splash-slide {  
  text-align: center;  
  width: 100%;  
}  

.splash-image {  
  width: 80%;  
  max-width: 400px;  
  margin-bottom: 20px;  
}  

.splash-title {  
  font-size: 20px;  
  font-weight: bold;  
  margin-bottom: 10px;  
}  

.splash-desc {  
  font-size: 14px;  
  line-height: 1.6;  
  color: #666;  
}  

.button-group {  
  display: flex;  
  gap: 15px;  
}  

.login-btn,  
.register-btn {  
  padding: 12px 40px;  
  border-radius: 25px;  
  font-size: 14px;  
}  

.login-btn {  
  background: linear-gradient(135deg, #ff7a45, #ffb48f);  
  color: white;  
  border: none;  
}  

.register-btn {  
  background: white;  
  color: #ff7a45;  
  border: 1px solid #ff7a45;  
}  
</style>