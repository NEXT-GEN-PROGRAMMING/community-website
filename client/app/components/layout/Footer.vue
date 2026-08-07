<template>
  <footer class="relative border-t border-line">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <!-- Brand -->
        <div class="md:col-span-5">
          <NuxtLink to="/" class="flex items-center gap-2.5 group w-fit">
            <img src="~/assets/images/logo.jpg" alt="NEXT-GEN Logo" class="w-8 h-8 rounded-[10px] object-cover" >
            <span class="text-white font-bold text-lg tracking-tight">NEXT-GEN</span>
          </NuxtLink>
          <p class="mt-4 text-sm text-fog leading-relaxed max-w-sm">
            A virtual home for programmers. Code, learn, connect and build together — one community, endless possibilities.
          </p>
          <a
            :href="discordUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-bold rounded-lg transition-colors"
          >
            <UIcon name="i-simple-icons-discord" class="w-4 h-4" />
            Join the server
          </a>
        </div>

        <!-- Pages -->
        <div class="md:col-span-3">
          <h3 class="text-white text-sm font-bold uppercase tracking-[0.18em]">Explore</h3>
          <ul class="mt-4 space-y-3 text-sm">
            <li v-for="link in pageLinks" :key="link.path">
              <NuxtLink :to="link.path" class="text-fog hover:text-white transition-colors">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Community -->
        <div class="md:col-span-2">
          <h3 class="text-white text-sm font-bold uppercase tracking-[0.18em]">Community</h3>
          <ul class="mt-4 space-y-3 text-sm">
            <li v-for="link in socialLinks" :key="link.label">
              <a :href="link.href" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-fog hover:text-white transition-colors">
                <UIcon :name="link.icon" class="w-4 h-4" />
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Projects -->
        <div class="md:col-span-2">
          <h3 class="text-white text-sm font-bold uppercase tracking-[0.18em]">Open Source</h3>
          <ul class="mt-4 space-y-3 text-sm">
            <li>
              <a href="https://github.com/NEXT-GEN-PROGRAMMING" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-fog hover:text-white transition-colors">
                <UIcon name="i-simple-icons-github" class="w-4 h-4" />
                GitHub Org
              </a>
            </li>
            <li>
              <NuxtLink to="/projects" class="text-fog hover:text-white transition-colors">
                Community projects
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/community" class="text-fog hover:text-white transition-colors">
                Resources
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-14 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
        <p>© {{ new Date().getFullYear() }} NEXT-GEN Programmers. Built by the community, for the community.</p>
        <p class="flex items-center gap-1.5">
          <span class="inline-block w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
          Open source · MIT License
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const discordUrl = 'https://discord.gg/8gTnXdU5Xd'

const pageLinks = [
  { name: 'Members', path: '/members' },
  { name: 'Projects', path: '/projects' },
  { name: 'Community', path: '/community' },
  { name: 'FAQ', path: '/faq' },
]

const socialLinks = [
  { label: 'Discord', href: discordUrl, icon: 'i-simple-icons-discord' },
  { label: 'GitHub', href: 'https://github.com/NEXT-GEN-PROGRAMMING', icon: 'i-simple-icons-github' },
  { label: 'X / Twitter', href: 'https://x.com', icon: 'i-simple-icons-x' },
]
</script>
