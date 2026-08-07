<template>
  <article class="group relative h-full flex flex-col bg-surface border border-line rounded-2xl overflow-hidden hover:border-line-strong hover:-translate-y-1 transition-all duration-300">
    <!-- Gradient header -->
    <div class="relative h-36 shrink-0 overflow-hidden" :class="project.color">
      <div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
      <span v-if="project.featured" class="absolute top-4 left-4 text-[10px] uppercase tracking-[0.16em] font-bold text-white bg-primary-500 px-2.5 py-1 rounded-md">
        Featured
      </span>
    </div>

    <!-- Body -->
    <div class="flex flex-col flex-grow p-6">
      <div class="flex items-start justify-between gap-3">
        <h3 class="text-lg font-bold text-white tracking-tight">{{ project.title }}</h3>
        <span class="shrink-0 text-[10px] uppercase tracking-[0.14em] text-fog border border-line px-2 py-0.5 rounded-md">
          {{ project.difficulty }}
        </span>
      </div>

      <p class="mt-3 text-sm text-zinc-400 leading-relaxed flex-grow">
        {{ project.description }}
      </p>

      <!-- Tech -->
      <div class="mt-5 flex flex-wrap gap-1.5">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="px-2 py-0.5 text-[10px] text-zinc-400 border border-line rounded-md"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Links -->
      <div class="mt-5 pt-5 border-t border-line flex items-center justify-between">
        <span class="text-[10px] uppercase tracking-[0.16em] text-fog">{{ project.category }}</span>
        <div class="flex items-center gap-3">
          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live demo"
            class="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/5 border border-line hover:border-line-strong hover:text-white px-3 py-1.5 rounded-lg transition-colors"
          >
            Demo
            <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-3.5 h-3.5" />
          </a>
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            class="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/5 border border-line hover:border-line-strong px-3 py-1.5 rounded-lg transition-colors"
          >
            <UIcon name="i-simple-icons-github" class="w-3.5 h-3.5" />
            Source
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
}>()
</script>
