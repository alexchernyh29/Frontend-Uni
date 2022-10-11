<template>
  <main class="vh-100 d-flex align-items-center justify-content-center">
    <form class="signin m-auto text-center" @submit.prevent="auth">
      <h1 class="mx-auto mb-4 fw-normal">LOGO</h1>

      <div class="form-floating mb-2">
        <input type="text" class="form-control" id="floatingInput" placeholder="Login" v-model="login" required />
        <label for="floatingInput">Почта</label>
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password" required />
        <label for="floatingPassword">Пароль</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary mb-4" type="submit">Sign in</button>
      <p class="text-muted">© 2017–2022</p>
    </form>
  </main>
</template>

<script>
import axios from 'axios'
import keys from '@/config/index'

export default {
  data() {
    return {
      login: null,
      password: null,
    }
  },
  methods: {
    auth() {
      axios.get(`${keys.baseUrl}/Auth/Login?login=${this.login}&password=${this.password}`).then((response) => {
        if (response.status === 400) this.$router.push('/auth')

        localStorage.setItem('token', response.data.guid)
        localStorage.setItem('dataUser', JSON.stringify(response.data.user))
        this.$router.push('/')
      })
    },
  },
}
</script>

<style>
.signin {
  width: 300px;
}
</style>
