<template>
  <div class="header-navbar">
    <div class="header-row">
      <div class="coins">
        <span class="coines">{{ ruble }}</span>
        <img class="coin-imgages" src="../assets/icons/coin.png" />
      </div>
      <button class="button-bell"><img class="bell" src="../assets/icons/bell.png" /></button>
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center text-dark text-decoration-none dropdown-toggle show" type="button" data-bs-toggle="dropdown">
          <span class="name">{{ dataUser.name }}</span>
          <img :src="`${keys.baseUrl + dataUser.imageLink}`" alt="" width="32" height="32" class="rounded-circle me-2" />
        </a>
        <ul class="dropdown-menu dropdown-menu-end text-small shadow mb-2">
          <li><a href="#" class="dropdown-item">Сменить пользователя</a></li>
          <li><a href="#" class="dropdown-item">Настройки</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><button @click="dislog" class="dropdown-item">Выйти</button></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import keys from '@/config/index'

const token = localStorage.getItem('token')

export default {
  data() {
    return {
      keys,
      dataUser: JSON.parse(localStorage.getItem('dataUser')),
      ruble: 0,
    }
  },
  methods: {
    dislog() {
      localStorage.clear()
      this.$router.go('/auth')
    },
  },
  beforeMount() {
    axios.get(`${keys.baseUrl}/Users/GetBalance/?token=${token}`).then((response) => {
      console.log(response.data.ruble)
    })
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
.header-navbar {
  z-index: 1;
  position: fixed;
  top: 10px;
  right: 45px;
  width: 440px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 25px;
  padding: 10px;
}

.coins {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.coines {
  font-weight: 500;
  font-size: 36px;
  line-height: 45px;
  color: $green;
}

.coin-imgages {
  width: 80px;
}

.bell {
  width: 35px;
}

.button-bell {
  border: none;
  background: none;
  margin-right: 10px;
}

.header-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.links {
  transition: none;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: $green;
}

.name {
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: $green;
  margin-right: 10px;
}
</style>
