<script setup lang="ts">
import { computed } from 'vue'
import AboutView from '@/views/Home/AboutView.vue'
import LatestEventsView from '@/views/Home/LatestEvents.vue'
import MerchView from '@/views/Home/MerchView.vue'
import PublicServices from '@/views/Home/PublicServices.vue'

import event1 from '@/assets/img/event-1.jpg'
import event2 from '@/assets/img/event-2.jpg'
import event3 from '@/assets/img/event-3.png'
import event4 from '@/assets/img/Blue_1.png'
import event5 from '@/assets/img/Blue_2.png'
import event6 from '@/assets/img/Blue_3.png'

const LatestEvents = computed(() => [
  {
    date: '2023/12/26',
    img: event1,
    title: '參與台北環保論壇，爭取海洋友善環境',
    content: `炎炎夏日的周六，我走進了台北環保論壇，\n決定要全力宣傳「鯨魚至上」的理念！\n我相信，鯨魚在海洋中，\n每一隻都應該有自己的 VIP 休憩空間。`,
    link: ''
  },
  {
    date: '2023/12/26',
    img: event2,
    title: '掃街模式開啟！帶起鯨魚帽來和我一起走！',
    content:
      '街上氣氛真的很棒，從小孩到大人，甚至有些朋友都穿著由義大利知名設計師Sit Down Please所打造的經典龍蝦裝來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「海洋友善環境」政策的決心。',
    link: ''
  },
  {
    date: '2023/12/26',
    img: event3,
    title: '香香的烤魷魚活動！',
    content:
      '為了推廣海洋生物永續生存的重要，讓更多人一起愛護海洋，我們舉辦了一場前所未有的「烤魷魚活動」！',
    link: ''
  }
])

const policyIssues = computed(() => [
  {
    date: '2023/10/15',
    img: event4,
    title: '為鯨魚謀福利！推動鯨魚保障方案',
    content:
      '鯨魚在海洋生態系統中扮演著重要的角色，如果它們消失或減少，將對海洋生態平衡、生物多樣性、氣候和經濟產生深遠的影響。保護鯨魚是維護海洋健康和全球生態平衡的關鍵一步。因此，陳英渝提出鯨魚保障方案，讓牠們生生不息。',
    link: ''
  },
  {
    date: '2023/11/21',
    img: event5,
    title: '減少海洋污染，維護海洋生態系統',
    content:
      '減少海洋污染並保護海洋生態系統是保護地球生態平衡、氣候穩定、經濟和文化遺產的必要措施。它需要全球努力，包括政府、企業和個人的參與，以確保我們的海洋保持健康、可持續和繁榮因此，陳英渝提出友善海洋方案，還原海洋的面貌，給予海綿寶寶一個乾淨的家園。',
    link: ''
  },
  {
    date: '2023/12/28',
    img: event6,
    title: '推廣海洋保護教育，讓愛更加專業',
    content:
      '海洋教育推廣有助於保護我們的海洋、促進可持續發展，以及培養新一代的環保者和海洋保護者。這對於維護地球生態平衡和可持續未來至關重要。因此，陳英渝提出海洋保護教育方案，提高公眾對海洋的認識、關心和參與。',
    link: ''
  }
])
</script>

<template>
  <img src="@/assets/img/banner.jpg" alt="banner" class="mb-6" />

  <AboutView class="container mx-auto p-4" />

  <div class="lg:bg-secondary section-rounded mt-40">
    <div class="relative -top-36">
      <div id="activity" class="title mb-10">
        <LatestEventsView :list="LatestEvents" :title="$t('lates-events')" />
      </div>
      <div id="policy" class="title mb-10">
        <LatestEventsView :list="policyIssues" :title="$t('zheng-ce-yi-ti')" />
      </div>
    </div>
  </div>

  <MerchView />

  <!-- <PublicServices /> -->
</template>

<style scoped>
.title::before {
  @apply block invisible h-[100px] -mt-[100px];
  content: '';
}
</style>
