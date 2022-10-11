<template>
  <div class="statistic-back" style="position: fixed">
    <div class="statistic-content">
      <TheLibrary />
    </div>
  </div>
</template>

<script>
import TheLibrary from '../components/TheLibrary.vue'
export default { components: { TheLibrary } }
</script>
<style>
@import '@/assets/styles/vars.scss';
.statistic-back {
  width: 100%;
  height: 100vh;
  z-index: -1;
  background-image: url('../assets/icons/main-bg.png');
}

.statistic-content {
  padding: 90px 100px 20px 360px;
}
</style>
