<template>
  <div class="relative w-full bg-black">
    
    <!-- Vidéo en position fixe (Arrière-plan) -->
    <div class="fixed top-0 left-0 w-full h-screen overflow-hidden bg-slate-950 z-0 pointer-events-none">
      <!-- Fond de secours au cas où la vidéo n'est pas encore téléchargée -->
      <div class="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-black to-black"></div>
      
      <video 
        class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-40 mix-blend-screen blur-[2px]"
        muted 
        playsinline
        autoplay
        loop
        src="/video-fond.mp4"
      ></video>
      <!-- Dégradé pour assombrir le bas de la vidéo et rendre le texte plus lisible -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/40 to-black"></div>
    </div>
    
    <!-- Contenu scrollable par dessus (z-10) -->
    <div class="relative z-10 flex flex-col w-full text-white">
      
      <!-- Section 1 : Héro / Titre -->
      <section class="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div class="observe-me opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <h1 class="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-400">
            LYCÉE DE<br />L'EUROPE
          </h1>
          <p class="text-xl md:text-2xl text-gray-400 max-w-2xl font-light mx-auto">
            L'excellence à Dunkerque. Voies générales, technologiques et professionnelles.
          </p>
          <div class="mt-16 animate-bounce text-blue-500 text-2xl">
            &darr;
          </div>
        </div>
      </section>

      <!-- Section 2 : Présentation (Texte à gauche) -->
      <section class="min-h-screen flex flex-col justify-center px-8 md:px-32 max-w-7xl mx-auto w-full">
        <div class="max-w-2xl observe-me opacity-0 translate-y-12 transition-all duration-1000 delay-100 ease-out">
          <h2 class="text-4xl md:text-6xl font-bold mb-6 text-gray-200">Bâtir votre avenir.</h2>
          <p class="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
            Du Baccalauréat au BTS, le Lycée Polyvalent de l'Europe vous accompagne vers la réussite. 
            Nous offrons un cadre d'apprentissage stimulant, tourné vers l'innovation, 
            les sciences et les technologies de demain.
          </p>
        </div>
      </section>

      <!-- Section 3 : Technologie (Texte à droite) -->
      <section class="min-h-screen flex flex-col justify-center items-end px-8 md:px-32 max-w-7xl mx-auto w-full text-right">
        <div class="max-w-2xl observe-me opacity-0 translate-y-12 transition-all duration-1000 delay-100 ease-out">
          <h2 class="text-4xl md:text-6xl font-bold mb-6 text-gray-200">Des filières de pointe.</h2>
          <p class="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
            Profitez de nos plateaux techniques de haut niveau. Que ce soit en filière STI2D, STL, 
            ou dans nos sections professionnelles et supérieures, la théorie s'allie toujours à la pratique.
          </p>
        </div>
      </section>

      <!-- Section 4 : Liens Rapides -->
      <section class="min-h-[60vh] flex flex-col items-center justify-center px-8 w-full bg-gradient-to-t from-black to-transparent mt-20 py-16">
        <div class="observe-me opacity-0 translate-y-12 transition-all duration-1000 ease-out w-full max-w-6xl">
          <h3 class="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400">Portail Lycéen</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-center">
            <a href="https://maps.app.goo.gl/4QZAs38gWQ5H28Yu9" target="_blank" class="relative overflow-hidden p-8 rounded-2xl bg-blue-950/20 border border-blue-900/40 hover:bg-blue-900/40 hover:border-blue-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 group backdrop-blur-sm before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">📍</div>
              <div class="font-semibold text-lg text-gray-200">Localisation</div>
              <div class="text-sm text-gray-500 mt-2">Venir au lycée</div>
            </a>
            <NuxtLink to="/filieres" class="relative overflow-hidden p-8 rounded-2xl bg-blue-950/20 border border-blue-900/40 hover:bg-blue-900/40 hover:border-blue-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 group backdrop-blur-sm before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">🎓</div>
              <div class="font-semibold text-lg text-gray-200">Filières</div>
              <div class="text-sm text-gray-500 mt-2">Découvrir nos voies</div>
            </NuxtLink>
            <a href="https://0590072h.index-education.net/pronote/eleve.html?login=true" target="_blank" class="relative overflow-hidden p-8 rounded-2xl bg-blue-950/20 border border-blue-900/40 hover:bg-blue-900/40 hover:border-blue-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 group backdrop-blur-sm before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">📝</div>
              <div class="font-semibold text-lg text-gray-200">Pronote</div>
              <div class="text-sm text-gray-500 mt-2">Espace scolarité</div>
            </a>
            <NuxtLink to="/clubs" class="relative overflow-hidden p-8 rounded-2xl bg-blue-950/20 border border-blue-900/40 hover:bg-blue-900/40 hover:border-blue-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 group backdrop-blur-sm before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">🎭</div>
              <div class="font-semibold text-lg text-gray-200">Clubs CVL</div>
              <div class="text-sm text-gray-500 mt-2">Vie lycéenne</div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Section 5 : Footer Minimaliste & Lien Secret -->
      <section class="min-h-[20vh] flex flex-col items-center justify-end pb-12 bg-black">
        <div class="w-16 h-[1px] bg-blue-900 mb-8"></div>
        <p class="text-sm text-gray-700 font-mono tracking-widest uppercase">
          © 2024 LYCÉE DE L'EUROPE - DUNKERQUE<NuxtLink to="/chat" class="cursor-default text-gray-700 hover:text-white transition-colors duration-1000">.</NuxtLink>
        </p>
      </section>

    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

let observer = null

onMounted(() => {
  // On sélectionne tous les éléments avec la classe "observe-me"
  const elements = document.querySelectorAll('.observe-me')
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Quand l'élément entre dans l'écran, on enlève l'opacité 0 et le décalage bas
        entry.target.classList.remove('opacity-0', 'translate-y-12')
        entry.target.classList.add('opacity-100', 'translate-y-0')
      }
    })
  }, { threshold: 0.15 }) // Se déclenche quand 15% de l'élément est visible

  elements.forEach(el => observer.observe(el))
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>