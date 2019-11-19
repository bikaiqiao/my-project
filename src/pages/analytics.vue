<template>
  <el-container>
    <el-header>
    <myHead></myHead>
    </el-header>
    <el-container>

      <el-aside width="200px">
        <sideBar :menubar="['2']"></sideBar>
      </el-aside>

      <el-main>
        <div id="overview">
          <h1>创作数据统计</h1>
          <div id="article_count">
            <ve-line :data="chartData"></ve-line>
            <h1>数据2</h1>
            <ve-line :data="data2"></ve-line>
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
import sideBar from "./../components/sidebar.vue";
export default {
   components: {
      myHead,
      sideBar,
    }, 
    data () {
      return {
        chartData: {
          columns: ['日期', '访问用户', '发布文章数量'],
          rows: [
            { '日期': '2018-05-22', '访问用户': 32371, '发布文章数量': 19810 },
            { '日期': '2018-05-23', '访问用户': 12328, '发布文章数量': 4398 },
            { '日期': '2018-05-24', '访问用户': 92381, '发布文章数量': 52910 }
          ]
        },
        data2:{
          columns: ['日期', '访问用户', '发布文章数量'],
          rows: [
            { '日期': '2018-05-22', '访问用户': 3371, '发布文章数量': 19810 },
            { '日期': '2018-05-23', '访问用户': 1328, '发布文章数量': 4398 },
            { '日期': '2018-05-24', '访问用户': 92381, '发布文章数量': 52910 }
          ]
        }
      }
    }
}
</script>>