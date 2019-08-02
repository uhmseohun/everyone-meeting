<script>
export default {
  name: 'PlaceItem',
  props: {
    place: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
<div
  class="place"
  :style="{
    'background-image': `url('${place.image}')`
  }"
>
  <span class="place__name">{{ place.name }}</span>
</div>
</template>

<style lang="scss" scoped>
.place {
  width: 100%;
  padding: 2rem 0;
  text-align: center;
  border-radius: 10px;
  background-position: center;
  background-size: cover;

  &__name {
    color: white;
    font-size: 1.4rem;
  }
}
</style>
