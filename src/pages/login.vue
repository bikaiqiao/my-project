<template>
  <el-container>
    <el-header>
      <div style="position:absolute;top:56px;margin-left:50px;">
        <router-link to="index">
          <img src="static\picture\logo.png" />
        </router-link>
      </div>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="8" class="el-box">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="8" class="el-box">
          <div>
            <div class="grid-content">
              <router-link to="login" class="box none active" >登入</router-link>
              <a class="box pointer">·</a>
              <router-link to="register" class="box none">注册</router-link>
            </div>
            <div class="form-box">
              <el-input v-model="userName" placeholder="用户名" autofocus=true></el-input>
              <el-input v-model="password" placeholder="密码" show-password></el-input>
            </div>
            <div>
              <button class="login-button" @click="login()">登入</button>
            </div>
          </div>
        </el-col>
        <el-col :span="8" class="el-box">
          <div class="grid-content"></div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>&nbsp;</el-footer>
  </el-container>
</template>
<style src="../../static\css\login.css"></style>


// <script>
// import login from "./../../components/login.vue";
// export default {
//   // data() {
//   //   return {};
//   // },
//   name:"login",
//   components: {
//     login
//   }
// };
//
//
</script>


<script>
import qs from "qs";
export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    login() {
      var userName = this.userName;
      var password = this.password;
      var Parameter = { username: userName, password: password };
      var jsonParameter=JSON.stringify(Parameter);
      var qsParameter=qs.stringify(Parameter);
      // console.log(qsParameter);
      //用于测试表单获得的数据
      // this.axios.get('https://www.tianqiapi.com/api/?version=v1&cityid=101110101&appid=[appid]&appsecret=[appsecret]', {
      this.$axios.postWithURL('login',
          qsParameter
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.error(error);
        });
    }
  }
};
</script>