<template>
  <div class="sidebar">
    <ul class="list">
      <li class="list__item" v-for="item in item">
        <router-link class="list__link" :to="{ path: item.path }">{{ item.label }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// import: node_modules
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {
  private item: Array<{ [key: string]: string }> = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Calculator',
      path: '/calculator',
    },
  ];
}
</script>

<style lang="scss">
.sidebar {
  grid-area: sidebar;
  box-shadow: 3px 0 0 rgba(0, 0, 0, 0.2);
}

.list {
}

.list__item {
  margin: 10px 0 0;
}

.list__link {
  font-size: 14px;
  display: block;
  padding: 20px 30px;
  text-decoration: none;
}
</style>
