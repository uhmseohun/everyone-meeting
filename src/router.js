import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Match from '@/views/Match.vue'
import Place from '@/views/Place.vue'
import Amount from '@/views/Amount.vue'
import Community from '@/views/Community.vue'
import Service from '@/views/Service.vue'
import Coin from '@/views/Coin.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/match',
      name: 'match',
      component: Match,
      meta: {
        title: '매칭 정보'
      }
    },
    {
      path: '/place',
      name: 'place',
      component: Place,
      meta: {
        title: '장소 정보'
      }
    },
    {
      path: '/amount',
      name: 'amount',
      component: Amount,
      meta: {
        title: '운동량 정보'
      }
    },
    {
      path: '/community',
      name: 'community',
      component: Community,
      meta: {
        title: '커뮤니티'
      }
    },
    {
      path: '/service',
      name: 'service',
      component: Service,
      meta: {
        title: '부가 서비스'
      }
    },
    {
      path: '/coin',
      name: 'Coin',
      component: Coin,
      meta: {
        title: 'COIN'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `모두의 모임 - ${to.meta.title}`
  }
  next()
})

export default router
