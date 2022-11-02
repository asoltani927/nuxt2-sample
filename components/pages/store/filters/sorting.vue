<template>
  <div class="border-gray-300 rounded-lg border mb-4 p-2">
    <div class="flex">
      <div class="flex-grow">
        <i class="fal fa-arrow-up-short-wide" /> مرتب سازی
      </div> <div class="flex-grow-0 flex-shrink-0 w-10 text-left">
        <i class="fal fa-plus fa-fw bg-gray-100 rounded-full cursor-pointer" />
      </div>
    </div> <div class="flex">
      <select class="appearance-none border rounded-lg w-full block mt-1 px-2 py-1 bg-gray-100 outline-none text-xs">
        <option value="-" selected="selected">
          مرتب سازی پیش‌فرض
        </option> <option value="price_now_asc">
          بر اساس قیمت - صعودی
        </option><option value="price_now_des">
          بر اساس قیمت - نزولی
        </option><option value="rate_asc">
          بر اساس امتیاز - صعودی
        </option><option value="rate_des">
          بر اساس امتیاز - نزولی
        </option><option value="release_date_asc">
          بر اساس تاریخ انتشار - صعودی
        </option><option value="release_date_des">
          بر اساس تاریخ انتشار - نزولی
        </option>
      </select>
    </div> <!---->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
