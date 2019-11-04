<template>
    <div>{{title}}</div>
</template>

<script>
export default {
    props: ['text'],
    data:function(){
        return{
            title:1123,
        }
    },
    mounted: function() {
        this.title=this.text;
    }
}
</script>