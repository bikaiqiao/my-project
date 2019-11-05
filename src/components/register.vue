<template>
  <div class="mianBox">
    <div v-bind:class="{ display_inline: isInputIcon }" class="inputIcon">
      <i class="el-icon-error"></i>
    </div>
    <div v-bind:class="{ display_inline: notInputIcon }" class="inputIcon">
      <i class="el-icon-success"></i>
    </div>
    <div class="inputBox">
      <el-input v-model="username" autofocus="true" placeholder="用户名" @blur="loseFocus()"></el-input>
    </div>
    <div class="inputBox">
      <el-input v-model="password" placeholder="密码" show-password></el-input>
    </div>
    <div class="verifyBox">
      <div class="verifyInputBox">
        <el-input v-model="verifyCode" placeholder="验证码"></el-input>
      </div>
      <!-- <img src="http://localhost；8888/api/verify_code"> -->
      <div class="imgBox">
        <a @click="applyVerify()" v-bind:class="{loseHref:isloseHref}">
          <img :src="verifyPic" width="100%" />
        </a>
      </div>
    </div>
    <div class="buttonBox">
      <el-button round @click="register()" v-bind:class="{loseButton:isloseButton}">注册</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./static/css/components/register.scss";
</style>

<script>
import Cookies from "js-cookie";
var time=3;
export default {
  data: function() {
    return {
      username: "",
      password: "",
      isInputIcon: false,
      notInputIcon: false,
      verifyPic: "",
      isloseHref: false,
      isloseButton: false,
      verifyCode: ""
    };
  },
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
      this.verifyPic =
        "http://192.168.1.129:8888/api/verify_code?" + Math.random();
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
      console.log("恢复验证码")
      if (y > 0) {
        setTimeout(this.reverseverifyTime, 1000);
      } else {
        this.isButtonAndVerifyPic();
        time = 3;
      }
    },
    //测试是否用户名是否重复
    loseFocus() {
      var username = this.username;
      if (this.username != "") {
        this.$axios
          .getWithURL("is_username_duplicated/" + username)
          .then(response => {
            if (response.data == true) {
              console.log(response);
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
      var username = this.username;
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