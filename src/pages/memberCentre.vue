<template>
  <el-container>
    <el-header>
    <myHead></myHead>
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
          <h1>充会员咯</h1>
          <div>
            超级会员双十一半价
          </div>
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
}
</script>>