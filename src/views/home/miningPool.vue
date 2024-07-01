<template>
  <div class="mining">
    <div class="nft-img center">
      <img src="@/assets/home/nfcImage.png" />
      <div class="right-text">
        <div class="nft-title">MINING POOL</div>
        <div class="nft-text">
          Congratulations to the following new users for joining the mining
          pool.
        </div>
      </div>
    </div>
    <div class="mining-back col-center">
      <div
        class="mining-wallet center"
        v-for="item in walletHashrate"
        :key="item.key"
      >
        <div>{{ item.text }}</div>
        <div class="mining-text2">{{ item.text2 }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

const walletHashrate = reactive([
  {
    key: 0,
    text: "User's Natonality",
    text2: 'Us',
  },
  {
    key: 1,
    text: 'Public Chain',
    text2: '0x0123123-3d',
  },
  {
    key: 2,
    text: 'Address',
    text2: '818ebc43',
  },
  {
    key: 3,
    text: 'Wallet Hashrate',
    text2: '0.070851 USDC',
  },
]);
</script>
<style scoped lang="less">
.mining {
  padding: 20px;
  text-align: left;
  .nft-img {
    img {
      width: 50vw;
    }
  }
  .nft-title {
    color: white;
    font-weight: 700;
    font-size: 20px;
  }
  .nft-text {
    color: white;
    font-weight: 300;
    font-size: 10px;
    margin-top: 10px;
  }
  .mining-back {
    position: relative;
    height: 100px;
    border-radius: 7px;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.272);
    margin-top: -30px;
    background: rgb(55, 16, 79);
    justify-content: space-between;
  }
  .mining-wallet {
    justify-content: space-between;
    width: 100%;
    font-size: 11px;
  }
  .mining-text2 {
    color: #ab79ff;
    font-weight: 600;
  }
}
</style>
