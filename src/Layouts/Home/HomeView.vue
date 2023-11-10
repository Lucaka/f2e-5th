<script setup lang="ts">
// components
import NavbarView from '@/Layouts/Home/components/NavbarView.vue'
import FooterView from '@/Layouts/Home/components/FooterView.vue'
</script>

<template>
  <div class="flex flex-col h-full">
    <NavbarView />
    <main class="h-full ">
      <RouterView />
    </main>
    <FooterView />
  </div>
</template>
