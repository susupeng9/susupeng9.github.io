<template>  
  <div class="designer-container">  
    <div class="header">  
      <router-link to="/interview" class="back-btn">  
        <i class="icon-back">←</i>  
      </router-link>  
      <h1>设计师</h1>  
    </div>  
    <div class="designer-list">  
      <div class="designer-item" v-for="(item, index) in designerList" :key="index" @click="goToInterview(item)">  
        <div class="item-content">  
          <span class="designer-type">{{ item.type }}</span>  
          <i class="icon-bookmark" @click="toggleFavorite(index)">⭐</i>  
        </div>  
        <div class="item-border" :style="{ borderColor: item.isFavorite ? '#ff4444' : '#ffcd00' }"></div>  
      </div>  
    </div>  
  </div>  
</template>  

<script setup>  
import { ref } from 'vue';  
import { useRouter } from 'vue-router'; // 引入路由钩子

const router = useRouter(); // 获取路由实例
const designerList = ref([  
 { type: 'UI设计师', isFavorite: false, route: '/interview/chat' },  
  { type: 'UX交互设计师', isFavorite: false, route: '/ux - designer - interview' },  
  { type: '室内设计师', isFavorite: false, route: '/interior - designer - interview' },  
  { type: '原画师', isFavorite: false, route: '/original - painter - interview' },  
  { type: 'GUI设计师', isFavorite: false, route: '/gui - designer - interview' },  
  { type: '建筑设计师', isFavorite: false, route: '/architectural - designer - interview' },  
  { type: '园林设计师', isFavorite: false, route: '/landscape - designer - interview' },  
  { type: '工业设计师', isFavorite: false, route: '/industrial - designer - interview' },  
  { type: '插画设计师', isFavorite: false, route: '/illustration - designer - interview' },  
  { type: '服装设计师', isFavorite: false, route: '/fashion - designer - interview' }
]);  

// 收藏切换逻辑  
const toggleFavorite = (index) => {  
  designerList.value[index].isFavorite = !designerList.value[index].isFavorite;  
};  

// 跳转逻辑  
const goToInterview = (item) => {  
  router.push(item.route);
};  
</script>  

<style scoped>  
/* 原有样式无需修改，保留即可 */  
.designer-container {  
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
.designer-list {  
  display: grid;  
  grid-template-columns: repeat(2, 1fr);  
  gap: 15px;  
}  
.designer-item {  
  position: relative;  
}  
.item-content {  
  padding: 15px;  
  border: 2px solid #fff;  
  border-radius: 10px;  
  background: #fff;  
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);  
}  
.designer-type {  
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