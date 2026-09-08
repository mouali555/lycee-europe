<template>
  <div>
    <!-- Canvas de fond animé (persistant sur toutes les pages) -->
    <div class="bg-canvas">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
      <div class="blob blob-4"></div>
    </div>

    <!-- Routeur de pages -->
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: '%s — Lycée Europe',
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🎓</text></svg>' }
  ]
})
</script>

<style>
/* Styles globaux complémentaires */
#__nuxt { isolation: isolate; }
</style>