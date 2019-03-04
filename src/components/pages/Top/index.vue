<template>
  <div class="page">
    <div class="posts">
      <div class="post" v-for="post in posts">
        <VueMarkdown class="post__markdown">{{ post.markdown }}</VueMarkdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import: node_modules
import { Component, Vue } from 'vue-property-decorator';
import VueMarkdown from 'vue-markdown';

@Component({
  components: {
    VueMarkdown,
  },
})
export default class Top extends Vue {
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

.post__markdown {
  /deep/ h1 {
    color: #333;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.4;
    margin-bottom: 0.8em;

    &::before {
      content: '#';
      color: #c3c3c3;
      margin: 0 8px 0 0;
    }
  }

  /deep/ h2 {
    color: #333;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.4;
    margin: 1.2em 0 0.8em;

    &::before {
      content: '##';
      color: #c3c3c3;
      margin: 0 8px 0 0;
    }
  }

  /deep/ p {
    font-size: 13px;
    line-height: 1.8;
  }
}
</style>
