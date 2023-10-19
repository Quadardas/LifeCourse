<template>
  <div class="navigation">
    <div class="nav__box">
      <nav class="nav__items">
        <a href="/main">главная</a>
        <a href="/profile">профиль</a>
        <a href="">рейтинг</a>
        <a href="">чаты</a>
        <a href="">вакансии</a>
      </nav>
    </div>
    <div class="nav__box">
      <nav class="nav__items">
        <a href="">поддержка</a>
        <a href="">маркет</a>
      </nav>
    </div>
  </div>
  <div class="post__feed">
    <div class="post">
      <div class="user__info">
        <div class="user__avatar">
          <img src="../img/no-avatar.png" alt="" />
        </div>
        <div class="user__info--text">
          <div class="user__name">Имя пользователя</div>
          <div class="user__group">группа</div>
        </div>
      </div>
      <div class="post__image">
        <img src="../img/no-image.png" alt="" />
      </div>
      <div class="post__footer">
        <div class="about__post">О публикации</div>
        <div class="post__tag">#раздел</div>
      </div>
    </div>
    <div class="post">
      <div class="user__info">
        <div class="user__avatar">
          <img src="../img/no-avatar.png" alt="" />
        </div>
        <div class="user__info--text">
          <div class="user__name">Имя пользователя</div>
          <div class="user__group">группа</div>
        </div>
      </div>
      <div class="post__image">
        <img src="../img/no-image.png" alt="" />
      </div>
      <div class="post__footer">
        <div class="about__post">О публикации</div>
        <div class="post__tag">#раздел</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>
<style lang="scss" scoped>
.nav__box {
  background-color: #fff;
  width: 100%;
  max-width: 190px;
  margin: 20px 20px;
  border-radius: 20px;
  .nav__items {
    display: flex;
    flex-direction: column;
    a {
      margin: 18px;
      text-decoration: none;
      color: black;
      font-size: 18px;
    }
  }
}

.post__feed {
  .post {
    background-color: #fff;
    width: 500px;
    height: 500px;
    border-radius: 20px;
    padding: 15px;
    margin-top: 20px;

    .user__info {
      display: flex;
      width: 200px;
      .user__avatar {
        width: 50px;
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
    .post__image {
      width: 350px;
      height: 350px;

      img {
        width: 350px;
        height: 350px;
      }
    }
    .post__footer {
      margin-top: 5px;
      margin-left: 20px;
    }
  }
}
</style>
