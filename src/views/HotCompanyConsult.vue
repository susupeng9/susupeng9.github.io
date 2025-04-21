<template>
  <div class="company-list-page">
    <header class="page-header">
      <router-link to="/home" class="back-btn">←</router-link>
      <h3>热门公司咨询</h3>
      <router-link to="/search" class="search-icon">🔍</router-link>
    </header>

    <div class="company-container">
      <div class="company-item" v-for="(company, index) in companyList" :key="index">
        <h4>{{ company.name }}</h4>
        <div class="company-info">
          <p>总部：{{ company.headquarters }}</p>
          <p>业务：{{ company.business }}</p>
          <p>关键数据：{{ company.keyData }}</p>
          <p v-if="company.projects">项目：{{ company.projects.join('、') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const companyList = [
  {
    name: '🏢字节跳动',
    headquarters: '中国北京',
    business: '社交媒体、短视频、人工智能',
    keyData: '2024年营收500亿美元，年增20%，全球用户突破10亿，AI算法持续优化。'
  },
  {
    name: '🏢腾讯',
    headquarters: '中国深圳',
    business: '社交媒体、在线游戏、云计算',
    keyData: '2024年营收800亿美元，年增10%，WeChat用户突破15亿，云服务市场份额提升。'
  },
  {
    name: '🏢华为',
    headquarters: '中国深圳',
    business: '通信设备、智能手机、云计算、人工智能',
    keyData: '2024年营收1500亿美元，年增5%，5G基站出货量突破200万台，AI芯片昇腾910发布。'
  },
  {
    name: '🏢阿里巴巴',
    headquarters: '中国杭州',
    business: '电子商务、云计算、人工智能',
    keyData: '2024年营收1200亿美元，年增8%，云计算市场份额持续增长，AI助手AliGenie升级。'
  },
  {
    name: '🏢Meta（前Facebook）',
    headquarters: '美国',
    business: '社交媒体、虚拟现实、人工智能',
    keyData: '2024年营收1200亿美元，年增8%，AI助手M3发布，虚拟现实设备Quest 4发布。'
  },
  {
    name: '🏢Google（谷歌）',
    headquarters: '美国',
    business: '搜索引擎、广告、云计算、人工智能',
    keyData: '2024年营收3000亿美元，年增10%，AI助手Google Assistant升级，云服务Google Cloud增长。'
  },
  {
    name: '🏢Microsoft（微软）',
    headquarters: '美国',
    business: '软件、云计算、人工智能',
    keyData: '2024年营收2500亿美元，年增12%，Azure云服务持续增长，AI助手Copilot升级。'
  },
  {
    name: '🏢Tesla（特斯拉）',
    headquarters: '美国',
    business: '电动汽车、能源存储',
    keyData: '2024年营收500亿美元，年增20%，Model Y销量增长，Cybertruck交付。'
  },
  {
    name: '🏢Amazon（亚马逊）',
    headquarters: '美国',
    business: '电子商务、云计算、人工智能',
    keyData: '2024年营收6000亿美元，年增15%，AWS云服务持续增长，AI助手Alexa升级。'
  },
  {
    name: '🏢Apple（苹果）',
    headquarters: '美国',
    business: '消费电子、软件、在线服务',
    keyData: '2024年营收3940亿美元，年增6%，iPhone 15 Pro Max销量强劲，AI芯片M3/M3 Pro/M3 Max发布。'
  },
  {
    name: '🏢Samsung（三星）',
    headquarters: '韩国',
    business: '半导体、显示器、消费电子',
    keyData: '2024年营收2360亿美元，年增8%，AI芯片Exynos 2400发布，Galaxy S24系列手机销量增长。'
  },
  {
    name: '🏢Intel（英特尔）',
    headquarters: '美国',
    business: '半导体、计算机硬件',
    keyData: '2024年营收700亿美元，年增5%，AI芯片Sierra Forest和Emerald Rapids发布。'
  },
  {
    name: '🏢TSMC（台积电）',
    headquarters: '中国台湾',
    business: '半导体代工',
    keyData: '2024年营收2000亿美元，年增10%，5nm制程技术占比提升至70%。'
  },
  {
    name: '🏢NVIDIA（英伟达）',
    headquarters: '美国',
    business: 'AI芯片、图形处理器（GPU）',
    keyData: '2024年营收1243亿美元，占全球前十大IC设计公司总营收50%，H100/H200需求旺盛，GB200/GB300产品将推动2025年增长。'
  },
  {
    name: '🏢Qualcomm（高通）',
    headquarters: '美国',
    business: '智能手机芯片、车用芯片、AI PC',
    keyData: '2024年营收348.57亿美元（仅QCT业务），年增13%，AI PC布局拓展边缘运算市场。'
  },
  {
    name: '🏢MediaTek（联发科）',
    headquarters: '中国台湾',
    business: '5G手机芯片、电源管理IC、智能终端平台',
    keyData: '2024年营收165.19亿美元，年增19%，5G手机渗透率预计2025年超65%。'
  },
  {
    name: '🏢韦尔半导体（Will Semiconductor）',
    headquarters: '中国上海',
    business: 'CIS光学传感器、自动驾驶芯片',
    keyData: '2024年营收30.48亿美元，年增21%，安卓高端手机CIS市占率提升，受益于中国电动汽车自动驾驶需求。'
  },
  {
    name: '🏢Gensler',
    headquarters: '美国',
    business: '综合建筑设计、城市规划',
    keyData: '雇佣建筑师3065人，2024年营收超15亿美元，连续九年位列WA100榜首。',
    projects: ['上海中心大厦', '深圳平安金融中心']
  },
  {
    name: '🏢Aedas',
    headquarters: '中国香港',
    business: '高端商业与住宅设计',
    keyData: '2025年WA100排名第14位，中国上榜企业中排名最高',
    projects: ['北京大兴国际机场卫星厅']
  },
  {
    name: '🏢HDR',
    headquarters: '美国',
    business: '医疗、教育、交通建筑设计',
    keyData: '建筑师人数增长至154人（2025年），全球排名第三，参与沙特NEOM未来城项目。'
  },
  {
    name: '🏢CCD（郑中设计事务所）',
    headquarters: '中国深圳',
    business: '高端酒店、商业空间设计',
    keyData: '全球综合排名第一（2024年行业报告），服务于四季、丽思卡尔顿等国际品牌。'
  },
  {
    name: '🏢梁志天设计集团',
    headquarters: '中国香港',
    business: '住宅、酒店室内设计',
    keyData: '年设计费3.79亿元，全球排名第21位，代表作品包括深圳湾1号顶层复式。'
  },
  {
    name: '🏢东道品牌创意集团',
    headquarters: '中国北京',
    business: '品牌战略、视觉设计',
    keyData: '客户：国家电网、中石化等，多次获国际设计奖项，位列中国品牌设计公司前三。'
  }
];
</script>

<style scoped>
.company-list-page {
  padding: 20px;
  background: #f9f9f9;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.back-btn, .search-icon {
  text-decoration: none;
  color: #333;
  font-size: 18px;
}

.company-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
}

h4 {
  margin: 0 0 10px 0;
  color: #2c2c2c;
}

.company-info p {
  color: #666;
  line-height: 1.6;
  margin: 8px 0;
}
</style>