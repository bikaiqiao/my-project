<template>
  <test :text="text"></test>
</template>

<script>
import test from "./../components/components.vue";
export default {
  components: {
    test
  },
  data() {
    return {
      text:1234,
    }
  }
};
</script>