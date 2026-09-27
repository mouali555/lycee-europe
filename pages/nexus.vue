<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

useHead({
  title: 'Nexus — Studio Créatif & Univers Visuels',
  meta: [
    {
      name: 'description',
      content: 'Explorez Nexus, le studio créatif du Lycée Europe : trois univers audiovisuels immersifs entre cité électrique, épopée sombre et symbiose futuriste.'
    }
  ]
})

const universes = [
  {
    id: 'submerge',
    name: 'Submerge',
    tag: 'Les nuits électriques',
    badge: 'FILM IMMERSIF · 4K',
    caption: 'La ville comme un rêve éveillé sous néons.',
    description: 'Au rythme des lumières et de la pluie, la mégapole devient un paysage cinématique à contempler. Laissez-vous emporter par cette dérive nocturne.',
    video: '/fond-villemp4.mp4'
  },
  {
    id: 'chivalry',
    name: 'Chivalry',
    tag: 'L’écho des légendes',
    badge: 'DARK FANTASY · ÉPOPÉE',
    caption: 'Une échappée hors du temps et des siècles.',
    description: 'Une atmosphère de légende, entre ombre minérale et éclats d’acier. Plongez dans une vision techno-médiévale du mythe et de la quête.',
    video: '/dark-fantasy-edit.mp4'
  },
  {
    id: 'genesis',
    name: 'Genesis',
    tag: 'Demain, au naturel',
    badge: 'SYNTHÈSE · BIOTECH',
    caption: 'Quand l’architecture du futur rejoint le vivant.',
    description: 'La nature ancestrale et les lignes chromées du futur se rencontrent. Une symbiose visuelle où la forêt devient le sanctuaire d’une nouvelle ère.',
    image: '/genesis-background.png',
    alt: 'Une silhouette en combinaison futuriste immaculée au cœur d’une forêt luxuriante.'
  }
]

const viewer = ref(null)
const activeVideo = ref(null)
const activeIndex = ref(-1)
const activeUniverse = computed(() => universes[activeIndex.value] ?? null)
const isPlaying = ref(false)
const reducedMotion = ref(false)
const mediaError = ref(false)
let motionPreference
let previousOverflow = ''
let openingElement = null
let selectionVersion = 0

function preparePreview(event) {
  const video = event.target
  if (Number.isFinite(video.duration) && video.duration > 0) {
    video.currentTime = Math.min(1, video.duration / 2)
  }
}

async function openUniverse(index) {
  if (viewer.value?.open && index === activeIndex.value) return
  const version = ++selectionVersion
  if (!viewer.value?.open) {
    openingElement = document.activeElement
    previousOverflow = document.body.style.overflow
  }
  activeVideo.value?.pause()
  activeIndex.value = index
  isPlaying.value = false
  mediaError.value = false
  await nextTick()
  if (version !== selectionVersion) return
  if (!viewer.value.open) {
    viewer.value.showModal()
    document.body.style.overflow = 'hidden'
  }
  if (activeVideo.value && !reducedMotion.value) {
    try {
      await activeVideo.value.play()
      isPlaying.value = true
    } catch {
      isPlaying.value = false
    }
  }
}

function togglePlayback() {
  if (!activeVideo.value) return
  if (activeVideo.value.paused) {
    activeVideo.value.play().then(() => { isPlaying.value = true }).catch(() => { mediaError.value = true })
  } else {
    activeVideo.value.pause()
    isPlaying.value = false
  }
}

function updatePlayback(event) {
  isPlaying.value = !event.target.paused
}

function handleMediaError() {
  mediaError.value = true
  isPlaying.value = false
}

function closeViewer() {
  selectionVersion++
  activeVideo.value?.pause()
  viewer.value?.close()
}

function handleDialogClose() {
  document.body.style.overflow = previousOverflow
  activeIndex.value = -1
  isPlaying.value = false
  if (openingElement instanceof HTMLElement && openingElement.isConnected) {
    openingElement.focus({ preventScroll: true })
  }
  openingElement = null
}

function updateMotionPreference(event) {
  reducedMotion.value = event.matches
  if (event.matches) activeVideo.value?.pause()
}

onMounted(() => {
  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
  reducedMotion.value = motionPreference.matches
  motionPreference.addEventListener('change', updateMotionPreference)
})

onBeforeUnmount(() => {
  selectionVersion++
  activeVideo.value?.pause()
  if (viewer.value?.open) document.body.style.overflow = previousOverflow
  motionPreference?.removeEventListener('change', updateMotionPreference)
})
</script>

<template>
  <main class="nexus-page">
    <!-- ══════════════════════════════════════════
         INTRO SECTION
    ══════════════════════════════════════════ -->
    <section class="studio-intro nexus-container" aria-labelledby="studio-title">
      <div class="studio-eyebrow">
        <span class="status-dot"></span>
        <span>LE STUDIO CRÉATIF // EXPÉRIMENTATIONS DIGITALES</span>
        <span class="eyebrow-right">LYCÉE EUROPE × NEXUS 2099</span>
      </div>

      <div class="intro-grid">
        <div class="intro-left">
          <h1 id="studio-title" class="studio-heading">
            <span>PLACE À</span>
            <span class="ht-outline">L’IMAGI-</span>
            <span class="ht-acid">NAIRE.<span class="nexus-star-glyph" aria-hidden="true">✦</span></span>
          </h1>
        </div>

        <div class="intro-aside">
          <span class="intro-index text-label-acid">03 / UNIVERS À EXPLORER</span>
          <p class="aside-lead">
            Une mégapole qui ne dort jamais. Une légende hors du temps. Un futur organique en pleine nature.
          </p>
          <p class="aside-sub">
            Trois portes ouvertes sur d’autres mondes. Choisissez votre horizon et plongez dans l’expérience.
          </p>
          <a class="explore-link" href="#univers">
            Entrer dans la galerie <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════
         UNIVERSE GALLERY GRID
    ══════════════════════════════════════════ -->
    <section id="univers" class="universe-section nexus-container" aria-labelledby="universe-heading">
      <div class="section-label">
        <div class="sl-left">
          <span class="text-label-acid">LA COLLECTION</span>
          <h2 id="universe-heading" class="collection-title">Trois visions cinématiques</h2>
        </div>
        <span class="sl-right">À contempler, à ressentir, à explorer.</span>
      </div>

      <div class="universe-grid">
        <button
          v-for="(universe, index) in universes"
          :key="universe.id"
          type="button"
          class="universe-card"
          :class="`card-${universe.id}`"
          :aria-label="`Explorer ${universe.name} : ${universe.tag}`"
          @click="openUniverse(index)"
        >
          <div class="card-visual">
            <video
              v-if="universe.video"
              class="card-media"
              :src="`${universe.video}#t=1`"
              preload="metadata"
              muted
              playsinline
              aria-hidden="true"
              tabindex="-1"
              @loadedmetadata="preparePreview"
            />
            <img
              v-else
              class="card-media"
              :src="universe.image"
              :alt="universe.alt"
              loading="lazy"
              width="1024"
              height="1024"
            />

            <!-- Shading, Vignette & Chrome highlights -->
            <div class="card-shade"></div>
            <div class="card-chrome-line"></div>

            <div class="card-topline">
              <span class="card-number">0{{ index + 1 }} //</span>
              <span class="card-badge">{{ universe.badge }}</span>
            </div>

            <div class="card-bottom">
              <span class="universe-tag">{{ universe.tag }}</span>
              <div class="card-name-row">
                <h3>{{ universe.name }}</h3>
                <span class="card-arrow" aria-hidden="true">↗</span>
              </div>
            </div>
          </div>

          <div class="card-caption">
            <span class="cap-text">{{ universe.caption }}</span>
            <span class="cap-cta" aria-hidden="true">Ouvrir le flux ↗</span>
          </div>
        </button>
      </div>
    </section>

    <!-- ══════════════════════════════════════════
         STUDIO MANIFESTO BANNER
    ══════════════════════════════════════════ -->
    <section class="studio-note nexus-container" aria-label="À propos du studio">
      <div class="note-mark" aria-hidden="true">
        <span>N</span>
        <span class="note-star">✦</span>
      </div>

      <div class="note-statement">
        <span class="note-label text-label-acid">UN AUTRE REGARD</span>
        <p class="note-headline">
          La curiosité nous<br>
          <span class="ht-outline">emmène</span> <span class="ht-acid">plus loin.</span>
        </p>
      </div>

      <div class="note-copy">
        <p>
          Nexus est une parenthèse sensorielle dans la vie du campus. Conçu comme un laboratoire créatif,
          cet espace explore la frontière entre production visuelle, design sonore et techno-surréalisme.
        </p>
        <NuxtLink to="/chat" class="note-link">
          Poursuivre la conversation dans l’espace communauté <span aria-hidden="true">↗</span>
        </NuxtLink>
      </div>
    </section>

    <!-- ══════════════════════════════════════════
         IMMERSIVE FULLSCREEN VIEWER DIALOG
    ══════════════════════════════════════════ -->
    <dialog
      ref="viewer"
      class="immersive-viewer"
      aria-labelledby="viewer-title"
      @cancel.prevent="closeViewer"
      @close="handleDialogClose"
    >
      <template v-if="activeUniverse">
        <video
          v-if="activeUniverse.video"
          :key="activeUniverse.id"
          ref="activeVideo"
          class="immersive-media"
          :src="activeUniverse.video"
          muted
          playsinline
          loop
          preload="auto"
          @play="updatePlayback"
          @pause="updatePlayback"
          @error="handleMediaError"
        />
        <img
          v-else
          class="immersive-media"
          :src="activeUniverse.image"
          :alt="activeUniverse.alt"
        />

        <div class="viewer-shade"></div>

        <!-- Top bar -->
        <div class="viewer-topbar">
          <button type="button" class="viewer-button back-button" @click="closeViewer">
            <span aria-hidden="true">←</span> Quitter la galerie
          </button>
          <div class="viewer-brand">
            <span>LYCÉE EUROPE</span>
            <span class="brand-slash">/</span>
            <span class="brand-nexus">NEXUS STUDIO ✦</span>
          </div>
        </div>

        <!-- Middle Content -->
        <div class="viewer-content">
          <div class="viewer-copy">
            <span class="viewer-tag-pill">
              0{{ activeIndex + 1 }} // {{ activeUniverse.tag }}
            </span>
            <h2 id="viewer-title" class="viewer-universe-title">{{ activeUniverse.name }}</h2>
            <p class="viewer-universe-desc">{{ activeUniverse.description }}</p>
          </div>

          <div class="viewer-controls">
            <p v-if="mediaError" class="playback-message" role="status">
              Flux vidéo indisponible. Choisissez un autre univers ci-dessous.
            </p>
            <template v-else-if="activeUniverse.video">
              <button type="button" class="viewer-button playback-button" @click="togglePlayback">
                <span aria-hidden="true" class="play-icon">{{ isPlaying ? 'Ⅱ' : '▷' }}</span>
                <span>{{ isPlaying ? 'Mettre en pause' : 'Lancer la vidéo' }}</span>
              </button>
              <span class="playback-note">
                Lecture sans son
                <span v-if="reducedMotion && !isPlaying"> · Animation désactivée</span>
              </span>
            </template>
            <span v-else class="playback-note">Œuvre visuelle fixe haute résolution.</span>
          </div>
        </div>

        <!-- Bottom bar & switcher -->
        <div class="viewer-bottom">
          <div class="universe-switcher" role="tablist" aria-label="Choisir un univers">
            <button
              v-for="(universe, index) in universes"
              :key="universe.id"
              type="button"
              class="switcher-item"
              :class="{ 'is-current': activeIndex === index }"
              :aria-pressed="activeIndex === index"
              @click="openUniverse(index)"
            >
              <span class="sw-num">0{{ index + 1 }}</span>
              <span class="sw-name">{{ universe.name }}</span>
            </button>
          </div>
          <span class="escape-hint">Appuyez sur Échap pour quitter</span>
        </div>
      </template>
    </dialog>
  </main>
</template>

<style scoped>
/* ── Page Layout & Base ─────────────────────────────────────── */
.nexus-page {
  background: var(--void);
  color: var(--white);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  padding-bottom: 96px;
}

.nexus-container {
  width: min(var(--container-max), calc(100% - var(--container-pad) * 2));
  margin-inline: auto;
}

/* ── Studio Intro ───────────────────────────────────────────── */
.studio-intro {
  padding-top: clamp(40px, 6vw, 70px);
}

.studio-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--white-muted);
}

.status-dot {
  width: 7px;
  height: 7px;
  background: var(--acid);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--acid);
}

.eyebrow-right {
  margin-left: auto;
  color: var(--acid);
  font-weight: 700;
}

.intro-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  align-items: flex-end;
  gap: clamp(40px, 6vw, 80px);
  padding: clamp(50px, 7vw, 90px) 0 clamp(40px, 6vw, 70px);
}

.studio-heading {
  font-family: var(--font-display);
  font-size: clamp(54px, 7vw, 106px);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.06em;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.ht-outline {
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(250, 250, 250, 0.4);
}

.ht-acid {
  color: var(--acid);
  text-shadow: 0 0 35px rgba(204, 255, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 14px;
}

.nexus-star-glyph {
  font-size: 0.55em;
  color: var(--acid);
  animation: pulse-star 3s ease-in-out infinite;
}

@keyframes pulse-star {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.85); }
}

.intro-aside {
  max-width: 440px;
  padding-bottom: 8px;
}

.intro-index {
  display: block;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  margin-bottom: 16px;
}

.aside-lead {
  font-size: 16px;
  line-height: 1.7;
  color: var(--white);
  margin: 0 0 12px;
}

.aside-sub {
  font-size: 13px;
  line-height: 1.75;
  color: var(--white-dim);
  margin: 0 0 24px;
}

.explore-link {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--acid);
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  border-bottom: 1px solid rgba(204, 255, 0, 0.4);
  padding-bottom: 6px;
  transition: all var(--t-fast);
}

.explore-link:hover {
  border-color: var(--acid);
  transform: translateY(2px);
}

/* ── Universe Gallery ───────────────────────────────────────── */
.universe-section {
  padding-top: 40px;
  scroll-margin-top: 100px;
}

.section-label {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 24px 0;
  border-top: 1px solid rgba(250, 250, 250, 0.08);
  margin-bottom: 28px;
}

.collection-title {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin: 8px 0 0;
}

.sl-right {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--white-muted);
}

.universe-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

.universe-card {
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  color: inherit;
  font: inherit;
  display: flex;
  flex-direction: column;
}

.card-visual {
  aspect-ratio: 0.78;
  position: relative;
  overflow: hidden;
  border-radius: var(--r-md);
  background: var(--onyx-2);
  border: 1px solid rgba(250, 250, 250, 0.1);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  transition: border-color var(--t-base), transform var(--t-base);
}

.universe-card:hover .card-visual {
  border-color: var(--acid);
  transform: translateY(-6px);
  box-shadow: 0 24px 60px rgba(204, 255, 0, 0.15);
}

.card-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
  transition: transform 0.8s cubic-bezier(0.2, 0.65, 0.2, 1);
}

.universe-card:hover .card-media {
  transform: scale(1.06);
}

.card-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    transparent 35%,
    rgba(0, 0, 0, 0.2) 60%,
    rgba(0, 0, 0, 0.95) 100%
  );
  pointer-events: none;
}

.card-chrome-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(204, 255, 0, 0.5), transparent);
  pointer-events: none;
}

.card-topline {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.card-number {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  color: var(--white);
  font-weight: 700;
}

.card-badge {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(250, 250, 250, 0.15);
  padding: 5px 10px;
  border-radius: var(--r-full);
  color: var(--white);
}

.card-bottom {
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: 22px;
  z-index: 2;
}

.universe-tag {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--acid);
  font-weight: 700;
  display: block;
}

.card-name-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 6px;
}

.card-name-row h3 {
  font-family: var(--font-display);
  font-size: clamp(26px, 2.8vw, 36px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin: 0;
  color: var(--white);
}

.card-arrow {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(250, 250, 250, 0.3);
  display: grid;
  place-items: center;
  font-size: 18px;
  color: var(--white);
  transition: all var(--t-fast);
  flex-shrink: 0;
}

.universe-card:hover .card-arrow {
  background: var(--acid);
  color: var(--void);
  border-color: var(--acid);
  transform: rotate(45deg);
}

.card-caption {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px 4px 0;
  font-size: 12px;
  color: var(--white-dim);
}

.cap-text {
  line-height: 1.6;
}

.cap-cta {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--acid);
  white-space: nowrap;
}

/* ── Studio Manifesto Note ──────────────────────────────────── */
.studio-note {
  border-top: 1px solid rgba(250, 250, 250, 0.08);
  margin-top: 80px;
  padding-top: 50px;
  display: grid;
  grid-template-columns: 100px 1.2fr 1fr;
  gap: 40px;
  align-items: center;
}

.note-mark {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: var(--acid);
  color: var(--void);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 42px;
  font-weight: 800;
  position: relative;
  box-shadow: 0 0 35px rgba(204, 255, 0, 0.35);
}

.note-star {
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 16px;
}

.note-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.16em;
  display: block;
  margin-bottom: 8px;
}

.note-headline {
  font-family: var(--font-display);
  font-size: clamp(26px, 2.6vw, 36px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.15;
  margin: 0;
}

.note-copy p {
  font-size: 13px;
  line-height: 1.8;
  color: var(--white-dim);
  margin: 0 0 16px;
}

.note-link {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--acid);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: opacity var(--t-fast);
}

.note-link:hover {
  opacity: 0.8;
}

/* ── Fullscreen Immersive Modal Dialog ──────────────────────── */
.immersive-viewer {
  width: 100vw;
  max-width: none;
  height: 100vh;
  height: 100dvh;
  max-height: none;
  margin: 0;
  padding: 0;
  border: 0;
  inset: 0;
  color: var(--white);
  background: var(--void);
  overflow: hidden;
  font-family: var(--font-body);
}

.immersive-viewer[open] {
  display: flex;
  flex-direction: column;
}

.immersive-viewer::backdrop {
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(15px);
}

.immersive-media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.viewer-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0.4) 65%,
    rgba(0, 0, 0, 0.95) 100%
  );
  pointer-events: none;
  z-index: 1;
}

.viewer-topbar,
.viewer-content,
.viewer-bottom {
  position: relative;
  z-index: 2;
}

.viewer-topbar {
  padding: 28px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.viewer-button {
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(250, 250, 250, 0.2);
  color: var(--white);
  padding: 10px 22px;
  border-radius: var(--r-full);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all var(--t-fast);
}

.viewer-button:hover {
  background: var(--acid);
  color: var(--void);
  border-color: var(--acid);
}

.viewer-brand {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  display: flex;
  align-items: center;
  gap: 8px;
}

.brand-slash {
  color: var(--white-muted);
}

.brand-nexus {
  color: var(--acid);
  font-weight: 700;
}

.viewer-content {
  margin-top: auto;
  padding: 100px 48px 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
}

.viewer-copy {
  max-width: 680px;
}

.viewer-tag-pill {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--acid);
  background: rgba(204, 255, 0, 0.15);
  padding: 5px 12px;
  border-radius: var(--r-full);
  display: inline-block;
  margin-bottom: 16px;
}

.viewer-universe-title {
  font-family: var(--font-display);
  font-size: clamp(48px, 8vw, 110px);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.06em;
  margin: 0 0 20px;
  color: var(--white);
}

.viewer-universe-desc {
  font-size: 15px;
  line-height: 1.8;
  color: var(--white-dim);
  max-width: 540px;
  margin: 0;
}

.viewer-controls {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

.play-icon {
  font-size: 14px;
}

.playback-note {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  color: var(--white-muted);
}

.viewer-bottom {
  padding: 0 48px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.universe-switcher {
  display: flex;
  align-items: center;
  gap: 20px;
}

.switcher-item {
  background: none;
  border: none;
  border-top: 2px solid rgba(250, 250, 250, 0.2);
  padding: 12px 0 4px;
  color: var(--white-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  transition: all var(--t-fast);
}

.switcher-item:hover {
  color: var(--white);
  border-color: rgba(250, 250, 250, 0.5);
}

.switcher-item.is-current {
  color: var(--acid);
  border-color: var(--acid);
}

.sw-num {
  font-size: 9px;
  opacity: 0.7;
}

.sw-name {
  font-weight: 700;
}

.escape-hint {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--white-muted);
}

/* ── Focus States ───────────────────────────────────────────── */
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--acid);
  outline-offset: 4px;
  border-radius: var(--r-xs);
}

/* ── Responsive Breakpoints ─────────────────────────────────── */
@media (max-width: 1024px) {
  .intro-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .universe-grid {
    grid-template-columns: 1fr 1fr;
  }
  .studio-note {
    grid-template-columns: 80px 1fr;
    gap: 24px;
  }
  .note-copy {
    grid-column: 1 / -1;
  }
  .viewer-content {
    padding: 60px 28px 30px;
    flex-direction: column;
    align-items: flex-start;
  }
  .viewer-controls {
    align-items: flex-start;
  }
  .viewer-topbar,
  .viewer-bottom {
    padding-inline: 28px;
  }
}

@media (max-width: 768px) {
  .universe-grid {
    grid-template-columns: 1fr;
  }
  .card-visual {
    aspect-ratio: 1.1;
  }
  .studio-eyebrow {
    flex-wrap: wrap;
  }
  .eyebrow-right {
    display: none;
  }
  .section-label {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .studio-note {
    grid-template-columns: 1fr;
  }
  .note-mark {
    display: none;
  }
  .viewer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .escape-hint {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
}
</style>
