<template>
  <div>
    <!-- directive v-on:input="onInput" -->
    <input @input="onInput" type="text" />
  </div>
</template>


<script>
export default {
  name: "SearchBar",
  //give ability to change data
  methods: {
    //name of event event + verb
    onInput(e) {
      // communicate from child to parent by emitting event
      // emit allow us to listen
      this.$emit("termChange", e.target.value);
      // communicate from parent to child by props;
    }
  }
};
</script>

<style scoped>
input {
  width: 75%;
}

div {
  text-align: center;
  margin: 20px;
}
</style>

