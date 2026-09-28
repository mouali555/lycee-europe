<script setup>
import { computed, ref } from 'vue'
useHead({ title: 'Nos formations', meta: [{ name: 'description', content: 'Explorez la voie générale, le bac STI2D, les BTS et les classes préparatoires du Lycée de l’Europe à Dunkerque.' }] })
const activeFilter = ref('Tous les parcours')
const search = ref('')
const filters = ['Tous les parcours', 'Générale', 'STI2D', 'BTS', 'Prépas']
const pathways = [
  {
    "id": "generale",
    "category": "Générale",
    "number": "01",
    "title": "Cultiver la curiosité.",
    "name": "La voie générale",
    "description": "Approfondir ses connaissances, développer son esprit critique et construire son projet d’études supérieures.",
    "tags": [
      "Sciences",
      "Langues",
      "Humanités"
    ],
    "theme": "sage",
    "items": [
      "Mathématiques",
      "Physique-chimie",
      "Sciences de la vie et de la Terre (SVT)",
      "Sciences de l’ingénieur (SI)",
      "Numérique et sciences informatiques (NSI)",
      "Sciences économiques et sociales (SES)",
      "Histoire-géographie, géopolitique et sciences politiques (HGGSP)",
      "Humanités, littérature et philosophie (HLP)",
      "Langues, littératures et cultures étrangères : anglais, espagnol, anglais monde contemporain"
    ],
    "detail": "Des spécialités scientifiques, littéraires et linguistiques pour construire un parcours en accord avec vos centres d’intérêt. Les combinaisons possibles sont à préciser avec l’établissement.",
    "prompt": "Les spécialités à découvrir",
    "source": "https://www.onisep.fr/ressources/structures-enseignement/hauts-de-france/nord/lycee-de-l-europe/classe-de-1re-generale"
  },
  {
    "id": "technologique",
    "category": "STI2D",
    "number": "02",
    "title": "Comprendre en faisant.",
    "name": "Le bac technologique STI2D",
    "description": "Relier les connaissances aux applications concrètes, expérimenter et apprendre par le projet.",
    "tags": [
      "Innovation",
      "Industrie",
      "Développement durable"
    ],
    "theme": "blue",
    "items": [
      "Architecture et construction (AC)",
      "Énergies et environnement (EE)",
      "Innovation technologique et éco-conception (ITEC)",
      "Systèmes d’information et numérique (SIN)"
    ],
    "detail": "Le bac STI2D associe sciences, technologies de l’industrie et développement durable. Ces quatre enseignements spécifiques sont répertoriés pour le lycée dans la fiche Onisep.",
    "prompt": "Les enseignements spécifiques",
    "source": "https://www.onisep.fr/ressources/structures-enseignement/hauts-de-france/nord/lycee-de-l-europe"
  },
  {
    "id": "bts",
    "category": "BTS",
    "number": "03",
    "title": "Donner vie au savoir-faire.",
    "name": "Les BTS industriels",
    "description": "Après le bac, acquérir une expertise concrète dans le numérique, l’énergie, les procédés et les systèmes industriels.",
    "tags": [
      "Bac + 2",
      "Industrie",
      "Apprentissage"
    ],
    "theme": "peach",
    "items": [
      "BTS Électrotechnique",
      "BTS CIEL — Cybersécurité, informatique et réseaux, électronique · option A informatique et réseaux",
      "BTS CRSA — Conception et réalisation de systèmes automatiques",
      "BTS CRCI — Conception et réalisation en chaudronnerie industrielle",
      "BTS CPRP — Conception des processus de réalisation de produits · option B production sérielle",
      "BTS Pilotage de procédés"
    ],
    "detail": "Six BTS sont répertoriés par l’Onisep. Les modalités de formation, notamment l’apprentissage, et les conditions d’accès sont à consulter pour chaque diplôme.",
    "prompt": "Les diplômes à découvrir",
    "source": "https://www.onisep.fr/ressources/structures-enseignement/hauts-de-france/nord/lycee-de-l-europe"
  },
  {
    "id": "prepas",
    "category": "Prépas",
    "number": "04",
    "title": "Voir encore plus loin.",
    "name": "Les classes préparatoires",
    "description": "Approfondir les sciences et les méthodes de travail pour préparer la poursuite d’études en école d’ingénieurs.",
    "tags": [
      "PTSI",
      "PT",
      "ATS"
    ],
    "theme": "lilac",
    "items": [
      "PTSI — Physique, technologie et sciences de l’ingénieur · première année",
      "PT — Physique et technologie · deuxième année",
      "ATS — Ingénierie industrielle"
    ],
    "detail": "La filière PTSI–PT et la classe ATS correspondent à des points d’entrée différents. Consultez la fiche de chaque formation pour identifier les conditions d’admission adaptées à votre parcours.",
    "prompt": "Les classes proposées",
    "source": "https://www.onisep.fr/ressources/structures-enseignement/hauts-de-france/nord/lycee-de-l-europe"
  }
]
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
const filteredPathways = computed(() => pathways.filter(pathway => {
  const matchesCategory = activeFilter.value === 'Tous les parcours' || activeFilter.value === pathway.category
  const haystack = normalize([pathway.category, pathway.name, pathway.title, pathway.description, ...pathway.tags, ...pathway.items].join(' '))
  return matchesCategory && normalize(search.value).split(' ').every(term => haystack.includes(term))
}))
function resetFilters() { activeFilter.value = 'Tous les parcours'; search.value = '' }
</script>

<template>
  <div class="formations-page">
    <section class="formation-hero">
      <div class="container hero-grid">
        <div class="formation-hero-copy">
          <p class="eyebrow"><span class="hero-spark" aria-hidden="true">✦</span> LES FORMATIONS / LYCÉE EUROPE</p>
          <h1>À CHACUN<br>SON <em>HORIZON.</em></h1>
          <p class="hero-intro">Des premières découvertes aux grandes ambitions. Trouvez le parcours qui fait écho à votre curiosité.</p>
          <a class="page-button" href="#parcours"><span>EXPLORER LES FORMATIONS</span><b aria-hidden="true">↘</b></a>
          <div class="hero-index"><span>01 — 04</span><span>QUATRE FAÇONS<br>D’ALLER PLUS LOIN.</span></div>
        </div>
        <div class="path-art" aria-hidden="true">
          <span class="art-kicker">LE FUTUR A PLUSIEURS DIRECTIONS.</span>
          <svg viewBox="0 0 560 460" fill="none">
            <defs>
              <linearGradient id="formation-ribbon" x1="110" y1="340" x2="480" y2="80" gradientUnits="userSpaceOnUse"><stop stop-color="#7134e0"/><stop offset=".27" stop-color="#a980ff"/><stop offset=".5" stop-color="#f5ddff"/><stop offset=".7" stop-color="#a980ff"/><stop offset="1" stop-color="#6933db"/></linearGradient>
              <linearGradient id="formation-edge" x1="100" y1="80" x2="410" y2="365" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset=".35" stop-color="#fff" stop-opacity=".2"/><stop offset="1" stop-color="#d3bcff"/></linearGradient>
            </defs>
            <g class="ribbon-lines" stroke="url(#formation-ribbon)" stroke-width="36" stroke-linecap="square">
              <path d="M-10 350H133C215 350 202 83 311 83H465"/>
              <path d="M-10 350H137C222 350 241 164 337 164H492"/>
              <path d="M-10 350H146C239 350 269 246 364 246H465"/>
              <path d="M-10 350H151C249 350 293 329 388 329H492"/>
            </g>
            <g stroke="url(#formation-edge)" stroke-width="1.5" opacity=".8"><path d="M-10 332H131C192 332 189 65 311 65H465"/><path d="M-10 332H137C207 332 228 146 337 146H492"/><path d="M-10 332H146C227 332 257 228 364 228H465"/><path d="M-10 332H151C237 332 280 311 388 311H492"/></g>
            <g fill="#0c061d" font-size="11" font-family="monospace" font-weight="700"><text x="341" y="87">GÉNÉRALE</text><text x="390" y="168">STI2D</text><text x="386" y="250">BTS</text><text x="385" y="333">PRÉPAS</text></g>
            <g stroke="#0c061d" stroke-width="2"><path d="m441 77 6 6-6 6M469 158l6 6-6 6m-28 76 6 6-6 6m28 71 6 6-6 6"/></g>
            <circle cx="95" cy="350" r="7" fill="#dfff78"/><path d="M467 36v22m-11-11h22" stroke="#dfff78" stroke-width="2"/>
          </svg>
          <div class="art-bottom"><span>VOTRE POINT DE DÉPART.</span><span>VOTRE AVENIR ↗</span></div>
        </div>
      </div>
      <div class="hero-foot container"><span>LA CURIOSITÉ COMME POINT COMMUN.</span><span>DÉFILER POUR EXPLORER ↓</span></div>
    </section>

    <section class="catalog-section" id="parcours">
      <div class="container">
        <div class="catalog-heading">
          <div><p class="eyebrow">01 / TROUVER SA DIRECTION</p><h2>DES PARCOURS.<br><em>AUTANT DE POSSIBLES.</em></h2></div>
          <p>Sciences, innovation, savoir-faire : chaque parcours est une façon de construire la suite.</p>
        </div>
        <div class="catalog-tools">
          <div class="search-box">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg>
            <label for="formation-search" class="visually-hidden">Rechercher une formation ou une spécialité</label>
            <input id="formation-search" v-model="search" type="search" placeholder="Une matière, une envie, une formation…" autocomplete="off">
            <button v-if="search" class="clear-search" type="button" aria-label="Effacer la recherche" @click="search = ''">×</button>
            <span v-else class="search-hint">EX. NUMÉRIQUE, BTS, SCIENCES</span>
          </div>
          <div class="filters-and-count">
            <div class="filter-list" role="group" aria-label="Filtrer les formations par parcours"><button v-for="filter in filters" :key="filter" type="button" class="filter-button" :class="{ active: activeFilter === filter }" :aria-pressed="activeFilter === filter" @click="activeFilter = filter">{{ filter }}</button></div>
            <span class="result-count" role="status">{{ filteredPathways.length }} parcours {{ filteredPathways.length > 1 ? 'disponibles' : 'disponible' }}</span>
          </div>
        </div>
        <div v-if="filteredPathways.length" class="pathway-grid">
          <article v-for="pathway in filteredPathways" :id="pathway.id" :key="pathway.id" class="pathway-card" :class="pathway.theme">
            <div class="card-top"><span class="pathway-number">{{ pathway.number }}</span><span class="pathway-label">{{ pathway.name }}</span><span class="card-arrow" aria-hidden="true">↗</span></div>
            <div class="pathway-symbol" aria-hidden="true">
              <svg v-if="pathway.id === 'generale'" viewBox="0 0 72 72"><circle cx="36" cy="36" r="25"/><path d="M11 36h50M36 11v50"/><ellipse cx="36" cy="36" rx="11" ry="25"/></svg>
              <svg v-else-if="pathway.id === 'technologique'" viewBox="0 0 72 72"><path d="M24 11h24M29 11v22L15 55a5 5 0 0 0 4 7h34a5 5 0 0 0 4-7L43 33V11M23 43h27"/><circle cx="36" cy="52" r="2"/></svg>
              <svg v-else-if="pathway.id === 'bts'" viewBox="0 0 72 72"><path d="m36 8 25 14v28L36 64 11 50V22L36 8Zm0 28L11 22m25 14 25-14M36 36v28M24 15l25 14v14"/></svg>
              <svg v-else viewBox="0 0 72 72"><path d="M12 59h48M19 58V40h11v18M30 58V28h12v30M42 58V16h12v42M13 29 42 9m-11 0h11v11"/></svg>
            </div>
            <h3>{{ pathway.title }}</h3>
            <p class="pathway-description">{{ pathway.description }}</p>
            <div class="tag-list"><span v-for="tag in pathway.tags" :key="tag">{{ tag }}</span></div>
            <details class="pathway-details">
              <summary><span>Découvrir ce parcours</span><span class="detail-plus" aria-hidden="true">+</span></summary>
              <div class="detail-content"><h4>{{ pathway.prompt }}</h4><ul><li v-for="item in pathway.items" :key="item">{{ item }}</li></ul><p>{{ pathway.detail }}</p><a class="source-link" :href="pathway.source" target="_blank" rel="noopener noreferrer">Consulter la fiche Onisep <span aria-hidden="true">↗</span><span class="visually-hidden"> (nouvel onglet)</span></a></div>
            </details>
          </article>
        </div>
        <div v-else class="empty-state"><span aria-hidden="true">↗</span><h3>UNE AUTRE PISTE ?</h3><p>Aucun parcours ne correspond à votre recherche et au filtre choisi. Essayez « sciences », « numérique » ou « BTS ».</p><button class="page-button" type="button" @click="resetFilters"><span>AFFICHER TOUS LES PARCOURS</span><b aria-hidden="true">↗</b></button></div>
        <p class="formation-reference">Formations, admissions et modalités actualisées : <a href="https://www.onisep.fr/ressources/structures-enseignement/hauts-de-france/nord/lycee-de-l-europe" target="_blank" rel="noopener noreferrer">consulter la fiche du lycée sur l’Onisep ↗<span class="visually-hidden"> (nouvel onglet)</span></a></p>
      </div>
    </section>

    <section class="orientation-section">
      <div class="container orientation-grid">
        <div class="orientation-intro"><p class="eyebrow">02 / CONSTRUIRE LA SUITE</p><h2>UN PROJET.<br><em>UN PAS APRÈS<br>L’AUTRE.</em></h2><p>Vous n’avez pas besoin d’avoir toutes les réponses pour commencer à vous orienter.</p><span class="orientation-star" aria-hidden="true">✳</span></div>
        <ol class="orientation-steps">
          <li><span>01</span><div><h3>Partez de ce qui vous anime.</h3><p>Les matières que vous aimez, vos projets, les sujets qui éveillent votre curiosité.</p></div><b aria-hidden="true">↗</b></li>
          <li><span>02</span><div><h3>Comparez les approches.</h3><p>Théorie, expérimentation, pratique : explorez les différentes façons d’apprendre.</p></div><b aria-hidden="true">↗</b></li>
          <li><span>03</span><div><h3>Parlez-en avec l’équipe.</h3><p>Votre professeur principal et les personnes chargées de l’orientation peuvent vous accompagner dans vos choix.</p></div><b aria-hidden="true">↗</b></li>
        </ol>
      </div>
    </section>
    <section class="bottom-callout"><div class="container bottom-callout-inner"><div><p class="eyebrow">ET AU-DELÀ DES COURS ?</p><h2>UN LYCÉE À VIVRE.<br><em>VRAIMENT.</em></h2></div><NuxtLink to="/clubs" class="page-button"><span>DÉCOUVRIR LA VIE LYCÉENNE</span><b aria-hidden="true">↗</b></NuxtLink></div></section>
  </div>
</template>

<style scoped>
.formations-page{--page-dark:#0c061d;--page-light:#f0edf7;--page-text:#1b102d;--page-muted:#655b73;--page-line:#24133730;background:var(--page-dark);color:#fff}
h1,h2,h3,h4,p{margin:0}h1,h2,h3{font-family:var(--font-display,'Space Grotesk',sans-serif)}em{font:inherit;color:var(--accent,#a980ff)}.eyebrow{font-size:10px;line-height:1.5;font-weight:700;letter-spacing:.13em;color:inherit}.formation-hero{overflow:hidden;background:radial-gradient(ellipse at 82% 49%,#7134dd22,transparent 48%),var(--page-dark)}.hero-grid{display:grid;grid-template-columns:1.08fr 1fr;align-items:center;gap:34px;padding-top:90px;padding-bottom:70px}.formation-hero-copy{position:relative;z-index:1}.formation-hero-copy .eyebrow{display:flex;align-items:center;gap:12px;color:#e4dcf3}.hero-spark{color:var(--acid,#dfff78);font-size:24px}h1{font-weight:700;font-size:clamp(52px,6.7vw,100px);line-height:.97;letter-spacing:-.065em;margin:26px 0}.hero-intro{max-width:410px;font-size:15px;line-height:1.85;color:#c4b9d4;margin-bottom:30px}.page-button{display:inline-flex;align-items:stretch;max-width:100%;border:1px solid #a980ff80;background:transparent;color:#fff;font:700 10px/1.5 var(--font-sans,Inter,sans-serif);letter-spacing:.05em;cursor:pointer;text-decoration:none;transition:background .2s,transform .2s}.page-button>span{align-self:center;padding:15px 20px}.page-button>b{display:grid;place-items:center;min-width:54px;padding:8px;background:var(--acid,#dfff78);color:#180c2d;font-size:26px;line-height:1;font-weight:400;transition:background .2s}.page-button:hover{background:#a980ff18;transform:translateY(-2px)}.page-button:hover>b{background:#edffb7}.hero-index{display:flex;align-items:center;gap:18px;margin-top:44px;color:#a99dbb;font-size:9px;line-height:1.6;letter-spacing:.09em}.hero-index>span:first-child{font-family:var(--font-display);font-size:22px;color:#fff;letter-spacing:-.06em;border-right:1px solid #ffffff30;padding-right:18px}.path-art{position:relative;min-width:0;padding:35px 0 25px;transform:rotate(-6deg)}.path-art:before{content:'';position:absolute;inset:12% 8%;background:radial-gradient(ellipse,#9d56ff36,transparent 65%);filter:blur(12px)}.art-kicker,.art-bottom{position:relative;font-size:8px;letter-spacing:.14em;color:#c7b5e7}.art-kicker{display:block;text-align:right;padding-right:15px}.path-art svg{position:relative;width:115%;max-width:none;display:block;margin-left:-5%;filter:drop-shadow(0 12px 22px #7e3be555)}.art-bottom{display:flex;justify-content:space-between;padding:0 18px;gap:12px}.hero-foot{display:flex;justify-content:space-between;gap:16px;border-top:1px solid #ffffff25;padding-top:20px;padding-bottom:23px;color:#b1a0c7;font-size:8px;letter-spacing:.13em}
.catalog-section{background:radial-gradient(ellipse at 98% 100%,#a980ff33,transparent 38%),var(--page-light);color:var(--page-text);padding:86px 0 56px;scroll-margin-top:90px}.catalog-heading{display:flex;justify-content:space-between;align-items:flex-end;gap:50px;margin-bottom:40px}.catalog-heading h2,.orientation-intro h2,.bottom-callout h2{font-size:clamp(32px,4.3vw,60px);line-height:1.03;letter-spacing:-.055em;font-weight:700;margin-top:19px}.catalog-heading h2 em{color:#776188}.catalog-heading>p{font-size:14px;line-height:1.85;color:var(--page-muted);max-width:310px;padding-bottom:3px}.catalog-tools{margin-bottom:30px}.search-box{display:flex;align-items:center;gap:16px;min-height:66px;border:1px solid var(--page-line);background:#ffffff60;padding:8px 22px}.search-box:focus-within{outline:2px solid #7544ba;outline-offset:3px}.search-box svg{flex-shrink:0}.search-box input{background:none;border:0;outline:none;color:var(--page-text);width:100%;min-width:0;font:inherit;font-size:14px;min-height:46px}.search-box input::-webkit-search-cancel-button{display:none}.search-box input::placeholder{color:#756980;opacity:1}.search-hint{white-space:nowrap;font-size:8px;letter-spacing:.05em;color:#786b85}.clear-search{border:0;background:#ddd5e9;width:40px;height:40px;flex-shrink:0;color:#321849;cursor:pointer;font-size:24px}.filters-and-count{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:15px}.filter-list{display:flex;gap:7px;flex-wrap:wrap}.filter-button{font:600 11px var(--font-sans);min-height:43px;padding:11px 17px;cursor:pointer;border:1px solid var(--page-line);background:transparent;color:var(--page-muted);transition:color .2s,background .2s}.filter-button:hover{background:#e2d8f1;color:var(--page-text)}.filter-button.active{background:var(--page-dark);color:#fff;border-color:var(--page-dark)}.result-count{font-size:10px;white-space:nowrap;color:var(--page-muted)}
.pathway-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;align-items:start}.pathway-card{position:relative;background:#f9f7fc;border:1px solid var(--page-line);padding:24px 30px 0;display:flex;flex-direction:column;scroll-margin-top:105px;transition:background .3s,border-color .3s}.pathway-card:hover{background:#fff;border-color:#977bb3}.card-top{display:flex;align-items:center;gap:13px}.pathway-number{font:500 13px var(--font-display);color:#8f739f}.pathway-label{font-size:10px;line-height:1.5;text-transform:uppercase;letter-spacing:.07em;font-weight:700}.card-arrow{margin-left:auto;font-size:26px;line-height:1;color:#7d648f}.pathway-symbol{width:74px;height:74px;background:#e5dbf3;color:#4f267e;display:grid;place-items:center;margin:31px 0 22px}.blue .pathway-symbol{background:#dfff78;color:#344500}.peach .pathway-symbol{background:#cfb4f8;color:#351159}.lilac .pathway-symbol{background:#170c2b;color:#e6d6ff}.pathway-symbol svg{width:57px;height:57px;fill:none;stroke:currentColor;stroke-width:1.4;stroke-linejoin:round;stroke-linecap:round}.pathway-card h3{font-size:clamp(27px,2.8vw,39px);line-height:1.07;font-weight:600;letter-spacing:-.045em;max-width:400px}.pathway-description{font-size:13px;line-height:1.85;color:var(--page-muted);margin-top:16px;min-height:72px;max-width:450px}.tag-list{display:flex;flex-wrap:wrap;gap:7px;margin:25px 0 30px}.tag-list span{font-size:9px;line-height:1.4;padding:6px 9px;border:1px solid var(--page-line);color:#61526f}.pathway-details{margin-top:auto;border-top:1px solid var(--page-line)}.pathway-details summary{display:flex;align-items:center;justify-content:space-between;gap:20px;list-style:none;cursor:pointer;padding:18px 0;font-size:12px;font-weight:700}.pathway-details summary::-webkit-details-marker{display:none}.detail-plus{display:grid;place-items:center;width:30px;height:30px;background:#e9e2f2;font-size:23px;line-height:1;font-weight:400;transition:transform .2s}.pathway-details[open] .detail-plus{transform:rotate(45deg)}.detail-content{padding:8px 0 29px}.detail-content h4{font-size:12px;margin-bottom:13px}.detail-content ul{list-style:none;padding:0;margin:0}.detail-content li{position:relative;padding:10px 0 10px 16px;border-bottom:1px solid #2b144514;font-size:12px;line-height:1.7}.detail-content li:before{position:absolute;left:0;top:19px;content:'';width:4px;height:4px;background:#8551bb}.detail-content p{font-size:12px;line-height:1.8;color:var(--page-muted);margin-top:18px}.source-link{display:inline-flex;align-items:center;gap:12px;font-size:11px;font-weight:600;margin-top:19px;color:#63399a;text-decoration:underline;text-underline-offset:4px}.empty-state{text-align:center;border:1px solid var(--page-line);padding:45px 24px;background:#ffffff60}.empty-state>span{font-size:44px;color:#8857c0}.empty-state h3{font-size:32px;letter-spacing:-.04em}.empty-state p{max-width:520px;margin:15px auto 25px;font-size:14px;line-height:1.8;color:var(--page-muted)}.empty-state .page-button{color:var(--page-text);border-color:var(--page-line)}.formation-reference{font-size:11px;line-height:1.8;color:var(--page-muted);margin-top:26px}.formation-reference a{color:#51306e;text-decoration:underline;text-underline-offset:3px}
.orientation-section{padding:88px 0;background:var(--page-dark)}.orientation-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:90px}.orientation-intro .eyebrow{color:#a980ff}.orientation-intro>p:last-of-type{max-width:330px;font-size:14px;line-height:1.85;color:#baaecb;margin-top:25px}.orientation-star{display:block;color:var(--acid,#dfff78);font-size:79px;line-height:1;margin-top:25px}.orientation-steps{list-style:none;padding:0;margin:0}.orientation-steps li{display:grid;grid-template-columns:28px 1fr 22px;gap:18px;border-top:1px solid #ffffff30;padding:29px 0}.orientation-steps li:last-child{border-bottom:1px solid #ffffff30}.orientation-steps li>span{font-size:10px;color:var(--accent,#a980ff);padding-top:5px}.orientation-steps li>b{font-size:22px;font-weight:400;color:#ac89eb}.orientation-steps h3{font-size:23px;line-height:1.2;font-weight:500;letter-spacing:-.03em}.orientation-steps p{font-size:13px;line-height:1.9;color:#baaecb;margin-top:13px}.bottom-callout{background:var(--acid,#dfff78);color:var(--page-text);padding:52px 0}.bottom-callout-inner{display:flex;justify-content:space-between;align-items:center;gap:35px}.bottom-callout h2{font-size:clamp(32px,4vw,51px);margin-top:13px}.bottom-callout h2 em{color:#69773c}.bottom-callout .page-button{color:var(--page-text);border-color:#24300970}.bottom-callout .page-button>b{background:var(--page-dark);color:#fff}.bottom-callout .page-button:hover{background:#ffffff30}
.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}button:focus-visible,a:focus-visible,summary:focus-visible{outline:3px solid #8c5ccc;outline-offset:5px}.formation-hero a:focus-visible,.orientation-section a:focus-visible{outline-color:var(--acid,#dfff78)}
@media(min-width:701px) and (prefers-reduced-motion:no-preference){.path-art{animation:path-float 8s ease-in-out infinite}@keyframes path-float{0%,100%{transform:translateY(0) rotate(-6deg)}50%{transform:translateY(-13px) rotate(-3deg)}}}
@supports(animation-timeline:view()){ @media(prefers-reduced-motion:no-preference){.pathway-card,.orientation-steps li{animation:formation-enter both linear;animation-timeline:view();animation-range:entry 0% entry 22%}@keyframes formation-enter{from{opacity:.35;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}}}
@media(max-width:1000px){.hero-grid{gap:15px;padding-top:65px;padding-bottom:55px}h1{font-size:clamp(48px,7vw,74px)}.hero-intro{font-size:14px;max-width:350px}.hero-index{margin-top:30px}.search-hint{display:none}.catalog-heading{gap:25px}.catalog-heading>p{max-width:250px}.pathway-card{padding:24px 24px 0}.orientation-grid{gap:45px}.pathway-description{min-height:96px}.bottom-callout .page-button>span{padding-inline:13px}}
@media(max-width:700px){.hero-grid{grid-template-columns:1fr;gap:22px;padding-top:46px;padding-bottom:33px}h1{font-size:clamp(49px,10.8vw,76px);margin:24px 0}.formation-hero-copy .eyebrow{font-size:8px}.hero-intro{max-width:400px;font-size:14px;margin-bottom:25px}.hero-index{display:none}.path-art{max-width:420px;justify-self:center;width:100%;padding:12px 4px}.path-art svg{width:105%;margin-left:0;margin-top:-15px}.art-kicker{font-size:7px}.art-bottom{font-size:7px;margin-top:-15px;padding-inline:10px}.hero-foot{font-size:7px;letter-spacing:.05em;gap:20px;padding-top:16px;padding-bottom:17px}.hero-foot>span:first-child{max-width:145px}.hero-foot>span:last-child{text-align:right;max-width:135px}.catalog-section{padding:54px 0 38px}.catalog-heading{display:block;margin-bottom:28px}.catalog-heading h2{font-size:clamp(29px,7.8vw,45px)}.catalog-heading>p{max-width:100%;margin-top:20px;font-size:13px}.search-box{padding-inline:15px;gap:12px;min-height:60px}.search-box input{font-size:12px}.filters-and-count{display:block}.filter-list{gap:6px}.filter-button{font-size:10px;padding-inline:12px}.result-count{display:block;margin-top:15px}.pathway-grid{grid-template-columns:1fr;gap:16px}.pathway-card{padding:22px 22px 0}.pathway-card h3{font-size:34px}.pathway-description{min-height:0;max-width:100%}.pathway-symbol{margin-top:27px}.pathway-label{font-size:9px}.orientation-section{padding:55px 0}.orientation-grid{grid-template-columns:1fr;gap:32px}.orientation-intro{position:relative}.orientation-intro h2{font-size:42px}.orientation-intro>p:last-of-type{max-width:290px}.orientation-star{position:absolute;right:2px;top:25px;font-size:65px}.orientation-steps h3{font-size:21px}.orientation-steps li{gap:12px;padding:24px 0}.bottom-callout{padding:42px 0}.bottom-callout-inner{display:block}.bottom-callout h2{font-size:39px}.bottom-callout .page-button{margin-top:27px}.page-button>span{padding:14px 15px;font-size:9px}.page-button>b{min-width:47px}.formation-reference{font-size:10px}.empty-state{padding-inline:18px}}
@media(max-width:360px){h1{font-size:46px}.orientation-star{font-size:44px;top:31px}.pathway-card h3{font-size:30px}.pathway-card{padding-inline:18px}.page-button>span{font-size:8px}}
</style>