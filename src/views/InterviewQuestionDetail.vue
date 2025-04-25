<template>
  <div class="question-detail-page">  
    <header class="page-header">  
      <router-link to="/question-bank" class="back-btn">←</router-link>  
      <h3>{{ questionTitle }}</h3>  
      <i class="icon-collect" @click="toggleCollect"></i>  
    </header>  

    <div class="question-list">  
      <p class="section-title">常见问题</p>  
      <div v-for="(item, index) in questionList" :key="index">  
        <p class="question-item">  
          {{ index + 1 }}.  
          <span class="question-text">{{ item.question }}</span>  
        </p>  
        <p class="answer-item">  
          <span class="answer-text">{{ item.answer }}</span>  
        </p>  
      </div>  
    </div>  
  </div>  
</template>

<script setup>  
import { useRoute } from 'vue-router';  
import { ref } from 'vue';  

const route = useRoute();  
// 引入完整的 questionData  
const questionData = {  
  "UI界面设计师常见面试问题": [  
    {  
      question: "请简单自我介绍一下，包括你的教育背景、工作经验和个人特长。", 
      answer: "我是一名具备5年经验的UI/UX设计师，毕业于交互设计专业，曾在某互联网大厂负责移动端产品设计，主导过DAU超千万的电商APP改版项目。擅长用户旅程优化与数据驱动设计，熟练掌握Figma、Axure等工具，具备从用户研究到高保真原型落地的全链路能力。"  
    },  
    {  
      question: "为什么选择成为一名UI设计师？你对这个职业有什么看法？",  
      answer: "UI设计是连接用户需求与技术实现的桥梁，核心在于通过视觉语言解决复杂问题。这个职业要求兼具美学感知与逻辑思维，既要关注色彩、动效等细节，也需理解用户行为的心理学原理。当前AI与AR技术融合，推动UI向更自然的交互形态演进，让我对职业未来充满期待。"  
    },  
    {  
      question: "请谈谈你最喜欢的一个设计作品，并说明你的设计思路和实现过程。",  
      answer: "案例：某跨境电商APP‘沉浸式购物车’设计。设计思路：\n- 痛点：传统购物车转化率低（仅8%），用户因价格对比复杂、操作路径冗长放弃下单。\n- 解决方案：\n  1. 视觉分层：采用卡片式布局，按优先级排列商品信息、促销标签、结算按钮。\n  2. 动态反馈：加入‘价格波动曲线’交互，实时展示历史价格趋势，增强决策信心。\n  3. 智能推荐：底部悬浮栏基于浏览记录推荐互补商品，提升连带率。\n结果：上线后转化率提升至15%，用户停留时长增加22%。"  
    },  
    {  
      question: "请简述一下设计思维（Design Thinking）的五个阶段，并谈谈你在实际工作中是如何应用的。",  
      answer: "设计思维五阶段：共情（Empathize）→ 定义（Define）→ 构思（Ideate）→ 原型（Prototype）→ 测试（Test）。\n实例：\n- 共情：通过用户访谈发现老年群体使用智能设备时存在‘文字过小、操作步骤复杂’的痛点。\n- 定义：提炼核心需求为‘大字体+语音交互+简化流程’。\n- 构思：头脑风暴生成‘语音指令直达功能模块’‘一键呼叫客服’等方案。\n- 原型：用Figma制作可交互低保真原型，重点测试语音识别准确率。\n- 测试：邀请10位目标用户试用，发现语音唤醒词需更口语化（如‘小助手’替代‘请说’）。"  
    },  
    {  
      question: "请介绍一下你常用的设计工具，并说明它们的优缺点。",  
      answer: "工具及优缺点：\n- Figma：优点是云端协作、插件生态丰富、支持原型交互；缺点是复杂文件加载慢、对硬件要求高。\n- Sketch：优点是轻量化、Mac端适配完美；缺点是仅限苹果生态、协作功能较弱。\n- Adobe XD：优点是与PS/AI无缝衔接、交互动效直观；缺点是插件生态不如Figma。\n- Principle：优点是高精度动效设计；缺点是学习成本高、依赖Mac。"  
    },  
    {  
      question: "如何进行用户需求分析？请举例说明你的一次需求分析过程。",  
      answer: "案例：为银行设计手机银行APP‘贷款申请’模块。\n过程：\n1. 定量分析：调取后台数据，发现35%用户在‘材料上传’步骤流失。\n2. 用户访谈：用户对‘需上传12项材料’感到困惑，认为流程繁琐。\n3. 竞品分析：对比同类产品，某银行APP通过‘智能预审’功能减少上传项。\n4. 需求优先级排序：核心需求为简化材料上传流程（影响转化率），次优先级为增加进度条可视化（提升体验）。\n方案：推出‘智能预审’功能，根据用户征信自动过滤非必要材料，转化率提升至72%。"  
    },  
    {  
      question: "如何制定项目设计规范，你有自己的习惯吗？",  
      answer: "习惯：\n1. 原子化设计：将组件拆解为‘基础元素→分子→组织→模板’，如按钮分Primary/Secondary/Disabled状态。\n2. 动态文档：使用Figma的Design System Manager维护规范，包含间距规则（8px网格）、色彩代码（如#2B6CB0为主色调）、图标库命名规范。\n3. 跨团队对齐：与开发团队共同制定标注规则，明确字体大小（如标题用18px苹方粗体）、阴影参数（如2px高斯模糊）。"  
    },  
    {  
      question: "如何保持设计的创新性和前瞻性？你有哪些获取设计灵感的方式？",  
      answer: "灵感来源：\n- 趋势追踪：定期浏览Dribbble、Behance，关注Material You动态主题、玻璃拟态等新风格。\n- 跨界学习：分析奢侈品包装设计的触觉反馈，应用于APP动效设计。\n- 用户洞察：参与线下用户工作坊，观察用户使用产品时的微表情与肢体语言。\n案例：从建筑设计‘流动感’汲取灵感，为音乐APP设计波浪形进度条，增强沉浸感。"  
    },  
    {  
      question: "在团队合作中，如何与其他角色（如产品经理、开发工程师等）进行高效沟通？",  
      answer: "沟通策略：\n1. 可视化表达：用原型图而非文字描述设计思路，减少理解偏差。\n2. 需求对齐会：与产品经理明确‘需求背后的业务目标’（如‘提升留存’而非‘加按钮’）。\n3. 技术可行性评估：设计阶段邀请开发工程师参与，避免后期大改（如复杂交互动效需提前确认性能）。"  
    },  
    {  
      question: "在进行界面设计时，如何平衡用户需求和产品目标之间的关系？",  
      answer: "方法论：\n1. 需求分级矩阵：将需求分为‘用户价值-商业价值’四象限，优先满足高重合度需求。\n2. AB测试：针对争议点（如‘首页布局左滑或点击’），用数据验证哪种方案更符合双方目标。\n案例：资讯APP设计‘个性化推荐’模块时，在用户隐私保护（需求）与广告变现（目标）间，选择‘轻量授权+分层推送’模式，DAU提升15%。"  
    },  
    {  
      question: "请谈谈你对用户研究的理解，并说明它在整个设计过程中的重要性。",  
      answer: "用户研究是设计的‘地基’。通过行为观察、问卷调研等方法，能挖掘用户未明说的深层需求。例如，某教育APP通过眼动测试发现用户实际关注‘课程更新频率’而非‘界面美观度’，从而调整信息架构优先级，证明用户研究能引导设计聚焦真实需求。"  
    },  
    {  
      question: "如何根据用户画像进行有针对性的设计？请给出一个实际案例。",  
      answer: "用户画像：Z世代学生党、月均消费2000元以下、注重性价比。\n设计策略：\n1. 视觉：使用高饱和度色彩+动态图标，符合年轻群体审美。\n2. 交互：简化支付流程（支持微信/支付宝一键登录）。\n3. 内容：在商品详情页突出‘学生价’标签与‘月销10万+’数据，匹配用户对性价比的关注。"  
    },  
    {  
      question: "请介绍一下你的一次失败设计经历，并谈谈你从中学到了什么。",  
      answer: "案例：某健康管理APP‘运动打卡’功能设计。\n问题：未考虑用户‘时间碎片化’特征，要求连续30天打卡，导致留存率低于预期。\n教训：设计需兼顾理想场景与现实约束，后增加‘补打卡’机制与弹性目标（如‘每周5次’），留存率提升至45%。认识到需深入理解用户使用场景，避免脱离实际的设计设定。"  
    },  
    {  
      question: "如何应对不断变化的设计趋势和市场需求？你如何保持自己的竞争力？",  
      answer: "策略：\n1. 技能迭代：学习3D建模（Blender）、AI生成工具（Midjourney），适应新技术应用。\n2. 行业深耕：专注垂直领域（如医疗/金融UX），积累专业知识壁垒。\n3. 输出价值：撰写设计博客、参加行业峰会，建立个人品牌，在行业内形成影响力。"  
    }  
  ]  
};  ;  

const questionTitle = ref(route.params.title || '');  
const questionList = ref(questionData[questionTitle.value] || []);  

const toggleCollect = () => {  
  console.log('触发收藏操作');  
};  
</script>  

<style scoped>  
.question-detail-page {  
  padding: 20px;  
  background: #fff;  
  min-height: 100vh;  
}  
.page-header {  
  display: flex;  
  justify-content: space-between;  
  align-items: center;  
  margin-bottom: 20px;  
}  
.back-btn {  
  text-decoration: none;  
  color: #333;  
}  
.icon-collect {  
  color: #ff6644;  
  font-size: 18px;  
  cursor: pointer;  
}  
.section-title {  
  color: #666;  
  margin-bottom: 10px;  
}  
.question-item {  
  line-height: 1.8;  
  color: #333;  
  margin-bottom: 5px;  
}  
.question-text {  
  color: #0066cc; /* 问题颜色 */  
}  
.answer-item {  
  line-height: 1.6;  
  color: #333;  
  margin-bottom: 20px;  
  padding-left: 20px;  
}  
.answer-text {  
  color: #666; /* 答案颜色 */  
}  
</style>