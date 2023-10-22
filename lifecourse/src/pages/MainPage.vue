<template>
  <section>
    <div class="about">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quaerat
      repellat exercitationem? Doloremque, deleniti soluta tempore nam a ut
      facilis numquam ea, eos, quam laborum neque sint. Reprehenderit hic vitae
      eveniet culpa, quasi delectus numquam facere illum nam quos, tenetur
      quaerat sint beatae similique harum. Aperiam minus eos impedit vitae!
    </div>
    <div class="nav">
      <div class="transition">
        <div class="uni__btn btn" @click="toLoginPage">ВУЗам</div>
        <div class="stud__btn btn" @click="toLoginPage">Студентам</div>
        <div class="comp__btn btn" @click="toLoginPage">Предприятиям</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import router from "../router";
function toLoginPage() {
  router.push("/login");
}
</script>
<style lang="scss" scoped>
.about {
  height: 40%;
  width: 70%;
  margin: 15% auto 50px;
}
.underfooter {
  position: absolute;
  display: flex;
  justify-content: end;
  margin-right: 50px;
  .city__select {
    border: none;
    background: transparent;
  }
  .login {
    color: #333;
  }
}
.transition {
  display: flex;
  justify-content: space-evenly;

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 130px;
    height: 80px;
    background-color: white;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
