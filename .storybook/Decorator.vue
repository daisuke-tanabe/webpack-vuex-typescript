<template>
  <div class="decorator">
    <slot name="story"></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Decorator',
};
</script>

<style lang="scss">
@import '../src/assets/styles/_reset';
</style>
