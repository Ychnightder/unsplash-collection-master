<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import SearchBar from "../components/SearchBar.vue";
import ImageSearchView from "../components/imageSearchView.vue";
import { fetchImagesUnsplash } from "../service/unsplash.js";

const WindowWidth = ref(window.innerWidth);

const handleResize = () => {
  WindowWidth.value = window.innerWidth;
};

onMounted( async () => {
  window.addEventListener("resize", handleResize);
});

const isMobile = computed(() => WindowWidth.value < 768);

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const isSearchViewVisible = ref(false);
const searchQuery = ref("");
const onSearchActivated = (value) => {
  searchQuery.value = value;
  isSearchViewVisible.value = true;
};
</script>

<template>
  <div
    class="relative w-full flex flex-col items-center bg-cover"
    :class="
      isSearchViewVisible
        ? 'justify-start h-[80px] bg-red-500 bg-[url(/resources/gradiend-bg@2x.png)]  '
        : 'justify-center  h-screen'
    "
  >
    <div
      v-if="!isMobile && !isSearchViewVisible"
      class="absolute left-0 flex items-center justify-start w-2/4 h-full"
    >
      <img class="h-3/4" src="/resources/hero-left.png" alt="window-img" />
    </div>
    <div
      v-if="!isMobile && !isSearchViewVisible"
      class="absolute right-0 flex items-center justify-end w-2/4 h-full"
    >
      <img class="h-3/4" src="/resources/hero-right.png" alt="window-img" />
    </div>
    <div class="wrapper-search flex items-center flex-col w-2/4 h-1/4 z-10">
      <h1
        v-if="!isSearchViewVisible"
        class="text-4xl font-semibold text-darkCustom dark:text-greyCustom mb-3"
      >
        Search
      </h1>
      <p
        v-if="!isSearchViewVisible"
        class="text-darkCustom dark:text-greyCustom mb-3"
      >
        Search high- resolution Images from Unsplash
      </p>
      <div
        class="w-full flex items-center justify-center"
        :class="isSearchViewVisible ? ' absolute bottom-[-25px] ' : ''"
      >
        <SearchBar @search="onSearchActivated" searchKey="image" placeholder="Enter your keyword..." :width="570" />
      </div>
    </div>


    <div v-if="isSearchViewVisible" class="absolute top-[20%] mt-20">
    <imageSearchView :WordSearch="searchQuery" />
  </div>
   
  </div>

  

</template>
<style lang="scss">

</style>
