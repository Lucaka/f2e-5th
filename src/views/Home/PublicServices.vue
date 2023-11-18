<script setup lang="ts">
import LogoTitle from '@/views/Home/components/LogoTitle.vue'
</script>

<template>
  <div class="relative">
    <div class="relative top-14">
      <LogoTitle :title="$t('min-zhong-fu-wu')" />
    </div>

    <div class="container mx-auto bg-secondary section-rounded text-primary text-2xl pt-10">
      <p>我們在這裡，為您提供幫助，</p>
      <p>請透過表單留下您的聯絡資訊，由專人與您聯繫，謝謝</p>
    </div>
  </div>
</template>
