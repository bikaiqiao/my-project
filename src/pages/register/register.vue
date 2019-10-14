<template>
  <el-container>
  <el-header>Header
    <div style="position:absolute;top:56px;margin-left:50px;">
     <router-link to="index"><img src="static\picture\logo.png"></router-link>
    </div>
  </el-header>
  <el-main>Main
    <el-row>
      <el-col :span="8"><div class="grid-content "></div></el-col>
      <el-col :span="8">
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
      <el-col :span="8"><div class="grid-content "></div></el-col>
    </el-row>
  </el-main>
  <el-footer>Footer</el-footer>
</el-container>
</template>

<script>
import { apiAddress } from '@/request/api';
  export default {
    data() {
      return {
        name: '',
        telNumber:'',
        password: ''
      }
    },
        // axios.post('/home', {
        //   jsonParameter
        // })
        // .then(function (response) {
        //   console.log(response);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });

    methods: {
      login(){
        var userName = this.userName;
        var password = this.password;
        var Parameter={userName:userName,password:password};

        var jsonParameter=JSON.stringify(Parameter);
        alert(jsonParameter);

        // this.$axios.get('/https://www.tianqiapi.com/api/?version=v1&cityid=101110101&appid=[appid]&appsecret=[appsecret]',{
        //   params:{
        //     userName:userName,
        //     password:password,
        //     // headers:{
        //     //   'token':window.localStorage['token']
        //     // }
        //   }
        //   })
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
          // .then((response=>{
          //   if(response.data.status==200){
          //     let data=response.data;
          //     //登入成功储存token
          //     window.localStorage['token']=response.data.data.token;

          //     //添加token到cookie中
          //     Cookies.set('token',response.data.data.token)
          //     console.log(Cookies.get('token'));


          //     //如果有已经有token则跳转到index页面
          //     if(localStorage.getItem('token')){
          //       this.$router.push({name:'index'});
          //       //如果没有token则跳转到登入页面
          //     }else{
          //       this.$router.push({name:'login'});
          //     }
          //   }else{
          //     alert('用户名或密码错误，请重新输入')
          //   }
          // }))
          .catch(function (error) {
            console.error(error);
          })
      }
    }
}
</script>
