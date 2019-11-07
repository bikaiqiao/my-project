<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <!-- 下面注释标签中的内容不知道如何使用故先备注 -->
    <!-- @select="handleSelect" -->
    <el-menu-item index="0">
      <img src="static\picture\logo.png" height="20px;" />
    </el-menu-item>
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">下载app</el-menu-item>
    <el-menu-item index="3">
      <router-link to>
        <i class="el-icon-zoom-in navIconPosition"></i>
      </router-link>
      <el-input v-model="select" placeholder="搜索" style="width:70%"></el-input>
    </el-menu-item>
    <el-menu-item style="float:right">
      <router-link to="/mavonEditor" class="navNone">写文章</router-link>
    </el-menu-item>
    <el-menu-item style="float:right">
      <router-link :to="{name:'entry', params: {entryData:false}}" class="navNone">注册</router-link>
    </el-menu-item>
    <el-menu-item style="float:right">
      <router-link :to="{name:'entry', params: {entryData:true}}"  class="navNone">登录</router-link>
    </el-menu-item>
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
</template>

<script>
import store from "./../store/store.js";
export default {
  data: function() {
    return {
      activeIndex: "1",
      value1: true,
      value2: true,
      select: ""
    };
  },
  methods: {
    updateEntryData() {
      this.$store.commit("update", false);
    }
  }
};
</script>