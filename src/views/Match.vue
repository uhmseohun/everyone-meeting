<script>
import MatchItem from '@/components/MatchItem.vue'

import Soccer from '@/assets/sport/soccer.png'
import Kanu from '@/assets/sport/kanu.png'
import Running from '@/assets/sport/running.png'

export default {
  name: 'Match',
  components: { MatchItem },
  data () {
    return {
      Soccer,
      Kanu,
      Running,
      matches: [
        {
          place: '홍익대학교',
          image: Soccer
        },
        {
          place: '잠실종합운동경기장',
          image: Running
        },
        {
          place: '한강',
          image: Kanu
        }
      ],
      search: [ '지역', '팀', '연령' ]
    }
  }
}
</script>

<template>
<div class="match">
  <div class="match__title">
    매칭 검색 / 등록
  </div>
  <div class="match__search">
    <div
      :key="`search-${i}`"
      v-for="(item, i) in search"
      class="match__search-item"
    >
      {{ item }}
      <div class="match__search-item__expand">
        +
      </div>
    </div>
  </div>
  <div class="match__button">
    <div class="match__button-item">
      매치 검색
    </div>
    <div class="match__button-item">
      매치 등록
    </div>
  </div>
  <hr>
  <div class="match__title">
    오늘의 매칭 정보
  </div>
  <hr>
  <match-item
    class="match__item"
    :key="`match-${i}`"
    v-for="(match, i) in matches"
    :match="match"
  />
  <div class="match__more">
    더보기
  </div>
</div>
</template>

<style lang="scss" scoped>
.match {
  &__title {
    text-align: center;
    background-color: rgb(114, 155, 188);
    color: white;
    padding: 5px;
    border-radius: 5px;
  }

  &__item {
    margin-top: 1.5rem;
  }

  &__more {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(214, 214, 214);
    width: 5rem;
    padding: 4px 0;
    border-radius: 5px;
    float: right;
    margin: 1rem 0;
  }

  &__search {
    margin-top: 1rem;
    &-item {
      padding: 1rem 0.5rem;
      border-bottom: solid gray 1px;

      &:first-child {
        border-top: solid gray 1px;
      }

      &__expand {
        color: red;
        font-weight: bold;
        float: right;
        font-size: 1.5rem;
      }
    }
  }

  &__button {
    display: flex;
    margin: 1.3rem 0;

    &-item {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 50%;
      height: 3rem;
      background-color: rgb(70, 70, 70);
      color: white;
    }
  }
}
</style>
