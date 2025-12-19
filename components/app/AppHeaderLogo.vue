<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="flex items-center gap-2">
    <UColorModeImage
      v-if="appConfig.header?.logo?.dark || appConfig.header?.logo?.light"
      :light="(appConfig.header?.logo?.light || appConfig.header?.logo?.dark) as string"
      :dark="(appConfig.header?.logo?.dark || appConfig.header?.logo?.light) as string"
      :alt="appConfig.header?.logo?.alt || appConfig.header?.title"
      class="h-8 w-auto shrink-0"
    />
    <span v-if="appConfig.header?.title" class="font-semibold">
      {{ appConfig.header.title }}
    </span>
  </div>
</template>
