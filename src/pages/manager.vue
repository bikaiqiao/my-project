
<template>
  <el-container>
    <el-header>
    <myHead></myHead>
    </el-header>
    <el-container>

      <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo" router @open="handleOpen" @close="handleClose" :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-ice-cream-round"></i>
              <span>创作者中心</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/manager">帐号中心</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/account">帐号设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-lollipop"></i>
              <span>统计中心</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/analytics">数据统计</el-menu-item>
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
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-lollipop"></i>
              <span>充钱</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">充会员</el-menu-item>
              <el-menu-item index="4-2">超级会员</el-menu-item>
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
              <div id="lever_progress"><el-progress :percentage=this.schedule></el-progress></div>
              
            </div>
          </div>

          <div id="overview_main">
            <div id="read_count">
              <div>阅读总数</div>
              <div id="read_count_num">{{total_read}}</div>

            </div>
            <div id="agree_count">
              <div>赞同总数</div>
              <div id="agree_count_num">1111</div>
            </div>

            <div id="fans_count">
              <div>粉丝总数</div>
              <div id="fans_count_num">{{followers}}</div>
            </div>
          </div>
          <a class="details">数据详情 ></a>
          <div id="member">会员等级：{{member}}</div>
          <div id="count">帖子总数：{{count}}</div>
          <div id="follows">关注人数：{{followers}}</div>
          <div id="total_read">阅读总数：{{total_read}}</div>
          <div>昨日阅读：{{yesterday_read}}</div>
        </div>
        <div id="creative_data">
          <h1>创作数据</h1>
          <div>最近创作：</div>
          <ul><li v-for="article in articles" :key="article"><a href="/">{{article}}</a></li></ul>
        </div>
      </el-main>

    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
@import "../../static/css/manager.scss";
</style>

<script>
  import myHead from "./../components/header.vue";
  export default {
    components: {
      myHead,
    },
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
        schedule:67,
        articles:[
          "How to study Vue",
          
          "How to study Typescript","hahahha"
          ],
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
      },
    }
  }
</script>