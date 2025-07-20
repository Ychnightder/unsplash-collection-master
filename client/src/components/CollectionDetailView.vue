<script setup >
import { useRouter } from "vue-router";
import { nextTick, onMounted, ref, watch } from "vue";
import { useCollectionStore } from "../store/useCollectionStore.js";
import Color from "colorjs.io";

const router = useRouter();
const collectionStore = useCollectionStore();
const collection = ref(null);

const loadCollection = () => {
  collection.value = collectionStore.selectedCollection;
  if (!collection.value) {
    nextTick(() => {
      if (collectionStore.selectedCollection) {
        collection.value = collectionStore.selectedCollection;
      } else {
        router.push("/");
      }
    });
  }

}

watch(
  () => collectionStore.selectedCollection,
  (newVal) => {
    if (newVal) collection.value = newVal;
  }
);

onMounted(loadCollection)

</script>

<template>
  <div v-if="collection" class="w-full h-2/6 flex items-center justify-center mt-10 flex-col ">
    <h1 class="text-5xl font-medium gradient-text">{{ collection.name }}</h1>
    <p class="mt-3  font-light dark:text-lightGreyCustom">{{ collection.image_count }} photos</p>
  </div>
  <div v-else class="text-center mt-10 text-gray-500">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from SVG Spinners by Utkarsh Verma - https://github.com/n3r4zzurr0/svg-spinners/blob/main/LICENSE --><circle cx="4" cy="12" r="3" fill="currentColor"><animate id="svgSpinners3DotsBounce0" attributeName="cy" begin="0;svgSpinners3DotsBounce1.end+0.25s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle><circle cx="12" cy="12" r="3" fill="currentColor"><animate attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle><circle cx="20" cy="12" r="3" fill="currentColor"><animate id="svgSpinners3DotsBounce1" attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle></svg>
  </div>

</template>

