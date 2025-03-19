<script setup>
import { ElCarousel, ElCarouselItem } from 'element-plus'

defineProps({
  images: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(item => 
        'url' in item && 'title' in item && 'value' in item
      )
    }
  }
})

const activeIndex = ref(0)
const hoverIndex = ref(-1)
</script>

<template>
  <ElCarousel 
    :interval="5000"
    indicator-position="outside"
    @change="(index) => activeIndex = index"
    class="carousel-container"
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
  bottom: -100%;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  display: flex;
  align-items: flex-end;
  padding: 20px;
  transition: bottom 0.3s ease-out;
}

.mask-visible {
  bottom: 0;
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
  font-size: 0.9rem;
  line-height: 1.4;
}
</style>