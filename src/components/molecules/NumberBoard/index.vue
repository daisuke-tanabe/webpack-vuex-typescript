<template>
  <ul class="number-board">
    <li class="number-board__item" v-for="number in numbers">
      <Button :text="number" @click="handleClickNumber" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from '../../atoms/Button/index.vue';

@Component({
  components: {
    Button,
  },
})
export default class NumberBoard extends Vue {
  @Prop({
    type: Array,
    default: [],
  })
  public numbers!: string[];

  public handleClickNumber(event: Event): void {
    if (event.target instanceof HTMLElement) {
      this.$store.dispatch('clickNumber', event.target.innerText);
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
