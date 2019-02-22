<template>
  <div id="app">
    <Calculator />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Calculator from './components/organisms/Calculator.vue';

@Component({
  components: {
    Calculator,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import 'assets/styles/_reset';
</style>
