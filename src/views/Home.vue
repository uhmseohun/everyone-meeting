<script>
export default {
  name: 'Home',
  data () {
    return {
      services: [
        {
          title: '종목별 매칭 서비스',
          to: '/match'
        },
        {
          title: '장소 정보',
          to: '/place'
        },
        {
          title: '운동량 정보 제공',
          to: '/amount'
        },
        {
          title: '커뮤니티',
          to: '/community'
        },
        {
          title: '부가 서비스',
          to: '/service'
        },
        {
          title: 'COIN',
          to: '/coin'
        }
      ]
    }
  }
}
</script>

<template>
<div class="home">
  <div
    v-for="(service, i) in services"
    :key="`service-${i}`"
    class="home__menu"
  >
    <router-link :to="service.to">
      {{ service.title }}
    </router-link>
  </div>
</div>
</template>

<style lang="scss" scoped>
.home {
  &__menu {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    width: 100%;
    color: gray;
    border: 3px solid #5B86E5;
    border-radius: 1rem;

    &:not(:first-child) {
      margin-top: 2rem;
    }
  }
}
</style>
