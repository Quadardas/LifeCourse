<template>
  <div class="header">
    <div class="logo">
      Life <img src="../img/logo.png" @click="toMainPage" /> Course
    </div>
    <a href="/feed">лента новостей</a>
    <div class="right__menu">
      <select class="city__select">
        <option value="">Оренбург</option>
        <option value="">Москва</option>
        <option value="">Санкт-Петербург</option>
        <option value="">Уфа</option>
      </select>
      <div class="login" @click="toLoginPage">Вход/Регистрация</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import router from "../router";
function toLoginPage() {
  router.push("/login");
}
function toMainPage() {
  router.push("/main");
}
</script>
<style lang="scss" scoped>
.header {
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
  .logo {
    margin-left: 15px;
    display: flex;
    align-items: center;
  }
  .right__menu {
    display: flex;
    margin: 0 10px 0 auto;
    font-size: 16px;
    .city__select {
      border: none;
    }
  }
  .login {
    margin-left: 5px;

    &:hover {
      cursor: pointer;
    }
  }
  a {
    text-decoration: none;
    color: #333;
    margin-left: 200px;
  }
}
</style>
