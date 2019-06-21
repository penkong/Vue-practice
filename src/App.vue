<template>
  <div>
    <!-- come from componet = we define here -->
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
// comminucate from child to parent emitting event
// comminucate from parent to child props

import SearchBar from "./components/SearchBar";

export default {
  name: "App",
  components: {
    SearchBar
  },
  methods: {
    //event.target.value
    onTermChange(searchTerm) {
      console.log(searchTerm);
    }
  }
};
</script>
