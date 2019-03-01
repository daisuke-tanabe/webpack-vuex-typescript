<template>
  <ul class="operator-board">
    <li class="operator-board__item" v-for="operator in operators">
      <Button v-if="operator === '＝'" :label="operator" skin="pink" @click="handleClickAnswer" />
      <Button v-else :label="operator" @click="handleClickOperator" />
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
export default class OperatorBoard extends Vue {
  private operators: string[] = ['÷', '×', '＋', '−', '＝'];

  @Prop({
    type: Function,
  })
  private handleClickOperator!: () => void;

  @Prop({
    type: Function,
  })
  private handleClickAnswer!: () => void;
}
</script>

<style scoped lang="scss">
.operator-board {
  grid-area: operator-board;
  display: grid;
  grid-template-rows: 20% 20% 20% 20% 20%;
}
</style>
