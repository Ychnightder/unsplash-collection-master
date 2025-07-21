<script setup >
import SearchBar from "./SearchBar.vue";
import { ref, computed, watch, onMounted } from "vue"
import { fetchCollections, addImageToCollection } from "../service/unsplash.js"

const result = ref(0)
const showResult = ref(true);

const props = defineProps({
  show: Boolean ,
  imageId,
});

const searchText = ref("");
const allCollections = ref([]);

const filteredCollections = computed(() => {
  if (!searchText.value) return allCollections.value;
  return allCollections.value.filter((collection) =>
    collection.name.toLowerCase().includes(searchText.value.toLowerCase())
  );
});
onMounted(async () => {
  allCollections.value = await fetchCollections();
  result.value = allCollections.value.length;
})

const handleAddToCollection = async (collectionId) => {
  try {
    await addImageToCollection(props.imageId, collectionId);
    alert("Image ajoutée à la collection !");
  } catch (error) {
    console.error("Erreur d'ajout :", error);
  }
};

</script>

<template>
  <div v-if="props.show" class="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center ">
    <div class="w-[600px] h-[600px] rounded-md bg-white p-5">
      <div class="w-full h-auto text-3xl font-medium mb-5 ">Add to Collections</div>
      <SearchBar class=""  @search="true" placeholder="" :width="570"  @input="(e) => searchText.value = e.target.value" />
      <div v-if="showResult" class="my-5" >{{result}} matches</div>
      <div v-if="showResult" class=" w-full h-full gap-4 cursor-pointer">
            <div class="w-full h-[75px] transition-all flex flex-row items-center rounded-md p-2 duration-300 hover:bg-lightGreyCustom group ">
                <img class="rounded-md  h-full" src="https://randomuser.me/api/portraits/men/1.jpg" >
                <div class="flex flex-col items-start content-center ml-4  w-[56%] ">
                    <h3 class="font-medium">Autumn Italy</h3>
                  <p class="font-light text-1xl ">{{result}} photos</p>
                </div>
                <div class="hidden group-hover:flex gap-2 items-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6665 7.33335H8.6665V3.33335C8.6665 3.15654 8.59627 2.98697 8.47124 2.86195C8.34622 2.73693 8.17665 2.66669 7.99984 2.66669C7.82303 2.66669 7.65346 2.73693 7.52843 2.86195C7.40341 2.98697 7.33317 3.15654 7.33317 3.33335V7.33335H3.33317C3.15636 7.33335 2.98679 7.40359 2.86177 7.52862C2.73674 7.65364 2.6665 7.82321 2.6665 8.00002C2.6665 8.17683 2.73674 8.3464 2.86177 8.47142C2.98679 8.59645 3.15636 8.66669 3.33317 8.66669H7.33317V12.6667C7.33317 12.8435 7.40341 13.0131 7.52843 13.1381C7.65346 13.2631 7.82303 13.3334 7.99984 13.3334C8.17665 13.3334 8.34622 13.2631 8.47124 13.1381C8.59627 13.0131 8.6665 12.8435 8.6665 12.6667V8.66669H12.6665C12.8433 8.66669 13.0129 8.59645 13.1379 8.47142C13.2629 8.3464 13.3332 8.17683 13.3332 8.00002C13.3332 7.82321 13.2629 7.65364 13.1379 7.52862C13.0129 7.40359 12.8433 7.33335 12.6665 7.33335Z" fill="#121826"/>
                  </svg>
                   Add to Collection
                </div>
            </div>
      </div>
    </div>
  </div>
</template>

<style  lang="scss">

</style>