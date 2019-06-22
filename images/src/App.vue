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
</script>
