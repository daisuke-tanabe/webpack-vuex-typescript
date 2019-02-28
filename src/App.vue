<template>
  <div id="app">
    <Top />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Top from './components/pages/Top/index.vue';

@Component({
  components: {
    Top,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import 'assets/styles/_reset';
</style>
