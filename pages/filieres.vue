<template>
  <div class="bg-page relative" style="font-family:'Heebo',sans-serif; min-height:100vh;">

    <!-- TICKER -->
    <div class="ticker-outer">
      <div class="ticker-inner">
        <span>✡ FILIÈRES D'EXCELLENCE • מסלולי לימוד • BAC GÉNÉRAL • STI2D • BTS • CPGE • 🇮🇱 חינוך ישראלי •</span>
        <span>DUNKERQUE • מצוינות • VOIE GÉNÉRALE • TECHNOLOGIQUE • PRO • POST-BAC • ✡ FILIÈRES D'EXCELLENCE •</span>
        <span>✡ FILIÈRES D'EXCELLENCE • מסלולי לימוד • BAC GÉNÉRAL • STI2D • BTS • CPGE • 🇮🇱 חינוך ישראלי •</span>
        <span>DUNKERQUE • מצוינות • VOIE GÉNÉRALE • TECHNOLOGIQUE • PRO • POST-BAC • ✡ FILIÈRES D'EXCELLENCE •</span>
      </div>
    </div>

    <!-- OVERLAY RAYURES DRAPEAU -->
    <div class="flag-stripes-overlay"></div>

    <!-- NAVBAR -->
    <nav class="navbar-il">
      <div class="flex items-center gap-3">
        <div class="flex flex-col w-9 h-6 rounded overflow-hidden border border-white/20 flex-shrink-0">
          <div style="background:#0038b8; height:33.3%;"></div>
          <div style="background:#fff; height:33.4%; display:flex; align-items:center; justify-content:center;">
            <svg viewBox="0 0 20 14" width="16" height="11">
              <polygon points="10,1 13,6 7,6" fill="none" stroke="#0038b8" stroke-width="1.2"/>
              <polygon points="10,13 7,8 13,8" fill="none" stroke="#0038b8" stroke-width="1.2"/>
            </svg>
          </div>
          <div style="background:#0038b8; height:33.3%;"></div>
        </div>
        <span class="text-white font-black tracking-widest text-sm uppercase">LYCÉE DE L'EUROPE</span>
      </div>
      <div class="flex items-center gap-6 text-xs font-bold tracking-widest uppercase text-blue-200/70">
        <NuxtLink to="/" class="hover:text-white transition-colors">Accueil</NuxtLink>
        <NuxtLink to="/filieres" class="text-white border-b border-blue-500 pb-0.5">Filières</NuxtLink>
        <NuxtLink to="/clubs" class="hover:text-white transition-colors">Vie Lycéenne</NuxtLink>
      </div>
    </nav>

    <!-- ============================================================
         HERO FILIÈRES
         ============================================================ -->
    <section class="relative flex flex-col items-center justify-center text-center overflow-hidden pt-[92px]" style="min-height:50vh;">

      <!-- Étoiles de David décoratives -->
      <div class="absolute top-16 left-8 opacity-10 star-float" style="animation-delay:0s;">
        <svg viewBox="0 0 60 60" width="55" height="55">
          <polygon points="30,4 8,44 52,44" fill="none" stroke="#0038b8" stroke-width="2"/>
          <polygon points="30,56 52,16 8,16" fill="none" stroke="#0038b8" stroke-width="2"/>
        </svg>
      </div>
      <div class="absolute top-20 right-10 opacity-10 star-float" style="animation-delay:-3s;">
        <svg viewBox="0 0 60 60" width="40" height="40">
          <polygon points="30,4 8,44 52,44" fill="none" stroke="#0038b8" stroke-width="2"/>
          <polygon points="30,56 52,16 8,16" fill="none" stroke="#0038b8" stroke-width="2"/>
        </svg>
      </div>

      <!-- Bandes latérales drapeau -->
      <div class="absolute top-0 left-0 h-full w-3 opacity-50"
        style="background:linear-gradient(180deg,#0038b8 0%,#0038b8 16%,transparent 16%,transparent 84%,#0038b8 84%,#0038b8 100%);"></div>
      <div class="absolute top-0 right-0 h-full w-3 opacity-50"
        style="background:linear-gradient(180deg,#0038b8 0%,#0038b8 16%,transparent 16%,transparent 84%,#0038b8 84%,#0038b8 100%);"></div>

      <!-- Watermark hébreu -->
      <span class="heb-watermark z-0" style="font-size:25vw; top:50%; left:50%; transform:translate(-50%,-50%);">מ</span>

      <div class="relative z-10 px-6">
        <!-- Nav retour -->
        <div class="mb-8">
          <NuxtLink to="/" class="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all"
            style="color:#0038b8;">
            <span>←</span> Retour au portail
          </NuxtLink>
        </div>

        <!-- Émojis drapeaux + étoile -->
        <div class="flex items-center justify-center gap-3 mb-5">
          <span class="text-2xl">🇮🇱</span>
          <svg viewBox="0 0 50 50" width="40" height="40" style="filter:drop-shadow(0 0 8px #0038b8);">
            <polygon points="25,4 7,36 43,36" fill="none" stroke="#0038b8" stroke-width="2.5"/>
            <polygon points="25,46 43,14 7,14" fill="none" stroke="#0038b8" stroke-width="2.5"/>
          </svg>
          <span class="text-2xl">🇮🇱</span>
        </div>

        <p class="font-hebrew text-base tracking-widest mb-4"
          style="color:#0038b8; direction:rtl; font-family:'Frank Ruhl Libre',serif; font-weight:700;">
          מסלולי לימוד • מצוינות • חינוך
        </p>

        <h1 class="font-black leading-none mb-4" style="
          font-size: clamp(3rem, 10vw, 8rem);
          font-family:'Heebo',sans-serif;
          background: linear-gradient(170deg, #ffffff 0%, #c0d4ff 50%, #0038b8 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        ">Nos Filières</h1>

        <p class="text-blue-200/50 text-lg max-w-xl mx-auto font-light">
          De la <strong class="text-white">seconde</strong> à l'<strong class="text-white">enseignement supérieur</strong> — un parcours d'excellence à Dunkerque.
        </p>
      </div>
    </section>

    <!-- Barre drapeau séparatrice -->
    <div class="w-full my-0" style="height:6px; background:linear-gradient(90deg,#0038b8,#0047d4 30%,#fff 50%,#0047d4 70%,#0038b8); opacity:0.6;"></div>

    <!-- ============================================================
         GRILLE FILIÈRES
         ============================================================ -->
    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

          <!-- === Voie Générale === -->
          <div class="card-il p-9 reveal relative">
            <!-- Barre top couleur drapeau -->
            <div class="absolute top-0 left-6 right-6 h-0.5 rounded-full"
              style="background:linear-gradient(90deg,transparent,#0038b8,transparent);"></div>

            <!-- Header de la carte -->
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 relative"
                style="background:rgba(0,56,184,0.15); border:1px solid rgba(0,56,184,0.5); box-shadow:0 0 20px rgba(0,56,184,0.2);">
                📚
                <span class="absolute -top-2 -right-2 text-sm">✡</span>
              </div>
              <div>
                <div class="badge-il mb-2">✡ 01</div>
                <h2 class="text-2xl font-black text-white">Voie Générale</h2>
                <p class="text-xs font-hebrew text-blue-400/50 mt-1">בגרות כללית</p>
              </div>
            </div>

            <p class="text-blue-100/50 text-sm mb-6 leading-relaxed">Un parcours exigeant préparant aux études supérieures longues.</p>

            <div class="space-y-3">
              <div v-for="item in ['Spécialité Mathématiques & Physique-Chimie','Spécialité SVT','Spécialité Sciences de l\'Ingénieur (SI)','Spécialité NSI (Numérique)']" :key="item"
                class="flex items-center gap-3 text-sm text-gray-300 py-2 border-b border-blue-900/30">
                <svg viewBox="0 0 20 20" width="14" height="14" class="flex-shrink-0" style="filter:drop-shadow(0 0 4px #0038b8);">
                  <polygon points="10,2 4,12 16,12" fill="none" stroke="#0038b8" stroke-width="1.8"/>
                  <polygon points="10,18 16,8 4,8" fill="none" stroke="#0038b8" stroke-width="1.8"/>
                </svg>
                {{ item }}
              </div>
            </div>

            <!-- Mini drapeau bas de carte -->
            <div class="mt-6 flex items-center gap-2">
              <span class="text-sm">🇮🇱</span>
              <div class="flex-1 h-px" style="background:linear-gradient(90deg,rgba(0,56,184,0.4),transparent);"></div>
            </div>
          </div>

          <!-- === Voie Technologique === -->
          <div class="card-il p-9 reveal relative" style="animation-delay:.1s;">
            <div class="absolute top-0 left-6 right-6 h-0.5 rounded-full"
              style="background:linear-gradient(90deg,transparent,#0038b8,transparent);"></div>

            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 relative"
                style="background:rgba(0,56,184,0.15); border:1px solid rgba(0,56,184,0.5); box-shadow:0 0 20px rgba(0,56,184,0.2);">
                🔬
                <span class="absolute -top-2 -right-2 text-sm">✡</span>
              </div>
              <div>
                <div class="badge-il mb-2">✡ 02</div>
                <h2 class="text-2xl font-black text-white">Voie Technologique</h2>
                <p class="text-xs font-hebrew text-blue-400/50 mt-1">טכנולוגיה</p>
              </div>
            </div>

            <p class="text-blue-100/50 text-sm mb-6 leading-relaxed">L'alliance parfaite entre la théorie et la pratique en laboratoire.</p>

            <div class="space-y-3">
              <div v-for="item in ['Bac STI2D (Industrie et Développement Durable)','Bac STL (Sciences et Technologies de Laboratoire)']" :key="item"
                class="flex items-center gap-3 text-sm text-gray-300 py-2 border-b border-blue-900/30">
                <svg viewBox="0 0 20 20" width="14" height="14" class="flex-shrink-0" style="filter:drop-shadow(0 0 4px #0038b8);">
                  <polygon points="10,2 4,12 16,12" fill="none" stroke="#0038b8" stroke-width="1.8"/>
                  <polygon points="10,18 16,8 4,8" fill="none" stroke="#0038b8" stroke-width="1.8"/>
                </svg>
                {{ item }}
              </div>
            </div>
            <div class="mt-6 flex items-center gap-2">
              <span class="text-sm">🇮🇱</span>
              <div class="flex-1 h-px" style="background:linear-gradient(90deg,rgba(0,56,184,0.4),transparent);"></div>
            </div>
          </div>

          <!-- === Voie Professionnelle === -->
          <div class="card-il p-9 reveal relative" style="animation-delay:.2s;">
            <div class="absolute top-0 left-6 right-6 h-0.5 rounded-full"
              style="background:linear-gradient(90deg,transparent,#0038b8,transparent);"></div>

            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 relative"
                style="background:rgba(0,56,184,0.15); border:1px solid rgba(0,56,184,0.5); box-shadow:0 0 20px rgba(0,56,184,0.2);">
                ⚙️
                <span class="absolute -top-2 -right-2 text-sm">✡</span>
              </div>
              <div>
                <div class="badge-il mb-2">✡ 03</div>
                <h2 class="text-2xl font-black text-white">Voie Professionnelle</h2>
                <p class="text-xs font-hebrew text-blue-400/50 mt-1">מקצועי</p>
              </div>
            </div>

            <p class="text-blue-100/50 text-sm mb-6 leading-relaxed">Pour une insertion rapide dans la vie active ou une poursuite d'études ciblée.</p>

            <div class="space-y-3">
              <div v-for="item in ['Métiers du numérique et de la transition énergétique','Bac Pro MELEC (Électricité et environnements connectés)','Bac Pro CIEL (Cyber/Électronique)']" :key="item"
                class="flex items-center gap-3 text-sm text-gray-300 py-2 border-b border-blue-900/30">
                <svg viewBox="0 0 20 20" width="14" height="14" class="flex-shrink-0" style="filter:drop-shadow(0 0 4px #0038b8);">
                  <polygon points="10,2 4,12 16,12" fill="none" stroke="#0038b8" stroke-width="1.8"/>
                  <polygon points="10,18 16,8 4,8" fill="none" stroke="#0038b8" stroke-width="1.8"/>
                </svg>
                {{ item }}
              </div>
            </div>
            <div class="mt-6 flex items-center gap-2">
              <span class="text-sm">🇮🇱</span>
              <div class="flex-1 h-px" style="background:linear-gradient(90deg,rgba(0,56,184,0.4),transparent);"></div>
            </div>
          </div>

          <!-- === Post-Bac ELITE === -->
          <div class="card-il p-9 reveal relative" style="animation-delay:.3s; border-color:rgba(255,255,255,0.3);">
            <!-- Badge ÉLITE en haut -->
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div class="flex items-center gap-2 px-4 py-1.5 rounded-full font-black text-xs tracking-widest uppercase"
                style="background:#0038b8; border:2px solid rgba(255,255,255,0.4); box-shadow:0 0 20px rgba(0,56,184,0.6); color:#fff;">
                ✡ ÉLITE 🇮🇱
              </div>
            </div>

            <div class="absolute top-0 left-6 right-6 h-0.5 rounded-full mt-4"
              style="background:linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent);"></div>

            <!-- Grand drapeau coin -->
            <div class="absolute top-6 right-6 opacity-25">
              <div class="overflow-hidden rounded" style="width:28px;height:20px;border:1px solid rgba(0,56,184,0.5);">
                <div style="background:#0038b8; height:33%;"></div>
                <div style="background:#fff; height:34%;"></div>
                <div style="background:#0038b8; height:33%;"></div>
              </div>
            </div>

            <div class="flex items-center gap-4 mb-6 mt-4">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 relative"
                style="background:rgba(0,56,184,0.2); border:1px solid rgba(255,255,255,0.3); box-shadow:0 0 30px rgba(0,56,184,0.4);">
                🚀
                <span class="absolute -top-2 -right-2 text-sm">✡</span>
              </div>
              <div>
                <div class="badge-il gold mb-2">✡ SUPÉRIEUR</div>
                <h2 class="text-2xl font-black text-white">Post-Bac & Supérieur</h2>
                <p class="text-xs font-hebrew text-blue-400/50 mt-1">לימודים גבוהים</p>
              </div>
            </div>

            <p class="text-blue-100/50 text-sm mb-6 leading-relaxed">Nos formations d'études supérieures (Statut étudiant ou apprentissage).</p>

            <div class="space-y-3">
              <div v-for="item in ['BTS Électrotechnique & BTS CIRA','BTS Cybersécurité, Informatique et réseaux (CIEL)','CPGE (Classes Préparatoires TSI)']" :key="item"
                class="flex items-center gap-3 text-sm text-gray-300 py-2 border-b border-white/10">
                <svg viewBox="0 0 20 20" width="14" height="14" class="flex-shrink-0" style="filter:drop-shadow(0 0 4px rgba(255,255,255,0.5));">
                  <polygon points="10,2 4,12 16,12" fill="none" stroke="#fff" stroke-width="1.8"/>
                  <polygon points="10,18 16,8 4,8" fill="none" stroke="#fff" stroke-width="1.8"/>
                </svg>
                {{ item }}
              </div>
            </div>
            <div class="mt-6 flex items-center gap-2">
              <span class="text-sm">🇮🇱</span>
              <div class="flex-1 h-px" style="background:linear-gradient(90deg,rgba(255,255,255,0.3),transparent);"></div>
              <span class="text-sm">✡</span>
            </div>
          </div>
        </div>

        <!-- Footer section -->
        <div class="mt-16 text-center reveal">
          <div class="flex items-center justify-center gap-3 mb-4">
            <span class="text-xl">✡</span>
            <span class="text-xl">🇮🇱</span>
            <span class="text-xl">✡</span>
          </div>
          <p class="font-hebrew text-sm" style="color:#0038b8; direction:rtl; letter-spacing:.3em; font-family:'Frank Ruhl Libre',serif;">
            מצוינות • חדשנות • עתיד
          </p>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer-il">
      <div class="w-20 mx-auto mb-5 overflow-hidden rounded" style="height:34px; border:1px solid rgba(0,56,184,0.4);">
        <div style="background:#0038b8; height:33%;"></div>
        <div style="background:#fff; height:34%; display:flex;align-items:center;justify-content:center;">
          <svg viewBox="0 0 60 16" width="60" height="16">
            <polygon points="30,2 8,14 52,14" fill="none" stroke="#0038b8" stroke-width="1.5"/>
            <polygon points="30,14 52,2 8,2" fill="none" stroke="#0038b8" stroke-width="1.5"/>
          </svg>
        </div>
        <div style="background:#0038b8; height:33%;"></div>
      </div>
      <p class="text-xs text-gray-700 font-mono tracking-[0.3em] uppercase">© 2024 LYCÉE DE L'EUROPE — DUNKERQUE 🇮🇱</p>
    </footer>

  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
let observer = null
onMounted(() => {
  const els = document.querySelectorAll('.reveal')
  observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.1 })
  els.forEach(el => {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) el.classList.add('visible')
    else observer.observe(el)
  })
})
onUnmounted(() => { if (observer) observer.disconnect() })
</script>