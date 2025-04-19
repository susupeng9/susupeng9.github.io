<template>
  <div class="find-password-container">
    <div class="logo">
      <img src="@/assets/icons/app-logo.png" alt="Logo" />
      <h2>找回密码</h2>
      <p>通过邮箱找回您的密码</p>
    </div>
    <form class="form-group">
      <div class="form-item">
        <label>注册邮箱</label>
        <div class="input-group">
          <span class="input-icon">📧</span>
          <input 
            type="email" 
            v-model="form.email" 
            placeholder="输入注册邮箱"
            :class="{ 'is-error': errors.email }"
          >
          <div v-if="errors.email" class="error-tip">{{ errors.email }}</div>
        </div>
      </div>
      <button class="submit-btn" @click="handleFindPassword">提交找回</button>
    </form>
    <div class="login-link">
      已有账号？<router-link to="/login">去登录</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/userStore';

const form = ref({ email: '' });
const router = useRouter();
const userStore = useUserStore();
const errors = ref({ email: '' });

const validateEmail = () => {
  let isValid = true;
  if (!form.value.email) {
    errors.value.email = '邮箱不能为空';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = '邮箱格式不正确';
    isValid = false;
  } else {
    errors.value.email = '';
  }
  return isValid;
};

const handleFindPassword = () => {
  if (validateEmail()) {
    // 模拟后端返回用户信息（实际需对接接口）
    const mockUserInfo = {
      name: '李丽',
      email: form.value.email,
      school: 'XX大学'
    };
    userStore.setUserInfo(
      mockUserInfo.school,
      mockUserInfo.name,
      mockUserInfo.email
    );
    router.push('/login'); // 跳转登录页，输入新密码登录
  }
};
</script>

<style scoped>
.find-password-container {
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

.submit-btn {
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

