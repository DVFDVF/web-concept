<template>
  <Splide :options="options" aria-label="My Favorite Images">
    <SplideSlide>
      <div class="carouse-image">
        <img src="@/assets/diagram/1 – 1.png" />
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="carouse-image">
        <img src="@/assets/diagram/1 – 1.png" />
      </div>
    </SplideSlide>
  </Splide>
</template>
<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';
const options = {
  rewind: true,
  gap: '1rem',
  arrows: false,
  loop: true,
  autoplay: true,
  interval: 3000,
  type: 'loop',
};
</script>
<style lang="less" scoped>
.carouse-image {
  width: 100%;
  height: calc(100% - 30px);
  margin-bottom: 30px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
