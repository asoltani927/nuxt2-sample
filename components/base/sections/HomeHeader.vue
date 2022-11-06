<template>
  <div class="home-header border-sky-900 border-t-8">
    <nav class="flex items-center justify-between flex-wrap px-4 py-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <nuxt-link to="/" class="flex items-center">
          <img
            src="~/assets/logo.png"
            class="fill-current h-10 w-15 ml-2"
            alt=""
          >

          <span class="text-xl font-BIRANSans text-sky-900"> نام فروشگاه </span>
        </nuxt-link>
      </div>
      <div class="block lg:hidden">
        <button
          class="
            flex
            items-center
            px-3
            py-2
            border
            rounded
            border-teal-400
            hover:text-sky-700 hover:border-white
          "
          @click="onToggleMenuClick"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <base-menu-navigation class="hidden lg:block" />
      <base-menu-navigation :is-show="isToggleMenu" class="block lg:hidden" />
    </nav>
  </div>
</template>

<script>
import { TOGGLE_MENU } from '~/store/menu'

export default {

  computed: {
    isLoggedIn () {
      return this.$auth.isLoggedIn
    },

    getUserName () {
      return this.$auth.user.name
    },

    isToggleMenu () {
      return this.$store.getters['menu/isToggleMenu']
    }
  },

  methods: {
    logoutClick () {
      this.$auth.logout()
    },
    onToggleMenuClick () {
      this.$store.dispatch(`menu/${TOGGLE_MENU}`)
    }
  }

}
</script>

<style scoped>
.home-header {
}
</style>
