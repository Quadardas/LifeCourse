<template>
  <div style="display: flex">
    <NavBar />
    <div class="container">
      <div class="vacancies__feed">
        <div
          class="post"
          v-for="vac in vacancies.slice(0, 1)"
          :key="vac.id"
          :vac="vac"
        >
          <div class="vac__info">
            <div class="job-title">
              {{ vac.jobTitle }}
              <div class="job_title__description">
                Обязанности: {{ vac.jobDescription }}
              </div>
            </div>
            <div class="btns">
              <button class="response__btn">Откликнуться</button>
              <div class="favorite">
                <img src="../img/sticker (2).png" alt="" />
              </div>
            </div>
            <div class="schedule">График {{ vac.schedule }}</div>
            <div class="salary">{{ vac.salary }}</div>
            <div class="comment">Описание: {{ vac.comment }}</div>
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

const vacancies = ref(VAC);
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  margin: 0 auto;
  .vacancies__feed {
    margin: 20px auto;
    // height: 100%;
    background-color: lightgray;
    padding: 15px 15px;
    border-radius: 20px;

    .post {
      background-color: #fff;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      padding: 15px;
      //   margin-bottom: 15px;
      display: flex;
      flex-direction: column;

      .vac__info {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px;
        .btns {
          display: flex;
          .response__btn {
            background-color: #87b23c;
            border: none;
            border-radius: 10px;
          }
          .favorite {
            margin-left: 30px;
            img {
              width: 30px;
              height: 30px;
            }
          }
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
