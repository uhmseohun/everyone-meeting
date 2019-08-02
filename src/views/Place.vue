<script>
import PlaceItem from '@/components/PlaceItem.vue'
import AddButton from '@/assets/add.png'

export default {
  name: 'Place',
  components: { PlaceItem },
  data () {
    return {
      AddButton,
      search: '',
      tags: [
        '축구', '조깅', '낚시', '수영'
      ],
      places: [
        {
          name: '홍익대학교',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Hongik_University_Seoul.jpg/440px-Hongik_University_Seoul.jpg'
        },
        {
          name: '마포스포츠센터',
          image: 'http://www.mapothankyounews.co.kr/news/photo/201703/108324_103565_617.jpg'
        },
        {
          name: '홍제천',
          image: 'http://image.chosun.com/sitedata/image/200806/25/2008062501681_0.jpg'
        }
      ]
    }
  },
  methods: {
    set (tag) {
      this.search = tag
    }
  }
}
</script>

<template>
<div class="place">
  <input
    v-model="search"
    class="input__text"
    placeholder="Search"
  >
  <div class="place__tag-box">
    <span
      :key="`tag-${i}`"
      v-for="(tag, i) in tags"
      @click="set(tag)"
      class="place__tag"
    >
      #{{ tag }}
    </span>
  </div>
  <div class="place__place-box">
    <place-item
      :key="`place-${i}`"
      v-for="(place, i) in places"
      class="place__place"
      :place="place"
    />
  </div>
  <div class="place__add-box">
    <img
      class="place__add"
      :src="AddButton"
    >
  </div>
</div>
</template>

<style lang="scss" scoped>
.place {
  &__tag-box {
    margin-top: 1.7rem;
    margin-left: 1rem;
  }
  &__tag {
    color: gray;
    user-select: none;
    &:not(:first-child) {
      margin-left: 0.5rem;
    }
  }

  &__place-box {
    width: 100%;
    margin-top: 1.7rem;
  }
  &__place:not(:first-child) {
    margin-top: 1rem;
  }

  &__add-box {
    text-align: center;
  }
  &__add {
    margin-top: 20px;
    height: 50px;
  }
}
</style>
