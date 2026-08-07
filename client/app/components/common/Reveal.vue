<template>
  <div
    ref="el"
    class="reveal-on-scroll"
    :class="[variant === 'pop-in' ? 'reveal-pop-in' : 'reveal-fade-up', { revealed }]"
    :style="delay ? { transitionDelay: `${delay}ms` } : undefined"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

withDefaults(defineProps<{
  variant?: 'fade-up' | 'pop-in'
  delay?: number
}>(), {
  variant: 'fade-up',
  delay: 0,
})

const el = ref<HTMLElement | null>(null)
const revealed = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!el.value) return
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        revealed.value = true
        observer?.unobserve(entry.target)
      }
    })
  }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 })
  observer.observe(el.value)
})

onUnmounted(() => observer?.disconnect())
</script>
