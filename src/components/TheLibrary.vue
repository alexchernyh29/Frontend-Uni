<template>
  <div class="library">
    <div class="category">
      <div class="category-card">
        <img src="../assets/icons/icon_book-1.svg" />
        <p class="text">Все</p>
      </div>
      <div class="category-card">
        <img src="../assets/icons/icon_book-2.svg" />
        <p class="text">It</p>
      </div>
      <div class="category-card">
        <img src="../assets/icons/icon_book-3.svg" />
        <p class="text">HR</p>
      </div>
      <div class="category-card">
        <img src="../assets/icons/icon_book-4.svg" />
        <p class="text">Маркетинг</p>
      </div>
      <div class="category-card">
        <img src="../assets/icons/icon_book-5.svg" />
        <p class="text">Бизнес</p>
      </div>
    </div>
    <div class="library-actions">
      <h4 class="category-title">Популярные</h4>
      <div class="swap">
        <i class="bi bi-arrow-left-circle"></i>
        <i class="bi bi-arrow-right-circle"></i>
      </div>
    </div>
    <div class="slider">
      <div class="slide">
        <img class="img-book" src="../assets/icons/img-book-1.png" />
        <p class="book-title">«Программист-прагматик. Путь от подмастерья к мастеру»</p>
        <p class="book-author">Авторы: Э. Хант, Д. Томас.</p>
        <p class="book-type">It</p>
      </div>
      <div class="slide">
        <img class="img-book" src="../assets/icons/img-book-2.png" />
        <p class="book-title">«Говорят, в IT много платят»</p>
        <p class="book-author">Автор: Елена Правдина.</p>
        <p class="book-type">It</p>
      </div>
      <div class="slide">
        <img class="img-book" src="../assets/icons/img-book-3.png" />
        <p class="book-title">«Путь программиста: человек эпохи IT» (2016)</p>
        <p class="book-author">Автор: Джон Сонмез.</p>
        <p class="book-type">It</p>
      </div>
      <div class="slide">
        <img class="img-book" src="../assets/icons/img-book-4.png" />
        <p class="book-title">«#Сам себе программист. Как научиться программировать и устроиться в Ebay?»</p>
        <p class="book-author">Автор: Кори Альтхофф.</p>
        <p class="book-type">It</p>
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
.library {
  padding: 30px 0 0 30px;
}
.category {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.category-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  transition: 1s;
}

.category-card:hover {
  transform: scale(1.2);
}

.text {
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: $blue;
}

.category-title {
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: $blue;
}
.library-actions {
  margin: 60px 0 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.swap {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.slide {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
}

.slider {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.book-title {
  width: 250px;
  padding-top: 10px;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: $blue;
}

.img-book {
  width: 100px;
}

.book-author {
  padding-top: 10px;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  color: $dark-blue;
}
</style>
