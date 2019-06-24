<template>
  <div>ImageList</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ImageList",
  methods: mapActions(["fetchImages"]),
  //lifeCycle method
  created() {
    this.fetchImages();
  }
};
</script>

<style scoped>
</style>
