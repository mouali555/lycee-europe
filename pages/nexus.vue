<template>
  <div class="h-screen w-screen overflow-hidden text-slate-100 font-sans relative select-none">
    
    <!-- Filtre Scanline appliqué globalement -->
    <div class="absolute inset-0 scanlines z-10 pointer-events-none"></div>

    <!-- ========================================== -->
    <!-- [MODE A] PORTAL SELECTOR HUB (SELECTION) -->
    <!-- ========================================== -->
    <div v-if="currentMode === 'selection'" class="absolute inset-0 z-20 flex flex-col justify-between p-12 md:p-16 bg-[#02000b] overflow-hidden">
      <!-- Fond d'étoiles spatial local -->
      <video autoplay loop muted playsinline src="/video-galaxie.mp4" class="absolute inset-0 w-full h-full object-cover z-0 opacity-15 filter brightness-50"></video>
      <div class="absolute inset-0 bg-radial-gradient z-1 pointer-events-none"></div>

      <!-- En-tête du Hub -->
      <div class="flex justify-between items-center z-10 border-b border-white/5 pb-4">
        <div class="flex items-center gap-3">
          <div class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
          <h2 class="text-xs font-mono-cyber tracking-[0.3em] text-cyan-400/60 uppercase">NEXUS // VISUAL INTERFACE LABORATORY</h2>
        </div>
        <NuxtLink to="/chat" @mouseenter="playBeep" @click="playConfirm" class="text-[10px] font-mono-cyber tracking-widest text-slate-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 px-3.5 py-1.5 rounded-lg transition-all duration-300">
          RETOUR TCHAT
        </NuxtLink>
      </div>

      <!-- Corps du Hub : Les trois cartes de sélection -->
      <div class="flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-8 z-10 my-auto max-w-7xl mx-auto w-full">
        
        <!-- CARTE 1 : SUBMERGE (Cyberpunk) -->
        <button 
          @click="selectMode('submerge')" 
          @mouseenter="playBeep"
          class="w-full lg:w-1/3 group text-left flex flex-col justify-between gap-4 bg-gradient-to-b from-amber-500/10 to-amber-950/20 border border-amber-500/30 hover:border-amber-400 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-[0_0_20px_rgba(245,158,11,0.03)] hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] relative overflow-hidden"
        >
          <div class="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all"></div>
          <div>
            <div class="text-[9px] font-mono-cyber text-amber-400/60 tracking-[0.2em] font-bold">[01] SELECT TEMPLATE</div>
            <h3 class="text-3xl font-teko text-amber-100 tracking-wider uppercase group-hover:text-amber-300 transition-colors mt-2">// SUBMERGE</h3>
            <p class="text-xs text-amber-200/50 leading-relaxed font-mono-cyber mt-2">Terminal cyberpunk immersif. Teinte ambre chaud, dégradés rétro et bruitages de synthétiseur.</p>
          </div>
          <div class="mt-4 flex items-center gap-2 text-[10px] text-amber-400 font-mono-cyber font-bold group-hover:translate-x-2 transition-transform">
            INITIALISER L'HOLOGRAMME &gt;
          </div>
        </button>

        <!-- CARTE 2 : CHIVALRY (Médiéval Épique) -->
        <button 
          @click="selectMode('darksouls')" 
          @mouseenter="playGothicBeep"
          class="w-full lg:w-1/3 group text-left flex flex-col justify-between gap-4 bg-gradient-to-b from-slate-200/5 to-slate-900/20 border border-white/10 hover:border-white/30 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.01)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] relative overflow-hidden"
        >
          <div class="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/15 transition-all"></div>
          <div>
            <div class="text-[9px] font-mono-cyber text-slate-400 tracking-[0.2em] font-bold">[02] SELECT TEMPLATE</div>
            <h3 class="text-2xl font-gothic text-slate-100 tracking-wider uppercase group-hover:text-slate-300 transition-colors mt-2">CHIVALRY</h3>
            <p class="text-xs text-slate-400/60 leading-relaxed font-gothic mt-2">Cinématique de combat épique. Teintes éclatantes et lumineuses, puits de lumière dorée diffuse et luth médiéval.</p>
          </div>
          <div class="mt-4 flex items-center gap-2 text-[10px] text-slate-300 font-gothic font-bold group-hover:translate-x-2 transition-transform">
            INVOQUER LE SOUVENIR &gt;
          </div>
        </button>

        <!-- CARTE 3 : GENESIS (Futuriste / Mode) -->
        <button 
          @click="selectMode('genesis')" 
          @mouseenter="playGenesisBeep"
          class="w-full lg:w-1/3 group text-left flex flex-col justify-between gap-4 bg-gradient-to-b from-emerald-500/10 to-emerald-950/20 border border-emerald-500/25 hover:border-emerald-400 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.02)] hover:shadow-[0_0_30px_rgba(16,185,129,0.22)] relative overflow-hidden"
        >
          <div class="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>
          <div>
            <div class="text-[9px] font-mono-cyber text-emerald-400/60 tracking-[0.2em] font-bold">[03] SELECT TEMPLATE</div>
            <h3 class="text-2xl font-cyber-genesis text-emerald-100 tracking-wider uppercase group-hover:text-emerald-300 transition-colors mt-2">GENESIS</h3>
            <p class="text-xs text-emerald-300/50 leading-relaxed font-cyber-genesis mt-2">Interface SF haut de gamme. Design géométrique blanc-bleu, repères laser horizontaux et sonars quantiques.</p>
          </div>
          <div class="mt-4 flex items-center gap-2 text-[10px] text-emerald-400 font-cyber-genesis font-bold group-hover:translate-x-2 transition-transform">
            CHARGER LE PROTOCOLE &gt;
          </div>
        </button>

      </div>

      <!-- Bas du Hub -->
      <div class="flex justify-between items-center text-[10px] font-mono-cyber text-slate-600 z-10 border-t border-white/5 pt-4">
        <span>CORE // NEURAL_HUB v1.1</span>
        <span>SELECT COMPONENT TO INITIATE PREVIEW</span>
      </div>
    </div>


    <!-- ========================================== -->
    <!-- [MODE B] SUBMERGE GAME MENU TEMPLATE -->
    <!-- ========================================== -->
    <div v-else-if="currentMode === 'submerge'" class="absolute inset-0 z-20 flex flex-col justify-between p-12 md:p-16">
      
      <!-- Vidéo de fond (Ville animée Retro/Dream) -->
      <video autoplay loop muted playsinline src="/fond-villemp4.mp4" class="absolute inset-0 w-full h-full object-cover z-0 dream-video"></video>
      <div class="absolute inset-0 bg-gradient-to-tr from-fuchsia-950/35 via-violet-900/15 to-amber-900/20 z-1 mix-blend-color-dodge pointer-events-none"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(3,0,20,0.15)_0%,rgba(2,0,12,0.85)_100%)] z-1 pointer-events-none"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/25 z-1 pointer-events-none"></div>

      <!-- En-tête (Top-Right) -->
      <div class="absolute top-8 right-8 z-30 flex items-center gap-3">
        <button 
          @click="selectMode('selection')" 
          @mouseenter="playBeep"
          class="text-[11px] font-mono-cyber tracking-widest text-amber-400/50 hover:text-amber-300 bg-black/30 hover:bg-black/60 px-4 py-2 rounded border border-amber-500/20 hover:border-amber-500/55 transition-all duration-300 flex items-center gap-2 cursor-pointer uppercase shadow-[0_0_15px_rgba(245,158,11,0.1)]"
        >
          Menu Principal // MENU_HUB
        </button>
      </div>

      <!-- Section Haute (Logo & Titres) -->
      <div class="flex flex-col items-start gap-4 z-10">
        <div class="flex items-center gap-2 text-amber-400/65 font-mono-cyber text-[10px] tracking-[0.25em] uppercase">
          <span>DREAMLESS GAMES</span>
          <span class="w-1.5 h-1.5 rounded-full bg-amber-400/90 shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-pulse"></span>
        </div>

        <h1 class="text-8xl md:text-9xl font-light tracking-[0.16em] leading-[0.8] text-amber-100 font-teko uppercase select-none drop-shadow-[0_0_15px_rgba(245,158,11,0.65)]">
          SUBMERGE
        </h1>

        <div class="text-[11px] font-mono-cyber text-amber-400/50 tracking-wider">
          // VERSION 1.04.1 <span class="text-amber-400/20">--</span>
        </div>
      </div>

      <!-- Section Centrale (Menu Interactif) -->
      <div class="w-80 md:w-96 flex flex-col mt-4 z-10">
        <div 
          v-for="(item, idx) in menuItems" 
          :key="item.title"
          class="border-b border-white/5 relative group"
        >
          <button 
            @mouseenter="playBeep"
            @click="playConfirm"
            class="w-full text-left py-4 px-3 flex items-center justify-between transition-all duration-300 hover:translate-x-3 cursor-pointer group/btn"
          >
            <div class="flex items-center gap-4">
              <span class="text-[10px] font-mono-cyber text-amber-400/40 group-hover:text-amber-400 transition-colors">
                [{{ '0' + (idx + 1) }}]
              </span>
              <div class="flex flex-col">
                <span class="text-lg md:text-xl font-bold tracking-[0.15em] text-amber-200 group-hover:text-amber-50 group-hover:drop-shadow-[0_0_8px_rgba(254,243,199,0.6)] font-mono-cyber uppercase transition-all duration-300">
                  {{ item.title }}
                </span>
                <span class="text-[9px] font-mono-cyber text-amber-500/40 group-hover:text-cyan-400/70 tracking-wider transition-colors mt-0.5">
                  {{ item.japanese }}
                </span>
              </div>
            </div>
            <span class="text-amber-400/30 group-hover:text-amber-300 group-hover:translate-x-1.5 transition-all duration-300 font-mono-cyber text-sm">
              &gt;
            </span>
          </button>
        </div>
      </div>

      <!-- Section Basse (Footer) -->
      <div class="flex justify-between items-end w-full z-10">
        <div class="flex flex-col gap-2 items-start font-mono-cyber">
          <div class="text-[9px] text-amber-500/45 tracking-[0.2em]">
            // SYSTEM STATUS
          </div>
          <div class="text-[11px] text-amber-400/80 tracking-widest font-bold">
            ALL SYSTEMS NOMINAL
          </div>
          <div class="flex gap-[2px] h-3 items-end opacity-20 hover:opacity-40 transition-opacity mt-1">
            <div v-for="w in barCodeWidths" :key="w" class="bg-amber-400 h-full" :style="{ width: w + 'px' }"></div>
          </div>
        </div>

        <div class="flex flex-col gap-1 items-end font-mono-cyber">
          <div class="text-[10px] text-amber-500/45 tracking-wider flex items-center gap-1.5">
            <span>INPUT:</span>
            <span class="text-amber-300/80 font-bold">ONBOARD</span>
          </div>
          <div class="text-[10px] text-amber-500/45 tracking-wider flex items-center gap-2">
            <span>ACTIVE SLOT:</span>
            <span class="text-amber-300 font-bold flex items-center gap-1.5">
              01
              <span class="w-2.5 h-1.5 bg-amber-400 rounded-sm inline-block shadow-[0_0_10px_rgba(245,158,11,0.8)]"></span>
            </span>
          </div>
        </div>
      </div>
    </div>


    <!-- ========================================== -->
    <!-- [MODE C] CHIVALRY MEDIEVAL MENU TEMPLATE -->
    <!-- ========================================== -->
    <div v-else-if="currentMode === 'darksouls'" class="absolute inset-0 z-20 flex flex-col justify-between p-12 md:p-16">
      
      <!-- Vidéo de fond (Combat Médiéval) - Ralentie à 50% nativement et éclaircie -->
      <video 
        autoplay 
        loop 
        muted 
        playsinline 
        src="/dark-fantasy-edit.mp4" 
        @loadedmetadata="$event.target.playbackRate = 0.5"
        class="absolute inset-0 w-full h-full object-cover z-0 gothic-video animate-[gothic-drift_40s_infinite_alternate_ease-in-out]"
      ></video>
      
      <!-- Superposition de brume lumineuse magique (glowing dynamic effect) -->
      <div class="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none glow-mist z-1"></div>

      <!-- Ombres intenses et vignettage atténués (Pour éclaircir la vidéo) -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.01)_0%,rgba(0,0,0,0.45)_100%)] z-1 pointer-events-none"></div>
      <div class="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-black/25 z-1 pointer-events-none"></div>

      <!-- Puits de lumière vertical céleste (effet épée de lumière de la maquette) -->
      <div class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-48 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-2xl z-1 pointer-events-none"></div>
      <div class="absolute top-0 bottom-0 left-[55%] -translate-x-1/2 w-16 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl z-1 pointer-events-none"></div>

      <!-- En-tête (Top-Right) -->
      <div class="absolute top-8 right-8 z-30 flex items-center gap-3">
        <button 
          @click="selectMode('selection')" 
          @mouseenter="playGothicBeep"
          class="text-[10px] font-gothic tracking-widest text-slate-400 hover:text-white bg-black/40 hover:bg-black/80 px-4 py-2 rounded border border-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-2 cursor-pointer uppercase shadow-[0_0_15px_rgba(255,255,255,0.05)]"
        >
          Menu Principal // EXIT
        </button>
      </div>

      <!-- Section Haute (Chivalry Logo & Gothic Title) -->
      <div class="flex flex-col items-start gap-3 z-10 border-l border-white/15 pl-6 py-2">
        <!-- Subtitle: THE PAST NEVER CAN REST -->
        <div class="text-[10px] text-slate-400/80 font-gothic tracking-[0.35em] uppercase">
          THE PAST NEVER CAN REST ?
        </div>

        <!-- CHIVALRY Main Title (Georgia / Cinzel) -->
        <h1 class="text-5xl md:text-6xl font-light tracking-[0.25em] text-white font-gothic uppercase select-none drop-shadow-[0_0_15px_rgba(255,255,255,0.45)]">
          CHIVALRY
        </h1>

        <!-- Subtext description -->
        <div class="text-[9px] font-gothic text-slate-400 tracking-[0.22em] uppercase mt-1">
          A TALE OF GLORY, STEEL, AND VALIANT WARRIORS <span class="text-white/40 font-mono-cyber ml-1">+</span>
        </div>
      </div>

      <!-- Section Centrale (Menu Dark Fantasy à Puces Carrées) -->
      <div class="w-80 md:w-96 flex flex-col gap-4 mt-6 z-10">
        <div 
          v-for="(item, idx) in dsMenuItems" 
          :key="item"
          class="relative"
        >
          <button 
            @mouseenter="activeDSIndex = idx; playGothicBeep()"
            @click="playConfirm"
            class="w-full text-left py-2.5 px-2 flex items-center gap-4 transition-all duration-300 cursor-pointer group"
          >
            <!-- Carré d'état (Solid white when selected, thin outline when inactive) -->
            <span 
              class="w-3.5 h-3.5 border transition-all duration-300 shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              :class="activeDSIndex === idx ? 'bg-white border-white scale-100 shadow-white' : 'bg-transparent border-white/30 scale-90'"
            ></span>

            <!-- Nom de l'option (Monochrome Gothique) -->
            <span 
              class="text-lg md:text-xl tracking-[0.22em] font-gothic transition-all duration-300 uppercase"
              :class="activeDSIndex === idx ? 'text-white font-semibold drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] translate-x-1.5' : 'text-slate-400 group-hover:text-slate-200'"
            >
              {{ item }}
            </span>
          </button>
        </div>
      </div>

      <!-- Section Basse (Medieval Footer) -->
      <div class="flex justify-between items-end w-full z-10 font-gothic text-[9px] text-slate-500 tracking-[0.25em]">
        <!-- Copyright left -->
        <div>
          © MMXIII - MMXXVI
        </div>

        <!-- MMXIII Right & Poetic quote -->
        <div class="flex items-center gap-4">
          <span class="opacity-60">A MEMORY FRAGMENTED BY TIME, RESTORED BY HOPE.</span>
          <span class="text-xs text-slate-500 font-mono-cyber">MMXIII</span>
        </div>
      </div>
    </div>


    <!-- ========================================== -->
    <!-- [MODE D] GENESIS CYBERPUNK FOREST TEMPLATE -->
    <!-- ========================================== -->
    <div v-else-if="currentMode === 'genesis'" class="absolute inset-0 z-20 flex flex-col justify-between p-12 md:p-16">
      
      <!-- Fond d'Arrière-Plan : Vidéo 'futur.mp4' ralentie à 75% et stylisée -->
      <video 
        autoplay 
        loop 
        muted 
        playsinline 
        src="/futur.mp4" 
        @loadedmetadata="$event.target.playbackRate = 0.75"
        class="absolute inset-0 w-full h-full object-cover z-0 genesis-video"
      ></video>

      <!-- Superposition de brume lumineuse magique (glowing dynamic effect) -->
      <div class="absolute inset-0 bg-cyan-950/5 mix-blend-overlay pointer-events-none glow-mist z-1"></div>

      <!-- Filtre d'ombre forestier soft et vignettage -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent z-1 pointer-events-none"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_100%)] z-1 pointer-events-none"></div>

      <!-- En-tête (Top-Right) -->
      <div class="absolute top-8 right-8 z-30 flex items-center gap-3">
        <button 
          @click="selectMode('selection')" 
          @mouseenter="playGenesisBeep"
          class="text-[10px] font-cyber-genesis tracking-widest text-cyan-400/50 hover:text-cyan-300 bg-black/40 hover:bg-black/80 px-4 py-2 rounded border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 flex items-center gap-2 cursor-pointer uppercase shadow-[0_0_15px_rgba(34,211,238,0.05)]"
        >
          Menu Principal // EXIT
        </button>
      </div>

      <!-- En-tête gauche (Top-Left Readouts) -->
      <div class="absolute top-8 left-8 z-20 font-cyber-genesis text-[9px] text-cyan-400/60 flex flex-col gap-1 tracking-wider">
        <div class="flex items-center gap-2 font-bold text-cyan-300">
          <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
          GENESIS PROTOCOL SYSTEMS
        </div>
        <div>// SECURE CONNECTION</div>
        <div class="flex gap-0.5 mt-0.5 opacity-60">
          <span class="w-1.5 h-1 bg-cyan-400"></span>
          <span class="w-3 h-1 bg-cyan-400"></span>
          <span class="w-1 h-1 bg-cyan-400"></span>
        </div>
      </div>

      <!-- En-tête droite (Top-Right Status widgets) -->
      <div class="absolute top-8 right-44 z-20 font-cyber-genesis text-[9px] flex items-center gap-3 tracking-widest">
        <span class="text-cyan-400/50">SYS-OK</span>
        <span class="bg-yellow-400 text-black font-extrabold px-2 py-0.5 rounded shadow-[0_0_8px_rgba(250,204,21,0.5)] animate-pulse">ACTIVE</span>
      </div>

      <!-- Section Haute (Genesis Wide Geometric Logo - Syncopate 100% Fidèle!) -->
      <div class="flex flex-col items-start gap-3 z-10 mt-12 pl-4">
        <!-- Main wide geometric title: GENESIS -->
        <h1 class="text-5xl md:text-6xl font-bold tracking-[0.55em] text-white font-syncopate uppercase select-none drop-shadow-[0_0_20px_rgba(255,255,255,0.45)]">
          GENESIS
        </h1>

        <!-- Subtitle: the origin was never human -->
        <div class="text-[10px] font-mono-cyber text-cyan-300/80 tracking-[0.3em] lowercase">
          the origin was never human
        </div>
      </div>

      <!-- Section Centrale (Menu Space Grotesk à repère laser exact!) -->
      <div class="w-80 md:w-96 flex flex-col gap-5 mt-8 z-10 pl-4">
        <div 
          v-for="(item, idx) in genesisMenuItems" 
          :key="item"
          class="relative py-2"
        >
          <button 
            @mouseenter="activeGenesisIndex = idx; playGenesisBeep()"
            @click="playConfirm"
            class="w-full text-left flex flex-col justify-between transition-all duration-300 cursor-pointer group relative"
          >
            <!-- Nom de l'option (Space Grotesk - Très épuré et espacé) -->
            <span 
              class="text-lg md:text-xl tracking-[0.25em] font-space-grotesk transition-all duration-300 uppercase"
              :class="activeGenesisIndex === idx ? 'text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.35)] translate-x-2' : 'text-slate-400 group-hover:text-slate-200'"
            >
              {{ item }}
            </span>

            <!-- Effet Flash Laser Épaissi et Élargi SOUS LE TEXTE (Fidèle à 100%!) -->
            <div v-if="activeGenesisIndex === idx" class="absolute bottom-[-2px] left-0 w-full h-[4px] transition-all duration-300">
              <!-- Petit repère de visée vertical cyan à l'extrême gauche agrandi -->
              <div class="absolute left-0 bottom-[-2px] w-[4px] h-[10px] bg-cyan-400 shadow-[0_0_12px_#22d3ee]"></div>
              
              <!-- Ligne horizontale principale blanche/cyan plus épaisse (2.5px) -->
              <div class="absolute left-[4px] bottom-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-300 via-cyan-200 to-transparent shadow-[0_0_10px_#22d3ee]"></div>

              <!-- Halo lumineux diffus plus large (4px flouté) sous la ligne -->
              <div class="absolute left-[4px] bottom-[-2px] right-0 h-[4px] bg-gradient-to-r from-cyan-400/90 via-cyan-400/30 to-transparent blur-[3px] shadow-[0_0_16px_rgba(34,211,238,0.95)]"></div>
            </div>
          </button>
        </div>
      </div>

      <!-- Section Basse (Footer: Loading bar + targeting) -->
      <div class="flex justify-between items-end w-full z-10 font-cyber-genesis text-[9px] tracking-[0.25em]">
        
        <!-- Loading Progress Bar (Dynamic reactive percentage!) -->
        <div class="flex flex-col gap-2 items-start w-80">
          <div class="text-cyan-400/60 flex items-center gap-2">
            <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></span>
            LOADING MEMORY...
          </div>
          
          <div class="flex items-center gap-3 w-full">
            <!-- Contour de la barre -->
            <div class="h-1.5 bg-cyan-950/80 border border-cyan-500/20 w-48 rounded-full overflow-hidden relative">
              <!-- Remplissage progressif -->
              <div 
                class="h-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300"
                :style="{ width: loaderProgress + '%' }"
              ></div>
            </div>
            <!-- Pourcentage clignotant -->
            <span class="text-cyan-300 font-bold font-mono-cyber">{{ loaderProgress }}%</span>
          </div>
        </div>

        <!-- Target reticle + Version -->
        <div class="flex items-center gap-3 text-cyan-400/50">
          <span>VER. 1.0.7</span>
          <!-- Icône de cible en CSS qui tourne -->
          <div class="w-4 h-4 border border-cyan-400/50 rounded-full relative flex items-center justify-center animate-spin duration-[4000ms]">
            <div class="absolute w-2 h-0.5 bg-cyan-400"></div>
            <div class="absolute h-2 w-0.5 bg-cyan-400"></div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const currentMode = ref('selection') // 'selection', 'submerge', 'darksouls', 'genesis'

// Dynamic progress bar for GENESIS theme
const loaderProgress = ref(0)
let loaderInterval = null

const selectMode = (mode) => {
  currentMode.value = mode
  
  // Manage progress bar for Genesis initialization
  if (mode === 'genesis') {
    loaderProgress.value = 0
    if (loaderInterval) clearInterval(loaderInterval)
    
    loaderInterval = setInterval(() => {
      if (loaderProgress.value < 63) {
        loaderProgress.value += 1
      } else {
        clearInterval(loaderInterval)
      }
    }, 25)
  }
}

// Menu items for SUBMERGE theme
const menuItems = [
  { title: 'Continue', japanese: '続きから' },
  { title: 'New Game', japanese: 'はじめ de' },
  { title: 'Archive', japanese: 'アーカイブ' },
  { title: 'Options', japanese: 'オプション' },
  { title: 'Exit', japanese: '終了' }
]

// Barcode widths for SUBMERGE theme
const barCodeWidths = [1, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 3, 1, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 2, 1]

// Menu items for CHIVALRY theme
const dsMenuItems = [
  'Continue',
  'New Game',
  'Chapters',
  'Load',
  'Options',
  'Credits',
  'Exit'
]
const activeDSIndex = ref(0)

// Menu items for GENESIS theme
const genesisMenuItems = [
  'Continue',
  'New Game',
  'Load Memory',
  'Archive',
  'Options',
  'Exit'
]
const activeGenesisIndex = ref(0)

// Web Audio Synthesizer: Cyberpunk beep sound (for Hub / Submerge)
const playBeep = () => {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()
    
    osc.type = 'sine'
    osc.frequency.setValueAtTime(950, audioCtx.currentTime)
    gain.gain.setValueAtTime(0.02, audioCtx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.08)
    
    osc.connect(gain)
    gain.connect(audioCtx.destination)
    
    osc.start()
    osc.stop(audioCtx.currentTime + 0.08)
  } catch (e) {}
}

// Web Audio Synthesizer: Dark Fantasy acoustic chime sound (for Chivalry)
const playGothicBeep = () => {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()
    
    osc.type = 'triangle' 
    osc.frequency.setValueAtTime(440, audioCtx.currentTime) 
    gain.gain.setValueAtTime(0.03, audioCtx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.2) 
    
    osc.connect(gain)
    gain.connect(audioCtx.destination)
    
    osc.start()
    osc.stop(audioCtx.currentTime + 0.2)
  } catch (e) {}
}

// Web Audio Synthesizer: High-Tech Cyber Sonar Ping (for GENESIS theme!)
const playGenesisBeep = () => {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()
    
    osc.type = 'sine' 
    osc.frequency.setValueAtTime(1450, audioCtx.currentTime) // Crystal high-tech frequency
    gain.gain.setValueAtTime(0.015, audioCtx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.18) // Sinking sonar decay
    
    osc.connect(gain)
    gain.connect(audioCtx.destination)
    
    osc.start()
    osc.stop(audioCtx.currentTime + 0.18)
  } catch (e) {}
}

// Double cyber double chime sound on click
const playConfirm = () => {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    
    const osc1 = audioCtx.createOscillator()
    const gain1 = audioCtx.createGain()
    osc1.frequency.setValueAtTime(1200, audioCtx.currentTime)
    gain1.gain.setValueAtTime(0.04, audioCtx.currentTime)
    gain1.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.12)
    osc1.connect(gain1)
    gain1.connect(audioCtx.destination)
    osc1.start()
    osc1.stop(audioCtx.currentTime + 0.12)
    
    setTimeout(() => {
      const osc2 = audioCtx.createOscillator()
      const gain2 = audioCtx.createGain()
      osc2.frequency.setValueAtTime(1700, audioCtx.currentTime)
      gain2.gain.setValueAtTime(0.04, audioCtx.currentTime)
      gain2.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.12)
      osc2.connect(gain2)
      gain2.connect(audioCtx.destination)
      osc2.start()
      osc2.stop(audioCtx.currentTime + 0.12)
    }, 60)
  } catch (e) {}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&family=Teko:wght@300;400;500&family=Syncopate:wght@700&family=Space+Grotesk:wght@300;400;500;700&display=swap');

.font-teko {
  font-family: 'Teko', sans-serif;
}
.font-mono-cyber {
  font-family: 'Share Tech Mono', monospace;
}
.font-gothic {
  font-family: 'Cinzel', 'Georgia', serif;
}
.font-cyber-genesis {
  font-family: 'Orbitron', 'Share Tech Mono', sans-serif;
}
.font-syncopate {
  font-family: 'Syncopate', sans-serif;
  font-weight: 700;
}
.font-space-grotesk {
  font-family: 'Space Grotesk', sans-serif;
}

/* Scoped custom style bindings */
.bg-radial-gradient {
  background: radial-gradient(circle, rgba(3,0,20,0.1) 0%, rgba(2,0,10,0.92) 100%);
}

/* Effet CRT & Scanlines holographiques */
.scanlines::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03));
  z-index: 5;
  background-size: 100% 4px, 6px 100%;
  pointer-events: none;
}

/* Vidéo Rétro/Onirique animée pour SUBMERGE */
.dream-video {
  animation: dream-zoom 30s infinite alternate ease-in-out;
}

@keyframes dream-zoom {
  0% {
    transform: scale(1.0);
    filter: brightness(0.55) contrast(1.2) saturate(1.25) hue-rotate(-12deg) blur(0px);
  }
  50% {
    filter: brightness(0.6) contrast(1.15) saturate(1.35) hue-rotate(10deg) blur(1px);
  }
  100% {
    transform: scale(1.06);
    filter: brightness(0.5) contrast(1.25) saturate(1.15) hue-rotate(-22deg) blur(0px);
  }
}

/* Vidéo Médiévale Chivalry (Brillante et Lumineuse) */
.gothic-video {
  filter: contrast(1.1) brightness(0.85) drop-shadow(0 0 15px rgba(255,255,255,0.08));
}

@keyframes gothic-drift {
  0% { transform: scale(1.0) translate(0px, 0px); }
  100% { transform: scale(1.04) translate(-8px, -4px); }
}

/* Lueur diffuse et brume lumineuse pulsée (Glowing effect) */
.glow-mist {
  animation: pulse-glow 8s infinite alternate ease-in-out;
}

@keyframes pulse-glow {
  0% { 
    opacity: 0.12;
    background-color: rgba(255, 255, 255, 0.03);
  }
  100% { 
    opacity: 0.32;
    background-color: rgba(255, 255, 255, 0.07);
  }
}

/* Vidéo Futuriste Genesis (Légèrement ralentie, brillante et stylisée) */
.genesis-video {
  animation: genesis-drift 35s infinite alternate ease-in-out;
  filter: brightness(0.92) contrast(1.1) saturate(1.08) drop-shadow(0 0 15px rgba(34,211,238,0.12));
}

@keyframes genesis-drift {
  0% { transform: scale(1.0) translate(0px, 0px); }
  100% { transform: scale(1.03) translate(-4px, -2px); }
}
</style>
