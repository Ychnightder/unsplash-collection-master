<script setup>
import { onMounted, ref } from "vue";
import { fetchTestImagesTest } from "../service/unsplash.js";

defineProps({
  WordSearch: {
    type: String,
    required: true,
  },
});
const images = ref([]);
onMounted(async () => {
  images.value = await fetchTestImagesTest();
});
</script>

<template>
  <div class="mx-[100px]">
    <div
      v-if="images.length"
      class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-[35px] space-y-[35px]"
    >
      <div
        v-for="(img, index) in images"
        :key="img.id"
        class="rounded-md overflow-hidden text-center"
      >
        <img
          :src="img.download_url || img.url"
          :alt="`Image de ${img.author}`"
          class="w-full h-auto rounded-md"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
