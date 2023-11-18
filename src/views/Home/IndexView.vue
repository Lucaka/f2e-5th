<script setup lang="ts">
import AboutView from '@/views/Home/AboutView.vue'
import LatestEventsView from '@/views/Home/LatestEvents.vue'
</script>

<template>
  <img src="@/assets/img/banner.jpg" alt="banner" class="mb-6"/>

  <AboutView id="activity" class="container mx-auto p-4"/>
  <LatestEventsView class=""/>
</template>
