<template>
  <div class="work-detail-page">
    <router-link to="/appreciation" class="back-btn">←</router-link>
    <!-- 图片堆叠容器 -->
    <div class="work-image-container">
      <!-- 循环渲染图片，确保图片数组有内容 -->
      <img 
        :src="img" 
        alt="作品图" 
        v-for="(img, index) in currentWork.images" 
        :key="index" 
        class="work-image"
      >
    </div>
    <!-- 文字信息区 -->
    <div class="work-info">
      <h3>{{ currentWork.title }}</h3>
      <p class="artist">艺术家: {{ currentWork.artist }}</p>
      <div class="description">
        <h4>作品介绍</h4>
        <p>{{ currentWork.description }}</p>
      </div>
    </div>
  </div>
</template>


<script setup>  
import { useRoute } from 'vue-router';  
const route = useRoute();  
const currentWork = route.query.work ? JSON.parse(route.query.work) : {};  
console.log('currentWork 数据：', currentWork);  
</script>    


<style scoped>
.work-detail-page {
  padding: 20px;
  background: #f9f9f9;
}

.back-btn {
  position: absolute;
  left: 20px;
  top: 20px;
  color: #333;
  text-decoration: none;
}

.work-image-container {
  position: relative;
  margin-bottom: 20px;
}

.work-image {
  width: 100%;
  height: auto;
  max-width: 400px;
  position: relative;
  z-index: 1;
  /* 控制图片堆叠偏移 */
  &:nth-child(2) {
    transform: translate(20px, 20px);
  }
  &:nth-child(3) {
    transform: translate(40px, 40px);
  }
}

.work-info {
  background: white;
  padding: 20px;
  border-radius: 8px;
}

h3 {
  margin-bottom: 10px;
}

.artist {
  color: #666;
  margin-bottom: 15px;
}

.description p {
  line-height: 1.8;
  color: #333;
}
</style>