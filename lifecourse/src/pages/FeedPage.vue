<template>
  <div class="container">
    <NavBar />
    <div class="post__feed">
      <div class="post" v-for="post in posts" :key="post.id" :post="post">
        <div class="user__info">
          <div class="user__avatar">
            <img src="../img/no-avatar.png" alt="" />
          </div>
          <div class="user__info--text">
            <div class="user__name" @click="toProfile">*Имя пользователя*</div>

            <div class="user__group" @click="onGroupClick">группа</div>
            <modal
              :show="showGroup"
              :hideOkButton="true"
              :modalComponent="GroupList"
              @close="onClose"
              ><template #header>
                <h3>Список группы **Название группы**</h3>
              </template></modal
            >
          </div>
          <div class="user__stars">
            10
            <img src="../img/icons/star.jpg" alt="" />
          </div>
        </div>
        <div class="post__image">
          <img src="../img/no-image.png" alt="" />
        </div>
        <div class="about__post">
          {{ post.body }}
        </div>
        <div class="post__footer">
          <div class="post__tag">#спортивные достижения</div>
          <div class="date__post">01.01.2023</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import modal from "../components/modals/modal.vue";
import GroupList from "../components/modals/GroupList.vue";
import { useRouter } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import { onBeforeMount, ref } from "vue";
import type { IPost } from "../components/models/Post.model";
const showGroup = ref(false);
const router = useRouter();
function toProfile() {
  router.push("/profile");
}
function onGroupClick() {
  showGroup.value = true;
  console.log("aboba");
}
function onClose() {
  showGroup.value = false;
}

const posts = ref();

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
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;

  .post__feed {
    margin: 0 auto;
    .post {
      background-color: #fff;
      width: 500px;
      height: fit-content;
      border-radius: 20px;
      padding: 15px;
      margin-top: 20px;

      .user__info {
        display: flex;
        width: 100%;
        .user__avatar {
          width: 50px;
          img {
            width: 50px;
            height: 50px;
          }
        }
        .user__info--text {
          width: 80%;
          .user__name {
            width: fit-content;
          }
          &:hover {
            cursor: pointer;
          }
          .user__group {
            width: fit-content;
          }
          &:hover {
            cursor: pointer;
          }
        }

        .user__stars {
          display: flex;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
      .post__image {
        margin: 0 auto;
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
        .date__post {
        }
      }
    }
  }
}
</style>
