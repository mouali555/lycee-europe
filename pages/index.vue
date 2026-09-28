<script setup>
useHead({ title: 'Le lycée en immersion', meta: [{ name: 'description', content: 'Explore le Lycée Europe en vue subjective. Déplace-toi dans le campus et retrouve le collectif dans ta visière.' }] })
const activePanel = ref(null)
const nearby = ref(null)
const movement = ref({ x: 0, z: 7, yaw: 0, walking: false })
const hudOpen = ref(true)
const visited = ref([])
const runtimeConfig = useRuntimeConfig()
const base = computed(() => {
  const b = runtimeConfig.app.baseURL || '/'
  return b.endsWith('/') ? b : b + '/'
})
const panel = computed(() => {
  if (!activePanel.value) return null
  const b = base.value
  const panels = {
    chat: { title: 'LE COLLECTIF', src: `${b}chat?mini=1`, icon: '◉' },
    formations: { title: 'FORMATIONS', src: `${b}filieres?visor=1`, icon: '01' },
    clubs: { title: 'VIE LYCÉENNE', src: `${b}clubs?visor=1`, icon: '02' },
    nexus: { title: 'NEXUS STUDIO', src: `${b}nexus?visor=1`, icon: '03' },
    informations: { title: 'INFORMATIONS', src: `${b}informations?visor=1`, icon: '04' },
  }
  return panels[activePanel.value] || null
})
const position = computed(() => ({ x: Math.max(0, Math.min(100, 50 + movement.value.x * 5.5)), y: Math.max(7, Math.min(92, 10 + (7 - movement.value.z) * 1.42)) }))
function enterDoor(destination) {
  if (!destination?.id) return
  visited.value = [...new Set([...visited.value, destination.id])]
  activePanel.value = destination.id
}
function onNearby(destination) { nearby.value = destination }
function onGlobalKeys(event) {
  if (event.target?.matches?.('input,textarea,select,[contenteditable="true"]')) return
  if (event.key.toLowerCase() === 'c') { activePanel.value = activePanel.value === 'chat' ? null : 'chat'; event.preventDefault() }
  if (event.key.toLowerCase() === 'h') hudOpen.value = !hudOpen.value
}
onMounted(() => window.addEventListener('keydown', onGlobalKeys))
onUnmounted(() => window.removeEventListener('keydown', onGlobalKeys))
</script>
<template>
  <main class="helmet-home" :class="{ 'hud-hidden': !hudOpen }" aria-label="Lycée Europe en immersion">
    <ClientOnly><LyceeWorld @nearby="onNearby" @enter="enterDoor" @move="movement = $event" /></ClientOnly>
    <div class="helmet-film-grain" aria-hidden="true"></div>
    <a class="helmet-skip" href="#helmet-content">Passer à la navigation</a>
    <div class="helmet-ui" id="helmet-content">
      <header class="helmet-topline">
        <NuxtLink to="/" class="helmet-brand"><span class="brand-reactor">✳</span><span>LYCÉE EUROPE<small>DUNKERQUE · EXO-SUIT MK·01</small></span></NuxtLink>
        <nav class="helmet-nav" aria-label="Destination dans le lycée"><button :aria-pressed="activePanel === 'formations'" @click="activePanel = 'formations'"><b>01</b> FORMATIONS</button><button :aria-pressed="activePanel === 'clubs'" @click="activePanel = 'clubs'"><b>02</b> VIE LYCÉENNE</button><button :aria-pressed="activePanel === 'nexus'" @click="activePanel = 'nexus'"><b>03</b> NEXUS</button></nav>
        <button class="helmet-chat-toggle" :aria-expanded="activePanel === 'chat'" @click="activePanel = activePanel === 'chat' ? null : 'chat'"><span class="chat-pulse"></span>{{ activePanel === 'chat' ? 'CHAT CONNECTÉ' : 'OUVRIR LE CHAT' }} <kbd>C</kbd></button>
      </header>
      <div v-if="hudOpen" class="helmet-readouts" aria-hidden="true">
        <div class="readout readout-left"><span>COMBINAISON</span><strong><i></i> EN LIGNE</strong><small>POSITION {{ movement.x.toFixed(1) }} / {{ movement.z.toFixed(1) }}</small><div class="readout-meter"><i></i></div></div>
        <div class="readout readout-right"><span>SECTEUR ACTUEL</span><strong>{{ nearby?.title || 'HALL CENTRAL' }}</strong><small>LYCÉE EUROPE · DUNKERQUE</small></div>
      </div>
      <div v-if="hudOpen" class="helmet-reticle" :class="{ 'reticle-near': nearby }" aria-hidden="true"><i></i><b>+</b><small>{{ nearby ? 'ACCÈS DÉTECTÉ' : 'SCAN DU CAMPUS' }}</small></div>
      <div v-if="nearby && hudOpen" class="door-prompt"><span class="prompt-id">ACCÈS {{ nearby.key }} · {{ nearby.title }}</span><strong>{{ nearby.subtitle }}</strong><button @click="enterDoor(nearby)"><kbd>E</kbd> ENTRER DANS LA ZONE <b>↗</b></button></div>
      <aside v-if="panel" class="mini-chat" :class="{ 'panel-chat': activePanel === 'chat', 'panel-expanded': activePanel !== 'chat' }" :aria-label="panel.title">
        <div class="mini-chat-bar"><span class="mini-chat-signal"><i></i> VISIÈRE · {{ panel.title }}</span><div><a v-if="activePanel === 'chat'" href="/chat" target="_top" aria-label="Ouvrir le chat complet">↗</a><button aria-label="Fermer le panneau" @click="activePanel = null">×</button></div></div>
        <div class="mini-chat-content"><div class="mini-chat-title"><span>{{ panel.icon }} / {{ panel.title }} <small>{{ activePanel === 'chat' ? 'EN DIRECT' : 'HOLOGRAMME INTERACTIF' }}</small></span><a v-if="activePanel === 'chat'" href="/chat" target="_top">OUVRIR ↗</a></div><iframe :key="panel.src" :title="panel.title + ' — panneau de visière'" :src="panel.src" loading="eager" allow="clipboard-read; clipboard-write" referrerpolicy="same-origin"></iframe></div>
      </aside>
      <div v-if="hudOpen" class="helmet-map" aria-label="Plan simplifié du lycée"><span>PLAN DU CAMPUS</span><div class="map-hall"><i class="map-player" :style="{ left: position.x + '%', top: position.y + '%' }"></i><b v-for="door in [{id:'formations',x:16,y:30},{id:'clubs',x:84,y:47},{id:'nexus',x:16,y:67},{id:'chat',x:84,y:84}]" :key="door.id" class="map-door" :class="{ visited: visited?.includes(door.id) }" :style="{ left: door.x + '%', top: door.y + '%' }"></b></div><small>◉ {{ visited?.length || 0 }} / 4 ACCÈS DÉCOUVERTS</small></div>
      <footer class="helmet-controls"><span><kbd>Z</kbd><kbd>Q</kbd><kbd>S</kbd><kbd>D</kbd> <i>MARCHER</i></span><span><kbd>CLIC</kbd> <i>REGARD · ÉCHAP POUR LIBÉRER</i></span><span><kbd>SHIFT</kbd> <i>SPRINT</i></span><span><kbd>E</kbd> <i>INTERAGIR</i></span><span><kbd>C</kbd> <i>CHAT</i></span><span class="walk-state"><i :class="{ active: movement.walking }"></i>{{ movement.walking ? 'DÉPLACEMENT' : 'À L’ARRÊT' }}</span></footer>
    </div>
    <div v-if="!hudOpen" class="hud-restore"><button @click="hudOpen = true">RÉACTIVER LA VISIÈRE <kbd>H</kbd></button></div>
  </main>
</template>
