<template>
  <div class="login-page">
    <div class="logo">
      <img src="../img//ba57fd2e-60b3-4b7f-82a7-52f162613632.png" alt="" />
    </div>
    <div class="login__form">
      <form class="login" @submit.prevent="login">
        <h1>Вход <br />LifeCourse</h1>
        <div class="log__container">
          <label>Логин</label>
          <input required type="login" placeholder="" />
        </div>
        <div class="pass__container">
          <label>Пароль</label>
          <input required placeholder="" />
        </div>
        <button type="submit">Войти</button>
      </form>
      <div class="reg__btn">Зарегистрироваться</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";

import { useRouter } from "vue-router";

const userLogin = reactive({
  login: "",
  password: "",
});
</script>

<style lang="scss" scoped>
.login-page {
  // width: 360px;
  padding: 8% 0 0;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .reg__btn {
    display: flex;
    justify-content: center;
    width: 360px;
    background-color: #fff;
    padding: 30px 0;
    border-radius: 20px;
    font-size: 23px;
    color: #88a246;
  }

  .logo {
    position: relative;
    width: 300px;
    height: 453px;
    margin-right: 25px;
    background-color: #ffffff;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    img {
      width: 250px;
      height: 250px;
    }
  }
}

form {
  border-radius: 20px;
  padding: 10px;
  min-height: 340px;
}

.log__container {
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;

  label {
    margin-right: 10px;
  }
}
.pass__container {
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  label {
    margin-right: 3px;
  }
}

.login {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 15px;
  padding: 10px;
  text-align: center;
  // box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

  h1 {
    line-height: 1;
    margin: 20px 0;
    color: #fbb218;
  }

  input {
    outline: 0;
    border-radius: 10px;
    background: #f2f2f2;
    width: 100%;
    border: 3px solid;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    max-width: 200px;
  }
  button {
    margin-top: 30px;
    text-transform: uppercase;
    outline: 0;
    background: #fbb218;
    width: 80%;
    border: 0;
    border-radius: 15px;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
}
</style>
