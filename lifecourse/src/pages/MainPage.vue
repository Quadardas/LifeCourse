<template>
  <div>
    <section>
      <div class="about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quaerat
        repellat exercitationem? Doloremque, deleniti soluta tempore nam a ut
        facilis numquam ea, eos, quam laborum neque sint. Reprehenderit hic
        vitae eveniet culpa, quasi delectus numquam facere illum nam quos,
        tenetur quaerat sint beatae similique harum. Aperiam minus eos impedit
        vitae!
      </div>
      <div class="nav">
        <div class="transition">
          <div class="uni__btn btn" @click="toLoginPage">ВУЗам</div>
          <div class="stud__btn btn" @click="toLoginPage">Студентам</div>
          <div class="comp__btn btn" @click="toLoginPage">Предприятиям</div>
        </div>
      </div>
      <h3>Лучшие студенты месяца</h3>
      <div class="rating__list">
        <div class="user__card">
          <div class="user__avatar">
            <img src="../img/no-avatar.png" alt="" />
          </div>
          <div class="user__name">Lorem, ipsum dolor.</div>
          <div class="user__uni">Lorem.</div>
        </div>
        <div class="user__card">
          <div class="user__avatar">
            <img src="../img/no-avatar.png" alt="" />
          </div>
          <div class="user__name">Lorem, ipsum dolor.</div>
          <div class="user__uni">Lorem.</div>
        </div>
        <div class="user__card">
          <div class="user__avatar">
            <img src="../img/no-avatar.png" alt="" />
          </div>
          <div class="user__name">Lorem, ipsum dolor.</div>
          <div class="user__uni">Lorem.</div>
        </div>
        <div class="user__card">
          <div class="user__avatar">
            <img src="../img/no-avatar.png" alt="" />
          </div>
          <div class="user__name">Lorem, ipsum dolor.</div>
          <div class="user__uni">Lorem.</div>
        </div>
        <div class="user__card">
          <div class="user__avatar">
            <img src="../img/no-avatar.png" alt="" />
          </div>
          <div class="user__name">Lorem, ipsum dolor.</div>
          <div class="user__uni">Lorem.</div>
        </div>
      </div>
    </section>
    <footer>
      <div class="footer__columns">
        <div class="footer__logo">
          <img src="../img/logo.png" alt="" />
        </div>
        <div class="footer__polit">Политика конфиденциальности</div>
        <div class="footer__info">
          <ul>
            <li>О нас</li>
            <li>Реклама</li>
            <li>Партнерам</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import router from "../router";
function toLoginPage() {
  router.push("/login");
}
</script>
<style lang="scss" scoped>
.about {
  height: fit-content;
  width: 70%;
  margin: 10% auto 50px;
}
.underfooter {
  position: absolute;
  display: flex;
  justify-content: end;
  margin-right: 50px;
  .city__select {
    border: none;
    background: transparent;
  }
  .login {
    color: #333;
  }
}
.transition {
  display: flex;
  justify-content: space-evenly;

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 130px;
    height: 80px;
    background-color: white;
    &:hover {
      cursor: pointer;
    }
  }
}
.rating__list {
  display: flex;
  justify-content: space-around;
  margin: 30px;
  .user__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    border: 1px solid lightgrey;
    .user__avatar {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
}
h3 {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: white;
  .footer__columns {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .footer__info {
      li {
        list-style: none;
      }
    }
  }
  .footer__logo {
    img {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
