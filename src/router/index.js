import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../views/Welcome.vue';
import Home from '../views/Home.vue';
import SplashPage from '../views/SplashPage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import Interview from '../views/Interview.vue';
import InterviewDesigner from '../views/InterviewDesigner.vue';
import InterviewEngineer from '../views/InterviewEngineer.vue';
import MyPage from '../views/MyPage.vue'; // 引入“我的”页面组件
import FindPassword from '../views/FindPassword.vue'; // 引入找回密码组件  
import CourseLectureShare from '../views/CourseLectureShare.vue'; // 引入课程讲座组件
import Appreciation from '../views/Appreciation.vue'
import WorkDetail from '../views/WorkDetail.vue'; // 引入详情页组件
import HotCompanyConsult from '../views/HotCompanyConsult.vue'; 
import QuestionBank from '../views/QuestionBank.vue';  
import InterviewQuestionDetail from '../views/InterviewQuestionDetail.vue';  
import InterviewChat from '../views/InterviewChat.vue';
import Chat from '../views/Chat.vue'; // 假设聊天界面路径
import Message from '../views/MessageList.vue'; // 确保组件路径正确  
import Policy from '../views/Policy.vue';
import JobList from '../views/JobList.vue';
import RecommendAllPage from '../views/RecommendAllPage.vue';
import UXDesignerInterviewChat from '@/views/UXDesignerInterviewChat.vue';
import InteriorDesignerInterviewChat from '@/views/InteriorDesignerInterviewChat.vue';
import OriginalPainterInterviewChat from '@/views/OriginalPainterInterviewChat.vue';
import GUISesignerInterviewChat from '@/views/GUISesignerInterviewChat.vue';
import ArchitecturalDesignerInterviewChat from '@/views/ArchitecturalDesignerInterviewChat.vue';
import LandscapeDesignerInterviewChat from '@/views/LandscapeDesignerInterviewChat.vue';
import IndustrialDesignerInterviewChat from '@/views/IndustrialDesignerInterviewChat.vue';
import IllustrationDesignerInterviewChat from '@/views/IllustrationDesignerInterviewChat.vue';
import FashionDesignerInterviewChat from '@/views/FashionDesignerInterviewChat.vue';
import AIEngineerInterview from '@/views/AIEngineerInterviewChat.vue';
import DataScientistInterview from '@/views/DataScientistInterviewChat.vue';
import MachineLearningEngineerInterview from '@/views/MachineLearningEngineerInterviewChat.vue';
import NLPEngineerInterview from '@/views/NLPEngineerInterview.vue';
import FrontendDeveloperInterview from '@/views/FrontendDeveloperInterviewChat.vue';
import BackendDeveloperInterview from '@/views/BackendDeveloperInterviewChat.vue';
import CloudComputingEngineerInterview from '@/views/CloudComputingEngineerInterviewChat.vue';
import DevOpsEngineerInterview from '@/views/DevOpsEngineerInterviewChat.vue';
import CybersecurityExpertInterview from '@/views/CybersecurityExpertInterviewChat.vue';
import PenetrationTesterInterview from '@/views/PenetrationTesterInterviewChat.vue';
import HistoryReview from '@/views/HistoryReview.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Welcome', component: Welcome },
    { path: '/splash', name: 'Splash', component: SplashPage },
    { path: '/home', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/register', name: 'Register', component: RegisterPage },
    // 添加面试页面的路由规则
    { path: '/interview', name: 'Interview', component: Interview },
 { 
      path: '/interview/designer', 
      name: 'InterviewDesigner', 
      component: InterviewDesigner 
    },
{
    path: '/my',
    name: 'MyPage',
    component: MyPage
  },
 {  
    path: '/find-password',  
    name: 'FindPassword',  
    component: FindPassword  
  },
{
    path: '/course-lecture',
    name: 'CourseLectureShare',
    component: CourseLectureShare
  },
 {
    path: '/appreciation',
    name: 'Appreciation',
    component: Appreciation
  },
 {
      path: '/work-detail',
      name: 'WorkDetail',
      component: WorkDetail
    },
{  
      path: '/hot-company-consult',  
      name: 'HotCompanyConsult',  
      component: HotCompanyConsult // 组件名称与引入一致  
    },
 {  
      path: '/question-bank',  
      name: 'QuestionBank',  
      component: QuestionBank  
    }, 
{  
      path: '/question-detail/:title', // 通过路径参数传递标题  
      name: 'QuestionDetail',  
      component: InterviewQuestionDetail  
    },
 {
      path: '/interview/chat',
      name: 'InterviewChat',
      component: InterviewChat
    },
{
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
 {  
      path: '/message',  
      component: Message,  
      name: 'Message'  
    },
 { path: '/policy', component: Policy, name: 'Policy' },
{
      path: '/job-list',
      name: 'JobList',
      component: JobList,
       },
       {
        path: '/engineer',
        name: 'EngineerPage',
        component: InterviewEngineer
      },
      {
        path: '/recommend-all',
        name: 'RecommendAllPage',
        component: RecommendAllPage
      },
      {
        path: '/ux - designer - interview',
        name: 'UXDesignerInterviewChat',
        component: UXDesignerInterviewChat
      },
      {
        path: '/interior - designer - interview',
        name: 'InteriorDesignerInterviewChat',
        component: InteriorDesignerInterviewChat
      },
      {
        path: '/original - painter - interview',
        name: 'OriginalPainterInterviewChat',
        component: OriginalPainterInterviewChat
      },
      {
        path: '/gui - designer - interview',
        name: 'GUISesignerInterviewChat',
        component: GUISesignerInterviewChat
      },
      {
        path: '/architectural - designer - interview',
        name: 'ArchitecturalDesignerInterviewChat',
        component: ArchitecturalDesignerInterviewChat
      },
      {
        path: '/landscape - designer - interview',
        name: 'LandscapeDesignerInterviewChat',
        component: LandscapeDesignerInterviewChat
      },
      {
        path: '/industrial - designer - interview',
        name: 'IndustrialDesignerInterviewChat',
        component: IndustrialDesignerInterviewChat
      },
      {
        path: '/illustration - designer - interview',
        name: 'IllustrationDesignerInterviewChat',
        component: IllustrationDesignerInterviewChat
      },
      {
        path: '/fashion - designer - interview',
        name: 'FashionDesignerInterviewChat',
        component: FashionDesignerInterviewChat
      },
      {
        path: '/ai - engineer - interview',
        name: 'AIEngineerInterview',
        component: AIEngineerInterview
      },
      {
        path: '/data - scientist - interview',
        name: 'DataScientistInterview',
        component: DataScientistInterview
      },
      {
        path: '/machine - learning - engineer - interview',
        name: 'MachineLearningEngineerInterview',
        component: MachineLearningEngineerInterview
      },
      {
        path: '/nlp - engineer - interview',
        name: 'NLPEngineerInterview',
        component: NLPEngineerInterview
      },
      {
        path: '/frontend - developer - interview',
        name: 'FrontendDeveloperInterview',
        component: FrontendDeveloperInterview
      },
      {
        path: '/backend - developer - interview',
        name: 'BackendDeveloperInterview',
        component: BackendDeveloperInterview
      },
      {
        path: '/cloud - computing - engineer - interview',
        name: 'CloudComputingEngineerInterview',
        component: CloudComputingEngineerInterview
      },
      {
        path: '/devops - engineer - interview',
        name: 'DevOpsEngineerInterview',
        component: DevOpsEngineerInterview
      },
      {
        path: '/cybersecurity - expert - interview',
        name: 'CybersecurityExpertInterview',
        component: CybersecurityExpertInterview
      },
      {
        path: '/penetration - tester - interview',
        name: 'PenetrationTesterInterview',
        component: PenetrationTesterInterview
      },
      {
        path: '/history', // 定义跳转路径
        name: 'HistoryReview',
        component: HistoryReview
      }
  
  ]
});

export default router;