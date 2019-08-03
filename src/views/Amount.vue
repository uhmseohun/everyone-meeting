<script>
import AmountChart from '@/components/charts/AmountChart.vue'

import Calorie from '@/assets/calorie.png'
import Clock from '@/assets/clock.png'
import Goal from '@/assets/goal.png'

export default {
  name: 'Amount',
  components: { AmountChart },
  data () {
    return {
      amounts: [
        {
          title: '운동시간',
          content: '00:59:16',
          image: Clock
        },
        {
          title: '현재<br>칼로리 소비량',
          content: '828 Kcal',
          image: Calorie
        },
        {
          title: '목표<br>칼로리 소비량',
          content: '1500 Kcal',
          image: Goal
        }
      ]
    }
  },
  methods: {
    push (to) {
      this.$router.push(to)
    }
  }
}
</script>

<template>
<div class="amount">
  <amount-chart class="amount__chart" />
  <hr>
  <div class="amount__item-box">
    <div
      :key="`item-${i}`"
      v-for="(amount, i) in amounts"
      class="amount__item"
    >
      <img
        class="amount__image"
        :src="amount.image"
      >
      <span class="amount__content" v-html="amount.title" />
      <span class="amount__content">{{ amount.content }}</span>
    </div>
  </div>
  <hr>
  <div
    @click="push('/management/amount')"
    class="amount__detail"
  >
    자세히 보기
  </div>
</div>
</template>

<style lang="scss" scoped>
.amount {
  &__detail {
    color: gray;
    border: solid rgb(114, 155, 188) 1.5px;
    border-radius: 20px;
    width: 6.5rem;
    padding: 3px;
    margin-top: 6px;
    text-align: center;
    float: right;
  }

  &__chart {
    margin-bottom: 0.5rem;
  }

  &__item-box {
    display: flex;
    justify-content: space-around;
  }

  &__item {
    flex-direction: column;
    text-align: center;
  }

  &__image {
    width: 2.5rem;
    height: 2.5rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  &__content {
    display: block;
  }
}
</style>
