<template>
  <div class="event">
    <div class="event-content">
      <ThePerson />
    </div>
  </div>
</template>

<script>
import ThePerson from '../components/ThePerson.vue'
export default { components: { ThePerson } }
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
.event {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/icons/person-bg.png');
}

.event-content {
  padding: 60px 100px 20px 320px;
}

.event-actions {
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
