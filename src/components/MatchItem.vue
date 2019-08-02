<script>
export default {
  name: 'MatchItem',
  props: {
    match: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
<div class="item">
  <div class="item__team item__left">
  </div>
  <div class="item__info">
    <span class="item__versus">VS</span>
    <span class="item__detail">장소 - {{ match. place }}</span>
  </div>
  <div class="item__team item__right">
  </div>
</div>
</template>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-around;

  &__team {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid #5B86E5;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__versus {
    font-size: 1.8rem;
    display: block;
  }

  &__detail {
    font-size: 0.7rem;
  }

  &__left {
    margin-right: 20px;
  }
  &__right {
    margin-left: 20px;
  }
}
</style>
