<script setup>
import { ElFooter } from "element-plus";
</script>

<template>
  <div>
    <div class="app-footer">
      <div class="footer-content">
        <div class="footer-row">
          <span>互联网 ICP 备案：津ICP备2024023775号-1</span>
          <div class="divider"></div>
          <span>公安备案号 津公网安备12011602300276号</span>
          <div class="divider"></div>
          <span>营业执照</span>
        </div>
        <div class="footer-row">
          <span>12345 政务服务便民热线</span>
          <div class="divider"></div>
          <span>全国文化和旅游市场网上举报投诉处理系统</span>
        </div>
        <div class="footer-row">
          <span>联系邮箱：shanlinyouqing@yeah.net</span>
          <div class="divider"></div>
          <span
            >联系地址：天津市滨海新区杭州道街道河北路
            3-1516号商务楼中406、407室</span
          >
        </div>
        <div class="copyright">© 2024 山林又青 版权所有</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-footer {
  background: #000;
  color: #e0e0e0;
  height: 180px;
  display: flex;
  align-items: center;
  padding: 20px 0;
}

.footer-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.divider {
  width: 1px;
  height: 12px;
  background: #666;
  margin: 0 12px;
}

.copyright {
  margin-top: 15px;
  font-size: 0.9em;
  color: #888;
}
</style>
