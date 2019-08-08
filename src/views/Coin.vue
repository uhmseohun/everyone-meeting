<script>
import Fire from '@/assets/fire.png'
import Coin from '@/assets/coin.png'
import Ad from '@/assets/ad/2.png'

export default {
  name: 'Coin',
  data () {
    return {
      Fire,
      Coin,
      Ad
    }
  }
}
</script>

<template>
<div class="coin">
  <span class="coin__today">TODAY</span>
  <div class="coin__circle">
    Kcal
    <div class="coin__circle-kcal">
      <img :src="Fire">
      828
    </div>
    <span>목표 달성량</span>
    <span>80%</span>
  </div>
  <div class="coin__menu">
    <div class="coin__box">
      <div class="coin__box__title">
        Today's &nbsp;
        <img :src="Coin">
      </div>
      <span class="coin__box__content">240</span>
    </div>
    <div class="coin__box">
      <div class="coin__box__title">
        전체 보유 &nbsp;
        <img :src="Coin">
      </div>
      <span class="coin__box__content">1520</span>
    </div>
    <div class="coin__box">
      <div class="coin__box__title">
        지난사용내역 &nbsp;
        <img :src="Coin">
      </div>
    </div>
    <div class="coin__box">
      <div class="coin__box__title">
        사용하러가기 &nbsp;
        <img :src="Coin">
      </div>
    </div>
  </div>
  <img
    class="coin__advertisement"
    :src="Ad"
  >
</div>
</template>

<style lang="scss" scoped>
.coin {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100% - 9.5rem);

  background: #36D1DC;
  background: -webkit-linear-gradient(to bottom, #5B86E5, #36D1DC);
  background: linear-gradient(to bottom, #5B86E5, #36D1DC);

  &__today {
    color: white;
    font-size: 1.4rem;
  }

  &__circle {
    width: 45vw;
    height: 45vw;

    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-image: url('../assets/circle.png');
    background-size: contain;

    color: white;

    &-kcal {
      font-size: 2.3rem;
    }
  }

  &__menu {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
  }

  &__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgb(144, 179, 202);
    border-radius: 50px;
    padding: 10px;
    width: 40%;
    height: 2rem;
    margin-bottom: 2rem;

    color: white;

    &__title {
      display: flex;
      justify-content: center;
    }

    &__content {
      font-weight: bold;
    }
  }

  &__advertisement {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 5rem;
  }
}
</style>
