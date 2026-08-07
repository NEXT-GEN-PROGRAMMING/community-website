<template>
  <article
    class="group relative h-full flex flex-col bg-surface border border-line rounded-2xl p-6 hover:border-line-strong hover:-translate-y-1 transition-all duration-300"
  >
    <!-- Avatar -->
    <div class="flex items-start justify-between">
      <img
        v-if="member.pfp"
        :src="member.pfp"
        :alt="member.name"
        class="w-16 h-16 rounded-2xl object-cover border border-line"
      >
      <div
        v-else
        aria-hidden="true"
        class="w-16 h-16 rounded-2xl border border-line flex items-center justify-center text-white font-extrabold text-lg"
        :class="avatarGradient"
      >
        {{ initials }}
      </div>

      <span
        class="text-[10px] uppercase tracking-[0.16em] px-2.5 py-1 rounded-md font-bold"
        :class="leadershipRole ? 'bg-primary-500/15 text-primary-400' : 'bg-white/5 text-fog border border-line'"
      >
        {{ member.roleLabel }}
      </span>
    </div>

    <!-- Identity -->
    <h3 class="mt-5 text-lg font-bold text-white truncate">{{ member.name }}</h3>
    <p class="mt-0.5 text-xs text-fog">{{ member.handle }}</p>

    <!-- Bio -->
    <p class="mt-4 text-sm text-zinc-400 leading-relaxed flex-grow">
      {{ member.bio }}
    </p>

    <!-- Languages -->
    <div class="mt-5 flex flex-wrap gap-1.5">
      <span
        v-for="lang in member.languages"
        :key="lang"
        class="px-2 py-0.5 text-[10px] text-zinc-400 border border-line rounded-md"
      >
        {{ lang }}
      </span>
    </div>

    <!-- Links -->
    <div v-if="member.github || member.x" class="mt-5 pt-5 border-t border-line flex items-center gap-3">
      <a
        v-if="member.github"
        :href="member.github"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`${member.name} on GitHub`"
        class="text-fog hover:text-white transition-colors"
      >
        <UIcon name="i-simple-icons-github" class="w-4 h-4" />
      </a>
      <a
        v-if="member.x"
        :href="member.x"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`${member.name} on X`"
        class="text-fog hover:text-white transition-colors"
      >
        <UIcon name="i-simple-icons-x" class="w-4 h-4" />
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Member } from '~/data/members'

const props = defineProps<{
  member: Member
}>()

const leadershipRole = computed(() =>
  ['owner', 'admin', 'moderator'].includes(props.member.role),
)

const initials = computed(() => {
  const words = props.member.name.split(' ').filter(Boolean)
  return words.slice(0, 2).map(w => w[0]?.toUpperCase()).join('')
})

const gradients = [
  'bg-gradient-to-br from-primary-500/40 to-primary-900/20',
  'bg-gradient-to-br from-zinc-400/25 to-zinc-900/50',
  'bg-gradient-to-br from-rose-500/30 to-ink',
  'bg-gradient-to-br from-primary-700/40 to-zinc-900/40',
]

const avatarGradient = computed(() => {
  const sum = [...props.member.name].reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return gradients[sum % gradients.length]
})
</script>
