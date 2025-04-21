<template>  
  <div class="question-bank-page">  
    <header class="page-header">  
      <h3>题库</h3>  
      <router-link to="/search" class="search-icon">🔍</router-link>  
    </header>  

    <!-- 标签切换 -->  
    <div class="tab-switch">  
      <span  
        class="tab-item"  
        :class="{ active: currentTab === 'study' }"  
        @click="currentTab = 'study'"  
      >学习</span>  
      <span  
        class="tab-item"  
        :class="{ active: currentTab === 'collected' }"  
        @click="currentTab = 'collected'"  
      >已收藏</span>  
    </div>  

    <!-- 分类标签 -->  
    <div class="category-tags">  
      <span  
        class="tag"  
        :class="{ active: currentCategory === 'design' }"  
        @click="currentCategory = 'design'"  
      >设计</span>  
      <span  
        class="tag"  
        :class="{ active: currentCategory === 'internet' }"  
        @click="currentCategory = 'internet'"  
      >互联网</span>  
      <span class="tag">市场</span>  
      <span class="tag">法学</span>  
      <span class="tag">职能</span>  
    </div>  

    <!-- 题库列表 -->  
    <div class="question-list">  
      <div class="question-item" v-for="(item, index) in filteredList" :key="index">  
        <div class="item-header">  
          <p class="item-title">{{ item.title }}</p>  
          <i class="icon-collect" @click="toggleCollect(item)"></i>  
        </div>  
        <div class="item-info">  
          <span>{{ item.location }} · {{ item.type }}</span>  
          <router-link :to="`/question-detail/${item.title}`" class="study-btn">学习</router-link>  
        </div>  
        <p class="update-time">{{ item.updateTime }}</p>  
      </div>  
    </div>  

    <!-- 底部导航（若需复用，可抽离为公共组件） -->  
    <div class="bottom-nav">  
      <router-link to="/home" class="nav-item">  
        <i class="icon-home">🏠</i>  
        <p>首页</p>  
      </router-link>  
      <router-link to="/interview" class="nav-item">  
        <i class="icon-interview">🏢</i>  
        <p>面试</p>  
      </router-link>  
      <router-link to="/question-bank" class="nav-item active">  
        <i class="icon-question">📚</i>  
        <p>题库</p>  
      </router-link>  
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
import { ref } from 'vue';  

// 模拟题库数据  
const questionList = [  
  {  
    title: '优秀作品集模板',  
    location: '北京, 海淀',  
    type: '全职',  
    updateTime: '2024年4月9日更新',  
    isCollected: false  
  },  
  {  
    title: 'UI界面设计师常见面试问题',  
    location: '北京, 海淀',  
    type: '全职',  
    updateTime: '2024年3月1日更新',  
    isCollected: false  
  },  
  {  
    title: '产品经理简历优秀模板',  
    location: '北京, 海淀',  
    type: '全职',  
    updateTime: '2024年4月9日更新',  
    isCollected: false  
  }  
];  

const currentTab = ref('study');  
const currentCategory = ref('design');  

// 过滤显示列表  
const filteredList = ref(questionList);  

// 收藏切换  
const toggleCollect = (item) => {  
  item.isCollected = !item.isCollected;  
};  
</script>  

<style scoped>  
.question-bank-page {  
  padding: 20px;  
  background: #f9f9f9;  
  min-height: 100vh;  
}  

.page-header {  
  display: flex;  
  justify-content: space-between;  
  align-items: center;  
  margin-bottom: 20px;  
}  

.search-icon {  
  text-decoration: none;  
  color: #333;  
  font-size: 18px;  
}  

.tab-switch {  
  display: flex;  
  gap: 20px;  
  margin-bottom: 15px;  
}  
.tab-item {  
  color: #666;  
  padding: 5px 15px;  
  border-bottom: 2px solid transparent;  
}  
.tab-item.active {  
  color: #ff6644;  
  border-bottom: 2px solid #ff6644;  
}  

.category-tags {  
  display: flex;  
  gap: 10px;  
  margin-bottom: 20px;  
}  
.tag {  
  padding: 5px 12px;  
  border: 1px solid #e0e0e0;  
  border-radius: 20px;  
  font-size: 14px;  
}  
.tag.active {  
  background: #ff6644;  
  color: white;  
  border-color: #ff6644;  
}  

.question-item {  
  background: white;  
  padding: 15px;  
  border-radius: 8px;  
  margin-bottom: 15px;  
}  
.item-header {  
  display: flex;  
  justify-content: space-between;  
  align-items: center;  
  margin-bottom: 10px;  
}  
.item-title {  
  font-size: 16px;  
}  
.icon-collect {  
  color: #ff6644;  
  font-size: 18px;  
  cursor: pointer;  
}  
.item-info {  
  display: flex;  
  justify-content: space-between;  
  align-items: center;  
  margin-bottom: 10px;  
}  
.study-btn {  
  padding: 5px 15px;  
  border: 1px solid #ff6644;  
  border-radius: 20px;  
  color: #ff6644;  
  background: white;  
  cursor: pointer;  
   text-decoration: none; /* 添加这行代码去除下划线 */
}  
.update-time {  
  color: #999;  
  font-size: 12px;  
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
  text-decoration: none;  
  color: #666;  
}  
.nav-item.active {  
  color: #ff6644;  
}  
.nav-item p {  
  font-size: 12px;  
  margin-top: 5px;  
}  
</style>  