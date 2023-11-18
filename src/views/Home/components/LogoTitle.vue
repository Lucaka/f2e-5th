<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    background: 'bg-secondary' | null
  }>(),
  {
    background: 'bg-secondary'
  }
)
</script>

<template>
  <figure class="relative hidden lg:block">
    <img src="@/assets/img/whale.png" alt="whale" class="m-auto" />
    <figcaption class="text-white text-[2rem] absolute top-1/2 left-1/2 -translate-x-1/2">
      {{ title }}
    </figcaption>
  </figure>

  <figure
    class="h-[80px] items-center justify-between py-3 px-4 flex lg:hidden"
    :class="{ [background]: true }"
  >
    <figcaption class="text-primary text-[2rem]">
      {{ title }}
    </figcaption>
    <img src="@/assets/img/whale.png" alt="whale" class="h-full" />
  </figure>
</template>
