<template>
  <div class="grid grid-cols-1 gap-6 px-12 py-8 lg:grid-cols-3">
    <div />
    <div>
      <p class="font-bold arabic-font text-lg">
        ورود به حساب کاربری
      </p>
      <p class="font-normal text-gray">
        برای دسترسی به تمام امکانات سایت وارد حساب کاربری خود شوید.
      </p>
      <div class="mt-16 text-right">
        <label for="username" class="mobile:text-sm mobile:pr-2">
          نام کاربری
        </label>

        <input
          id="username"
          v-model="username"
          type="text"
          autocomplete="off"
          required
          class="
            w-full
            mt-4
            py-3
            bg-gray-2
            px-4
            rounded-lg
            text-right
            focus:outline-none
          "
          :class="{ 'border border-orange ': $v.username.$error }"
        >

        <div
          v-if="$v.username.$error"
          class="text-xs text-orange flex gap-2 mt-2"
        >
          <span v-if="!$v.username.required"> پرکردن این قسمت الزامی است </span>
          <span v-if="!$v.username.maxLength">
            حداکثر تعداد مجاز کاراکتر رعایت نشده است</span>
        </div>
      </div>

      <div class="mt-5 text-right">
        <label for="password"> کلمه عبور </label>

        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="کلمه عبور"
          required
          class="
            w-full
            mt-4
            py-3
            bg-gray-2
            px-4
            rounded-lg
            text-right
            focus:outline-none
          "
          :class="{ 'border border-orange ': $v.password.$error }"
        >

        <div
          v-if="$v.password.$error"
          class="text-xs text-orange flex gap-2 mt-2"
        >
          <span v-if="!$v.password.required"> پرکردن این قسمت الزامی است </span>
          <span v-if="!$v.password.maxLength">
            حداکثر تعداد مجاز کاراکتر رعایت نشده است</span>
        </div>
      </div>

      <button
        class="
          block
          w-full
          text-sm
          px-4
          py-2
          border
          rounded
          border-sky-900
          hover:border-transparent hover:text-white hover:bg-sky-900
          mt-4
        "
        @click="onLoginClick"
      >
        ورود
      </button>
      <p
        class="
          font-normal
          text-sm text-gray
          rtl
          mt-6
          mobile:text-sm mobile:mt-8
        "
      >
        آیا حساب کاربری ندارید؟
        <span
          class="text-sm text-blue cursor-pointer"
        >ایجاد حساب کاربری</span>
      </p>
    </div>
    <div />
  </div>
</template>
<script>
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  data: () => ({
    username: null,
    password: null
  }),

  validations: {
    username: {
      required,
      maxLength: maxLength(255)
    },
    password: {
      required,
      maxLength: maxLength(255)
    }
  },

  computed: {},

  methods: {
    async onLoginClick () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        await this.$auth
          .loginWith('local', {
            data: {
              username: this.username,
              password: this.password
            }
          })
          .then(() => {
            this.$router.push('/')
          })
          .catch((error) => {
            this.$toast.error(error.message)
          })
      }
    }
  }
}
</script>
