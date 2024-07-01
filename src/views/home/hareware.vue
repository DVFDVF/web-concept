<template>
  <div v-for="item in totalTrading" :key="item.key">
    <div class="hardware">
      <div class="title">{{ item.title }}</div>
      <div class="count">{{ item.count }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";

const totalTrading = reactive([
  {
    key: 0,
    title: "Total Trading Volume",
    count: "$810,612,602",
  },
  {
    key: 1,
    title: "Open Interest",
    count: "$488,263,220",
  },
  {
    key: 2,
    title: "Total Users",
    count: "95,888",
  },
]);
</script>
<style scoped>
.hardware {
  background: rgb(38, 14, 63);
}
.title {
  color: white;
}
.count {
  content: red;
}
</style>
