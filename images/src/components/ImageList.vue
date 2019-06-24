<template>
  <div>
    <!-- v-bind -->
    <img v-for="image in allImages" :src="image.link">
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: mapGetters(["allImages"]),
  methods: mapActions(["fetchImages"]),
  //lifeCycle method
  created() {
    this.fetchImages();
  }
};
</script>

<style scoped>
</style>
