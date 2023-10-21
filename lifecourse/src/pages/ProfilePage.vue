<template>
  <div class="container">
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
            <div class="user__name">**Имя пользователя**</div>
            <div class="user__surname">**Фамилия пользователя**</div>
            <div class="educ__info">
              <div class="user__facult">**Факультет**</div>
              <div class="user__cours">**Курс**</div>
              <div class="user__group">**группа**</div>
            </div>
          </div>
        </div>
        <div class="about__yourself">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          consequatur eos, quidem obcaecati harum libero exercitationem saepe
          optio beatae hic.
        </div>
        <div
          class="profile__posts"
          v-for="post in posts"
          :key="post.id"
          :post="post"
        >
          <div class="profile__post--one">
            <div>
              <img :src="post.photo.url" alt="" />
            </div>
            <div class="post__description">{{ post.body }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import type { IPost } from "../components/models/Post.model";
const posts = ref();
const photos = ref();
const props = defineProps<{
  post: IPost;
}>();
onBeforeMount(async () => {
  await GetPosts(props);
});
async function GetPosts(event) {
  posts.value = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=4`
  ).then((res) => res.json());
  // console.log(posts.value);
  photos.value = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=1&_limit=4`
  ).then((res) => res.json());
  console.log(photos.value);
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
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
    margin: 0 auto;
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
        width: 400px;
        height: 400px;

        img {
          width: 350px;
          height: 350px;
        }
      }
      .post__footer {
        margin-top: 5px;
        margin-left: 20px;
      }
      .profile__posts {
        display: flex;
        flex-direction: column;
        align-items: center;
        .profile__post--one {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
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
}
</style>
