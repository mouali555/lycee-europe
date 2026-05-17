<template>
  <div class="min-h-screen bg-slate-950 text-white p-8 md:p-16 relative overflow-hidden selection:bg-blue-500">
    <!-- Background element -->
    <div class="fixed top-0 left-0 w-full h-screen overflow-hidden bg-slate-950 z-0 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-black to-black"></div>
      <video 
        class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-40 mix-blend-screen blur-[2px]"
        muted 
        playsinline
        autoplay
        loop
        src="/video-fond.mp4"
      ></video>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/40 to-black"></div>
    </div>
    
    <div class="relative z-10 max-w-6xl mx-auto">
      <NuxtLink to="/" class="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 group transition-colors">
        <span class="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Retour au portail
      </NuxtLink>
      
      <h1 class="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">Nos Filières</h1>
      <p class="text-xl text-gray-400 mb-16 max-w-2xl">Découvrez les parcours d'excellence proposés au Lycée de l'Europe, de la seconde à l'enseignement supérieur.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Voie Générale -->
        <div class="bg-blue-950/30 border border-blue-900/50 p-8 rounded-2xl hover:border-blue-500/50 hover:bg-blue-900/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
          <div class="text-4xl mb-4">📚</div>
          <h2 class="text-2xl font-bold text-white mb-3">Voie Générale</h2>
          <p class="text-gray-400 mb-4">Un parcours exigeant préparant aux études supérieures longues.</p>
          <ul class="text-sm text-gray-300 space-y-2">
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Spécialité Mathématiques & Physique-Chimie</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Spécialité SVT</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Spécialité Sciences de l'Ingénieur (SI)</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Spécialité NSI (Numérique)</li>
          </ul>
        </div>

        <!-- Voie Technologique -->
        <div class="bg-blue-950/30 border border-blue-900/50 p-8 rounded-2xl hover:border-blue-500/50 hover:bg-blue-900/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
          <div class="text-4xl mb-4">🔬</div>
          <h2 class="text-2xl font-bold text-white mb-3">Voie Technologique</h2>
          <p class="text-gray-400 mb-4">L'alliance parfaite entre la théorie et la pratique en laboratoire et atelier.</p>
          <ul class="text-sm text-gray-300 space-y-2">
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Bac STI2D (Industrie et Développement Durable)</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Bac STL (Sciences et Technologies de Laboratoire)</li>
          </ul>
        </div>

        <!-- Voie Professionnelle -->
        <div class="bg-blue-950/30 border border-blue-900/50 p-8 rounded-2xl hover:border-blue-500/50 hover:bg-blue-900/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
          <div class="text-4xl mb-4">⚙️</div>
          <h2 class="text-2xl font-bold text-white mb-3">Voie Professionnelle</h2>
          <p class="text-gray-400 mb-4">Pour une insertion rapide dans la vie active ou une poursuite d'études ciblée.</p>
          <ul class="text-sm text-gray-300 space-y-2">
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Métiers du numérique et de la transition énergétique</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Bac Pro MELEC (Électricité et environnements connectés)</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Bac Pro CIEL (Cyber/Électronique)</li>
          </ul>
        </div>

        <!-- Enseignement Supérieur -->
        <div class="bg-blue-950/30 border border-blue-900/50 p-8 rounded-2xl hover:border-blue-500/50 hover:bg-blue-900/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
          <div class="text-4xl mb-4">🚀</div>
          <h2 class="text-2xl font-bold text-white mb-3">Post-Bac & Supérieur</h2>
          <p class="text-gray-400 mb-4">Nos formations d'études supérieures (Statut étudiant ou apprentissage).</p>
          <ul class="text-sm text-gray-300 space-y-2">
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> BTS Électrotechnique & BTS CIRA</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> BTS Cybersécurité, Informatique et réseaux (CIEL)</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> CPGE (Classes Préparatoires TSI)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>