<template>
  <div class="container">
    <AppHeader></AppHeader>
  </div>
</template>

<script>
// comminucate from child to parent emitting event
// comminucate from parent to child props
// vuex is same as redux
import AppHeader from "./components/AppHeader";
export default {
  name: "App",
  components: {
    AppHeader
  }
};
// vuex state, getters make subset, mutations(invidual work which car is sold)
// like computed wash car, Actions assemble multi mutations to make intelligent change
// wash car bill car sell car,
</script>


