<template>
  <div class="navigation">
    <div class="nav__box">
      <nav class="nav__items">
        <a href="/feed">лента</a>
        <a href="/profile">профиль</a>
        <a href="/rating">рейтинг</a>
        <a href="/chat">чаты</a>
        <a href="/vacancies">вакансии</a>
      </nav>
    </div>
    <div class="nav__box">
      <nav class="nav__items">
        <a href="/support">поддержка</a>
        <a href="/market">маркет</a>
      </nav>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.navigation {
  position: relative;
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
}
</style>
