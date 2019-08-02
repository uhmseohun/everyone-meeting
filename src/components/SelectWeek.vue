<script>
import { format } from 'date-fns'

export default {
  name: 'SelectWeek',
  data () {
    return {
      days: [
        new Date('May 16, 2019 17:22:10'),
        new Date('May 17, 2019 17:22:10'),
        new Date('May 18, 2019 17:22:10'),
        new Date('May 19, 2019 17:22:10'),
        new Date('May 20, 2019 17:22:10'),
        new Date('May 21, 2019 17:22:10'),
        new Date('May 22, 2019 17:22:10')
      ]
    }
  },
  methods: {
    getDay (date) {
      return format(date, 'ddd')
    },
    getDate (date) {
      return format(date, 'DD')
    }
  }
}
</script>

<template>
<div class="week">
  <div
    :key="`day-${i}`"
    v-for="(day, i) in days"
    :class="{
      'week__day': true,
      'week__day-sun': getDay(day) === 'Sun'
    }"
  >
    <span class="week__text">{{ getDay(day) }}</span>
    <span class="week__text">{{ getDate(day) }}</span>
  </div>
</div>
</template>

<style lang="scss" scoped>
.week {
  display: flex;
  justify-content: space-around;

  &__day {
    text-align: center;
    &-sun {
      color: red;
    }
  }

  &__text {
    display: block;
  }
}
</style>
