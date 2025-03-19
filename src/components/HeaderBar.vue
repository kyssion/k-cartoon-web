<script setup>
import { ElMenu, ElMenuItem, ElButton, ElHeader, ElMain } from "element-plus";
</script>

<template>
  <div>
    <ElHeader>
      <div class="header-container">
        <div class="left-info">
          <div class="header-left-info">
            <img
              src="https://cartoom.shanlinyouqing.online/logo.png"
              alt="Company Logo"
              class="logo"
              style="width: 40px; height: 40px; margin-right: 10px"
            />
            <span class="company-name" style="font-weight: bold">山林又青</span>
          </div>
        </div>
        <div class="right-info">
          <div class="user-info">
            <img
              src="https://cartoom.shanlinyouqing.online/acfun.png"
              alt="User Avatar"
              class="user-avatar"
            />
            <span class="user-name" style="font-weight: bold">User Name</span>
          </div>
          <div class="points-info">
            <span class="points-balance" style="font-weight: bold">积分余额: 1000</span>
            <ElButton type="primary" style="font-weight: bold">积分充值</ElButton>
          </div>
        </div>
      </div>
    </ElHeader>
  </div>
</template>
<style scoped>
.header-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
}
.left-info {
  margin-left: 20px;
}
.right-info {
  display: flex;
  align-items: center;
}
.user-info {
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 20px;
}

.company-name {
  display: flex;
  align-items: center;
  height: 100%;
  vertical-align: middle;
}

.points-balance {
  line-height: 30px;
}
.user-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
}

.user-name {
  line-height: 30px;
  vertical-align: middle;
}
.points-info {
  display: flex;
  align-items: center;
}

.header-left-info{
  display: flex;
  align-items: center;
}
.points-balance {
  margin-right: 10px;
}
</style>
