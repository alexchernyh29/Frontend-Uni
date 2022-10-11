<template>
  <div class="person-content-4">
    <div class="person-block-4">
      <div class="person-header-4">
        <img src="../assets/icons/person-4.png" />
        <div class="person-info-4">
          <p class="person-title-4">Коммуникатор</p>
          <img src="../assets/icons/mark-blue.png" />
          <p class="person-title-4">История</p>
          <div class="person-history-4">
            <p class="person-text-4">Всегда во внимании, в центре коллектива,тусовщики. Главная их мотивация – возможность общения, постоянного социального взаимодействия в игровой деятельности и вспомогательных чатах.</p>
          </div>
        </div>
      </div>
      <div class="marks-4">
        <p class="marks-text-4">Задания</p>
        <div class="marks-row">
          <img src="../assets/icons/blue-1.png" />
          <img src="../assets/icons/green.png" />
          <img src="../assets/icons/pur.png" />
          <img src="../assets/icons/blue-2.png" />
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

.person-content-4 {
  display: flex;
  flex-direction: row;
}

.person-block-4 {
  padding: 40px;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid #1957d3;
  border-radius: 25px;
}

.person-header-4 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.person-info-4 {
  width: 70%;
}

.person-title-4 {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #1957d3;
}

.person-text-4 {
  padding: 15px;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: #1957d3;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid #1957d3;
  border-radius: 25px;
}
.marks-text-4 {
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #1957d3;
}
</style>
