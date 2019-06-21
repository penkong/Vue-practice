<template>
  <ul>
    <!-- it make 5 video item for us auto -->
    <VideoListItem v-for="video in videos" v-bind:video="video"></VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from "./VideoListItem";

export default {
  name: "VideoList",
  components: {
    VideoListItem
  },
  props: ["videos"]
  // props: {
  //   videos: Array
  // }
};
</script>

<style scoped>
</style>
