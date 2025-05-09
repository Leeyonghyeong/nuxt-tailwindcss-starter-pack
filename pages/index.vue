<template>
  <div class="flex flex-col gap-10 justify-center items-center w-full h-screen">
    <div class="text-5xl">{{ store.storeVar }}</div>
    <div class="cursor-pointer" @click="$router.push('/test')">페이지 이동</div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '~/stores/useStore'

const store = useStore()
</script>

<style lang="scss" scoped></style>
