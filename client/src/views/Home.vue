<script setup></script>

<template>
  <div class="relative w-full h-screen flex flex-row">
    <div class="absolute left-0 flex items-center justify-start w-2/4 h-full">
      <img
        class="h-3/4"
        src="../../public/resources/hero-left.png"
        alt="window-img"
      />
    </div>
    <div class="absolute right-0 flex items-center justify-end w-2/4 h-full">
      <img
        class="h-3/4"
        src="../../public/resources/hero-right.png"
        alt="window-img"
      />
    </div>
  </div>
</template>

<style lang="scss">
body {
  overflow: hidden;
}
</style>
