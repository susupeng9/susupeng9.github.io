<template>
  <div class="policy-page">
   <header class="page-header">
      <router-link to="/home" class="back-btn">←</router-link>
      <h2>国家相关政策链接</h2>
    </header>
    <div class="policy-link" v-for="(link, index) in policyLinks" :key="index">
      <a :href="link.url" target="_blank">
        {{ link.name }}
      </a>
      <span class="link-time">{{ link.time }}</span>
    </div>
  </div>
</template>

<script setup>
const policyLinks = [
  {
    url: 'https://www.gov.cn/zhengce/zhengceku/202406/content_6958297.htm',
    name: '人力资源社会保障部 教育部 财政部关于做好高校毕业生等青年就业创业工作的通知',
    time: '2024-05-17'
  },
  {
    url: 'https://www.gov.cn/zhengce/content/2022-05/13/content_5690111.htm',
    name: '国务院办公厅关于进一步做好高校毕业生等青年就业创业工作的通知',
    time: '2022-05-13'
  },
{
    url: 'https://www.mohrss.gov.cn/SYrlzyhshbzb/dongtaixinwen/buneiyaowen/rsxw/202411/t20241118_530102.html',
    name: '做好2025届高校毕业生就业创业工作',
    time: '2024-11-18'
  },
{
    url: 'http://www.moe.gov.cn/srcsite/A15/s3265/202312/t20231205_1093196.html',
    name: '教育部关于做好2024届全国普通高校毕业生就业创业工作的通知',
    time: '2023-12-02'
  },
{
    url: 'https://www.tmucmc.edu.cn/hlx/2025/0110/c592a14074/page.htm',
    name: '【就业政策】2025届就业已启动：国家最新就业政策一览',
    time: '2024-11-17'
  },
{
    url: 'https://www.mohrss.gov.cn/SYrlzyhshbzb/dongtaixinwen/buneiyaowen/rsxw/202407/t20240710_521876.html',
    name: '用足用好支持政策 大学生就业更顺利',
    time: '2024-07-10     '
  },
{
    url: 'https://ysxy.ecjtu.edu.cn/info/1062/4368.htm',
    name: '2025届就业已启动：国家最新就业政策一览',
    time: '2024-11-15      '
  },

{
    url: 'https://www.gov.cn/zhengce/202306/content_6884893.htm?ddtab=true',
    name: '一分钟了解国务院稳就业最新政策',
    time: '2023-05-18     '
  }

];
</script>

<style scoped>
.policy-page {
  padding: 20px;
}
.policy-link {
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
}
.policy-link a {
  color: #0066cc;
  text-decoration: none;
}
.link-time {
  font-size: 12px;
  color: #999;
  display: block;
  margin-top: 5px;
}
</style>