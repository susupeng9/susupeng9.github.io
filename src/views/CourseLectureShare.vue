<template>
  <div class="course-lecture-page">
    <!-- 返回首页按钮 -->
    <router-link to="/home" class="back-to-home">
      <i class="icon-back">←</i>
    </router-link>

    <!-- 页面标题 -->
    <h3 class="page-title">课程讲座分享</h3>

    <!-- 搜索栏 -->
    <div class="search-bar">
      <input type="text" placeholder="输入讲座关键词搜索">
    </div>

    <!-- B站链接列表 -->
    <div class="lecture-list">
      <div class="lecture-item" v-for="(item, index) in lectureList" :key="index">
        <p class="lecture-title">{{ item.title }}</p>
        <a :href="item.url" target="_blank" class="bilibili-link">{{ item.url }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
// B站讲座数据（根据用户提供的链接填充）
const lectureList = [
  {
    title: "一个视频讲透考研的一切！时间线/信息源/初试/复试/政治/外语/数学/专业课/择校/择专业",
    url: "https://www.bilibili.com/video/BV1qwzdY4EqG/?share_source=copy_web&vd_source=47c88418dbf62c1eff9dfd177243fed1"
  },
  {
    title: "25考研政治肖秀荣形势与政策视频磨耳朵",
    url: "https://www.bilibili.com/video/BV1x6mfYqE1S/?share_source=copy_web&vd_source=47c88418dbf62c1eff9dfd177243fed1"
  },
  {
    title: "考研政治形势与政策该如何准备？日常听新闻帮助有多大？",
    url: "https://www.bilibili.com/video/BV1jf4y1b7nd/?share_source=copy_web&vd_source=47c88418dbf62c1eff9dfd177243fed1"
  },
  {
    title: "1.2 明确的职业定位-自我认知",
    url: "https://www.bilibili.com/video/BV1Ff4y1u7FY/?share_source=copy_web&vd_source=47c88418dbf62c1eff9dfd177243fed1"
  },
  {
    title: "设计师の未来归宿。",
    url: "https://www.bilibili.com/video/BV1SYySYzEuz/?share_source=copy_web"
  },
  {
    title: "职业访谈：3分钟走进95后UI设计师的职场世界",
    url: "https://www.bilibili.com/video/BV14f4y1A7cN/?share_source=copy_web&vd_source=47c88418dbf62c1eff9dfd177243fed1"
  }
];
</script>

<style scoped>
.course-lecture-page {
  padding: 20px;
  background: #f9f9f9;
  min-height: 100vh;
  position: relative;
}

.back-to-home {
  position: absolute;
  left: 20px;
  top: 20px;
  text-decoration: none;
  color: #333;
  font-size: 18px;
}

.page-title {
  text-align: center;
  margin: 40px 0 30px;
  color: #333;
}

.search-bar {
  margin-bottom: 30px;
}

.search-bar input {
  width: 100%;
  padding: 12px 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
}

.lecture-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 800px;
  margin: 0 auto;
}

.lecture-item {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.lecture-title {
  color: #333;
  font-size: 16px;
  margin-bottom: 12px;
  line-height: 1.4;
}

.bilibili-link {
  color: #0066cc;
  font-size: 14px;
  word-break: break-all;
  text-decoration: none;
  display: block;
  transition: color 0.3s;
}

.bilibili-link:hover {
  color: #004499;
  text-decoration: underline;
}
</style>