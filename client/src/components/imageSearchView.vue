<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useImageStore } from "../store/useImageStore";
import { fetchImagesUnsplash } from "../service/unsplash.js";

const router = useRouter();
const imageStore = useImageStore();

const goToDetail = (image) => {
  imageStore.setImage(image);
  router.push(`/image/${image.id}`);
};

const props = defineProps({
  WordSearch: {
    type: String,
  },
});
const images = ref([]);
onMounted(async () => {
  images.value = await fetchImagesUnsplash(props.WordSearch);
});
</script>

<template>
  <div class="mx-[100px]">
    <div
      v-if="images.length"
      class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-[35px] space-y-[35px] mt-20"
    >
      <div
        v-for="(img, index) in images"
        :key="img.id"
        class="rounded-md overflow-hidden text-center cursor-pointer"
        @click="goToDetail(img)"
      >
        <img
          :src="img.urls.regular"
          :alt="`Image de ${img.user.name}-${index}`"
          class="w-full h-auto rounded-md"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
