<script>
export default {
  data() {
    return {
      cardList: [
        {
          image: 'https://cartoom.shanlinyouqing.online/%E6%BC%AB%E7%94%BB/%E4%BA%9A%E4%BA%BA/00001/00001.jpg',
          title: '标题1',
          tag: '标签1',
          character: '角色人物1',
          description: '剧情简介1'
        },
        {
          image: 'https://cartoom.shanlinyouqing.online/%E6%BC%AB%E7%94%BB/%E4%BA%9A%E4%BA%BA/00001/00001.jpg',
          title: '反派师尊每天都在作恶',
          tag: '标签2',
          character: '角色人物2',
          description: '我穿成了男主的反派师尊，并且绑定了一个人狠话不多的反派系主的反派师尊，并且绑定了一个人狠话不多的反派系统。 系统只有一主的反派师尊，并且绑定了一个人狠话不多的主的反派师尊，并且绑定了一个人狠话不多的反派系统。 系统只有一主的反派师尊，并且绑定了一个人狠话不多的反派系统。 系统只有一主的反派师尊，并且绑定了一个人狠话不多的反派系统。 系统只有一主的反派师尊，并且绑定了一个人狠话不多的反派系统。 系统只有一主的反派师尊，并且绑定了一个人狠话不多的反派系统。 系统只有一主的反派师尊，并且绑定了一个人狠话不多的反派系统。 系统只有一主的反派师尊，并且绑定了一个人狠话不多的反派系统。 系统只有一反派系统。 系统只有一主的反派师尊，并且绑定了一个人狠话不多的反派系统。 系统只有一主的反派师尊，并且绑定了一个人狠话不多的反派系统。 系统只有一主的反派师尊，并且绑定了一个人狠话不多的反派系统。 系统只有一统。 系统只有一个表示： 勿以恶小而不为。 掌门讲话我插嘴，师兄闭关我打断，徒弟早恋我举报。 跟原著全员be的结局差不多， 大家都没有好果汁吃。'
        }
      ]
    };
  }
};
</script>
<template>
    <div class="card-list">
      <div class="card" v-for="(item, index) in cardList" :key="index">
        <img :src="item.image" alt="Card Image" class="card-image">
        <div class="card-content">
          <h2 class="card-title">{{ item.title }}</h2>
          <p class="card-tag">{{ item.tag }}</p>
          <p class="card-character">{{ item.character }}</p>
          <p class="card-description">{{ item.description }}</p>
          <div class="card-buttons">
            <button class="unlock-button">整章解锁</button>
            <button class="preview-button" @click="$router.push(`/comic/${index + 1}`)">阅读</button>
          </div>
        </div>
      </div>
      <hr>
    </div>
  </template>
  
<style scoped>
.card-list {
  display: flex;
  flex-direction: column;
}

.card {
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #dad8d8;
  margin-left: 10rem;
  margin-right: 10rem;
}

.card-image {
  width: 200px;
  height: 400px;
  object-fit: cover;
  margin-right: 16px;
}

.card-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-buttons {
  display: flex;
  gap: 12px;
  margin-top: auto;
  margin-left: auto;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 18px;
}

.card-tag {
  font-size: 14px;
  color: #666;
  margin-bottom: 18px;
}

.card-character {
  font-size: 14px;
  margin-bottom: 18px;
}

.card-description {
  font-size: 14px;
  color: #999;
  height: 130px;
}

.card-buttons {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.unlock-button {
  background: #ff4444;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.unlock-button:hover {
  background: #ff6666;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.preview-button {
  background: #409EFF;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.preview-button:hover {
  background: #66b1ff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

hr {
  border: none;
  border-top: 1px solid #eee;
  margin: 0;
}
</style>
