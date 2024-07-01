<template>
  <div class="trading">
    <div class="trading-content row-center" v-for="item in nft" :key="item.key">
      <div class="trading-title">{{ item.title }}</div>
      <img class="trading-icon" src="@/assets/home/home-next.png" />
    </div>
  </div>
</template>
<script setup lang="ts">
const nft = [
  {
    key: 0,
    title: 'HOT',
  },
  {
    key: 1,
    title: 'ART',
  },
  {
    key: 2,
    title: 'PEP',
  },
  {
    key: 3,
    title: 'DDC',
  },
  {
    key: 4,
    title: 'UMAMA',
  },
];
</script>
<style scoped>
.trading {
  width: 100%;
}
.trading-content {
  border-radius: 8px;
  justify-content: space-between;
  margin: 10px;
  padding: 20px;
  background: rgb(28, 15, 46);
  border: 1px solid rgb(62, 49, 92);
}
.trading-title {
  font-weight: 700;
  font-size: 15px;
}
.trading-icon {
  width: 25px;
  height: 25px;
}
</style>
