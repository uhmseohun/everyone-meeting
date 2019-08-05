<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar },
  computed: {
    showNavbar () {
      const route = this.$route.fullPath
      return route !== '/' && route !== '/join'
    }
  }
}
</script>

<template>
  <div id="app" class="app">
    <navbar
      v-show="showNavbar"
      class="app__navbar"
    />
    <router-view class="app__content"/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Gothic+A1&display=swap');

a {
  text-decoration: none;
  color: black;
}

html,
body {
  height: 100%;
}

.app {
  height: 100%;

  &__content {
    font-family: 'Gothic A1', sans-serif;
    margin: 0 auto;
    padding: 1rem 15px 0 15px;

    @media (min-width: 650px) {
      padding: 3rem 10rem 0 10rem;
    }
  }
}

.input {
  &__text {
    font-family: 'Gothic A1', sans-serif;
    display: block;
    border: 0;
    height: 2.5rem;
    font-size: 1.2rem;
    width: 100%;
    border: solid rgb(100, 100, 100) 1px;
    border-radius: 50px;
    text-indent: 1rem;

    &:not(:first-child) {
      margin-top: 1rem;
    }
    &:focus {
      outline: none;
      border: solid black 1px;
    }
  }

  &__button {
    font-family: 'LotteMartHappy';
    font-size: 1.2rem;
    height: 2.5rem;
    background-color: white;
    border: 0;
    padding-bottom: 0;
    color: rgb(100, 100, 100);
    border-bottom: solid rgb(100, 100, 100) 1px;

    &:not(:first-child) {
      margin-left: 0.5rem;
    }
  }
}

.float {
  &-left {
    float: left;
  }
  &-right {
    float: right;
  }
}
</style>
