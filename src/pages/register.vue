<template>
  <el-container>
  <el-header>
    <div style="position:absolute;top:56px;margin-left:50px;">
     <router-link to="index"><img src="static\picture\logo.png"></router-link>
    </div>
  </el-header>
  <el-main>
    <el-row>
      <el-col :span="8" class="el-box"><div class="grid-content "></div></el-col>
      <el-col :span="8" class="el-box">
        <div class="grid-content ">
            <router-link to="login" class=" box none">登入</router-link>
          <a class="box pointer">·</a>
          <router-link to="register" class=" box none active">注册</router-link>
        </div>
        <div>
          <div class="form-box">
            <el-input v-model="name" placeholder="你的昵称" ></el-input>
            <el-input v-model="telNumber" placeholder="手机号"></el-input>
            <el-input v-model="password" placeholder="设置密码" show-password></el-input>
          </div>
          <div>
            <button class="register-button" @click="login()">注册</button>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="el-box"><div class="grid-content "></div></el-col>
    </el-row>
  </el-main>
  <el-footer></el-footer>
</el-container>
</template>
<style src="../../static\css\login.css"></style>
<style src="../../static\css\register.css"></style>

<script>
  export default {
    data() {
      return {
        name: '',
        telNumber:'',
        password: ''
      }
    },

    methods: {
      login(){
        var userName = this.userName;
        var password = this.password;
        var Parameter={userName:userName,password:password};

        var jsonParameter=JSON.stringify(Parameter);
        alert(jsonParameter);

        this.axios.get('https://www.tianqiapi.com/api/?version=v1&cityid=101110101&appid=[appid]&appsecret=[appsecret]',
        {
          params:{
            userName:userName,
            password:password
          }
        })
        // .then((response) => {
        //   console.log(response.data)
        //   })
        .then(function (response) {
          console.log(response);
          })
          .catch(function (error) {
            console.error(error);
          })
      }
    }
}
</script>
