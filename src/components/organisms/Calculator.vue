<template>
  <div class="calculator">
    <ol class="numbers">
      <li class="numbers__item" v-for="number in numbers">
        <button class="button" type="button">{{ number }}</button>
      </li>
    </ol>
    <ul class="operators">
      <li class="operators__item" v-for="operator in operators">
        <button class="button" type="button">{{ operator }}</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

//
@Component
export default class Button extends Vue {
  // https://github.com/kaorun343/vue-property-decorator#-propoptions-propoptions--constructor--constructor---decorator
  @Prop({
    type: Array,
  })
  private numbers: string[] = ['7', '8', '9', '4', '4', '6', '1', '2', '3', '0', '00', '.'];

  @Prop({
    type: Array,
  })
  private operators: string[] = ['÷', '×', '＋', '−', '＝'];
}
</script>

<style scoped lang="scss">
.calculator {
  border: 1px solid #ccc;
  display: grid;
  grid-template-columns: 80% 20%;
  height: 420px;
  width: 420px;
}

.numbers {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 25% 25% 25% 25%;
}

.operators {
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
