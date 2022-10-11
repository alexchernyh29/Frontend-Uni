<template>
  <div class="sidebar-bg">
    <img class="logo" src="../assets/icons/logo.png" />
    <ul>
      <li v-for="(menuLink, index) in menuLinks" :key="index">
        <router-link class="link" :class="{ active: menuLink.alias === currentMenuLink }" :to="menuLink.url" @click="currentMenuLink = menuLink.alias">{{ menuLink.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMenuLink: this.$route.meta.alias,
      menuLinks: [
        { title: 'Главная', alias: 'home', url: '/' },
        { title: 'Личный кабинет', alias: 'personalarea', url: '/personalarea' },
        { title: 'Ивенты', alias: 'events', url: '/events' },
        { title: 'Развитие', alias: 'statistics', url: '/statistics' },
        { title: 'Магазин', alias: 'shop', url: '/shop' },
        { title: 'Мероприятия', alias: 'tasks', url: '/tasks' },
        { title: 'Персонаж', alias: 'person', url: '/person' },
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

<style lang="scss">
@import '@/assets/styles/vars.scss';
.sidebar-bg {
  z-index: 1;
  position: fixed;
  top: 20px;
  left: 15px;
  width: 300px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 25px;
}

.logo {
  padding: 25px 0 0 35px;
}

.links {
  transition: none;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: $green;
}

li {
  margin-bottom: 40px;
}
a {
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: $green;
}

a:hover {
  color: $yellow;
}

ul {
  padding-top: 60px;
  list-style-type: none;
}
</style>
