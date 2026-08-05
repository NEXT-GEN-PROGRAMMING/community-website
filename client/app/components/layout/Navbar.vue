<template>
  <header 
    class="fixed top-0 left-1/2 -translate-x-1/2 z-50 animate-navbar-drop transition-transform duration-300 ease-in-out"
    :class="{ 'is-minimized': isScrolled && !isHovered }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <nav class="relative flex items-center gap-5 h-[56px] px-6 bg-black rounded-b-[20px] font-jetbrains">
      
      <!-- Inverted Corners for smooth attachment to the screen top -->
      <div class="absolute top-0 -left-[16px] w-[16px] h-[16px] pointer-events-none" style="background: radial-gradient(circle at 0 100%, transparent 16px, black 17px);"/>
      <div class="absolute top-0 -right-[16px] w-[16px] h-[16px] pointer-events-none" style="background: radial-gradient(circle at 100% 100%, transparent 16px, black 17px);"/>

      <!-- Left: Brand & Logo -->
      <NuxtLink to="/" class="flex items-center gap-2.5 group">
        <img src="~/assets/images/logo.jpg" alt="NEXT-GEN Logo" class="w-7 h-7 rounded-[8px] object-cover shadow-sm" >
        <span class="text-white font-bold text-[15px] tracking-tight group-hover:opacity-80 transition-opacity">NEXT-GEN</span>
      </NuxtLink>

      <!-- Center: Text Links -->
      <div class="hidden md:flex items-center gap-5">
        <NuxtLink 
          v-for="link in links" 
          :key="link.path" 
          :to="link.path"
          class="text-[14px] font-semibold transition-colors"
          :class="activeSection === link.id ? 'text-white' : 'text-gray-400 hover:text-white'"
        >
          {{ link.name }}
        </NuxtLink>
      </div>

      <!-- Right: Action Button -->
      <NuxtLink 
        to="/community" 
        class="flex items-center gap-2 px-3.5 py-1.5 bg-white text-black text-[12.5px] font-bold rounded-[8px] hover:bg-gray-200 transition-colors shadow-sm"
      >
        <UIcon name="i-simple-icons-discord" class="w-[16px] h-[16px]" />
        Join Discord
      </NuxtLink>
    </nav>
    
    <!-- Logo Pull Tab -->
    <div 
      class="absolute top-full left-[24px] bg-black rounded-b-[12px] px-3 py-2 flex items-center justify-center cursor-pointer transition-opacity duration-200"
      :class="(isScrolled && !isHovered) ? 'opacity-100 pointer-events-auto shadow-md' : 'opacity-0 pointer-events-none'"
    >
      <img src="~/assets/images/logo.jpg" alt="Logo Clip" class="w-7 h-7 rounded-[8px]" >
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const links = [
  { name: 'Home', id: 'home', path: '/#home' },
  { name: 'Members', id: 'members', path: '/#members' },
  { name: 'Projects', id: 'projects', path: '/#projects' },
  { name: 'Community', id: 'community', path: '/#community' },
  { name: 'FAQ', id: 'faq', path: '/#faq' },
]

const isScrolled = ref(false)
const isHovered = ref(false)
const activeSection = ref('home')
const hoverTimeout = ref()
const observer = ref()

const handleScroll = () => {
  // Minimize when scrolled down more than 50px
  isScrolled.value = window.scrollY > 50
}

const handleMouseEnter = () => {
  clearTimeout(hoverTimeout.value)
  isHovered.value = true
}

const handleMouseLeave = () => {
  // 300ms debounce matches the CSS transition time to prevent flickering
  hoverTimeout.value = setTimeout(() => {
    isHovered.value = false
  }, 300)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })

  // Intersection Observer for updating active section dynamically based on scroll
  const options = {
    root: null,
    rootMargin: '-50% 0px -50% 0px', 
    threshold: 0
  }
  
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, options)

  // Wait for the DOM to fully render the page content before observing
  setTimeout(() => {
    links.forEach(link => {
      const el = document.getElementById(link.id)
      if (el) observer.value?.observe(el)
    })
  }, 300)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (observer.value) observer.value.disconnect()
})
</script>

<style scoped>
@font-face {
  font-family: 'JetBrains Mono';
  src: url('~/assets/fonts/JetBrainsMono-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'JetBrains Mono';
  src: url('~/assets/fonts/JetBrainsMono-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'JetBrains Mono';
  src: url('~/assets/fonts/JetBrainsMono-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: 'JetBrains Mono';
  src: url('~/assets/fonts/JetBrainsMono-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

.font-jetbrains {
  font-family: 'JetBrains Mono', monospace;
}

/* Navbar Pull Down Animation */
.animate-navbar-drop {
  /* 4.0s delay so it waits for EVERY animation to finish */
  animation: navbarDrop 0.8s cubic-bezier(0.16, 1, 0.3, 1) 4.0s both;
}

@keyframes navbarDrop {
  0% {
    top: -100px;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}

.is-minimized {
  --tw-translate-y: calc(-100% + 8px);
}
</style>
