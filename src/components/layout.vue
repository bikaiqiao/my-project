<template>
  <ul>
    <li v-for="i in list" :key="i.title">
      <div class="articleTitleBox">
        <router-link to="">
          <b>{{i.title}}</b>
        </router-link>
      </div>
      <!-- <div class="articleImgBox"><img src="static\picture\pic.jpg" align="right"></div> -->
      <div class="articleContainerBox"><img src="static\picture\pic.jpg" align="right">{{i.time}}</div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "./static/css/components/layout.scss";
</style>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "How to study Vue",
          time: "2016-04-10 1ahahahhahahah哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
        },
        {
          title: "How to study Typescript",
          time: "2019-11-10"
        }
      ]
    };
  }
};
</script>
