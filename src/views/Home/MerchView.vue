<script setup lang="ts">
import { computed } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import LogoTitle from '@/views/Home/components/LogoTitle.vue'

import product1 from '@/assets/img/product.jpg'
import product2 from '@/assets/img/product-2.jpg'
import product3 from '@/assets/img/product-3.jpg'

const productItems = computed(() => [product2, product1, product3])
</script>

<template>
  <div class="relative">
    <div class="earth" />

    <div class="lg:mb-10 relative">
      <LogoTitle :title="$t('yu-yu-xiao-wu')" :background="null" />
    </div>

    <carousel class="lg:hidden p-4">
      <slide v-for="(item, index) in productItems" :key="index">
        <img :src="item" alt="product" />
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>

    <div class="lg:bg-secondary section-rounded">
      <div class="container mx-auto py-8 relative">
        <div class="hidden lg:block mb-10">
          <div class="grid grid-cols-3 gap-6">
            <img :src="item" alt="product" v-for="(item, index) in productItems" :key="index" />
          </div>
        </div>

        <div class="flex justify-between flex-col lg:flex-row items-center gap-6">
          <p class="lg:w-8/12 px-5 lg:px-10 text-primary">
            拒絕一次性用品，環保小物可以陪伴你一輩子。選擇可持續，選擇環保。
            更多渝渝環保小物，請前往蝦皮賣場參考選購。
          </p>

          <div>
            <a href="" class="btn whitespace-nowrap w-auto leading-[2] inline-block">
              {{ $t('qian-wang-xia-pi-mai-chang') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.earth {
  border-radius: 50%;
  overflow: hidden;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/306097/QxUBld.jpg) 50% 50% / cover;
  animation: earthRotate 8s infinite linear;

  @apply absolute top-0 lg:top-16 left-1/2 -translate-x-1/2;
  @apply w-screen h-[100vw] max-w-[636px] max-h-[636px];
}

@keyframes earthRotate {
  100% {
    background-position: 250% 50%;
  }
}
</style>
