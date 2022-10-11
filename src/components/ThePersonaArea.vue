<template>
  <div class="personal-content">
    <p class="personal-title">Личный кабинет</p>
    <div class="personal-header">
      <div class="personal-info">
        <img src="https://avatars.githubusercontent.com/u/77900753?v=4" alt="" width="200" height="200" class="rounded-circle me-2" />
        <div class="personal-block">
          <p class="personal-name">Евгений Иванов</p>
          <p class="personal-br">It-специалист</p>
        </div>
      </div>
      <div class="personal-check">
        <p class="personal-title">Главные достижения</p>
        <div class="check-block">
          <img src="../assets/icons/eggs.png" />
        </div>
      </div>
    </div>
    <div class="personal-conteiner">
      <div class="container-left">
        <p class="personal-title">Мой персонаж</p>
        <img class="pers" src="../assets/icons/person-pa-1.png" />
        <div class="personal-marks">
          <img class="marks-personal" src="../assets/icons/mark-yellow.png" />
          <img class="marks-personal" src="../assets/icons/mark-red.png" />
          <img class="marks-personal" src="../assets/icons/mark-pur.png" />
          <img class="marks-personal" src="../assets/icons/mark-blue.png" />
        </div>
      </div>
      <div class="container-right">
        <p class="personal-title">Достижения</p>
        <img src="../assets/icons/ochivki.png" />
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

.personal-content {
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid #14e8ce;
  border-radius: 25px;
  padding: 30px;
}

.personal-title {
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 45px;
  color: #14e8ce;
}

.personal-br {
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: #14e8ce;
}

.personal-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.personal-info {
  display: flex;
  flex-direction: row;
  padding-right: 110px;
}

.personal-name {
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #14e8ce;
}

.check-block {
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #14e8ce;
  border-radius: 25px;
  padding: 20px;
}

.personal-marks {
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.personal-conteiner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.marks-personal {
  width: 70px;
  padding-right: 5px;
}

.pers {
  padding-left: 30px;
}
</style>
