<script setup>
import { ElContainer, ElMain, ElHeader, ElFooter } from "element-plus";
import HeaderBar from "./components/HeaderBar.vue";
import ImageCarousel from "./components/ImageCarousel.vue";
import { ref } from "vue";
import FooterBar from "./components/FooterBar.vue";

const images = ref(
  Array.from({ length: 21 }, (_, i) => ({
    url: `https://cartoom.shanlinyouqing.online/漫画/亚人/00001/${String(
      i + 1
    ).padStart(5, "0")}.jpg`,
    title: `漫画场景 ${i + 1} - ${
      ["冬日雪景", "夏日海滨", "秋日枫林", "春日樱花"][i % 4]
    }`,
    value: `精彩画面 ${Math.floor(Math.random() * 1000) + 1} - ${
      ["战斗", "日常", "冒险", "风景"][i % 4]
    }场景`,
  }))
);
</script>

<template>
  <el-container>
    <el-header> <HeaderBar /> </el-header>
    <el-main>
      <ImageCarousel :images="images" />
    </el-main>
    <el-footer> <FooterBar></FooterBar></el-footer>
  </el-container>
</template>

<style scoped>
.el-container {
  height: 100vh;
}
.el-header {
  height: auto;
}
.el-main {
  height: calc(100vh - 60px);
  padding: 0;
  overflow: hidden;
}
</style>
