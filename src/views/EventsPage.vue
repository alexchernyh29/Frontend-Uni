<template>
  <div class="event-back" style="position: fixed"></div>
  <div class="event-content">
    <TheCalendar />
    <div class="event-actions">
      <TheMarks />
      <TheTasks />
    </div>
  </div>
</template>

<script>
import TheLike from '@/components/TheLike.vue'
import TheCalendar from '@/components/TheCalendar.vue'
import TheTasks from '@/components/TheTasks.vue'
import TheMarks from '@/components/TheMarks.vue'

export default {
  components: { TheLike, TheCalendar, TheTasks, TheMarks },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
.event-back {
  width: 100%;
  height: 100vh;
  z-index: -1;
  background-image: url('../assets/icons/event-bg.png');
}

.event-content {
  padding: 130px 100px 20px 320px;
}

.event-actions {
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
