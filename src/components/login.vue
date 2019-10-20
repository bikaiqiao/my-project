<template>
  <el-row>
    <el-col :span="8" class="el-box">
      <div class="grid-content"></div>
    </el-col>
    <el-col :span="8" class="el-box">
      <div>
        <div class="grid-content">
          <router-link to="login" class="box none active">登入</router-link>
          <a class="box pointer">·</a>
          <router-link to="register" class="box none">注册</router-link>
        </div>
        <div class="form-box">
          <el-input v-model="userName" placeholder="手机号或邮箱"></el-input>
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
</template>

<style src="../../static\css\login.css"></style>

<script>
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
      var Parameter = { userName: userName, password: password };

      var jsonParameter = JSON.stringify(Parameter);
      //用于测试表单获得的数据
      // alert(jsonParameter);
      this.axios
        .post("http://localhost:8888/api/login", {
          data: {
            username: userName,
            password: password
          }
        })
        // 打印response到表单的箭头函数写法
        // .then((response) => {
        //   console.log(response.data)
        //   })
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
