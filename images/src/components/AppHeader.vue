<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Image Storage</router-link>

    <div class="right menu">
      <div class="horizontal" v-if="isLoggedIn">
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">upload</router-link>
        <a class="item" @click="logout">logout</a>
      </div>

      <a class="ui item" v-else @click="login">Login</a>
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

