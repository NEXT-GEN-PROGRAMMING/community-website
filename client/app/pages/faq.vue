<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
    <!-- Header + search -->
    <div class="text-center">
      <CommonReveal variant="fade-up">
        <span class="text-[11px] uppercase tracking-[0.22em] text-primary-400">FAQ</span>
        <h1 class="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Questions, answered
        </h1>
        <p class="mt-4 text-fog max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Everything you need to know about joining, learning and building with NEXT-GEN. Can't find it here? Reach out below.
        </p>
      </CommonReveal>

      <CommonReveal variant="fade-up" :delay="100" class="mt-10 max-w-xl mx-auto">
        <div class="relative">
          <UIcon name="i-heroicons-magnifying-glass" class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-fog" />
          <label for="faq-search" class="sr-only">Search frequently asked questions</label>
          <input
            id="faq-search"
            v-model="query"
            type="search"
            placeholder="Search the FAQ…"
            class="w-full pl-11 pr-4 py-3.5 bg-surface border border-line rounded-xl text-sm text-white placeholder:text-zinc-500 focus:border-primary-500 focus:outline-none transition-colors"
          >
        </div>
      </CommonReveal>
    </div>

    <!-- Category pills -->
    <CommonReveal variant="fade-up" :delay="150" class="mt-8">
      <div role="group" aria-label="Filter by category" class="flex flex-wrap justify-center items-center gap-2">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          type="button"
          class="px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          :class="activeCategory === tab.value
            ? 'bg-primary-500 text-white'
            : 'bg-surface text-fog border border-line hover:text-white hover:border-line-strong'"
          :aria-pressed="activeCategory === tab.value"
          @click="setCategory(tab.value)"
        >
          {{ tab.label }}
        </button>
      </div>
    </CommonReveal>

    <!-- Accordion sections -->
    <div v-if="visibleCategories.length" class="mt-14 space-y-10">
      <section
        v-for="category in visibleCategories"
        :key="category.id"
        :aria-labelledby="`faq-cat-${category.id}`"
      >
        <CommonReveal variant="fade-up">
          <div class="flex items-center gap-3 mb-5">
            <h2 :id="`faq-cat-${category.id}`" class="text-sm font-bold uppercase tracking-[0.18em] text-fog">
              {{ category.label }}
            </h2>
            <span class="w-px h-4 bg-line" />
            <span class="text-xs text-zinc-500">{{ category.questions.length }}</span>
          </div>
        </CommonReveal>

        <div class="space-y-3">
          <CommonReveal
            v-for="(item, index) in category.questions"
            :key="item.q"
            variant="fade-up"
            :delay="index * 50"
          >
            <FaqAccordionItem :id="`${category.id}-${index}`" :question="item.q" :answer="item.a" />
          </CommonReveal>
        </div>
      </section>
    </div>

    <!-- Empty search state -->
    <CommonReveal v-if="visibleCategories.length === 0" variant="fade-up" class="mt-16">
      <div class="flex flex-col items-center text-center py-16 bg-surface border border-dashed border-line rounded-2xl">
        <span class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/5 text-fog border border-line">
          <UIcon name="i-heroicons-question-mark-circle" class="w-7 h-7" />
        </span>
        <h2 class="mt-6 text-lg font-bold text-white">No matching questions</h2>
        <p class="mt-2 text-sm text-fog max-w-sm">
          Nothing matched "{{ query }}". Try different keywords, or ask the community directly.
        </p>
        <button
          type="button"
          class="mt-6 px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-bold rounded-lg transition-colors"
          @click="resetSearch"
        >
          Clear search
        </button>
      </div>
    </CommonReveal>

    <!-- Contact -->
    <CommonReveal variant="fade-up" class="mt-24">
      <div class="relative overflow-hidden bg-surface border border-line rounded-2xl px-8 py-14 text-center">
        <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl" />
        <h2 class="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Still have a question?</h2>
        <p class="mt-3 text-fog max-w-xl mx-auto text-sm md:text-base">
          The fastest way to an answer is to ask the community itself. Someone will respond in minutes, not days.
        </p>
        <div class="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            :href="discordUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-colors"
          >
            <UIcon name="i-simple-icons-discord" class="w-5 h-5" />
            Ask on Discord
          </a>
          <NuxtLink
            to="/community"
            class="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-line text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
          >
            Browse the community
          </NuxtLink>
        </div>
      </div>
    </CommonReveal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { faqCategories } from '~/data/faq'

useHead({
  title: 'FAQ | NEXT-GEN Programmers',
})

const discordUrl = 'https://discord.gg/8gTnXdU5Xd'

const query = ref('')
const activeCategory = ref<'All' | string>('All')

const tabs = computed(() => [
  { value: 'All', label: 'All' },
  ...faqCategories.map(c => ({ value: c.id, label: c.label })),
])

const setCategory = (value: string) => {
  activeCategory.value = value
}

const visibleCategories = computed(() => {
  const q = query.value.trim().toLowerCase()

  const matches = (category: typeof faqCategories[number]) => {
    if (activeCategory.value !== 'All' && category.id !== activeCategory.value) return false
    if (!q) return true
    return category.questions.some(item =>
      `${item.q} ${item.a} ${category.label}`.toLowerCase().includes(q),
    )
  }

  const filtered = faqCategories
    .map(category => ({
      ...category,
      questions: q
        ? category.questions.filter(item =>
            `${item.q} ${item.a}`.toLowerCase().includes(q),
          )
        : category.questions,
    }))
    .filter(matches)

  return filtered
})

const resetSearch = () => {
  query.value = ''
  activeCategory.value = 'All'
}
</script>
