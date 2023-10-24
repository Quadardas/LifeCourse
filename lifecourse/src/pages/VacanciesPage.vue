<template>
  <div style="display: flex">
    <NavBar />
    <div class="container">
      <div class="vacancies__feed">
        <div
          class="post"
          @click="openVac"
          v-for="vac in vacancies"
          :key="vac.id"
          :vac="vac"
        >
          <div class="company__info">
            <div class="company__logo">
              <img src="../img/no-image.png" alt="" />
            </div>
            <div class="company__name">{{ vac.companyName }}</div>
            <div class="peculiarities">{{ vac.peculiarities }}</div>
            <div class="favorite">
              <img src="../img/sticker (2).png" alt="" />
            </div>
          </div>
          <div class="vac__info">
            <div class="job-title">
              {{ vac.jobTitle }}
              <div class="job_title__description">{{ vac.jobDescription }}</div>
            </div>
            <div class="schedule">{{ vac.schedule }}</div>
            <div class="salary">{{ vac.salary }}</div>
            <div class="comment">{{ vac.comment }}</div>
            <div class="city">
              <img src="../img/sticker (1).png" alt="" />{{ vac.city }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
import { VAC } from "../constants/vacancies.const";
import { ref } from "vue";
import router from "../router";

const vacancies = ref(VAC);

function openVac() {
  router.push("/vac");
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  margin: 0 auto;
  .vacancies__feed {
    margin: 20px auto;
    height: 100%;
    background-color: lightgray;
    padding: 15px 15px;
    border-radius: 20px;

    .post {
      background-color: #fff;
      width: 450px;
      height: fit-content;
      border-radius: 20px;
      padding: 15px;
      margin-bottom: 15px;

      .company__info {
        display: flex;
        width: 100%;

        .company__logo {
          img {
            width: 40px;
            height: 40px;
          }
        }
        .favorite {
          img {
            width: 30px;
            height: 30px;
          }
        }
        .company__name {
          width: 80%;
          font-weight: 800;
        }
      }
      .job-title {
        font-weight: 700;
      }
      .schedule {
        font-weight: 700;
        margin: 10px 0;
      }
      .salary {
        font-weight: 700;
        margin: 10px 0;
      }
      .city {
        margin-top: 10px;
        display: flex;
        align-items: center;
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
}
</style>
