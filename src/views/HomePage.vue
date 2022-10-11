<template>
  <div class="carousel-back" style="position: fixed"></div>
  <div class="carousel-content">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/icons/1.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/icons/2.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/icons/3.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/icons/4.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/icons/5.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/icons/6.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/icons/7.png" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
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
.carousel-back {
  width: 100%;
  height: 100vh;
  z-index: -1;
  background-image: url('../assets/icons/main-bg.png');
}

.carousel-content {
  padding: 90px 100px 20px 360px;
}
</style>
