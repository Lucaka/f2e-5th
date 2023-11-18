<script setup lang="ts">
import IconFacebook from './iconList/IconFacebook.vue'
import IconInstagram from './iconList/IconInstagram.vue'
import IconYoutube from './iconList/IconYoutube.vue'
import IconLine from './iconList/IconLine.vue'
import IconHamburger from './iconList/IconHamburger.vue'
import IconGeo from './iconList/IconGeo.vue'
import IconTelephone from './iconList/IconTelephone.vue'

const icons = {
  IconFacebook,
  IconInstagram,
  IconYoutube,
  IconLine,
  IconHamburger,
  IconGeo,
  IconTelephone
}

type IconType = keyof typeof icons

withDefaults(
  defineProps<{
    name: IconType
  }>(),
  {}
)
</script>

<template>
  <component v-if="name" :is="icons[name]" />
</template>
