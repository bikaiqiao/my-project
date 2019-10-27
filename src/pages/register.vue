<template>
  <el-container>
    <div class="bakcground_picture">&nbsp;</div>
    <el-header>
      <div class="position_img" style="position:absolute;top:56px;margin-left:50px;">
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
          <div v-bind:class="{ display_inline: isInputIcon }" class="InputIcon">
            <i class="el-icon-error"></i>
          </div>
          <div v-bind:class="{ display_inline: notInputIcon }" class="InputIcon">
            <i class="el-icon-success"></i>
          </div>
          <div class="grid-content">
            <router-link to="login" class="box none">登入</router-link>
            <a class="box pointer">·</a>
            <router-link to="register" class="box none active">注册</router-link>
          </div>
          <div>
            <div class="form-box">
              <div class="input_box">
                <el-input v-model="userName" placeholder="用户名" autofocus="true" @blur="loseFocus()"></el-input>
                <!-- <el-input v-model="telNumber" placeholder="手机号"></el-input> -->
                <el-input v-model="password" placeholder="设置密码" show-password></el-input>
              </div>
            </div>
            <div>
              <button class="register-button" @click="register()">注册</button>
              <div id="verify">
                <img src="http://localhost:8888/api/verify_code" />
              </div>
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
<style src="../../static/css/login.css"></style>
<style src="../../static/css/register.css"></style>
<style>
.TinputIcon {
  display: inline-block;
}
.display_inline {
  display: inline-block;
}
.display_none {
  display: none;
}
</style>

<script>
//暂时用不到
// import qs from "qs";
import Cookies from "js-cookie";
var time = 10;
export default {
  data() {
    return {
      userName: "",
      password: "",
      isInputIcon: false,
      notInputIcon: false,
      verifyPic: ""
    };
  },
  mounted() {
    this.applyVerify();
  },
  methods: {
    applyVerify() {
    },
    register() {
      如果已经访问过了则进行以下内容否则设置pageCount为1
      if (Cookies.get("pageCount")) {
        Cookies.set("pageCount", Number(Cookies.get("pageCount")) + 1, {
          expires: 7
        });
        var nowDate = new Date();
        /*
         *如果能查找到上一次访问页面的时间
         *就先取到这个时间值
         *然后对比现在的时间值
         */
        // Cookies.set("pageCountTime", nowDate);
        // console.log(Cookies.get("pageCountTime"));
        if (Cookies.get("pageCountTime")) {
          var previousDate = new Date(Cookies.get("pageCountTime"));
          Cookies.set("pageCountTime", nowDate);
          // console.log(nowDate.getTime());
          // console.log(previousDate.getTime());
          console.log(nowDate.getTime() - previousDate.getTime());
          if (nowDate.getTime() - previousDate.getTime() < 1000) {
            console.log('pageVerify的值+1');
            console.log(Cookies.get("pageVerify"));
            Cookies.set("pageVerify",Number(Cookies.get("pageVerify"))+1)
            if(Cookies.get("pageVerify")==3){
              console.log("向后端发送请求")
              Cookies.set("pageVerify",0);
            }
          }else{
            Cookies.set("pageVerify",0);
          }
        }
      } else {
        Cookies.set("pageCount", 1);
        Cookies.set("pageCountTime", nowDate);
      }
      
      var userName = this.userName;
      var password = this.password;
      var Parameter = { userName: userName, userPassword: password };
      //qs序列化暂时用不到
      // var qsParameter = qs.stringify(Parameter);
      var jsonParameter = JSON.stringify(Parameter);
      this.$axios
        .postWithURL("sign_up", jsonParameter)
        .then(function(response) {
          console.log(response);
          // if (response.data.code == "-1") {
          //   alert("用户名已经注册");
          // }
        })
        .catch(function(error) {
          console.error(error);
        });
    },
    loseFocus() {
      var userName = this.userName;
      if (this.userName.trim() != "") {
        this.$axios
          .getWithURL("is_username_duplicated/" + userName)
          .then(response => {
            if (response.data == true) {
              //如果返回值是true的话则用户名不能通过
              this.isInputIcon = true;
              this.notInputIcon = false;
            } else {
              //如果返回值不是true的话则用户名可以通过
              this.isInputIcon = false;
              this.notInputIcon = true;
            }
          })
          .catch(function(error) {
            console.error(error);
          });
      } else {
        this.isInputIcon = false;
        this.notInputIcon = false;
      }
    },
    //倒计时函数
    reverseTime() {
      var y = time--;
      setTimeout(this.reverseTime, 1000);
    }
  }
};
</script>
