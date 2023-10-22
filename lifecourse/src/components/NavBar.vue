<template>
  <div class="navigation">
    <div class="nav__box">
      <nav class="nav__items">
        <a href="/feed">лента</a>
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
</template>
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
</style>
