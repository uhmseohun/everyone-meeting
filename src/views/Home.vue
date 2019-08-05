<script>
import Logo from '@/assets/logo.png'

export default {
  name: 'Home',
  data () {
    return {
      Logo
    }
  },
  methods: {
    push (to) {
      this.$router.push(to)
    }
  }
}
</script>

<template>
<div class="home">
  <div class="home__brand">
    <img :src="Logo" class="home__logo">
    <div class="home__title">
      <h1>모두의 모임</h1>
      <hr>
      <span class="home__motto">
        "Not Alone,<br>
        Let's Together"
      </span>
    </div>
  </div>
  <button
    @click="push('/join')"
    class="home__start"
  >
    start
  </button>
</div>
</template>

<style lang="scss" scoped>
.home {
  background: #36D1DC;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #5B86E5, #36D1DC);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #5B86E5, #36D1DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: calc(100% - 16px); // for navbar, padding height
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__brand {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
  }

  &__motto {
    flex-direction: column;
    font-style: oblique;
  }

  &__start {
    position: fixed;
    bottom: 3rem;
    background-color: rgb(80, 166, 174);
    font-size: 1.5rem;
    font-style: oblique;
    color: white;
    border: 0;
    border-radius: 50px;
    height: 3rem;
    width: 5rem;
  }

  &__logo {
    height: 5rem;
    margin-right: 10px;
  }
}
</style>
