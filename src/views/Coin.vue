<script>
export default {
  name: 'Coin'
}
</script>

<template>
<div class="coin">
</div>
</template>

<style lang="scss" scoped>
.coin {
  min-height: calc(100% - 4.5rem);
  background: #36D1DC;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #5B86E5, #36D1DC);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #5B86E5, #36D1DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
