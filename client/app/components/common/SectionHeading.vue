<template>
  <CommonReveal :variant="'fade-up'" class="w-full">
    <div
      class="flex flex-col"
      :class="align === 'left' ? 'items-start text-left' : 'items-center text-center'"
    >
      <span v-if="eyebrow" class="text-[11px] uppercase tracking-[0.22em] text-primary-400">
        {{ eyebrow }}
      </span>
      <h2
        class="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1]"
      >
        <slot name="title" />
      </h2>
      <p v-if="$slots.default" class="mt-4 text-fog max-w-2xl text-sm md:text-base leading-relaxed">
        <slot />
      </p>
    </div>
  </CommonReveal>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  align?: 'left' | 'center'
}>(), {
  eyebrow: '',
  align: 'center',
})
</script>
