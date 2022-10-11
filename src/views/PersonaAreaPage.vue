<template>
  <div class="area"></div>
  <div class="area-content">
    <ThePersonaArea />
  </div>
</template>

<script>
import TheMarketCard from '../components/TheMarketCard.vue'
import ThePersonaArea from '../components/ThePersonaArea.vue'
export default { components: { TheMarketCard, ThePersonaArea } }
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
.area {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/icons/shop-bg.png');
  position: fixed;
  z-index: -1;
}

.area-content {
  padding: 130px 100px 20px 320px;
}
</style>
