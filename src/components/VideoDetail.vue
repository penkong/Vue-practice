<template>
  <!-- v-if for init state of videoSelected in app is null -->
  <div v-if="video">{{ video.snippet.title }}</div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: ["video"]
};
</script>

<style scoped>
</style>

