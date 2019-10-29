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
                <div class="verifyInput">
                  <el-input v-model="verifyCode" placeholder="输入验证码" show-password></el-input>
                </div>
                <div class="verify">
                  <a @click="applyVerify()" v-bind:class="{loseHref:isloseHref}">
                    <img :src="verifyPic" width="100%" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <el-button
                type="success"
                class="register-button"
                @click="register()"
                v-bind:class="{loseButton:isloseButton}"
              >注册</el-button>
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
var time = 3;
export default {
  data() {
    return {
      userName: "",
      password: "",
      isInputIcon: false,
      notInputIcon: false,
      verifyPic: "",
      isloseHref: false,
      isloseButton: false,
      verifyCode: ""
    };
  },
  //实现用户刷新页面也仍然有验证码
  // created() {
  //   if (Cookies.get("loseButtonAndVerifyPic") == true) {
  //     this.loseButtonAndVerifyPic();
  //     this.reverseverifyTime();
  //   }
  // },
  mounted() {
    this.applyVerify();
    // this.removeCookie();
  },
  methods: {
    // removeCookie(){
    //   Cookies.remove("pageCount_1");
    //    Cookies.remove("pageCount_2");
    //     Cookies.remove("pageCount_3");
    // },
    applyVerify() {
      this.verifyPic = "http://localhost:8888/api/verify_code?" + Math.random();
      console.log("函数被调用");
      var nowDate = new Date();
      console.log(Cookies.get("pageCount_1"));
      if (Cookies.get("pageCount_1") == undefined) {
        Cookies.set("pageCount_1", nowDate);
        console.log(Cookies.get("pageCount_1"));
      } else if (Cookies.get("pageCount_2") == undefined) {
        console.log(Cookies.get("pageCount_1"));
        console.log(Cookies.get("pageCount_2"));
        Cookies.set("pageCount_2", nowDate);
      } else {
        console.log(Cookies.get("pageCount_1"));
        console.log(Cookies.get("pageCount_2"));
        console.log(Cookies.get("pageCount_3"));
        Cookies.set("pageCount_3", Cookies.get("pageCount_2"));
        Cookies.set("pageCount_2", Cookies.get("pageCount_1"));
        Cookies.set("pageCount_1", nowDate);
      }
      if (
        new Date(Cookies.get("pageCount_1")).getTime() -
          new Date(Cookies.get("pageCount_2")).getTime() <
          1000 &&
        new Date(Cookies.get("pageCount_2")).getTime() -
          new Date(Cookies.get("pageCount_3")).getTime() <
          1000
      ) {
        this.loseButtonAndVerifyPic();
        this.reverseverifyTime();
        Cookies.set("loseButtonAndVerifyPic", true);
      }
    },
    //失去点验证码的样式设置和提醒
    loseButtonAndVerifyPic() {
      this.isloseHref = true;
      this.isloseButton = true;
      console.log("禁止用户点验证码三秒钟");
      this.$message({
        showClose: true,
        message: "点击验证码次数过多",
        type: "warning",
        duration: 3000
      });
    },
    isButtonAndVerifyPic() {
      this.isloseHref = false;
      this.isloseButton = false;
    },
    //倒计时验证码可以重新刷新
    reverseverifyTime() {
      console.log(time);
      var y = time--;
      if (y > 0) {
        setTimeout(this.reverseverifyTime, 1000);
      } else {
        this.isButtonAndVerifyPic();
        Cookies.set("loseButtonAndVerifyPic", false);
        time = 3;
      }
    },
    //测试是否用户名是否重复
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
    //注册发送的ajax请求
    register() {
      var userName = this.userName;
      var password = this.password;
      var verifyCode = this.verifyCode;
      var Parameter = {
        userName: userName,
        userPassword: password
        // verifyCode: verifyCode
      };
      var jsonParameter = JSON.stringify(Parameter);
      var qsParameter = qs.stringify(Parameter);
      this.$axios
        .postWithURL("sign_up", qsParameter)
        .then(function(response) {
          this.action();
        })
        .catch(function(error) {
          console.error(error);
        });
    },
    //注册成功的跳转
    action() {
      this.$message({
        showClose: true,
        message: "注册成功,将在3秒后跳转",
        type: "success",
        duration: 5000
      });
      this.reverseTime();
    },
    //注册成功跳转倒计时
    reverseTime() {
      console.log(time);
      var y = time--;
      if (y > 0) {
        setTimeout(this.reverseTime, 1000);
      } else {
        this.$router.replace({ path: "/" });
      }
    }
  }
};
</script>
