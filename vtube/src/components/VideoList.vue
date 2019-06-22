<template>
  <ul class="list-group col-md-5">
    <!-- it make 5 video item for us auto -->
    <VideoListItem
      v-for="video in videos"
      :video="video"
      :key="video.etag"
      @videoSelect="onVideoSelect"
    ></VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from "./VideoListItem";

export default {
  name: "VideoList",
  components: {
    VideoListItem
  },
  props: ["videos"],
  // props: {
  //   videos: Array
  // }
  methods: {
    onVideoSelect(video) {
      this.$emit("videoSelect", video);
    }
  }
};
</script>

<style scoped>
</style>
