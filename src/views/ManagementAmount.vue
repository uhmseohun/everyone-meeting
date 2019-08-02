<script>
import SelectWeek from '@/components/SelectWeek.vue'
import AchieveRateChart from '@/components/charts/AchieveRateChart.vue'
import CalorieChart from '@/components/charts/CalorieChart.vue'

export default {
  name: 'ManagementAmount',
  components: { SelectWeek, AchieveRateChart, CalorieChart },
  data () {
    return {
      current: 0,
      durations: ['DAY', 'WEEK', 'MONTH']
    }
  },
  methods: {
    set (i) {
      this.current = i
    }
  }
}
</script>

<template>
<div class="amount">
  <select-week />
  <hr>
  <div class="amount__duration-box">
    <div
      :key="`du-${i}`"
      @click="set(i)"
      v-for="(duration, i) in durations"
      :class="{
        'amount__duration': true,
        'amount__duration-selected': current === i
      }"
    >
      {{ duration }}
    </div>
  </div>
  <div class="amount__info">
    <div class="amount__title">
      오늘의 운동량
    </div>
    <span class="amount__kcal">828 Kcal</span>
  </div>
  <achieve-rate-chart />
  <calorie-chart />
  <div class="amount__warning">
    과도한 운동은 몸에 무리가 갈 수 있습니다
  </div>
</div>
</template>

<style lang="scss" scoped>
.amount {
  &__duration-box {
    display: flex;
    justify-content: space-around;
  }

  &__duration {
    color: gray;
    background-color: white;
    width: 5rem;
    text-align: center;
    padding: 10px 5px;
    &-selected {
      color: white;
      background-color: rgb(114, 155, 188);
      border-radius: 20px;
    }
  }

  &__title {
    color: white;
    background-color: rgb(114, 155, 188);
    width: 8rem;
    text-align: center;
    padding: 10px 5px;
    border-radius: 10px;
  }

  &__info {
    display: flex;
    align-items: center;
    margin: 1.2rem 0;
  }

  &__kcal {
    margin-left: 17px;
    color: blue;
  }

  &__warning {
    border: solid 2px rgb(114, 155, 188);
    border-radius: 10px;
    color: rgb(114, 155, 188);
    padding: 0.8rem;
    text-align: center;
    margin: 1.2rem 0;
  }
}
</style>
