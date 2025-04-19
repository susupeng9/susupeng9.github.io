<template>
  <div class="interview-chat">
    <header class="chat-header">
      <i class="back-icon" @click="goBack">←</i>
      <h3>模拟面试-自然语言处理工程师</h3>
    </header>

    <div class="chat-content">
      <div class="chat-item" v-for="(msg, index) in chatMessages" :key="index">
        <div v-if="msg.isMe" class="my-message">
          <p>{{ msg.content }}</p>
        </div>
        <div v-else class="system-message">
          <img src="@/assets/images/interviewer.png" alt="面试官" class="avatar">
          <p>{{ msg.content }}</p>
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const chatMessages = ref([
  { content: '您好，欢迎参加本次职位面试。我是面试官，请允许我简要介绍本公司和这个职位。', isMe: false },
]);
const inputContent = ref('');

const goBack = () => {
  router.back();
};

const sendMessage = () => {
  if (inputContent.value.trim()) {
    chatMessages.value.push({ content: inputContent.value, isMe: true });
    // 模拟面试官回复
    setTimeout(() => {
      chatMessages.value.push({ 
        content: '感谢回复！接下来我们聊聊您的设计项目经验...', 
        isMe: false 
      });
    }, 1000);
    inputContent.value = '';
  }
};
</script>

<style scoped>
.interview-chat {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f5f5f5;
}

.chat-header {
  display: flex;
  align-items: center;
  padding: 15px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.back-icon {
  margin-right: 15px;
  font-size: 18px;
  cursor: pointer;
}

.chat-content {
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.chat-item {
  align-self: flex-end;
}

.my-message {
  max-width: 70%;
  background: #e3f2fd;
  padding: 10px 15px;
  border-radius: 20px;
  align-self: flex-end;
}

.system-message {
  display: flex;
  align-items: center;
  gap: 10px;
}

.system-message .avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.system-message p {
  max-width: 80%;
  background: white;
  padding: 10px 15px;
  border-radius: 20px;
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