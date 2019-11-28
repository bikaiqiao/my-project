<template>
   <div class="writeArticle">
            <el-menu
              default-active="2"
              class="writeArticle"
              background-color="#f1f0f0"
              
            >
              <el-menu-item index="2">
                <el-button type="text">新建文章</el-button>
              </el-menu-item>
              <el-menu-item index="2">
                <span slot="title">在下方新建文章</span>
              </el-menu-item>
            </el-menu>
   </div>        
</template>
<style lang="scss" scoped>
@import "../../static/css/writing.scss";
</style>
