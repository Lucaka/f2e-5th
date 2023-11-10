<template>
  <footer>
    <div class="element">
      <img src="@/assets/img/Tail.png" />
    </div>

    <div class="loader">
      <div class="info">
        <p>陳英渝服務處</p>
        <div class="flex gap-14 flex-wrap justify-center">
          <p>海星區聽海大道88號鳳梨大樓3樓</p>
          <p>(02) 878-9487</p>
          <p>信箱：meowoffice@linmeow.tw</p>
        </div>
        <p>服務時間:週一至週五 9:00 - 18:00</p>
        <p>版權聲明：© 2023 陳英渝版權所有</p>
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
  @apply text-secondary text-center relative top-16 
}
</style>
