<template>
  <div class="container">
    <el-upload
      class="avatar-uploader"
      action="http://192.168.1.109:8888/api/head_portrait/add"
      :http-request="uploadUserHead"
      :show-file-list="false"
      :before-upload="beforeAvatarUpload">
    >
      <img v-if="imageUrl" :src=this.imageUrl class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>


<style lang="scss" scoped>
@import "../../static/css/test.scss";
</style>


<script>
export default {
  data() {
    return {
      imageUrl: ""
    };
  },
  methods: {
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
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
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
</script>