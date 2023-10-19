<template>
  <header>Life <img src="../src/img/logo.png" alt="" /> Course</header>
  <div class="wrapper">
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  max-height: 100px;
  background-color: #fff;
  font-size: 20px;
  img {
    width: 50px;
    height: 50px;
  }
}

.wrapper {
  display: grid;
  grid-auto-flow: column;
  height: 100%;
}
</style>
