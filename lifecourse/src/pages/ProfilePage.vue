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
  <div class="profile__feed">
    <div class="profile">
      <div class="user__info">
        <div class="user__avatar">
          <img src="../img/no-avatar.png" alt="" />
        </div>
        <div class="user__info--text">
          <div class="user__name">Имя пользователя</div>
          <div class="user__surname">Фамилия пользователя</div>
          <div class="educ__info">
            <div class="user__facult">Факультет</div>
            <div class="user__cours">Курс</div>
            <div class="user__group">группа</div>
          </div>
        </div>
      </div>
      <div class="about__yourself">*информация о себе*</div>
      <div class="profile__post">
        <div class="post__image">
          <img src="../img/no-image.png" alt="" />
        </div>
        <div class="post__image">
          <img src="../img/no-image.png" alt="" />
        </div>
        <div class="post__image">
          <img src="../img/no-image.png" alt="" />
        </div>
        <div class="post__image">
          <img src="../img/no-image.png" alt="" />
        </div>
        <div class="post__image">
          <img src="../img/no-image.png" alt="" />
        </div>
        <div class="post__image">
          <img src="../img/no-image.png" alt="" />
        </div>
        <div class="post__image">
          <img src="../img/no-image.png" alt="" />
        </div>
        <div class="post__image">
          <img src="../img/no-image.png" alt="" />
        </div>
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
  margin-right: 100px;
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

.profile__feed {
  .profile {
    background-color: #fff;
    width: 630px;
    height: fit-content;
    border-radius: 20px;
    padding: 15px;
    margin-top: 20px;

    .user__info {
      display: flex;
      width: 100%;
      font-size: 20px;
      .user__avatar {
        width: 70px;
        margin-right: 15px;
        img {
          width: 70px;
          height: 70px;
        }
      }
      .user__info--text {
        width: 100%;

        .educ__info {
          margin-top: 5px;
          line-height: 1;
          font-size: 14px;
        }
      }
    }
    .post__image {
      width: 150px;
      height: 150px;

      img {
        width: 150px;
        height: 150px;
      }
    }
    .post__footer {
      margin-top: 5px;
      margin-left: 20px;
    }
    .profile__post {
      display: flex;
      flex-wrap: wrap;
    }
    .about__yourself {
      background-color: rgb(189, 189, 189);
      width: 100%;
      padding: 10px;
      border-radius: 30px;
      color: black;
      margin: 10px auto;
    }
  }
}
</style>
