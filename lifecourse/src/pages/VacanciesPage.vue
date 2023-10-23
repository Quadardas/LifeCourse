<template>
  <div class="container">
    <NavBar />
    <div class="vacancies__feed">
      <div class="post">
        <div class="company__info">
          <div class="company__logo">
            <img src="../img/no-avatar.png" alt="" />
          </div>
          <div class="company__name">**Название Компании**</div>
          <div class="peculiarities"></div>
        </div>
        <div class="vac__info">
          <div class="job-title">**Должность**</div>
          <div class="schedule">**График**</div>
          <div class="salary">99999 Руб</div>
          <div class="comment">**Комментарий от работодателя**</div>
          <div class="city">**Город**</div>
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
    margin: 0 auto;
    height: 100%;

    .post {
      background-color: #fff;
      width: 500px;
      height: fit-content;
      border-radius: 20px;
      padding: 15px;
      margin-top: 20px;
    }
  }
}
</style>
