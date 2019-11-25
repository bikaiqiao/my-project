<template>
  <div class="myhead">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <!-- 下面注释标签中的内容不知道如何使用故先备注 -->
      <!-- @select="handleSelect" -->
      <router-link to="/" class="navElement">
        <el-menu-item index="0">
          <img src="static\picture\logo.png" height="20px;" />
        </el-menu-item>
      </router-link>
      <router-link to="/" class="navElement">
        <el-menu-item index="1">首页</el-menu-item>
      </router-link>
      <el-menu-item index="2">下载app</el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-zoom-in navIconPosition"></i>
        <el-input v-model="select" placeholder="搜索" style="width:70%"></el-input>
      </el-menu-item>

      <el-menu-item index="4">
        <span slot="title">生活</span>
      </el-menu-item>
      <el-menu-item index="5">
        <span slot="title">教育</span>
      </el-menu-item>
      <el-menu-item index="6">
        <span slot="title">心理</span>
      </el-menu-item>
      <el-menu-item index="7">
        <span slot="title">学习</span>
      </el-menu-item>
      <el-menu-item index="8">
        <span slot="title">科技</span>
      </el-menu-item>
      <el-menu-item index="9">
        <span slot="title">数码</span>
      </el-menu-item>
      <el-menu-item index="10">
        <span slot="title">时尚</span>
      </el-menu-item>
      <el-menu-item index="11">
        <span slot="title">影视</span>
      </el-menu-item>
      <router-link to="/writing" class="navNone">
        <el-menu-item style="float:right">写文章</el-menu-item>
      </router-link>
      <div v-if="!userState">
        <router-link :to="{name:'entry', params: {entryData:false}}">
          <el-menu-item style="float:right">注册</el-menu-item>
        </router-link>
        <router-link :to="{name:'entry', params: {entryData:true}}">
          <el-menu-item style="float:right">登录</el-menu-item>
        </router-link>
      </div>
      <!-- 用户头像 -->
      <div v-if="userState" class="userHead">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <el-avatar :src="this.userHead"></el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="manager">个人中心</el-dropdown-item>
            <el-dropdown-item>收藏和喜欢</el-dropdown-item>
            <el-dropdown-item>钱包</el-dropdown-item>
            <el-dropdown-item>帮助与反馈</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <el-menu-item style="float:right">
        <el-dropdown>
          <span class="el-dropdown-link">
            Aa
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <el-switch
                v-model="value1"
                active-text="开灯"
                inactive-text="关灯"
                active-color="#6dacf4"
                inactive-color="#eee"
              ></el-switch>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-switch
                v-model="value2"
                active-text="简体"
                inactive-text="繁体"
                active-color="#6dacf4"
                inactive-color="#eee"
              ></el-switch>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
@import "./static/css/components/header.scss";
</style>

<script>
import store from "./../store/store.js";
import Cookies from "js-cookie";
export default {
  data: function() {
    return {
      activeIndex: "1",
      value1: true,
      value2: true,
      select: "",
      userHead:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      userState: false
    };
  },
  created() {
    this.userState = this.$store.state.userState;
    // if (Cookies.get("token")) {
    //   this.userState = true;
    //   this.$store.commit("login");
    // }
  },
  methods: {
    logout() {
      console.log("function play");
      this.$store.commit("logout");
      console.log(this.$store.state.userState);
      // console.log();
    },
    handleCommand(userPointe) {
      console.log(userPointe);
      switch (userPointe) {
        case "logout":
          this.$store.commit("logout");
          location.reload();
          break;
        case "manager":
          this.$router.push({ name: "manager" });
          break;
      }
    }
  }
};
</script>