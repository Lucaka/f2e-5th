<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import EventItem from '@/views/Home/EventItem.vue'

import type { LatestEvent } from '@/views/Home/EventItem.vue'

withDefaults(
  defineProps<{
    title: string
    list: LatestEvent[]
  }>(),
  {}
)
</script>

<template>
  <figure class="relative">
    <img src="@/assets/img/whale.png" alt="whale" class="m-auto" />
    <figcaption class="text-white text-[2rem] absolute top-1/2 left-1/2 -translate-x-1/2">
      {{ title }}
    </figcaption>
  </figure>

  <div class="lg:grid grid-cols-3 gap-4 hidden ">
    <EventItem :item="item" v-for="(item, index) in list" :key="index" />
  </div>

  <carousel class="lg:hidden">
    <slide v-for="(item, index) in list" :key="index">
      <EventItem :item="item" class="text-left" />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>
