<script setup lang="ts">
import UtilIcon from '@/components/utils/icon/UtilIcon.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 主要路由清單
const navbarItems = ref([
  {
    name: t('navbar.latestActivity'),
    href: '#activity'
  },
  {
    name: t('navbar.policyIssue'),
    href: '#policy'
  },
  {
    name: t('navbar.publicService'),
    href: '#service'
  },
  {
    name: t('navbar.donate'),
    link: '/donate'
  }
])
// 官方社群清單
type IconType = 'IconInstagram' | 'IconFacebook' | 'IconLine' | 'IconYoutube'
type OfficialItem = {
  name: string
  href: string
  icon: IconType
}
const officialItems = ref<OfficialItem[]>([
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/chenyingyu.tw',
    icon: 'IconInstagram'
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/chenyingyu.tw',
    icon: 'IconFacebook'
  },
  {
    name: 'Line',
    href: 'https://line.me/R/ti/p/%40chenyingyu',
    icon: 'IconLine'
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UC4QXq5XQ3x5y3n4qXqQ1Z0Q',
    icon: 'IconYoutube'
  }
])
</script>

<template>
  <header>
    <nav class="navbar">
      <figure class="flex items-center gap-2 flex-shrink-0">
        <img src="@/assets/img/logo.png" alt="logo" class="w-20" />
        <figcaption>{{ $t('chen-ying-yu') }}</figcaption>
      </figure>

      <ul class="flex gap-8">
        <li v-for="(item, index) in navbarItems" :key="index">
          <a :href="item.href" class="hover:text-primary"> {{ item.name }} </a>
        </li>
      </ul>

      <ul class="flex gap-8">
        <li v-for="(item, index) in officialItems" :key="index">
          <a :href="item.href" target="_blank" class="hover:text-primary">
            <UtilIcon :name="item.icon" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  @apply text-secondary;
  background: linear-gradient(to right, #1d3260 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%);
}

.navbar {
  @apply container mx-auto p-[0.625rem];
  @apply flex justify-between items-center;
}
</style>
