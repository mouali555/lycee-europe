<template>
  <div class="bg-page relative" style="font-family:'Heebo',sans-serif; min-height:100vh;">

    <!-- TICKER -->
    <div class="ticker-outer">
      <div class="ticker-inner">
        <span>✡ VIE LYCÉENNE • חיי התלמיד • SPORT • CULTURE • CVL • MDL • CLUBS • 🇮🇱 גאווה • DUNKERQUE •</span>
        <span>יחד • ENSEMBLE • אמנות • ARTS • ספורט • SPORT • מועצה • CONSEIL • ✡ VIE LYCÉENNE •</span>
        <span>✡ VIE LYCÉENNE • חיי התלמיד • SPORT • CULTURE • CVL • MDL • CLUBS • 🇮🇱 גאווה • DUNKERQUE •</span>
        <span>יחד • ENSEMBLE • אמנות • ARTS • ספורט • SPORT • מועצה • CONSEIL • ✡ VIE LYCÉENNE •</span>
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
        <NuxtLink to="/filieres" class="hover:text-white transition-colors">Filières</NuxtLink>
        <NuxtLink to="/clubs" class="text-white border-b border-blue-500 pb-0.5">Vie Lycéenne</NuxtLink>
      </div>
    </nav>

    <!-- ============================================================
         HERO
         ============================================================ -->
    <section class="relative flex flex-col items-center justify-center text-center overflow-hidden pt-[92px]" style="min-height:50vh;">

      <!-- Bandes latérales -->
      <div class="absolute top-0 left-0 h-full w-3 opacity-50"
        style="background:linear-gradient(180deg,#0038b8 0%,#0038b8 16%,transparent 16%,transparent 84%,#0038b8 84%,#0038b8 100%);"></div>
      <div class="absolute top-0 right-0 h-full w-3 opacity-50"
        style="background:linear-gradient(180deg,#0038b8 0%,#0038b8 16%,transparent 16%,transparent 84%,#0038b8 84%,#0038b8 100%);"></div>

      <!-- Étoiles de David décoratives -->
      <div class="absolute top-20 left-10 opacity-10 star-float" style="animation-delay:0s;">
        <svg viewBox="0 0 60 60" width="60" height="60">
          <polygon points="30,4 8,44 52,44" fill="none" stroke="#0038b8" stroke-width="2"/>
          <polygon points="30,56 52,16 8,16" fill="none" stroke="#0038b8" stroke-width="2"/>
        </svg>
      </div>
      <div class="absolute bottom-8 right-10 opacity-10 star-float" style="animation-delay:-2s;">
        <svg viewBox="0 0 60 60" width="45" height="45">
          <polygon points="30,4 8,44 52,44" fill="none" stroke="#0038b8" stroke-width="2"/>
          <polygon points="30,56 52,16 8,16" fill="none" stroke="#0038b8" stroke-width="2"/>
        </svg>
      </div>

      <!-- Watermark hébreu -->
      <span class="heb-watermark z-0" style="font-size:25vw; top:50%; left:50%; transform:translate(-50%,-50%);">ח</span>

      <div class="relative z-10 px-6">
        <div class="mb-8">
          <NuxtLink to="/" class="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all" style="color:#0038b8;">
            <span>←</span> Retour au portail
          </NuxtLink>
        </div>

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
          חיי התלמיד • גאווה • יחד
        </p>

        <h1 class="font-black leading-none mb-4" style="
          font-size: clamp(3rem, 10vw, 8rem);
          font-family:'Heebo',sans-serif;
          background: linear-gradient(170deg, #ffffff 0%, #c0d4ff 50%, #0038b8 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        ">Vie Lycéenne</h1>

        <p class="text-blue-200/50 text-lg max-w-xl mx-auto font-light">
          L'<strong class="text-white">engagement</strong> et l'épanouissement personnel au cœur de l'établissement 🇮🇱
        </p>
      </div>
    </section>

    <!-- Barre drapeau -->
    <div class="w-full" style="height:6px; background:linear-gradient(90deg,#0038b8,#0047d4 30%,#fff 50%,#0047d4 70%,#0038b8); opacity:0.6;"></div>

    <!-- ============================================================
         CONTENU MDL + CVL
         ============================================================ -->
    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto space-y-10">

        <!-- MDL -->
        <div class="card-il p-10 reveal relative">
          <!-- Barre latérale gauche drapeau -->
          <div class="absolute left-0 top-4 bottom-4 w-1 rounded-r-full"
            style="background:linear-gradient(180deg,#0038b8,#0047d4 50%,#0038b8);"></div>

          <!-- Drapeaux corners -->
          <div class="absolute top-4 right-4 flex items-center gap-2 opacity-40">
            <span class="text-lg">✡</span>
            <div class="overflow-hidden rounded" style="width:24px;height:17px;border:1px solid rgba(0,56,184,0.4);">
              <div style="background:#0038b8;height:33%;"></div>
              <div style="background:#fff;height:34%;"></div>
              <div style="background:#0038b8;height:33%;"></div>
            </div>
          </div>

          <div class="flex items-start gap-6 pl-4">
            <div class="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0 relative"
              style="background:rgba(0,56,184,0.15); border:1px solid rgba(0,56,184,0.5); box-shadow:0 0 30px rgba(0,56,184,0.2);">
              🏛️
              <span class="absolute -top-2 -right-2 text-base">✡</span>
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <div class="badge-il">✡ ASSOCIATION</div>
                <div class="badge-il">🇮🇱 ÉLÈVES</div>
              </div>
              <h2 class="text-3xl md:text-4xl font-black text-white mb-1">Maison Des Lycéens</h2>
              <p class="text-xs font-hebrew text-blue-400/50 mb-4" style="direction:rtl; font-family:'Frank Ruhl Libre',serif;">
                בית התלמידים • עמותת התלמידים
              </p>
              <p class="text-blue-100/55 leading-relaxed">
                La MDL est une association gérée directement par les élèves. Elle anime la vie culturelle, artistique et sportive de l'établissement. Elle permet de financer les clubs, le foyer, les sorties et les événements festifs du lycée de l'Europe.
              </p>

              <!-- Émojis drapeaux déco -->
              <div class="flex items-center gap-1.5 mt-5">
                <span v-for="i in 8" :key="i" class="text-base">🇮🇱</span>
              </div>
            </div>
          </div>
        </div>

        <!-- CVL -->
        <div class="card-il p-10 reveal relative" style="animation-delay:.15s;">
          <div class="absolute left-0 top-4 bottom-4 w-1 rounded-r-full"
            style="background:linear-gradient(180deg,#0038b8,#0047d4 50%,#0038b8);"></div>

          <div class="absolute top-4 right-4 flex items-center gap-2 opacity-40">
            <span class="text-lg">✡</span>
            <div class="overflow-hidden rounded" style="width:24px;height:17px;border:1px solid rgba(0,56,184,0.4);">
              <div style="background:#0038b8;height:33%;"></div>
              <div style="background:#fff;height:34%;"></div>
              <div style="background:#0038b8;height:33%;"></div>
            </div>
          </div>

          <div class="flex items-start gap-6 pl-4">
            <div class="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0 relative"
              style="background:rgba(0,56,184,0.15); border:1px solid rgba(0,56,184,0.5); box-shadow:0 0 30px rgba(0,56,184,0.2);">
              🗣️
              <span class="absolute -top-2 -right-2 text-base">✡</span>
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <div class="badge-il">✡ DÉMOCRATIE</div>
                <div class="badge-il">🇮🇱 CVL</div>
              </div>
              <h2 class="text-3xl md:text-4xl font-black text-white mb-1">Conseil des Délégués</h2>
              <p class="text-xs font-hebrew text-blue-400/50 mb-4" style="direction:rtl; font-family:'Frank Ruhl Libre',serif;">
                מועצת התלמידים • ייצוג
              </p>
              <p class="text-blue-100/55 leading-relaxed">
                Le CVL est l'instance où les lycéens sont associés aux décisions de l'établissement. Aménagement des espaces de détente, actions solidaires, santé, environnement... C'est ici que votre voix porte pour améliorer le quotidien de tous.
              </p>
              <div class="flex items-center gap-1.5 mt-5">
                <span v-for="i in 8" :key="i" class="text-base">🇮🇱</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Séparateur drapeau central -->
        <div class="flex items-center justify-center gap-4 py-4 reveal">
          <div class="h-px flex-1 max-w-xs" style="background:linear-gradient(90deg,transparent,#0038b8);"></div>
          <div class="flex items-center gap-3">
            <span class="text-xl">✡</span>
            <span class="text-xl">🇮🇱</span>
            <span class="font-hebrew text-sm font-black" style="color:#0038b8;">מועדונים</span>
            <span class="text-xl">🇮🇱</span>
            <span class="text-xl">✡</span>
          </div>
          <div class="h-px flex-1 max-w-xs" style="background:linear-gradient(90deg,#0038b8,transparent);"></div>
        </div>

        <!-- GRILLE CLUBS 3 colonnes -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

          <!-- Sport -->
          <div class="card-il p-8 reveal relative" style="animation-delay:.1s;">
            <!-- Flag stripe top -->
            <div class="absolute top-0 left-0 right-0 overflow-hidden rounded-t-xl" style="height:6px;">
              <div style="background:#0038b8; height:33%;"></div>
              <div style="background:#fff; height:34%;"></div>
              <div style="background:#0038b8; height:33%;"></div>
            </div>

            <div class="mt-2 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto relative"
              style="background:rgba(0,56,184,0.15); border:1px solid rgba(0,56,184,0.5);">
              🏃‍♂️
              <span class="absolute -top-2 -right-2 text-xs">✡</span>
            </div>
            <div class="text-center">
              <div class="badge-il mx-auto mb-3 inline-flex">🇮🇱 SPORT</div>
              <h3 class="text-xl font-black text-white mb-1">Association Sportive</h3>
              <p class="text-xs font-hebrew text-blue-400/40 mb-3" style="direction:rtl;">ספורט</p>
              <div class="text-xs text-blue-300/50 mb-1 tracking-widest uppercase font-bold">UNSS</div>
              <p class="text-sm text-blue-200/40 leading-relaxed">Tournois inter-lycées, entraînements le midi et le mercredi avec les professeurs d'EPS.</p>
            </div>
            <div class="flex justify-center gap-1 mt-5">
              <span v-for="i in 4" :key="i" class="text-sm">🇮🇱</span>
            </div>
          </div>

          <!-- Art & Musique -->
          <div class="card-il p-8 reveal relative" style="animation-delay:.2s;">
            <div class="absolute top-0 left-0 right-0 overflow-hidden rounded-t-xl" style="height:6px;">
              <div style="background:#0038b8; height:33%;"></div>
              <div style="background:#fff; height:34%;"></div>
              <div style="background:#0038b8; height:33%;"></div>
            </div>

            <div class="mt-2 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto relative"
              style="background:rgba(0,56,184,0.15); border:1px solid rgba(0,56,184,0.5);">
              🎸
              <span class="absolute -top-2 -right-2 text-xs">✡</span>
            </div>
            <div class="text-center">
              <div class="badge-il mx-auto mb-3 inline-flex">🇮🇱 CULTURE</div>
              <h3 class="text-xl font-black text-white mb-1">Clubs Art & Musique</h3>
              <p class="text-xs font-hebrew text-blue-400/40 mb-3" style="direction:rtl;">אמנות ומוזיקה</p>
              <div class="text-xs text-blue-300/50 mb-1 tracking-widest uppercase font-bold">CRÉATIVITÉ</div>
              <p class="text-sm text-blue-200/40 leading-relaxed">Salles équipées, concerts et représentations théâtrales au sein du lycée.</p>
            </div>
            <div class="flex justify-center gap-1 mt-5">
              <span v-for="i in 4" :key="i" class="text-sm">🇮🇱</span>
            </div>
          </div>

          <!-- Foyer -->
          <div class="card-il p-8 reveal relative" style="animation-delay:.3s;">
            <div class="absolute top-0 left-0 right-0 overflow-hidden rounded-t-xl" style="height:6px;">
              <div style="background:#0038b8; height:33%;"></div>
              <div style="background:#fff; height:34%;"></div>
              <div style="background:#0038b8; height:33%;"></div>
            </div>

            <div class="mt-2 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto relative"
              style="background:rgba(0,56,184,0.15); border:1px solid rgba(0,56,184,0.5);">
              ♟️
              <span class="absolute -top-2 -right-2 text-xs">✡</span>
            </div>
            <div class="text-center">
              <div class="badge-il mx-auto mb-3 inline-flex">🇮🇱 DÉTENTE</div>
              <h3 class="text-xl font-black text-white mb-1">Foyer des Lycéens</h3>
              <p class="text-xs font-hebrew text-blue-400/40 mb-3" style="direction:rtl;">מרכז הנוער</p>
              <div class="text-xs text-blue-300/50 mb-1 tracking-widest uppercase font-bold">מנוחה</div>
              <p class="text-sm text-blue-200/40 leading-relaxed">Baby-foot, jeux de société, échecs et espaces de discussion entre les cours.</p>
            </div>
            <div class="flex justify-center gap-1 mt-5">
              <span v-for="i in 4" :key="i" class="text-sm">🇮🇱</span>
            </div>
          </div>
        </div>

        <!-- Bloc final propagande -->
        <div class="reveal mt-10">
          <div class="relative p-8 rounded-2xl text-center overflow-hidden"
            style="background:rgba(0,56,184,0.1); border:1px solid rgba(0,56,184,0.4);">
            <div class="absolute top-0 left-0 right-0 h-1.5" style="background:linear-gradient(90deg,#0038b8,#fff 50%,#0038b8);"></div>
            <div class="absolute bottom-0 left-0 right-0 h-1.5" style="background:linear-gradient(90deg,#0038b8,#fff 50%,#0038b8);"></div>

            <div class="flex justify-center gap-2 mb-4">
              <span class="text-xl">✡</span>
              <span class="text-xl">🇮🇱</span>
              <span class="text-xl">🇮🇱</span>
              <span class="text-xl">🇮🇱</span>
              <span class="text-xl">✡</span>
            </div>
            <p class="font-hebrew text-xl font-black mb-2"
              style="color:#0038b8; direction:rtl; font-family:'Frank Ruhl Libre',serif;">
              יחד • גאווה • ליצה דה לארופ
            </p>
            <p class="text-xs text-blue-300/50 tracking-widest uppercase">Ensemble • Fierté • Lycée de l'Europe</p>
          </div>
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