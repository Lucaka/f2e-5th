<template>
  <footer>
    <div class="element hidden lg:block">
      <img src="@/assets/img/Tail.png" />
    </div>

    <div class="loader">
      <div class="info">
        <p>{{ $t('chen-ying-yu-fu-wu-chu') }}</p>
        <div class="flex gap-14 flex-wrap justify-center">
          <p>
            <UtilIcon name="IconGeo" class="inline-block w-4 mr-4"/>
            {{ $t('hai-xing-qu-ting-hai-da-dao-88-hao-feng-li-da-lou-3-lou') }}
          </p>
          <p>
            <UtilIcon name="IconTelephone" class="inline-block w-4 mr-4"/>
            <a href="tel:02878-9487">(02) 878-9487</a>
          </p>
          <a href="mailto: meowoffice@linmeow.tw" class="underline">
            {{ $t('email') }}：meowoffice@linmeow.tw
          </a>
        </div>
        <!-- service time -->
        <p>{{ $t('service-time') }}</p>
        <!-- copyright -->
        <p>{{ $t('copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-10px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}

img {
  width: 300px;
  height: 300px;
  max-width: none;
}

.element {
  width: 20px;
  height: 20vh;
  animation: shake 6s infinite;
}

/* HTML: <div class="loader"></div> */
.loader {
  height: 250px;
  background:
    radial-gradient(circle 21px at top, #0000 94%, #1d3260) 0 20px,
    radial-gradient(circle 21px at top, #0000 94%, #a2b6df) 0 10px,
    radial-gradient(circle 21px at top, #0000 94%, #6b8cce) 0;
  background-size: 20px 100%;
  background-repeat: repeat-x;
  animation: l7 1s infinite linear;
}
@keyframes l7 {
  50% {
    background-position:
      10px 15px,
      -10px 12px,
      15px 8px;
  }
  100% {
    background-position:
      20px 20px,
      -20px 10px,
      20px 0px;
  }
}

.info {
  @apply flex flex-col gap-5;
  @apply text-secondary text-center relative top-16 bg-primary;
}
</style>
