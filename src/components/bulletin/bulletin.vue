<template>
  <div class="container">
    <img class="avatar-img" src="@/assets/bulletin/bulletin.jpg" />
    <div class="content col-center">
      <div class="title">System maintenance announcement</div>
      <div class="text">Upgrade time from March 5th to March 8th</div>
      <div class="tips">Thank you for your understanding and support</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {};
  },
  methods: {},
  components: {},
});
</script>

<style lang="less" scoped>
.container {
  position: relative;
  width: 500px;
  height: auto;
  color: black;
}
.content {
  position: absolute;
  top: 60%;
  height: 40%;
  width: 100%;
}
.avatar-img {
  width: 100%;
  height: 100%;
}
.title {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}
.text {
  background: rgb(253, 220, 224);
  border-radius: 25px;
  padding: 15px;
  width: 80%;
  text-align: center;
  margin: 35px 0;
  font-size: 15px;
}
.tips {
  color: rgba(128, 128, 128, 0.445);
}
@media only screen and (max-width: 767px) {
  .container {
    width: calc(100% - 20px);
    margin-left: 10px;
  }
  .avatar-img {
    width: 100%;
    height: 100%;
  }
  .title {
    font-size: 15px;
  }
  .text {
    font-size: 12px;
    padding: 15px;
    width: calc(100% - 30px);
  }
  .tips {
    font-size: 11px;
  }
}
</style>
