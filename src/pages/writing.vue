<template>
  <el-container>
    <div class="el-main">
      <el-row>
        <el-col :span="4">
          <div>
            <div class="grid-content bg-purple-left">
                <button onclick="location.href='/'" class="writing-back-button">回首页</button>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#f1f0f0"
                text-color="#000"
                active-text-color="rgb(238, 189, 54)"
              >
                <el-button @click="show1=true" class="writing-newanthology-button" type="text">新建文集</el-button>
                <el-menu-item-group v-show="show1">
                  <transition name="fade">
                    <div v-if="show1">
                      <el-input v-model="input" placeholder="文件集名"></el-input>
                      <el-button class="navigation-buttons-Submission" round>提交</el-button>
                      <el-button
                        v-if="show1"
                        class="navigation-buttons-cancel"
                        @click="show1 =false"
                      >取消</el-button>
                    </div>
                  </transition>
                </el-menu-item-group>
                <el-menu-item index="2">
                  <i class="el-icon"></i>
                  <span slot="title" @click="visible=true">
                    随笔
                    <el-button
                      size="mini"
                      icon="el-icon-search"
                      type="text"
                      class="writing-set-button"
                      circle
                    ></el-button>
                  </span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon"></i>
                  <span slot="title" @v-show="show2=true">
                    日记本
                    <el-button
                      @click="visible=true"
                      size="mini"
                      icon="el-icon-search"
                      class="writing-set-button"
                      circle
                      type="text"
                    ></el-button> 
                  </span>
                </el-menu-item>
              </el-menu>
              <el-popover placement="top" width="160" trigger="hover">
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
                    <el-switch
                      v-model="value"
                      active-color="#13ce66"
                      inactive-color="black"
                      active-text="夜间"
                      inactive-text="日间"
                    ></el-switch>
                    <el-switch
                      v-model="value1"
                      active-color="#13ce66"
                      inactive-color="black"
                      active-text="宋体"
                      inactive-text="繁体"
                    ></el-switch>
                    <el-switch
                      v-model="value2"
                      active-color="#13ce66"
                      inactive-color="black"
                      active-text="繁体"
                      inactive-text="简体"
                    ></el-switch>
                    <el-button
                      type="text"
                      class="writing-setup-button"
                      size="mini"
                      slot="reference"
                    >设置显示模式</el-button>
                  </el-popover
                   >
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
                :before-close="handleClose">
                <span>如果你在使用编辑器的过程中遇到问题，可以尝试以下方案解决：</span>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">知道了</el-button>
                </span>
              </el-dialog>
            </div>
          </div>
        </el-col>
       <el-col :span="5">
         <div>
         <writeArticle  v-show="show1"></writeArticle>
         </div>
        </el-col>
        <el-col :span="15">
          <wangEditor></wangEditor>
        </el-col>
      </el-row>
    </div>
  </el-container>
</template>

<style lang="scss" scoped>
@import "../../static/css/writing.scss";
</style>

<script>
import wangEditor from '@/pages/wangEditor.vue'
import wangEditor2 from '@/pages/wangEditor2.vue'
import writeArticle from '@/pages/writeArticle.vue'
export default {
  el: "#demo",  
  components : {
    wangEditor,
    wangEditor2,
    writeArticle
  },
  data() {
    return {
      input: "",
      dialogVisible: false,
      count: 0,
      visible: false,
      value: true,
      value1: true,
      value2: true,
      show1: false,
      content:null,
      editorOption:{}
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