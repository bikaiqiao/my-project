<template>
  <el-container>
    <el-header>
      <myHead></myHead>
    </el-header>
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="4">&nbsp;</el-col>
          <el-col :span="4">
            <div class="asideBox">
                <div class="ulBox">
                    <ul>
                        <li><router-link to="/goods">生活</router-link></li>
                        <li><router-link to="/goods">教育</router-link></li>
                        <li><router-link to="/goods">心理</router-link></li>
                        <li><router-link to="/goods">学习</router-link></li>
                        <li><router-link to="/goods">科技</router-link></li>
                        <li><router-link to="/goods">数码</router-link></li>
                        <li><router-link to="/goods">时尚</router-link></li>
                        <li><router-link to="/">影视</router-link></li>
                    </ul>
                </div>
            </div>
          </el-col>
          <!-- 开始中间的正文内容 -->
          <el-col :span="12">
            <div class="mainBox">
              <div class="rotationChartBox">
                <rotationChart></rotationChart>
              </div>
              <div class="layoutBox">
                <layout></layout>
              </div>
            </div>
          </el-col>
          <el-col :span="4"></el-col>
        </el-row>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
@import "../../static/css/index.scss";
</style>

<script>
import myHead from "./../components/header.vue";
import rotationChart from "./../components/rotationChart.vue";
import layout from "./../components/layout.vue";
export default {
  components: {
    myHead,
    rotationChart,
    layout
  },
  data() {
    return {
      list: [
        {
          title: "How to study Vue",
          time: "2016-04-10"
        },
        {
          title: "How to study Typescript",
          time: "2019-11-10"
        }
      ]
    };
  },
  methods:{
    
  }
};
</script>