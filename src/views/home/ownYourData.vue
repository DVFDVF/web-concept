<template>
  <div class="own-data" v-for="item in ownData" :key="item.key">
    <div>
      <div class="list-data">
        <div class="list">0{{ item.key + 1 }}</div>
        <div class="own-list"></div>
      </div>
    </div>
    <div class="right-list">
      <div class="list-item">
        <img :src="item.icon" />
        <div class="title">{{ item.title }}</div>
      </div>
      <div class="text">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import flexible from '@/assets/home/1.png';
import safety from '@/assets/home/2.png';
import fees from '@/assets/home/3.png';
const ownData = [
  {
    key: 0,
    icon: flexible,
    title: 'Flexibles',
    text: 'Interest payments are made every 4 hours, 6 times a day.',
  },
  {
    key: 1,
    icon: safety,
    title: 'Asset safety',
    text: 'Approximately 80% of USDC reserve assets are short-term U.S. Treasuries with maturities of 3 months or less.',
  },
  {
    key: 2,
    icon: fees,
    title: 'Fees',
    text: 'No additional fees to withdraw interest.s',
  },
];
</script>
<style scoped>
.list {
  color: rgb(59, 48, 78);
  font-size: 40px;
  font-weight: 900;
  margin-right: 10px;
}
.list-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -60px;
}
.own-data {
  color: white;
  background: linear-gradient(150deg, #171433 0%, rgba(23, 20, 51, 0) 100%);
  border: 2px solid rgb(49, 38, 87);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  margin: 10px;
  border-radius: 11px;
  width: 85%;
}
.right-list {
  background: #171433;
  margin-top: 60px;
}
.list-item {
  display: flex;
  flex-direction: row;
}
.title {
  margin-left: 10px;
}
.text {
  font-size: 11px;
  margin-top: 10px;
  text-align: left;
}
.list-item img {
  width: 20px;
  height: 20px;
}
</style>
