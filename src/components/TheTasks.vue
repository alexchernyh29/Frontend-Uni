<template>
  <div>
    <div class="card" style="width: 100%">
      <div class="card-header">
        <span>Мероприятия</span>
      </div>
      <div class="card-body" style="overflow-y: auto">
        <TheTasksCard class="mb-3" />
        <TheTasksCard class="mb-3" />
        <TheTasksCard class="mb-3" />
        <TheTasksCard class="mb-3" />
      </div>
    </div>
  </div>
</template>

<script>
import TheTasksCard from './TheTasksCard.vue'
export default { components: { TheTasksCard } }
</script>
