<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
    <!-- Header -->
    <div class="text-center">
      <CommonReveal variant="fade-up">
        <span class="text-[11px] uppercase tracking-[0.22em] text-primary-400">Community</span>
        <h1 class="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          One server, endless momentum
        </h1>
        <p class="mt-4 text-fog max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          NEXT-GEN is not just another Discord server. It is a virtual home for programmers — a place to learn, build and grow together.
        </p>
      </CommonReveal>
    </div>

    <!-- Manifesto -->
    <section class="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <CommonReveal variant="fade-up">
        <h2 class="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
          We build in public.<br>
          We learn in <span class="text-primary-500">public</span> too.
        </h2>
        <p class="mt-5 text-fog leading-relaxed">
          No question is too basic, no idea too small. Everyone here started somewhere, and the community is built on the belief that programmers grow fastest when they grow together.
        </p>
        <ul class="mt-8 space-y-4">
          <li v-for="belief in beliefs" :key="belief" class="flex items-start gap-3 text-sm text-zinc-300">
            <span class="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-500/15 text-primary-400 shrink-0">
              <UIcon name="i-heroicons-check" class="w-3.5 h-3.5" />
            </span>
            {{ belief }}
          </li>
        </ul>
      </CommonReveal>

      <CommonReveal variant="pop-in" :delay="120">
        <figure class="bg-surface border border-line rounded-2xl p-8 md:p-10">
          <blockquote class="text-lg md:text-xl text-zinc-200 leading-relaxed">
            "I joined to lurk and ask one question. A year later I have a mentor, two shipped projects and a group chat that checks on me when I disappear for a week."
          </blockquote>
          <figcaption class="mt-6 flex items-center gap-3">
            <span class="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/40 to-primary-900/20 border border-line flex items-center justify-center text-white font-bold text-sm">M</span>
            <div>
              <p class="text-sm font-bold text-white">Mia</p>
              <p class="text-xs text-fog">Core Contributor</p>
            </div>
          </figcaption>
        </figure>
      </CommonReveal>
    </section>

    <!-- Channels -->
    <section class="mt-28">
      <CommonSectionHeading align="left" eyebrow="Channels">
        <template #title>Rooms for everything</template>
        Organised by intent, moderated by people who care. There is a channel for every stage of the journey.
      </CommonSectionHeading>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <CommonReveal v-for="group in channelGroups" :key="group.label" variant="fade-up">
          <article class="h-full bg-surface border border-line rounded-2xl p-6 hover:border-line-strong hover:-translate-y-1 transition-all duration-300">
            <span class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary-500/15 text-primary-400">
              <UIcon :name="group.icon" class="w-5 h-5" />
            </span>
            <h3 class="mt-5 font-bold text-white">{{ group.label }}</h3>
            <p class="mt-2 text-sm text-fog leading-relaxed">{{ group.description }}</p>
            <div class="mt-4 flex flex-wrap gap-1.5">
              <span v-for="channel in group.channels" :key="channel" class="px-2 py-0.5 text-[10px] text-zinc-400 border border-line rounded-md">
                {{ channel }}
              </span>
            </div>
          </article>
        </CommonReveal>
      </div>
    </section>

    <!-- Events timeline -->
    <section class="mt-28">
      <CommonSectionHeading align="left" eyebrow="Events & Hackathons">
        <template #title>What's coming up</template>
        A steady rhythm of hackathons, workshops, study sessions and meetups.
      </CommonSectionHeading>

      <div class="relative mt-12 ml-2 md:ml-4">
        <div aria-hidden="true" class="absolute left-2 top-1 bottom-1 w-px bg-line" />
        <ol class="space-y-8">
          <CommonReveal v-for="event in events" :key="event.title" variant="fade-up" class="relative pl-10 md:pl-14">
            <span aria-hidden="true" class="absolute left-[-5px] top-1.5 w-[11px] h-[11px] rounded-full bg-primary-500 ring-4 ring-primary-500/20" />
            <div class="flex flex-col sm:flex-row sm:items-start sm:gap-6">
              <div class="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-0 sm:w-20 shrink-0">
                <span class="text-2xl font-extrabold text-white leading-none">{{ event.date }}</span>
                <span class="sm:mt-1 text-[10px] uppercase tracking-[0.18em] text-fog">{{ event.month }}</span>
              </div>
              <div class="flex-1 bg-surface border border-line rounded-2xl p-6 hover:border-line-strong transition-colors">
                <span class="text-[10px] uppercase tracking-[0.18em] text-primary-400">{{ event.type }}</span>
                <h3 class="mt-1.5 text-lg font-bold text-white">{{ event.title }}</h3>
                <p class="mt-2 text-sm text-fog leading-relaxed">{{ event.description }}</p>
              </div>
            </div>
          </CommonReveal>
        </ol>
      </div>
    </section>

    <!-- Learning paths -->
    <section class="mt-28">
      <CommonSectionHeading align="left" eyebrow="Learning Paths">
        <template #title>Grow on rails</template>
        Structured paths with checkpoints, mentors and a support system — so "what do I learn next?" is never a dead end.
      </CommonSectionHeading>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        <CommonReveal v-for="path in learningPaths" :key="path.title" variant="fade-up">
          <article class="h-full bg-surface border border-line rounded-2xl p-7 hover:border-line-strong hover:-translate-y-1 transition-all duration-300">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-bold text-white">{{ path.title }}</h3>
              <span class="text-[10px] uppercase tracking-[0.14em] text-primary-400 border border-primary-500/30 px-2 py-0.5 rounded-md">{{ path.level }}</span>
            </div>
            <p class="mt-3 text-sm text-fog leading-relaxed">{{ path.description }}</p>
            <div class="mt-5 flex flex-wrap gap-1.5">
              <span v-for="topic in path.topics" :key="topic" class="px-2 py-0.5 text-[10px] text-zinc-400 border border-line rounded-md">
                {{ topic }}
              </span>
            </div>
            <p class="mt-5 pt-4 border-t border-line text-xs text-fog flex items-center gap-2">
              <UIcon name="i-heroicons-clock" class="w-3.5 h-3.5" />
              {{ path.weeks }}
            </p>
          </article>
        </CommonReveal>
      </div>
    </section>

    <!-- Resources -->
    <section class="mt-28">
      <CommonSectionHeading align="left" eyebrow="Resources">
        <template #title>Everything you need</template>
        Community-curated guides, templates and references — free for every member.
      </CommonSectionHeading>

      <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <CommonReveal v-for="resource in resources" :key="resource.title" variant="fade-up">
          <a
            :href="resource.href"
            class="group h-full flex flex-col bg-surface border border-line rounded-2xl p-6 hover:border-primary-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            <span class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 text-zinc-300 border border-line">
              <UIcon :name="resource.icon" class="w-5 h-5" />
            </span>
            <h3 class="mt-5 font-bold text-white group-hover:text-primary-400 transition-colors">{{ resource.title }}</h3>
            <p class="mt-2 text-sm text-fog leading-relaxed flex-grow">{{ resource.description }}</p>
            <span class="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary-400">
              Open
              <UIcon name="i-heroicons-arrow-right" class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </CommonReveal>
      </div>
    </section>

    <!-- CTA -->
    <CommonReveal variant="fade-up" class="mt-28">
      <div class="relative overflow-hidden bg-surface border border-line rounded-2xl px-8 py-16 text-center">
        <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl" />
        <h2 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          There's a seat for you.
        </h2>
        <p class="mt-4 text-fog max-w-xl mx-auto text-sm md:text-base">
          Join the study rooms, ship a project, and meet the people who make programming fun again.
        </p>
        <NuxtLink
          :to="discordUrl"
          class="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-all shadow-[0_8px_32px_rgba(228,0,43,0.35)] hover:shadow-[0_12px_40px_rgba(228,0,43,0.5)] hover:-translate-y-0.5"
        >
          <UIcon name="i-simple-icons-discord" class="w-5 h-5" />
          Join the server
        </NuxtLink>
      </div>
    </CommonReveal>
  </div>
</template>

<script setup lang="ts">
import { channelGroups, events, learningPaths, resources } from '~/data/community'

useHead({
  title: 'Community | NEXT-GEN Programmers',
})

const discordUrl = 'https://discord.gg/8gTnXdU5Xd'

const beliefs = [
  'Ask anything, no matter how basic — someone is always happy to help.',
  'Build in public and ship often; momentum is contagious.',
  'Review code kindly and treat every contributor like a teammate.',
  'Balance is part of the culture: study hard, but game night is sacred.',
]
</script>
