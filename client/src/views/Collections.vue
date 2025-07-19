<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import AddCollection from "../components/addCollection.vue";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const collections = ref([]);
const showModal = ref(false);

const fetchCollections = async () => {
  try {
    const response = await api.get("/collections");
    collections.value = response.data;
  } catch (error) {
    console.error("❌ Erreur lors de la récupération des collections :", error);
  }
}

onMounted(fetchCollections);


</script>

<template>
  <add-collection    :show="showModal"
                     @close="showModal = false"
                     @created="fetchCollections" />
  <div class="flex flex-col items-center h-screen mx-[100px]">
    <div class="w-full flex flex-col items-center justify-center mt-10">
      <h1 class="text-4xl font-medium gradient-text">Collections</h1>
      <p class="text-center mt-2 dark:text-greyCustom">
        Explore the world through collections of beautiful <br />
        photos free to use under the
        <span class="font-semibold underline">Unsplash License</span>.
      </p>
    </div>
    <!-- columns-1 sm:columns-2 md:columns-3 lg:columns-3 -->
    <div class="w-full mt-20 h-auto gap-10 flex flex-wrap justify-center">
      <div
        v-for="collection in collections"
        :key="collection.id"
        class="w-[330px] h-[220px] rounded-md cursor-pointer"
      >
        <div class="w-full h-3/4 bg-slate-700  mb-[19px]"></div>
        <h2 class="text-xl font-medium dark:text-greyCustom">
          {{
            collection.name.charAt(0).toUpperCase() + collection.name.slice(1)
          }}
        </h2>
        <p class="text-greyCustom font-light dark:text-lightGreyCustom">
          {{ collection.image_count }} photos
        </p>
      </div>
      <div
          @click="showModal = true"
        class="w-[300px] h-[230px] rounded-md cursor-pointer flex flex-col items-center justify-center bg-colorbtn hover:bg-slate-300 transition-all duration-300 gap-4"
      >
        <!-- <img src="/resources/Plus.svg" alt="plus"> -->

        <svg
          width="25"
          height="25"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6665 7.33335H8.6665V3.33335C8.6665 3.15654 8.59627 2.98697 8.47124 2.86195C8.34622 2.73693 8.17665 2.66669 7.99984 2.66669C7.82303 2.66669 7.65346 2.73693 7.52843 2.86195C7.40341 2.98697 7.33317 3.15654 7.33317 3.33335V7.33335H3.33317C3.15636 7.33335 2.98679 7.40359 2.86177 7.52862C2.73674 7.65364 2.6665 7.82321 2.6665 8.00002C2.6665 8.17683 2.73674 8.3464 2.86177 8.47142C2.98679 8.59645 3.15636 8.66669 3.33317 8.66669H7.33317V12.6667C7.33317 12.8435 7.40341 13.0131 7.52843 13.1381C7.65346 13.2631 7.82303 13.3334 7.99984 13.3334C8.17665 13.3334 8.34622 13.2631 8.47124 13.1381C8.59627 13.0131 8.6665 12.8435 8.6665 12.6667V8.66669H12.6665C12.8433 8.66669 13.0129 8.59645 13.1379 8.47142C13.2629 8.3464 13.3332 8.17683 13.3332 8.00002C13.3332 7.82321 13.2629 7.65364 13.1379 7.52862C13.0129 7.40359 12.8433 7.33335 12.6665 7.33335Z"
            fill="#6C727F"
          />
        </svg>
        <h2 class="text-xl font-medium text-greyCustom">Add new collection</h2>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
