<script setup>
const route=useRoute()
const standalone=computed(()=>['/login','/chat'].includes(route.path.replace(/\/$/,'')))
const menuOpen=ref(false),searchDialog=ref(null),searchInput=ref(null),search=ref('')
const pages=[{name:'Le lycée',description:'Notre lieu de vie, notre ambition',to:'/#lycee',tags:'accueil campus présentation'},{name:'Les formations',description:'Construire son parcours, de la seconde au supérieur',to:'/filieres',tags:'bts bac spécialités sti2d prépa orientation'},{name:'La vie lycéenne',description:'Clubs, sport, culture et engagement',to:'/clubs',tags:'mdl cvl associations'},{name:'Les actualités',description:'Les projets qui font vivre le lycée',to:'/#actualites',tags:'news ateliers'},{name:'Nexus, le studio créatif',description:'Explorer nos univers visuels',to:'/nexus',tags:'galerie vidéos immersion'},{name:"L'espace élève",description:'Se connecter et rejoindre la communauté',to:'/login',tags:'connexion compte chat'},{name:'Contact & accès',description:'Trouver le lycée et les contacts utiles',to:'/#contact',tags:'adresse téléphone mail dunkerque'}]
const normalize=v=>v.toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g,'')
const results=computed(()=>pages.filter(p=>normalize(p.name+' '+p.description+' '+p.tags).includes(normalize(search.value))))
async function openSearch(){menuOpen.value=false;search.value='';searchDialog.value.showModal();await nextTick();searchInput.value?.focus()}
function closeSearch(){searchDialog.value?.close()}
watch(()=>route.fullPath,()=>{menuOpen.value=false;closeSearch()})
function keyboard(e){if((e.ctrlKey||e.metaKey)&&e.key==='k'){e.preventDefault();openSearch()}if(e.key==='Escape')menuOpen.value=false}
onMounted(()=>document.addEventListener('keydown',keyboard));onUnmounted(()=>document.removeEventListener('keydown',keyboard))
useHead({titleTemplate:'%s — Lycée Europe',link:[{rel:'icon',type:'image/svg+xml',href:'/favicon.svg'}]})
</script>
<template><div>
<div class="noise-overlay" aria-hidden="true"></div>
<a class="skip-link" href="#contenu">Aller au contenu</a>
<template v-if="!standalone">
<!-- Utility bar marquee -->
<div class="utility-marquee" aria-label="Informations rapides">
  <div class="marquee-track marquee-acid" role="marquee" aria-live="off">
    <div class="marquee-inner">
      <template v-for="i in 4" :key="i">
        <span class="marquee-item">DUNKERQUE · HAUTS-DE-FRANCE<span aria-hidden="true">✦</span></span>
        <span class="marquee-item">UN LYCÉE. MILLE POSSIBLES.<span aria-hidden="true">✦</span></span>
        <span class="marquee-item"><a href="https://0590072h.index-education.net/pronote/eleve.html?login=true" target="_blank" rel="noopener noreferrer" style="color:inherit">PRONOTE ↗</a><span aria-hidden="true">✦</span></span>
        <span class="marquee-item">LYCÉE EUROPE · DEPUIS 1985<span aria-hidden="true">✦</span></span>
      </template>
    </div>
  </div>
</div>

<header class="site-header">
  <div class="nav-inner container">
    <NuxtLink class="brand" to="/" aria-label="Lycée Europe — accueil">
      <span class="brand-glyph" aria-hidden="true">E</span>
      <span class="brand-text">lycée<strong>europe<span class="brand-dot">.</span></strong></span>
    </NuxtLink>
    <nav class="desktop-nav" aria-label="Navigation principale">
      <NuxtLink to="/#lycee">Le lycée</NuxtLink>
      <NuxtLink to="/filieres" active-class="active">Formations</NuxtLink>
      <NuxtLink to="/clubs" active-class="active">Vie lycéenne</NuxtLink>
      <NuxtLink to="/nexus" active-class="active">Nexus<span class="nav-badge" aria-label="section créative">✦</span></NuxtLink>
    </nav>
    <div class="nav-actions">
      <button class="search-btn" aria-label="Rechercher dans le site (Ctrl+K)" @click="openSearch">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg>
        <span class="search-hint-kbd" aria-hidden="true">⌘K</span>
      </button>
      <NuxtLink to="/login" class="nav-cta btn-acid btn-acid-sm">Espace élève <span aria-hidden="true">↗</span></NuxtLink>
      <button class="mobile-toggle" :aria-expanded="menuOpen" aria-controls="mobile-menu" :aria-label="menuOpen?'Fermer le menu':'Ouvrir le menu'" @click="menuOpen=!menuOpen">
        <span class="burger" :class="{open:menuOpen}"></span>
      </button>
    </div>
  </div>
  <nav v-if="menuOpen" id="mobile-menu" class="mobile-nav" aria-label="Navigation mobile">
    <div class="mobile-nav-inner container">
      <NuxtLink v-for="page in pages" :key="page.to" :to="page.to" class="mobile-link">
        <span>{{page.name}}</span>
        <small>{{page.description}}</small>
        <span aria-hidden="true" class="mobile-arrow">↗</span>
      </NuxtLink>
    </div>
  </nav>
</header>
</template>

<div id="contenu" tabindex="-1"><NuxtPage/></div>

<footer v-if="!standalone" class="site-footer">
  <div class="footer-marquee marquee-track marquee-void" aria-hidden="true">
    <div class="marquee-inner">
      <template v-for="i in 4" :key="i">
        <span class="marquee-item">APPRENDRE<span>✦</span></span>
        <span class="marquee-item">EXPLORER<span>✦</span></span>
        <span class="marquee-item">CRÉER<span>✦</span></span>
        <span class="marquee-item">DEVENIR<span>✦</span></span>
        <span class="marquee-item">EUROPE<span>✦</span></span>
      </template>
    </div>
  </div>
  <div class="container">
    <div class="footer-body">
      <div class="footer-brand">
        <NuxtLink class="footer-wordmark" to="/">europe<span class="footer-star" aria-hidden="true">✦</span></NuxtLink>
        <p class="footer-tagline">Apprendre.<br/><em>Devenir.</em></p>
      </div>
      <div class="footer-links">
        <div>
          <p class="footer-col-label">Parcours</p>
          <nav aria-label="Navigation formations">
            <NuxtLink to="/filieres">Formations</NuxtLink>
            <NuxtLink to="/clubs">Vie lycéenne</NuxtLink>
            <NuxtLink to="/nexus">Studio Nexus</NuxtLink>
          </nav>
        </div>
        <div>
          <p class="footer-col-label">Communauté</p>
          <nav aria-label="Navigation communauté">
            <NuxtLink to="/login">Espace élève</NuxtLink>
            <NuxtLink to="/chat">La communauté</NuxtLink>
            <a href="https://www.lycee-europe-dunkerque.fr/" target="_blank" rel="noopener noreferrer">Site officiel ↗</a>
          </nav>
        </div>
        <div>
          <p class="footer-col-label">Contact</p>
          <nav aria-label="Navigation contact">
            <NuxtLink to="/#contact">Nous trouver</NuxtLink>
            <a href="mailto:ce.0590072h@ac-lille.fr">Email ↗</a>
            <a href="https://0590072h.index-education.net/pronote/eleve.html?login=true" target="_blank" rel="noopener noreferrer">Pronote ↗</a>
          </nav>
        </div>
      </div>
      <div class="footer-cta">
        <NuxtLink to="/login" class="btn-acid">Rejoindre la communauté <span aria-hidden="true">↗</span></NuxtLink>
        <a href="#contenu" class="footer-up" aria-label="Revenir en haut">↑</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© {{new Date().getFullYear()}} · Lycée Europe · Dunkerque</span>
      <NuxtLink to="/informations">Confidentialité</NuxtLink>
      <span class="footer-made" aria-hidden="true">FAIT POUR ALLER PLUS LOIN ✦</span>
    </div>
  </div>
</footer>

<!-- Search Dialog -->
<dialog ref="searchDialog" class="search-dialog" aria-labelledby="search-title" @click="e=>{if(e.target===searchDialog)closeSearch()}">
  <div class="search-panel">
    <div class="search-heading">
      <h2 id="search-title">Où vas-tu ?</h2>
      <button class="search-close" aria-label="Fermer la recherche" @click="closeSearch">✕</button>
    </div>
    <label class="sr-only" for="global-search">Rechercher une page</label>
    <input id="global-search" ref="searchInput" v-model="search" type="search" placeholder="Formation, club, contact…" class="input-field search-input"/>
    <div class="search-results" aria-live="polite">
      <NuxtLink v-for="page in results" :key="page.to" :to="page.to" @click="closeSearch" class="search-result">
        <div>
          <strong>{{page.name}}</strong>
          <span>{{page.description}}</span>
        </div>
        <span aria-hidden="true" class="result-arrow">↗</span>
      </NuxtLink>
      <p v-if="!results.length" class="search-empty">Aucun résultat. Essaie « formation », « club » ou « contact ».</p>
    </div>
    <p class="search-footer">Échap pour fermer · <kbd>Ctrl</kbd>+<kbd>K</kbd> pour rechercher</p>
  </div>
</dialog>
</div></template>

<style scoped>
/* ── Utility marquee ─────────────────────────────────────────── */
.utility-marquee{overflow:hidden}

/* ── Header ──────────────────────────────────────────────────── */
.site-header{
  position:sticky;top:0;z-index:var(--z-nav);
  background:rgba(0,0,0,.88);
  backdrop-filter:blur(20px) saturate(1.2);
  -webkit-backdrop-filter:blur(20px) saturate(1.2);
  border-bottom:1px solid rgba(250,250,250,.07);
}
.nav-inner{display:flex;height:72px;align-items:center;justify-content:space-between;gap:24px}

/* Brand */
.brand{display:flex;align-items:center;gap:12px;flex-shrink:0}
.brand-glyph{
  width:38px;height:38px;border-radius:4px;
  background:var(--acid);color:var(--void);
  font-family:var(--font-display);font-size:22px;font-weight:800;
  display:grid;place-items:center;line-height:1;
  flex-shrink:0;
}
.brand-text{font-family:var(--font-display);font-size:15px;letter-spacing:-.04em;line-height:1.1}
.brand-text strong{display:block;font-size:20px;font-weight:800}
.brand-dot{color:var(--acid)}

/* Desktop nav */
.desktop-nav{display:flex;gap:4px;margin-left:auto;margin-right:16px;align-items:center}
.desktop-nav>a{
  position:relative;padding:8px 14px;
  font-family:var(--font-display);font-size:12px;font-weight:600;
  letter-spacing:.02em;text-transform:uppercase;
  color:var(--white-muted);
  border-radius:var(--r-sm);
  transition:color var(--t-fast),background var(--t-fast);
}
.desktop-nav>a:hover,.desktop-nav>a.active{color:var(--white);background:rgba(250,250,250,.06)}
.desktop-nav>a.active::after{
  content:'';position:absolute;bottom:-1px;left:14px;right:14px;
  height:2px;background:var(--acid);border-radius:1px;
}
.nav-badge{
  display:inline-flex;margin-left:5px;
  font-size:9px;color:var(--acid);
  vertical-align:middle;line-height:1;
}

/* Nav actions */
.nav-actions{display:flex;align-items:center;gap:12px}
.search-btn{
  display:flex;align-items:center;gap:8px;
  padding:7px 12px;
  border:1px solid rgba(250,250,250,.1);border-radius:var(--r-sm);
  color:var(--white-muted);
  transition:all var(--t-fast);
}
.search-btn:hover{border-color:rgba(250,250,250,.25);color:var(--white)}
.search-hint-kbd{font-family:var(--font-mono);font-size:9px;letter-spacing:.05em}
.nav-cta{font-size:11px;padding:9px 16px}

/* Burger */
.mobile-toggle{display:none;width:40px;height:40px;place-items:center;border-radius:var(--r-sm)}
.burger,.burger::before,.burger::after{
  display:block;width:20px;height:1.5px;background:var(--white);
  transition:transform .3s,opacity .3s;position:relative;
}
.burger::before,.burger::after{content:'';position:absolute;left:0}
.burger::before{top:-6px}
.burger::after{top:6px}
.burger.open{background:transparent}
.burger.open::before{transform:rotate(45deg);top:0}
.burger.open::after{transform:rotate(-45deg);top:0}

/* Mobile nav */
.mobile-nav{background:var(--void);border-bottom:1px solid rgba(250,250,250,.07)}
.mobile-nav-inner{padding-block:16px 24px}
.mobile-link{
  display:grid;grid-template-columns:1fr auto;grid-template-rows:auto auto;
  gap:3px 12px;align-items:center;
  padding:14px 0;border-bottom:1px solid rgba(250,250,250,.06);
  transition:opacity var(--t-fast);
}
.mobile-link:hover{opacity:.7}
.mobile-link>span:first-child{font-family:var(--font-display);font-size:16px;font-weight:700}
.mobile-link>small{font-size:11px;color:var(--white-muted);grid-column:1}
.mobile-arrow{font-size:18px;grid-row:1/3;align-self:center;color:var(--white-muted)}

/* ── Footer ──────────────────────────────────────────────────── */
.site-footer{background:var(--onyx);border-top:1px solid rgba(250,250,250,.07);padding-bottom:32px}
.footer-marquee{border-bottom:1px solid rgba(250,250,250,.06)}
.footer-body{display:grid;grid-template-columns:auto 1fr auto;gap:64px;padding:56px 0 48px;align-items:start}
.footer-wordmark{
  font-family:var(--font-display);font-size:clamp(56px,7vw,96px);
  font-weight:800;letter-spacing:-.07em;line-height:1;
  color:var(--white);display:flex;align-items:flex-end;gap:6px;
}
.footer-star{color:var(--acid);font-size:.5em;line-height:1;margin-bottom:.1em}
.footer-tagline{font-size:22px;line-height:1.3;margin-top:16px;letter-spacing:-.03em;font-family:var(--font-display)}
.footer-tagline em{color:var(--acid);font-style:normal}
.footer-links{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
.footer-col-label{font-family:var(--font-mono);font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--white-muted);margin-bottom:16px}
.footer-links nav{display:flex;flex-direction:column;gap:10px}
.footer-links a{font-size:13px;color:var(--white-dim);transition:color var(--t-fast)}
.footer-links a:hover{color:var(--acid)}
.footer-cta{display:flex;flex-direction:column;align-items:flex-end;gap:16px;justify-content:space-between}
.footer-up{
  width:44px;height:44px;border:1px solid rgba(250,250,250,.15);
  border-radius:50%;display:grid;place-items:center;font-size:20px;
  transition:all var(--t-base);color:var(--white-muted);
}
.footer-up:hover{border-color:var(--acid);color:var(--acid)}
.footer-bottom{
  display:flex;align-items:center;gap:24px;
  padding-top:24px;border-top:1px solid rgba(250,250,250,.06);
  font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;
  text-transform:uppercase;color:var(--white-muted);
}
.footer-bottom a{transition:color var(--t-fast)}
.footer-bottom a:hover{color:var(--acid)}
.footer-made{margin-left:auto}

/* ── Search Dialog ───────────────────────────────────────────── */
.search-dialog{
  border:0;background:transparent;
  padding:20px;max-width:680px;width:100%;
  color:var(--white);
}
.search-dialog::backdrop{background:rgba(0,0,0,.75);backdrop-filter:blur(8px)}
.search-panel{
  background:var(--onyx-2);
  border:1px solid rgba(250,250,250,.1);
  border-radius:var(--r-lg);
  padding:28px;
  box-shadow:0 32px 80px rgba(0,0,0,.6);
}
.search-heading{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}
.search-heading h2{font-family:var(--font-display);font-size:24px;font-weight:800}
.search-close{
  width:32px;height:32px;border-radius:50%;
  border:1px solid rgba(250,250,250,.15);
  color:var(--white-muted);font-size:14px;
  display:grid;place-items:center;
  transition:all var(--t-fast);
}
.search-close:hover{border-color:var(--acid);color:var(--acid)}
.search-input{
  background:var(--onyx-3);
  border-color:rgba(250,250,250,.15);
  font-family:var(--font-display);font-size:16px;
  margin-bottom:8px;
}
.search-results{margin-top:12px;max-height:50vh;overflow:auto}
.search-result{
  display:flex;align-items:center;justify-content:space-between;gap:20px;
  padding:14px 8px;border-bottom:1px solid rgba(250,250,250,.06);
  transition:background var(--t-fast);border-radius:var(--r-sm);
}
.search-result:hover{background:rgba(250,250,250,.04)}
.search-result strong{font-family:var(--font-display);font-size:14px;display:block}
.search-result span{font-size:11px;color:var(--white-muted);display:block;margin-top:3px}
.result-arrow{font-size:20px;color:var(--white-muted);flex-shrink:0}
.search-result:hover .result-arrow{color:var(--acid)}
.search-empty{font-size:13px;color:var(--white-muted);padding:16px 8px}
.search-footer{font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;color:var(--white-muted);margin-top:16px;text-align:center}
.search-footer kbd{border:1px solid rgba(250,250,250,.15);padding:2px 5px;border-radius:3px;font-size:8px}

/* ── Responsive ──────────────────────────────────────────────── */
@media(max-width:1100px){
  .footer-body{grid-template-columns:1fr 1fr;gap:40px}
  .footer-cta{grid-column:1/-1;flex-direction:row;align-items:center}
}
@media(max-width:860px){
  .desktop-nav{display:none}
  .mobile-toggle{display:grid}
  .nav-cta{display:none}
  .search-hint-kbd{display:none}
  .footer-body{grid-template-columns:1fr;gap:32px}
  .footer-links{grid-template-columns:repeat(2,1fr)}
  .footer-cta{flex-direction:row}
}
@media(max-width:520px){
  .nav-inner{height:60px;gap:12px}
  .brand-text{font-size:13px}
  .brand-text strong{font-size:17px}
  .brand-glyph{width:32px;height:32px;font-size:18px}
  .footer-links{grid-template-columns:1fr}
  .search-btn{padding:7px 8px}
  .search-dialog{padding:12px}
  .search-panel{padding:20px}
}
</style>
