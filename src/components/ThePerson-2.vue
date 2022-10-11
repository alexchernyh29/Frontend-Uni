<template>
  <div class="person-content-2">
    <div class="person-block-2">
      <div class="person-header-2">
        <img src="../assets/icons/person-2.png" />
        <div class="person-info-2">
          <p class="person-title-2">Киллер</p>
          <img src="../assets/icons/mark-red.png" />
          <p class="person-title-2">История</p>
          <div class="person-history-2">
            <p class="person-text-2">Киллеры всегда наравят быть первыми, превосходство над иными игроками, уважающие преимущества власти, стремящиеся к победе любой ценой. Они не против использовать для этого все лазейки метавселенной ВТБ.</p>
          </div>
        </div>
      </div>
      <div class="marks-2">
        <p class="marks-text-2">Задания</p>
        <div class="marks-row">
          <img src="../assets/icons/red.png" />
          <img src="../assets/icons/pur.png" />
          <img src="../assets/icons/green.png" />
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

.person-content-2 {
  display: flex;
  flex-direction: row;
}

.person-block-2 {
  padding: 40px;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid #f80000;
  border-radius: 25px;
}

.person-header-2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.person-info-2 {
  width: 70%;
}

.person-title-2 {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #f80000;
}

.person-text-2 {
  padding: 15px;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: #f80000;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid #f80000;
  border-radius: 25px;
}
.marks-text-2 {
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #f80000;
}
</style>
