<template>
  <div class="interview-container">
    <!-- 顶部标题 -->
    <div class="page-header">
      <h1>模拟面试</h1>
    </div>

    <!-- AI模拟面试模块 -->
    <div class="ai-interview-section">
      <div class="section-header">
        <h2>AI模拟面试</h2>
        <a href="#" class="view-all">查看全部</a>
      </div>
     <div class="card-group">
       <router-link to="/engineer" class="engineer-card">
        <div class="interview-card" :style="{ background: '#FFCDD2' }">
         <h3>工程师</h3>
         <p>打好面试基石！</p>
        </div> <!-- 补充闭合标签 -->
      </router-link>
        <!-- 关键：添加路由跳转 -->
        <router-link to="/interview/designer" class="interview-card" :style="{ background: '#FFF9C4' }"> 
          <h3>设计师</h3>
          <p>设计创意百分百</p>
</router-link>
      
      </div>
    </div>

    <!-- 为您推荐模块 -->
    <div class="recommend-section">
      <div class="section-header">
        <h2>为您推荐</h2>
         <router-link to="/recommend-all" class="view-all">查看全部</router-link> <!-- 修改为 router-link 实现跳转 -->
      </div>
      <div class="card-group">
        <div class="recommend-card" :style="{ background: '#C8E6C9' }">
          <h3>原画师</h3>
          <p>设计得心应手</p>
        </div>
        <div class="recommend-card" :style="{ background: '#BBDEFB' }">
          <h3>前端界面</h3>
          <p>界面开发轻松应对</p>
        </div>
      </div>
    </div>

    <!-- 常用功能模块 -->
    <div class="function-section">
      <h2>常用功能</h2>
      <div class="function-list">
        <div class="function-item" @click="goToHistoryReview">
          <i class="icon-clock">⏱️</i>
          <p>历史回顾</p>
        </div>
        <div class="function-item">
          <i class="icon-bookmark">📌</i>
          <p>收藏夹</p>
        </div>
      </div>
    </div>

    <!-- 底部导航（已存在，此处仅展示结构） -->
    <div class="bottom-nav">
       <router-link to="/home" class="nav-item"> 
        <i class="icon-home">🏠</i>
        <p>首页</p>
       </router-link>  
      <a href="#" class="nav-item active">
        <i class="icon-interview">🏢</i>
        <p>面试</p>
      </a>
     <router-link to="/question-bank" class="nav-item">   
        <i class="icon-question">📚</i>  
        <p>题库</p>  
       </router-link> 
        <!-- 消息 -->
    <router-link to="/message" class="nav-item">  
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
import { useRouter } from 'vue-router';

const router = useRouter();

const goToHistoryReview = () => {
  router.push('/history'); // 这里的 '/history' 是你在路由中配置的历史回顾页面的路径，需要与路由配置一致
};
</script>

<style scoped>
.interview-container {
  padding: 20px;
  background: #fff;
  min-height: 100vh;
  
}

.page-header h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.section-header h2 {
  font-size: 18px;
  margin: 0;
}

.view-all {
  color: #ff6644;
  font-size: 14px;
  text-decoration: none;
   
}

.card-group {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  
}

.interview-card,
.recommend-card {
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
   text-decoration: none; /* 新增，去除下划线 */
}

.interview-card h3,
.recommend-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
   
}

.interview-card p,
.recommend-card p {
  font-size: 14px;
  color: #666;
  
}

.function-section h2 {
  font-size: 18px;
  margin-bottom: 15px;
}

.function-list {
  display: flex;
  gap: 30px;
}

.function-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.function-item i {
  font-size: 32px;
  color: #666;
  margin-bottom: 5px;
}

.function-item p {
  font-size: 14px;
  color: #666;
  
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  background: #fff;
  border-top: 1px solid #f0f0f0;
}
		
.nav-item {
  flex: 1;
  max-width: calc(100% / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5px;
  
}

.nav-item.active p {
  color: #ff6644;
}

.nav-item i {
  font-size: 20px;
  margin-bottom: 5px;
}

.nav-item p {
  font-size: 12px;
  color: #666;
  margin: 0;
}

.engineer-card {
  text-decoration: none; /* 添加这行代码去除下划线 */
} 
</style>