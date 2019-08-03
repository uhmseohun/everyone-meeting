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
      ],
      selection: 0
    }
  },
  methods: {
    getDay (date) {
      return format(date, 'ddd')
    },
    getDate (date) {
      return format(date, 'DD')
    },
    toggle (i) {
      this.selection = i
      this.$emit('input', this.days[this.selection])
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
      'week__day-sun': getDay(day) === 'Sun',
      'week__day-selected': i === selection
    }"
    @click="toggle(i)"
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
    padding: 5px;
    user-select: none;

    &-sun {
      color: red;
    }

    &-selected {
      border: 1.3px solid rgb(114, 155, 188);;
      border-radius: 8px;
    }
  }

  &__text {
    display: block;
  }
}
</style>
