<script>
import ChatRoom from '@/components/ChatRoom.vue'
import Post from '@/components/Post.vue'
import Write from '@/assets/write.png'
import NewRoom from '@/assets/newroom.png'
import ChatRooms from '@/assets/chatrooms.png'

import Room1 from '@/assets/chat/room-1.png'
import Room2 from '@/assets/chat/room-2.png'
import Profile1 from '@/assets/chat/profile-1.png'
import Profile2 from '@/assets/chat/profile-2.png'

export default {
  name: 'Community',
  components: { ChatRoom, Post },
  data () {
    return {
      Write,
      NewRoom,
      ChatRooms,
      categories: [ '가입<br>인사', '자유', '팀구함', '선수<br>구함', '건강<br>뉴스' ],
      posts: [
        {
          title: '같이 즐겁게 공 차실 팀 구하고 있습니다.',
          info: '킹덕배 / 19-07-27 / 45'
        },
        {
          title: '8/3(토) 구미에서 풋살 하실 팀 구합니다.',
          info: 'LuckySJ / 19-07-25 / 14'
        },
        {
          title: '전주에서 팀 구합니다.',
          info: '전주한우 / 19-07-25 / 18'
        },
        {
          title: '강남 30대 축구초보가 팁구합니다..',
          info: '왼발 / 19-07-23 / 36'
        }
      ],
      rooms: [
        {
          title: '서울2030★초중급<br>배드민턴모임-가입문의환영',
          tags: [ '배드민턴동호회', '직장인배드민턴', '서울배드민턴', '홍대배드민턴', '20대배드민턴' ],
          image: Room1,
          detail: {
            profile: Profile1,
            info: {
              count: '그룹채팅 28명'
            }
          }
        },
        {
          title: '√ 볼링클럽(가입문의 하실 분<br>톡방 들어오세요.)',
          tags: [ '안양', '볼링', '호계', '블라스트', '운동', '동호회', '모임', '소모임', '군포', '의왕' ],
          image: Room2,
          detail: {
            profile: Profile2,
            info: {
              count: '그룹채팅 27명',
              time: '30분 전'
            }
          }
        }
      ]
    }
  }
}
</script>

<template>
<div class="commu">
  <div class="commu__category">
    <span
      :class="{
        'commu__category-item': true,
        'commu__category-item-current': cate === '팀구함'
      }"
      :key="`cate-${i}`"
      v-for="(cate, i) in categories"
      v-html="cate"
    />
    <img
      class="commu__category-item commu__icon"
      :src="Write"
    >
  </div>
  <div class="commu__board">
    <div class="commu__board-header">
      <span class="float-left">전체 1,788건</span>
      <input
        class="commu__board-search float-right"
        placeholder="검색어를 입력하세요"
      >
      <br>
    </div>
    <div class="commu__board-content">
      <post
        :key="`post-${i}`"
        v-for="(post, i) in posts"
        :post="post"
        class="commu__board-post"
      />
    </div>
  </div>
  <div class="commu__chat">
    <div class="commu__chat-header">
      <span class="commu__chat-header__title">
        채팅
        <span class="commu__chat-header__title-icon">▼</span>
      </span>
      <div class="commu__chat-header__menu">
        <img class="commu__chat-header__icon" :src="ChatRooms">
        <img class="commu__chat-header__icon" :src="NewRoom">
      </div>
    </div>
    <input
      class="commu__chat-search"
      placeholder="채팅방 이름, 참여자 검색"
    />
    <chat-room
      :key="`room-${i}`"
      v-for="(room, i) in rooms"
      :room="room"
      class="commu__chat-room"
    />
  </div>
</div>
</template>

<style lang="scss" scoped>
.commu {
  &__category {
    display: flex;
    justify-content: space-around;
    border-top: solid gray 1px;
    border-bottom: solid gray 1px;
    padding: 7px 0;

    &-item {
      height: 2.5rem;
      display: flex;
      align-items: center;

      color: gray;

      &:not(:first-child) {
        padding-left: 10px;
        border-left: solid gray 1px;
      }

      &-current {
        font-weight: bold;
        color: black;
      }
    }
  }

  &__board {
    margin-top: 10px;

    &-search {
      padding: 2px;
      border: solid gray 1px;
    }

    &-content {
      margin: 0.7rem 0;
      padding: 0.4rem 0;
      border-top: solid black 2px;
      border-bottom: solid black 2px;
    }

    &-post {
      padding: 4px 0;

      &:not(:first-child) {
        border-top: solid gray 1px;
      }
    }
  }

  &__chat {
    &-header {
      margin-bottom: 0.5rem;

      &__title {
        align-items: center;
        font-size: 1.3rem;
        width: 5rem;

        &-icon {
          margin-left: 3px;
          font-size: 0.5rem !important;
        }
      }
      &__menu {
        float: right;
      }
      &__icon {
        height: 2rem;
      }
    }

    &-search {
      background-color: rgb(246, 246, 246);
      border: 0;
      width: 100%;
      height: 1.8rem;
      border-radius: 50px;
      padding-left: 1rem;
    }

    &-room {
      margin: 0.7rem 0;
    }
  }

  &__icon {
    width: 2.5rem;
  }
}
</style>
