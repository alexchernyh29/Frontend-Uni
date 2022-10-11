<template>
  <div class="tasks-bg-light"></div>
  <div class="tasks-bg-pd">
    <div class="tasks-bg-box">
      <p class="tasks-title">Мероприятия от банка на ближайщие дни</p>
      <div class="col-9 col-xl-10 ms-auto my-3">
        <div class="row gy-3">
          <div class="col-6"><TheTasksCard /></div>
          <div class="col-6"><TheTasksCard /></div>
          <div class="col-6"><TheTasksCard /></div>
          <div class="col-6"><TheTasksCard /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheTasksCard from '../components/TheTasksCard.vue'

export default { components: { TheTasksCard } }
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
.tasks-bg-light {
  width: 100%;
  height: 100vh;
  z-index: -1;
  position: fixed;
  background-image: url('../assets/icons/event-bg.png');
}

.tasks-bg-pd {
  padding: 130px 100px 20px 360px;
}

.tasks-bg-box {
  padding: 40px;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0px 4px 4px #14e8ce, inset 0px 4px 4px rgba(16, 236, 236, 0.76);
  border-radius: 25px;
}

.tasks-title {
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: #14e8ce;
}
</style>
