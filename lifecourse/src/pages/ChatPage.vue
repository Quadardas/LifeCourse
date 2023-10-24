<template>
  <div style="display: flex">
    <NavBar />
    <div class="container">
      <div class="chat__feed">
        <div class="chat">
          <img class="chat_avatar" src="../img/no-avatar.png" alt="" />
          <div class="chat__container">
            <div class="name">Lorem, ipsum.</div>
            <div class="message">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              blanditiis?
            </div>
          </div>
        </div>
        <div class="chat">
          <img class="chat_avatar" src="../img/no-avatar.png" alt="" />
          <div class="chat__container">
            <div class="name">Lorem, ipsum.</div>
            <div class="message">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              blanditiis?
            </div>
          </div>
        </div>
        <div class="chat">
          <img class="chat_avatar" src="../img/no-avatar.png" alt="" />
          <div class="chat__container">
            <div class="name">Lorem, ipsum.</div>
            <div class="message">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              blanditiis?
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
  .chat__feed {
    margin: 20px auto;
    height: 100%;
    max-width: 800px;
    background-color: #fff;
    padding: 20px 0;
    border-radius: 20px;

    .chat {
      display: flex;
      align-items: center;
      .chat_avatar {
        height: 40px;
        width: 40px;
      }
      .chat__container {
        border-bottom: 1px solid black;
        padding: 8px;
        .name {
          font-weight: 600;
        }
        .message {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
