<script setup>
import { ref, defineEmits } from "vue";
import axios from "axios";

const props = defineProps({
  show: Boolean,
});

const emit = defineEmits(["close", "created"]);

const form = ref({
  name: "",
});

function closeModal() {
  emit("close");
}


async function handleSubmit() {
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/collections`, {
      name: form.value.name,
    });
    emit("created"); // Pour actualiser la liste côté parent
    closeModal(); // Ferme la modal
    form.value.name = "";
  } catch (err) {
    console.error("❌ Failed to create collection:", err);
  }
}

</script>

<template>
  <div v-if="show" class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white dark:bg-gray-800 h-52 rounded-lg w-full max-w-[650px] shadow-xl">
      <h2 class="text-xl font-medium mt-4 mb-4 text-center">Add Collection</h2>

      <form @submit.prevent="handleSubmit">
        <div class="mb-5 w-full h-1/3 flex justify-center items-center ">
          <input
            v-model="form.name"
            type="text"
            placeholder="name"
            required
            class="duration-300 transition w-[90%] h-[30px] rounded-lg p-6 border-2 border-outilineInput border-solid dark:border-bgLinkDark dark:bg-bgLinkDark dark:text-greyCustom"
          />
        </div>

        <div class="flex justify-center gap-4">

          <button
            type="submit"
            class="px-5 py-2  bg-lightGreyCustom   rounded hover:bg-gray-300"
          >
            Save
          </button>
          <button
            type="button"
            @click="closeModal"
            class="px-4 py-2  rounded hover:bg-lightGreyCustom"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>