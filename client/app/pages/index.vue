<template>
  <div class="flex flex-col items-center w-full">

    <!-- ============================ HERO ============================ -->
    <section id="home" class="relative w-full flex flex-col items-center overflow-hidden">
      <!-- Hero Text -->
      <div class="mt-[16vh] mb-[4vh] text-center px-6 z-10 w-full">
        <span class="inline-block text-[11px] md:text-xs uppercase tracking-[0.28em] text-primary-400 animate-fade-up-text">
          A Virtual Home for Programmers
        </span>
        <h1 class="mt-4 text-5xl md:text-7xl lg:text-[84px] text-white tracking-tighter animate-write-1 font-extrabold">
          NEXT-GEN <span class="text-primary-500">PROGRAMMERS</span>
        </h1>
        <p class="mt-4 text-2xl md:text-4xl text-zinc-400 whitespace-nowrap animate-write-2 font-semibold italic">
          Built for Programmers by Programmers
        </p>

        <!-- Community Description & CTA -->
        <div class="mt-10 text-sm md:text-base lg:text-lg text-zinc-400 max-w-4xl mx-auto flex flex-col gap-6 animate-fade-up-text">
          <p class="leading-relaxed text-zinc-500 max-w-2xl mx-auto">
            Study together in voice channels, ask questions, share your projects, collaborate with developers, contribute to community initiatives, and grow your skills — all in one place.
          </p>

          <NuxtLink
            :to="discordUrl"
            class="self-center mt-2 flex items-center gap-3 px-8 py-3.5 bg-primary-500 hover:bg-primary-600 text-white text-base md:text-lg font-bold rounded-xl transition-all shadow-[0_8px_32px_rgba(228,0,43,0.35)] hover:shadow-[0_12px_40px_rgba(228,0,43,0.5)] hover:-translate-y-0.5 animate-fade-up-btn"
          >
            <UIcon name="i-simple-icons-discord" class="w-5 h-5" />
            Join Discord
          </NuxtLink>
        </div>
      </div>

      <!-- Spacer to hold open the hero section for the absolute background image -->
      <div class="h-[100vh] w-full" />

      <!-- Absolutely positioned image to perfectly span the entire width of the layout -->
      <div class="absolute left-0 w-full h-screen pointer-events-none z-0 overflow-hidden" style="top: 50vh;">
        <div class="w-full h-full" style="-webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 12%, black 82%, transparent 100%); mask-image: linear-gradient(to bottom, transparent 0%, black 12%, black 82%, transparent 100%);">
          <img
            src="~/assets/images/background.png"
            alt="NEXT-GEN community backdrop"
            class="w-full h-full object-cover animate-wipe-up will-change-transform"
            :style="{ transform: `scale(${bgScale})`, transformOrigin: 'bottom center' }"
          >
        </div>
        <!-- Scrim keeps the photo cinematic against the dark theme -->
        <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/40" />
      </div>
    </section>

    <!-- ============================ STATS ============================ -->
    <section aria-label="Community statistics" class="relative z-10 w-full max-w-6xl mx-auto px-6">
      <CommonReveal variant="fade-up">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="flex flex-col items-center gap-1.5 bg-surface px-6 py-10 text-center"
          >
            <span class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{{ stat.value }}</span>
            <span class="text-[11px] uppercase tracking-[0.18em] text-fog">{{ stat.label }}</span>
          </div>
        </div>
      </CommonReveal>
    </section>

    <!-- ============================ MEMBERS ============================ -->
    <section id="members" class="relative w-full py-28 flex flex-col items-center">
      <CommonSectionHeading eyebrow="The Team" align="center">
        <template #title>Meet the members</template>
        The passionate developers driving NEXT-GEN forward.
      </CommonSectionHeading>

      <div class="mt-16 flex flex-col items-center w-full max-w-5xl relative pb-8">

        <CommonReveal variant="pop-in">
          <div class="relative flex flex-col items-center">
            <div class="w-[280px] flex flex-col items-center bg-surface p-8 rounded-2xl border border-line hover:border-line-strong hover:-translate-y-1 transition-all duration-300 relative z-10">
              <img src="~/assets/images/pfp/owner.png" alt="Majestic" class="w-20 h-20 rounded-full mb-4 object-cover shadow-sm">
              <h3 class="font-bold text-lg text-white">Majestic</h3>
              <p class="text-sm text-fog mt-1">Owner</p>
            </div>
            <div class="w-[2px] h-8 bg-line" />
          </div>
        </CommonReveal>

        <CommonReveal variant="pop-in" :delay="150">
          <div class="relative flex flex-col items-center">
            <div class="w-[280px] flex flex-col items-center bg-surface p-8 rounded-2xl border border-line hover:border-line-strong hover:-translate-y-1 transition-all duration-300 relative z-10">
              <img src="~/assets/images/pfp/admin.png" alt="Sir Wizard" class="w-20 h-20 rounded-full mb-4 object-cover shadow-sm">
              <h3 class="font-bold text-lg text-white">Sir Wizard</h3>
              <p class="text-sm text-fog mt-1">Administrator</p>
            </div>
            <div class="w-[2px] h-8 bg-line" />
          </div>
        </CommonReveal>

        <!-- (Partially hidden) -->
        <div class="relative flex flex-col md:flex-row justify-center gap-8 w-full">
          <CommonReveal
            v-for="(mod, index) in moderators"
            :key="mod.name"
            variant="fade-up"
            :delay="300 + index * 100"
            class="relative flex-1 max-w-[280px]"
          >
            <div class="relative flex flex-col items-center">
              <!-- Desktop Tree Branches -->
              <div v-if="index < 2" class="hidden md:block absolute top-0 left-1/2 w-[calc(50%+16px)] h-[2px] bg-line" />
              <div v-if="index > 0" class="hidden md:block absolute top-0 right-1/2 w-[calc(50%+16px)] h-[2px] bg-line" />
              <div class="hidden md:block absolute top-0 w-[2px] h-8 bg-line" />

              <!-- Mobile Vertical Connector -->
              <div v-if="index < 2" class="md:hidden absolute -bottom-8 w-[2px] h-8 bg-line" />

              <!-- Card -->
              <div class="w-full mt-0 md:mt-8 flex flex-col items-center bg-surface p-8 rounded-2xl border border-line hover:border-line-strong hover:-translate-y-1 transition-all duration-300 relative z-10">
                <img :src="mod.pfp" :alt="mod.name" class="w-20 h-20 rounded-full mb-4 object-cover shadow-sm">
                <h3 class="font-bold text-lg text-white">{{ mod.name }}</h3>
                <p class="text-sm text-fog mt-1">Moderator</p>
              </div>
            </div>
          </CommonReveal>
        </div>

        <!-- Gradient Fade Overlay -->
        <div class="absolute bottom-0 left-0 w-full h-[280px] bg-gradient-to-t from-ink via-ink/90 to-transparent pointer-events-none z-20" />
      </div>

      <!-- CTA Button -->
      <NuxtLink to="/members" class="relative z-30 mt-[-40px] flex items-center gap-3 px-8 py-4 bg-white hover:bg-zinc-200 text-black font-bold text-lg rounded-xl transition-all duration-300">
        View All Members
        <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
      </NuxtLink>
    </section>

    <!-- ============================ WHY JOIN ============================ -->
    <section class="relative w-full py-28 bg-ink-soft border-y border-line">
      <div class="max-w-6xl mx-auto px-6">
        <CommonSectionHeading eyebrow="Why NEXT-GEN" align="center">
          <template #title>More than a <span class="text-primary-500">Discord server</span></template>
          A place to learn, build, and grow your career — surrounded by people doing the same.
        </CommonSectionHeading>

        <div class="mt-16 grid grid-cols-1 md:grid-cols-12 gap-5">
          <CommonReveal variant="fade-up" class="md:col-span-7">
            <article class="group h-full bg-surface border border-line rounded-2xl p-8 md:p-10 hover:border-line-strong transition-colors relative overflow-hidden">
              <div class="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary-500/10 blur-2xl" />
              <span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500/15 text-primary-400">
                <UIcon name="i-heroicons-speaker-wave" class="w-6 h-6" />
              </span>
              <h3 class="mt-6 text-xl font-bold text-white">Study together, out loud</h3>
              <p class="mt-3 text-fog leading-relaxed">
                Camera-on study rooms, voice channels and focus sprints. Nobody learns alone here — the hardest part of starting is the part we help with.
              </p>
            </article>
          </CommonReveal>

          <CommonReveal variant="fade-up" :delay="80" class="md:col-span-5">
            <article class="h-full bg-surface border border-line rounded-2xl p-8 hover:border-line-strong transition-colors">
              <span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-zinc-300 border border-line">
                <UIcon name="i-heroicons-code-bracket-square" class="w-6 h-6" />
              </span>
              <h3 class="mt-6 text-xl font-bold text-white">Ship real projects</h3>
              <p class="mt-3 text-fog leading-relaxed">
                From weekend scripts to open-source tools — get reviews, collaborators and a portfolio that grows with you.
              </p>
            </article>
          </CommonReveal>

          <CommonReveal variant="fade-up" :delay="160" class="md:col-span-5">
            <article class="h-full bg-surface border border-line rounded-2xl p-8 hover:border-line-strong transition-colors">
              <span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-zinc-300 border border-line">
                <UIcon name="i-heroicons-academic-cap" class="w-6 h-6" />
              </span>
              <h3 class="mt-6 text-xl font-bold text-white">Mentorship & growth</h3>
              <p class="mt-3 text-fog leading-relaxed">
                Structured learning paths, code reviews and mentors who have been where you are. Careers start with one good conversation.
              </p>
            </article>
          </CommonReveal>

          <CommonReveal variant="fade-up" :delay="240" class="md:col-span-7">
            <article class="group h-full bg-surface border border-line rounded-2xl p-8 md:p-10 hover:border-line-strong transition-colors relative overflow-hidden">
              <div class="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-primary-500/10 blur-2xl" />
              <span class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500/15 text-primary-400">
                <UIcon name="i-heroicons-trophy" class="w-6 h-6" />
              </span>
              <h3 class="mt-6 text-xl font-bold text-white">Hackathons, events & game nights</h3>
              <p class="mt-3 text-fog leading-relaxed">
                Weekly study sprints, quarterly hackathons and the occasional chaos of a community game night. Momentum is easier when everyone else is moving too.
              </p>
            </article>
          </CommonReveal>
        </div>
      </div>
    </section>

    <!-- ============================ PROJECTS ============================ -->
    <section id="projects" class="relative w-full min-h-screen flex flex-col items-center pt-32 pb-32 overflow-hidden">
      <CommonReveal variant="fade-up" class="flex flex-col items-center text-center px-6">
        <h2 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          FEATURED PROJECTS
        </h2>
        <p class="mt-4 text-fog text-lg max-w-2xl">
          Explore the amazing tools, apps, and libraries built by our community members.
        </p>
      </CommonReveal>

      <!-- CoverFlow Container -->
      <div id="projects-container" class="w-full -mt-8 md:-mt-12 relative h-[800px]">
        <CommonCoverFlow :items="projects" :is-revealed="projectsRevealed" :initial-index="3" />

        <!-- Bottom Controls -->
        <div class="absolute -bottom-4 md:-bottom-8 left-0 right-0 flex flex-col items-center gap-6 pointer-events-none transition-opacity duration-1000 z-50" :class="projectsRevealed ? 'opacity-100' : 'opacity-0'">
          <!-- Navigation Hints -->
          <p class="text-white/40 text-xs md:text-sm tracking-[0.2em] uppercase">
            Drag <span class="mx-3 opacity-30">|</span> Horizontal Scroll <span class="mx-3 opacity-30">|</span> Keyboard
          </p>

          <!-- CTA Button -->
          <NuxtLink to="/projects" class="pointer-events-auto group flex items-center gap-3 px-8 py-4 bg-white hover:bg-zinc-200 text-black font-bold text-lg rounded-xl transition-all duration-300">
            VIEW ALL PROJECTS
            <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ============================ EVENTS + CTA ============================ -->
    <section class="relative w-full py-28 bg-ink-soft border-y border-line">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <!-- Upcoming events -->
          <div class="lg:col-span-7">
            <CommonSectionHeading align="left" eyebrow="Upcoming">
              <template #title>What's happening</template>
              A rhythm of events that keeps the community moving.
            </CommonSectionHeading>

            <div class="mt-10 space-y-0">
              <CommonReveal v-for="(event, i) in upcomingEvents" :key="event.title" variant="fade-up" :delay="i * 70">
                <div class="group flex items-center gap-6 py-6 border-b border-line last:border-b-0 hover:bg-white/[0.02] transition-colors -mx-4 px-4 rounded-xl">
                  <div class="flex flex-col items-center justify-center w-16 h-16 shrink-0 rounded-xl border border-line bg-surface">
                    <span class="text-xl font-extrabold text-white leading-none">{{ event.date }}</span>
                    <span class="mt-1 text-[10px] uppercase tracking-[0.18em] text-fog">{{ event.month }}</span>
                  </div>
                  <div class="min-w-0">
                    <span class="inline-block text-[10px] uppercase tracking-[0.18em] text-primary-400">{{ event.type }}</span>
                    <h3 class="mt-1 text-white font-bold truncate group-hover:text-zinc-200 transition-colors">{{ event.title }}</h3>
                    <p class="mt-1 text-sm text-fog line-clamp-2">{{ event.description }}</p>
                  </div>
                </div>
              </CommonReveal>
            </div>
          </div>

          <!-- CTA card -->
          <div class="lg:col-span-5">
            <CommonReveal variant="pop-in">
              <div class="h-full flex flex-col justify-center bg-surface border border-primary-500/30 rounded-2xl p-10 relative overflow-hidden">
                <div class="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary-500/15 blur-3xl" />
                <h3 class="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Your next project<br>starts here.
                </h3>
                <p class="mt-4 text-fog leading-relaxed">
                  Join 1,200+ programmers who study, build and grow together every single day.
                </p>
                <div class="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                  <NuxtLink :to="discordUrl" class="flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-colors">
                    <UIcon name="i-simple-icons-discord" class="w-5 h-5" />
                    Join the server
                  </NuxtLink>
                  <NuxtLink to="/community" class="flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-line text-white font-bold rounded-xl transition-colors">
                    Explore the community
                  </NuxtLink>
                </div>
              </div>
            </CommonReveal>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { projects as projectData } from '~/data/projects'
import { events as eventData } from '~/data/community'

import mod1 from '~/assets/images/pfp/mod1.png'
import mod2 from '~/assets/images/pfp/mod2.png'
import mod3 from '~/assets/images/pfp/mod3.png'

const discordUrl = 'https://discord.gg/8gTnXdU5Xd'

/* mock stats */
const stats = [
  { value: '1,200+', label: 'Members' },
  { value: '40+', label: 'Projects shipped' },
  { value: '25+', label: 'Mentors & volunteers' },
  { value: '12', label: 'Hackathons hosted' },
]

const moderators = [
  { name: '0xNA', pfp: mod1 },
  { name: 'Crunch', pfp: mod2 },
  { name: 'Divyansh', pfp: mod3 },
]

const projects = projectData
  .filter(p => p.featured)
  .map(({ title, description, tech, color }) => ({ title, description, tech, color }))

const upcomingEvents = eventData.filter(e => !e.past)

useHead({
  title: 'Home | NEXT-GEN Programmers',
})

const bgScale = ref(1)
const projectsRevealed = ref(false)
const projectObserver = ref<IntersectionObserver | null>(null)

const handleScroll = () => {
  bgScale.value = 1 + (Math.min(window.scrollY / 1000, 1) * 0.25)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })

  setTimeout(() => {
    const carousel = document.getElementById('projects-container')
    if (carousel) {
      projectObserver.value = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projectsRevealed.value = true
            projectObserver.value?.unobserve(entry.target)
          }
        })
      }, { threshold: 0.3 })
      projectObserver.value.observe(carousel)
    }
  }, 200)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  projectObserver.value?.disconnect()
})
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
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
</style>
