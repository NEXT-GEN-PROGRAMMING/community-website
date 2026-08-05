<template>
  <div class="flex flex-col items-center w-full">
    
    <!-- Hero Section -->
    <section id="home" class="w-full flex flex-col items-center">
      <!-- Hero Text -->
      <div class="mt-[13vh] mb-[4vh] text-center px-6 z-10 w-full">
      <h1 class="text-5xl md:text-7xl lg:text-[90px] text-black tracking-tighter animate-write-1 font-normal" style="font-family: 'JetBrains Mono ExtraBold', monospace;">
        NEXT-GEN PROGRAMMERS
      </h1>
      <p class="mt-4 text-2xl md:text-4xl text-black whitespace-nowrap animate-write-2" style="font-family: 'JetBrains Mono SemiBold Italic', monospace; font-style: italic; font-weight: 600;">
        Built for Programmers by Programmers
      </p>
      
      <!-- Community Description & CTA -->
      <div class="mt-8 text-black text-sm md:text-base lg:text-lg animate-fade-up-text max-w-4xl mx-auto flex flex-col gap-6" style="font-family: 'JetBrains Mono Regular', monospace;">
        <div>
          <p>The Virtual Home for Programmers</p>
          <p>Code. Learn. Connect. Repeat.</p>
        </div>
        <p class="leading-relaxed text-gray-800">Study together in voice channels, ask questions, share your projects, collaborate with developers, contribute to community initiatives, and grow your skills—all in one place.</p>

        <NuxtLink 
          to="https://discord.gg/8gTnXdU5Xd" 
          class="self-center mt-2 flex items-center gap-3 px-6 py-3 bg-black text-white text-base md:text-lg font-normal rounded-xl hover:bg-gray-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 animate-fade-up-btn"
          style="font-family: 'JetBrains Mono ExtraBold', monospace;"
          target="_blank"
        >
          <UIcon name="i-simple-icons-discord" class="w-5 h-5 text-white" />
          Join Discord
        </NuxtLink>
      </div>
    </div>
      
    <!-- Spacer to hold open the hero section for the absolute background image -->
      <div class="h-[100vh] w-full"/>
    </section>

    <!-- Absolutely positioned image to perfectly span the entire width of the layout -->
    <div class="absolute left-0 w-full h-screen pointer-events-none z-0 overflow-hidden" style="top: 50vh;">
      <div class="w-full h-full" style="-webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 82%, transparent 100%); mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 82%, transparent 100%);">
        <img 
          src="~/assets/images/background.png" 
          alt="Background" 
          class="w-full h-full object-cover animate-wipe-up will-change-transform" 
          :style="{ transform: `scale(${bgScale})`, transformOrigin: 'bottom center' }"
        >
      </div>
    </div>

    <!-- Members Section -->
    <section id="members" class="w-full py-24 flex flex-col items-center relative z-10">
      
      <!-- Fade Up Container for Titles -->
      <div class="reveal-on-scroll reveal-fade-up flex flex-col items-center text-center">
        <h2 class="text-4xl md:text-5xl font-normal text-black tracking-tight" style="font-family: 'JetBrains Mono ExtraBold', monospace;">
          MEET THE MEMBERS
        </h2>
        <p class="mt-4 text-gray-500 text-lg" style="font-family: 'JetBrains Mono Regular', monospace;">
          The passionate developers driving NEXT-GEN forward.
        </p>
      </div>

      <div class="mt-12 flex flex-col items-center w-full max-w-5xl relative pb-8">
        
        <div class="relative flex flex-col items-center reveal-on-scroll reveal-pop-in" style="transition-delay: 0ms;">
          <div class="w-[280px] flex flex-col items-center bg-[#f7f7f7] p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10">
            <img src="~/assets/images/pfp/owner.png" alt="Majestic" class="w-20 h-20 rounded-full mb-4 object-cover shadow-sm" >
            <h3 class="font-normal text-lg text-black" style="font-family: 'JetBrains Mono ExtraBold', monospace;">Majestic</h3>
            <p class="text-sm text-gray-400 mt-1" style="font-family: 'JetBrains Mono Regular', monospace;">Owner</p>
          </div>
          <div class="w-[2px] h-8 bg-gray-200"/>
        </div>

        <div class="relative flex flex-col items-center reveal-on-scroll reveal-pop-in" style="transition-delay: 150ms;">
          <div class="w-[280px] flex flex-col items-center bg-[#f7f7f7] p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10">
            <img src="~/assets/images/pfp/admin.png" alt="Sir Wizard" class="w-20 h-20 rounded-full mb-4 object-cover shadow-sm" >
            <h3 class="font-normal text-lg text-black" style="font-family: 'JetBrains Mono ExtraBold', monospace;">Sir Wizard</h3>
            <p class="text-sm text-gray-400 mt-1" style="font-family: 'JetBrains Mono Regular', monospace;">Administrator</p>
          </div>
          <div class="w-[2px] h-8 bg-gray-200"/>
        </div>

        <!-- (Partially hidden) -->
        <div class="relative flex flex-col md:flex-row justify-center gap-8 w-full reveal-on-scroll reveal-fade-up" style="transition-delay: 300ms;">
          <div v-for="(mod, index) in moderators" :key="mod.name" class="relative flex flex-col items-center flex-1 max-w-[280px]">
            
            <!-- Desktop Tree Branches -->
            <div v-if="index < 2" class="hidden md:block absolute top-0 left-1/2 w-[calc(50%+16px)] h-[2px] bg-gray-200"/>
            <div v-if="index > 0" class="hidden md:block absolute top-0 right-1/2 w-[calc(50%+16px)] h-[2px] bg-gray-200"/>
            <div class="hidden md:block absolute top-0 w-[2px] h-8 bg-gray-200"/>
            
            <!-- Mobile Vertical Connector -->
            <div v-if="index < 2" class="md:hidden absolute -bottom-8 w-[2px] h-8 bg-gray-200"/>

            <!-- Card -->
            <div class="w-full mt-0 md:mt-8 flex flex-col items-center bg-[#f7f7f7] p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative z-10">
              <img :src="mod.pfp" :alt="mod.name" class="w-20 h-20 rounded-full mb-4 object-cover shadow-sm" >
              <h3 class="font-normal text-lg text-black" style="font-family: 'JetBrains Mono ExtraBold', monospace;">{{ mod.name }}</h3>
              <p class="text-sm text-gray-400 mt-1" style="font-family: 'JetBrains Mono Regular', monospace;">Moderator</p>
            </div>
          </div>
        </div>
        
        <!-- Gradient Fade Overlay -->
        <div class="absolute bottom-0 left-0 w-full h-[280px] bg-gradient-to-t from-[#f7f7f7] via-[#f7f7f7]/90 to-transparent pointer-events-none z-20"/>
      </div>

      <!-- CTA Button -->
      <NuxtLink to="/members" class="relative z-30 mt-[-40px] flex items-center gap-3 px-8 py-4 bg-black text-white font-normal text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300" style="font-family: 'JetBrains Mono ExtraBold', monospace;">
        View Members
        <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5 text-white" />
      </NuxtLink>
    </section>
    
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

import mod1 from '~/assets/images/pfp/mod1.png'
import mod2 from '~/assets/images/pfp/mod2.png'
import mod3 from '~/assets/images/pfp/mod3.png'

const moderators = [
  { name: '0xNA', pfp: mod1 },
  { name: 'Crunch', pfp: mod2 },
  { name: 'Divyansh', pfp: mod3 }
]

useHead({
  title: 'Home | NEXT-GEN Programmers'
})

const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })

  // Intersection Observer for triggering scroll-reveal animations
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        revealObserver.unobserve(entry.target)
      }
    })
  }, {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0
  })

  // Start observing all reveal elements
  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    revealObserver.observe(el)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const bgScale = computed(() => {
  // Zooms from 1.0 to 1.25
  const maxScroll = 1000
  const maxScale = 0.25 
  const progress = Math.min(scrollY.value / maxScroll, 1)
  return 1 + (progress * maxScale)
})
</script>

<style>
/* Unscoped style so it applies to the root html element */
html {
  scroll-behavior: smooth;
}
</style>

<style scoped>
@font-face {
  font-family: 'JetBrains Mono ExtraBold';
  src: url('~/assets/fonts/JetBrainsMono-ExtraBold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'JetBrains Mono SemiBold Italic';
  src: url('~/assets/fonts/JetBrainsMono-SemiBoldItalic.ttf') format('truetype');
  font-weight: 600;
  font-style: italic;
}
@font-face {
  font-family: 'JetBrains Mono Regular';
  src: url('~/assets/fonts/JetBrainsMono-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

/* Text Fade Up Animation for Description */
.animate-fade-up-text {
  /* Starts exactly halfway through the second line */
  animation: fadeUpText 1s ease-out 2.25s both;
}

/* Button Fade Up Animation */
.animate-fade-up-btn {
  /* Starts 0.5s after the text starts */
  animation: fadeUpText 1s ease-out 2.75s both;
}

@keyframes fadeUpText {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


/* Write Fade Animation */
.animate-write-1 {
  -webkit-mask-image: linear-gradient(to right, black 45.5%, transparent 54.5%);
  mask-image: linear-gradient(to right, black 45.5%, transparent 54.5%);
  -webkit-mask-size: 220% 100%;
  mask-size: 220% 100%;
  -webkit-mask-position: 100% 0;
  mask-position: 100% 0;
  animation: writeFade 1.5s linear both;
}

.animate-write-2 {
  -webkit-mask-image: linear-gradient(to right, black 45.5%, transparent 54.5%);
  mask-image: linear-gradient(to right, black 45.5%, transparent 54.5%);
  -webkit-mask-size: 220% 100%;
  mask-size: 220% 100%;
  -webkit-mask-position: 100% 0;
  mask-position: 100% 0;
  /* Delayed so it starts exactly when the first one finishes */
  animation: writeFade 1.5s linear 1.5s both;
}

@keyframes writeFade {
  0% {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
  100% {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
}

/* Background Image Fade Up Animation */
.animate-wipe-up {
  -webkit-mask-image: linear-gradient(to top, black 45.5%, transparent 54.5%);
  mask-image: linear-gradient(to top, black 45.5%, transparent 54.5%);
  -webkit-mask-size: 100% 220%;
  mask-size: 100% 220%;
  -webkit-mask-position: 0 0;
  mask-position: 0 0;
  /* Slightly slower duration while keeping the early start and ease-out */
  animation: wipeUpFade 1.8s ease-out 0.2s both;
}

@keyframes wipeUpFade {
  0% {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
  100% {
    -webkit-mask-position: 0 100%;
    mask-position: 0 100%;
  }
}

/* Scroll Reveal Animations */
.reveal-fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.reveal-fade-up.revealed {
  opacity: 1;
  transform: translateY(0);
}

.reveal-pop-in {
  opacity: 0;
  transform: scale(0.85);
  transition: opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.reveal-pop-in.revealed {
  opacity: 1;
  transform: scale(1);
}
</style>
