<template>
  <div class="home-header border-sky-900 border-t-8">
    <nav class="flex items-center justify-between flex-wrap px-4 py-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img
          src="~/assets/logo.png"
          class="fill-current h-10 w-15 ml-2"
          alt=""
        >

        <span class="text-xl font-BIRANSans text-sky-900"> نام فروشگاه </span>
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
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:mr-4">
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
            to="#"
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
            درخواست دمو
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
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.home-header {
}
</style>
