<template>
  <div class="total col-center">
    <div
      class="total-trading col-center"
      v-for="(item, index) in totalTrading"
      :key="item.key"
    >
      <div class="title">{{ item.title }}</div>
      <div :class="`count count-${index + 1}`">{{ item.text }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
const totalTrading = [
  {
    key: 0,
    title: "Total Trading Volume",
    text: "$810,612,602",
    background: "linear-gradient(to right, #ffeb79, #fe9f64)",
  },
  {
    key: 1,
    title: "Open Interest",
    text: "$488,263,220",
  },
  {
    key: 2,
    title: "Total Users",
    text: "95,888",
  },
];
</script>
<style scoped>
.total {
  margin: 20px;
}
.title {
  font-size: 16px;
  color: white;
  font-weight: 500;
}
.count-1 {
  background: linear-gradient(to right, #ffeb79, #fe9f64);
}
.count-2 {
  background: linear-gradient(141deg, #62a9ea 0%, #415eff 100%);
}
.count-3 {
  background: linear-gradient(136deg, #62a9ea 0%, #c941ff 100%);
}
.count {
  font-size: 20px;
  color: white;
  font-weight: bold;
  background-clip: text;
  color: transparent;
  font-weight: 800;
  margin-top: 20px;
}

.total-trading {
  margin: 10px 20px;
  padding: 30px;
  background: rgb(40, 16, 63);
  width: calc(100% - 40px);
  border-radius: 11px;
}
</style>
