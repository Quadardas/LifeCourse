<template>
  <div style="display: flex">
    <NavBar />
    <div class="container">
      <div class="rating__feed">
        <h1>Список лучших студентов</h1>
        <div class="user" v-for="user in users" :key="user.id" :user="user">
          <div class="user__avatar">
            <img src="../img/no-avatar.png" alt="" />
          </div>
          <div class="user__name">{{ user.name }}</div>
          <div class="user__city">{{ user.city }}</div>
          <div class="user__uni">{{ user.univercity }}</div>
          <div class="user__rating">{{ user.rating }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Vue, { onBeforeMount, ref } from "vue";
import NavBar from "@/components/NavBar.vue";
import type { IUser } from "../components/models/User.model";
import { USER } from "../constants/user.const";
const users = ref(USER);
users.value.sort((a, b) => b.rating - a.rating);
// const props = defineProps<{
//   user: IUser;
// }>();
// onBeforeMount(async () => {
//   await GetUsers(props);
// });
// async function GetUsers(event) {
//   users.value = await fetch(
//     `https://jsonplaceholder.typicode.com/users?_limit=10`
//   ).then((res) => res.json());
//   console.log(users.value);
// }
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  margin: 0 auto;
  .rating__feed {
    display: flex;
    width: fit-content;
    flex-direction: column;
    background-color: #fff;
    margin: 20px auto;
    border-radius: 20px;
    padding: 30px;
    .user {
      padding: 10px;
      margin-bottom: 10px;
      box-shadow: 1px 2px 3px 1px lightgray;
      display: flex;
      flex-direction: column;
      align-items: center;
      .user__avatar {
        width: 50px;
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
</style>
