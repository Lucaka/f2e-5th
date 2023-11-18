<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import EventItem from '@/views/Home/EventItem.vue'
import LogoTitle from '@/views/Home/components/LogoTitle.vue'

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
  <LogoTitle :title="title" />

  <div class="lg:grid grid-cols-3 gap-4 hidden">
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
