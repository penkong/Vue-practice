<template>
  <div class="ui secondary pointing menu">
    <a class="active item" href="/">Image Storage</a>

    <div class="right menu">
      <div v-if="isLoggedIn">lss</div>
      <a class="ui item" v-else @click="login" href="#">Login</a>
    </div>
  </div>
</template>

<script>
//action change data getters retrieve data
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  //data read and access by it
  computed: mapGetters(["isLoggedIn"]),
  methods: {
    ...mapActions(["login"])
  }
};
</script>

<style scoped>
</style>

