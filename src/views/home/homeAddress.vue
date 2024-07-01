<template>
  <div class="address">
    <div class="address-quantity center">
      <div>Address</div>
      <div>Quantity</div>
    </div>
    <div
      class="address-quan center"
      v-for="item in addressData"
      :key="item.key"
    >
      <div>{{ item.title }}</div>
      <div class="address-number">{{ item.number }}</div>
    </div>
    <div class="address-quantity">
      <div
        class="address-bitfinex center"
        v-for="item in bitfinexData"
        :key="item.key"
      >
        <img src="@/assets/home/1.png" />
        <div>{{ item.text }}</div>
        <div class="address-count">{{ item.count }}</div>
        <img src="@/assets/home/downLink.png" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const addressData = [
  {
    key: 0,
    title: '0×6f50e50c********8d50ad6356',
    number: '0.440399',
  },
  {
    key: 1,
    title: '0×6f50e50c********8d50ad6356',
    number: '0.440399',
  },
  {
    key: 2,
    title: '0×6f50e50c********8d50ad6356',
    number: '0.440399',
  },
];
const bitfinexData = [
  { key: 0, text: 'OKX', count: '3647.67' },
  { key: 1, text: 'OKX', count: '3647.67' },
  { key: 2, text: 'OKX', count: '3647.67' },
  { key: 3, text: 'OKX', count: '3647.67' },
];
</script>
<style scoped lang="less">
.address {
  height: 200px;
}
.address-quantity {
  color: white;
  font-weight: 600;
  margin: 20px;
  div {
    flex: 1;
  }
}
.address-quan {
  font-size: 9px;
  justify-content: space-between;
  padding: 10px 20px;
}
.address-number {
  color: #ab79ff;
  font-size: 13px;
  font-weight: 700;
}
.address {
  background: linear-gradient(180deg, #62a8ea2d 0%, #c941ff23 100%);
  width: calc(100% - 30px);
  height: 350px;
  margin: 15px;
  border-radius: 11px;
}
.address-bitfinex {
  font-weight: 500;
  z-index: 1;
  font-size: 15px;
  margin-bottom: 10px;
  img {
    width: 20px;
  }
}
.address-count {
  color: #ab79ff;
  font-size: 12px;
}
</style>
