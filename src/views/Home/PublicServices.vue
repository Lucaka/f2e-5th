<script setup lang="ts">
import LogoTitle from '@/views/Home/components/LogoTitle.vue'
</script>

<template>
  <div class="relative">
    <div class="relative top-14">
      <LogoTitle :title="$t('min-zhong-fu-wu')" />
    </div>

    <div
      class="container mx-auto bg-secondary section-rounded text-primary text-2xl pt-10 text-center"
    >
      <p class="lg:whitespace-pre  lg:leading-[3rem] py-14 bg-white lg:bg-secondary">
        {{ `我們在這裡，為您提供幫助，\n請透過表單留下您的聯絡資訊，由專人與您聯繫，謝謝` }}
      </p>

      <form>
        <div class="section-rounded border-4 border-white lg:max-w-[850px] mx-auto p-2">
          <p class="form-group">民眾服務表單</p>
          <div class="flex flex-col text-left lg:px-32">
            <div class="form-group">
              <label for="name">姓名</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="form-group">
              <label for="phone">行動電話</label>
              <input type="text" id="phone" name="phone" required />
            </div>
            <div class="form-group">
              <label for="email">電子信箱</label>
              <input type="text" id="email" name="email" required />
            </div>
            <div class="form-group">
              <label for="message" class="!block">留下您的訊息</label>
              <textarea id="message" name="message" rows="5" class="w-full" required></textarea>
            </div>
          </div>
        </div>

        <button class="btn my-12" type="submit">提交</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.form-group {
  @apply mb-6;
}

.form-group label {
  @apply w-[220px] inline-block text-left;
}
.form-group label::after {
  content: '*';
  @apply text-[red];
}
</style>
