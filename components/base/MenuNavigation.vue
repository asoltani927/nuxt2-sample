<template>
  <div v-show="isShow" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:mr-4">
    <div class="text-sm lg:flex-grow">
      <nuxt-link
        to=""
        class="block mt-4 lg:inline-block lg:mt-0 hover:text-sky-700 ml-4"
      >
        خانه
      </nuxt-link>
      <nuxt-link
        to="/about"
        class="block mt-4 lg:inline-block lg:mt-0 hover:text-sky-700 ml-4"
      >
        درباره ما
      </nuxt-link>
      <nuxt-link
        to="/demo"
        class="block mt-4 lg:inline-block lg:mt-0 hover:text-sky-700 ml-4"
      >
        دمو
      </nuxt-link>
      <nuxt-link
        to="/pricing"
        class="block mt-4 lg:inline-block lg:mt-0 hover:text-sky-700 ml-4"
      >
        قیمت گذاری
      </nuxt-link>
      <nuxt-link
        to="/pricing"
        class="block mt-4 lg:inline-block lg:mt-0 hover:text-sky-700 ml-4"
      >
        راهنما
      </nuxt-link>
      <nuxt-link
        to="/pricing"
        class="block mt-4 lg:inline-block lg:mt-0 hover:text-sky-700 ml-4"
      >
        ارتباط باما
      </nuxt-link>
    </div>
    <div>
      <nuxt-link
        v-if="!isLoggedIn"
        to="/login"
        class="
          inline-block
          text-sm
          px-4
          py-2
          leading-none
          border
          rounded
          border-sky-900
          hover:border-transparent hover:text-white hover:bg-sky-900
          mt-4
          lg:mt-0
        "
      >
        ورود
      </nuxt-link>
      <nuxt-link
        v-if="isLoggedIn"
        to="/login"
        class="
          inline-block
          text-sm
          px-4
          py-2
          leading-none
          border
          rounded
          border-sky-900
          hover:border-transparent hover:text-white hover:bg-sky-900
          mt-4
          lg:mt-0
        "
        @click="logoutClick"
      >
        {{ getUserName }} خوش آمدید, خروج
      </nuxt-link>
      <nuxt-link
        to="#"
        class="
          inline-block
          text-sm
          px-4
          py-2
          bg-sky-900
          text-white
          leading-none
          border
          rounded
          border-sky-900
          hover:border-sky-900 hover:text-sky-900 hover:bg-white
          mt-4
          lg:mt-0
        "
      >
        رایگان شروع کنید
      </nuxt-link>
    </div>
  </div>
</template>

<script>

export default {

  props: {
    isShow: {
      default: true,
      type: Boolean
    }
  },

  computed: {
    isLoggedIn () {
      return this.$auth.isLoggedIn
    },

    getUserName () {
      return this.$auth.user.name
    }
  },

  methods: {
    logoutClick () {
      this.$auth.logout()
    }
  }

}
</script>

<style scoped>
</style>
