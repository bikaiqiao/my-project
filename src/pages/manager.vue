
<template>
  <el-container>
    <el-header>
      <!-- 头部的导航栏被分成两个部分 -->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
      >
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
          <el-input v-model="select" placeholder="搜索"></el-input>
        </el-menu-item>
        <el-menu-item style="float:right">
          <router-link to class="navNone">写文章</router-link>
        </el-menu-item>
        <el-menu-item style="float:right">
          <router-link to class="navNone">注册</router-link>
        </el-menu-item>
        <el-menu-item style="float:right">
          <router-link to class="navNone">登录</router-link>
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
    </el-header>
    <el-container>

      <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-ice-cream-round"></i>
              <span>创作者中心</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">帐号中心</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-lollipop"></i>
              <span>统计中心</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">数据统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-lollipop"></i>
              <span>功能</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">查看帖子</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <div>
          
        </div>
      </el-main>

    </el-container>
  </el-container>
</template>

<style src="../../static/css/login.css"></style>
<style src="../../static/css/manager.css"></style>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        value1:true,
        value2:true,
        select:'',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>