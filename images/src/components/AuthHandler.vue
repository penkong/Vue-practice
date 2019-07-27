<template>
  <div>Please Wait ...</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AuthHandler",
  // we here get out access_token from url
  // finalize get the access and call setToken action
  // to get connect to comp first use mapActions then hook it to comp
  methods: mapActions(["finalizeLogin"]),
  // lifeCycle created best for data loading
  created() {
    this.finalizeLogin(window.location.hash);
  }
};
</script>
