<template>  
  <div class="home-container">  
    <!-- 头部信息 -->  
    <div class="header-info">  
      <p class="greeting">您好，</p>  
      <p class="user-info">{{ userInfo }}</p>  
    </div>  

    <!-- 搜索栏 -->  
    <div class="search-bar">  
      <input type="text" placeholder="输入关键词搜索">  
      <span class="search-icon">🔍</span>  
    </div>  

   <div class="card-container">  
  <router-link to="/job-list" class="card-item" :style="{ background: 'linear-gradient(135deg, rgb(255, 203, 155) 0%, transparent 100%)' }">  
    <p class="card-title">热门工作岗位</p>  
    <p class="card-desc">各大公司招聘需求一目了然！</p>  
    <img src="@/assets/images/card1.png" alt="岗位插画" class="card-image">  
  </router-link>  
     <router-link to="/policy" class="card-item" :style="{ background: 'linear-gradient(135deg, rgba(135, 214, 253, 0.8) 0%, transparent 100%)' }">  
  <p class="card-title">国家政策</p>  
  <p class="card-desc">国家针对大学生就业最新政策</p>  
  <img src="@/assets/images/card2.png" alt="政策插画" class="card-image">  
</router-link>  
    </div>  

    <!-- 功能卡片 -->  
    <div class="function-cards">  
      <router-link to="/appreciation" class="function-card" :style="{ background: 'linear-gradient(135deg, rgba(254, 102, 94, 0.8) 0%, transparent 100%)' }">  
        <p class="card-title">优秀作品赏析</p>  
        <p class="card-desc">学习鉴赏 国内外优秀设计</p>  
      </router-link>  
     <router-link  
      to="/hot-company-consult"  
      class="function-card active"  
    >  
       <p class="card-title">热门公司咨询</p>  
        <p class="card-desc">查询了解 各大企业信息</p>  
       </router-link>  
      <!-- 修正课程讲座分享的路由包裹 -->
      <router-link to="/course-lecture" class="function-card" :style="{ background: 'linear-gradient(135deg, rgba(107, 241, 97, 0.8) 0%, transparent 100%)' }">  
      
        <p class="card-title">课程讲座分享</p>  
        <p class="card-desc">聆听研习 名师名人总结</p>  
      </router-link>
    </div>  

    <!-- 推荐列表 -->  
    <div class="recommend-list">  
      <div class="title-btn-group">  
        <p class="list-title">为你推荐</p>  
        <a href="#" class="view-all">查看全部</a>  
      </div>  
      <div class="job-list">  
        <div class="job-item">  
          <div class="job-info">  
            <p class="company-name">字节跳动</p>  
            <p class="job-title">游戏美术</p>  
            <p class="job-location">广州，海珠区</p>  
          </div>  
        </div>  
        <div class="job-item">  
          <div class="job-info">  
            <p class="company-name">广州光锥元科技</p>  
            <p class="job-title">AIGC设计师实习生</p>  
            <p class="job-location">广州，天河区</p>  
          </div>  
        </div>  
      </div>  
    </div>  

    <!-- 底部导航 -->  
    <div class="bottom-nav">  
      <a href="#" class="nav-item active">  
        <i class="icon-home">🏠</i>  
        <p>首页</p>  
      </a>  
      <!-- 修正：直接使用 router-link，去掉多余的 <a> -->  
      <router-link to="/interview" class="nav-item">  
        <i class="icon-interview">🏢</i>  
        <p>面试</p>  
      </router-link>  
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
import { useUserStore } from '@/store/userStore';  
import { computed } from 'vue';  
import { useRouter } from 'vue-router'; // 补充引入路由钩子

const router = useRouter();
const goToPolicyPage = () => {
  router.push({ path: '/policy' });
};

const userStore = useUserStore();  
const userInfo = computed(() => userStore.name || '—'); // 无数据时显示横线   
</script>  

<style scoped>  
.home-container {  
  padding: 20px;  
  background: #fff;  
  min-height: 100vh;  
}  

.header-info {  
  margin-bottom: 20px;  
}  
.greeting {  
  color: #666;  
  font-size: 14px;  
}  
.user-info {  
  font-size: 18px;  
  font-weight: bold;  
  margin-top: 5px;  
}  

.search-bar {  
  position: relative;  
  margin-bottom: 15px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 搜索栏阴影 */ 
}  
.search-bar input {  
  width: 87%;  
  padding: 12px 15px;  
  border: 1px solid #e0e0e0;  
  border-radius: 8px;  
  font-size: 14px;  
  padding-left: 40px;  
}  
.search-icon {  
  position: absolute;  
  left: 15px;  
  top: 50%;  
  transform: translateY(-50%);  
  color: #999;  
}  

.card-container {  
  display: flex;  
  gap: 15px;  
  margin-bottom: 20px;  
}  
.card-item {  
  flex: 1;  
  padding: 20px;  
  border-radius: 10px;  
  position: relative;  
display: flex; 
  flex-direction: column; /* 关键：设置垂直排列 */
  align-items: center; /* 子元素居中 */
  text-decoration: none; /* 新增，去除下划线 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 卡片阴影 */
  transition: transform 0.2s ease; /* 悬停动画过渡 */
 
}  
.card-item:hover {
  transform: scale(2); /* 悬停时卡片轻微放大 */
}
.card-title {  
  font-size: 18px;  
  margin-bottom: 10px;  
  position: relative; /* 保持相对定位，避免层级问题 */  
  z-index: 1;  
}  
.card-desc {  
  font-size: 14px;  
  color: #666;  
position: relative; /* 描述相对定位，确保层级 */  
  z-index: 1;  
}  
.card-item img {  
  width: 100%;  
  height: auto;  
  position: absolute;  
  bottom: 0;  
  right: 0;  
}  

.function-cards {  
  display: flex;  
  gap: 15px;  
  margin-bottom: 20px;  
   text-decoration: none; /* 新增，去除下划线 */
}  
.function-card {  
  flex: 1;  
  padding: 20px;  
  border-radius: 10px;  
  text-align: center;  
  background: #87CEFA; /* 粉色卡片背景 */  
   text-decoration: none; /* 新增，去除下划线 */
   background: linear-gradient(135deg, rgba(92, 167, 230, 0.8) 0%, transparent 100%); /* 添加渐变，从半透明白色到透明 */
} 

.function-card .card-title {  
  font-size: 16px;  
  margin-bottom: 8px; 
   text-decoration: none; /* 新增，去除下划线 */ 
   
}  
.function-card .card-desc {  
  font-size: 12px;  
  color: #666;  
   text-decoration: none; /* 新增，去除下划线 */
}  

.recommend-list {  
  margin-bottom: 20px;  
}  
.title-btn-group {  
  display: flex;  
  justify-content: space-between;  
  align-items: center;  
  margin-bottom: 15px;  
}  
.list-title {  
  font-size: 16px;  
  margin: 0;  
}  
.view-all {  
  color: #ff6644;  
  font-size: 14px; 
   text-decoration: none; /* 新增，去除下划线 */ 
   
}  
.job-list {  
  display: flex;  
  flex-wrap: wrap;  
  gap: 15px;  
}  
.job-item {  
  flex: 1 1 45%;  
  min-width: 200px;  
  padding: 15px;  
  border: 1px solid #f0f0f0;  
  border-radius: 8px;  
}  
.job-info .company-name {  
  font-size: 14px;  
  color: #666;  
}  
.job-info .job-title {  
  font-size: 16px;  
  margin: 5px 0;  
}  
.job-info .job-location {  
  font-size: 12px;  
  color: #999;  
}  

.bottom-nav {  
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
.nav-item .icon-home {  
  color: #ff6644;  
  
}  
.active p {  
  color: #ff6644;  
}  
.nav-item p {  
  font-size: 12px;  
  margin-top: 5px;  
  color: #666;  
}  
.card-image {
  width: 100%;  
  height: auto;  
  position: absolute;  
  bottom: 0;  
  left: 0;  
 opacity: 0.85; /* 新增透明度设置 */  
  z-index: 0; /* 图片层级低于文字 */  
}
</style>