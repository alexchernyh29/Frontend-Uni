<template>
  <div class="market" style="position: fixed"></div>
  <div class="market">
    <div class="market-content d-flex flex-wrap">
      <TheMarketCard v-for="marketCard in marketCards" :key="marketCard.id" :data="marketCard" class="m-3" style="width: 30%" />
      <!-- <div class="market-row">
        <TheMarketCard />
        <TheMarketCard />
        <TheMarketCard />
      </div>-->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import keys from '@/config/index'
import TheMarketCard from '../components/TheMarketCard.vue'

const token = localStorage.getItem('token')

export default {
  data() {
    return {
      marketCards: [],
    }
  },
  components: { TheMarketCard },
  beforeMount() {
    axios.get(`${keys.baseUrl}/Shop/GetAllProducts/?token=${token}`).then((response) => {
      this.marketCards = response.data
    })
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
.market {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/icons/shop-bg.png');
}

.market-content {
  padding: 130px 100px 20px 320px;
}

.market-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 20px;
}
</style>
