<template>
  <form class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" @submit.prevent="saveEvent">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="name" class="form-label">Название</label>
            <input type="text" class="form-control" id="name" v-model="name" required />
          </div>
          <div class="mb-3">
            <label for="dateTime" class="form-label">Начало</label>
            <input type="date" class="form-control" id="dateTime" v-model="dateTime" required />
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Стоимость</label>
            <input type="number" class="form-control" id="price" v-model="price" required />
          </div>
          <div class="mb-3">
            <label for="marks" class="form-label">Метки</label>
            <select id="marks" class="form-select" v-model="marks" multiple>
              <option value="1">Развитие</option>
              <option value="2">Коммуникация</option>
              <option value="3">Смекалка</option>
              <option value="4">Соперничество</option>
              <option value="5">Социальное</option>
              <option value="6">Стремление</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="users" class="form-label">Пользователи</label>
            <select id="users" class="form-select" v-model="users" multiple>
              <option v-for="user in dataUsers" :key="user.id" :value="user.id">{{ user.name }}</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Отменить</button>
          <button type="submit" class="btn btn-primary">Сохранить</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import keys from '@/config/index'

const token = localStorage.getItem('token')

export default {
  data() {
    return {
      name: null,
      dateTime: null,
      price: null,
      marks: null,
      users: null,
      dataUsers: [],
    }
  },
  methods: {
    saveEvent() {
      const dataEvent = {
        name: this.name,
        dateTime: this.dateTime,
        price: this.price,
        marks: this.marks,
        users: this.users,
      }

      axios.get(`${keys.baseUrl}/Tasks/CreateTask/?token=${token}`, { params: dataEvent }).then(function (response) {
        console.log(response.data)
      })
    },
  },
  beforeMount() {
    axios.get(`${keys.baseUrl}/Users/GetAllUsers/?token=${token}`).then((response) => {
      this.dataUsers = response.data
    })
  },
}
</script>
