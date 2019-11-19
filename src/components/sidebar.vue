<template>
    <el-menu class="el-menu-vertical-demo" router @open="handleOpen" @close="handleClose" :default-openeds="menubar">
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
</template>


<style lang="scss" scoped>
@import "../../static/css/manager.scss";
</style>


<script>
export default {
    props:{
        menubar: Array
    }
}
</script>