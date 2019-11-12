<template>
  <el-container>
    <div class="el-main">
      <el-row>
        <el-col :span="4">
          <div>
            <div class="grid-content bg-purple-left">
              <div class="writing-button-box">
                <button onclick="location.href=''" class="writing-back-button">回首页</button>
              </div>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#404040"
                text-color="#fff"
              >
                <el-button @click="show1=true" class="writing-newanthology-button" type="text">新建文集</el-button>
                <el-menu-item-group v-show="show1">
                  <transition name="fade">
                    <div v-if="show1">
                      <el-input v-model="input" placeholder="文件集名"></el-input>
                      <el-button type="success" class="navigation-buttons-Submission" round>提交</el-button>
                      <el-button v-if="show1" class="navigation-buttons-cancel" @click="show1 =false">取消</el-button>
                    </div>
                  </transition>
                </el-menu-item-group>
                <el-menu-item index="2">
                  <i class="el-icon"></i>
                  <span slot="title" @click="visible=true">
                    随笔
                    <el-button
                      class="writing-set-button"
                      size="mini"
                      icon="el-icon-search"
                      type="text"
                      circle
                    ></el-button>
                  </span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon"></i>
                  <span slot="title">
                    日记本
                    <el-button
                      @click="visible=true"
                      size="mini"
                      icon="el-icon-search"
                      class="writing-set-button-tow"
                      circle
                      type="text"
                    ></el-button>
                  </span>
                </el-menu-item>
              </el-menu>
              <el-popover placement="top" width="160">
                <div style="text-align: right; margin: 0">
                  <el-popover placement="left" width="100" trigger="hover">
                    <el-button type="text" size="mini">富文本编辑器</el-button>
                    <el-button type="text" class="writing-see-button" size="mini">MarkDown文本编辑器</el-button>
                    <el-button
                      type="text"
                      class="writing-setup-button"
                      size="mini"
                      slot="reference"
                    >默认编辑器</el-button>
                  </el-popover>
                  <el-popover placement="left" width="100" trigger="hover">
                     <el-switch v-model="value" active-color="#13ce66" inactive-color="black" active-text="夜间" inactive-text="日间"></el-switch>
                    <el-switch v-model="value1" active-color="#13ce66" inactive-color="black" active-text="宋体" inactive-text="繁体"></el-switch>
                    <el-switch v-model="value2" active-color="#13ce66" inactive-color="black" active-text="繁体" inactive-text="简体"></el-switch>
                    <el-button type="text" class="writing-setup-button" size="mini" slot="reference">设置显示模式</el-button>
                  </el-popover>
                  <el-button type="text" class="writing-setup-button" size="mini">回收站</el-button>
                  <el-button type="text" class="writing-setup-button" size="mini">帮助与反馈</el-button>
                </div>
                <el-button size="small" class="writing-problem" slot="reference" type="text">设置</el-button>
              </el-popover>
              <el-button
                size="small"
                round
                @click="dialogVisible = true"
                class="writing-problem"
                type="text"
              >遇到问题</el-button>
              <el-dialog
                title="常见问题"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose"
              >
                <span>如果你在使用编辑器的过程中遇到问题，可以尝试以下方案解决：</span>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">知道了</el-button>
                </span>
              </el-dialog>
            </div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple-main">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-menu-item index="2">
                <el-button type="text">新建文集</el-button>
              </el-menu-item>
              <el-menu-item index="2">
                <span slot="title">在下方新建文章</span>
              </el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :span="15">
          <div class="grid-content bg-purple-right">简书</div>
        </el-col>
      </el-row>
    </div>
  </el-container>
</template>

<style src="../../static/css/writing.css"></style>

<script>
export default {
  el: "#demo",
  data() {
    return {
      input: "",
      dialogVisible: false,
      count: 0,
      visible: false,
      value: true,
      value1: true,
      value2: true,
      show1: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>




