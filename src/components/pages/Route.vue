<template>
  <div class="route">
    <div class="main">
      <router-view></router-view>
    </div>
    <Sidebar />
  </div>
</template>

<script lang="ts">
// import: node_modules
import { Component, Vue } from 'vue-property-decorator';

// import: organisms component
import Sidebar from '../organisms/Sidebar/index.vue';

@Component({
  components: {
    Sidebar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '../../assets/styles/_reset';
</style>

<style lang="scss" scoped>
.route {
  height: 100vh;
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-areas: 'sidebar main';
}

.main {
  grid-area: main;
  padding: 30px;
}
</style>
