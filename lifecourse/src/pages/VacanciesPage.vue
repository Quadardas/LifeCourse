<template>
  <div class="container">
    <NavBar />
    <div class="vacancies__feed">
      <div class="post">
        <div class="company__info">
          <div class="company__logo">
            <img src="../img/no-image.png" alt="" />
          </div>
          <div class="company__name">**Название Компании**</div>
          <div class="peculiarities"></div>
          <div class="favorite">
            <img src="../img/sticker (2).png" alt="" />
          </div>
        </div>
        <div class="vac__info">
          <div class="job-title">
            **Должность**
            <div class="job_title__description">**описание должности**</div>
          </div>
          <div class="schedule">**График**</div>
          <div class="salary">99999 Руб</div>
          <div class="comment">**Комментарий от работодателя**</div>
          <div class="city">
            <img src="../img/sticker (1).png" alt="" />**Город**
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
</script>
<style lang="scss" scoped>
.container {
  display: flex;
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
        justify-content: space-around;
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
