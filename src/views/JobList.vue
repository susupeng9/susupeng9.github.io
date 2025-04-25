<template>
  <div class="job-list-page">
    <header class="page-header">
      <router-link to="/home" class="back-btn">← 返回</router-link>
      <h2>热门工作岗位</h2>
    </header>
    <div class="job-item" v-for="(job, index) in jobList" :key="index">
      <div class="job-header">
        <h3>{{ job.title }}</h3>
        <span class="salary">{{ job.salary }}</span>
      </div>
      <div class="company-info">
        <p>{{ job.company }} {{ job.companySize }} {{ job.industry }}</p>
      </div>
      <div class="job-tags">
        <span v-for="(tag, idx) in job.tags" :key="idx">{{ tag }}</span>
      </div>
      <div class="contact-info">
         <span>{{ job.contactName }} · {{ job.contactRole }}</span>
        <span>{{ job.location }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const jobList = [
  {
    title: '游戏美术（视觉//动画/视频）',
    salary: '200-250元/天',
    company: '字节跳动',
    companySize: '10000人以上',
    industry: '互联网',
    tags: ['3天/周', '3个月', '本科', '休闲益智', '手机游戏'],
    contactAvatar: 'https://via.placeholder.com/50',
    contactName: '刘先生',
    contactRole: '技术',
    location: '广州 海珠区 琶洲'
  },
  {
    title: 'AIGC设计师实习生',
    salary: '390-400元/天',
    company: '广州光锥元科技',
    companySize: '100-499人',
    industry: '互联网',
    tags: ['3天/周', '3个月', '本科', 'SD', 'comfyui'],
    contactAvatar: 'https://via.placeholder.com/50',
    contactName: '梁女士',
    contactRole: '人力资源专员',
    location: '广州 天河区 天园'
  },
{
    "title": "AIGC训练师",
    "salary": "20-40K",
    "company": "广州市莱诺鸟智能科技",
    "companySize": "20-99人",
    "industry": "互联网",
    "tags": ["1-3年", "本科", "Comfyui", "Stable Diffusion", "优秀的开发经验"],
    "contactAvatar": "https://via.placeholder.com/50",
    "contactName": "李先生",
    "contactRole": "招聘者",
    "location": "广州 白云区 三元里"
  },
  {
    "title": "交互/UI设计师",
    "salary": "15-25K",
    "company": "SIA艺术教育",
    "companySize": "500-999人",
    "industry": "在线教育",
    "tags": ["经验不限", "硕士", "界面设计", "不接受居家办公", "交互设计"],
    "contactAvatar": "https://via.placeholder.com/50",
    "contactName": "冯女士",
    "contactRole": "招聘经理",
    "location": "广州 天河区 体育中心"
  },
  {
    "title": "UI设计实习生",
    "salary": "200-250元/天",
    "company": "深圳用图科技有限公司",
    "companySize": "20-99人",
    "industry": "互联网",
    "tags": ["5天/周", "6个月", "本科", "交互设计", "客户端"],
    "contactAvatar": "https://via.placeholder.com/50",
    "contactName": "郑先生",
    "contactRole": "HRBP",
    "location": "广州 海珠区 琶洲"
  },
  {
    "title": "酷狗音乐视觉设计师",
    "salary": "30-35K·15薪",
    "company": "酷狗音乐",
    "companySize": "1000-9999人",
    "industry": "互联网",
    "tags": ["5-10年", "本科", "视觉设计", "UI", "交互设计"],
    "contactAvatar": "https://via.placeholder.com/50",
    "contactName": "廖女士",
    "contactRole": "招聘经理",
    "location": "广州 天河区 棠下"
  }
];
</script>

<style scoped>
.job-list-page {
  padding: 20px;
  background: #FDF5E6; /* 浅橙色背景 */
}
.page-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.back-btn {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  margin-right: 15px;
}
.job-item {
  background: white;
  padding: 15px;
  margin: 15px 0;
  border-radius: 10px;
}
.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.job-header h3 {
  font-size: 18px;
  color: #333;
}
.salary {
  color: #FF6600; /* 橙色薪资 */
  font-size: 16px;
}
.company-info {
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
}
.job-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}
.job-tags span {
  padding: 5px 10px;
  border: 1px solid #FF9933;
  border-radius: 4px;
  font-size: 12px;
  color: #333;
}
.contact-info {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #666;
  font-size: 14px;
}
.contact-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>

### 3. 路由配置（src/router/index.js）  
```javascript
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import JobList from '../views/JobList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/job-list', component: JobList, name: 'JobList' }
  ]
});

export default router;