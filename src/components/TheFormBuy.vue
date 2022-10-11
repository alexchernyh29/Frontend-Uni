<template>
  <div class="form-buy">
    <div class="form-header">
      <p class="form-title">Ваша заявка принята в обработку!</p>
      <i class="bi bi-x-circle"></i>
    </div>
    <select class="form-select" aria-label="Default select example">
      <option selected>Выберите ваш размер</option>
      <option value="1">S</option>
      <option value="2">L</option>
      <option value="3">XL</option>
      <option value="4">XXL</option>
    </select>
    <button class="form-btn">Супер</button>
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
