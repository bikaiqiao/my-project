<template>
  <el-container>
    <el-header>
      <myHead></myHead>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          class="el-menu-vertical-demo"
          router
          @open="handleOpen"
          @close="handleClose"
          :default-openeds="['1']"
        >
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
          <h1>个人帐号设置</h1>
          <div class="setting_block">
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
            <div>222</div>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
@import "../../static/css/manager.scss";
@import "../../static/css/account.scss";
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
export default {
  components: {
    myHead
  },
  data() {
    return {
      imageUrl: ""
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