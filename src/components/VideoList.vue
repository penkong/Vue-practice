<template>
  <ul class="list-group">
    <!-- it make 5 video item for us auto -->
    <VideoListItem v-for="video in videos" :video="video" :key="video.etag"></VideoListItem>
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
