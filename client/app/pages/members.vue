<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
    <!-- Header -->
    <div class="text-center">
      <CommonReveal variant="fade-up">
        <span class="text-[11px] uppercase tracking-[0.22em] text-primary-400">The People</span>
        <h1 class="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Meet the members
        </h1>
        <p class="mt-4 text-fog max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          The owners, moderators, mentors and contributors who keep NEXT-GEN alive — and the builders behind everything you see here.
        </p>
      </CommonReveal>
    </div>

    <!-- Filter bar -->
    <CommonReveal variant="fade-up" :delay="100" class="mt-14">
      <div class="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
        <!-- Search -->
        <div class="relative flex-1 max-w-md w-full">
          <UIcon name="i-heroicons-magnifying-glass" class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-fog" />
          <label for="member-search" class="sr-only">Search members</label>
          <input
            id="member-search"
            v-model="query"
            type="search"
            placeholder="Search by name, language or bio…"
            class="w-full pl-11 pr-4 py-3 bg-surface border border-line rounded-xl text-sm text-white placeholder:text-zinc-500 focus:border-primary-500 focus:outline-none transition-colors"
          >
        </div>

        <!-- Role pills -->
        <div role="group" aria-label="Filter by role" class="flex flex-wrap items-center gap-2">
          <button
            v-for="filter in roleFilters"
            :key="filter.value"
            type="button"
            class="px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            :class="activeRole === filter.value
              ? 'bg-primary-500 text-white'
              : 'bg-surface text-fog border border-line hover:text-white hover:border-line-strong'"
            :aria-pressed="activeRole === filter.value"
            @click="activeRole = filter.value"
          >
            {{ filter.label }}
            <span class="ml-1.5 opacity-60">{{ filter.count }}</span>
          </button>
        </div>
      </div>
    </CommonReveal>

    <!-- Leadership -->
    <template v-if="isAllFilter">
      <div v-if="leadership.length" class="mt-14">
        <CommonReveal variant="fade-up" class="mb-6">
          <h2 class="text-sm font-bold uppercase tracking-[0.18em] text-fog">Leadership</h2>
        </CommonReveal>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CommonReveal v-for="member in leadership" :key="member.id" variant="fade-up">
            <MembersMemberCard :member="member" />
          </CommonReveal>
        </div>
      </div>

      <div v-if="core.length" class="mt-14">
        <CommonReveal variant="fade-up" class="mb-6">
          <h2 class="text-sm font-bold uppercase tracking-[0.18em] text-fog">The Core</h2>
        </CommonReveal>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <CommonReveal v-for="member in core" :key="member.id" variant="fade-up">
            <MembersMemberCard :member="member" />
          </CommonReveal>
        </div>
      </div>
    </template>

    <!-- Filtered grid -->
    <template v-else>
      <div v-if="filtered.length" class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <CommonReveal v-for="member in filtered" :key="member.id" variant="fade-up">
          <MembersMemberCard :member="member" />
        </CommonReveal>
      </div>
    </template>

    <!-- Empty state -->
    <CommonReveal v-if="filtered.length === 0" variant="fade-up" class="mt-20">
      <div class="flex flex-col items-center text-center py-16 bg-surface border border-dashed border-line rounded-2xl">
        <span class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/5 text-fog border border-line">
          <UIcon name="i-heroicons-user-group" class="w-7 h-7" />
        </span>
        <h3 class="mt-6 text-lg font-bold text-white">No members found</h3>
        <p class="mt-2 text-sm text-fog max-w-sm">
          Nobody matches "{{ query }}" in this role yet. Try a different search or clear the filters.
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
        <h2 class="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Want to be on this page?</h2>
        <p class="mt-3 text-fog max-w-xl mx-auto text-sm md:text-base">
          Start contributing — help others in the community, ship a project, and one day your name will be up here too.
        </p>
        <NuxtLink
          to="/community"
          class="mt-7 inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-zinc-200 text-black font-bold rounded-xl transition-colors"
        >
          Explore the community
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
        </NuxtLink>
      </div>
    </CommonReveal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { members, roleOrder, roleMeta, type MemberRole } from '~/data/members'

useHead({
  title: 'Members | NEXT-GEN Programmers',
})

const query = ref('')
const activeRole = ref<'All' | MemberRole>('All')
const isAllFilter = computed(() => activeRole.value === 'All')

const roleFilters = computed(() => [
  { value: 'All' as const, label: 'All', count: members.length },
  ...roleOrder.map(role => ({
    value: role,
    label: roleMeta[role].label,
    count: members.filter(m => m.role === role).length,
  })),
])

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return members.filter((m) => {
    const matchesRole = isAllFilter.value || m.role === activeRole.value
    if (!matchesRole) return false
    if (!q) return true
    return [
      m.name,
      m.handle,
      m.bio,
      m.roleLabel,
      ...m.languages,
    ].join(' ').toLowerCase().includes(q)
  })
})

const leadership = computed(() => filtered.value.filter(m => m.role === 'owner' || m.role === 'admin'))
const core = computed(() => filtered.value.filter(m => m.role !== 'owner' && m.role !== 'admin'))

const resetFilters = () => {
  query.value = ''
  activeRole.value = 'All'
}
</script>
