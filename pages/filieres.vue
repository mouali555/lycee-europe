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
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
const filteredPathways = computed(() => pathways.filter(pathway => {
  const matchesCategory = activeFilter.value === 'Tous les parcours' || activeFilter.value === pathway.category
  const haystack = normalize([pathway.name, pathway.title, pathway.description, ...pathway.tags, ...pathway.items].join(' '))
  return matchesCategory && haystack.includes(normalize(search.value.trim()))
}))
function resetFilters() { activeFilter.value = 'Tous les parcours'; search.value = '' }
</script>

<template>
  <div class="formations-page">
    <section class="container formation-hero">
      <div class="hero-copy">
        <p class="eyebrow"><span class="small-line"></span> Les formations</p>
        <h1>À chacun<br>son <em>horizon.</em></h1>
        <p class="hero-intro">Des premières découvertes aux grandes ambitions. Trouvez le parcours qui fait écho à votre curiosité.</p>
        <a class="button button-primary" href="#parcours">Explorer les formations <span aria-hidden="true">↗</span></a>
      </div>
      <div class="path-art" aria-hidden="true">
        <span class="art-caption">LES POSSIBLES COMMENCENT ICI</span>
        <svg viewBox="0 0 520 400" fill="none">
          <path d="M-20 345H170C247 345 222 76 328 76H555" stroke="#c4dba8" stroke-width="54"/>
          <path d="M-20 345H171C250 345 256 152 346 152H555" stroke="#2748df" stroke-width="54"/>
          <path d="M-20 345H169C246 345 264 228 354 228H555" stroke="#efba9f" stroke-width="54"/>
          <path d="M-20 345H169C254 345 277 304 357 304H555" stroke="#b5a3df" stroke-width="54"/>
          <circle cx="119" cy="345" r="11" fill="#f8f7f2"/>
          <path d="m458 67 9 9-9 9m0 58 9 9-9 9m0 58 9 9-9 9m0 58 9 9-9 9" stroke="#f8f7f2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="art-bottom"><span>Votre point de départ.</span><span>Votre avenir. ↗</span></div>
      </div>
    </section>
    <section class="catalog-section" id="parcours">
      <div class="container">
        <div class="catalog-heading"><div><p class="eyebrow">Choisir, explorer, avancer</p><h2>Des parcours.<br><em>Autant de possibles.</em></h2></div><p>Sciences, innovation, savoir-faire : chaque parcours est une façon de construire la suite.</p></div>
        <div class="search-box"><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg><label for="formation-search" class="visually-hidden">Rechercher une formation ou une spécialité</label><input id="formation-search" v-model="search" type="search" placeholder="Une envie, une matière, une formation…" autocomplete="off"><span class="search-hint">Ex. numérique, BTS, sciences</span></div>
        <div class="filters-and-count"><div class="filter-list" role="group" aria-label="Filtrer les formations par parcours"><button v-for="filter in filters" :key="filter" class="filter-button" :class="{ active: activeFilter === filter }" :aria-pressed="activeFilter === filter" @click="activeFilter = filter">{{ filter }}</button></div><span class="result-count" aria-live="polite">{{ filteredPathways.length }} parcours à explorer</span></div>
        <div v-if="filteredPathways.length" class="pathway-grid">
          <article v-for="pathway in filteredPathways" :id="pathway.id" :key="pathway.id" class="pathway-card" :class="pathway.theme">
            <div class="card-top"><span class="pathway-label">{{ pathway.name }}</span><span class="pathway-number">{{ pathway.number }}</span></div>
            <div class="pathway-symbol" aria-hidden="true"><svg v-if="pathway.id === 'generale'" viewBox="0 0 72 72"><circle cx="36" cy="36" r="25"/><path d="M11 36h50M36 11v50"/><ellipse cx="36" cy="36" rx="11" ry="25"/></svg><svg v-else-if="pathway.id === 'technologique'" viewBox="0 0 72 72"><path d="M24 11h24M29 11v22L15 55a5 5 0 0 0 4 7h34a5 5 0 0 0 4-7L43 33V11M23 43h27"/><circle cx="36" cy="52" r="2"/></svg><svg v-else-if="pathway.id === 'bts'" viewBox="0 0 72 72"><path d="m36 8 25 14v28L36 64 11 50V22L36 8Zm0 28L11 22m25 14 25-14M36 36v28M24 15l25 14v14"/></svg><svg v-else viewBox="0 0 72 72"><path d="M12 59h48M19 58V40h11v18M30 58V28h12v30M42 58V16h12v42M13 29 42 9m-11 0h11v11"/></svg></div>
            <h3>{{ pathway.title }}</h3><p class="pathway-description">{{ pathway.description }}</p><div class="tag-list"><span v-for="tag in pathway.tags" :key="tag">{{ tag }}</span></div>
            <details class="pathway-details"><summary><span>Découvrir ce parcours</span><span class="detail-plus" aria-hidden="true">+</span></summary><div class="detail-content"><h4>{{ pathway.prompt }}</h4><ul><li v-for="item in pathway.items" :key="item">{{ item }}</li></ul><p>{{ pathway.detail }}</p><a class="source-link" :href="pathway.source" target="_blank" rel="noopener noreferrer">Consulter la fiche Onisep <span aria-hidden="true">↗</span></a></div></details>
          </article>
        </div>
        <div v-else class="empty-state"><span aria-hidden="true">↗</span><h3>Un autre mot pour ouvrir les possibles ?</h3><p>Aucun parcours ne correspond à cette recherche. Essayez « sciences », « numérique » ou « BTS ».</p><button class="button button-primary" @click="resetFilters">Afficher toutes les formations</button></div>
      </div>
    </section>
    <div class="container formation-reference"><p>Pour consulter l’ensemble des formations et les modalités actualisées : <a href="https://www.onisep.fr/ressources/structures-enseignement/hauts-de-france/nord/lycee-de-l-europe" target="_blank" rel="noopener noreferrer">la fiche du lycée sur l’Onisep ↗</a></p></div>
    <section class="container orientation-section"><div class="orientation-intro"><p class="eyebrow">Le bon point de départ</p><h2>Votre projet se<br>construit <em>pas à pas.</em></h2><p>Vous n’avez pas besoin d’avoir toutes les réponses pour commencer à vous orienter.</p></div><ol class="orientation-steps"><li><span>01</span><div><h3>Partez de ce qui vous anime.</h3><p>Les matières que vous aimez, vos projets, les sujets qui éveillent votre curiosité.</p></div></li><li><span>02</span><div><h3>Comparez les approches.</h3><p>Théorie, expérimentation, pratique : explorez les différentes façons d’apprendre.</p></div></li><li><span>03</span><div><h3>Parlez-en avec l’équipe.</h3><p>Votre professeur principal et les personnes chargées de l’orientation peuvent vous accompagner dans vos choix.</p></div></li></ol></section>
    <section class="container bottom-callout"><div><p class="eyebrow">Et au-delà des cours ?</p><h2>Un lycée à vivre,<br><em>autant qu’à apprendre.</em></h2></div><NuxtLink to="/clubs" class="button button-primary">Découvrir la vie lycéenne <span aria-hidden="true">↗</span></NuxtLink></section>
  </div>
</template>

<style scoped>
.source-link{display:inline-flex;gap:10px;align-items:center;color:#2748df;font-size:12px;font-weight:600;margin-top:17px;text-decoration:underline;text-underline-offset:4px}.formation-reference{padding-top:26px}.formation-reference p{font-size:12px;line-height:1.8;color:#65706d;margin:0}.formation-reference a{color:#2748df;text-decoration:underline;text-underline-offset:3px}
.formations-page{color:#162b32;background:#f8f7f2}.formation-hero{display:grid;grid-template-columns:1.1fr 1fr;gap:70px;align-items:center;padding-top:84px;padding-bottom:96px}.hero-copy .eyebrow{display:flex;align-items:center;gap:12px}.small-line{width:28px;height:2px;background:#2748df}h1{font-size:clamp(58px,6.6vw,94px);font-weight:600;line-height:1.02;letter-spacing:-.065em;margin:27px 0}em{font-family:Georgia,'Times New Roman',serif;font-weight:400;letter-spacing:-.05em;color:#2748df}.hero-intro{max-width:430px;font-size:17px;line-height:1.75;color:#586568;margin:28px 0}.hero-copy .button{margin-top:6px}.path-art{overflow:hidden;border:1px solid #d8ddd1;background:#edf0e6;border-radius:180px 180px 20px 20px;padding:64px 0 25px;min-width:0}.art-caption{display:block;text-align:center;font-size:9px;letter-spacing:.22em;font-weight:700}.path-art svg{width:100%;height:auto;margin-top:20px}.art-bottom{display:flex;justify-content:space-between;padding:0 28px;font-size:11px;font-weight:600;margin-top:12px}.catalog-section{border-top:1px solid #d9ded8;padding:85px 0 95px;background:#f0f1eb;scroll-margin-top:110px}.catalog-heading{display:flex;justify-content:space-between;align-items:flex-end;gap:50px;margin-bottom:38px}.catalog-heading h2,.orientation-section h2,.bottom-callout h2{font-weight:500;letter-spacing:-.045em;font-size:clamp(34px,4vw,53px);line-height:1.15;margin:17px 0 0}.catalog-heading>p{font-size:15px;line-height:1.8;max-width:310px;color:#65706d;margin:0 0 5px}.search-box{display:flex;align-items:center;gap:15px;padding:17px 22px;background:#fafbf8;border:1px solid #d3dacf;border-radius:8px}.search-box:focus-within{outline:2px solid #2748df;outline-offset:2px}.search-box input{background:transparent;border:0;outline:0;flex:1;min-width:0;color:#162b32;font:inherit;font-size:14px}.search-hint{color:#778078;font-size:11px}.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.filters-and-count{display:flex;justify-content:space-between;gap:20px;align-items:center;margin:20px 0 35px}.filter-list{display:flex;flex-wrap:wrap;gap:8px}.filter-button{border:1px solid #cdd4c9;border-radius:40px;font:inherit;font-size:12px;font-weight:600;padding:10px 17px;background:transparent;color:#4a5856;cursor:pointer;transition:background .2s,color .2s}.filter-button:hover{background:#e1e5da}.filter-button.active{background:#162b32;border-color:#162b32;color:white}.result-count{font-size:11px;white-space:nowrap;color:#637166}.pathway-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}.pathway-card{background:#f8f9f5;border:1px solid #d5dcd0;border-radius:12px;padding:31px 34px 0;scroll-margin-top:120px;display:flex;flex-direction:column;overflow:hidden}.card-top{display:flex;align-items:center;justify-content:space-between;gap:15px}.pathway-label{font-size:11px;font-weight:700;letter-spacing:.09em;text-transform:uppercase}.pathway-number{font-size:12px;color:#65705f}.pathway-symbol{width:80px;height:80px;display:flex;align-items:center;justify-content:center;border-radius:50%;margin-top:30px;background:#e2eccf;color:#476532}.pathway-symbol svg{width:59px;height:59px;fill:none;stroke:currentColor;stroke-width:1.3;stroke-linejoin:round;stroke-linecap:round}.blue .pathway-symbol{color:#2748df;background:#e4e9fb}.peach .pathway-symbol{color:#a35432;background:#f6e3d6}.lilac .pathway-symbol{color:#72519a;background:#ece6f5}.pathway-card h3{font-size:clamp(25px,2.2vw,32px);letter-spacing:-.035em;font-weight:600;margin:23px 0 14px;line-height:1.2}.pathway-description{font-size:14px;line-height:1.8;color:#606b61;margin:0;max-width:430px}.tag-list{display:flex;flex-wrap:wrap;gap:6px;margin:23px 0 32px}.tag-list span{font-size:10px;border:1px solid #d7ddd1;border-radius:30px;padding:6px 10px}.pathway-details{margin-top:auto;border-top:1px solid #d9dfd3}.pathway-details summary{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:20px 0;cursor:pointer;list-style:none;font-size:12px;font-weight:700}.pathway-details summary::-webkit-details-marker{display:none}.detail-plus{font-size:21px;line-height:1;font-weight:400;transition:transform .2s}.pathway-details[open] .detail-plus{transform:rotate(45deg)}.detail-content{padding-bottom:25px}.detail-content h4{font-size:12px;font-weight:700;margin:6px 0 12px}.detail-content ul{padding:0;list-style:none;margin:0}.detail-content li{padding:9px 0 9px 18px;font-size:13px;line-height:1.65;position:relative;border-bottom:1px solid #e3e6dd}.detail-content li:before{position:absolute;left:0;top:16px;content:'';width:5px;height:5px;border-radius:50%;background:#2748df}.detail-content p{font-size:12px;color:#687164;line-height:1.8;margin:18px 0 0}.empty-state{text-align:center;background:#f8f9f5;padding:60px 24px;border:1px solid #d5dcd0;border-radius:12px}.empty-state>span{font-size:40px;color:#2748df}.empty-state h3{font-size:24px;font-weight:500;letter-spacing:-.04em;margin:15px 0}.empty-state p{font-size:14px;color:#65706d;line-height:1.7;margin:10px auto 25px;max-width:500px}.orientation-section{display:grid;grid-template-columns:1fr 1fr;gap:100px;padding-top:95px;padding-bottom:95px}.orientation-intro>p:last-child{font-size:15px;line-height:1.8;color:#68716c;max-width:355px;margin-top:22px}.orientation-steps{list-style:none;margin:0;padding:0}.orientation-steps li{display:flex;gap:23px;border-bottom:1px solid #dce0d6;padding:25px 0}.orientation-steps li:first-child{padding-top:6px}.orientation-steps li>span{font-size:11px;color:#2748df;border:1px solid #cdd6ee;min-width:33px;height:33px;border-radius:50%;display:flex;align-items:center;justify-content:center}.orientation-steps h3{font-size:15px;font-weight:600;letter-spacing:-.01em;margin:5px 0 9px}.orientation-steps p{font-size:13px;color:#68716c;line-height:1.75;margin:0}.bottom-callout{display:flex;align-items:center;justify-content:space-between;gap:30px;border-top:1px solid #d9ded4;padding-top:55px;padding-bottom:75px}.bottom-callout h2{font-size:35px}.bottom-callout .button{flex-shrink:0}button:focus-visible,a:focus-visible,summary:focus-visible{outline:3px solid #2748df;outline-offset:4px}
@media(max-width:900px){.formation-hero{gap:35px;padding-top:60px;padding-bottom:65px}.path-art{border-radius:140px 140px 20px 20px;padding-top:50px}.art-caption{font-size:8px;letter-spacing:.14em}.art-bottom{font-size:9px;padding:0 17px}.hero-intro{font-size:15px}.catalog-heading{gap:25px}.orientation-section{gap:45px}.pathway-card{padding:25px 25px 0}.search-hint{display:none}.result-count{display:none}}
@media(max-width:640px){.formation-hero{grid-template-columns:1fr;gap:40px;padding-top:43px;padding-bottom:55px}.hero-copy h1{font-size:62px}.hero-intro{font-size:15px;max-width:390px}.path-art{max-width:420px;width:100%;padding-top:34px;border-radius:120px 120px 14px 14px;justify-self:center}.path-art svg{margin-top:5px;max-height:235px}.art-caption{font-size:8px}.art-bottom{margin-top:2px}.catalog-section{padding:52px 0 58px}.catalog-heading{display:block;margin-bottom:25px}.catalog-heading>p{margin:20px 0 0;max-width:100%}.search-box{padding:16px 15px;gap:10px}.search-box input{font-size:12px}.filters-and-count{margin:16px 0 25px}.filter-list{gap:7px}.filter-button{font-size:10px;padding:9px 12px}.pathway-grid{grid-template-columns:1fr;gap:18px}.pathway-card{padding:25px 24px 0}.pathway-card h3{font-size:29px}.orientation-section{grid-template-columns:1fr;gap:28px;padding-top:60px;padding-bottom:55px}.orientation-section h2{font-size:38px}.orientation-intro>p:last-child{max-width:100%}.bottom-callout{display:block;padding-top:40px;padding-bottom:55px}.bottom-callout h2{font-size:32px}.bottom-callout .button{margin-top:26px}}
</style>

