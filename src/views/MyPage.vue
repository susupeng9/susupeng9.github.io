<template>
  <div class="my-page-container">
    <div class="user-info-section">
      <img :src="userStore.avatar || defaultAvatar" alt="头像" class="avatar" @click="openImageUpload">
      <div class="user-detail">
        <h3>{{ userStore.name }}</h3>
        <p>{{ userStore.email }}</p>
        <button class="edit-btn" @click="goToEdit">编辑资料</button>
      </div>
    </div>

    <div class="function-list">
      <div class="function-item" @click="goToSettings">
        <i class="icon-settings">⚙️</i>
        <p>设置</p>
        <span>主题，设置</span>
      </div>
      <div class="function-item" @click="goToNotification">
        <i class="icon-notification">🔔</i>
        <p>通知</p>
        <span>铃声，消息，通知</span>
      </div>
      <div class="function-item" @click="goToHelp">
        <i class="icon-help">❓</i>
        <p>帮助</p>
        <span>联系我们</span>
      </div>
      <div class="function-item" @click="goToAbout">
        <i class="icon-about">ℹ️</i>
        <p>关于</p>
        <span>关于我们这个应用</span>
      </div>
      <div class="function-item" @click="handleLogout">
        <i class="icon-logout">🚪</i>
        <p>退出</p>
        <span>退出您的账户</span>
      </div>
 <!-- 直接添加底部导航 -->
    <div class="bottom-nav">
      <router-link to="/home" class="nav-item">
        <i class="icon-home">🏠</i>
        <p>首页</p>
      </router-link>
      <router-link to="/interview" class="nav-item">
        <i class="icon-interview">🏢</i>
        <p>面试</p>
      </router-link>
     <router-link to="/question-bank" class="nav-item">   
        <i class="icon-question">📚</i>  
        <p>题库</p>  
       </router-link> 
      <router-link to="/message" class="nav-item">
        <i class="icon-message">💬</i>
        <p>消息</p>
      </router-link>
      <!-- 当前“我的”页激活状态 -->
      <router-link to="/my" class="nav-item active">
        <i class="icon-my">👤</i>
        <p>我的</p>
      </router-link>
    </div>
    </div>

    <!-- 图片上传弹窗（简化示例，可扩展为完整组件） -->
    <input type="file" ref="fileInput" @change="handleImageUpload" style="display: none;">
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/userStore';
import { ref } from 'vue';

const userStore = useUserStore();
const defaultAvatar = 'https://via.placeholder.com/100'; // 默认头像占位图
const fileInput = ref(null);

// 打开图片上传
const openImageUpload = () => {
  fileInput.value.click();
};

// 处理图片上传
const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      userStore.avatar = event.target.result;
    };
    reader.readAsDataURL(file);
  }
};

// 跳转编辑页面（暂未实现，可后续补充路由）
const goToEdit = () => {
  console.log('跳转编辑资料页面');
};

// 功能跳转模拟
const goToSettings = () => console.log('跳转设置');
const goToNotification = () => console.log('跳转通知');
const goToHelp = () => console.log('跳转帮助');
const goToAbout = () => console.log('跳转关于');

// 退出登录模拟
const handleLogout = () => {
  userStore.clearUserInfo(); // 假设Pinia有清空方法
};
</script>

<style scoped>
.my-page-container {
  padding: 20px;
  background: #f9f9f9;
  min-height: 100vh;
}

.user-info-section {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background: white;
  border-radius: 10px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
}

.user-detail {
  flex: 1;
}

.user-detail h3 {
  font-size: 18px;
  margin-bottom: 5px;
}

.user-detail p {
  color: #666;
  font-size: 14px;
}

.edit-btn {
  padding: 5px 15px;
  border: 1px solid #ff6644;
  color: #ff6644;
  background: transparent;
  cursor: pointer;
  border-radius: 4px;
}

.function-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.function-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  cursor: pointer;
}

.function-item i {
  font-size: 20px;
  color: #666;
}

.function-item p {
  font-size: 16px;
  margin: 0;
}

.function-item span {
  font-size: 12px;
  color: #999;
}
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background: #fff;
  border-top: 1px solid #f0f0f0;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #666;
}

.nav-item.active {
  color: #ff6644;
}

.nav-item i {
  font-size: 20px;
  margin-bottom: 4px;
}

.nav-item p {
  font-size: 12px;
  margin: 0;
}
/* 防止内容被底部导航遮挡 */
.my-page-container {
  padding-bottom: 60px; /* 根据导航高度调整 */
}
</style>