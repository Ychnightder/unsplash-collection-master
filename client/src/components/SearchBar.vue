<script setup>
import { ref } from "vue";

const props = defineProps({
    placeholder: String,
    width: Number,
  searchKey: String,
})
const emit = defineEmits(["search"]);
const searchText = ref("");

const triggerSearch = () => {
  if (searchText.value.trim() !== "") {
    emit("search", {
      key: props.searchKey,
      value: searchText.value,
    });
  }
};





</script>

<template>
  <div class="relative w h-[50px] rounded-lg duration-300 transition" :style="{ width: props.width + 'px' }">
    <input
      v-model="searchText"
      @keyup.enter="triggerSearch"
      class="duration-300 transition w-full h-full rounded-lg p-6 border-2 border-outilineInput border-solid dark:border-bgLinkDark dark:bg-bgLinkDark dark:text-greyCustom"
      :placeholder= "props.placeholder"
      type="text"
      name="search-bar"
      id="search-bar"
    />
    <svg
      @click="triggerSearch"
      class="absolute right-5 top-[14px] cursor-pointer"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="7" stroke="#E5E7EB" stroke-width="2" />
      <path
        d="M20 20L17 17"
        stroke="#E5E7EB"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<style lang="scss"></style>
