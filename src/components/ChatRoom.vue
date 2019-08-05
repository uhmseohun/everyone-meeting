<script>
export default {
  name: 'ChatRoom',
  props: {
    room: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
<div class="room">
  <div
    class="room__image"
    :style="{
      'background-image': `url('${room.image}')`
    }"
  />
  <div class="room__info">
    <span
      class="room__info-title"
      v-html="room.title"
    />
    <span class="room__info-tags">
      {{ room.tags.map(v => `#${v}`).join(' ') }}
    </span>
    <span class="room__info-detail">
      <div
        class="room__info-detail__profile"
        :style="{
          'background-image': `url('${room.detail.profile}')`
        }"
      />
      <span>
        {{ room.detail.info.count }}
        <span v-if="room.detail.info.time">·</span>
        <span class="room__info-detail-time">
          {{ room.detail.info.time }}
        </span>
      </span>
    </span>
  </div>
</div>
</template>

<style lang="scss" scoped>
.room {
  display: flex;

  &__image {
    width: 45%;
    background-size: cover;
    margin-right: 7px;
  }

  &__info {
    width: 55%;

    &-title {
      display: block;
    }

    &-tags {
      display: block;
      color: gray;
      margin: 6px 0 1px 0;
    }

    &-detail {
      color: gray;
      font-size: 0.8rem;

      &__profile {
        display: inline-block;
        height: 1.3rem;
        width: 1.3rem;
        border-radius: 7px;
        background-size: cover;
        vertical-align: middle;
        margin-right: 3px;
      }

      &-time {
        color: blue;
      }
    }
  }
}
</style>
