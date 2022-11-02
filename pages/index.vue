<template>
  <div>
    <div class="grid grid-cols-1 gap-6 px-12 py-8 lg:grid-cols-8">
      <div class="lg:col-span-2">
        <pages-store-filter-sidebar />
      </div>
      <div class="lg:col-span-6 h-80">
        <pages-store-filter-toolbar />
        <div class="text-xs mb-4 p-2 text-gray-500 font-iransans">
          در حال نمایش نتایج <u>1</u> الی <u>12</u> از مجموع <u>621</u> نتیجه
          یافت شده در 0.037 ثانیه
        </div>
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
