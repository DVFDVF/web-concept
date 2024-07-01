<template>
  <link
    href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic"
    rel="stylesheet"
  />
  <div class="main">
    <Header></Header>
    <div class="main-center">
      <Home></Home>
      <!-- <Trade></Trade> -->
    </div>
    <Tabbar></Tabbar>
  </div>
</template>
<script setup lang="ts">
import Header from "@/views/header/index.vue";
import Home from "@/views/home/home.vue";
import Tabbar from "@/views/tabbar/tabbar.vue";
import Trade from "./trade/trade.vue";
</script>
<style scoped>
.main {
  max-width: 767px;
  width: 100%;
  height: 100vh;
  background: #171433;
  display: flex;
  flex-direction: column;
}
.main-center {
  display: flex;
  flex: 1;
  overflow: hidden;
}
</style>
