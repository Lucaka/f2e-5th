<script lang="ts" setup>
export interface LatestEvent {
  date: string
  img: string
  title: string
  content: string
  link: string
}

withDefaults(
  defineProps<{
    item: LatestEvent
  }>(),
  {}
)
</script>
<template>
  <div class="flex flex-col p-4 text-primary">
    <p class="mb-2 px-4" >{{ item.date }}</p>
    <img class="mb-4" :src="item.img" alt="event" />
    <p class="text-xl mb-4 px-4">{{ item.title }}</p>
    <p class="px-4 mb-14">{{ item.content }}</p>
    <a :href="item.link" class="btn mt-auto">
      {{ $t('read-more') }}
    </a>
  </div>
</template>
