<template>
  <div class="card d-flex flex-column align-items-center">
    <div class="p-2 d-flex flex-column align-items-center">
      <span>{{ type.title }}</span>
      <i class="bi fs-4" :class="type.icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: Object,
  },
  data() {
    return {
      users: [{ id: 30, name: 'Андрей Фарафонов', score: 0, imageLink: '/img/users/30.png', role: { id: 1, name: 'Работник' }, marks: { researcher: 52, killer: 21, careerist: 49, communicator: 30 } }],
    }
  },
  mounted() {
    //запрос на получение данных всех пользователей для определения победителя в текщем типе метки
  },
}
</script>
