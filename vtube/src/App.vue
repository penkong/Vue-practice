<template>
  <div class="container">
    <!-- come from componet = we define here -->
    <!-- v-on:termChnage -->
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="row">
      <!-- name we pass v-bind:= name of data in parent -->
      <VideoDetail :video="selectedVideo"></VideoDetail>
      <!-- directvie for props v-bind:videos='videos' -->
      <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
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
  // in vue comp data must be a func ( it help make data immutable on memory when instnces of component use data)
  // in instance of vue can be a obj
  data() {
    //update this props cause app to rerender
    return { videos: [], selectedVideo: null };
  },
  methods: {
    // searchTerm = event.target.value => second arg on emitter
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
