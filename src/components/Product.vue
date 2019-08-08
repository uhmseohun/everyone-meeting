<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
<div class="product">
  <img
    class="product__image"
    :src="product.image"
  >
  <span class="product__name">
    {{ product. name }}
  </span>
</div>
</template>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &__image {
    width: 6rem;
    display: block;
  }
}
</style>
