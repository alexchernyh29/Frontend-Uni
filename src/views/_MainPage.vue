<template>
  <div class="container-fluid">
    <div class="row">
      <TheSidebarNew />
      <TheHeader />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import HomePage from '@/views/HomePage.vue'
import TheHeaderNew from '../components/TheSidebarNew.vue'
import TheSidebarNew from '../components/TheSidebarNew.vue'
import TheHeader1 from '../components/TheHeader.vue'

export default {
  components: { TheHeader, TheSidebar, HomePage, TheHeaderNew, TheSidebarNew, TheHeader1 },
}
</script>
