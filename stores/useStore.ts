import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const storeVar = 'pinia'

  return { storeVar }
})
