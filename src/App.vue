<template>
  <div>
    <!-- come from componet = we define here -->
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
// comminucate from child to parent emitting event
// comminucate from parent to child props
import axios from "axios";
import SearchBar from "./components/SearchBar";

const API_KEY = "AIzaSyCZJ14iQvhn3A6lKR5VM9mO18gw5p5XdlM";

export default {
  name: "App",
  components: {
    SearchBar
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
        .then(res => console.log(res.data));
    }
  }
};
</script>
