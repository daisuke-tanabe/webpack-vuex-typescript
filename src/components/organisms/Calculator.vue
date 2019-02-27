<template>
  <div class="calculator">
    <div class="result">
      <div class="result__formula">{{ formula }}</div>
      <div class="result__answer">{{ answer }}</div>
    </div>
    <div class="clear">
      <Button label="Clear" @click="handleClickClear" />
    </div>
    <NumberBoard />
    <OperatorBoard />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '../atoms/Button/index.vue';
import NumberBoard from '../molecules/NumberBoard/index.vue';
import OperatorBoard from '../molecules/OperatorBoard/index.vue';

@Component({
  components: {
    Button,
    NumberBoard,
    OperatorBoard,
  },
})
export default class Calculator extends Vue {
  get formula(): string {
    return this.$store.getters.formula.length !== 0 ? this.$store.getters.formula.join('').replace(/_/g, ' ') : null;
  }

  get answer(): number {
    return this.$store.getters.answer;
  }

  public handleClickClear(): void {
    this.$store.dispatch('clickClear');
  }
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
