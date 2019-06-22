<template>
  <!-- v-if for init state of videoSelected in app is null -->
  <div class="col-md-7" v-if="video">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" :src="videoUrl" frameborder="0"></iframe>
    </div>
    <div class="details">
      <h4>{{ titled }}</h4>
      <p>{{ descriptioned }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: ["video"],
  computed: {
    videoUrl() {
      const { videoId } = this.video.id;
      return `https://www.youtube.com/embed/${videoId}`;
    },
    titled() {
      return this.video.snippet.title;
    },
    descriptioned() {
      return this.video.snippet.description;
    }
  }
};
</script>

<style scoped>
.details {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid lightblue;
  border-radius: 3px;
}
</style>

