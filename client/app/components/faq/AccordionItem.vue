<template>
  <div class="bg-surface border border-line rounded-xl overflow-hidden transition-colors hover:border-line-strong">
    <button
      type="button"
      class="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
      :aria-expanded="open"
      :aria-controls="`faq-panel-${id}`"
      @click="open = !open"
    >
      <span class="font-semibold text-white text-sm md:text-base">{{ question }}</span>
      <span
        class="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full border border-line text-fog transition-all duration-300"
        :class="open ? 'bg-primary-500 border-primary-500 text-white rotate-180' : ''"
      >
        <UIcon name="i-heroicons-chevron-down" class="w-4 h-4" />
      </span>
    </button>

    <div
      :id="`faq-panel-${id}`"
      class="grid transition-all duration-300 ease-out"
      :class="open ? '[grid-template-rows:1fr] opacity-100' : '[grid-template-rows:0fr] opacity-0'"
    >
      <div class="overflow-hidden">
        <p class="px-5 md:px-6 pb-6 text-sm text-fog leading-relaxed max-w-3xl">
          {{ answer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  id: string
  question: string
  answer: string
}>()

const open = ref(props.id.endsWith('0'))
</script>
