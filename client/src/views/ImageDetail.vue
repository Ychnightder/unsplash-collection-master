<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useImageStore } from "../store/useImageStore";

const router = useRouter();
const imageStore = useImageStore();
const image = ref(null);

onMounted(() => {
  // Met à jour la variable locale `image` dès que `selectedImage` est disponible
  image.value = imageStore.selectedImage;

  if (!image.value) {
    // on attend un peu pour laisser Pinia hydrater, puis on vérifie
    setTimeout(() => {
      if (!imageStore.selectedImage) {
        router.push("/");
      } else {
        image.value = imageStore.selectedImage;
      }
    }, 50);
  }
});
</script>

<template>
  <div
    v-if="image"
    class="mx-[100px] w-ful h-screen flex flex-row content-center gap-10"
  >
    <div class="w-1/2 flex justify-end">
      <img
        :src="image.download_url"
        :alt="image.author"
        class="rounded-lg w-[540px] h-auto"
      />
    </div>
    <div class="w-1/2 flex items-start flex-col">
      <div>
        <div><img src="" alt="" /></div>
      </div>

      <h1 class="text-2xl font-bold">{{ image.id }}</h1>
      <h1 class="text-2xl font-bold">{{ image.download_url }}</h1>
      <p class="mb-4 text-gray-500">Auteurs : {{ image.author }}</p>
      <img :src="image.url" alt="" class="rounded-lg" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
