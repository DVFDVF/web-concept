<template>
  <div>
    <div class="what-benefits" v-for="item in ownData" :key="item.key">
      <div class="title">{{ item.title }}</div>
      <div class="text">{{ item.text }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const ownData = [
  {
    key: 0,
    title: '1 Own Your Data',
    text: 'Avail all the benefits of this software cryptocurrency wallet using the Ethereum blockchain so only you can own your data and store it locally.Allows access to your wallet through a browser extension or mobile app',
  },
  {
    key: 1,
    title: '2 What are the benefits of WEB3.0',
    text: 'Web 3.0 is built upon the core concepts of decentralization, openness, and greater user utility. \n\n In a decentralized system, information could be retrieved based on its content, therefore it can be held in several locations at the same time, thereby making it decentralized. This would deconstruct the massive datasets currently held by internet behemoth',
  },
  {
    key: 2,
    title: '3 What are dApp?',
    text: 'Decentralized applications (dApps) are programs that run on nodes of a blockchain or peer-to-peer (P2P) network instead of relying on a single centralized computer. \n\n Few benefits of dApps are that they are more financially efficient since they can function without a middleman to take profits from transactions, Users are responsible for legal and regulatory implications for the content they share or consume.',
  },
  {
    key: 3,
    title: '4 Smart Contract',
    text: 'Decentralized applications (dApps) are programs that run on nodes of a blockchain or peer-to-peer (P2P network instead of relying on a single centralized computer. \n\n Few benefits of dApps are that they are more financially efficient since they can function without a middleman to take profits from transactions, Users are responsible for legal and regulatory implications for the content they share or consume.',
  },
];
</script>
<style lang="less">
.what-benefits {
  background: linear-gradient(150deg, #171433 0%, rgba(23, 20, 51, 0) 100%);
  border-radius: 8px;
  border: 2px solid rgb(49, 38, 87);
  margin: 10px;
  padding: 10px;
  font-family: Montserrat, Montserrat;
}
.title {
  font-weight: 900;
  font-size: 20px;
  text-align: center;
}
.text {
  margin-top: 10px;
  font-size: 12px;
}
</style>
