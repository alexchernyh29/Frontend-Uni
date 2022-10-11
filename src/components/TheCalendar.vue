<template>
  <div>
    <div class="calendar">
      <div class="card-header">Дни Ивентов</div>
      <div class="card-body">
        <ul class="week">
          <li><span class="week-text">ПН</span><span class="week-text">03</span></li>
          <li><span class="week-text">ВТ</span><span class="week-text">04</span></li>
          <li><span class="week-text">СР</span><span class="week-text">05</span></li>
          <li><span class="week-text">ЧТ</span><span class="week-text">06</span></li>
          <li><span class="week-text">ПТ</span><span class="week-text">07</span></li>
          <li><span class="week-text">СБ</span><span class="week-text">08</span></li>
          <li><span class="week-text">ВС</span><span class="week-text">09</span></li>
        </ul>
        <div class="calendar-task">
          <div v-if="events.length" class="calendar-task_items row">
            <TheEventCard v-for="event in events" :key="event.Id" class="mb-2 col-5 p-0 mx-auto" :mode="mode" :event="event" />
          </div>
          <h4 v-else>Нет запланированных ивентов</h4>
        </div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addEvent">Добавить ивент</button>
        <FormAddEvent id="addEvent" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import keys from '@/config/index'
import TheEventCard from './TheEventCard.vue'
import FormAddEvent from './FormAddEvent.vue'

export default {
  data() {
    return {
      events: [],
      dataUser: JSON.parse(localStorage.getItem('dataUser')),
      mode: JSON.parse(localStorage.getItem('dataUser'))['role']['name'],
    }
  },
  components: { TheEventCard, FormAddEvent },
  beforeMount() {
    const token = localStorage.getItem('token')

    if (this.dataUser.role.id === 2) {
      axios.get(`${keys.baseUrl}/Tasks/GetAllTasks/?token=${token}`).then((response) => {
        this.events = response.data
      })
    } else {
      axios.get(`${keys.baseUrl}/Tasks/GetUserTasks/?userId=${this.dataUser.id}&token=${token}`).then((response) => {
        this.events = response.data
      })
    }
  },
  methods: {
    openEventForm() {},
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
.calendar {
  padding: 40px;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0px 4px 4px #00ffff, inset 0px 4px 4px #00ffff;
  border-radius: 25px;
}
.card-header {
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: $green;
}
.week {
  padding: 20px 0 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.week-text {
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  color: $green;
  display: flex;
  flex-direction: column;
}
.calendar-task {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.calendar-task_items {
  padding-right: 40px;
}
</style>
