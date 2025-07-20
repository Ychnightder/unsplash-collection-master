import { defineStore } from "pinia";


export const useCollectionStore = defineStore("useCollectionStore", {
  state: () => ({
    selectedCollection: null,
  }),
  actions: {
    setSelectedCollection(collection) {
      this.selectedCollection = collection;
    }
    ,
    clearCollection() {
      this.selectedCollection = null;
    },

  },
  persist: true,
})