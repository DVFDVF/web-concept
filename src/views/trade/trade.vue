<template>
  <div class="trade">
    <totalTrading></totalTrading>
    <div class="popular-currency">Popular Currency</div>
    <div class="trade-back center">
      <div class="popular-trade">
        <div class="saving">Saving Plan reward</div>
        <div class="popular-currency">3 million ETH</div>
        <div class="enter-popular">Enter</div>
      </div>
      <img class="popular-center" src="@/assets/trade/nft-trade.jpg" />
    </div>
  </div>
</template>
<script setup lang="ts">
import totalTrading from './totalTrading.vue';
</script>
<style scoped>
.trade {
  width: 100%;
  overflow: scroll;
}
.popular-currency {
  font-size: 22px;
  font-weight: bold;
  background: linear-gradient(136deg, #62a9ea 0%, #c941ff 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}
.enter-popular {
  background: linear-gradient(134deg, #622dca 0%, #a232c4 100%);
  border-radius: 25px;
  color: white;
  padding: 6px;
  width: 110px;
  text-align: center;
  margin-top: 10px;
}
.trade-back {
  background: rgb(49, 0, 81);
  margin: 30px 10px;
  padding: 20px;
}
.saving {
  margin-left: 10px;
  color: white;
  font-size: 13px;
}
.popular-trade {
}
.popular-center {
  width: 40%;
}
</style>
