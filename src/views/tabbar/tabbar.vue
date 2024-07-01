<template>
  <div class="tabbar">
    <div
      v-for="item in tabbarData"
      :key="item.key"
      @click="selectTabbar(item.key)"
      class="tabbar-content col-center"
    >
      <img
        :src="selectedTabaritem == item.key ? item.selectedIcon : item.icon"
      />
      <div
        :class="[
          'tabbar-text',
          { 'text-select': selectedTabaritem == item.key },
        ]"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
const selectedTabaritem = ref(0);
import HomeStateless from '@/assets/home/Home-Stateless.png';
import HomeStateful from '@/assets/home/Home-Stateful.png';
import TradingStateful from '@/assets/home/Trading-Stateful.png';
import TradingStateless from '@/assets/home/Trading-Stateless.png';
import POOLdataStateful from '@/assets/home/POOLdata-Stateful.png';
import POOLdataStateless from '@/assets/home/POOLdata-Stateless.png';
import MeStateful from '@/assets/home/Me-Stateful.png';
import MeStateless from '@/assets/home/Me-Stateless.png';
const tabbarData = reactive([
  {
    key: 0,
    icon: HomeStateless,
    selectedIcon: HomeStateful,
    text: 'home',
  },
  {
    key: 1,
    icon: TradingStateless,
    selectedIcon: TradingStateful,
    text: 'TRADING',
  },
  {
    key: 2,
    icon: POOLdataStateless,
    selectedIcon: POOLdataStateful,
    text: 'POOLDATA',
  },
  {
    key: 3,
    icon: MeStateless,
    selectedIcon: MeStateful,
    text: 'MY',
  },
]);
function selectTabbar(key: number) {
  selectedTabaritem.value = key;
}
</script>
<style lang="less">
.tabbar {
  display: flex;
  padding-bottom: 15px;
}
.tabbar-content {
  flex: 1;
  gap: 5px;
  img {
    width: 50px;
    height: 50px;
  }
}
.tabbar-text {
  color: white;
  font-size: 13px;
}
.text-select {
  color: #b98eff;
}
</style>
