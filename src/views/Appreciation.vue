<script setup>
// 导入所有图片（修正变量名）
import antiUtopia from '@/assets/examples/反乌托邦.png';
import img3_1 from '@/assets/examples/反乌托邦_图1.png'; // ✅ 将 . 改为 _
import img3_2 from '@/assets/examples/反乌托邦_图2.png';
import img3_3 from '@/assets/examples/反乌托邦_图3.png';
import img3_4 from '@/assets/examples/反乌托邦_图4.png';
import memorialCemetery from '@/assets/examples/纪念墓地.png';
import img2_1 from '@/assets/examples/纪念墓地_图1.png'; // ✅ 修正变量名
import img2_2 from '@/assets/examples/纪念墓地_图2.png';
import img2_3 from '@/assets/examples/纪念墓地_图3.png';
import img2_4 from '@/assets/examples/纪念墓地_图4.png';
import womansWork from '@/assets/examples/女人的工作永无止境.png';
import img7_1 from '@/assets/examples/女人的工作永无止境_图1.png'; // ✅ 修正变量名
import img7_2 from '@/assets/examples/女人的工作永无止境_图2.png';
import img7_3 from '@/assets/examples/女人的工作永无止境_图3.png';

import ropeArt from '@/assets/examples/绳索编织的生命艺术.png';
import img5_1 from '@/assets/examples/绳索编织的生命艺术_图1.png'; // ✅ 修正变量名
import img5_2 from '@/assets/examples/绳索编织的生命艺术_图2.png';
import img5_3 from '@/assets/examples/绳索编织的生命艺术_图3.png';
import ceramicScar from '@/assets/examples/陶瓷的伤疤.png';
import img6_1 from '@/assets/examples/陶瓷的伤疤_图1.png'; // ✅ 修正变量名
import img6_2 from '@/assets/examples/陶瓷的伤疤_图2.png';
import img6_3 from '@/assets/examples/陶瓷的伤疤_图3.png';

import lineCatSculpture from '@/assets/examples/线条猫咪雕塑.png';
import img1_1 from '@/assets/examples/线条猫咪雕塑_图1.png'; // ✅ 修正变量名
import img1_2 from '@/assets/examples/线条猫咪雕塑_图2.png';
import img1_3 from '@/assets/examples/线条猫咪雕塑_图3.png';
import hotChair from '@/assets/examples/尤尔根·迈耶“热座椅”与温度的记忆.png';
import img8_1 from '@/assets/examples/尤尔根·迈耶“热座椅”与温度的记忆_图1.png'; // ✅ 修正变量名
import img8_2 from '@/assets/examples/尤尔根·迈耶“热座椅”与温度的记忆_图2.png';
import img8_3 from '@/assets/examples/尤尔根·迈耶“热座椅”与温度的记忆_图3.png';

import selfPlasticFruit from '@/assets/examples/自食塑果.png';
import img4_1 from '@/assets/examples/自食塑果_图1.png'; // ✅ 修正变量名
import img4_2 from '@/assets/examples/自食塑果_图2.png';
import img4_3 from '@/assets/examples/自食塑果_图3.png';

// 模拟作品数据（同步修正图片引用）
const worksList = [
  { 
    cover: antiUtopia, 
    title: '反乌托邦',
    artist:'叶朗',
    description:'YOU/DYSTOPIA”研究了人工智能（A.I）与身份之间的理论联系。该项目的目标是创造一个夸张但可能的未来，包括乌托邦和反乌托邦，以重新考虑人工智能的可能性，提高对人工智能产生的潜在道德问题的认识，并反映我们当前的数字行为和与技术的关系。此外，该项目还强调了采取保护措施以保护我们的隐私和安全的重要性。通过这样做，我们可以帮助确保实现人工智能的好处，同时避免反乌托邦的未来。',
    images: [img3_1, img3_2, img3_3, img3_4] // ✅ 引用修正后的变量名
  },
  { 
    cover: memorialCemetery, 
    title: '纪念墓地',
    artist:'aya kishi',
    description:'Aya Kishi 的作品重新定义了纪念碑的概念，在墓碑的中心加入了一系列光学棱镜，使坟墓所在的地面上形成了美丽的光谱。受到雨天和悲伤过程的启发，该项目将这些自然和情感元素转化为视觉上的干预，帮助人们在失去亲人后的痛苦中找到一些慰藉和安慰。该项目旨在将雨天和悲伤的元素转化为一种积极的情感体验。光谱坟墓的视觉效果能够减轻亲人离世后的痛苦和折磨。通过这种独特的设计手法，Aya Kishi 试图为悼念过程带来温暖和安慰。她的作品不仅是对传统纪念方式的重新诠释，更是通过艺术手法创造了一个感人且视觉上引人入胜的纪念空间。',
    images: [img2_1, img2_2, img2_3, img2_4] 
  },
  { 
    cover: womansWork,
    title: '女人的工作永无止境',
    artist:'Eliza Bennett',
    description: '该作品通过在自己手掌上进行刺绣，探讨了传统上被视为“女性工作”的劳动的价值和社会认知。Bennett最初学习艺术和服装设计，曾从事戏剧和电影的服装和道具制作。2010年，她获得了英国皇家雕塑家协会的奖学金，这成为她发展个人艺术实践的契机。随后，她在伦敦艺术学院攻读了美术硕士学位，并于2018年以优异成绩毕业。她的作品曾在多个画廊和博物馆展出，包括伦敦的Charlie Smith画廊和挪威的KODE博物馆。她的艺术实践主要关注社会中无形的现实问题，尤其是与劳动和性别相关的主题。通过她的作品，Bennett旨在挑战和重新定义传统观念，强调那些通常被忽视或低估的劳动形式的价值。',
    images: [img7_1, img7_2, img7_3] // ✅ 修正引用
  },
  { 
    cover: ropeArt,
    title: '绳索编织的生命艺术' ,
    artist: 'Janaina Mello Landini',
    description: '她是一位以绳索装置艺术著称的艺术家。她的作品以大型网状结构为主，这些错综复杂的绳索，如同一棵棵自然生长的树木，展现出强大的空间张力。她对绳索这一艺术媒介的巧妙运用，使得她的作品充满了独特的魅力。Janaina钟爱绳索，并将其作为自己的艺术语言。在创作过程中，她采用了一种独特的“分解”手法。她从绳索最粗的部分开始，随着枝桠的分叉，逐渐解开绳索，直至无法再分割。这一过程不仅是对绳索的物理分解，更是对其艺术意义的深度挖掘。她借鉴了自然界中的植物根系、叶脉和光束等元素，将这些自然形态巧妙地融入到她的作品中。虽然尼龙绳是一种冷冰冰的工业化材料，但在Janaina的手中，它却展现出了鲜活的有机形态。这些绳索的粗细变化，仿佛在模仿自然植物的生长形态，使她的装置艺术与自然界中的植物形态有着惊人的相似之处。她的作品让人们联想到树根、神经网络以及每个人体内的血管，充满了呼吸感和生命力。Janaina的装置艺术不仅展现了绳索的物理属性，更赋予了它们生命力和情感。',
    images: [img5_1, img5_2, img5_3] 
  },
  { 
    cover: ceramicScar, 
    title: '陶瓷的伤疤',
    artist: 'Glen Martin Taylor ',
    description: '疤，痛苦的痕迹，不仅会让人联想到暴力、创伤、杀戮等隐喻，也含有另一重含义— 修补。美国艺术家Glen Martin Taylor通过将破碎的碟盘、杯子与钉子、刀叉、铁丝网等各式材料焊接，完成奇怪的修复。稀奇古怪的戏剧性组合，就像一个小孩天真的恶作剧。纵观其作品，伤疤与缝补是所有创作的母题，很容易联想到心碎后面目全非的模样。在 Taylor早期的艺术探索中，先尝试木工手作、绘画，后转向陶艺，但都无法从中感受到某种真正的连接，像是内心的缺口从未被弥补。他逐渐开始关注到一门用金漆修补破碎陶器的日本古老工艺 — 金继(Kintsugi)。它有惜物之意， 认为缺陷之物不应被随意丢弃，要通过尽心修复使器物重获新生 。深受日本侘寂将脆弱 、残缺 、遗憾视为无常之美的影响，不重在掩藏瑕疵，工匠们反倒会在破损区撒上金粉使其变成一道夺目金线，让裂痕成为物件生命重要的一部分。Taylor 被这种东方哲学所打动，他相信修复破碎的瓷器可以帮助修复自我创伤。但在这个过程中，他发现金继的本质仍是为了将缺陷转化为一种更美丽或者“更完美”的存在。 不管如何努力，瓷器永远充满裂痕的事实令人沮丧。比起美丽和完整，他也更痴迷于一种混合痛苦和希望的矛盾形态。“我始终相信，我们可以疗愈童年创伤中的一部分，但只是一部分。 我的陶瓷也治愈了很多素不相识的陌生人，当我的作品能够与另一个人产生共鸣并帮助他痊愈时，这个过程其实也是帮助我自己完成了一场自我疗愈的循环，让我感到放松、快乐，十分有效。"',
    images: [img6_1, img6_2, img6_3] 
  },
  {
    cover: lineCatSculpture,
    title: '线条猫咪雕塑',
    artist: 'Lee Sangsoo',
    description: '艺术家把自己的作品看作是一种"空中绘画"，他用长长的金属条锻造出色彩渐变的螺旋形猫咪。艺术家解释道：线条、平面和颜色是我作品中的重要元素。在二维素描本中绘制的线条决定了作品的大流动和形式，在三维空间中变得立体。正方形线条根据流动和扭曲表现出各种形状和颜色，在静止作品中可以感受到动感。此外，根据流量，线的厚度可以有节奏地增厚或减薄。',
    images: [img1_1, img1_2, img1_3] 
  },
  { 
    cover: hotChair, 
    title: '尤尔根·迈耶“热座椅”与温度的记忆' ,
    artist: '尤尔根·迈耶',
    description: '设计的“热座椅”是一件极具创新性的热敏家具，它通过独特的方式展示了人体与物体之间的互动关系。这件作品采用了热敏材料，当人体坐在座椅上时，座椅表面会根据接触区域的温度变化产生临时性的视觉标记。这些标记不仅反映了人体的温度分布，还记录了使用者与家具互动的痕迹，仿佛将无形的热能转化为有形的艺术表达。“热座椅”不仅仅是一件功能性家具，更是一件探索人与环境关系的装置艺术。随着时间的推移，座椅上的热敏痕迹会逐渐消退，象征着记忆的短暂性和时间的流逝。这种动态变化赋予了家具一种独特的生命力，使其成为一件不断演变的作品。迈耶通过这一设计，巧妙地将科技、艺术和日常生活融为一体，挑战了传统家具的静态属性，引发人们对温度、时间和身体感知的思考。此外，“热座椅”还体现了迈耶对材料科学的深入研究和对未来设计的探索精神。热敏材料的运用不仅展示了科技在艺术创作中的潜力，也为家具设计提供了新的可能性。这件作品在2015年展出时，引起了广泛关注，成为当代设计领域中一件标志性的作品，展示了设计与科技结合所能达到的深度与广度。',
    images: [img8_1, img8_2, img8_3] 
  },
  { 
    cover: selfPlasticFruit, 
    title: '自食塑果',
    artist: 'Hsin-Ning Kuo ，Dai-Jin Li ，Yu-Lun Chen ，Jing-Xiu Hu ，Zhuo-Rong Li',
    description: '作品运用3D打印技术设计了食物形象立方体，其中嵌入收集的真实塑料垃圾，以美观但深刻的形式揭露食物中微塑料问题。',
    images: [img4_1, img4_2, img4_3] 
  },
]
worksList.forEach(item => console.log('列表页作品数据：', item));  

;
</script>

<!-- 模板和样式部分无需修改，保持原样 -->
<template>
  <div class="appreciation-page">
    <!-- 左上角返回按钮 -->
    <router-link to="/home" class="back-btn">
      <i class="icon-back">←</i>
    </router-link>
    <h3>优秀作品赏析</h3>

    <div class="works-grid">
      <div class="work-item" v-for="(item, index) in worksList" :key="index">
        <router-link :to="{ path: '/work-detail', query: { work: JSON.stringify(item) } }">  
  <img :src="item.cover" alt="作品封面">  
</router-link>  
        <p class="work-title">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.appreciation-page {
  padding: 20px;
  background: #f9f9f9;
}

.back-btn {
  position: absolute;
  left: 20px;
  top: 20px;
  text-decoration: none;
  color: #333;
  font-size: 18px;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 20px;
}

.work-item {
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.work-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.work-title {
  padding: 10px;
  text-align: center;
  color: #333;
  font-size: 14px;
  margin: 0;
}
</style>