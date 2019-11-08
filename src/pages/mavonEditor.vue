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
    imgAdd(pos, files) {
      
    }
  }
};
</script>