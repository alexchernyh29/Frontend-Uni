<template>
  <nav class="col-3 col-xl-2 d-flex flex-column flex-shrink-0 p-3 text-bg-dark fixed-top vh-100">
    <a href="/" class="d-flex align-items-center text-white text-decoration-none fs-4">
      <span>LOGO</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li v-for="(menuLink, index) in menuLinks" :key="index" class="mb-3">
        <router-link class="nav-link text-light" :class="{ active: menuLink.alias === currentMenuLink }" :to="menuLink.url" @click="currentMenuLink = menuLink.alias">{{ menuLink.title }}</router-link>
      </li>
    </ul>
    {{ alias }}
  </nav>
</template>

<script>
export default {
  data() {
    return {
      currentMenuLink: this.$route.meta.alias,
      menuLinks: [
        { title: 'Главная', alias: 'home', url: '/' },
        { title: 'Ивенты', alias: 'events', url: '/events' },
        { title: 'Статистика', alias: 'statistics', url: '/statistics' },
        { title: 'Магазин', alias: 'shop', url: '/shop' },
        { title: 'Мероприятия', alias: 'tasks', url: '/tasks' },
        { title: 'Соревнования', alias: 'competitions', url: '/competitions' },
      ],
    }
  },
  computed: {
    alias() {
      this.currentMenuLink = this.$route.meta.alias
    },
  },
}
</script>
