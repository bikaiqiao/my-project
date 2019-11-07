<template>
  <div>
    <div id="editorElem" ref="editor" style="text-align:left"></div>
    <Button shape="circle" type="primary" v-on:click="getContent">submit</Button>
  </div>
</template>
<script>
import E from "wangeditor";
import qs from "qs";
export default {
  name: "editor",
  data() {
    return {
      editor: "",
      editorContent: ""
    };
  },
  methods: {
    getContent: function() {
      console.log(this.editorContent); //获取富文本内容
      this.editor.txt.clear(); //清空富文本的内容
    }
  },
  mounted() {
    // var editor = new E('#editorElem')
    this.editor = new E(this.$refs.editor);
    this.editor.customConfig.uploadImgShowBase64 = true; //图片以base64形式保存
    this.editor.customConfig.uploadImgMaxLength = 5; // 限制一次最多上传 5 张图片
    this.editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
    this.editor.customConfig.customUploadImg = (files, insert) => {
      // files 是 input 中选中的文件列表
      // insert 是获取图片 url 后，插入到编辑器的方法
    
    var list = [];
    var list2=[];
    var reader = new FileReader();
    for(var i = 0; i<files.length; i++) {
      console.log(files[i])
      list[i] = reader.readAsBinaryString(files[i]);
      console.log(list[i])
    }
    // var list2=JSON.stringify(list, { indices: false });
    //  var list2=JSON.stringify(list);
    //  var list3=JSON.parse(files);
    
    this.$axios
    .postWithURLWithToken( "article/image/add","11111", "22222",list)
    .then(response => {
      // this.myAlert();
      console.log(response);
    })
    .catch(function(error) {
      console.error(error);
    });

      // insert(imgUrl)
    };

    //   // 上传代码返回结果之后，将图片插入到编辑器中
    //   // insert(imgUrl);
    // };
    //如果内容发生了改变则修改editorContent中的内容
    this.editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    this.editor.customConfig.pasteTextHandle = content => {
      //支持粘贴
      return content;
    };
    this.editor.create();
  }
};
</script>