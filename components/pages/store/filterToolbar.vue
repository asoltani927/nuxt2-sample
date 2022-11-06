<template>
  <div>
    <div class="flex flex-col lg:flex-row leading-6 text-sm mb-1 w-full">
      <div class="flex fex-grow w-full">
        <div class="relative flex-grow">
          <input v-model="search" type="text" placeholder="قسمتی از نام کتاب ، نویسنده ، مترجم و یا ..." value="" class="bg-gray-100 rounded-lg rounded-l-none border border-l-0 py-2 w-full h-full px-4 outline-none"> <div class="absolute grid grid-cols-1 lg:grid-cols-2 gap-8 w-full p-4 pt-4 bg-dolphin rounded-b-lg text-white mr-2 z-50 max-h-72 overflow-y-auto scrollbar" style="display:none;">
            <div class="p-2 text-xs text-center col-span-2">
              برای مشاهده پیشنهاد عبارتی را وارد کنید
            </div> <!----> <!----> <!----> <!---->
          </div>
        </div> <div class="relative lg:ml-4 bg-gray-100 rounded-lg rounded-r-none border border-r-0 py-2 px-4 whitespace-nowrap">
          <div class="cursor-pointer">
            <i class="fal fa-arrow-down" /> جستجو در : همه کتاب‌ها
          </div> <!---->
        </div>
      </div> <button class="appearance-none bg-gray-100 rounded-lg border py-2 px-4 w-full lg:w-40 mt-4 lg:mt-0" @click="doSearch">
        <i class="fal fa-search" /> جستجو کنید
      </button>
    </div>
  </div>
</template>

<script>
import productsMixin from '~/mixins/products.mixin'
import { SET_PRODUCTS_SEARCH } from '~/store/products'
export default {

  mixins: [productsMixin],

  data () {
    return {
      search: ''
    }
  },

  watch: {
    search () {
      this.$store.dispatch(`products/${SET_PRODUCTS_SEARCH}`, this.search)
    }
  },

  methods: {
    doSearch () {
      this.getProducts()
    }
  }
}
</script>

<style>

</style>
