
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
        <div id="overview">
          <div id="member_lever">
            <div id="lever_icon">
              <img src="../../static/icon/c1.png">
            </div>
            <div id="lever">
              <div id="lever_num">当前会员等级：{{lever}}</div>
              <div id="lever_progress"><el-progress :percentage="44"></el-progress></div>
              
            </div>
          </div>

          <div id="overview_main">
            <div id="read_count">
              <div>阅读总数</div>
              <div>{{total_read}}</div>

            </div>
            <div id="agree_count">
              <div>赞同总数</div>
              <div>1111</div>
            </div>

            <div id="fans_count">
              <div>粉丝总数</div>
              <div>{{followers}}</div>
            </div>
          </div>
          <div id="member">会员等级：{{member}}</div>
          <div id="count">帖子总数：{{count}}</div>
          <div id="follows">关注人数：{{followers}}</div>
          <div id="total_read">阅读总数：{{total_read}}</div>
          <div>：{{yesterday_read}}</div>
        </div>
        <div id="creative_data">
          <h1>创作数据</h1>
          <div>发表总数:{{post_num}}</div>
        </div>
      </el-main>

    </el-container>
  </el-container>
</template>
<style src="../../static/css/manager.css"></style>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        value1:true,
        value2:true,
        select:'',
        count:1,
        member:13,
        followers:3,
        total_read:999,
        yesterday_read:99,
        lever:1,
        post_num:56,
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>