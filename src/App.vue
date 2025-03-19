<script setup>
import { ElContainer, ElMain, ElHeader } from "element-plus";
import HeaderBar from "./components/HeaderBar.vue";
</script>

<template>
  <el-container>
    <el-header> <HeaderBar /> </el-header>
    <el-main>Main</el-main>
  </el-container>
</template>

<style scoped></style>
