<template>
  <div style="display: flex">
    <NavBar />
    <div class="container">
      <div class="market__feed">
        <div class="balance">
          Ваш баланс 4000
          <img class="star" src="../img/icons/star.jpg" alt="" />
        </div>
        <div class="cards">
          <div class="market__card">
            <img class="market__photo" src="../img/no-image.png" alt="" />
            <div class="under__photo">
              <div class="card__title">ABOBA</div>
              <div class="price">
                200 <img class="star" src="../img/icons/star.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="market__card">
            <img class="market__photo" src="../img/no-image.png" alt="" />
            <div class="under__photo">
              <div class="card__title">ABOBA</div>
              <div class="price">
                200 <img class="star" src="../img/icons/star.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="market__card">
            <img class="market__photo" src="../img/no-image.png" alt="" />
            <div class="under__photo">
              <div class="card__title">ABOBA</div>
              <div class="price">
                200 <img class="star" src="../img/icons/star.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="market__card">
            <img class="market__photo" src="../img/no-image.png" alt="" />
            <div class="under__photo">
              <div class="card__title">ABOBA</div>
              <div class="price">
                200 <img class="star" src="../img/icons/star.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="market__card">
            <img class="market__photo" src="../img/no-image.png" alt="" />
            <div class="under__photo">
              <div class="card__title">ABOBA</div>
              <div class="price">
                200 <img class="star" src="../img/icons/star.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="market__card">
            <img class="market__photo" src="../img/no-image.png" alt="" />
            <div class="under__photo">
              <div class="card__title">ABOBA</div>
              <div class="price">
                200 <img class="star" src="../img/icons/star.jpg" alt="" />
              </div>
            </div>
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
  margin: 0 auto;
  .star {
    width: 20px;
    height: 20px;
  }

  .market__feed {
    margin: 20px auto;
    height: 100%;
    max-width: 705px;
    background-color: #fff;
    padding: 15px 15px;
    border-radius: 20px;
    .balance {
      display: flex;
      align-items: center;
    }

    .cards {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 15px;
      gap: 15px;

      .market__card {
        width: 205px;
        height: 105px;
        border: 1px solid lightgray;
        margin-bottom: 30px;

        .market__photo {
          margin: 0 25%;
          height: 100px;
          width: 100px;
        }
        .under__photo {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
          .price {
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>
