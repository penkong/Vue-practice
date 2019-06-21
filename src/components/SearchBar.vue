<template>
  <div>
    <!-- directive v-on:input="onInput" -->
    <input @input="onInput" type="text">
  </div>
</template>


<script>
export default {
  name: "SearchBar",
  //give ability to change data
  methods: {
    //name of event event + verb
    onInput(e) {
      this.$emit("termChange", e.target.value);
    }
  }
};
</script>

<style scoped>
</style>

