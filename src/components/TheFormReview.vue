<template>
  <div class="form-buy">
    <div class="form-header">
      <p class="form-title">Оставь отзыв если ты не пидарас!</p>
      <i class="bi bi-x-circle"></i>
    </div>
    <p class="form-subtitle">Поделитесь своими впечатлениями о ....</p>
    <input class="form-input" />
    <select class="form-select" aria-label="Default select example">
      <option selected>Оцените от 1 до 5</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">Наебал 4</option>
      <option value="4">Опять 5</option>
    </select>
    <button class="form-btn">Отправить</button>
  </div>
</template>

<script>
import TheLike from './TheLike.vue'
export default { components: { TheLike } }
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';
.form-buy {
  width: 60%;
  background: #ffffff;
  box-shadow: 0px 4px 4px $blue, inset 0px 4px 4px $blue;
  border-radius: 25px;
  padding: 30px;
}
.form-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.form-title {
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: $blue;
}
.form-subtitle {
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: $blue;
}
.form-input {
  width: 400px;
  height: 120px;
  margin-bottom: 20px;
}
.form-btn {
  margin-top: 20px;
  width: 120px;
  height: 50px;
  background: $blue;
  color: $white;
  border-radius: 25px;
  border: none;
}
.form-btn:hover {
  background: $dark-blue;
}
</style>
