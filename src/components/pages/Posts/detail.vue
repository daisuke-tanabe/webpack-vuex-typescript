<template>
  <div class="page">
    <div class="post">
      <div>{{ post.title }}</div>
      <div>{{ post.description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
// import: node_modules
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Post extends Vue {
  // computed
  get post(): any {
    return this.$store.getters.post;
  }

  // Lifecycle hooks
  public created() {
    this.$store.dispatch('fetchPost', { id: this.$route.params.id });
  }
}
</script>

<style scoped lang="scss">
.page {
}

.posts {
  display: flex;
  flex-wrap: wrap;
}

.post {
  margin-bottom: 30px;
  width: 300px;
}

.post__link {
  text-decoration: none;
}

.post__title {
  color: #333;
  font-size: 16px;
  font-weight: bold;
}

.post__description {
  color: #999;
  font-size: 13px;
}
</style>
