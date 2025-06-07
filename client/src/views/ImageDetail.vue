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

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<template>
  <div
    v-if="image"
    class="mx-[100px] mt-20 w-auto h-screen flex flex-row content-center gap-10"
  >
    <div class="w-1/2 h-[90%] flex justify-end items-start">
      <img
        :src="image.urls.regular"
        :alt="image.author"
        class="rounded-md w-full h-full object-cover"
      />
    </div>
    <div class="w-1/2 h-full flex flex-col">
      <div class="w-full flex flex-col gap-3">
        <div class="flex flex-row items-center gap-3">
          <div class="w-[60px] h-[60px] bg-gray-300 rounded-full">
            <img
              class="w-full rounded-full"
              :src="image.user.profile_image.medium"
              alt="profile_image"
            />
          </div>
          <div>
            <h1 class="font-medium">{{ image.user.name }}</h1>
          </div>
        </div>

        <div class="flex flex-row items-center gap-3 font-light">
          published on {{ formatDate(image.updated_at) }}
        </div>

        <div class="flex flex-row-reverse justify-end gap-3">
          <button
            class="bg-colorbtn rounded-md px-4 py-2 flex flex-row items-center gap-2"
          >
            <img
              src="/resources/down arrow.svg"
              alt="add-to-collection"
              class="w-4 h-4"
            />
            <span class="text-sm">Download</span>
          </button>

          <button
            class="bg-colorbtn rounded-md px-4 py-2 flex flex-row items-center gap-2"
          >
            <img
              src="/resources/Plus.svg"
              alt="add-to-collection"
              class="w-4 h-4"
            />
            <span class="text-sm">Add to collection</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
