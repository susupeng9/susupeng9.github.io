<template>
  <div class="engineer-container">
    <div class="header">
      <router-link to="/interview" class="back-btn">
        <i class="icon-back">←</i>
      </router-link>
      <h1>工程师</h1>
    </div>
    <div class="engineer-list">
      <div class="engineer-item" v-for="(item, index) in engineerList" :key="index" @click="goToInterview(item)">
        <div class="item-content">
          <span class="engineer-type">{{ item.type }}</span>
          <i class="icon-bookmark" @click="toggleFavorite(index)">⭐</i>
        </div>
        <div class="item-border" :style="{ borderColor: item.isFavorite? '#ff4444' : '#ffcd00' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const engineerList = ref([
  { type: '人工智能工程师', isFavorite: false, route: '/ai - engineer - interview' },
  { type: '数据科学家', isFavorite: false, route: '/data - scientist - interview' },
  { type: '机器学习工程师', isFavorite: false, route: '/machine - learning - engineer - interview' },
  { type: '自然语言处理', isFavorite: false, route: '/nlp - engineer - interview' },
  { type: '前端开发工程师', isFavorite: false, route: '/frontend - developer - interview' },
  { type: '后端开发工程师', isFavorite: false, route: '/backend - developer - interview' },
  { type: '云计算工程师', isFavorite: false, route: '/cloud - computing - engineer - interview' },
  { type: 'DevOps工程师', isFavorite: false, route: '/devops - engineer - interview' },
  { type: '网络安全专家', isFavorite: false, route: '/cybersecurity - expert - interview' },
  { type: '渗透测试工程师', isFavorite: false, route: '/penetration - tester - interview' }
]);

// 收藏切换逻辑
const toggleFavorite = (index) => {
  engineerList.value[index].isFavorite =!engineerList.value[index].isFavorite;
};

// 跳转逻辑
const goToInterview = (item) => {
  router.push(item.route);
};
</script>

<style scoped>
.engineer-container {
  padding: 20px;
  background: #fff;
  min-height: 100vh;
}
.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.back-btn {
  margin-right: 15px;
  font-size: 20px;
  color: #333;
  text-decoration: none;
}
.engineer-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}
.engineer-item {
  position: relative;
}
.item-content {
  padding: 15px;
  border: 2px solid #fff;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.engineer-type {
  font-size: 16px;
  color: #333;
}
.icon-bookmark {
  float: right;
  font-size: 18px;
  cursor: pointer;
}
.item-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid #fff;
  border-radius: 10px;
  transition: border-color 0.3s;
}
</style>