<script setup>
const route = useRoute()
const standalone = computed(() => ['/login', '/chat'].includes(route.path.replace(/\/$/, '')))
const miniChat = computed(() => route.path === '/chat' && route.query.mini === '1')
const visorPanel = computed(() => route.query.visor === '1')
const searchDialog = ref(null)
const searchInput = ref(null)
const menuDialog = ref(null)
const menuOpen = ref(false)
const shell = ref(null)
const suitWorldVideo = ref(null)
const hudVisible = useState('hud-visible', () => true)
const helmetHeading = useState('helmet-heading', () => 90)
const helmetPitch = useState('helmet-pitch', () => 0)
const helmetTarget = useState('helmet-target', () => false)
const appearanceOpen = ref(false)
const appearanceButton = ref(null)
const search = ref('')
const siteTheme = useState('site-theme', () => 'stardust')
const siteColor = useState('site-color', () => '#a980ff')
const motionEnabled = useState('motion-enabled', () => true)
const ready = ref(false)
const themes = [{ id: 'stardust', name: 'Cosmos' }, { id: 'submerge', name: 'Océan' }, { id: 'chivalry', name: 'Aurore' }]
const palettes = [{ name: 'Violet', color: '#a980ff' }, { name: 'Bleu', color: '#82d4e8' }, { name: 'Rose', color: '#ed9cce' }, { name: 'Vert', color: '#b9dd85' }]
const rgb = computed(() => /^#[\da-f]{6}$/i.test(siteColor.value) ? siteColor.value.slice(1).match(/.{2}/g).map(value => parseInt(value, 16)) : [169,128,255])
const accentStyle = computed(() => {
  const soft = rgb.value.map(c => Math.round(c + (255 - c) * .52))
  const brightness = rgb.value.reduce((sum,c,i) => sum + (c / 255 <= .04045 ? c / 255 / 12.92 : ((c / 255 + .055) / 1.055) ** 2.4) * [.2126,.7152,.0722][i],0)
  return { '--accent': siteColor.value, '--accent-rgb': rgb.value.join(','), '--accent-soft': 'rgb(' + soft.join(',') + ')', '--accent-glow': 'rgba(' + rgb.value.join(',') + ',.24)', '--accent-ink': brightness > .32 ? '#160b29' : '#ffffff', '--paper': { stardust: '#0c061d', submerge: '#06151e', chivalry: '#1b091b' }[siteTheme.value] }
})
const pages = [
  { name: 'Le lycée', description: 'Un lieu de vie, un monde à explorer', to: '/#lycee', tags: 'accueil campus présentation' },
  { name: 'Les formations', description: 'De la seconde à l’enseignement supérieur', to: '/filieres', tags: 'bts bac spécialités sti2d prépa orientation' },
  { name: 'La vie lycéenne', description: 'Clubs, sport, culture et engagement', to: '/clubs', tags: 'mdl cvl associations' },
  { name: 'Les actualités', description: 'Les projets qui font vivre Europe', to: '/#actualites', tags: 'news ateliers' },
  { name: 'Nexus', description: 'Le studio des univers créatifs', to: '/nexus', tags: 'galerie vidéos immersion' },
  { name: 'La communauté', description: 'Échanger, partager, s’entraider', to: '/chat', tags: 'salons messages discussion' },
  { name: 'L’espace élève', description: 'Rejoindre la communauté', to: '/login', tags: 'connexion compte inscription' },
  { name: 'Contact & accès', description: 'Les liens pour nous retrouver', to: '/#contact', tags: 'adresse téléphone mail dunkerque' },
  { name: 'Informations & confidentialité', description: 'Comprendre ce portail et ses données', to: '/informations', tags: 'mentions données cookies confidentialité' },
]
const normalize = value => value.toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
const results = computed(() => pages.filter(page => normalize(page.name + ' ' + page.description + ' ' + page.tags).includes(normalize(search.value.trim()))))
function closeMenu() { menuDialog.value?.close(); menuOpen.value = false }
async function openSearch() {
  closeMenu(); appearanceOpen.value = false; search.value = ''
  if (!searchDialog.value?.open) searchDialog.value?.showModal()
  await nextTick(); searchInput.value?.focus()
}
function openMenu() { appearanceOpen.value = false; menuDialog.value?.showModal(); menuOpen.value = true }
function closeSearch() { searchDialog.value?.close() }
function backdrop(event) { if (event.target === event.currentTarget) event.currentTarget.close() }
watch(() => route.fullPath, () => { closeMenu(); closeSearch(); appearanceOpen.value = false })
function outside(event) { if (!event.target.closest?.('.appearance-menu')) appearanceOpen.value = false }
function helmetPointer(event) {
  if (!shell.value || !motionEnabled.value) return
  const x = (event.clientX / innerWidth - .5), y = (event.clientY / innerHeight - .5)
  helmetHeading.value = Math.round((90 + x * 70 + 360) % 360)
  helmetPitch.value = Math.round(y * -22)
  shell.value.style.setProperty('--helmet-pan-x', `${-x * 24}px`)
  shell.value.style.setProperty('--helmet-pan-y', `${-y * 16}px`)
  shell.value.style.setProperty('--helmet-gaze-x', `${x * 14}px`)
  shell.value.style.setProperty('--helmet-gaze-y', `${y * 10}px`)
}
function helmetRecenter() {
  helmetHeading.value = 90; helmetPitch.value = 0; helmetTarget.value = false
  if (shell.value) shell.value.style.setProperty('--helmet-pan-x', '0px'), shell.value.style.setProperty('--helmet-pan-y', '0px'), shell.value.style.setProperty('--helmet-gaze-x', '0px'), shell.value.style.setProperty('--helmet-gaze-y', '0px')
}
function syncSuitWorld() {
  const video = suitWorldVideo.value
  if (!video) return
  if (motionEnabled.value && !document.hidden) video.play().catch(() => {})
  else video.pause()
}
function keyboard(event) {
  const target = event.target
  if (target?.matches?.('input,textarea,select,[contenteditable="true"]')) return
  const key = event.key.toLowerCase()
  if (route.path !== '/' && ['arrowleft','arrowright','arrowup','arrowdown','a','d','w','s'].includes(key)) {
    event.preventDefault()
    helmetHeading.value = (helmetHeading.value + (key === 'arrowleft' || key === 'a' ? -5 : key === 'arrowright' || key === 'd' ? 5 : 0) + 360) % 360
    helmetPitch.value = Math.max(-25, Math.min(25, helmetPitch.value + (key === 'arrowup' || key === 'w' ? -3 : key === 'arrowdown' || key === 's' ? 3 : 0)))
    if (shell.value) { shell.value.style.setProperty('--helmet-pan-x', `${Math.sin(helmetHeading.value * Math.PI / 180) * 36}px`); shell.value.style.setProperty('--helmet-pan-y', `${helmetPitch.value * -.8}px`) }
  }
  if (key === ' ' && !target?.closest?.('button,a')) { event.preventDefault(); helmetTarget.value = !helmetTarget.value }
  if (key === 'h') hudVisible.value = !hudVisible.value
  if (key === 'r') helmetRecenter()
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); openSearch() }
  if (event.key === 'Escape' && appearanceOpen.value) { appearanceOpen.value = false; appearanceButton.value?.focus() }
}
let reducedMotion
const syncMotion = event => { if (event.matches) motionEnabled.value = false }
onMounted(() => {
  document.addEventListener('click', outside); document.addEventListener('keydown', keyboard)
  window.addEventListener('pointermove', helmetPointer, { passive: true })
  document.addEventListener('visibilitychange', syncSuitWorld)
  reducedMotion = matchMedia('(prefers-reduced-motion: reduce)')
  try {
    const theme = localStorage.getItem('europe-site-theme')
    const color = localStorage.getItem('europe-site-color')
    if (themes.some(item => item.id === theme)) siteTheme.value = theme
    if (/^#[\da-f]{6}$/i.test(color || '')) siteColor.value = color
    motionEnabled.value = localStorage.getItem('europe-motion') !== 'false' && !reducedMotion.matches
  } catch { motionEnabled.value = !reducedMotion.matches }
  reducedMotion.addEventListener('change', syncMotion)
  ready.value = true
  syncSuitWorld()
})
onUnmounted(() => {
  document.removeEventListener('click', outside); document.removeEventListener('keydown', keyboard)
  window.removeEventListener('pointermove', helmetPointer)
  document.removeEventListener('visibilitychange', syncSuitWorld)
  reducedMotion?.removeEventListener('change', syncMotion)
})
watch([siteTheme, siteColor, motionEnabled], ([theme,color,motion]) => {
  if (!ready.value) return
  syncSuitWorld()
  try { localStorage.setItem('europe-site-theme',theme); localStorage.setItem('europe-site-color',color); localStorage.setItem('europe-motion',String(motion)) } catch {}
})
const runtimeConfig = useRuntimeConfig()
const base = computed(() => {
  const b = runtimeConfig.app.baseURL || '/'
  return b.endsWith('/') ? b : b + '/'
})
useHead({ titleTemplate: '%s — Lycée Europe', link: [{ rel: 'icon', type: 'image/svg+xml', href: `${runtimeConfig.app.baseURL || '/'}favicon.svg` }] })
</script>

<template>
  <div ref="shell" class="site-shell" :class="{ 'immersive-shell': route.path === '/', 'mini-chat-shell': miniChat, 'visor-page-shell': visorPanel }" :data-theme="siteTheme" :data-motion="motionEnabled" :data-hud="hudVisible" :data-target="helmetTarget" :style="accentStyle">
    <a class="skip-link" href="#contenu">Aller au contenu</a>
    <div class="suit-world" aria-hidden="true"><video ref="suitWorldVideo" class="suit-world-video" :src="`${base}hero-stars.mp4`" muted loop playsinline preload="metadata" /><div class="suit-world-grid"></div></div>
    <div v-if="hudVisible" class="suit-visor" aria-hidden="true">
      <div class="visor-corner visor-corner-tl"></div><div class="visor-corner visor-corner-tr"></div><div class="visor-corner visor-corner-bl"></div><div class="visor-corner visor-corner-br"></div>
      <div class="visor-cap"><span>EUROPE EXO-SUIT <i>MK · 01</i></span><span class="visor-crosshair">+</span><span><i class="visor-online"></i> INTERFACE {{ helmetTarget ? 'CIBLE VERROUILLÉE' : 'EN LIGNE' }}</span></div>
      <div class="visor-side visor-side-l"><span>CAP</span><b>{{ String(helmetHeading).padStart(3,'0') }}°</b><i></i><i></i><i></i><i></i><i></i></div>
      <div class="visor-side visor-side-r"><span>ASSIETTE</span><b>{{ helmetPitch > 0 ? '+' : '' }}{{ helmetPitch }}°</b><i></i><i></i><i></i><i></i><i></i></div>
      <div class="visor-foot"><span>◂ ▴ ▾ ▸ / WASD <i>ORIENTER</i></span><span>ESPACE <i>CIBLER</i> · H <i>HUD</i> · R <i>RECENTRER</i></span><span>DUNKERQUE · 51° N / 02° E</span></div>
      <div v-if="helmetTarget" class="visor-lock"><i></i><span>VERROUILLAGE CONFIRMÉ</span></div>
    </div>
    <header class="site-header">
      <div class="container nav-inner">
        <NuxtLink to="/" class="brand" aria-label="Lycée Europe — accueil"><img :src="`${base}europe-orbit.svg`" width="42" height="42" alt="" /><span>LYCÉE<strong>EUROPE<span>®</span></strong><small>EXO-SUIT / MK·01</small></span></NuxtLink>
        <nav class="desktop-nav" aria-label="Navigation principale">
          <NuxtLink to="/#lycee">Le lycée</NuxtLink><NuxtLink to="/filieres" active-class="active">Formations</NuxtLink><NuxtLink to="/clubs" active-class="active">Vie lycéenne</NuxtLink><NuxtLink to="/nexus" active-class="active">Nexus <span>✳</span></NuxtLink>
        </nav>
        <div class="nav-actions">
          <div class="appearance-menu">
            <button ref="appearanceButton" class="nav-icon appearance-toggle" aria-label="Personnaliser le site" :aria-expanded="appearanceOpen" aria-controls="appearance-panel" @click.stop="appearanceOpen = !appearanceOpen"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9c0-2-1-3-3-3h-2c-2 0-3-1-3-3 0-1 0-2-1-3Z"/><circle cx="7" cy="11" r="1"/><circle cx="9" cy="7" r="1"/><circle cx="8" cy="16" r="1"/></svg></button>
            <div v-if="appearanceOpen" id="appearance-panel" class="appearance-panel">
              <div class="panel-heading"><strong>À ton image.</strong><button aria-label="Fermer les préférences" class="icon-button" @click="appearanceOpen = false">×</button></div>
              <p class="panel-label">L’AMBIANCE</p><div class="theme-options"><button v-for="theme in themes" :key="theme.id" :aria-pressed="siteTheme === theme.id" @click="siteTheme = theme.id">{{ theme.name }}</button></div>
              <p class="panel-label">LA COULEUR</p><div class="color-options"><button v-for="palette in palettes" :key="palette.color" :style="{ '--swatch': palette.color }" :aria-label="palette.name" :aria-pressed="siteColor === palette.color" @click="siteColor = palette.color"><span v-if="siteColor === palette.color">✓</span></button><label class="custom-color">Sur mesure<input v-model="siteColor" type="color" aria-label="Couleur personnalisée" /></label></div>
              <label class="motion-option"><span>Animations</span><input v-model="motionEnabled" type="checkbox" role="switch" /></label>
              <p class="appearance-hint">Tes préférences restent sur cet appareil.</p>
            </div>
          </div>
          <button class="nav-icon" aria-label="Rechercher (Ctrl+K)" @click="openSearch"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg></button>
          <NuxtLink to="/login" class="nav-login">Espace élève <span aria-hidden="true">↗</span></NuxtLink>
          <button class="menu-toggle nav-icon" aria-label="Ouvrir le menu" aria-controls="mobile-menu" :aria-expanded="menuOpen" @click="openMenu"><span></span><span></span></button>
        </div>
      </div>
    </header>

    <div id="contenu" tabindex="-1"><NuxtPage /></div>

    <footer v-if="!standalone" class="site-footer">
      <div class="container">
        <div class="footer-top"><p>UN LYCÉE.<br>MILLE POSSIBLES.</p><a href="#contenu" class="footer-up" aria-label="Revenir en haut">↑</a></div>
        <NuxtLink to="/" class="footer-wordmark" aria-label="Lycée Europe — accueil">EUROPE<span aria-hidden="true">✳</span></NuxtLink>
        <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} · Lycée Europe · Dunkerque</span><nav aria-label="Liens de pied de page"><NuxtLink to="/chat">Communauté</NuxtLink><NuxtLink to="/informations">Informations & confidentialité</NuxtLink><a href="https://www.lycee-europe-dunkerque.fr/" target="_blank" rel="noopener noreferrer">Site officiel ↗</a></nav><span class="footer-signature">OUVERTS SUR LE MONDE ↗</span></div>
      </div>
    </footer>

    <dialog ref="menuDialog" id="mobile-menu" class="menu-dialog" aria-labelledby="menu-title" @click="backdrop" @close="menuOpen = false">
      <div class="menu-content"><div class="menu-heading"><strong id="menu-title">EXPLORER EUROPE.</strong><button class="icon-button" aria-label="Fermer le menu" @click="closeMenu">×</button></div><nav aria-label="Navigation mobile"><NuxtLink v-for="(page,index) in pages" :key="page.to" :to="page.to" @click="closeMenu"><small>{{ String(index + 1).padStart(2,'0') }}</small>{{ page.name }}<span aria-hidden="true">↗</span></NuxtLink></nav><p>DUNKERQUE, OUVERTS SUR LE MONDE.</p></div>
    </dialog>
    <dialog ref="searchDialog" class="search-dialog" aria-labelledby="search-title" @click="backdrop">
      <div class="search-panel"><div class="panel-heading"><h2 id="search-title">À la recherche<br>de ton prochain pas ?</h2><button class="icon-button" aria-label="Fermer la recherche" @click="closeSearch">×</button></div><label class="sr-only" for="global-search">Rechercher une page</label><input id="global-search" ref="searchInput" v-model="search" type="search" placeholder="Formation, club, contact…" class="input-field"><div class="search-results" aria-live="polite"><NuxtLink v-for="page in results" :key="page.to" :to="page.to" @click="closeSearch"><span><strong>{{ page.name }}</strong><small>{{ page.description }}</small></span><span aria-hidden="true">↗</span></NuxtLink><p v-if="!results.length">Aucun résultat. Essaie « formation », « club » ou « contact ».</p></div><p class="search-hint">ÉCHAP POUR FERMER · CTRL / ⌘ + K POUR RECHERCHER</p></div>
    </dialog>
  </div>
</template>

<style scoped>
.site-shell{background:var(--paper);min-height:100vh}.skip-link{position:fixed;top:-80px;left:20px;padding:14px 20px;z-index:100;background:var(--acid);color:#160b29}.skip-link:focus{top:15px}.site-header{position:sticky;top:0;z-index:50;background:color-mix(in srgb,var(--paper) 93%,transparent);backdrop-filter:blur(18px);border-bottom:1px solid #ffffff1d}.nav-inner{height:88px;display:flex;align-items:center;gap:35px}.brand{display:flex;align-items:center;gap:9px;flex-shrink:0}.brand>span{font:500 9px/1.25 var(--font-sans);letter-spacing:.12em}.brand strong{display:block;font:700 23px/1.1 var(--font-display);letter-spacing:-.06em}.brand strong>span{font-size:9px;vertical-align:top;margin-left:3px;line-height:1.8;color:var(--accent-soft)}.desktop-nav{display:flex;gap:28px;margin-left:auto;align-items:center}.desktop-nav a{font-size:11px;color:#c5bfce;transition:color .2s}.desktop-nav a:hover,.desktop-nav a.active{color:var(--acid)}.desktop-nav a>span{color:var(--acid);margin-left:4px}.nav-actions{display:flex;gap:6px;align-items:center}.nav-icon{width:40px;height:42px;display:flex;align-items:center;justify-content:center;background:none;border:0;color:#ece6f6}.nav-icon:hover{background:#ffffff0c}.nav-icon svg{width:19px;height:19px;stroke:currentColor;stroke-width:1.5;fill:none}.nav-login{display:flex;gap:22px;align-items:center;border:1px solid #ffffff42;font-size:10px;text-transform:uppercase;letter-spacing:.03em;padding:12px 14px;margin-left:9px}.nav-login>span{color:var(--acid);font-size:19px;line-height:1}.nav-login:hover{background:var(--acid);border-color:var(--acid);color:#160b29}.nav-login:hover>span{color:inherit}.menu-toggle{display:none;flex-direction:column;gap:6px}.menu-toggle span{width:23px;height:1px;background:currentColor}.appearance-menu{position:relative}.appearance-panel{position:absolute;right:0;top:57px;width:310px;padding:23px;background:#181027;border:1px solid #ffffff30;box-shadow:0 15px 60px #0008}.panel-heading{display:flex;align-items:flex-start;justify-content:space-between;gap:25px}.panel-heading>strong{font:600 23px var(--font-display)}.panel-heading .icon-button{width:30px;height:30px;flex-shrink:0}.panel-label{font-size:9px;letter-spacing:.14em;color:#b8abc9;margin:22px 0 10px}.theme-options{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}.theme-options button{font-size:11px;min-height:38px;border:1px solid #ffffff30;background:transparent}.theme-options button[aria-pressed=true]{background:var(--accent);border-color:var(--accent);color:var(--accent-ink)}.color-options{display:flex;align-items:center;gap:8px}.color-options>button{width:27px;height:27px;background:var(--swatch);border:0;color:#160b29}.color-options>button[aria-pressed=true]{outline:1px solid white;outline-offset:3px}.custom-color{display:flex;align-items:center;gap:8px;margin-left:auto;font-size:10px}.custom-color input{width:27px;height:29px;border:0;padding:0;background:none;cursor:pointer}.motion-option{display:flex;align-items:center;justify-content:space-between;font-size:12px;padding:19px 0 12px;margin-top:8px;border-bottom:1px solid #ffffff20}.motion-option input{width:18px;height:18px;accent-color:var(--accent)}.appearance-hint{font-size:10px;color:#aaa0bb;margin-top:12px}.site-footer{padding:48px 0 22px;background:#0c061d;border-top:1px solid #ffffff26;color:#f1ebf8}.footer-top{display:flex;align-items:center;justify-content:space-between}.footer-top>p{font-size:12px;line-height:1.4}.footer-up{height:46px;width:46px;border:1px solid #ffffff40;display:grid;place-items:center;font-size:24px}.footer-up:hover{background:var(--acid);color:#160b29}.footer-wordmark{font:600 clamp(90px,17.8vw,254px)/1.1 var(--font-display);letter-spacing:-.075em;display:flex;align-items:center;justify-content:space-between;padding-block:20px 34px}.footer-wordmark>span{font-size:.66em;color:var(--acid);font-weight:400}.footer-bottom{border-top:1px solid #ffffff29;padding-top:23px;display:flex;flex-wrap:wrap;gap:20px;justify-content:space-between;font-size:10px;color:#b9afc8}.footer-bottom nav{display:flex;gap:20px}.footer-bottom a:hover{color:var(--acid)}.footer-signature{font-size:9px;letter-spacing:.08em}.search-dialog{width:min(640px,calc(100% - 32px));max-height:90dvh;padding:0;border:1px solid #ffffff35;background:#181027;color:#f4f0fa}.search-dialog::backdrop,.menu-dialog::backdrop{background:#060310c9;backdrop-filter:blur(8px)}.search-panel{padding:30px}.search-panel h2{font-size:27px;letter-spacing:-.04em;line-height:1.08}.search-panel .input-field{margin-top:25px}.search-results{margin-top:14px;max-height:46dvh;overflow-y:auto}.search-results>a{display:flex;justify-content:space-between;align-items:center;padding:13px 4px;border-bottom:1px solid #ffffff20;gap:20px}.search-results>a:hover{color:var(--acid);background:#ffffff06}.search-results strong{font-size:13px;display:block}.search-results small{font-size:11px;color:#b6adc4;display:block;margin-top:3px}.search-results>a>span:last-child{font-size:22px}.search-results>p{font-size:13px;padding:20px 0}.search-hint{margin-top:22px;color:#aca1bb;font-size:8px;letter-spacing:.08em}.menu-dialog{margin:0 0 0 auto;max-height:100dvh;height:100dvh;width:min(520px,100%);max-width:100%;padding:0;border:0;background:#100922;color:#f4f0fa}.menu-content{padding:28px}.menu-heading{display:flex;justify-content:space-between;align-items:center;margin-bottom:25px}.menu-heading strong{font:600 17px var(--font-display)}.menu-content nav{display:grid}.menu-content nav a{display:flex;align-items:center;gap:16px;padding:18px 0;border-top:1px solid #ffffff26;font:500 20px var(--font-display);letter-spacing:-.03em}.menu-content nav a:hover{color:var(--acid)}.menu-content nav small{font:10px var(--font-sans);color:#a89cbc}.menu-content nav a>span{margin-left:auto;color:var(--acid)}.menu-content>p{margin-top:30px;font-size:9px;letter-spacing:.1em;color:#b2a5c5}
@media(max-width:1120px){.nav-inner{gap:20px}.desktop-nav{gap:18px}.nav-login{gap:14px}.footer-signature{display:none}}
@media(max-width:940px){.desktop-nav{display:none}.nav-actions{margin-left:auto}.menu-toggle{display:flex}}
@media(max-width:760px){.nav-inner{height:72px;gap:10px}.brand img{width:36px;height:36px}.brand strong{font-size:21px}.nav-login{padding:10px;gap:10px;font-size:9px}.nav-icon{width:34px}.nav-actions{gap:2px}.appearance-panel{position:fixed;right:20px;top:80px;width:min(310px,calc(100vw - 40px))}.footer-wordmark{padding-block:32px;font-size:18vw}.footer-bottom{flex-direction:column;gap:15px}.footer-bottom nav{flex-wrap:wrap;gap:13px}.footer-top>p{font-size:11px}.search-panel{padding:23px}}
@media(max-width:390px){.nav-login{font-size:0;gap:0;padding:9px}.nav-login>span{font-size:20px}.brand strong{font-size:19px}.brand>span{font-size:8px}.brand{gap:5px}}
</style>
