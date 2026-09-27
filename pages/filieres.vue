<script setup>
import { computed, ref } from 'vue'

useHead({
  title: 'Nos Formations — Parcours & Spécialités',
  meta: [
    {
      name: 'description',
      content: 'Voie générale, bac technologique STI2D, BTS industriels et classes préparatoires : explorez l’excellence académique et technique du Lycée Europe à Dunkerque.'
    }
  ]
})

const activeFilter = ref('Tous les parcours')
const search = ref('')
const filters = ['Tous les parcours', 'Générale', 'STI2D', 'BTS', 'Prépas']

const pathways = [
  {
    id: 'generale',
    category: 'Générale',
    number: '01',
    title: 'Cultiver la curiosité.',
    name: 'La voie générale',
    description: 'Approfondir ses connaissances, affûter son esprit critique et bâtir son projet vers l’enseignement supérieur.',
    tags: ['Sciences', 'Langues', 'Humanités', 'Numérique'],
    theme: 'sage',
    items: [
      'Mathématiques',
      'Physique-chimie',
      'Sciences de la vie et de la Terre (SVT)',
      'Sciences de l’ingénieur (SI)',
      'Numérique et sciences informatiques (NSI)',
      'Sciences économiques et sociales (SES)',
      'Histoire-géographie, géopolitique et sciences politiques (HGGSP)',
      'Humanités, littérature et philosophie (HLP)',
      'Langues, littératures et cultures étrangères : anglais, espagnol, anglais monde contemporain'
    ],
    detail: 'Des spécialités scientifiques, littéraires et linguistiques pointues pour composer un parcours sur-mesure. Les combinaisons d’enseignements sont à affiner avec l’équipe pédagogique.',
    prompt: 'Les 9 spécialités à explorer',
    source: 'https://www.onisep.fr/ressources/structures-enseignement/hauts-de-france/nord/lycee-de-l-europe/classe-de-1re-generale'
  },
  {
    id: 'technologique',
    category: 'STI2D',
    number: '02',
    title: 'Comprendre en faisant.',
    name: 'Le bac technologique STI2D',
    description: 'Relier les concepts théoriques aux applications concrètes, prototyper, innover et apprendre par le projet réel.',
    tags: ['Innovation', 'Industrie 4.0', 'Éco-conception', 'Systèmes'],
    theme: 'blue',
    items: [
      'Architecture et construction (AC)',
      'Énergies et environnement (EE)',
      'Innovation technologique et éco-conception (ITEC)',
      'Systèmes d’information et numérique (SIN)'
    ],
    detail: 'Le baccalauréat STI2D conjugue sciences appliquées, technologies de pointe et transition écologique. Ces quatre enseignements spécifiques arment les élèves pour l’ingénierie moderne.',
    prompt: 'Les 4 enseignements spécifiques',
    source: 'https://www.onisep.fr/ressources/structures-enseignement/hauts-de-france/nord/lycee-de-l-europe'
  },
  {
    id: 'bts',
    category: 'BTS',
    number: '03',
    title: 'Donner vie au savoir-faire.',
    name: 'Les BTS industriels & numériques',
    description: 'Après le bac, acquérir une expertise opérationnelle recherchée dans le numérique, les automatismes, l’énergie et l’industrie de pointe.',
    tags: ['Bac +2', 'Industrie', 'Cybersécurité', 'Apprentissage'],
    theme: 'peach',
    items: [
      'BTS Électrotechnique',
      'BTS CIEL — Cybersécurité, informatique et réseaux, électronique · option A informatique et réseaux',
      'BTS CRSA — Conception et réalisation de systèmes automatiques',
      'BTS CRCI — Conception et réalisation en chaudronnerie industrielle',
      'BTS CPRP — Conception des processus de réalisation de produits · option B production sérielle',
      'BTS Pilotage de procédés'
    ],
    detail: 'Six filières BTS reconnues par les entreprises du bassin dunkerquois et des Hauts-de-France. Les cursus sont accessibles sous statut scolaire ou en contrat d’apprentissage.',
    prompt: 'Les 6 brevets de technicien supérieur',
    source: 'https://www.onisep.fr/ressources/structures-enseignement/hauts-de-france/nord/lycee-de-l-europe'
  },
  {
    id: 'prepas',
    category: 'Prépas',
    number: '04',
    title: 'Viser l’excellence.',
    name: 'Les classes préparatoires aux grandes écoles',
    description: 'Développer une puissance de travail, approfondir les sciences fondamentales et réussir les concours des plus grandes écoles d’ingénieurs.',
    tags: ['PTSI', 'PT', 'ATS', 'Grandes Écoles'],
    theme: 'lilac',
    items: [
      'PTSI — Physique, technologie et sciences de l’ingénieur · première année',
      'PT — Physique et technologie · deuxième année',
      'ATS — Ingénierie industrielle · classe préparatoire en un an après BTS/BUT'
    ],
    detail: 'La filière PTSI–PT et la classe ATS forment un pôle d’excellence régional avec des taux d’admission remarquables aux écoles d’ingénieurs nationales (Arts et Métiers, Centrales, Mines).',
    prompt: 'Les promotions préparatoires',
    source: 'https://www.onisep.fr/ressources/structures-enseignement/hauts-de-france/nord/lycee-de-l-europe'
  }
]

const normalize = value =>
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

const filteredPathways = computed(() =>
  pathways.filter(pathway => {
    const matchesCategory =
      activeFilter.value === 'Tous les parcours' || activeFilter.value === pathway.category
    const haystack = normalize(
      [pathway.name, pathway.title, pathway.description, ...pathway.tags, ...pathway.items].join(' ')
    )
    return matchesCategory && haystack.includes(normalize(search.value.trim()))
  })
)

function resetFilters() {
  activeFilter.value = 'Tous les parcours'
  search.value = ''
}
</script>

<template>
  <div class="formations-page">
    <!-- ══════════════════════════════════════════
         HERO SECTION
    ══════════════════════════════════════════ -->
    <section class="formation-hero container">
      <!-- Glow & Ambient background -->
      <div class="hero-ambient" aria-hidden="true">
        <div class="glow-orb glow-ice"></div>
        <div class="glow-orb glow-acid"></div>
      </div>

      <div class="hero-copy">
        <p class="hero-eyebrow text-label-acid">
          <span class="eyebrow-dot"></span> 01 / OFFRE DE FORMATION
        </p>
        <h1 class="hero-title">
          <span>À CHACUN</span>
          <span class="ht-outline">SON PROPRE</span>
          <span class="ht-acid">HORIZON.<span class="hero-star" aria-hidden="true">✦</span></span>
        </h1>
        <p class="hero-intro">
          De la classe de seconde aux formations d’ingénierie supérieure.
          Découvrez des voies pensées pour éveiller votre curiosité, structurer votre pensée et propulser vos ambitions.
        </p>
        <div class="hero-actions">
          <a class="btn-acid btn-acid-lg" href="#parcours">
            Explorer les filières <span aria-hidden="true">↗</span>
          </a>
          <a class="hero-sublink" href="#methodologie">
            Méthode d'orientation <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <!-- Right Visual Widget: Cyber Path Matrix -->
      <div class="path-visual" aria-hidden="true">
        <div class="pv-grid-overlay"></div>
        <div class="pv-top">
          <span class="pv-badge">CYCLE D'ÉTUDES</span>
          <span class="pv-meta">DE LA 2NDE AU BAC+3</span>
        </div>

        <div class="pv-circuit">
          <svg viewBox="0 0 460 300" fill="none" class="circuit-svg">
            <!-- Bus lines -->
            <path d="M20 250H150C220 250 200 60 300 60H440" stroke="var(--acid)" stroke-width="2.5" stroke-dasharray="6 4" opacity="0.9"/>
            <path d="M20 250H160C230 250 220 120 310 120H440" stroke="var(--ice)" stroke-width="2.5" opacity="0.8"/>
            <path d="M20 250H170C240 250 240 180 320 180H440" stroke="var(--hyper)" stroke-width="2" opacity="0.7"/>
            <path d="M20 250H180C250 250 260 240 330 240H440" stroke="rgba(250,250,250,0.4)" stroke-width="1.5"/>

            <!-- Node Points -->
            <circle cx="120" cy="250" r="7" fill="var(--acid)" stroke="var(--void)" stroke-width="2"/>
            <circle cx="300" cy="60" r="5" fill="var(--acid)"/>
            <circle cx="310" cy="120" r="5" fill="var(--ice)"/>
            <circle cx="320" cy="180" r="5" fill="var(--hyper)"/>
            <circle cx="330" cy="240" r="5" fill="var(--white)"/>

            <!-- Terminal arrows -->
            <path d="M430 55l6 5-6 5" stroke="var(--acid)" stroke-width="2" stroke-linecap="round"/>
            <path d="M430 115l6 5-6 5" stroke="var(--ice)" stroke-width="2" stroke-linecap="round"/>
            <path d="M430 175l6 5-6 5" stroke="var(--hyper)" stroke-width="2" stroke-linecap="round"/>
            <path d="M430 235l6 5-6 5" stroke="var(--white)" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>

        <div class="pv-bottom">
          <span>POINT DE DÉPART : DUNKERQUE</span>
          <span class="pv-star">✦ VOTE FUTUR</span>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════
         CATALOG SECTION (SEARCH & PATHWAYS)
    ══════════════════════════════════════════ -->
    <section id="parcours" class="catalog-section">
      <div class="container">
        <div class="section-header">
          <div>
            <p class="section-tag text-label-acid">02 / CATALOGUE DES CYCLES</p>
            <h2 class="section-title">
              Des parcours.<br>
              <span class="ht-outline">Autant de</span> <span class="ht-acid">possibles.</span>
            </h2>
          </div>
          <p class="section-lead">
            Sciences fondamentales, technologies industrielles, informatique ou management technique :
            chaque voie est conçue comme un tremplin d'excellence vers l'avenir.
          </p>
        </div>

        <!-- Search Bar -->
        <div class="search-wrap">
          <div class="search-box">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" class="search-icon">
              <circle cx="10.5" cy="10.5" r="6.5"/>
              <path d="m16 16 5 5"/>
            </svg>
            <label for="formation-search" class="visually-hidden">Rechercher une formation ou une matière</label>
            <input
              id="formation-search"
              v-model="search"
              type="search"
              placeholder="Rechercher une matière, une spécialité, un diplôme (ex: NSI, BTS, STI2D, Maths)..."
              autocomplete="off"
            >
            <button v-if="search" type="button" class="search-clear" aria-label="Effacer la recherche" @click="search = ''">
              ✕
            </button>
            <span class="search-badge" aria-hidden="true">INDEX ONISEP</span>
          </div>
        </div>

        <!-- Filter Pills & Result Count -->
        <div class="filters-and-count">
          <div class="filter-list" role="group" aria-label="Filtrer les formations par parcours">
            <button
              v-for="filter in filters"
              :key="filter"
              type="button"
              class="filter-pill"
              :class="{ active: activeFilter === filter }"
              :aria-pressed="activeFilter === filter"
              @click="activeFilter = filter"
            >
              {{ filter }}
            </button>
          </div>
          <span class="result-count" aria-live="polite">
            {{ filteredPathways.length }} cycle{{ filteredPathways.length > 1 ? 's' : '' }} répertorié{{ filteredPathways.length > 1 ? 's' : '' }}
          </span>
        </div>

        <!-- Pathways Grid -->
        <div v-if="filteredPathways.length" class="pathway-grid">
          <article
            v-for="pathway in filteredPathways"
            :id="pathway.id"
            :key="pathway.id"
            class="pathway-card"
            :class="`theme-${pathway.theme}`"
          >
            <div class="card-top">
              <span class="pathway-category-pill">{{ pathway.category }}</span>
              <span class="pathway-number">{{ pathway.number }} //</span>
            </div>

            <!-- Header Symbol & Title -->
            <div class="card-identity">
              <div class="pathway-symbol" aria-hidden="true">
                <svg v-if="pathway.id === 'generale'" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" stroke="var(--acid)" stroke-width="1.8" fill="none"/>
                  <path d="M6 32h52M32 6v52" stroke="var(--acid)" stroke-width="1.5" opacity="0.6"/>
                  <ellipse cx="32" cy="32" rx="12" ry="26" stroke="var(--acid)" stroke-width="1.8" fill="none"/>
                </svg>
                <svg v-else-if="pathway.id === 'technologique'" viewBox="0 0 64 64">
                  <path d="M22 10h20M26 10v20L14 48a4 4 0 0 0 3 6h30a4 4 0 0 0 3-6L38 30V10M20 38h24" stroke="var(--ice)" stroke-width="1.8" fill="none"/>
                  <circle cx="32" cy="46" r="2" fill="var(--ice)"/>
                </svg>
                <svg v-else-if="pathway.id === 'bts'" viewBox="0 0 64 64">
                  <path d="M32 8l22 12v24L32 56 10 44V20L32 8z" stroke="var(--hyper)" stroke-width="1.8" fill="none"/>
                  <path d="M32 32L10 20M32 32l22-12M32 32v24" stroke="var(--hyper)" stroke-width="1.5" opacity="0.7"/>
                </svg>
                <svg v-else viewBox="0 0 64 64">
                  <path d="M10 52h44M18 52V36h10v16M28 52V26h10v26M38 52V16h10v36M12 26l28-18 8 5" stroke="var(--white)" stroke-width="1.8" fill="none"/>
                </svg>
              </div>

              <div>
                <span class="pathway-subtitle">{{ pathway.name }}</span>
                <h3 class="pathway-headline">{{ pathway.title }}</h3>
              </div>
            </div>

            <p class="pathway-description">{{ pathway.description }}</p>

            <div class="tag-list">
              <span v-for="tag in pathway.tags" :key="tag" class="tag-chip">
                {{ tag }}
              </span>
            </div>

            <details class="pathway-details">
              <summary>
                <span>{{ pathway.prompt }}</span>
                <span class="toggle-icon" aria-hidden="true">+</span>
              </summary>
              <div class="detail-content">
                <ul class="items-list">
                  <li v-for="item in pathway.items" :key="item">
                    <span class="item-bullet" aria-hidden="true">✦</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
                <p class="detail-paragraph">{{ pathway.detail }}</p>
                <a class="source-link" :href="pathway.source" target="_blank" rel="noopener noreferrer">
                  Consulter la fiche officielle Onisep <span aria-hidden="true">↗</span>
                </a>
              </div>
            </details>
          </article>
        </div>

        <!-- Empty search state -->
        <div v-else class="empty-state">
          <div class="empty-glyph" aria-hidden="true">∅</div>
          <h3>Aucun cycle ne correspond à cette recherche</h3>
          <p>Essayez un mot clé plus large comme « sciences », « BTS », « numérique » ou « STI2D ».</p>
          <button type="button" class="btn-acid" @click="resetFilters">
            Réinitialiser les filtres
          </button>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════
         ORIENTATION METHODOLOGY
    ══════════════════════════════════════════ -->
    <section id="methodologie" class="container orientation-section">
      <div class="orientation-intro">
        <p class="section-tag text-label-acid">MÉTHODOLOGIE D’ORIENTATION</p>
        <h2 class="orientation-title">
          Votre projet se<br>
          <span class="ht-outline">construit</span> <span class="ht-acid">pas à pas.</span>
        </h2>
        <p class="orientation-lead">
          Nul besoin d’avoir une trajectoire figée dès la classe de seconde. L’important est de développer
          sa curiosité, de tester ses affinités et d’échanger avec l’équipe éducative pour affiner son parcours.
        </p>
      </div>

      <ol class="orientation-steps">
        <li class="step-card">
          <div class="step-num">01</div>
          <div class="step-copy">
            <h3>Partir de ce qui vous anime.</h3>
            <p>Identifiez les matières où votre engagement est naturel, vos centres d’intérêt personnels et vos projets d’avenir.</p>
          </div>
        </li>
        <li class="step-card">
          <div class="step-num">02</div>
          <div class="step-copy">
            <h3>Comparer les démarches pédagogiques.</h3>
            <p>Approche théorique, modélisation conceptuelle, travaux pratiques ou projets d’ingénierie en équipe : trouvez votre façon d’apprendre.</p>
          </div>
        </li>
        <li class="step-card">
          <div class="step-num">03</div>
          <div class="step-copy">
            <h3>Bénéficier d’un accompagnement dédié.</h3>
            <p>Professeurs principaux, psychologues de l’Éducation nationale et journées portes ouvertes sont à vos côtés à chaque étape.</p>
          </div>
        </li>
      </ol>
    </section>

    <!-- ══════════════════════════════════════════
         BOTTOM CALLOUT (VIE LYCÉENNE LINK)
    ══════════════════════════════════════════ -->
    <section class="container bottom-callout">
      <div class="callout-card">
        <div class="callout-glow" aria-hidden="true"></div>
        <div>
          <p class="section-tag text-label-acid">AU-DELÀ DES COURS</p>
          <h2 class="callout-title">
            Un lycée à vivre,<br>
            <span class="ht-outline">autant qu’à</span> <span class="ht-acid">apprendre.</span>
          </h2>
          <p class="callout-desc">
            Explorez les clubs de sport, l'audiovisuel, le foyer des élèves et les projets menés par la Maison des Lycéens.
          </p>
        </div>
        <NuxtLink to="/clubs" class="btn-acid btn-acid-lg">
          Découvrir la vie lycéenne <span aria-hidden="true">↗</span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ── Container & Global Reset ───────────────────────────────── */
.formations-page {
  background: var(--void);
  color: var(--white);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  padding-bottom: 96px;
}

/* ── Hero Section ───────────────────────────────────────────── */
.formation-hero {
  display: grid;
  grid-template-columns: 1.15fr 0.95fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;
  padding-top: clamp(60px, 8vw, 110px);
  padding-bottom: clamp(60px, 7vw, 100px);
  position: relative;
}

.hero-ambient {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.glow-orb {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.12;
}

.glow-ice {
  background: var(--ice);
  top: 5%;
  left: -5%;
}

.glow-acid {
  background: var(--acid);
  bottom: 5%;
  right: 10%;
  opacity: 0.14;
}

.hero-copy {
  position: relative;
  z-index: 2;
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--acid);
  margin-bottom: 20px;
}

.eyebrow-dot {
  width: 7px;
  height: 7px;
  background: var(--acid);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--acid);
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(48px, 6.2vw, 84px);
  font-weight: 800;
  line-height: 0.98;
  letter-spacing: -0.05em;
  margin: 0 0 28px;
  display: flex;
  flex-direction: column;
}

.ht-outline {
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(250, 250, 250, 0.4);
}

.ht-acid {
  color: var(--acid);
  text-shadow: 0 0 30px rgba(204, 255, 0, 0.25);
  display: flex;
  align-items: center;
  gap: 12px;
}

.hero-star {
  font-size: 0.6em;
  color: var(--acid);
  animation: pulse-star 3s ease-in-out infinite;
}

@keyframes pulse-star {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.85); }
}

.hero-intro {
  font-size: clamp(15px, 1.2vw, 17px);
  line-height: 1.75;
  color: var(--white-dim);
  max-width: 520px;
  margin: 0 0 36px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.hero-sublink {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--white-muted);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color var(--t-fast);
}

.hero-sublink:hover {
  color: var(--acid);
}

/* ── Path Visual Widget (Right) ─────────────────────────────── */
.path-visual {
  position: relative;
  background: var(--onyx-2);
  border: 1px solid rgba(250, 250, 250, 0.1);
  border-radius: var(--r-md);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 380px;
  overflow: hidden;
  isolation: isolate;
}

.pv-grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(250, 250, 250, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(250, 250, 250, 0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
}

.pv-top,
.pv-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--white-muted);
  z-index: 2;
}

.pv-badge {
  color: var(--acid);
}

.pv-circuit {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}

.circuit-svg {
  width: 100%;
  height: auto;
}

.pv-star {
  color: var(--acid);
}

/* ── Catalog Section ────────────────────────────────────────── */
.catalog-section {
  background: var(--onyx);
  border-top: 1px solid rgba(250, 250, 250, 0.07);
  border-bottom: 1px solid rgba(250, 250, 250, 0.07);
  padding: clamp(70px, 9vw, 110px) 0;
  scroll-margin-top: 100px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
  margin-bottom: 46px;
}

.section-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--acid);
  margin-bottom: 12px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(34px, 4.2vw, 54px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin: 0;
}

.section-lead {
  font-size: clamp(14px, 1.1vw, 16px);
  line-height: 1.75;
  color: var(--white-dim);
  max-width: 440px;
  margin: 0;
}

/* ── Search Bar ─────────────────────────────────────────────── */
.search-wrap {
  margin-bottom: 24px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  background: var(--onyx-2);
  border: 1px solid rgba(250, 250, 250, 0.12);
  border-radius: var(--r-md);
  transition: border-color var(--t-fast), box-shadow var(--t-fast);
}

.search-box:focus-within {
  border-color: var(--acid);
  box-shadow: 0 0 20px rgba(204, 255, 0, 0.15);
}

.search-icon {
  color: var(--acid);
  flex-shrink: 0;
}

.search-box input {
  background: transparent;
  border: none;
  outline: none;
  flex: 1;
  color: var(--white);
  font-family: var(--font-body);
  font-size: 14px;
}

.search-box input::placeholder {
  color: var(--white-muted);
}

.search-clear {
  background: none;
  border: none;
  color: var(--white-muted);
  cursor: pointer;
  padding: 4px;
  font-size: 14px;
}

.search-clear:hover {
  color: var(--white);
}

.search-badge {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.12em;
  color: var(--white-muted);
  border: 1px solid rgba(250, 250, 250, 0.1);
  padding: 4px 8px;
  border-radius: var(--r-xs);
}

/* ── Filters and Counter ────────────────────────────────────── */
.filters-and-count {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 36px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(250, 250, 250, 0.08);
}

.filter-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-pill {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: var(--r-full);
  background: var(--onyx-2);
  border: 1px solid rgba(250, 250, 250, 0.12);
  color: var(--white-muted);
  cursor: pointer;
  transition: all var(--t-fast);
}

.filter-pill:hover {
  background: var(--onyx-3);
  color: var(--white);
  border-color: rgba(250, 250, 250, 0.25);
}

.filter-pill.active {
  background: var(--acid);
  border-color: var(--acid);
  color: var(--void);
  font-weight: 700;
  box-shadow: 0 0 15px rgba(204, 255, 0, 0.3);
}

.result-count {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--white-muted);
  white-space: nowrap;
}

/* ── Pathway Cards Grid ─────────────────────────────────────── */
.pathway-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

.pathway-card {
  background: var(--onyx-2);
  border: 1px solid rgba(250, 250, 250, 0.08);
  border-radius: var(--r-md);
  padding: 36px 32px 28px;
  display: flex;
  flex-direction: column;
  transition: transform var(--t-fast), border-color var(--t-fast);
  scroll-margin-top: 120px;
}

.pathway-card:hover {
  transform: translateY(-4px);
  border-color: rgba(250, 250, 250, 0.2);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.pathway-category-pill {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--acid);
  background: rgba(204, 255, 0, 0.1);
  padding: 4px 12px;
  border-radius: var(--r-full);
}

.pathway-number {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--white-muted);
}

.card-identity {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 18px;
}

.pathway-symbol {
  width: 58px;
  height: 58px;
  border-radius: var(--r-sm);
  background: var(--onyx-3);
  border: 1px solid rgba(250, 250, 250, 0.08);
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.pathway-symbol svg {
  width: 36px;
  height: 36px;
}

.pathway-subtitle {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--white-muted);
  display: block;
  margin-bottom: 4px;
}

.pathway-headline {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin: 0;
  color: var(--white);
}

.pathway-description {
  font-size: 14px;
  line-height: 1.75;
  color: var(--white-dim);
  margin: 0 0 24px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 28px;
}

.tag-chip {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: var(--r-full);
  background: rgba(250, 250, 250, 0.04);
  border: 1px solid rgba(250, 250, 250, 0.08);
  color: var(--white-dim);
}

/* ── Pathway Expandable Details ─────────────────────────────── */
.pathway-details {
  border-top: 1px solid rgba(250, 250, 250, 0.08);
  margin-top: auto;
  padding-top: 20px;
}

.pathway-details summary {
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--white);
  font-weight: 700;
  user-select: none;
}

.pathway-details summary::-webkit-details-marker {
  display: none;
}

.toggle-icon {
  font-size: 20px;
  color: var(--acid);
  transition: transform var(--t-fast);
}

.pathway-details[open] .toggle-icon {
  transform: rotate(45deg);
}

.detail-content {
  padding-top: 18px;
}

.items-list {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
}

.items-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(250, 250, 250, 0.05);
  font-size: 13px;
  line-height: 1.6;
  color: var(--white-dim);
}

.item-bullet {
  color: var(--acid);
  font-size: 10px;
  margin-top: 2px;
}

.detail-paragraph {
  font-size: 12px;
  line-height: 1.75;
  color: var(--white-muted);
  margin: 0 0 16px;
}

.source-link {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--acid);
  text-decoration: underline;
  text-underline-offset: 4px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: opacity var(--t-fast);
}

.source-link:hover {
  opacity: 0.8;
}

/* ── Empty State ────────────────────────────────────────────── */
.empty-state {
  text-align: center;
  padding: 60px 24px;
  background: var(--onyx-2);
  border: 1px solid rgba(250, 250, 250, 0.1);
  border-radius: var(--r-md);
}

.empty-glyph {
  font-size: 48px;
  color: var(--acid);
  margin-bottom: 16px;
}

.empty-state h3 {
  font-family: var(--font-display);
  font-size: 22px;
  margin: 0 0 12px;
}

.empty-state p {
  color: var(--white-dim);
  font-size: 14px;
  margin: 0 0 24px;
}

/* ── Orientation Steps ──────────────────────────────────────── */
.orientation-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 7vw, 90px);
  padding-top: clamp(70px, 9vw, 110px);
  padding-bottom: clamp(60px, 8vw, 100px);
  align-items: start;
}

.orientation-intro {
  position: sticky;
  top: 100px;
}

.orientation-title {
  font-family: var(--font-display);
  font-size: clamp(34px, 4.2vw, 54px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin: 0 0 24px;
}

.orientation-lead {
  font-size: 15px;
  line-height: 1.8;
  color: var(--white-dim);
  margin: 0;
}

.orientation-steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step-card {
  background: var(--onyx-2);
  border: 1px solid rgba(250, 250, 250, 0.08);
  border-radius: var(--r-md);
  padding: 28px 30px;
  display: flex;
  gap: 24px;
  align-items: flex-start;
  transition: transform var(--t-fast), border-color var(--t-fast);
}

.step-card:hover {
  transform: translateX(6px);
  border-color: var(--acid);
}

.step-num {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  color: var(--acid);
  background: rgba(204, 255, 0, 0.1);
  width: 44px;
  height: 44px;
  border-radius: var(--r-sm);
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.step-copy h3 {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px;
  color: var(--white);
}

.step-copy p {
  font-size: 13px;
  line-height: 1.7;
  color: var(--white-dim);
  margin: 0;
}

/* ── Bottom Callout ─────────────────────────────────────────── */
.bottom-callout {
  padding-top: 20px;
  padding-bottom: 40px;
}

.callout-card {
  background: var(--onyx);
  border: 1px solid rgba(250, 250, 250, 0.1);
  border-radius: var(--r-lg);
  padding: clamp(36px, 6vw, 60px);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.callout-glow {
  position: absolute;
  top: -40%;
  right: -10%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

.callout-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 3.4vw, 44px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.04em;
  margin: 0 0 14px;
}

.callout-desc {
  font-size: 14px;
  line-height: 1.75;
  color: var(--white-dim);
  margin: 0;
  max-width: 520px;
}

/* ── Focus States ───────────────────────────────────────────── */
a:focus-visible,
button:focus-visible,
summary:focus-visible,
input:focus-visible {
  outline: 2px solid var(--acid);
  outline-offset: 4px;
  border-radius: var(--r-xs);
}

/* ── Responsive ─────────────────────────────────────────────── */
@media (max-width: 1024px) {
  .formation-hero {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .path-visual {
    max-width: 540px;
    margin: 0 auto;
    width: 100%;
  }
  .pathway-grid {
    grid-template-columns: 1fr;
  }
  .orientation-section {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .orientation-intro {
    position: static;
  }
  .callout-card {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .filters-and-count {
    flex-direction: column;
    align-items: flex-start;
  }
  .hero-actions {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
}
</style>
