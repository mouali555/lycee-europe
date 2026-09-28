<template>
  <main class="nexus-page">
    <section class="studio-intro nexus-container" aria-labelledby="studio-title">
      <div class="studio-eyebrow"><span class="status-dot" /> Studio créatif <span class="eyebrow-right">Lycée Europe / Nexus</span></div>
      <div class="intro-grid">
        <div class="intro-copy">
          <h1 id="studio-title">Au-delà<br />du <span>réel.</span><span class="title-star" aria-hidden="true">✦</span></h1>
          <p>Trois univers. Mille façons de s’évader.<br />Laissez une place à l’imaginaire.</p>
          <a class="explore-link" href="#univers">Explorer la collection <span aria-hidden="true">↓</span></a>
        </div>
        <div class="studio-art" aria-hidden="true">
          <div class="art-orbit orbit-one" /><div class="art-orbit orbit-two" />
          <div class="art-monogram">N<span>✦</span></div>
          <span class="art-caption">NEXUS — OPEN YOUR MIND</span><span class="art-coordinate">03 / ∞</span>
        </div>
      </div>
      <div class="intro-baseline"><span>Une parenthèse dans la vie du campus.</span><span>Faites défiler pour découvrir <span aria-hidden="true">↓</span></span></div>
    </section>

    <section id="univers" class="universe-section" aria-labelledby="universe-heading">
      <div class="nexus-container">
        <div class="section-label"><span class="section-index">01 / LA COLLECTION</span><span>À regarder. À ressentir. À explorer.</span></div>
        <div class="collection-heading"><h2 id="universe-heading">Choisissez<br />votre ailleurs.</h2><p>De la ville aux étoiles, une collection d’ambiances à découvrir en plein écran.</p></div>
        <div class="universe-grid">
          <button v-for="(universe, index) in universes" :key="universe.id" type="button" class="universe-card" :class="`card-${universe.id}`" @click="openUniverse(index)" :aria-label="`Explorer ${universe.name} : ${universe.tag}`">
            <div class="card-visual">
              <video v-if="!failedPreviews.has(universe.id)" class="card-media" :src="`${universe.video}#t=1`" preload="metadata" muted playsinline aria-hidden="true" tabindex="-1" @loadedmetadata="preparePreview" @error="failedPreviews.add(universe.id)" />
              <div class="card-shade" />
              <div class="card-topline"><span class="card-number">0{{ index + 1 }}</span><span class="card-type">Film immersif</span></div>
              <div class="card-bottom"><span class="universe-tag">{{ universe.tag }}</span><div class="card-name-row"><h3>{{ universe.name }}</h3><span class="card-arrow" aria-hidden="true">↗</span></div></div>
            </div>
            <div class="card-caption"><span>{{ universe.caption }}</span><span aria-hidden="true">Explorer ↗</span></div>
          </button>
        </div>
      </div>
    </section>

    <section class="studio-note nexus-container" aria-labelledby="note-heading">
      <div class="note-mark" aria-hidden="true">✳</div>
      <div><span class="note-label">02 / UN AUTRE REGARD</span><h2 id="note-heading">La curiosité<br />emmène plus loin.</h2></div>
      <div class="note-copy"><p>Nexus est une parenthèse visuelle dans la vie du campus. Prenez le temps d’explorer ces ambiances, simplement pour le plaisir de découvrir.</p><NuxtLink to="/chat">Poursuivre la conversation <span aria-hidden="true">↗</span></NuxtLink></div>
    </section>

    <dialog ref="viewer" class="immersive-viewer" aria-labelledby="viewer-title" @cancel.prevent="closeViewer" @close="handleDialogClose">
      <template v-if="activeUniverse">
        <video :key="activeUniverse.id" ref="activeVideo" class="immersive-media" :src="activeUniverse.video" muted playsinline loop preload="auto" @play="updatePlayback" @pause="updatePlayback" @error="handleMediaError" />
        <div class="viewer-shade" />
        <div class="viewer-topbar"><button type="button" class="viewer-button back-button" autofocus @click="closeViewer"><span aria-hidden="true">←</span> La galerie</button><span class="viewer-brand">LYCÉE EUROPE <span>/ NEXUS</span></span></div>
        <div class="viewer-content">
          <div class="viewer-copy"><span class="universe-tag">0{{ activeIndex + 1 }} / {{ activeUniverse.tag }}</span><h2 id="viewer-title">{{ activeUniverse.name }}</h2><p>{{ activeUniverse.description }}</p></div>
          <div class="viewer-controls">
            <p v-if="mediaError" class="playback-message" role="status">La vidéo est indisponible. Vous pouvez explorer un autre univers ou revenir à la galerie.</p>
            <template v-else><button type="button" class="viewer-button playback-button" :aria-label="isPlaying ? 'Mettre la vidéo en pause' : 'Lancer la vidéo'" @click="togglePlayback"><span aria-hidden="true">{{ isPlaying ? 'Ⅱ' : '▷' }}</span> {{ isPlaying ? 'Mettre en pause' : 'Lancer la vidéo' }}</button><span class="playback-note">Lecture sans son<span v-if="(reducedMotion || !motionEnabled) && !isPlaying"> · Animation en pause</span></span><span v-if="playbackBlocked" class="playback-note" role="status">La lecture n’a pas démarré. Réessayez avec le bouton ci-dessus.</span></template>
          </div>
        </div>
        <div class="viewer-bottom"><div class="universe-switcher" aria-label="Choisir un univers"><button v-for="(universe, index) in universes" :key="universe.id" type="button" :class="{ 'is-current': activeIndex === index }" :aria-pressed="activeIndex === index" @click="openUniverse(index)"><span>0{{ index + 1 }}</span>{{ universe.name }}</button></div><span class="escape-hint">Échap pour revenir</span></div>
      </template>
    </dialog>
  </main>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

useHead({ title: 'Nexus, le studio créatif', meta: [{ name: 'description', content: 'Explorez Nexus, le studio créatif du Lycée Europe : trois ambiances visuelles entre ville nocturne, imaginaire et espace.' }] })

const runtimeConfig = useRuntimeConfig()
const base = (runtimeConfig.app.baseURL || '/').endsWith('/') ? (runtimeConfig.app.baseURL || '/') : (runtimeConfig.app.baseURL || '/') + '/'

const universes = [
  { id: 'submerge', name: 'Submerge', tag: 'Les nuits électriques', caption: 'La ville comme un rêve éveillé.', description: 'Au rythme des lumières, la ville devient un paysage à contempler. Laissez-vous emporter par cette échappée urbaine.', video: `${base}nexus-city.mp4` },
  { id: 'chivalry', name: 'Chivalry', tag: 'L’écho des légendes', caption: 'Une échappée hors du temps.', description: 'Une atmosphère de légende, entre ombre et lumière. Plongez dans une vision cinématographique de l’imaginaire médiéval.', video: `${base}nexus-fantasy.mp4` },
  { id: 'stardust', name: 'Stardust', tag: 'L’espace en mouvement', caption: 'Des étoiles, un autre horizon.', description: 'Un champ d’étoiles qui dérive dans le silence. Prenez le temps de regarder autrement.', video: `${base}hero-stars.mp4` }
]

const viewer = ref(null)
const activeVideo = ref(null)
const activeIndex = ref(-1)
const activeUniverse = computed(() => universes[activeIndex.value] ?? null)
const isPlaying = ref(false)
const reducedMotion = ref(false)
const motionEnabled = useState('motion-enabled', () => true)
const mediaError = ref(false)
const playbackBlocked = ref(false)
const failedPreviews = ref(new Set())
let motionPreference
let previousOverflow = ''
let openingElement = null
let selectionVersion = 0
let viewerSession = false

function preparePreview(event) {
  const video = event.target
  if (Number.isFinite(video.duration) && video.duration > 0) {
    try { video.currentTime = Math.min(1, video.duration / 2) } catch { /* The video’s first frame remains a valid preview. */ }
  }
}

async function playVideo(video) {
  if (!video) return
  playbackBlocked.value = false
  try {
    await video.play()
  } catch {
    if (video === activeVideo.value && viewer.value?.open) {
      isPlaying.value = false
      playbackBlocked.value = true
    }
  }
}

async function openUniverse(index) {
  if (!universes[index] || !viewer.value || (viewer.value.open && index === activeIndex.value)) return
  const version = ++selectionVersion
  if (!viewerSession) {
    openingElement = document.activeElement
    previousOverflow = document.body.style.overflow
    viewerSession = true
  }
  activeVideo.value?.pause()
  activeIndex.value = index
  isPlaying.value = false
  mediaError.value = false
  playbackBlocked.value = false
  await nextTick()
  if (version !== selectionVersion || !viewer.value) return
  if (!viewer.value.open) {
    viewer.value.showModal()
    document.body.style.overflow = 'hidden'
  }
  if (!reducedMotion.value && motionEnabled.value) await playVideo(activeVideo.value)
}

async function togglePlayback() {
  const video = activeVideo.value
  if (!video || mediaError.value) return
  if (video.paused) await playVideo(video)
  else video.pause()
}

function updatePlayback(event) {
  if (event.target === activeVideo.value) isPlaying.value = !event.target.paused
}

function handleMediaError(event) {
  if (event.target === activeVideo.value) {
    mediaError.value = true
    isPlaying.value = false
  }
}

function closeViewer() {
  selectionVersion++
  activeVideo.value?.pause()
  if (viewer.value?.open) viewer.value.close()
  else handleDialogClose()
}

function handleDialogClose() {
  // A queued close event must not clear a newly reopened viewer.
  if (viewer.value?.open) return
  selectionVersion++
  if (viewerSession) document.body.style.overflow = previousOverflow
  viewerSession = false
  activeIndex.value = -1
  isPlaying.value = false
  if (openingElement instanceof HTMLElement && openingElement.isConnected) openingElement.focus({ preventScroll: true })
  openingElement = null
}

function updateMotionPreference(event) {
  reducedMotion.value = event.matches
  if (event.matches) activeVideo.value?.pause()
}

function pauseWhenHidden() {
  if (document.hidden) activeVideo.value?.pause()
}

watch(motionEnabled, enabled => {
  if (!enabled) activeVideo.value?.pause()
})

onMounted(() => {
  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
  reducedMotion.value = motionPreference.matches
  motionPreference.addEventListener('change', updateMotionPreference)
  document.addEventListener('visibilitychange', pauseWhenHidden)
})

onBeforeUnmount(() => {
  selectionVersion++
  activeVideo.value?.pause()
  if (viewerSession) document.body.style.overflow = previousOverflow
  motionPreference?.removeEventListener('change', updateMotionPreference)
  document.removeEventListener('visibilitychange', pauseWhenHidden)
})
</script>

<style scoped>
.nexus-page { background:#0b071b; color:#f5f0ff; padding-bottom:0; }
.nexus-container { width:min(1280px,calc(100% - 112px)); margin-inline:auto; }
.studio-intro { padding-top:34px; }
.studio-eyebrow,.intro-baseline,.section-label,.note-label { font-size:10px; font-weight:650; letter-spacing:.12em; text-transform:uppercase; }
.studio-eyebrow { display:flex; align-items:center; gap:10px; color:#d5c5f5; }
.status-dot { width:7px; height:7px; background:var(--acid,#dfff78); }
.eyebrow-right { margin-left:auto; color:#a89bbd; }
.intro-grid { display:grid; grid-template-columns:1.1fr 1fr; align-items:center; gap:40px; min-height:550px; padding-block:56px; }
.intro-copy h1 { position:relative; width:fit-content; margin:0 0 26px; font:700 clamp(72px,8.8vw,128px)/.89 var(--font-display); letter-spacing:-.075em; text-transform:uppercase; }
.intro-copy h1>span:first-child { color:var(--accent-soft,#b995f5); }
.intro-copy h1 .title-star { display:inline-block; color:var(--acid,#dfff78); font-size:.49em; vertical-align:top; margin:5px 0 0 10px; }
.intro-copy>p { font-size:14px; line-height:1.8; margin:0 0 28px; color:#c4b8d7; }
.explore-link { display:inline-flex; align-items:center; justify-content:space-between; min-height:47px; gap:26px; padding-left:17px; color:#f5f0ff; border:1px solid #75668c; font-size:10px; letter-spacing:.04em; font-weight:700; text-transform:uppercase; text-decoration:none; }
.explore-link>span { display:grid; place-items:center; align-self:stretch; width:48px; background:var(--acid,#dfff78); color:#15101e; font-size:23px; transition:background .2s; }
.explore-link:hover>span { background:#fff; }
.studio-art { aspect-ratio:1.14; position:relative; display:grid; place-items:center; isolation:isolate; }
.studio-art::before { content:''; position:absolute; inset:10%; border-radius:50%; background:radial-gradient(circle,#9b5aff42,transparent 67%); filter:blur(15px); }
.art-monogram { position:relative; font:700 clamp(180px,24vw,335px)/1 var(--font-display); letter-spacing:-.1em; padding-right:.1em; color:#d8b9ff; background:linear-gradient(130deg,#fff 12%,#a983ff 21%,#48257e 31%,#f3dfff 45%,#9175d3 53%,#2c1558 72%,#cebbff 85%); background-clip:text; -webkit-text-fill-color:transparent; transform:rotate(-12deg); filter:drop-shadow(9px 12px 0 #4c2577) drop-shadow(0 24px 25px #020008); }
.art-monogram>span { position:absolute; right:-.14em; top:.2em; font-size:.27em; background:var(--acid,#dfff78); background-clip:text; }
.art-orbit { position:absolute; width:99%; height:49%; border:2px solid #d9b8ff; border-radius:50%; box-shadow:inset 0 2px 0 #fff8,0 4px 14px #b36bff60; }
.orbit-one { transform:rotate(-36deg); z-index:-1; }
.orbit-two { width:74%; height:90%; transform:rotate(39deg); border-width:9px; border-color:#a76feb #b697fb #301448 #e5d0ff; z-index:-1; }
.art-caption,.art-coordinate { position:absolute; font-size:9px; font-weight:600; letter-spacing:.14em; color:#ac99c8; }
.art-caption { bottom:0; left:0; }.art-coordinate { right:0; top:0; }
.intro-baseline { display:flex; justify-content:space-between; gap:24px; padding:22px 0; border-top:1px solid #ffffff26; color:#a89bbd; font-size:9px; letter-spacing:.07em; }
.intro-baseline>span:last-child { color:#e7def4; }.intro-baseline>span:last-child>span { margin-left:18px; }
.universe-section { background:linear-gradient(180deg,#0d0a1a,#110e1f); color:#f5f0ff; padding:54px 0 72px; scroll-margin-top:84px; }
.section-label { display:flex; justify-content:space-between; gap:20px; font-size:9px; color:#70677e; }.section-index { color:#5c318e; }
.collection-heading { display:flex; align-items:end; justify-content:space-between; gap:40px; margin:25px 0 35px; }
.collection-heading h2 { margin:0; font:700 clamp(34px,4.4vw,60px)/1.02 var(--font-display); letter-spacing:-.055em; text-transform:uppercase; }
.collection-heading>p { margin:0 0 3px; max-width:280px; font-size:12px; color:#665b73; line-height:1.8; }
.universe-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:19px; }
.universe-card { padding:0; margin:0; border:1px solid #c8c0d1; background:transparent; text-align:left; font:inherit; min-width:0; cursor:pointer; color:#191220; }
.card-visual { aspect-ratio:.85; position:relative; overflow:hidden; background:radial-gradient(ellipse at 30% 20%,#a18bbd,#171220); }
.card-submerge .card-visual { background:linear-gradient(145deg,#7459a3,#32213e 50%,#2c224b); }
.card-chivalry .card-visual { background:linear-gradient(145deg,#81948d,#343b38 50%,#1d2420); }
.card-stardust .card-visual { background:radial-gradient(ellipse at 60% 20%,#9370c6,#19152d 55%,#080c1d); }
.card-media { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; transition:transform .65s cubic-bezier(.2,.65,.2,1); }.card-submerge .card-media { object-position:60% center; }
.card-shade { position:absolute; inset:0; background:linear-gradient(180deg,#09061460,transparent 30%,#07041230 55%,#070412e6); }
.card-topline { position:absolute; top:20px; left:21px; right:21px; display:flex; align-items:center; justify-content:space-between; gap:10px; color:#fff; }
.card-number { font-size:11px; letter-spacing:.08em; }.card-type { padding:5px 9px; border:1px solid #ffffff60; background:#10091a59; font-size:8px; text-transform:uppercase; letter-spacing:.04em; }
.card-bottom { position:absolute; bottom:22px; left:21px; right:21px; }
.universe-tag { color:var(--acid,#dfff78); font-size:9px; letter-spacing:.1em; text-transform:uppercase; font-weight:650; }
.card-name-row { display:flex; align-items:center; justify-content:space-between; gap:10px; margin-top:9px; }
.card-name-row h3 { margin:0; font:600 clamp(25px,2.8vw,38px)/1.1 var(--font-display); text-transform:uppercase; letter-spacing:-.055em; color:#fff; }
.card-arrow { display:grid; place-items:center; width:35px; height:35px; flex-shrink:0; border:1px solid #ffffff88; color:#fff; font-size:23px; transition:background .2s,color .2s; }
.card-caption { display:flex; justify-content:space-between; gap:12px; padding:16px 17px; font-size:10px; line-height:1.6; color:#605569; }.card-caption>span:last-child { flex-shrink:0; color:#3e1c69; font-weight:650; }
.universe-card:hover .card-media { transform:scale(1.045); }.universe-card:hover .card-arrow { background:var(--acid,#dfff78); border-color:var(--acid,#dfff78); color:#17101f; }
.studio-note { display:grid; grid-template-columns:100px 1.1fr 1fr; gap:32px; align-items:center; padding-block:65px; }
.note-mark { color:var(--acid,#dfff78); font-size:104px; line-height:1; }.note-label { color:#ac98c5; font-size:9px; }
.studio-note h2 { margin:14px 0 0; font:600 clamp(25px,2.6vw,36px)/1.12 var(--font-display); letter-spacing:-.045em; text-transform:uppercase; }
.note-copy>p { margin:0; color:#c2b3d3; font-size:12px; line-height:1.85; }.note-copy a { display:inline-flex; align-items:center; justify-content:space-between; gap:26px; color:var(--acid,#dfff78); border-bottom:1px solid #82704c; padding:13px 0 8px; font-size:11px; font-weight:600; }.note-copy a span { font-size:20px; }
.nexus-page :is(a,button):focus-visible { outline:3px solid #a675e8; outline-offset:5px; }
.immersive-viewer { width:100vw; max-width:none; height:100vh; height:100dvh; max-height:none; margin:0; padding:0; border:0; inset:0; color:#fff; background:#0b071b; overflow:auto; font-family:inherit; }
.immersive-viewer[open] { display:flex; flex-direction:column; }.immersive-viewer::backdrop { background:#0b071b; }
.immersive-media { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }.viewer-shade { position:absolute; inset:0; background:linear-gradient(180deg,#080414b0,#08041422 30%,#08041480 55%,#080414f5); pointer-events:none; }
.viewer-topbar,.viewer-content,.viewer-bottom { position:relative; z-index:1; }.viewer-topbar { padding:28px 40px; display:flex; align-items:center; justify-content:space-between; gap:24px; }
.viewer-button { display:inline-flex; align-items:center; justify-content:center; gap:13px; min-height:46px; padding:10px 18px; background:#0b071bb3; border:1px solid #ffffff70; color:#fff; font:600 11px var(--font-sans); cursor:pointer; transition:background .2s,color .2s; }
.viewer-button:hover { background:var(--acid,#dfff78); color:#18111f; }.back-button>span { font-size:21px; }.viewer-brand { font:600 11px var(--font-display); letter-spacing:.05em; }.viewer-brand>span { color:#c9b6e4; margin-left:7px; }
.viewer-content { display:flex; align-items:flex-end; justify-content:space-between; gap:35px; padding:140px 60px 45px; margin-top:auto; }.viewer-copy { max-width:760px; }.viewer-copy .universe-tag { font-size:11px; }
.viewer-copy h2 { font:600 clamp(54px,9vw,135px)/1 var(--font-display); letter-spacing:-.07em; text-transform:uppercase; margin:16px 0 24px; }.viewer-copy p { font-size:13px; line-height:1.85; max-width:460px; color:#e5dbee; margin:0; }
.viewer-controls { display:flex; flex-direction:column; align-items:flex-end; gap:12px; flex:0 0 195px; padding-bottom:3px; }.playback-button { white-space:nowrap; }.playback-button>span { font-size:18px; }.playback-note { color:#d0c1e0; font-size:10px; text-align:right; line-height:1.6; }.playback-message { color:#eee1ff; font-size:12px; line-height:1.7; max-width:240px; background:#110a21bd; padding:16px; border:1px solid #c1a6df75; }
.viewer-bottom { display:flex; justify-content:space-between; align-items:center; gap:24px; padding:0 60px 28px; }.universe-switcher { display:flex; align-items:center; gap:26px; }.universe-switcher button { display:flex; align-items:center; gap:10px; color:#cec1dd; border:0; border-top:1px solid #8b779e; padding:15px 0; background:transparent; font:500 11px var(--font-sans); cursor:pointer; min-height:46px; }.universe-switcher button>span { font-size:9px; }.universe-switcher button.is-current { color:var(--acid,#dfff78); border-top-color:var(--acid,#dfff78); }.universe-switcher button:hover { color:#fff; }.escape-hint { color:#c2b0d4; font-size:10px; }
@supports (animation-timeline:view()) { @media (prefers-reduced-motion:no-preference) { .universe-card,.studio-note { animation:nexus-reveal both linear; animation-timeline:view(); animation-range:entry 0% entry 25%; }.studio-art { animation:nexus-drift both linear; animation-timeline:view(); animation-range:exit 0% exit 100%; } } }
@keyframes nexus-reveal { from { opacity:.4; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
@keyframes nexus-drift { to { transform:translateY(70px) rotate(9deg); } }
@media (max-width:1100px) { .nexus-container { width:calc(100% - 64px); }.intro-grid { min-height:480px; gap:20px; }.intro-copy h1 { font-size:9vw; }.card-topline,.card-bottom { left:15px; right:15px; }.card-caption { padding:13px; font-size:9px; }.card-caption>span:last-child { display:none; }.studio-note { grid-template-columns:80px 1fr 1fr; gap:24px; }.note-mark { font-size:85px; }.viewer-content,.viewer-bottom { padding-inline:35px; } }
@media (max-width:760px) { .nexus-container { width:calc(100% - 40px); }.studio-intro { padding-top:26px; }.studio-eyebrow { font-size:8px; letter-spacing:.08em; }.eyebrow-right { font-size:7px; }.intro-grid { grid-template-columns:1fr; gap:30px; min-height:0; padding:43px 0 28px; }.intro-copy h1 { font-size:clamp(68px,15vw,104px); margin-bottom:22px; }.intro-copy>p { font-size:13px; }.studio-art { width:min(400px,90%); margin:0 auto; }.art-monogram { font-size:clamp(185px,52vw,280px); }.art-caption,.art-coordinate { font-size:8px; }.intro-baseline { font-size:8px; line-height:1.6; padding-block:17px; }.intro-baseline>span { max-width:150px; }.intro-baseline>span:last-child { text-align:right; }.intro-baseline>span:last-child>span { margin-left:6px; }.universe-section { padding:36px 0 44px; }.section-label { font-size:8px; gap:20px; }.section-label>span:last-child { max-width:135px; text-align:right; }.collection-heading { align-items:start; flex-direction:column; gap:18px; margin:25px 0 26px; }.collection-heading h2 { font-size:clamp(34px,8.6vw,52px); }.collection-heading>p { max-width:360px; font-size:12px; }.universe-grid { grid-template-columns:1fr; gap:23px; }.card-visual { aspect-ratio:1.1; }.card-topline,.card-bottom { left:22px; right:22px; }.card-name-row h3 { font-size:38px; }.card-caption { padding:15px 18px; font-size:10px; }.card-caption>span:last-child { display:block; }.studio-note { grid-template-columns:64px 1fr; gap:20px; padding-block:40px; }.note-mark { font-size:72px; }.studio-note h2 { font-size:28px; }.note-copy { grid-column:1 / -1; }.viewer-topbar { padding:18px 20px; }.viewer-brand { font-size:9px; }.viewer-brand>span { display:none; }.viewer-content { padding:90px 24px 25px; flex-direction:column; align-items:stretch; gap:25px; }.viewer-copy h2 { font-size:clamp(44px,12.5vw,85px); }.viewer-copy p { max-width:400px; font-size:12px; }.viewer-controls { flex:none; flex-direction:row; flex-wrap:wrap; align-items:center; justify-content:space-between; }.playback-button { font-size:10px; padding:9px 13px; gap:9px; }.playback-note { font-size:9px; max-width:125px; }.viewer-bottom { padding:0 24px 20px; }.universe-switcher { width:100%; gap:16px; }.universe-switcher button { flex:1; font-size:10px; gap:6px; }.escape-hint { display:none; } }
@media (max-width:370px) { .eyebrow-right { display:none; }.intro-copy h1 { font-size:63px; }.card-caption { font-size:9px; }.viewer-brand { display:none; }.universe-switcher { gap:10px; }.universe-switcher button { font-size:9px; } }
@media (prefers-reduced-motion:reduce) { *,*::before,*::after { animation:none!important; transition:none!important; scroll-behavior:auto!important; }.universe-card:hover .card-media { transform:none; } }
</style>


