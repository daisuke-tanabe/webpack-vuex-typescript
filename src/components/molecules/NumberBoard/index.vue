<template>
  <ul class="number-board">
    <li class="number-board__item" v-for="number in numbers">
      <Button :label="number" @click="handleClickNumber" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '../../atoms/Button/index.vue';

@Component({
  components: {
    Button,
  },
})
export default class NumberBoard extends Vue {
  private numbers: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '00', '.'];

  private handleClickNumber(event: Event): void {
    const eventTarget = event.target;

    if (eventTarget instanceof HTMLElement) {
      this.$store.dispatch('clickNumber', eventTarget.innerText);
    }
  }
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
