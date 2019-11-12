<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#f1f1f1">
      <el-menu-item index="1">
        <span slot="title">生活</span>
      </el-menu-item>
      <el-menu-item index="2">
        <span slot="title">教育</span>
      </el-menu-item>
      <el-menu-item index="3">
        <span slot="title">心理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span slot="title">学习</span>
      </el-menu-item>
      <el-menu-item index="5">
        <span slot="title">科技</span>
      </el-menu-item>
      <el-menu-item index="6">
        <span slot="title">数码</span>
      </el-menu-item>
      <el-menu-item index="7">
        <span slot="title">时尚</span>
      </el-menu-item>
      <el-menu-item index="8">
        <span slot="title">影视</span>
      </el-menu-item>
    </el-menu>
</template>

<style lang="scss" scoped>
@import "../../static/css/components/aside.scss";
</style>
<script>
export default {
  data: function() {
    return {};
  }
};
</script>