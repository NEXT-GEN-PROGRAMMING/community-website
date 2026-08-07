<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
    <!-- Header -->
    <div class="text-center">
      <CommonReveal variant="fade-up">
        <span class="text-[11px] uppercase tracking-[0.22em] text-primary-400">Showcase</span>
        <h1 class="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Community projects
        </h1>
        <p class="mt-4 text-fog max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Tools, bots, apps and experiments — everything built by members, for the community. Filter by category, difficulty or tech.
        </p>
      </CommonReveal>
    </div>

    <!-- Filter bar -->
    <CommonReveal variant="fade-up" :delay="100" class="mt-14">
      <div class="flex flex-col gap-4">
        <!-- Search + difficulty -->
        <div class="flex flex-col sm:flex-row gap-4 sm:items-center">
          <div class="relative flex-1 max-w-md w-full">
            <UIcon name="i-heroicons-magnifying-glass" class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-fog" />
            <label for="project-search" class="sr-only">Search projects</label>
            <input
              id="project-search"
              v-model="query"
              type="search"
              placeholder="Search by name, tech or description…"
              class="w-full pl-11 pr-4 py-3 bg-surface border border-line rounded-xl text-sm text-white placeholder:text-zinc-500 focus:border-primary-500 focus:outline-none transition-colors"
            >
          </div>

          <label for="difficulty" class="sr-only">Filter by difficulty</label>
          <select
            id="difficulty"
            v-model="difficulty"
            class="sm:w-48 px-4 py-3 bg-surface border border-line rounded-xl text-sm text-white cursor-pointer focus:border-primary-500 focus:outline-none transition-colors"
          >
            <option value="All">All difficulties</option>
            <option v-for="d in difficulties" :key="d" :value="d">{{ d }}</option>
          </select>
        </div>

        <!-- Category pills -->
        <div role="group" aria-label="Filter by category" class="flex flex-wrap items-center gap-2">
          <button
            v-for="cat in categories"
            :key="cat"
            type="button"
            class="px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            :class="category === cat
              ? 'bg-primary-500 text-white'
              : 'bg-surface text-fog border border-line hover:text-white hover:border-line-strong'"
            :aria-pressed="category === cat"
            @click="category = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </CommonReveal>

    <!-- Featured coverflow — only when no filters are active -->
    <section v-if="showFeatured" ref="featuredSection" aria-label="Featured projects" class="mt-8 relative h-[600px] md:h-[680px]">
      <CommonCoverFlow :items="featured" :initial-index="3" :is-revealed="featuredRevealed" :enable-reflection="false" />
      <p class="mt-10 text-center text-white/40 text-xs md:text-sm tracking-[0.2em] uppercase">
        Drag <span class="mx-3 opacity-30">|</span> Horizontal Scroll <span class="mx-3 opacity-30">|</span> Keyboard
      </p>
    </section>

    <!-- Results count -->
    <div class="mt-20 flex items-center justify-between border-t border-line pt-8">
      <h2 class="text-sm font-bold uppercase tracking-[0.18em] text-fog">
        {{ showFeatured ? 'All projects' : `${filtered.length} result${filtered.length === 1 ? '' : 's'}` }}
      </h2>
      <span v-if="!showFeatured" class="text-xs text-fog">Filtered by your selection</span>
    </div>

    <!-- Grid -->
    <div v-if="filtered.length" class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <CommonReveal v-for="project in filtered" :key="project.id" variant="fade-up">
        <ProjectsProjectCard :project="project" />
      </CommonReveal>
    </div>

    <!-- Empty state -->
    <CommonReveal v-if="filtered.length === 0" variant="fade-up" class="mt-10">
      <div class="flex flex-col items-center text-center py-16 bg-surface border border-dashed border-line rounded-2xl">
        <span class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/5 text-fog border border-line">
          <UIcon name="i-heroicons-cube-transparent" class="w-7 h-7" />
        </span>
        <h3 class="mt-6 text-lg font-bold text-white">No projects found</h3>
        <p class="mt-2 text-sm text-fog max-w-sm">
          Nothing matches those filters. Try broadening the search — or be the one who builds it.
        </p>
        <button
          type="button"
          class="mt-6 px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-bold rounded-lg transition-colors"
          @click="resetFilters"
        >
          Reset filters
        </button>
      </div>
    </CommonReveal>

    <!-- Bottom CTA -->
    <CommonReveal variant="fade-up" class="mt-24">
      <div class="relative overflow-hidden bg-surface border border-line rounded-2xl px-8 py-14 text-center">
        <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl" />
        <h2 class="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Built something you love?</h2>
        <p class="mt-3 text-fog max-w-xl mx-auto text-sm md:text-base">
          Share it with the community. The best projects get featured in the showcase on the homepage.
        </p>
        <a
          href="https://github.com/NEXT-GEN-PROGRAMMING/community-website"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-7 inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-colors"
        >
          <UIcon name="i-simple-icons-github" class="w-5 h-5" />
          Add your project
        </a>
      </div>
    </CommonReveal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { projects, categories, difficulties } from '~/data/projects'

useHead({
  title: 'Projects | NEXT-GEN Programmers',
})

const query = ref('')
const category = ref<'All' | string>('All')
const difficulty = ref<'All' | string>('All')

const featuredRevealed = ref(false)
const featuredSection = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

const featured = computed(() =>
  projects.filter(p => p.featured).map(({ title, description, tech, color }) => ({ title, description, tech, color })),
)

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return projects.filter((p) => {
    if (category.value !== 'All' && p.category !== category.value) return false
    if (difficulty.value !== 'All' && p.difficulty !== difficulty.value) return false
    if (!q) return true
    return [p.title, p.description, p.category, ...p.tech].join(' ').toLowerCase().includes(q)
  })
})

const showFeatured = computed(() =>
  category.value === 'All' && difficulty.value === 'All' && query.value.trim() === '',
)

const resetFilters = () => {
  query.value = ''
  category.value = 'All'
  difficulty.value = 'All'
}

onMounted(() => {
  if (!featuredSection.value) return
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        featuredRevealed.value = true
        observer?.unobserve(entry.target)
      }
    })
  }, { threshold: 0.2 })
  observer.observe(featuredSection.value)
})

onUnmounted(() => observer?.disconnect())
</script>
