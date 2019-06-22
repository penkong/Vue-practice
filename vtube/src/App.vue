<template>
  <div class="container">
    <!-- come from componet = we define here -->
    <SearchBar @termChange="onTermChange"></SearchBar>
    <!-- name we pass v-bind:= name of data in parent -->
    <div class="row">
      <VideoDetail :video="selectedVideo"></VideoDetail>
      <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
    </div>
    <!-- {{ videos.length }} -->
  </div>
</template>

<script>
// comminucate from child to parent emitting event
// comminucate from parent to child props
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const API_KEY = "AIzaSyCZJ14iQvhn3A6lKR5VM9mO18gw5p5XdlM";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data() {
    //update this props cause app to rerender
    return { videos: [], selectedVideo: null };
  },
  methods: {
    //event.target.value
    onTermChange(searchTerm) {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet", //what type of info want back
            q: searchTerm
          }
        })
        .then(res => {
          this.videos = res.data.items;
        });
    },
    onVideoSelect(video) {
      this.selectedVideo = video;
    }
  }
};
</script>
