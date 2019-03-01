<template>
  <div class="page">
    <div class="section">
      <h1 class="title title--lv1">このパッケージについて</h1>
      <p class="paragraph">このパッケージは、vue-vuex-typescript-storybookの設計サンプルです。</p>
    </div>

    <div class="section">
      <h2 class="title title--lv2">Home</h2>
      <p class="paragraph">トップページ</p>
    </div>

    <div class="section">
      <h2 class="title title--lv2">Calculator</h2>
      <p class="paragraph">計算機</p>
    </div>
  </div>
</template>

<script lang="ts">
// import: node_modules
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Top extends Vue {}
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
