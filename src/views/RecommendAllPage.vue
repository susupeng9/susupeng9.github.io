<template>
  <div class="recommend-all-container">
    <div class="header">
      <router-link to="/interview" class="back-btn">
        <i class="icon-back">←</i>
      </router-link>
      <h1>热门职业推荐</h1>
    </div>
    <div class="engineer-recommend">
      <h2>工程师热门职业</h2>
      <div class="engineer-item" v-for="(engineer, index) in hotEngineerJobs" :key="index">
        <div class="item-content">
          <span class="engineer-type">{{ engineer }}</span>
          <i class="icon-star">★</i> <!-- 添加星星图标 -->
        </div>
      </div>
    </div>
    <div class="designer-recommend">
      <h2>设计师热门职业</h2>
      <div class="designer-item" v-for="(designer, index) in hotDesignerJobs" :key="index">
        <div class="item-content">
          <span class="designer-type">{{ designer }}</span>
          <i class="icon-star">★</i> <!-- 添加星星图标 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const hotEngineerJobs = [
  '软件工程师',
  '电气工程师',
  '数据工程师'
];
const hotDesignerJobs = [
  'UI设计师',
  'UX交互设计师',
  '原画师'
];
</script>

<style scoped>
.recommend-all-container {
  padding: 20px;
  background: #fafafa; /* 修改背景色，不再是纯白 */
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
.engineer-recommend,
.designer-recommend {
  margin-bottom: 30px;
}
.engineer-item,
.designer-item {
  padding: 15px;
  border: 2px solid #ffcc00; /* 修改边框颜色为黄色系 */
  border-radius: 10px; /* 增大圆角弧度 */
  margin-bottom: 10px;
  background: #fff; /* 卡片背景保持白色 */
}
.engineer-type,
.designer-type {
  font-size: 16px;
  color: #333; /* 文字颜色保持深色 */
}
.icon-star {
  float: right;
  color: #ffcc00; /* 星星图标颜色与边框一致 */
}
</style>