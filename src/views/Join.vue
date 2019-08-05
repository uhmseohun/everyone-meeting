<script>
import Profile from '@/assets/profile.png'

export default {
  name: 'Join',
  data () {
    return {
      Profile
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
<div class="join">
  <div class="join__top">
    <div
      class="join__top-profile"
      :style="{
        'background-image': `url('${Profile}')`
      }"
    />
    Sign Up
    <div class="dummy" />
  </div>
  <div class="join__form">
    <span class="join__form__title">
      서비스 이용약관
    </span>
    <div class="join__form-item">
      <div class="join__form-check" />
      서비스 이용약관 동의
      <div class="join__form-detail">
        자세히 보기
      </div>
    </div>

    <span class="join__form__title">
      개인정보 수집 및 이용안내
    </span>
    <div class="join__form-item">
      <div class="join__form-check" />
      개인정보 취급 방침 동의
      <div class="join__form-detail">
        자세히 보기
      </div>
    </div>
  </div>
  <div
    @click="push('/menu')"
    class="join__button"
  >
    Sign Up
  </div>
</div>
</template>

<style lang="scss" scoped>
.join {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;

  &__top {
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #36D1DC;
    background: -webkit-linear-gradient(to bottom, #5B86E5, #36D1DC);
    background: linear-gradient(to bottom, #5B86E5, #36D1DC);
    color: white;
    font-size: 1.6rem;

    &-profile {
      height: 8rem;
      width: 8rem;
      background-size: cover;
      display: block;
      border-radius: 50%;
      margin-bottom: 1.2rem;
    }
  }

  &__form {
    position: relative;
    top: -15vh;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border-radius: 10px;
    width: 80%;
    height: 40vh;
    background-color: white;
    padding: 1.5rem;

    &__title {
      font-size: 1.3rem;
    }

    &-item {
      display: flex;
      align-items: center;
      padding: 1.3rem 0;
      border-bottom: solid gray 1px;
      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }
    }

    &-check {
      float: left;
      width: 1.3rem;
      height: 1.3rem;
      border: solid rgb(230, 230, 250) 2.5px;
      border-radius: 6px;
      margin-right: 10px;
    }

    &-detail {
      float: right;
      clear: both;
      margin-left: auto;
      padding: 6px;
      background-color: rgb(230, 230, 250);
      border-radius: 10px;
    }
  }

  &__button {
    position: relative;
    bottom: 19vh;

    background: #67B26F;
    background: -webkit-linear-gradient(to right, #4ca2cd, #67B26F);
    background: linear-gradient(to right, #4ca2cd, #67B26F);

    width: 50vw;
    height: 8vh;
    border-radius: 40px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.3rem;
    color: white;
  }
}

.dummy {
  height: 10vh;
}
</style>
