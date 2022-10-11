<template>
  <div class="card">
    <div class="card-header">
      <span>2022-10-08</span>
    </div>
    <div class="card-body">
      <div class="d-flex align-items-center justify-content-between">
        <span class="tasks-title">Онлайн-дискуссия: «Банк ВТБ: восстановление финансового сектора, цели на 2023 год и дивиденды»</span>
        <img class="img-card" src="../assets/icons/blue-1.png" />
        <img />
        <TheLike />
      </div>
    </div>
  </div>
</template>

<script>
import TheLike from './TheLike.vue'
export default { components: { TheLike } }
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.tasks-title {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #14e8ce;
}

.img-card {
  margin-right: 20px;
  width: 30px;
}
</style>
