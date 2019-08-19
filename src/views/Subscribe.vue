<script>
import Band from '@/assets/band.png'
import Background from '@/assets/background.png'

export default {
  name: 'Subscribe',

  data () {
    return {
      Band,
      Background,
      check: {
        service: '',
        privacy: ''
      }
    }
  }
}
</script>

<template>
  <div
    class="sub"
    :style="{
      'background-image': `url('${Background}')`
    }"
  >
    <div
      class="sub__image"
      :style="{
        'background-image': `url('${Band}')`
      }"
    />
    <div class="sub__message">
      V 자신의 현재 상태를 측정하여 운동해보세요<br>
      V 웨어러블 기기와 함께 목표를 세워 운동해보세요<br>
      V 구독 서비스를 통해 경제적으로 이용해보세요<br>
    </div>
    <div class="sub__cost">
      <div class="sub__cost__item">
        <div class="sub__cost__item__title">
          BEGINNER
        </div>
        <div class="sub__cost__item__content">
          1MONTH<br>
          10000<br>
          (VAT 포함)<br>
        </div>
      </div>

      <div class="sub__cost__item">
        <div class="sub__cost__item__title">
          BEGINNER
        </div>
        <div class="sub__cost__item__content">
          1MONTH<br>
          10000<br>
          (VAT 포함)<br>
        </div>
      </div>

      <div class="sub__cost__item">
        <div class="sub__cost__item__title">
          BEGINNER
        </div>
        <div class="sub__cost__item__content">
          1MONTH<br>
          10000<br>
          (VAT 포함)<br>
        </div>
      </div>
    </div>
    <div class="sub__rule">
      <div class="sub__rule__item">
        <span class="sub__rule__item__title">
          구독 서비스 이용 약관
        </span>
        <div
          @click="check.service = check.service ? '' : '✓'"
          class="sub__rule__item__check"
        >
          {{ check.service }}
        </div>
        서비스 이용 약관 동의
      </div>
      <div class="sub__rule__item">
        <span class="sub__rule__item__title">
          개인정보 수집 및 이용안내
        </span>
        <div
          @click="check.privacy = check.privacy ? '' : '✓'"
          class="sub__rule__item__check"
        >
          {{ check.privacy }}
        </div>
        개인정보 취급 방침 동의
      </div>
    </div>
    <div class="sub__button">
      15일 무료체험하기
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sub {
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  // background-color: rgb(97, 142, 222);
  background-size: cover;

  &__image {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background-size: cover;
  }

  &__message {
    background-color: #ffffff;
    border: 2px solid #000000;
    padding: 15px;
    margin-top: 17px;
  }

  &__cost {
    display: flex;
    margin-top: 10px;

    &__item {
      background-color: white;
      border: 2px solid black;

      &:not(:first-of-type) {
        border-left: 0;
      }

      &__title {
        border-bottom: 2px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
      }

      &__content {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
      }
    }
  }

  &__rule {
    background-color: white;
    border: 2px solid black;
    margin-top: 20px;
    padding: 5px;

    &__item {
      padding: 10px 17px;
      border-bottom: 2px solid black;

      &__title {
        display: block;
        margin-bottom: 8px;
      }

      &:not(:first-of-type) {
        border-bottom: 0;
      }

      &__check{
        float: left;
        width: 1.3rem;
        height: 1.3rem;
        border: solid rgb(97, 142, 222) 2.5px;
        margin-right: 10px;
        font-size: 1.2rem;
        text-align: center;
      }
    }
  }

  &__button {
    color: white;
    background-color: rgb(80, 163, 177);
    padding: 0.5em 1em;
    border-radius: 30px;
    margin-top: 3em;
  }
}
</style>
