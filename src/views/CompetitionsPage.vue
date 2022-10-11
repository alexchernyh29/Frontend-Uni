<template>
  <div class="col-9 col-xl-10 ms-auto my-3">
    <div class="row">
      <div class="col-3">
        <CompetitioinType :type="types[0]" />
      </div>
    </div>
  </div>
</template>

<script>
import CompetitioinType from '@/components/CompetitioinType.vue'

export default {
  data() {
    return {
      types: [{ icon: 'bi-binoculars', title: 'Исследователь' }],
    }
  },
  components: { CompetitioinType },
}
</script>
