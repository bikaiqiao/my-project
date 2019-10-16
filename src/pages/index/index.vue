<template>
  <el-container>
    <!-- 头部是导航栏 -->
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
      <el-container>
        <el-main>
          <el-row>
              <!-- 走马灯和无序列表的内容和侧边栏内容在一个row中 -->
            <el-col :span="16">
              <el-row>
                  <!-- 走马灯和列表左面的空白 栅格中需要有内容才可以被撑开，故而写一个&nbsp-->
                <el-col :span="4">&nbsp;</el-col>
                <!-- 走马灯下面的无序列表 -->
                <el-col :span="20">
                  <el-carousel trigger="click" height="270px">
                    <el-carousel-item v-for="item in 4" :key="item" class="carouselFigure">
                      <h3 class="small">{{ item }}</h3>
                    </el-carousel-item>
                  </el-carousel>
                  <div class="list-container">
                    <div class="note-list">
                      <li id>
                        <div class="content">
                          <a class="title">在职场要慎重使用微信</a>
                          <p class="abstract">
                            在职场中，微信已经成为上下级和同级之间沟通交流的重要工具。使用微信进行交流的时候，我们一般要么通过文字，要么通过语音这
                            <br />两种方式。 在职场中与领导...
                          </p>
                        </div>
                      </li>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <!-- 图片侧边导航栏 -->
            <el-col :span="8" class="navAside">
              <el-aside>
                <el-row>
                  <el-col :span="21">
                    <el-menu default-active="2" class="el-menu-vertical-demo">
                      <!-- @open="handleOpen"
                      @close="handleClose"-->
                      <el-menu-item index="1">
                        <span slot="title">
                          <img src="static\picture\YaoFanVIP.png" alt width="220" height="50" />
                        </span>
                      </el-menu-item>
                      <el-menu-item index="2">
                        <span slot="title">
                          <img src="static\picture\YaoFanVIP.png" alt width="220" height="50" />
                        </span>
                      </el-menu-item>
                      <el-menu-item index="3">
                        <span slot="title">
                          <img src="static\picture\YaoFanVIP.png" alt width="220" height="50" />
                        </span>
                      </el-menu-item>
                      <el-menu-item index="4">
                        <span slot="title">
                          <img src="static\picture\YaoFanVIP.png" alt width="220" height="50" />
                        </span>
                      </el-menu-item>
                    </el-menu>
                  </el-col>
                  <el-col :span="3">&nbsp;</el-col>
                </el-row>
              </el-aside>
            </el-col>
          </el-row>
        </el-main>
        <!-- 页尾写一些版权信息等 -->
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        value1:true,
        value2:true,
        select:搜索
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>