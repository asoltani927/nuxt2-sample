<template>
  <div class="grid grid-cols-1  md:grid-cols-2 gap-4 py-3 px-6 lg:grid-cols-4">
    <pages-store-filter-Item
      v-for="(item, key) in getProductsRecords"
      :key="`product-${key}`"
      :product="item"
    />
  </div>
</template>

<script>
import productsMixin from '~/mixins/products.mixin'
export default {
  mixins: [productsMixin]
}
</script>

<style>
</style>
