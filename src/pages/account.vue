<template>
  <el-container>
    <el-header>
      <myHead></myHead>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <sideBar :menubar="['1']"></sideBar>
      </el-aside>

      <el-main>
        <div id="overview">
          <h1>个人帐号设置</h1>
          <div class="setting_block">
            <div>上传头像</div>
            <div style="float: left">
            <div class="userHead">
              <el-upload
                class="avatar-uploader"
                action="http://192.168.1.109:8888/api/head_portrait/add"
                :http-request="uploadUserHead"
                :show-file-list="false"
              >
                <img v-if="imageUrl" :src="this.imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            </div>
            <div></div>
          </div>

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="设置密码" name="1">
              <div>输入新密码</div>
              <div class="setting_box">
                <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
              </div>
            </el-collapse-item>
            <el-collapse-item title="绑定手机" name="2">
              <div>请输入手机号</div>
              <div class="setting_box">
                <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
              </div>
            </el-collapse-item>
            <el-collapse-item title="绑定邮箱" name="3">
              <div>邮箱号</div>
              <div class="setting_box">
                <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
              </div>
            </el-collapse-item>
            <el-collapse-item title="绑定QQ号" name="4">
              <div class="setting_box">
                <el-input placeholder="请输入qq号" v-model="input" clearable></el-input>
              </div>
            </el-collapse-item>
          </el-collapse>
          <div style="height:20px"></div>
          <div id="submit_box">
            <el-button plain @click="login()">提交</el-button>
          </div>

        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
@import "../../static/css/manager.scss";
@import "../../static/css/account.scss";
@import "../../static/css/components/header.scss"
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
<script>
import Cookies from "js-cookie";
import myHead from "./../components/header.vue";
import sideBar from "./../components/sidebar.vue";
export default {
  components: {
    myHead,
    sideBar
  },
  data() {
    return {
      imageUrl: "",
      activeNames: ['1'],
      input: '',
      password: ''
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
    uploadUserHead(file) {
      console.log(file.file);
      var params = new FormData();
      params.append("userName", "11111");
      params.append("files", file.file);
      this.$axios
        .postWithURLWithToken("head_portrait/add", params)
        .then(response => {
          if(response.data.list){
            console.log(response.data.list[0])
            this.imageUrl = response.data.list[0];
          }
        })
        .catch(response => {});
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>>