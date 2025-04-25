<template>
  <div class="login-container">
    <div class="logo">
      <img src="@/assets/icons/app-logo.png" alt="Logo" />
      <h2>欢迎回来</h2>
      <p>在此处输入您的账户</p>
    </div>
    <form class="form-group">
      <div class="form-item">
        <label>Email</label>
        <div class="input-group">
          <span class="input-icon"></span>
          <input 
            type="email" 
            v-model="form.email" 
            placeholder="这里输入您的Email"
            :class="{ 'is-error': errors.email }"
          >
          <div v-if="errors.email" class="error-tip">{{ errors.email }}</div>
        </div>
      </div>
      <div class="form-item">
        <label>密码</label>
        <div class="input-group">
          <span class="input-icon"></span>
          <input 
            type="password" 
            v-model="form.password" 
            placeholder="这里输入密码"
            :class="{ 'is-error': errors.password }"
          >
          <div v-if="errors.password" class="error-tip">{{ errors.password }}</div>
        </div>
      </div>
      <div class="forgot-password">
         <router-link to="/find-password">忘记密码？？</router-link>
      </div>
      <button class="login-btn" @click="handleLogin">登录</button>
    </form>
    <div class="register-link">
      还没有账号？<router-link to="/register">去注册</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/userStore'; // 引入用户存储
const form = ref({
  email: '',
  password: ''
});
const router = useRouter();
const errors = ref({
  email: '',
  password: ''
});
const userStore = useUserStore(); // 获取用户存储实例

const validateForm = () => {
  let isValid = true;
  if (!form.value.email) {
    errors.value.email = 'Email不能为空';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = 'Email格式不正确';
    isValid = false;
  } else {
    errors.value.email = '';
  }

  if (!form.value.password) {
    errors.value.password = '密码不能为空';
    isValid = false;
  } else if (form.value.password.length < 6) {
    errors.value.password = '密码至少6位';
    isValid = false;
  } else {
    errors.value.password = '';
  }

  return isValid;
};

const handleLogin = () => {
  if (validateForm()) {
    console.log('登录数据：', form.value);
    // 此处可添加调用登录接口逻辑
    router.push('/home'); 
  }
};
</script>

<style scoped>  
.login-container {  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  justify-content: center;  
  padding: 20px;  
  min-height: 100vh;  
  background: #fafafa;  
}  
.logo img {  
  width: 120px;  
  max-width: 80%;  
  margin-bottom: 15px;  
}  
.logo h2 {  
  font-size: 18px;  
  margin: 8px 0;  
}  
.logo p {  
  font-size: 14px;  
}  
.form-group {  
  max-width: 340px;  
  width: 100%;  
}  
.form-item label {  
  text-align: left;  
  width: 100%;  
  display: block;  
  margin-bottom: 8px;  
}  
.input-group {  
  position: relative;  
  width: 100%;  
}  
.input-icon {  
  position: absolute;  
  left: 12px;  
  top: 50%;  
  transform: translateY(-50%);  
  color: #ccc;  
}  
.form-item input {  
  padding-left: 40px;  
  width: 100%;  
  padding: 12px;  
  border: 1px solid #e0e0e0;  
  border-radius: 4px;  
  box-sizing: border-box;  
}  
.login-btn {  
  margin-top: 10px;  
  width: 100%;  
  padding: 12px;  
  background: #42b983;  
  color: white;  
  border: none;  
  border-radius: 4px;  
  cursor: pointer;  
}  
.register-link {  
  margin-top: 20px;  
  font-size: 14px;  
}  
.is-error {  
  border-color: #ff4444 !important;  
}  
.error-tip {  
  color: #ff4444;  
  font-size: 12px;  
  margin-top: 5px;  
  text-align: left;  
}  
</style>