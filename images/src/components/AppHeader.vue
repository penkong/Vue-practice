<template>
  <div class="ui secondary pointing menu">
    <a class="active item" href="/">Image Storage</a>

    <div class="right menu">
      <div class="horizontal" v-if="isLoggedIn">
        <a class="item">Galleries</a>
        <a class="item">upload</a>
        <a class="item" @click="logout">logout</a>
      </div>

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
    ...mapActions(["login", "logout"])
  }
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>

