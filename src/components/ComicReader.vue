<script>
export default {
  name: "ComicReader",
  computed: {
    comicTitle() {
      return "漫画标题打发手动阀沙发沙发沙发沙发沙发飒飒打撒"; // 根据实际数据替换
    },
  },
  data() {
    return {
      imageInfo:
        "https://cdnvc.brmgo.cn/aigc/cf-outputs/7305221076091346946/7305221076091346945/7305221449732521998_cQpv_lo0_0.jpg",
      comicTitleData: "漫画标题打发手动阀沙发沙发沙发沙发沙发飒飒打撒sdfsdf", // 漫画标题
    };
  },
};
</script>

<template>
  <div class="base-background">
    <div
      class="comic-container"
      :style="{ backgroundImage: `url(${imageInfo})` }"
    >
      <div class="comic-info">
        <img class="comic-image" :src="imageInfo" alt="漫画内容" />
      </div>
      <div class="dialog-container">
        <div class="typing-text">{{ comicTitleData }}</div>
      </div>
      <button
        class="nav-pre-btn prev-btn"
        @click="
          imageInfo = 'https://cdnvc.brmgo.cn/aigc/cf-outputs/7305221076091346946/7305221076091346945/7305221449732521998_MEVC_lo0_0.jpg';
          comicTitleData = '王老吉的饿饿飞机减肥减肥减肥减肥减肥减肥减肥'
        "
      >
        上一话
      </button>
      <button
        class="nav-next-btn next-btn"
        @click="
          imageInfo = 'https://cdnvc.brmgo.cn/aigc/cf-outputs/7305221076091346946/7305221076091346945/7305221449732521998_RpPm_lo0_0.jpg';
          comicTitleData = '山东的的叠加覅欸i娥姐季风季节欸发巨额罚金方法'
        "
      >
        下一话
      </button>
    </div>
  </div>
</template>
``
<style scoped>
.base-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.comic-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  opacity: 0; /* 初始透明度为0 */
  animation: fadeIn 1s ease-in-out forwards; /* 添加渐变动画 */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.6; /* 最终透明度为0.6 */
  }
}
/* 新增黑色遮罩 */
.comic-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5); /* 黑色遮罩，可调整透明度 */
}

.comic-info {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  width: 90%;
  max-width: 600px;
  height: auto;
  aspect-ratio: 9/16;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
}

.nav-pre-btn {
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translateY(-50%);
  width: 40px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s;
}

.nav-per-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-50%) scale(1.1);
}

.nav-next-btn {
  position: absolute;
  top: 50%;
  right: 25%;
  transform: translateY(-50%);
  width: 40px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s;
}

.nav-next-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-50%) scale(1.1);
}

.prev-btn {
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.next-btn {
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.comic-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

/* 新增对话框样式 */
.dialog-container {
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 1000px;
  background: rgba(100, 100, 100, 0.9);
  border-radius: 8px;
  padding: 1rem;
}

.typing-text {
  color: #f0f0f0;
  font-size: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: typing 4s steps(40) forwards;
  position: relative;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.typing-text::after {
  content: "|";
  position: absolute;
  right: -5px;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.comic-title {
  margin: 0;
  font-size: 1.8rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}
</style>
