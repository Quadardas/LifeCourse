<template>
  <div style="display: flex">
    <NavBar />
    <div class="container">
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
            <div class="star__count">
              <img src="../img/icons/star.jpg" alt="" />
              <div>20</div>
            </div>
          </div>
          <div class="about__yourself">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            consequatur eos, quidem obcaecati harum libero exercitationem saepe
            optio beatae hic.
          </div>
          <div class="achievements">
            <ul>
              <li>
                <div class="ach__lvl">1 уровень</div>
                <img src="../img/icons/nauch.jpg" alt="" />
                <div class="stars">
                  <img class="ach__stars" src="../img/icons/star.jpg" alt="" />
                  <div>10</div>
                </div>
              </li>
              <li>
                <div class="ach__lvl">1 уровень</div>
                <img src="../img/icons/tvorch.jpg" alt="" />
                <div class="stars">
                  <img class="ach__stars" src="../img/icons/star.jpg" alt="" />
                  <div>10</div>
                </div>
              </li>
              <li>
                <div class="ach__lvl">1 уровень</div>
                <img src="../img/icons/sport.jpg" alt="" />
                <div class="stars">
                  <img class="ach__stars" src="../img/icons/star.jpg" alt="" />
                  <div>10</div>
                </div>
              </li>
              <li>
                <div class="ach__lvl">1 уровень</div>
                <img src="../img/icons/volont.jpg" alt="" />
                <div class="stars">
                  <img class="ach__stars" src="../img/icons/star.jpg" alt="" />
                  <div>10</div>
                </div>
              </li>
            </ul>
          </div>
          <div
            class="profile__posts"
            v-for="post in posts"
            :key="post.id"
            :post="post"
          >
            <div class="profile__post--one">
              <div class="post__image">
                <img src="../img/no-image.png" alt="" />
              </div>
              <div class="post__description">{{ post.body }}</div>
              <div class="post__footer">
                <div class="post__tag">#спортивные достижения</div>
                <div class="post__date">01.01.2023</div>
              </div>
            </div>
          </div>
        </div>
        <div class="buttons">
          <div class="follow__btn">
            <img src="../img/icons/heart.svg" alt="" />
          </div>
          <div class="message__btn">
            <img src="../img/icons/comment-dots.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import type { IPost } from "../components/models/Post.model";
import NavBar from "@/components/NavBar.vue";
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
  margin: 0 auto;

  .profile__feed {
    display: flex;
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
        .star__count {
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            height: 50px;
            width: 50px;
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
        align-self: flex-end;
        margin-top: 5px;
        margin-left: 20px;
      }
      .profile__posts {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        border-radius: 20px;
        padding: 10px;
        box-shadow: 1px 2px 3px 1px lightgray;
        .profile__post--one {
          display: flex;
          flex-direction: column;
          align-items: center;
          .post__footer {
            .post__date {
              font-size: 12px;
            }
          }
        }
      }
      .about__yourself {
        background-color: rgb(231, 229, 229);
        width: 100%;
        padding: 10px;
        border-radius: 30px;
        color: black;
        margin: 10px auto;
      }

      .achievements {
        ul {
          display: flex;
          justify-content: space-evenly;
          padding-left: 0;
          li {
            list-style: none;
            img {
              width: 80px;
              height: 80px;
            }
            .stars {
              display: flex;
              align-items: center;
              .ach__stars {
                width: 30px;
                height: 30px;
              }
            }
          }
        }
      }
    }
    .buttons {
      margin: 30px 20px;
      .follow__btn {
        width: 50px;
        height: 50px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-bottom: 10px;
      }
      .message__btn {
        width: 50px;
        height: 50px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>
