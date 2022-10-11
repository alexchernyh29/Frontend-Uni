<template>
  <div class="card">
    <img class="card-img-top" :src="`${keys.baseUrl + data.imageLink}`" />
    <div class="card-body"></div>
    <h5 class="card-title">{{ data.name }}</h5>
    <p class="card-text">{{ data.description }}</p>
    <div class="prices">
      <div class="coins">
        <span class="price">{{ data.price }}</span>
        <img class="coin" src="../assets/icons/coin-1.png" />
      </div>
      <button class="btn-buy" @click="buy(data.id)">Беру!</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import keys from '@/config/index'
import TheLike from './TheLike.vue'

const token = localStorage.getItem('token')

export default {
  data() {
    return { keys }
  },
  props: ['data'],
  components: { TheLike },
  methods: {
    buy(id) {
      axios.get(`${keys.baseUrl}/Shop/Buy/?productId=${id}&token=${token}`).then((response) => {
        // console.log(response.data.transactionHash)
        axios.get(`${keys.baseUrl}/Users/GetBalance/?token=${token}`).then((response) => {
          console.log(response.data)
        })

        alert('Успешно')
      })
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.card {
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 4px 4px #14e8ce, inset 0px 4px 4px #14e8ce;
  border-radius: 25px;
  width: 420px;
  padding: 15px;
}

.coins {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.coin {
  width: 80px;
}

.card-img-top {
  height: 150px;
  object-fit: contain;
}
.card-image {
  width: 30%;
  margin: 0 auto;
}
.card-title {
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: #14e8ce;
}
.card-text {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #14e8ce;
}

.prices {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-weight: 500;
  font-size: 36px;
  line-height: 45px;
  color: #14e8ce;
}

.btn-buy {
  margin-bottom: 20px;
  width: 130px;
  height: 45px;
  border-radius: 25px;
  border: none;
  background: #ab9000;
  border-radius: 25px;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  transition: color 3s;
}
.btn-buy:hover {
  background: rgba(171, 144, 0, 0.65);
}
</style>
