<template>
  <main class="nexus-page">
    <section class="studio-intro nexus-container" aria-labelledby="studio-title">
      <div class="studio-eyebrow"><span class="status-dot" /> Le studio créatif <span class="eyebrow-right">Lycée Europe / Nexus</span></div>
      <div class="intro-grid">
        <h1 id="studio-title">Place à<br />l’<span>imaginaire.</span><svg class="title-star" viewBox="0 0 80 80" fill="none" aria-hidden="true"><path d="M40 0v80M0 40h80M12 12l56 56M12 68l56-56" stroke="currentColor" stroke-width="9" /></svg></h1>
        <div class="intro-aside">
          <span class="intro-index">03 / UNIVERS À EXPLORER</span>
          <p>Une ville qui ne dort jamais. Une épopée hors du temps. Un futur en pleine nature.</p>
          <p class="intro-small">Trois portes ouvertes sur d’autres mondes. Choisissez la vôtre.</p>
          <a class="explore-link" href="#univers">Entrer dans la galerie <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
    <section id="univers" class="universe-section nexus-container" aria-labelledby="universe-heading">
      <div class="section-label"><h2 id="universe-heading">La collection</h2><span>À regarder, à ressentir, à explorer.</span></div>
      <div class="universe-grid">
        <button v-for="(universe, index) in universes" :key="universe.id" type="button" class="universe-card" :class="`card-${universe.id}`" @click="openUniverse(index)" :aria-label="`Explorer ${universe.name} : ${universe.tag}`">
          <div class="card-visual">
            <video v-if="universe.video" class="card-media" :src="`${universe.video}#t=1`" preload="metadata" muted playsinline aria-hidden="true" tabindex="-1" @loadedmetadata="preparePreview" />
            <img v-else class="card-media" :src="universe.image" alt="" loading="lazy" width="1024" height="1024" />
            <div class="card-shade" />
            <div class="card-topline"><span class="card-number">0{{ index + 1 }}</span><span class="card-type">{{ universe.video ? 'Film immersif' : 'Exploration visuelle' }}</span></div>
            <div class="card-bottom"><span class="universe-tag">{{ universe.tag }}</span><div class="card-name-row"><h3>{{ universe.name }}</h3><span class="card-arrow" aria-hidden="true">↗</span></div></div>
          </div>
          <div class="card-caption"><span>{{ universe.caption }}</span><span aria-hidden="true">Découvrir ↗</span></div>
        </button>
      </div>
    </section>
    <section class="studio-note nexus-container" aria-label="À propos du studio">
      <div class="note-mark" aria-hidden="true">N<span>↗</span></div>
      <div><span class="note-label">Un autre regard</span><p>La curiosité nous<br />emmène plus loin.</p></div>
      <div class="note-copy"><p>Nexus est une parenthèse visuelle dans la vie du campus. Prenez le temps d’explorer ces ambiances, simplement pour le plaisir de découvrir.</p><NuxtLink to="/chat">Poursuivre la conversation <span aria-hidden="true">↗</span></NuxtLink></div>
    </section>
    <dialog ref="viewer" class="immersive-viewer" aria-labelledby="viewer-title" @cancel.prevent="closeViewer" @close="handleDialogClose">
      <template v-if="activeUniverse">
        <video v-if="activeUniverse.video" :key="activeUniverse.id" ref="activeVideo" class="immersive-media" :src="activeUniverse.video" muted playsinline loop preload="auto" @play="updatePlayback" @pause="updatePlayback" @error="handleMediaError" />
        <img v-else class="immersive-media" :src="activeUniverse.image" :alt="activeUniverse.alt" />
        <div class="viewer-shade" />
        <div class="viewer-topbar"><button type="button" class="viewer-button back-button" @click="closeViewer"><span aria-hidden="true">←</span> La galerie</button><span class="viewer-brand">Lycée Europe <span>/ Nexus</span></span></div>
        <div class="viewer-content">
          <div class="viewer-copy"><span class="universe-tag">0{{ activeIndex + 1 }} / {{ activeUniverse.tag }}</span><h2 id="viewer-title">{{ activeUniverse.name }}</h2><p>{{ activeUniverse.description }}</p></div>
          <div class="viewer-controls">
            <p v-if="mediaError" class="playback-message" role="status">La vidéo ne peut pas être lue. Choisissez un autre univers ou revenez à la galerie.</p>
            <template v-else-if="activeUniverse.video"><button type="button" class="viewer-button playback-button" @click="togglePlayback"><span aria-hidden="true">{{ isPlaying ? 'Ⅱ' : '▷' }}</span> {{ isPlaying ? 'Mettre en pause' : 'Lancer la vidéo' }}</button><span class="playback-note">Lecture sans son<span v-if="reducedMotion && !isPlaying"> · Animation en pause</span></span></template>
            <span v-else class="playback-note">Une image, un autre monde.</span>
          </div>
        </div>
        <div class="viewer-bottom"><div class="universe-switcher" aria-label="Choisir un univers"><button v-for="(universe, index) in universes" :key="universe.id" type="button" :class="{ 'is-current': activeIndex === index }" :aria-pressed="activeIndex === index" @click="openUniverse(index)"><span>0{{ index + 1 }}</span>{{ universe.name }}</button></div><span class="escape-hint">Échap pour revenir</span></div>
      </template>
    </dialog>
  </main>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

useHead({ title: 'Nexus, le studio créatif', meta: [{ name: 'description', content: 'Explorez Nexus, le studio créatif du Lycée Europe : trois univers visuels entre ville onirique, épopée et nature futuriste.' }] })

const universes = [
  { id: 'submerge', name: 'Submerge', tag: 'Les nuits électriques', caption: 'La ville comme un rêve éveillé.', description: 'Au rythme des lumières, la ville devient un paysage à contempler. Laissez-vous emporter par cette échappée urbaine.', video: '/fond-villemp4.mp4' },
  { id: 'chivalry', name: 'Chivalry', tag: 'L’écho des légendes', caption: 'Une échappée hors du temps.', description: 'Une atmosphère de légende, entre ombre et lumière. Plongez dans une vision cinématographique de l’imaginaire médiéval.', video: '/dark-fantasy-edit.mp4' },
  { id: 'genesis', name: 'Genesis', tag: 'Demain, au naturel', caption: 'Quand le futur rencontre le vivant.', description: 'La nature et les lignes du futur se répondent. Une rencontre visuelle où la forêt devient le décor d’un nouveau récit.', image: '/genesis-background.png', alt: 'Une silhouette en tenue futuriste blanche au cœur d’une forêt verdoyante.' }
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
  if (Number.isFinite(video.duration) && video.duration > 0) video.currentTime = Math.min(1, video.duration / 2)
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
    const video = activeVideo.value
    try { await video.play() } catch { if (video === activeVideo.value) isPlaying.value = false }
  }
}

async function togglePlayback() {
  const video = activeVideo.value
  if (!video) return
  if (video.paused) {
    try { await video.play() } catch { if (video === activeVideo.value) isPlaying.value = false }
  } else video.pause()
}

function updatePlayback(event) {
  if (event.target === activeVideo.value) isPlaying.value = !event.target.paused
}

function handleMediaError(event) {
  if (event.target === activeVideo.value) mediaError.value = true
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
  if (openingElement instanceof HTMLElement && openingElement.isConnected) openingElement.focus({ preventScroll: true })
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

<style scoped>
.nexus-page { background: #14272e; color: #f7f7ef; padding: 0 0 88px; }
.nexus-container { width: min(1320px, calc(100% - 112px)); margin-inline: auto; }
.studio-intro { padding-top: 42px; }
.studio-eyebrow { display: flex; align-items: center; gap: 10px; color: #dce8dc; font-size: 11px; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }
.status-dot { width: 7px; height: 7px; background: #e5ef97; border-radius: 50%; }
.eyebrow-right { margin-left: auto; color: #a4b5b9; font-weight: 500; }
.intro-grid { display: grid; grid-template-columns: 1.75fr 1fr; align-items: end; gap: 64px; padding: 72px 0 70px; }
.intro-grid h1 { position: relative; margin: 0; font-size: clamp(56px, 6.7vw, 102px); line-height: 1.04; font-weight: 500; letter-spacing: -.065em; }
.intro-grid h1 > span { color: #e5ef97; }
.title-star { position: absolute; width: 53px; height: 53px; top: 11px; margin-left: 20px; color: #e5ef97; transform: rotate(14deg); }
.intro-aside { max-width: 345px; padding-bottom: 4px; }
.intro-index { display: block; color: #e5ef97; font-size: 10px; font-weight: 700; letter-spacing: .13em; margin-bottom: 20px; }
.intro-aside p { font-size: 16px; line-height: 1.7; margin: 0 0 11px; }
.intro-aside .intro-small { color: #b9c7c9; font-size: 13px; line-height: 1.65; }
.explore-link { display: inline-flex; align-items: center; justify-content: space-between; gap: 40px; color: #f7f7ef; border-bottom: 1px solid #6b7c7f; padding: 13px 0 10px; font-size: 12px; font-weight: 600; text-decoration: none; }
.explore-link span { font-size: 20px; }
.universe-section { scroll-margin-top: 100px; }
.section-label { display: flex; justify-content: space-between; align-items: center; padding: 21px 0; border-top: 1px solid #415259; }
.section-label h2 { font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: .1em; margin: 0; }
.section-label > span { color: #a6b8bc; font-size: 11px; }
.universe-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.universe-card { padding: 0; margin: 0; text-align: left; border: 0; color: inherit; background: none; cursor: pointer; font: inherit; min-width: 0; }
.card-visual { aspect-ratio: .77; position: relative; overflow: hidden; border-radius: 6px; background: #233c40; }
.card-submerge .card-visual { background: linear-gradient(145deg, #b384b7, #382247 50%, #ba7f57); }
.card-chivalry .card-visual { background: linear-gradient(145deg, #9c9c85, #3f4b40 40%, #1e2925); }
.card-media { width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; transition: transform .65s cubic-bezier(.2,.65,.2,1); }
.card-submerge .card-media { object-position: 60% center; }
.card-genesis .card-media { object-position: 50% center; }
.card-shade { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(8,19,25,.25), transparent 32%, rgba(7,18,25,.15) 58%, rgba(7,18,25,.88)); }
.card-topline { position: absolute; top: 22px; left: 23px; right: 23px; display: flex; align-items: center; justify-content: space-between; }
.card-number { font-size: 12px; letter-spacing: .08em; font-weight: 500; }
.card-type { background: rgba(12,29,35,.55); backdrop-filter: blur(10px); padding: 7px 11px; border: 1px solid rgba(255,255,255,.26); border-radius: 24px; font-size: 9px; font-weight: 600; }
.card-bottom { position: absolute; left: 23px; right: 23px; bottom: 27px; }
.universe-tag { font-size: 9px; letter-spacing: .17em; text-transform: uppercase; font-weight: 700; color: #e5ef97; }
.card-name-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: 9px; }
.card-name-row h3 { font-size: clamp(25px, 2.6vw, 39px); line-height: 1.15; font-weight: 500; letter-spacing: -.055em; margin: 0; }
.card-arrow { display: flex; align-items: center; justify-content: center; width: 38px; height: 38px; flex: 0 0 38px; border-radius: 50%; border: 1px solid rgba(255,255,255,.55); font-size: 23px; transition: background .2s, color .2s, border-color .2s; }
.card-caption { display: flex; align-items: start; justify-content: space-between; gap: 15px; padding: 17px 0 0; font-size: 10px; line-height: 1.5; color: #b2c3c6; }
.card-caption > span:last-child { white-space: nowrap; color: #f0f3e9; }
.universe-card:hover .card-media { transform: scale(1.045); }
.universe-card:hover .card-arrow { color: #14272e; background: #e5ef97; border-color: #e5ef97; }
.universe-card:focus-visible, .explore-link:focus-visible, .note-copy a:focus-visible { outline: 2px solid #e5ef97; outline-offset: 7px; border-radius: 4px; }
.studio-note { display: grid; grid-template-columns: 120px 1.1fr 1fr; gap: 40px; align-items: center; border-top: 1px solid #415259; margin-top: 76px; padding-top: 45px; }
.note-mark { width: 99px; height: 99px; border-radius: 50%; background: #e5ef97; color: #14272e; display: flex; justify-content: center; align-items: center; font-size: 54px; font-weight: 500; letter-spacing: -.07em; position: relative; }
.note-mark span { font-size: 26px; align-self: flex-start; margin-top: 22px; margin-left: -3px; }
.note-label { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: .15em; color: #a4b8bb; }
.studio-note > div > p { font-size: 29px; font-weight: 400; line-height: 1.25; letter-spacing: -.045em; margin: 10px 0 0; }
.studio-note .note-copy > p { margin: 0; color: #b2c3c6; font-size: 12px; line-height: 1.8; letter-spacing: 0; }
.note-copy a { display: inline-flex; align-items: center; gap: 20px; font-size: 11px; font-weight: 600; margin-top: 16px; color: #e5ef97; text-decoration: none; }
.note-copy a span { font-size: 20px; }
.immersive-viewer { width: 100vw; max-width: none; height: 100vh; height: 100dvh; max-height: none; margin: 0; padding: 0; border: 0; inset: 0; color: #fff; background: #10232a; overflow: auto; font-family: inherit; }
.immersive-viewer[open] { display: flex; flex-direction: column; }
.immersive-viewer::backdrop { background: #10232a; }
.immersive-media { position: absolute; inset: 0; width: 100%; height: 100%; min-height: 100%; object-fit: cover; }
.viewer-shade { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(7,17,23,.7), rgba(7,17,23,.04) 32%, rgba(7,17,23,.35) 55%, rgba(7,17,23,.92)); pointer-events: none; }
.viewer-topbar, .viewer-content, .viewer-bottom { position: relative; z-index: 1; }
.viewer-topbar { padding: 32px 44px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.viewer-button { color: #fff; background: rgba(12,26,33,.7); border: 1px solid rgba(255,255,255,.45); display: inline-flex; align-items: center; justify-content: center; gap: 13px; padding: 11px 19px; font-family: inherit; font-size: 12px; font-weight: 600; border-radius: 30px; cursor: pointer; transition: background .2s, color .2s; }
.viewer-button:hover { background: #e5ef97; color: #14272e; }
.viewer-button:focus-visible, .universe-switcher button:focus-visible { outline: 2px solid #e5ef97; outline-offset: 4px; }
.back-button > span { font-size: 21px; }
.viewer-brand { font-size: 13px; font-weight: 600; }
.viewer-brand > span { color: #bdc9c9; margin-left: 7px; font-weight: 400; }
.viewer-content { display: flex; align-items: flex-end; justify-content: space-between; gap: 35px; padding: 150px 60px 55px; margin-top: auto; }
.viewer-copy { max-width: 720px; }
.viewer-copy .universe-tag { font-size: 11px; }
.viewer-copy h2 { font-size: clamp(54px, 9.7vw, 140px); font-weight: 400; line-height: 1.1; letter-spacing: -.07em; margin: 13px 0 20px; }
.viewer-copy p { font-size: 13px; line-height: 1.8; max-width: 430px; color: #e1e9e9; margin: 0; }
.viewer-controls { display: flex; flex-direction: column; align-items: flex-end; gap: 12px; flex: 0 0 195px; padding-bottom: 3px; }
.playback-button { white-space: nowrap; min-width: 184px; }
.playback-button span { font-size: 18px; line-height: 20px; }
.playback-note { color: #c2cece; font-size: 10px; text-align: right; line-height: 1.6; }
.playback-message { color: #f6ecd3; font-size: 12px; max-width: 240px; }
.viewer-bottom { display: flex; justify-content: space-between; align-items: center; gap: 24px; padding: 0 60px 28px; }
.universe-switcher { display: flex; align-items: center; gap: 26px; }
.universe-switcher button { display: flex; align-items: center; gap: 9px; color: #a6b5b8; border: 0; border-top: 1px solid #7d898c; border-radius: 0; padding: 15px 0 2px; background: transparent; font-size: 11px; font-family: inherit; cursor: pointer; }
.universe-switcher button span { font-size: 9px; }
.universe-switcher button.is-current { color: #e5ef97; border-top-color: #e5ef97; }
.universe-switcher button:hover { color: #fff; }
.escape-hint { color: #a6b5b8; font-size: 10px; }
@media (min-width: 1600px) { .intro-grid h1 { font-size: 108px; } }
@media (max-width: 1100px) { .nexus-container { width: calc(100% - 64px); }.intro-grid { gap: 36px; }.intro-grid h1 { font-size: 7.7vw; }.title-star { width: 38px; height: 38px; top: 8px; margin-left: 10px; }.universe-grid { gap: 17px; }.card-topline, .card-bottom { left: 18px; right: 18px; }.card-caption > span:last-child { display: none; }.studio-note { grid-template-columns: 100px 1fr 1fr; gap: 25px; }.viewer-content { padding-inline: 40px; }.viewer-bottom { padding-inline: 40px; } }
@media (max-width: 760px) { .nexus-page { padding-bottom: 55px; }.nexus-container { width: calc(100% - 40px); }.studio-intro { padding-top: 30px; }.studio-eyebrow { font-size: 9px; }.eyebrow-right { font-size: 8px; letter-spacing: .07em; }.intro-grid { grid-template-columns: 1fr; gap: 28px; padding: 42px 0 42px; }.intro-grid h1 { font-size: clamp(52px, 12.7vw, 90px); }.title-star { width: 37px; height: 37px; top: 5px; margin-left: 14px; }.intro-aside { max-width: 460px; }.intro-index { margin-bottom: 12px; }.intro-aside p { font-size: 14px; }.intro-aside .intro-small { font-size: 12px; }.section-label > span { font-size: 9px; max-width: 130px; text-align: right; }.universe-grid { grid-template-columns: 1fr; gap: 30px; }.card-visual { aspect-ratio: 1.1; }.card-topline, .card-bottom { left: 25px; right: 25px; }.card-name-row h3 { font-size: 39px; }.card-caption { padding-top: 12px; font-size: 11px; }.card-caption > span:last-child { display: block; }.studio-note { grid-template-columns: 70px 1fr; gap: 23px; margin-top: 48px; padding-top: 30px; }.note-mark { width: 70px; height: 70px; font-size: 39px; }.note-mark span { font-size: 21px; margin-top: 12px; }.studio-note > div > p { font-size: 26px; }.note-copy { grid-column: 1 / -1; }.viewer-topbar { padding: 21px; }.viewer-brand { font-size: 11px; }.viewer-brand > span { display: none; }.viewer-content { padding: 90px 24px 28px; flex-direction: column; align-items: stretch; gap: 25px; }.viewer-copy h2 { font-size: 16vw; }.viewer-copy p { max-width: 350px; font-size: 12px; }.viewer-controls { flex: none; flex-direction: row; align-items: center; justify-content: space-between; }.playback-button { min-width: 0; font-size: 10px; padding: 9px 14px; gap: 9px; }.playback-note { font-size: 8px; max-width: 125px; }.viewer-bottom { padding: 0 24px 24px; }.universe-switcher { width: 100%; gap: 18px; }.universe-switcher button { flex: 1; font-size: 10px; gap: 7px; }.escape-hint { display: none; } }
@media (max-width: 370px) { .eyebrow-right { display: none; }.intro-grid h1 { font-size: 48px; }.title-star { width: 30px; height: 30px; margin-left: 9px; }.card-caption { font-size: 9px; }.viewer-brand { display: none; }.universe-switcher { gap: 12px; }.universe-switcher button { font-size: 9px; } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { transition: none !important; scroll-behavior: auto !important; }.universe-card:hover .card-media { transform: none; } }
</style>

