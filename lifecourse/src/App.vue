<template>
  <div>
    <Header />

    <div class="wrapper">
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import Header from "./components/Header.vue";
const router = useRouter();

function toMainPage() {
  router.push("/main");
}

// onBeforeMount(() => {
//   router.push("/main");
// });
</script>
<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-auto-flow: column;
  height: 100%;
}
</style>
