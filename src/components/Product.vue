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
  <div class="product__info">
    <span class="product__name">
      {{ product. name }}
    </span>
    <span class="product__price">
      최저 {{ product.price }}원
    </span>
  </div>
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
    height: 80%;
    display: block;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 20%;
    min-height: 5.5rem;
  }

  &__name {
    display: block;
  }

  &__price {
    font-style: oblique;
  }
}
</style>
