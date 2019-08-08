<script>
import Product from '@/components/Product.vue'

import Prod1 from '@/assets/product/1.png'
import Prod2 from '@/assets/product/2.png'
import Prod3 from '@/assets/product/3.png'
import Prod4 from '@/assets/product/4.png'
import Prod5 from '@/assets/product/5.png'
import Prod6 from '@/assets/product/6.png'
import Prod7 from '@/assets/product/7.png'
import Prod8 from '@/assets/product/8.png'
import Prod9 from '@/assets/product/9.png'

import Ad from '@/assets/ad/1.png'

export default {
  name: 'Service',
  components: { Product },
  data () {
    return {
      Ad,
      menus: [ 'CART', 'ORDER', 'MY PAGE', 'DELIVERY' ],
      categories: [ '≪', '신발', '의류', '장비', '헬스케어', '기타', '≫' ],
      products: {
        shoes: [
          {
            name: '나이키 메큐리얼 슈퍼플라이 6프로',
            image: Prod1,
            price: '151,000'
          },
          {
            name: '나이키 티엠포 레전드 8엘리트 FG',
            image: Prod2,
            price: '269,000'
          },
          {
            name: '나이키 머큐리얼 슈퍼플라이 360엘리트 FG',
            image: Prod3,
            price: '263,200'
          },
          {
            name: '카이리 5 EP',
            image: Prod4,
            price: '149,000'
          },
          {
            name: '나이키 줌 프릭1',
            image: Prod5,
            price: '113,680'
          },
          {
            name: '캠프라인 루카스 트레킹화',
            image: Prod6,
            price: '113,680'
          }
        ],
        recommend: [
          {
            name: '레키 쿰부 DSS 3단 일자형 등산스틱 100~145cm',
            image: Prod7,
            price: '149,000'
          },
          {
            name: '요넥스 아크세이버 FB레드 배드민턴 라켓',
            image: Prod8,
            price: '156,640'
          },
          {
            name: 'NutraKey BCAA Optima 포스트 운동 제품',
            image: Prod9,
            price: '64,400'
          }
        ]
      }
    }
  }
}
</script>

<template>
<div class="service">
  <div class="service__menu">
    <span
      :key="`menu-${i}`"
      v-for="(menu, i) in menus"
      class="service__menu-item"
    >
      {{ menu }}
    </span>
  </div>
  <div class="service__category">
    <span
      :key="`cate-${i}`"
      v-for="(category, i) in categories"
      :class="{
        'service__category-current': i === 1
      }"
    >
      {{ category }}
    </span>
  </div>
  <div class="service__products">
    <product
      :key="`prod-${i}`"
      v-for="(product, i) in products.shoes"
      :product="product"
      class="service__products-item"
    />
  </div>
  <div class="service__recommend">
    <span class="service__recommend-title">
      오늘의 추천상품
    </span>
    <product
      :key="`reco-${i}`"
      v-for="(product, i) in products.recommend"
      :product="product"
      class="service__recommend-item"
    />
    <div class="service__pagination">
      <span
        class="service__pagination-item"
        :key="`page-${i}`"
        v-for="i in 5"
      >
        {{ i }}
      </span>
      <span
        class="service__pagination-item service__pagination-next"
      >
        다음
      </span>
    </div>
  </div>
  <img
    class="service__advertisement"
    :src="Ad"
  >
</div>
</template>

<style lang="scss" scoped>
.service {
  padding-bottom: 7rem;

  &__menu {
    display: flex;
    justify-content: space-around;
    align-items: center;

    &-item {
      font-size: 1.1rem;
    }
  }

  &__category {
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-top: 0.6rem;

    padding: 1.5rem 0;
    border-top: solid gray 1.6px;
    border-bottom: solid gray 1.6px;

    color: gray;

    &-current {
      font-weight: bold;
      color: black;
    }
  }

  &__products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;

    &-item {
      width: 30%;
      height: 100%;
      margin: 10px 0;
    }
  }

  &__recommend {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    &-title {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      font-size: 1.2rem;
      padding: 6px 0;
      border-top: solid black 1px;
      border-bottom: solid black 1px;
    }

    &-item {
      width: 30%;
      height: 100%;
      margin: 10px 0;
    }
  }

  &__pagination {
    display: flex;
    width: 100%;
    justify-content: center;

    &-item:not(:first-child) {
      margin-left: 8px;
    }

    &-next {
      padding: 2px;
      border: solid gray 1px;
    }
  }

  &__advertisement {
    position: fixed;
    bottom: 0;
    left: 0;
    margin-top: 10px;
    width: 100vw;
  }
}
</style>
