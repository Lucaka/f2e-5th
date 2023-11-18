<template>
  <section class="about">
    <div class="about-content">
      <h1 class="text-[2rem] mb-2 hidden lg:block">{{ $t('guan-yu-ying-yu') }}</h1>
      <blockquote cite="https://2023.thef2e.com/users/12061579704042550482">
        <p class="about-info section-rounded">
          {{ $t('chu-sheng-yu-abuot') }}
        </p>
      </blockquote>
    </div>

    <figure class="mb-0 lg:mb-14">
      <figcaption class="block lg:hidden text-[2rem] mb-4 text-primary text-center">
        {{ $t('guan-yu-ying-yu') }}
      </figcaption>
      <img
        src="@/assets/img/Personal-1.jpg"
        class="lg:max-w-[636px] max-w-full rounded-lg shadow"
        alt="Personal"
        style="box-shadow: 16px 0px 16px rgba(0, 0, 0, 0.25)"
      />
    </figure>
  </section>
</template>

<style scoped>
.text-warp {
  @media (max-width: 1024px) {
    text-wrap: wrap;
  }
}

.about {
  @apply flex-col;
  @apply flex lg:flex-row flex-col-reverse justify-end items-center relative;
}

.about-content {
  @apply text-primary lg:absolute lg:bottom-0 lg:left-0 lg:max-w-none max-w-[636px];
}

.about-info {
  @apply  px-6 py-16;
  @apply whitespace-pre bg-secondary text-2xl leading-[3rem];
  @apply text-warp;
}
</style>
