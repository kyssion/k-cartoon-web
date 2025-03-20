<script setup>
import { ElCarousel, ElCarouselItem } from "element-plus";
import { ref } from "vue";

defineProps({
  images: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(
        (item) => "url" in item && "title" in item && "value" in item
      );
    },
  },
});

const activeIndex = ref(0);
const hoverIndex = ref(-1);
</script>

<template>
<div>
  <div class="header-title" style="text-align: center; margin: 20px 0; font-size: 1rem;">原创动漫人物</div>
  <ElCarousel
    :interval="5000"
    indicator-position="outside"
    @change="(index) => (activeIndex = index)"
    class="carousel-container"
    :autoplay="true"
  >
    <ElCarouselItem
      v-for="(chunk, index) in Math.ceil(images.length / 4)"
      :key="index"
      class="carousel-item"
    >
      <div class="grid-container">
        <div
          v-for="(img, i) in images.slice(index * 4, (index + 1) * 4)"
          :key="img.url"
          class="image-wrapper"
          @mouseenter="hoverIndex = index * 4 + i"
          @mouseleave="hoverIndex = -1"
          @touchstart.passive="hoverIndex = index * 4 + i"
          @touchend="hoverIndex = -1"
        >
          <img :src="img.url" class="carousel-image" />
          <div
            class="mask"
            :class="{ 'mask-visible': hoverIndex === index * 4 + i }"
          >
            <div class="mask-content">
              <h3 class="title">{{ img.title }}</h3>
              <p class="description">{{ img.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </ElCarouselItem>
  </ElCarousel>
</div>
</template>

<style scoped>
.carousel-container {
  width: 100%;
  height: 400px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  height: 100%;
}

.image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  height: 360px;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.mask {
  position: absolute;
  bottom: -40%;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  display: flex;
  align-items: flex-end;
  padding: 20px;
  transition: bottom 0.3s ease-out;
  z-index: 10;
}

.mask-content {
  max-height: 100%;
  overflow-y: auto;
  padding-right: 8px;
  transition: bottom 0.3s ease-out;
}

.mask-visible {
  bottom: 0 !important;
}

.mask-content {
  color: white;
  transform: translateY(0);
}

.title {
  font-size: 1.2rem;
  margin-bottom: 8px;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  white-space: normal;
  overflow: visible;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.mask-content {
  z-index: 2;
  width: 100%;
}
</style>
