import { GET_PRODUCTS } from '~/store/products'

export default {

  computed: {
    getTotalProducts () {
      return this.$store.getters['products/total']
    },
    getTotalPageProducts () {
      return this.$store.getters['products/totalPage']
    },
    getProductsRecords () {
      return this.$store.getters['products/records']
    },
    getProductsCount () {
      return this.$store.getters['products/count']
    },
    getProductsPage () {
      return this.$store.getters['products/page']
    },
    getProductsFrom () {
      return this.$store.getters['products/from']
    },
    getProductsTo () {
      return this.$store.getters['products/to']
    },
    productPagination () {
      return {
        current_page: this.getProductsPage + 1,
        last_page: this.getTotalPageProducts,
        per_page: this.getProductsCount,
        to: this.getProductsTo,
        from: this.getProductsFrom
      }
    }
  },

  methods: {
    getProducts (page = 0, count = 15) {
      return this.$store.dispatch(`products/${GET_PRODUCTS}`, {
        page,
        count
      })
    }
  }
}
