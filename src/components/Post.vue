<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
<div class="post">
  <span class="post__title">
    {{ post.title }}
  </span>
  <span class="post__info">
    {{ post.info }}
  </span>
</div>
</template>

<style lang="scss" scoped>
.post {
  &__title {
    display: block;
  }

  &__info {
    font-size: 0.7rem;
    color: gray;
  }
}
</style>
