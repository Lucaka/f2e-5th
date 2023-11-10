<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <span class="text-7xl">{{ $t('hello') }}</span>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
