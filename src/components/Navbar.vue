<script>
export default {
  name: 'Navbar',
  computed: {
    pageTitle () {
      return this.$route.meta.title
        ? this.$route.meta.title : '모두의 모임'
    }
  }
}
</script>

<template>
<div class="navbar">
  <div class="navbar__title">
    {{ pageTitle }}
  </div>
</div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Gothic+A1&display=swap');

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3.5rem;
  background: #36D1DC;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #5B86E5, #36D1DC);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #5B86E5, #36D1DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  &__title {
    font-size: 1.3rem;
    color: white;
    font-family: 'Gothic A1', sans-serif;
    user-select: none;
  }
}
</style>
