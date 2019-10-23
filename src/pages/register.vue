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
          <div class="grid-content">
            <router-link to="login" class="box none">登入</router-link>
            <a class="box pointer">·</a>
            <router-link to="register" class="box none active">注册</router-link>
          </div>
          <div>
            <div class="form-box">
              <el-input v-model="userName" placeholder="用户名" autofocus="true" @blur="loseFocus()"></el-input>
              <div id="FinputIcon" class="InputIcon">
                <i class="el-icon-error"></i>
              </div>
              <div id="TinputIcon" class="InputIcon">
                <i class="el-icon-success"></i>
              </div>
              <!-- <el-input v-model="telNumber" placeholder="手机号"></el-input> -->
              <el-input v-model="password" placeholder="设置密码" show-password></el-input>
            </div>
            <div>
              <button class="register-button" @click="login()">注册</button>
            </div>
          </div>
        </el-col>
        <el-col :span="8" class="el-box">
          <div class="grid-content"></div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <div id="show"></div>
      <button @click="reverseTime()">注册</button>
    </el-footer>
  </el-container>
</template>
<style src="../../static\css\login.css"></style>
<style src="../../static\css\register.css"></style>
<style>
.TinputIcon{
  display:inline-block;
}
</style>

<script>
import qs from "qs";
var userNoRepeat = false;
var userRepeat = false;
var time = 10;
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
      var Parameter = { userName: userName, userPassword: password };
      var qsParameter = qs.stringify(Parameter);
      var jsonParameter = JSON.stringify(Parameter);
      this.$axios
        .postWithURL("sign_up", jsonParameter)
        .then(function(response) {
          console.log(response);
          if(response.data.code=='-1'){
            alert("用户名已经注册");
          }
        })
        .catch(function(error) {
          console.error(error);
        });
    },
    loseFocus() {
      var userName = this.userName;
      this.$axios.getWithURL("get/"+userName)
        .then(function(response) {
          if(response.data.code=='-1'){
            //如果返回值是-1的话则用户名不能通过
            document.getElementById("FinputIcon").style.display="inline-block";
            document.getElementById("TinputIcon").style.display="none"; 
          }else{
            //如果返回值不是-1的话则用户名可以通过
            document.getElementById("TinputIcon").style.display="inline-block";
            document.getElementById("FinputIcon").style.display="none";
          }
          console.log(response);
        })
        .catch(function(error) {
          console.error(error);
        });
    },
    //倒计时函数
    reverseTime() {
      var x = document.getElementById("show");
      var y = time--;
      x.innerHTML = y;
      setTimeout(this.reverseTime, 1000);
    }
  }
};
</script>
