<template>
  <UApp>
    <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <UContainer class="text-center space-y-6">
        <h1 class="text-5xl font-bold tracking-tight text-primary-400">
          THIS IS DRAFT
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Contributors are free to customize this site. The frontend is powered by Nuxt 4, Tailwind CSS, Nuxt UI, Pinia, and VueUse.
        </p>
        
        <UButton size="lg" color="primary" variant="solid" @click="toast.add({ title: 'Welcome to NEXT-GEN' })">
          Click to Test UI
        </UButton>
      </UContainer>
    </div>
  </UApp>
</template>

<script setup>
const toast = useToast()
</script>