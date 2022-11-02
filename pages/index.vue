<template>
  <div>
    <div class="grid grid-cols-1 gap-6 px-12 py-8 lg:grid-cols-8">
      <div class="lg:col-span-2">
        <pages-store-filter-sidebar />
      </div>
      <div class="lg:col-span-6">
        <pages-store-filter-toolbar />
        <pages-store-filter-Items />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
