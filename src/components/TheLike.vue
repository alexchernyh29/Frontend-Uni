<template>
  <div class="like-bg">
    <img class="heart" src="../assets/icons/heart_active.svg" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
.like-bg {
  width: 40px;
  height: 40px;
  background: $white;
  border: 1px solid #1957d3;
  border-radius: 56px;
}
.heart {
  margin: 5px;
}
</style>
