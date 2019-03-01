<template>
  <div id="app">
    <Route />
  </div>
</template>

<script lang="ts">
// import: node_modules
import { Component, Vue } from 'vue-property-decorator';

// import: route component
import Route from './components/pages/Route.vue';

@Component({
  components: {
    Route,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
