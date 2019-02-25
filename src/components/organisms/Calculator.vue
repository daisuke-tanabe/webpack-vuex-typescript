<template>
  <div class="calculator">
    <div class="result">
      <div class="result__formula">{{ formula }}</div>
      <div class="result__answer">{{ answer }}</div>
    </div>
    <div class="clear">
      <button class="button" type="button" @click="handleClickClear">Clear</button>
    </div>
    <ol class="numbers">
      <li class="numbers__item" v-for="number in numbers">
        <button class="button" type="button" @click="handleClickNumber">{{ number }}</button>
      </li>
    </ol>
    <ul class="operators">
      <li class="operators__item" v-for="operator in operators">
        <button v-if="operator === '＝'" class="button" type="button" @click="handleClickAnswer">{{ operator }}</button>
        <button v-else class="button" type="button" @click="handleClickOperator">{{ operator }}</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

//
@Component
export default class Button extends Vue {
  // computed
  get numbers(): string[] {
    return this.$store.getters.numbers;
  }
  get operators(): string[] {
    return this.$store.getters.operators;
  }
  get formula(): string {
    return this.$store.getters.formula.length !== 0 ? this.$store.getters.formula.join('').replace(/_/g, ' ') : null;
  }
  get answer(): number {
    return this.$store.getters.answer;
  }

  // methods
  public handleClickNumber(event: Event): void {
    if (event.target instanceof HTMLElement) {
      this.$store.dispatch('clickNumber', event.target.innerText);
    }
  }
  public handleClickClear(): void {
    this.$store.dispatch('clickClear');
  }
  public handleClickOperator(event: Event): void {
    if (event.target instanceof HTMLElement) {
      this.$store.dispatch('clickOperator', event.target.innerText);
    }
  }
  public handleClickAnswer(event: Event): void {
    if (event.target instanceof HTMLElement) {
      this.$store.dispatch('clickAnswer', event.target.innerText);
    }
  }
}
</script>

<style scoped lang="scss">
.calculator {
  border: 1px solid #ccc;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 15% 85%;
  grid-template-areas:
    'result clear'
    'numbers operators';
  height: 420px;
  width: 420px;
}

.result {
  grid-area: result;
  border: 1px solid #ccc;
  display: grid;
  grid-template-rows: 40% 60%;
  text-align: right;
  padding-right: 15%;
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

.numbers {
  grid-area: numbers;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 25% 25% 25% 25%;
}

.operators {
  grid-area: operators;
  display: grid;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

.button {
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  color: #333;
  display: flex;
  font-size: 18px;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
}
</style>
