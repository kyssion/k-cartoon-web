<script setup>
import { ElContainer, ElMain, ElHeader, ElFooter } from "element-plus";
import HeaderBar from "./components/HeaderBar.vue";
import ImageCarousel from "./components/ImageCarousel.vue";
import { ref } from "vue";
import FooterBar from "./components/FooterBar.vue";
import ManList from "./components/ManList.vue";
import {RouterView } from 'vue-router';


const images = ref(
  [{title:"动漫人物/guanying",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/guanying.jpg",value:""},
{title:"动漫人物/刘浩",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E5%88%98%E6%B5%A9.jpg",value:""},
{title:"动漫人物/叶落",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E5%8F%B6%E8%90%BD.jpg",value:""},
{title:"动漫人物/唐小姐",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E5%94%90%E5%B0%8F%E5%A7%90.jpg",value:""},
{title:"动漫人物/女主",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E5%A5%B3%E4%B8%BB.jpg",value:""},
{title:"动漫人物/女主母親",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E5%A5%B3%E4%B8%BB%E6%AF%8D%E8%A6%AA.jpg",value:""},
{title:"动漫人物/女皇",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E5%A5%B3%E7%9A%87.jpg",value:""},
{title:"动漫人物/妹妹",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E5%A6%B9%E5%A6%B9.jpg",value:""},
{title:"动漫人物/小包子",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E5%B0%8F%E5%8C%85%E5%AD%90.jpg",value:""},
{title:"动漫人物/小四月",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E5%B0%8F%E5%9B%9B%E6%9C%88.jpg",value:""},
{title:"动漫人物/小昌",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E5%B0%8F%E6%98%8C.jpg",value:""},
{title:"动漫人物/少珩",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E5%B0%91%E7%8F%A9.jpg",value:""},
{title:"动漫人物/展彦",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E5%B1%95%E5%BD%A6.jpg",value:""},
{title:"动漫人物/展观",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E5%B1%95%E8%A7%82.jpg",value:""},
{title:"动漫人物/師傅",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E5%B8%AB%E5%82%85.jpg",value:""},
{title:"动漫人物/師兄",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E5%B8%AB%E5%85%84.jpg",value:""},
{title:"动漫人物/徐林",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E5%BE%90%E6%9E%97.jpg",value:""},
{title:"动漫人物/慕青师",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E6%85%95%E9%9D%92%E5%B8%88.jpg",value:""},
{title:"动漫人物/掌門",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E6%8E%8C%E9%96%80.jpg",value:""},
{title:"动漫人物/月坤",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E6%9C%88%E5%9D%A4.jpg",value:""},
{title:"动漫人物/月瑶",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E6%9C%88%E7%91%B6.jpg",value:""},
{title:"动漫人物/柏淑女",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E6%9F%8F%E6%B7%91%E5%A5%B3.jpg",value:""},
{title:"动漫人物/王慧天",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E7%8E%8B%E6%85%A7%E5%A4%A9.jpg",value:""},
{title:"动漫人物/男主",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E7%94%B7%E4%B8%BB.jpg",value:""},
{title:"动漫人物/男主。jpg",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E7%94%B7%E4%B8%BB%E3%80%82jpg.jpg",value:""},
{title:"动漫人物/白芯",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E7%99%BD%E8%8A%AF.jpg",value:""},
{title:"动漫人物/秦霄",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E7%A7%A6%E9%9C%84.jpg",value:""},
{title:"动漫人物/管家",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E7%AE%A1%E5%AE%B6.jpg",value:""},
{title:"动漫人物/纪铂染",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E7%BA%AA%E9%93%82%E6%9F%93.jpg",value:""},
{title:"动漫人物/老李",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E8%80%81%E6%9D%8E.jpg",value:""},
{title:"动漫人物/苏全民",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E8%8B%8F%E5%85%A8%E6%B0%91.jpg",value:""},
{title:"动漫人物/苏锦流",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E8%8B%8F%E9%94%A6%E6%B5%81.jpg",value:""},
{title:"动漫人物/衛衍",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E8%A1%9B%E8%A1%8D.jpg",value:""},
{title:"动漫人物/许宝林",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E8%AE%B8%E5%AE%9D%E6%9E%97.jpg",value:""},
{title:"动漫人物/賀青陽",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E8%B3%80%E9%9D%92%E9%99%BD.jpg",value:""},
{title:"动漫人物/陈老头",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E9%99%88%E8%80%81%E5%A4%B4.jpg",value:""},
{title:"动漫人物/黎志",url:"https://cartoom.shanlinyouqing.online/%E5%8A%A8%E6%BC%AB%E4%BA%BA%E7%89%A9/%E9%BB%8E%E5%BF%97.jpg",value:""}]
);
</script>

<template>
  <el-container>
    <el-header> <HeaderBar /> </el-header>
    <el-main>
      <ImageCarousel :images="images" />
      <ManList></ManList>
    </el-main>
    <el-footer> <FooterBar></FooterBar></el-footer>
  </el-container>
</template>

<style scoped>
.el-container {
  display: flex;
  flex-direction: column;
}
.el-header {
  height: auto;
}
.el-main {
  padding: 0;
  min-height: calc(100vh - 120px);
  overflow: visible;
}
</style>
