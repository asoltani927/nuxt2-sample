<template>
  <!-- BEGIN: Pagination -->
  <div
    class="
      intro-y
      col-span-12
      flex flex-wrap
      sm:flex-row sm:flex-nowrap
      items-center
    "
  >
    <ul class="pagination">
      <li v-if="pagination.current_page > 1">
        <a
          class="pagination__link"
          href="javascript:void(0)"
          @click.prevent="changePage(pagination.current_page - 1)"
        >
          <img src="~/assets/images/left-arrow.svg" class="rotate-180" alt="">
        </a>
      </li>
      <li v-for="(page,index) in pagesNumber" :key="`page-pagination-${index}`">
        <a
          href="javascript:void(0)"
          class="pagination__link"
          :class="{'pagination__link--active': page === pagination.current_page}"
          @click.prevent="changePage(page)"
        >{{ page }}</a>
      </li>
      <li v-if="pagination.current_page < pagination.last_page">
        <a
          class="pagination__link"
          href="javascript:void(0)"
          aria-label="Next"
          @click.prevent="changePage(pagination.current_page + 1)"
        >
          <img src="~/assets/images/left-arrow.svg" alt="">
        </a>
      </li>
    </ul>
    <select v-model="count" class="w-20 form-select box mt-3 sm:mt-0">
      <option value="15">
        15
      </option>
      <option value="25">
        25
      </option>
      <option value="35">
        35
      </option>
      <option value="50">
        50
      </option>
    </select>
  </div>
</template>

<script>
export default {

  name: 'MyPagination',

  props: {
    pagination: {
      type: Object,
      required: true
    },
    offset: {
      type: Number,
      default: 4
    }
  },

  data () {
    return {
      page: 1,
      count: 15
    }
  },

  computed: {
    pagesNumber () {
      if (!this.pagination.to) {
        return []
      }
      let from = this.pagination.current_page - this.offset
      if (from < 1) {
        from = 1
      }
      let to = from + (this.offset * 2)
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page
      }
      const pagesArray = []
      for (let page = from; page <= to; page++) {
        pagesArray.push(page)
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.count = this.pagination.per_page
      return pagesArray
    }
  },

  watch: {
    page () {
      this.$emit('change', {
        page: this.page,
        count: this.count
      })
    },
    count () {
      this.$emit('change', {
        page: 1,
        count: this.count
      })
    }
  },

  methods: {
    changePage (page) {
      this.page = page
    }
  }

}
</script>

<style scoped>

.pagination {
    margin-left: auto;
    display: flex;
}

@media (max-width:639px) {
    .pagination {
        margin-right: 0;
        width: 100%
    }
    .pagination li {
        flex: 1 1 0%
    }
    .pagination li:first-child .pagination__link, .pagination li:nth-child(2) .pagination__link, .pagination li:nth-child(3) .pagination__link, .pagination li:nth-child(7) .pagination__link, .pagination li:nth-child(8) .pagination__link, .pagination li:nth-child(9) .pagination__link {
        padding-left: .25rem;
        padding-right: .25rem
    }
}

.pagination li .pagination__link {
    min-width: 40px;
    margin-left: .5rem;
    display: flex;
    display: inline-flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: .375rem;
    border-width: 1px;
    padding: .5rem .75rem;
    font-weight: 500;
    --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    transition-duration: .15s;
    transition-duration: .2s;
    color: rgb(8, 5, 5) !important;
}

.pagination li .pagination__link:hover {
    --tw-border-opacity: 0.9;
    --tw-bg-opacity: 0.9
}

.pagination li .pagination__link:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 transparent)
}

.pagination li .pagination__link:not(button) {
    text-align: right;
}

.pagination li .pagination__link {
    align-items: center;
    justify-content: center;
    border-color: transparent;
    font-weight: 400;
    --tw-text-opacity: 1;
    color: rgba(45, 55, 72, var(--tw-text-opacity));
    --tw-shadow: 0 0 transparent;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow)
}

@media (max-width:639px) {
    .pagination li .pagination__link {
        margin-right: 0;
        min-width: 0
    }
}

.pagination li .pagination__link.pagination__link--active {
    font-weight: 500;
    box-shadow: 0 3px 20px rgba(0, 0, 0, .043137254901960784);
    position: relative;
    border-radius: .375rem;
    border-color: transparent;
    --tw-bg-opacity: 1;
    background-color: rgb(13, 9, 223);
    color: #fff !important;
}

</style>
