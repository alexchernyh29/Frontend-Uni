<template>
  <div class="mb-3">
    <div class="card" style="width: 260px">
      <div class="card-header">
        <span>Цели</span>
      </div>
      <div class="card-body" style="overflow-y: auto">
        <ul class="nav nav-pills flex-column">
          <li class="py-2" v-for="(mark, index) in marks" :key="index">
            <span class="fs-5" :style="{ color: mark.color }">{{ mark.title }}</span>
            <i class="bi bi-binoculars btn btn-sm"></i>
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="{ width: `${mark.width}%`, backgroundColor: mark.color }" :aria-valuenow="mark.color" aria-valuemin="0" aria-valuemax="100">{{ mark.width }}%</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TheTasksCard from './TheTasksCard.vue'
export default {
  data() {
    return {
      marks: [
        { title: 'Исследователь', width: 25, color: '#fcba03' },
        { title: 'Киллер', width: 50, color: '#fc3d03' },
        { title: 'Карьерист', width: 65, color: '#3bcc12' },
        { title: 'Коммуникатор', width: 25, color: '#0356fc' },
      ],
    }
  },
  components: { TheTasksCard },
}
</script>
