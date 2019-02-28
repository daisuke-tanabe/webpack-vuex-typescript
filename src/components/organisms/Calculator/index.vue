<template>
  <div class="calculator">
    <div class="result">
      <div class="result__formula">{{ formula }}</div>
      <div class="result__answer">{{ answer }}</div>
    </div>
    <div class="clear">
      <Button label="Clear" @click="handleClickClear" />
    </div>
    <NumberBoard :handleClickNumber="handleClickNumber" />
    <OperatorBoard :handleClickOperator="handleClickOperator" :handleClickAnswer="handleClickAnswer" />
  </div>
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
import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from '../../atoms/Button/index.vue';
import NumberBoard from '../../molecules/NumberBoard/index.vue';
import OperatorBoard from '../../molecules/OperatorBoard/index.vue';

/**
 * @Componentや@Propといったデコレーターはvueの世界
 * typescriptとは世界が違うので注意
 */
@Component({
  components: {
    Button,
    NumberBoard,
    OperatorBoard,
  },
})
export default class Calculator extends Vue {
  @Prop({
    type: String,
  })
  private formula?: string;

  @Prop({
    type: Number,
  })
  private answer?: number;

  @Prop({
    type: Function,
  })
  private handleClickNumber!: () => void;

  @Prop({
    type: Function,
  })
  private handleClickOperator!: () => void;

  @Prop({
    type: Function,
  })
  private handleClickAnswer!: () => void;

  @Prop({
    type: Function,
  })
  private handleClickClear!: () => void;
}
</script>

<style scoped lang="scss">
.calculator {
  border: 1px solid #dedede;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 15% 85%;
  grid-template-areas:
    'result clear'
    'number-board operator-board';
  height: 460px;
  margin: 20px;
  width: 420px;
}

.result {
  grid-area: result;
  border: 1px solid #dedede;
  display: grid;
  grid-template-rows: 30% 70%;
  text-align: right;
  padding-right: 11%;
}

.result__formula {
  color: #999;
  font-size: 10px;
  align-self: flex-end;
}

.result__answer {
  font-size: 18px;
  align-self: center;
}

.clear {
  grid-area: clear;
}
</style>
