<template>
  <div>
    <div class="grid grid-cols-1 gap-6 px-12 py-8 lg:grid-cols-8">
      <div class="lg:col-span-2">
        <pages-store-filter-sidebar />
      </div>
      <div class="lg:col-span-6">
        <pages-store-filter-toolbar />
        <div class="text-xs mb-4 p-2 text-gray-500 font-iransans">
          در حال نمایش نتایج <u>{{ getProductsFrom }}</u> الی
          <u>{{ getProductsTo }}</u> از مجموع <u>{{ getTotalProducts }}</u>
        </div>
        <pages-store-filter-Items />

        <div class="my-4">
          <base-my-pagination
            :pagination="productPagination"
            @change="onChangePagination"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productsMixin from '~/mixins/products.mixin'

export default {
  name: 'IndexPage',

  mixins: [productsMixin],

  fetchOnServer: false,

  async fetch () {
    await this.getProducts()
  },

  methods: {
    async onChangePagination (pagination) {
      await this.getProducts(pagination.page - 1, pagination.count)
    }
  }
}
</script>
