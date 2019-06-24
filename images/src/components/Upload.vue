<template>
  <div class="droper">
    <input type="file">
    <span>Drag image here to Upload</span>
  </div>
</template>

<script>
export default {
  name: "Upload"
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

