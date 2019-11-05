<template>
  <div class="mianBox">
    <div class="inputBox">
      <el-input v-model="username" placeholder="用户名"></el-input>
    </div>
    <div class="inputBox">
      <el-input v-model="password" placeholder="密码" show-password></el-input>
    </div>
    <div class="buttomBox">
      <div class="checkBox">
        <el-checkbox v-model="checked">记住我</el-checkbox>
      </div>
      <div class="forgetPassword">
        <router-link to>忘记密码</router-link>
      </div>
    </div>
    <div class="buttonBox">
      <el-button round @click="login()">登入</el-button>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@import "./static/css/components/login.scss";
</style>

<script>
import qs from "qs";
export default {
  data: function() {
    return {
      username: "",
      password: "",
      checked: true
    };
  },
  methods: {
    login() {
      var username = this.username;
      var password = this.password;
      var Parameter = { username: username, password: password };
      var qsParameter = qs.stringify(Parameter);
      this.$axios
        .postWithURL("login", qsParameter)
        .then(response => {
          // this.myAlert();
          this.action();
          console.log(response);
        })
        .catch(function(error) {
          console.error(error);
        });
    },
    action() {
      this.$message({
        showClose: true,
        message: "登入成功",
        type: "success",
        duration: 3000
      });
      this.$router.replace({ path: "/" });
    }
  }
};
</script>