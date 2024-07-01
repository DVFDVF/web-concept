<template>
  <div class="how-to-stake center" v-for="item in ownData" :key="item.key">
    <div class="item-text">{{ item.text }}</div>
    <img class="item-img" src="@/assets/home/dropDown.png" />
  </div>
</template>
<script setup lang="ts">
const ownData = [
  {
    key: 0,
    text: 'How to stake USDC in Wallet?',
  },
  {
    key: 1,
    text: 'How to invite friends to Aave?',
  },
  {
    key: 2,
    text: 'What ’s Aave?',
  },
  {
    key: 3,
    text: 'How does Aave work?',
  },
  {
    key: 4,
    text: 'Does Aave have enough security?',
  },
  {
    key: 5,
    text: 'Aave’s history of development',
  },
  {
    key: 6,
    text: 'Information for Participants',
  },
];
</script>
<style scoped>
.how-to-stake {
  width: 100%;
  justify-content: space-between;
  margin: 10px;
}
.item-text {
  font-size: 12px;
  background: linear-gradient(to right, #87b0d6, #ffffff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  padding-left: 20px;
}
.item-img {
  width: 9px;
  height: 6.25px;
  padding-right: 20px;
}
</style>
