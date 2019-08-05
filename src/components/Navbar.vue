<script>
import Menu from '@/assets/menu.png'
import Home from '@/assets/home.png'

export default {
  name: 'Navbar',
  computed: {
    pageTitle () {
      return this.$route.meta.title
        ? this.$route.meta.title : '모두의 모임'
    }
  },
  methods: {
    push (to) {
      this.$router.push(to)
    }
  },
  data () {
    return {
      Home,
      Menu
    }
  }
}
</script>

<template>
<div class="navbar">
  <div
    @click="push('/menu')"
    class="navbar__menu"
  >
    <img class="navbar__icon" :src="Menu">
  </div>
  <div class="navbar__title">
    {{ pageTitle }}
  </div>
  <div
    @click="push('/')"
    class="navbar__home"
  >
    <img class="navbar__icon" :src="Home">
  </div>
</div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Gothic+A1&display=swap');

.navbar {
  display: flex;
  align-items: center;
  height: 3.5rem;
  padding: 0 4px;

  background: #36D1DC;
  background: -webkit-linear-gradient(to bottom, #5B86E5, #36D1DC);
  background: linear-gradient(to bottom, #5B86E5, #36D1DC);

  &__title {
    font-size: 1.3rem;
    color: white;
    font-family: 'Gothic A1', sans-serif;
    user-select: none;
    text-align: center;
    clear: both;
  }

  &__menu {
    float: left;
    display: flex;
    align-items: center;
    clear: both;
    margin-right: auto;
  }

  &__home {
    float: right;
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  &__icon {
    height: 2rem;
  }
}
</style>
