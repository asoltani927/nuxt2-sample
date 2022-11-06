<template>
  <div
    class="
      rounded-lg
      relative
      hover:-mt-2
      overflow-hidden
      cursor-pointer
      transition-all
    "
  >
    <nuxt-link :to="product.Url">
      <img
        class="product-thumbnail rounded-lg"
        src="~/assets/images/phone.jpg"
        :alt="product.TitleEn"
        :title="product.TitleEn"
      >
      <div
        class="
          bg-white bg-opacity-50
          hover:bg-opacity-90
          p-2
          absolute
          bottom-0
          transition-all
        "
      >
        <h2 class="font-BIRANSans" :title="product.TitleEn">
          {{ product.Title }}
        </h2>
        <div>
          <span>{{ product.Category }}</span>
          <span>{{ product.SubCategory }}</span>
          <span>{{ product.SubCategoryItem }}</span>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      dafault: () => {
        return {
          Index: 1,
          Id: '2361428',
          Category: 'کالای دیجیتال',
          SubCategory: 'موبایل',
          SubCategoryItem: 'گوشی موبایل',
          Title:
            'گوشی موبایل سامسونگ مدل Galaxy A51 SM-A515F/DSN دو سیم کارت ظرفیت 128گیگابایت',
          TitleEn:
            'Samsung Galaxy A51 SM-A515F/DSN Dual SIM 128GB With 6GB Ram Mobile Phone',
          Data: {
            id: 2361428,
            name: 'گوشی موبایل سامسونگ مدل Galaxy A51 SM-A515F/DSN دو سیم کارت ظرفیت 128گیگابایت',
            category: 'گوشی موبایل',
            brand: 'Samsung',
            variant: 7434572,
            price: 64990000,
            quantity: 0
          },
          Url: '/product/dkp-2361428/گوشی-موبایل-سامسونگ-مدل-galaxy-a51-sm-a515fdsn-دو-سیم-کارت-ظرفیت-128گیگابایت'
        }
      },
      type: Object
    }
  }
}
</script>

<style>
.product-thumbnail {
  max-width: 100%;
}
</style>
