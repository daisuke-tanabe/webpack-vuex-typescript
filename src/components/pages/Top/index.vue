<template>
  <div class="page">
    <div class="posts">
      <div v-for="post in posts">
        <h2>{{ post.title }}</h2>
        <div>{{ post.description }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import: node_modules
import { Component, Vue } from 'vue-property-decorator';

@Component({
  created() {
    this.$store.dispatch('fetchPosts');
  },
})
export default class Top extends Vue {
  get posts(): any {
    return this.$store.getters.posts;
  }
}
</script>

<style scoped lang="scss">
.page {
}

.section {
  margin-bottom: 30px;
}

.title {
  color: #333;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 0.8em;

  &::before {
    color: #c3c3c3;
    margin: 0 8px 0 0;
  }

  &--lv1 {
    font-size: 20px;

    &::before {
      content: '#';
    }
  }

  &--lv2 {
    font-size: 18px;

    &::before {
      content: '##';
    }
  }
}

.paragraph {
  font-size: 13px;
  line-height: 1.8;
}
</style>
