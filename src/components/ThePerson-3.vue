<template>
  <div class="person-content-3">
    <div class="person-block-3">
      <div class="person-header-3">
        <img src="../assets/icons/person-3.png" />
        <div class="person-info-3">
          <p class="person-title-3">Карьерист</p>
          <img src="../assets/icons/mark-pur.png" />
          <p class="person-title-3">История</p>
          <div class="person-history-3">
            <p class="person-text-3">Всегда смотрит вперёд, участвует во всех активностях метавселенной, часто является инициатором различных ивентов и заданий.</p>
          </div>
        </div>
      </div>
      <div class="marks-3">
        <p class="marks-text-3">Задания</p>
        <div class="marks-row">
          <img src="../assets/icons/pur.png" />
          <img src="../assets/icons/green.png" />
          <img src="../assets/icons/blue-2.png" />
          <img src="../assets/icons/blue-1.png" />
          <img src="../assets/icons/red.png" />
          <img src="../assets/icons/yellow.png" />
        </div>
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

.person-content-3 {
  display: flex;
  flex-direction: row;
}

.person-block-3 {
  padding: 40px;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid #f808fd;
  border-radius: 25px;
}

.person-header-3 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.person-info-3 {
  width: 70%;
}

.person-title-3 {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #f808fd;
}

.person-text-3 {
  padding: 15px;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: #f808fd;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid #f808fd;
  border-radius: 25px;
}
.marks-text-3 {
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #f808fd;
}
</style>
