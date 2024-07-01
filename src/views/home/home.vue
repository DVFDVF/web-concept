<template>
  <div class="home-conter col-center">
    <CarouselSplide></CarouselSplide>
    <!-- <div style="width: 100%; height: 100px"> -->
    <!-- <Splide :options="options" aria-label="My Favorite Images">
        <SplideSlide>
          <div class="carouse-image">
            <img src="@/assets/diagram/1 – 1.png" />
          </div>
        </SplideSlide>
      </Splide> -->
    <!-- </div> -->
    <div class="title-one">Web3 Concept</div>
    <div class="title-two">and Offer Scholarships-09</div>
    <div class="in-uel">in UEL Vietnam</div>
    <img src="@/assets/home/home-line.png" />
    <div class="gradient-text">out put</div>
    <HomeAddress></HomeAddress>
    <MiningPool></MiningPool>
    <div class="list-tilte center">
      <span>Daily</span>
      <span class="insterest">interest</span>
      <span>rule</span>
    </div>
    <OwnYourData></OwnYourData>
    <div class="gradient-text nft-text">NFT</div>
    <Trading></Trading>
    <HomeTable></HomeTable>
    <img class="web3-supp" src="@/assets/home/dapp-support.png" />
    <whatBenefits></whatBenefits>
    <howToStake></howToStake>

    <div class="audit-report">Audit report</div>
    <div class="secure-audit">We have a secure audit report</div>
    <div class="audit-report">Partner</div>
    <div class="secure-audit">Our business partnerr</div>
  </div>
</template>
<script lang="ts" setup>
import HomeTable from '@/views/home/homeTable.vue';
import Trading from '../home/trading.vue';
import OwnYourData from '../home/ownYourData.vue';
import whatBenefits from '../home/whatBenefits.vue';
import howToStake from '../home/howToStake.vue';
import MiningPool from '../home/miningPool.vue';
import HomeAddress from '../home/homeAddress.vue';
import CarouselSplide from './carouselSplide.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
const options = {
  rewind: true,
  gap: '1rem',
  arrows: false,
  loop: true,
  autoplay: true,
  interval: 3000,
  type: 'loop',
};
</script>
<style lang="less">
.home-conter {
  color: white;
  text-align: center;
  overflow-y: scroll;
  width: 100%;
  .title-one {
    font-size: 35px;
    font-weight: 900;
  }
  .title-two {
    font-weight: 600;
  }
  .in-uel {
    background: linear-gradient(134deg, #622dca 0%, #a232c4 100%);
    border-radius: 20px;
    height: 40px;
    line-height: 40px;
    width: 200px;
    margin-top: 40px;
    font-size: 12px;
    font-weight: 500;
  }
  .gradient-text {
    font-size: 28px;
    font-weight: bold;
    background: linear-gradient(to right, #62a9ea, #c941ff);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .web3-supp {
    width: 85%;
    margin-top: 40px;
  }
  .list-title {
    color: white;
    font-weight: 900;
    display: flex;
  }
  .insterest {
    color: #8982f2;
  }
  .audit-report {
    font-weight: 900;
    font-size: 13px;
    color: #ffffff;
    margin-top: 40px;
  }
  .secure-audit {
    font-weight: 300;
    font-size: 10px;
    color: #ffffff;
    line-height: 0px;
    text-align: center;
    font-style: normal;
    text-transform: none;
    margin-top: 15px;
  }
}
.list-tilte {
  font-weight: 700;
  margin-top: 30px;
  gap: 5px;
  width: 100%;
  justify-content: left;
  margin-left: 30px;
}
.nft-text {
  margin-top: 30px;
}
.carouse-image {
  img {
    width: 90%;
  }
}
</style>
