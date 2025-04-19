<template>
  <div class="chat-container">
    <header class="chat-header">
      <router-link to="/message" class="back-btn">←</router-link>
      <h3>{{ hrName }}</h3>
    </header>

    <div class="chat-content">
      <div class="chat-message" v-for="(msg, index) in chatList" :key="index">
        <div v-if="msg.isMe" class="my-message">
          <p>{{ msg.content }}</p>
          <span class="msg-time">{{ msg.time }}</span>
        </div>
        <div v-else class="hr-message">
          <p>{{ msg.content }}</p>
          <span class="msg-time">{{ msg.time }}</span>
        </div>
      </div>
    </div>

    <div class="input-group">
      <input type="text" v-model="inputContent" placeholder="这里输入内容...">
      <button @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const hrId = router.currentRoute.value.query.hrId;
const hrName = ref('');
const chatList = ref([
  { content: '你好，我是枫叶公司HR梁琪，看到你的简历对UI设计师岗位感兴趣，方便沟通下项目经验吗', isMe: false, time: '24-12-30' },
  { content: '老师您好！我有参与过电商APP界面设计项目，负责首页和商品详情页的UI设计。', isMe: true, time: '24-12-30' }
]);
const inputContent = ref('');

onMounted(() => {
  // 模拟根据 hrId 获取 HR 信息和聊天记录（需对接后端接口）
  hrName.value = '梁女士';
});

const sendMessage = () => {
  if (inputContent.value.trim()) {
    chatList.value.push({ 
      content: inputContent.value, 
      isMe: true, 
      time: new Date().toLocaleTimeString() 
    });
    inputContent.value = '';
  }
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f8f8f8;
}
.chat-header {
  display: flex;
  align-items: center;
  padding: 15px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.back-btn {
  margin-right: 15px;
  font-size: 18px;
}
.chat-content {
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.my-message {
  align-self: flex-end;
  background: #e3f2fd;
  padding: 10px 15px;
  border-radius: 20px;
}
.hr-message {
  background: white;
  padding: 10px 15px;
  border-radius: 20px;
}
.msg-time {
  font-size: 12px;
  color: #999;
  display: block;
  text-align: right;
  margin-top: 5px;
}
.input-group {
  display: flex;
  padding: 15px;
  background: white;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
}
.input-group input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  margin-right: 10px;
}
.input-group button {
  padding: 10px 20px;
  background: #ff6644;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
</style>