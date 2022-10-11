<template>
  <div class="carousel-back" style="position: fixed"></div>
  <div class="carousel-content">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="person-content">
            <div class="person-block">
              <div class="person-header">
                <img src="../assets/icons/person-1.png" />
                <div class="person-info">
                  <p class="person-title">Исследователь</p>
                  <img src="../assets/icons/mark-yellow.png" />
                  <p class="person-title">История</p>
                  <div class="person-history">
                    <p class="person-text">
                      Исследователи, передвигающиеся по территориям банка очень редко, в основном это новые сотрудник которые ещё не влились в ряды метавселенной ВТБ или любители дистанционной работы. Склонны к саморазвитию и быстрому продвежению по
                      карьерной лестинице, но обычно берутся за все дела сразу и не успевают выполнять KPI.
                    </p>
                  </div>
                </div>
              </div>
              <div class="marks">
                <p class="marks-text">Задания</p>
                <img src="../assets/icons/yellow.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="person-content-2">
            <div class="person-block-2">
              <div class="person-header-2">
                <img src="../assets/icons/person-2.png" />
                <div class="person-info-2">
                  <p class="person-title-2">Киллер</p>
                  <img src="../assets/icons/mark-red.png" />
                  <p class="person-title-2">История</p>
                  <div class="person-history-2">
                    <p class="person-text-2">
                      Киллеры всегда наравят быть первыми, превосходство над иными игроками, уважающие преимущества власти, стремящиеся к победе любой ценой. Они не против использовать для этого все лазейки метавселенной ВТБ.
                    </p>
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
        </div>
        <div class="carousel-item">
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
        </div>
        <div class="carousel-item">
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
import TheLike from './TheLike.vue'
export default { components: { TheLike } }
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.person-content {
  display: flex;
  flex-direction: row;
}

.person-block {
  padding: 40px;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid $yellow;
  border-radius: 25px;
}

.person-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.person-info {
  width: 70%;
}

.person-title {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #d5b300;
}

.person-text {
  padding: 15px;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: #ab9000;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid #ab9000;
  border-radius: 25px;
}
.marks-text {
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #d5b300;
}
</style>
