<template>
  <div class="trading">
    <div class="trading-content col-center" v-for="item in nft" :key="item.key">
      <img class="trading-icon" :src="item.icon" />
      <div class="trading-title">{{ item.title }}</div>
      <div class="trading-text">{{ item.number }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import chart from '@/assets/home/chart.png';
import amount from '@/assets/home/amount.png';
import nftPng from '@/assets/home/nft.png';
import profit from '@/assets/home/profit.png';
const nft = [
  {
    key: 0,
    icon: chart,
    title: 'Trading Volume',
    number: '349788',
  },
  {
    key: 1,
    icon: amount,
    title: 'Transaction Amount',
    number: '5993',
  },
  {
    key: 2,
    icon: nftPng,
    title: 'Nft quantity',
    number: '114701',
  },
  {
    key: 3,
    icon: profit,
    title: 'Profit Users',
    number: '25223',
  },
];
</script>
<style scoped>
.trading {
  width: 100%;
}
.trading-content {
  margin: 20px;
  border: 2px solid #2c3e50;
  border-bottom: none;
  border-radius: 11px;
  margin-top: 60px;
  position: relative;
}
.trading-content::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 60px;
  opacity: 0.05;
  border-radius: 25px;
  background: linear-gradient(180deg, #62a9ea 0%, #c941ff 100%);
}
.trading-content::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  border-radius: 25px;
  background: linear-gradient(180deg, #62a9ea 0%, #c941ff 100%);
}
.trading-icon {
  width: 60px;
  height: 60px;
  margin-top: -30px;
}
.trading-title {
  color: white;
  margin-top: 20px;
  font-weight: 600;
}
.trading-text {
  color: white;
  font-size: 25px;
  margin: 10px 0;
  font-weight: 800;
}
</style>
