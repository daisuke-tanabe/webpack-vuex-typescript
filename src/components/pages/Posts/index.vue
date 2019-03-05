<template>
  <div class="page">
    <div class="posts">
      <div class="post" v-for="post in posts">
        <div class="post__title">{{ post.title }}</div>
        <div class="post__description">{{ post.description }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import: node_modules
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Posts extends Vue {
  // computed
  get posts(): any {
    return this.$store.getters.posts;
  }

  // Lifecycle hooks
  public created() {
    this.$store.dispatch('fetchPosts');
  }
}
</script>

<style scoped lang="scss">
.page {
}

.post {
  margin-bottom: 30px;
}
</style>
