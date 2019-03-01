<template>
  <ul class="number-board">
    <li class="number-board__item" v-for="number in numbers">
      <Button :label="number" @click="handleClickNumber" />
    </li>
  </ul>
</template>

<script lang="ts">
/**
 * Presentational Component
 *
 * pagesディレクトリ以外のコンポーネントは以下のような設計にしています
 *
 * - 受け取った値を元に描写するだけ
 * - マークアップやスタイルをゴリゴリ書く
 */

// import: node_modules
import { Component, Prop, Vue } from 'vue-property-decorator';

// import: atoms component
import Button from '../../atoms/Button/index.vue';

@Component({
  components: {
    Button,
  },
})
export default class NumberBoard extends Vue {
  private numbers: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '00', '.'];

  @Prop({
    type: Function,
  })
  private handleClickNumber!: () => void;
}
</script>

<style scoped lang="scss">
.number-board {
  grid-area: number-board;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 25% 25% 25% 25%;
}
</style>
