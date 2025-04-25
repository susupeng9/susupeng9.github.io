<template>
  <div class="history-review-container">
    <router-link to="/interview" class="back-btn">←</router-link>
    <h1 class="title">面试视频历史回顾🔍</h1>
    <div id="image-container">
      <!-- 这里动态添加图片元素 -->
      <p class="image-name">①三月十五号</p>
      <img v-for="(imageUrl, index) in imageUrls" :key="index" :src="imageUrl" alt="面试图片">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryReview',
  data() {
    return {
      imageUrls: ['src/assets/images/picture1.jpg']
    };
  }
};
</script>

<style scoped>
.history-review-container {
  padding: 20px;
  background-color: #FFE699; 
  position: relative;
  min-height: 100vh; /* 添加这行代码，使容器最小高度为视口高度 */
}
.back-btn {
  color: #333; 
  font-size: 16px; 
  text-decoration: none; 
  margin-right: 10px; 
}
.title {
  font-size: 25px;
}
#image-container {
  background-color: #fff; 
  padding: 5px; 
   height: 800px; 
}
#image-container img {
  max-width: 30%;
  height: auto;
  margin-bottom: 10px;
}
.image-name {
  margin-top: 5px;
  font-size: 15px;
  color: #666;
   font-weight: bold; /* 添加这行代码，将字体加粗 */
}
.history-review-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ccc;
}
.history-review-container::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ccc;
}
</style>