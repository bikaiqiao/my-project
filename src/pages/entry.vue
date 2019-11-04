<template>
  <el-container style="position:absolute; width:100%; height:100%; z-index:-1; left:0; top:0;">
    <img src="static\picture\pic.jpg" />
    <el-header>&nbsp;</el-header>
    <el-main>
      <div class="imgPosition">
        <img src="static/picture/logo.png" />
      </div>
      <el-row>
        <el-col :span="8">&nbsp;</el-col>
        <el-col :span="8">
          <div class="content" v-if="login">
            <div class="contentSwitchBox">
              <div
                @click="switchBox"
                class="switchBox leftSwitch"
                v-bind:class="{loginButton:login}"
              >
                <span>登入</span>
              </div>
              <div
                @click="switchBox"
                class="switchBox rightSwitch"
                v-bind:class="{registerButton:register}"
              >
                <span>注册</span>
              </div>
            </div>
            <login></login>
          </div>
          <div class="content" v-if="register">
            <div class="contentSwitchBox">
              <div
                @click="switchBox"
                class="switchBox leftSwitch"
                v-bind:class="{loginButton:login}"
              >
                <span>登入</span>
              </div>
              <div
                @click="switchBox"
                class="switchBox rightSwitch"
                v-bind:class="{registerButton:register}"
              >
                <span>注册</span>
              </div>
            </div>
            <register></register>
          </div>
        </el-col>
        <el-col :span="8">&nbsp;</el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
@import "../../static/css/Entry.scss";
</style>

<script>
import login from "./../components/login.vue";
import register from "./../components/register.vue";
import store from "./../store/store.js";
export default {
  components: {
    login,
    register
  },
  created() {
    // this.register=this.$route.switchParameter.register;
    // this.login = !this.$store.state.entryData;
    // this.register = this.$store.state.entryData;\
    if (this.$route.params.entryData != undefined) {
      this.register = !this.$route.params.entryData;
      this.login = this.$route.params.entryData;
    }
  },
  data() {
    return {
      login: true,
      register: false
    };
  },
  methods: {
    switchBox() {
      this.login = !this.login;
      this.register = !this.register;
    }
  }
};
</script>