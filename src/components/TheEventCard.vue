<template>
  <div class="card">
    <div class="card-header d-flex align-items-center justify-content-between text-bg-primary">
      <span>2022-10-08 12:00</span>
      <!-- <div class="marks">
        <img class="mark" src="../assets/icons/marks_search.png" />
        <img class="mark" src="../assets/icons/marks_search.png" />
      </div> -->
    </div>
    <div class="card-body">
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <span style="color: white">{{ event.Name }}</span>
          <div class="d-flex align-items-center mt-2">
            <span style="color: white" class="me-2">+{{ event.Price }}</span>
            <img class="coin" style="width: 60px" src="../assets/icons/coin-1.png" />
          </div>
        </div>
        <TheLike v-if="mode !== 'Администратор'" />
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import TheLike from './TheLike.vue'

export default {
  props: ['mode', 'event'],
  components: { TheLike },
  beforeMount() {
    this.event.Start = moment(this.event.Start).format('YYYY-MM-DD hh:mm:ss')
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.mark,
.coin {
  width: 14px;
}
</style>
