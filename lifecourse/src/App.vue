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
import router from "./router";
import Header from "./components/Header.vue";
function toMainPage() {
  router.push("/main");
}
// const router = useRouter();
// onBeforeMount(() => {
//   router.push("/login");
// });
</script>
<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-auto-flow: column;
  height: 100%;
}
</style>
