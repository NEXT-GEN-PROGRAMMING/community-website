<template>
  <div 
    ref="container"
    class="relative w-full h-full flex flex-col justify-center items-center bg-transparent select-none"
    style="perspective: 1000px;"
    @wheel="handleWheel"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointerleave="onPointerUp"
  >
    <!-- 3D Transform Container -->
    <div 
      class="relative w-full h-full flex items-center justify-center pointer-events-none"
      style="transform-style: preserve-3d;"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="absolute top-1/2 left-1/2 will-change-transform transition-all coverflow-card"
        :class="[index === activeIndex ? 'cursor-auto' : 'cursor-pointer']"
        :style="getCardStyle(index)"
        @click="handleCardClick(index, item)"
      >
        <!-- The Card Content -->
        <div class="relative w-full h-full rounded-[2rem] shadow-2xl bg-[#0a0a0c] pointer-events-auto overflow-hidden group flex flex-col" style="backface-visibility: hidden; -webkit-backface-visibility: hidden; box-shadow: 0 0 0 2px #0a0a0c, inset 0 0 0 1px rgba(255,255,255,0.1); -moz-transform: translateZ(0);">
          
          <!-- Top Visual Header (Image or Gradient) -->
          <div class="relative w-full h-[45%] flex-shrink-0" :class="item.color || 'bg-gradient-to-br from-gray-800 to-black'">
            <img 
              v-if="item.image" 
              :src="item.image" 
              :alt="item.title"
              class="absolute inset-0 object-cover w-full h-full opacity-60"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent"/>
          </div>

          <!-- Project Details -->
          <div class="relative p-8 flex flex-col flex-grow -mt-6 z-10">
            <h3 class="text-3xl font-normal text-white tracking-tighter drop-shadow-md" style="font-family: 'JetBrains Mono ExtraBold', monospace;">
              {{ item.title }}
            </h3>
            
            <p class="mt-3 text-gray-400 text-sm md:text-base leading-relaxed flex-grow" style="font-family: 'JetBrains Mono Regular', monospace;">
              {{ item.description }}
            </p>
            
            <!-- Tech Stack -->
            <div v-if="item.tech" class="mt-4 flex flex-wrap gap-2">
              <span 
                v-for="tech in item.tech" 
                :key="tech"
                class="px-3 py-1 bg-white/5 text-gray-300 text-[11px] uppercase tracking-wider rounded-lg font-normal backdrop-blur-sm"
                style="box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1); font-family: 'JetBrains Mono ExtraBold', monospace;"
              >
                {{ tech }}
              </span>
            </div>
            
            <!-- CTA Button -->
            <a v-if="item.link" :href="item.link" class="mt-8 flex items-center justify-between w-full px-5 py-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group/btn" style="box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1);">
              <span class="text-white text-sm font-normal" style="font-family: 'JetBrains Mono ExtraBold', monospace;">View Project</span>
              <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5 text-white group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

          <!-- Dimming overlay for inactive cards -->
          <div 
            class="absolute inset-0 bg-[#0a0a0c] transition-opacity duration-500 pointer-events-none z-50"
            :class="index === activeIndex ? 'opacity-0' : 'opacity-60'"
          />
        </div>

        <!-- Reflection Effect -->
        <div 
          v-if="enableReflection"
          aria-hidden="true"
          class="absolute left-0 pointer-events-none overflow-hidden opacity-40 transition-all duration-500"
          :style="{
            top: '100%',
            width: '100%',
            height: '42%',
            marginTop: '4px',
            transformOrigin: 'top center',
            transform: 'rotateX(12deg) translateZ(0)',
            filter: index === activeIndex ? 'brightness(1)' : 'brightness(0.5)',
            maskImage: 'linear-gradient(to top, transparent 0%, transparent 10%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, transparent 10%, black 100%)'
          }"
        >
          <div class="w-full h-full" style="transform: scaleY(-1); backface-visibility: hidden; -webkit-backface-visibility: hidden;">
            <div class="relative w-full h-full rounded-2xl bg-black overflow-hidden" style="box-shadow: 0 0 0 2px #000; -moz-transform: translateZ(0);">
              <img v-if="item.image" :src="item.image" class="object-cover w-full h-full opacity-60" >
              <div v-else class="w-full h-full" :class="item.color || 'bg-gradient-to-br from-gray-800 to-black'"/>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
  itemWidth: { type: Number, default: 360 },
  itemHeight: { type: Number, default: 520 },
  stackSpacing: { type: Number, default: 120 },
  centerGap: { type: Number, default: 260 },
  rotation: { type: Number, default: 55 },
  initialIndex: { type: Number, default: 0 },
  enableReflection: { type: Boolean, default: true },
  isRevealed: { type: Boolean, default: true }
})

const emit = defineEmits(['itemClick', 'indexChange'])

const activeIndex = ref(props.initialIndex)
const container = ref(null)
const isInitialReveal = ref(true)

watch(() => props.isRevealed, (newVal) => {
  if (newVal) {
    // Wait for the staggering animation to finish before turning off initial reveal
    setTimeout(() => {
      isInitialReveal.value = false
    }, 1500)
  }
})

const jumpToIndex = (index) => {
  const total = props.items.length
  if (total === 0) return
  const wrapped = ((index % total) + total) % total
  if (wrapped !== activeIndex.value) {
    activeIndex.value = wrapped
    emit('indexChange', wrapped)
  }
}

const handleCardClick = (index, item) => {
  if (index === activeIndex.value) {
    emit('itemClick', item, index)
  } else {
    jumpToIndex(index)
  }
}

// Wheel scrolling
let accumulator = 0
let lastTime = Date.now()
let lastJump = 0

const handleWheel = (e) => {
  const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
  
  // Prevent page scroll when hovering over the carousel
  e.preventDefault()

  const now = Date.now()
  if (now - lastTime > 100) accumulator = 0
  lastTime = now
  accumulator += delta

  const threshold = 50
  // Only jump if we have passed the threshold and a brief cooldown has passed
  if (accumulator > threshold && now - lastJump > 100) {
    jumpToIndex(activeIndex.value + 1)
    accumulator = 0
    lastJump = now
  } else if (accumulator < -threshold && now - lastJump > 100) {
    jumpToIndex(activeIndex.value - 1)
    accumulator = 0
    lastJump = now
  }
}

// Global Keyboard navigation
const handleGlobalKeyDown = (e) => {
  if (!props.isRevealed) return 
  
  if (e.key === 'ArrowLeft') {
    e.preventDefault()
    jumpToIndex(activeIndex.value - 1)
  } else if (e.key === 'ArrowRight') {
    e.preventDefault()
    jumpToIndex(activeIndex.value + 1)
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleGlobalKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalKeyDown)
})

// Drag / Swipe support
let isDragging = false
let startX = 0
let startActiveIndex = 0

const onPointerDown = (e) => {
  isDragging = true
  startX = e.clientX
  startActiveIndex = activeIndex.value
  if (container.value) container.value.setPointerCapture(e.pointerId)
}

const onPointerMove = (e) => {
  if (!isDragging) return
  const diff = e.clientX - startX
  // If dragged enough, snap to next
  if (Math.abs(diff) > 100) {
    const dir = diff > 0 ? -1 : 1
    jumpToIndex(startActiveIndex + dir)
    startX = e.clientX
    startActiveIndex = activeIndex.value
  }
}

const onPointerUp = (e) => {
  isDragging = false
  if (container.value) container.value.releasePointerCapture(e.pointerId)
}

const getCardStyle = (index) => {
  if (!props.isRevealed) {
    return {
      width: `${props.itemWidth}px`,
      height: `${props.itemHeight}px`,
      marginTop: `-${props.itemHeight / 2}px`,
      marginLeft: `-${props.itemWidth / 2}px`,
      transform: `translate3d(0px, 300px, -200px) rotateY(0deg) rotateX(20deg) scale(0.6)`,
      opacity: 0,
      zIndex: 1000 - index,
      pointerEvents: 'none',
      transitionDuration: '0ms',
      transformStyle: 'preserve-3d'
    }
  }

  const total = props.items.length
  let pos = index - activeIndex.value
  
  // Circular shortest-distance
  if (pos > total / 2) pos -= total
  else if (pos < -total / 2) pos += total

  const absPos = Math.abs(pos)

  // Rotate
  let rotateY = 0
  if (absPos < 0.5) rotateY = -pos * (props.rotation * 2)
  else if (pos < 0) rotateY = props.rotation
  else rotateY = -props.rotation

  // X Translate
  let x = 0
  if (absPos < 1) x = pos * props.centerGap
  else if (pos < 0) x = -props.centerGap - (absPos - 1) * props.stackSpacing
  else x = props.centerGap + (absPos - 1) * props.stackSpacing

  // Z Translate
  let z = absPos > 0.5 ? -250 : absPos * -400

  let opacity = 1

  // Z Index 
  const zIndex = 1000 - absPos * 10

  // Staggering animation logic
  const delay = isInitialReveal.value ? absPos * 120 : 0
  const duration = isInitialReveal.value ? 1000 : 500
  const ease = isInitialReveal.value ? 'cubic-bezier(0.2, 0.8, 0.2, 1.2)' : 'ease-out'

  return {
    width: `${props.itemWidth}px`,
    height: `${props.itemHeight}px`,
    marginTop: `-${props.itemHeight / 2}px`,
    marginLeft: `-${props.itemWidth / 2}px`,
    transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg)`,
    opacity,
    zIndex,
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: ease,
    pointerEvents: 'auto',
    transformStyle: 'preserve-3d'
  }
}
</script>
