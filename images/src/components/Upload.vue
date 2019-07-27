<template>
  <div class="droper">
    <!-- if we use without $ vue search for event in upload images -->
    <input multiple type="file" accept="image/*" @change="uploadImage($event.target.files)" />
    <span>Drag image here to Upload</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Upload",
  methods: mapActions(["uploadImage"])
};
</script>

<style scoped>
.droper {
  height: 30vh;
  width: 60%;
  border: 8px dotted #eee;
  border-radius: 8px;
  padding: 1rem;
  margin: 4rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: rgb(4, 108, 177);
}
.droper:hover {
  background-color: #eee;
}
input {
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
}
</style>

