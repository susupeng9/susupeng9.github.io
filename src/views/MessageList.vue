<template>
  <div class="message-list">
    <header class="list-header">
      <h3>消息</h3>
      <button @click="showAddFriendModal">添加HR</button>
    </header>

    <div class="message-item" v-for="(hr, index) in hrList" :key="index" @click="goToChat(hr)">
      <img :src="hr.avatar" alt="HR头像" class="avatar">
      <div class="hr-info">
        <p class="hr-name">{{ hr.name }}</p>
        <p class="last-message">{{ hr.lastMessage }}</p>
      </div>
      <span class="message-time">{{ hr.time }}</span>
    </div>

    <!-- 添加HR模态框 -->
    <div v-if="showModal" class="add-hr-modal">
      <h4>添加HR</h4>
      <input type="text" v-model="newHrAccount" placeholder="输入HR账号">
      <button @click="handleAddHr">发送申请</button>
      <button @click="showModal = false">取消</button>
    </div>

    <!-- 新增底部导航 -->
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
      <router-link to="/message" class="nav-item active">
        <i class="icon-message">💬</i>
        <p>消息</p>
      </router-link>
      <router-link to="/my" class="nav-item">
        <i class="icon-my">👤</i>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import avatar1 from '@/assets/example2/avatar1.png';
import avatar2 from '@/assets/example2/avatar2.png';
const router = useRouter();
const hrList =ref([
  { 
    id: 1, 
    name: '梁女士', 
    avatar: avatar1, // 绑定导入的图片变量
    lastMessage: '老师您好！我有参与过电商APP界...', 
    time: '24-12-30' 
  },
  { 
    id: 2, 
    name: '刘先生', 
    avatar: avatar2, // 绑定导入的图片变量
    lastMessage: '好的，谢谢', 
    time: '24-03-03' 
  }
]);
const showModal = ref(false);
const newHrAccount = ref('');

// 进入聊天界面
const goToChat = (hr) => {
  router.push({ path: '/chat', query: { hrId: hr.id } });
};

// 添加HR逻辑（需配合后端接口）
const handleAddHr = () => {
  if (newHrAccount.value.trim()) {
    // 模拟调用后端接口
    console.log('发送添加HR申请：', newHrAccount.value);
    showModal.value = false;
  }
};
</script>

<style scoped>
.message-list {
  padding: 20px;
  background: #f8f8f8;
  min-height: 100vh;
  position: relative; /* 为底部导航腾空间 */
}
.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.message-item {
  display: flex;
  align-items: center;
  padding: 15px;
  background: white;
  margin: 10px 0;
  border-radius: 10px;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}
.hr-info {
  flex: 1;
}
.hr-name {
  font-size: 16px;
  margin-bottom: 5px;
}
.last-message {
  font-size: 14px;
  color: #666;
}
.message-time {
  font-size: 12px;
  color: #999;
}
.add-hr-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* 新增底部导航样式 */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #666;
}
.nav-item p {
  font-size: 12px;
  margin-top: 5px;
}
.nav-item.active {
  color: #ff6644;
}
</style>