<template>
  <div>
    <div id="main">
      <mavon-editor v-model="value" @imgAdd="imgAdd" />
    </div>
    <el-button @click="getContent"></el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    getContent() {
      console.log(this.value);
    },
    imgAdd(pos, file) {
      var formData = new FormData();
      formData.append("image", file);
      this.$axios.postWithURLWithToken("article/image/add","11111","22222","formData")
      .then(response=>{
        console.log(response);
      })
      .catch(response=>{
        console.log(response);
      })
    }
  }
};
</script>