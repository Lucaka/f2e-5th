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

const menuTrigger = ref(false)
</script>

<template>
  <header class="sticky top-0 z-10">
    <nav class="navbar">
      <figure class="flex items-center gap-2 flex-shrink-0">
        <img src="@/assets/img/logo.png" alt="logo" class="w-20" />
        <figcaption>{{ $t('chen-ying-yu') }}</figcaption>
      </figure>

      <ul class="gap-8 hidden lg:flex">
        <li v-for="(item, index) in navbarItems" :key="index">
          <a :href="item.href" class="hover:text-primary"> {{ item.name }} </a>
        </li>
      </ul>

      <ul class="gap-8 hidden lg:flex">
        <li v-for="(item, index) in officialItems" :key="index">
          <a :href="item.href" target="_blank" class="hover:text-primary">
            <UtilIcon :name="item.icon" />
          </a>
        </li>
      </ul>

      <input type="checkbox" id="menu" class="hidden" v-model="menuTrigger" />
      <label for="menu" class="lg:hidden cursor-pointer hover:text-primary">
        <UtilIcon name="IconHamburger" />
      </label>
      <div class="menu-item p-8">
        <ul class="menu-items mb-8">
          <li v-for="(item, index) in navbarItems" :key="index" @click="menuTrigger = false">
            <a :href="item.href">
              {{ item.name }}
            </a>
          </li>
        </ul>

        <ul class="menu-items">
          <li v-for="(item, index) in officialItems" :key="index">
            <a :href="item.href" target="_blank">
              <UtilIcon class="inline-block" :name="item.icon" />
            </a>
          </li>
        </ul>
      </div>
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

.menu-item {
  @apply text-2xl top-[100px] w-screen h-full overflow-auto;
  @apply transition-all duration-500 ease-in-out fixed left-full lg:!left-full;

  background: linear-gradient(to right, #1d3260 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%);
}

.menu-items {
  @apply gap-8 flex flex-col items-center;
}

.menu-items li {
  @apply py-2 px-4;
}

.menu-items li:hover {
  @apply py-2 px-4 outline-primary/60 outline-[1000px] outline;
}

#menu:checked ~ .menu-item {
  @apply left-0;
}
</style>
