import { defineStore } from "pinia";

export const useImageStore = defineStore("image", {
  state: () => ({
    selectedImage: null,
  }),
  actions: {
    setImage(image) {
      this.selectedImage = image;
    },
    clearImage() {
      this.selectedImage = null;
    },
  },
  persist: true,
});
