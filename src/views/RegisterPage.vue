<template>
  <div class="register-container">
    <div class="logo">
      <img src="@/assets/icons/app-logo.png" alt="Logo" />
      <h2>创建新账号</h2>
      <p>在此处创建您的账户</p>
    </div>
    <form class="form-group">
      <div class="form-item">
        <label>用户名</label>
        <div class="input-group">
          <span class="input-icon"></span>
          <input 
            type="text" 
            v-model="form.username" 
            placeholder="这里输入您的用户名"
            :class="{ 'is-error': errors.username }"
          >
          <div v-if="errors.username" class="error-tip">{{ errors.username }}</div>
        </div>
      </div>
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
        <label>学校</label>
        <div class="input-group">
          <span class="input-icon"></span>
          <input 
            type="text" 
            v-model="form.school" 
            placeholder="这里输入您的学校"
            :class="{ 'is-error': errors.school }"
          >
          <div v-if="errors.school" class="error-tip">{{ errors.school }}</div>
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
      <button class="register-btn" @click="handleRegister">注册</button>
    </form>
    <div class="login-link">
      已有账号？<router-link to="/login">去登录</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/userStore'; // 引入用户状态管理

const form = ref({
  username: '',
  email: '',
  school: '',
  password: ''
});
const router = useRouter();
const userStore = useUserStore(); // 获取用户状态实例

// 表单验证
const errors = ref({
  username: '',
  email: '',
  school: '',
  password: ''
});

const validateForm = () => {
  let isValid = true;
  if (!form.value.username) {
    errors.value.username = '用户名不能为空';
    isValid = false;
  } else {
    errors.value.username = '';
  }

  if (!form.value.email) {
    errors.value.email = 'Email不能为空';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = 'Email格式不正确';
    isValid = false;
  } else {
    errors.value.email = '';
  }

  if (!form.value.school) {
    errors.value.school = '学校不能为空';
    isValid = false;
  } else {
    errors.value.school = '';
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

const handleRegister = () => {
  if (validateForm()) {
    console.log('注册数据：', form.value);
    // 存储用户信息
    userStore.setUserInfo(form.value.school, form.value.username,form.value.email);
    router.push('/login');
  }
};
</script>

<style scoped>
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

.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
  background: #fafafa;
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

.register-btn {
  margin-top: 10px;
  width: 100%;
  padding: 12px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-link {
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