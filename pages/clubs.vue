<script setup>
import { computed, ref } from 'vue'

useHead({
  title: 'La vie lycéenne — Collectif & Engagement',
  meta: [
    {
      name: 'description',
      content: 'Sport, culture, foyer, MDL et CVL : faites vibrer vos années au Lycée Europe. Projets, énergie collective et liberté de créer à Dunkerque.'
    }
  ]
})

const selectedCategory = ref('Tout découvrir')
const categories = ['Tout découvrir', 'Sport', 'Culture', 'Détente']

const activities = [
  {
    id: 'sport',
    category: 'Sport',
    badge: '01 / ATHLETICS & CO',
    title: 'L’esprit d’équipe.',
    subtitle: 'Association sportive · UNSS',
    description: 'Se retrouver sur le terrain, repousser ses limites ensemble et faire rayonner l’énergie du lycée.',
    theme: 'sport',
    keywords: ['Pratique', 'Rencontres', 'Collectif', 'Dépassement'],
    detail: 'L’association sportive fait battre le cœur de l’établissement. Elle permet de prolonger la pratique sportive, de participer aux compétitions académiques et de partager des moments intenses avec d’autres lycéens.',
    next: 'Rapprochez-vous des professeurs d’EPS pour connaître les activités proposées, les créneaux de cette année et les conditions d’adhésion.'
  },
  {
    id: 'culture',
    category: 'Culture',
    badge: '02 / CINEMA & SIGHT',
    title: 'Un autre regard.',
    subtitle: 'Club Photo & Cinéma-Audiovisuel',
    description: 'Observer, imaginer, documenter. Explorer le langage visuel, maîtriser la lumière et partager sa vision du monde.',
    theme: 'culture',
    keywords: ['Photographie', 'Cinéma', 'Création', 'Audiovisuel'],
    detail: 'Le lycée dispose d’un club photo et d’un cursus cinéma-audiovisuel dynamique. Les élèves participent à des tournages, couvrent les festivals comme Séries Mania et réalisent des projets artistiques collectifs.',
    next: 'Consultez la vie scolaire ou les enseignants référents pour connaître les projets en cours, les accès aux équipements et les modalités de participation.'
  },
  {
    id: 'foyer',
    category: 'Détente',
    badge: '03 / SOCIAL LOUNGE',
    title: 'Des moments pour se retrouver.',
    subtitle: 'Foyer des élèves · Temps partagés',
    description: 'Une pause, une discussion impromptue, une partie de baby-foot ou une session d’écoute. Ces instants qui forgent vos souvenirs.',
    theme: 'relax',
    keywords: ['Pause', 'Échanges', 'Rencontres', 'Communauté'],
    detail: 'Les temps hors cours sont essentiels à l’équilibre et à la cohésion lycéenne. Le foyer et les espaces de convivialité sont animés par les élèves pour décompresser entre deux heures de cours.',
    next: 'La vie scolaire et le bureau de la MDL vous renseignent sur les espaces accessibles, leurs horaires d’ouverture et le règlement de convivialité.'
  }
]

const filteredActivities = computed(() =>
  activities.filter(activity => selectedCategory.value === 'Tout découvrir' || activity.category === selectedCategory.value)
)
</script>

<template>
  <div class="student-life">
    <!-- ══════════════════════════════════════════
         HERO SECTION
    ══════════════════════════════════════════ -->
    <section class="life-hero container">
      <!-- Background Glow & Shapes -->
      <div class="hero-shapes" aria-hidden="true">
        <div class="glow-orb glow-acid"></div>
        <div class="glow-orb glow-hyper"></div>
        <svg class="hero-ring anim-float" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="140" stroke="rgba(204,255,0,0.12)" stroke-width="1.5" stroke-dasharray="8 6"/>
          <circle cx="150" cy="150" r="105" stroke="rgba(0,240,255,0.08)" stroke-width="1"/>
        </svg>
      </div>

      <div class="life-hero-copy">
        <p class="hero-eyebrow text-label-acid">
          <span class="eyebrow-dot"></span> 02 / VIE LYCÉENNE & COLLECTIF
        </p>
        <h1 class="hero-title">
          <span>VOS ANNÉES.</span>
          <span class="ht-outline">VOS IDÉES.</span>
          <span class="ht-acid">VOTRE PLACE.<span class="hero-star" aria-hidden="true">✦</span></span>
        </h1>
        <p class="hero-description">
          Un lycée ne se résume pas à ses salles de cours. C’est un laboratoire d’initiatives,
          un espace d’émancipation où se nouent des amitiés durables et où naissent vos plus grands projets.
        </p>
        <div class="hero-actions">
          <a class="btn-acid btn-acid-lg" href="#activites">
            Trouver ce qui m’anime <span aria-hidden="true">↗</span>
          </a>
          <a class="hero-sublink" href="#engagement">
            Rejoindre la MDL & CVL <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <!-- Right Visual Widget -->
      <div class="life-visual" aria-hidden="true">
        <div class="visual-grid-overlay"></div>
        <div class="visual-top">
          <span class="v-tag">LYCÉE DE L’EUROPE</span>
          <span class="v-coord">51°02'N · 02°22'E</span>
        </div>

        <div class="visual-center">
          <div class="kinetic-rings">
            <svg class="ring-svg" viewBox="0 0 360 360" fill="none">
              <ellipse cx="180" cy="180" rx="160" ry="60" transform="rotate(-30 180 180)" stroke="var(--acid)" stroke-width="1.8" opacity="0.8"/>
              <ellipse cx="180" cy="180" rx="160" ry="60" transform="rotate(30 180 180)" stroke="var(--ice)" stroke-width="1.5" opacity="0.6"/>
              <ellipse cx="180" cy="180" rx="160" ry="60" transform="rotate(90 180 180)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
              <circle cx="58" cy="98" r="6" fill="var(--acid)"/>
              <circle cx="304" cy="254" r="5" fill="var(--ice)"/>
            </svg>
          </div>
          <div class="center-type">
            <span class="ct-small">COLLECTIF</span>
            <strong class="ct-big">FAIRE.</strong>
            <em class="ct-italic">ENSEMBLE.</em>
          </div>
        </div>

        <div class="visual-bottom">
          <span>LA CURIOSITÉ NOUS RASSEMBLE</span>
          <span class="visual-star">✦</span>
        </div>

        <!-- Float Sticker -->
        <div class="floating-sticker">
          <span class="stk-icon">⚡</span>
          <div>
            <span class="stk-label">UNE IDÉE ?</span>
            <strong class="stk-title">À VOUS DE JOUER.</strong>
          </div>
          <span class="stk-arrow">↗</span>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════
         ENGAGEMENT SECTION (MDL & CVL)
    ══════════════════════════════════════════ -->
    <section id="engagement" class="engagement-section">
      <div class="container">
        <div class="section-header">
          <div>
            <p class="section-tag text-label-acid">01 / DÉMOCRATIE & INITIATIVE</p>
            <h2 class="section-title">
              Votre voix.<br>
              <span class="ht-outline">Une vraie</span> <span class="ht-acid">place.</span>
            </h2>
          </div>
          <p class="section-lead">
            Faire bouger les lignes commence par une étincelle et l'audace de la partager.
            Prenez part aux instances représentatives et à l'animation de la communauté.
          </p>
        </div>

        <div class="engagement-grid">
          <!-- MDL Card -->
          <article class="engagement-card card-mdl">
            <div class="card-glow" aria-hidden="true"></div>
            <div class="card-header">
              <span class="card-kicker">01 / DONNER VIE AUX PROJETS</span>
              <div class="card-badge-symbol">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>

            <div class="acronym-wrap">
              <span class="big-acronym">MDL<span class="dot-acid">.</span></span>
              <span class="acronym-sub">Maison des Lycéens</span>
            </div>

            <h3 class="card-heading">L'association créée par et pour les élèves.</h3>
            <p class="card-text">
              Une structure autonome financée pour faire vibrer le campus : programmation culturelle, concerts,
              tournois sportifs, soirées de fin d’année, merchandising et ateliers créatifs.
            </p>

            <div class="engagement-tags">
              <span class="tag-pill">Imaginer</span>
              <span class="tag-pill">Organiser</span>
              <span class="tag-pill">Partager</span>
              <span class="tag-pill">Financer</span>
            </div>

            <details class="engagement-details">
              <summary>
                <span>Comment participer & rejoindre</span>
                <span class="toggle-icon" aria-hidden="true">+</span>
              </summary>
              <div class="detail-body">
                <p>
                  Vous avez envie de lancer un nouveau club, de gérer un budget événementiel ou de participer à la régie son & lumière ?
                  Adressez-vous aux membres du bureau MDL au foyer ou contactez la vie scolaire pour adhérer ou présenter votre projet lors de la prochaine assemblée.
                </p>
              </div>
            </details>
          </article>

          <!-- CVL Card -->
          <article class="engagement-card card-cvl">
            <div class="card-glow" aria-hidden="true"></div>
            <div class="card-header">
              <span class="card-kicker">02 / REPRÉSENTATION ÉLECTIVE</span>
              <div class="card-badge-symbol cvl-symbol">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  <path d="M8 10h8M8 14h4"/>
                </svg>
              </div>
            </div>

            <div class="acronym-wrap">
              <span class="big-acronym">CVL<span class="dot-ice">.</span></span>
              <span class="acronym-sub">Conseil de la Vie Lycéenne</span>
            </div>

            <h3 class="card-heading">Faire entendre votre parole en conseil.</h3>
            <p class="card-text">
              L'instance officielle où les représentants élus dialoguent d'égal à égal avec la direction et les enseignants.
              Aménagement des espaces, restauration, temps de pause, transition écologique et bien-être.
            </p>

            <div class="engagement-tags">
              <span class="tag-pill">Écouter</span>
              <span class="tag-pill">Proposer</span>
              <span class="tag-pill">Représenter</span>
              <span class="tag-pill">Agir</span>
            </div>

            <details class="engagement-details">
              <summary>
                <span>Comment s'impliquer & candidater</span>
                <span class="toggle-icon" aria-hidden="true">+</span>
              </summary>
              <div class="detail-body">
                <p>
                  Chaque année en octobre ont lieu les élections lycéennes. Tout élève peut se porter candidat en binôme avec son suppléant.
                  En cours d'année, vous pouvez soumettre des doléances et idées concrètes directement à vos délégués CVL ou via la boîte à idées.
                </p>
              </div>
            </details>
          </article>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════
         ACTIVITÉS SECTION
    ══════════════════════════════════════════ -->
    <section id="activites" class="activities-section container">
      <div class="section-header">
        <div>
          <p class="section-tag text-label-acid">02 / EXPÉRIENCES & ATELIERS</p>
          <h2 class="section-title">
            Du temps pour<br>
            <span class="ht-outline">ce qui vous</span> <span class="ht-acid">anime.</span>
          </h2>
        </div>
        <p class="section-lead">
          Sur le terrain de sport, dans la chambre noire ou entre deux cours au foyer :
          explorez les sphères d’activité qui rythment le quotidien du Lycée Europe.
        </p>
      </div>

      <!-- Filter bar -->
      <div class="activity-toolbar">
        <div class="activity-filters" role="group" aria-label="Filtrer les activités">
          <button
            v-for="category in categories"
            :key="category"
            type="button"
            class="filter-pill"
            :class="{ active: selectedCategory === category }"
            :aria-pressed="selectedCategory === category"
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>
        <span class="filter-count" aria-live="polite">
          {{ filteredActivities.length }} univers actif{{ filteredActivities.length > 1 ? 's' : '' }}
        </span>
      </div>

      <!-- Activities Grid -->
      <div class="activities-grid">
        <article
          v-for="activity in filteredActivities"
          :key="activity.id"
          class="activity-card"
          :class="`theme-${activity.theme}`"
        >
          <div class="card-visual-top">
            <div class="visual-header">
              <span class="category-badge">{{ activity.badge }}</span>
              <span class="category-name">{{ activity.category }}</span>
            </div>

            <!-- Visual Art / SVG illustration -->
            <div class="visual-canvas" aria-hidden="true">
              <svg v-if="activity.id === 'sport'" viewBox="0 0 320 200" fill="none" class="act-svg">
                <circle cx="160" cy="100" r="70" stroke="var(--acid)" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6"/>
                <circle cx="160" cy="100" r="50" stroke="var(--acid)" stroke-width="2"/>
                <path d="M90 100h140M160 30v140" stroke="var(--acid)" stroke-width="1.5" opacity="0.5"/>
                <path d="M110 55c50 20 50 70 0 90M210 55c-50 20-50 70 0 90" stroke="var(--acid)" stroke-width="2"/>
                <circle cx="240" cy="50" r="4" fill="var(--acid)"/>
                <circle cx="80" cy="150" r="5" fill="var(--acid)"/>
              </svg>

              <svg v-else-if="activity.id === 'culture'" viewBox="0 0 320 200" fill="none" class="act-svg">
                <path d="M90 70h35l10-18h50l10 18h35v90H90V70z" stroke="var(--ice)" stroke-width="2" stroke-linejoin="round"/>
                <circle cx="160" cy="115" r="32" stroke="var(--ice)" stroke-width="2"/>
                <circle cx="160" cy="115" r="20" stroke="var(--ice)" stroke-width="1.5" stroke-dasharray="3 3"/>
                <circle cx="215" cy="85" r="4" fill="var(--ice)"/>
                <line x1="90" y1="150" x2="230" y2="150" stroke="var(--ice)" stroke-width="1.5" opacity="0.5"/>
                <circle cx="250" cy="55" r="6" stroke="var(--hyper)" stroke-width="1.5"/>
              </svg>

              <svg v-else viewBox="0 0 320 200" fill="none" class="act-svg">
                <rect x="90" y="50" width="90" height="70" rx="4" stroke="var(--hyper)" stroke-width="2"/>
                <path d="M135 120v25l25-25h20" stroke="var(--hyper)" stroke-width="2"/>
                <rect x="150" y="80" width="80" height="60" rx="4" stroke="rgba(250,250,250,0.6)" stroke-width="1.5" stroke-dasharray="4 4"/>
                <line x1="105" y1="75" x2="165" y2="75" stroke="var(--hyper)" stroke-width="2"/>
                <line x1="105" y1="95" x2="145" y2="95" stroke="var(--hyper)" stroke-width="1.5" opacity="0.6"/>
                <circle cx="240" cy="60" r="5" fill="var(--acid)"/>
              </svg>
            </div>
          </div>

          <div class="activity-content">
            <p class="act-subtitle">{{ activity.subtitle }}</p>
            <h3 class="act-title">{{ activity.title }}</h3>
            <p class="act-desc">{{ activity.description }}</p>

            <div class="act-keywords">
              <span v-for="keyword in activity.keywords" :key="keyword" class="keyword-pill">
                {{ keyword }}
              </span>
            </div>

            <details class="act-details">
              <summary>
                <span>En savoir plus</span>
                <span class="toggle-icon" aria-hidden="true">+</span>
              </summary>
              <div class="act-expanded">
                <p>{{ activity.detail }}</p>
                <div class="next-step-box">
                  <strong class="next-title">Comment démarrer :</strong>
                  <p>{{ activity.next }}</p>
                </div>
              </div>
            </details>
          </div>
        </article>
      </div>

      <div class="activities-footer-note">
        <p>
          Les plannings et les activités peuvent évoluer en cours d’année scolaire selon les initiatives des élèves.
          <a href="https://lycee-europe-dunkerque.fr/" target="_blank" rel="noopener noreferrer" class="link-external">
            Consulter les actualités officielles du lycée ↗
          </a>
        </p>
      </div>
    </section>

    <!-- ══════════════════════════════════════════
         CALL TO ACTION / INITIATIVE MANIFESTO
    ══════════════════════════════════════════ -->
    <section class="container idea-section">
      <div class="idea-banner">
        <div class="idea-glow" aria-hidden="true"></div>
        <div class="idea-symbol" aria-hidden="true">
          <span>✦</span>
        </div>
        <div class="idea-copy">
          <p class="idea-eyebrow text-label-acid">INVENTER DEMAIN</p>
          <h2 class="idea-title">
            Et si le prochain grand projet<br>
            <span class="ht-outline">commençait par</span> <span class="ht-acid">vous ?</span>
          </h2>
          <p class="idea-lead">
            Un club d'échecs, une webradio, un journal lycéen, une friperie solidaire ou un hackathon :
            présentez votre vision au bureau de la MDL ou à la vie scolaire. Les moyens techniques et logistiques vous attendent.
          </p>
        </div>
        <div class="idea-action">
          <a class="btn-acid btn-acid-lg" href="#engagement">
            Découvrir les interlocuteurs <span aria-hidden="true">↑</span>
          </a>
          <NuxtLink to="/chat" class="btn-ghost-icon">
            En discuter sur le chat <span>↗</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ── Container & Global Reset ───────────────────────────────── */
.student-life {
  background: var(--void);
  color: var(--white);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  padding-bottom: 96px;
}

/* ── Hero Section ───────────────────────────────────────────── */
.life-hero {
  display: grid;
  grid-template-columns: 1.15fr 0.9fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;
  padding-top: clamp(60px, 8vw, 110px);
  padding-bottom: clamp(60px, 7vw, 100px);
  position: relative;
}

.hero-shapes {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.glow-orb {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.15;
}

.glow-acid {
  background: var(--acid);
  top: 10%;
  left: -10%;
}

.glow-hyper {
  background: var(--hyper);
  bottom: 10%;
  right: -5%;
  opacity: 0.1;
}

.hero-ring {
  position: absolute;
  top: 50%;
  left: 45%;
  width: 320px;
  height: 320px;
  transform: translate(-50%, -50%);
}

.life-hero-copy {
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

.hero-description {
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

/* ── Right Visual Widget ────────────────────────────────────── */
.life-visual {
  position: relative;
  aspect-ratio: 1 / 1.08;
  background: var(--onyx-2);
  border: 1px solid rgba(250, 250, 250, 0.1);
  border-radius: var(--r-md);
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px;
  isolation: isolate;
}

.visual-grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(250, 250, 250, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(250, 250, 250, 0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
}

.visual-top,
.visual-bottom {
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

.visual-center {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.kinetic-rings {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ring-svg {
  width: 90%;
  height: 90%;
  animation: slow-rotate 35s linear infinite;
}

@keyframes slow-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.center-type {
  text-align: center;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ct-small {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.25em;
  color: var(--ice);
  margin-bottom: 6px;
}

.ct-big {
  font-family: var(--font-display);
  font-size: clamp(48px, 6vw, 68px);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.05em;
  color: var(--white);
}

.ct-italic {
  font-family: var(--font-display);
  font-size: clamp(38px, 5vw, 56px);
  font-style: italic;
  font-weight: 700;
  line-height: 1;
  color: var(--acid);
  text-shadow: 0 0 20px rgba(204, 255, 0, 0.4);
}

.visual-star {
  color: var(--acid);
  font-size: 14px;
}

.floating-sticker {
  position: absolute;
  right: 18px;
  bottom: 24px;
  background: var(--acid);
  color: var(--void);
  padding: 12px 18px;
  border-radius: var(--r-sm);
  display: flex;
  align-items: center;
  gap: 12px;
  transform: rotate(-3deg);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  z-index: 4;
  transition: transform var(--t-fast);
}

.floating-sticker:hover {
  transform: rotate(0deg) scale(1.04);
}

.stk-icon {
  font-size: 20px;
}

.stk-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.1em;
  font-weight: 700;
}

.stk-title {
  display: block;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.stk-arrow {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 800;
  margin-left: 4px;
}

/* ── Section Header ─────────────────────────────────────────── */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
  margin-bottom: 50px;
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

/* ── Engagement Section (MDL & CVL) ─────────────────────────── */
.engagement-section {
  background: var(--onyx);
  border-top: 1px solid rgba(250, 250, 250, 0.07);
  border-bottom: 1px solid rgba(250, 250, 250, 0.07);
  padding: clamp(70px, 9vw, 110px) 0;
  scroll-margin-top: 100px;
  position: relative;
}

.engagement-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

.engagement-card {
  background: var(--onyx-2);
  border: 1px solid rgba(250, 250, 250, 0.08);
  border-radius: var(--r-md);
  padding: 40px 36px 32px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform var(--t-fast), border-color var(--t-fast);
}

.engagement-card:hover {
  transform: translateY(-4px);
  border-color: rgba(250, 250, 250, 0.2);
}

.card-mdl:hover {
  border-color: var(--acid);
}

.card-cvl:hover {
  border-color: var(--ice);
}

.card-glow {
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(80px);
  opacity: 0.12;
}

.card-mdl .card-glow {
  background: var(--acid);
}

.card-cvl .card-glow {
  background: var(--ice);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
}

.card-kicker {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--white-muted);
}

.card-badge-symbol {
  width: 44px;
  height: 44px;
  border-radius: var(--r-sm);
  background: rgba(204, 255, 0, 0.12);
  color: var(--acid);
  display: grid;
  place-items: center;
}

.cvl-symbol {
  background: rgba(0, 240, 255, 0.12);
  color: var(--ice);
}

.acronym-wrap {
  margin-bottom: 20px;
}

.big-acronym {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(68px, 8vw, 92px);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.06em;
  color: var(--white);
}

.dot-acid {
  color: var(--acid);
}

.dot-ice {
  color: var(--ice);
}

.acronym-sub {
  display: block;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--white-muted);
  margin-top: 8px;
}

.card-heading {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.3;
  margin: 0 0 14px;
  color: var(--white);
}

.card-text {
  font-size: 14px;
  line-height: 1.75;
  color: var(--white-dim);
  margin: 0 0 28px;
  flex: 1;
}

.engagement-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 30px;
}

.tag-pill {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: var(--r-full);
  background: rgba(250, 250, 250, 0.05);
  border: 1px solid rgba(250, 250, 250, 0.1);
  color: var(--white-dim);
}

/* ── Expandable Details ─────────────────────────────────────── */
.engagement-details {
  border-top: 1px solid rgba(250, 250, 250, 0.1);
  padding-top: 20px;
}

.engagement-details summary {
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

.engagement-details summary::-webkit-details-marker {
  display: none;
}

.toggle-icon {
  font-size: 20px;
  line-height: 1;
  color: var(--acid);
  transition: transform var(--t-fast);
}

.engagement-details[open] .toggle-icon {
  transform: rotate(45deg);
}

.detail-body {
  padding-top: 16px;
  font-size: 13px;
  line-height: 1.8;
  color: var(--white-dim);
}

/* ── Activités Section ──────────────────────────────────────── */
.activities-section {
  padding-top: clamp(70px, 9vw, 110px);
  padding-bottom: clamp(60px, 8vw, 100px);
  scroll-margin-top: 100px;
}

.activity-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 36px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(250, 250, 250, 0.08);
}

.activity-filters {
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

.filter-count {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--white-muted);
}

/* ── Activities Grid ────────────────────────────────────────── */
.activities-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.activity-card {
  background: var(--onyx);
  border: 1px solid rgba(250, 250, 250, 0.08);
  border-radius: var(--r-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform var(--t-fast), border-color var(--t-fast);
}

.activity-card:hover {
  transform: translateY(-4px);
  border-color: rgba(250, 250, 250, 0.22);
}

.card-visual-top {
  height: 200px;
  background: var(--onyx-2);
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(250, 250, 250, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px 20px;
}

.visual-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.category-badge {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--acid);
}

.category-name {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--white-muted);
  background: rgba(250, 250, 250, 0.06);
  padding: 4px 10px;
  border-radius: var(--r-full);
}

.visual-canvas {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.act-svg {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.activity-content {
  padding: 28px 24px 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.act-subtitle {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--white-muted);
  margin: 0 0 10px;
}

.act-title {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin: 0 0 12px;
  color: var(--white);
}

.act-desc {
  font-size: 13px;
  line-height: 1.7;
  color: var(--white-dim);
  margin: 0 0 20px;
  flex: 1;
}

.act-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 24px;
}

.keyword-pill {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.08em;
  padding: 4px 10px;
  border-radius: var(--r-full);
  background: rgba(250, 250, 250, 0.04);
  border: 1px solid rgba(250, 250, 250, 0.08);
  color: var(--white-dim);
}

.act-details {
  border-top: 1px solid rgba(250, 250, 250, 0.08);
  padding-top: 18px;
}

.act-details summary {
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

.act-details summary::-webkit-details-marker {
  display: none;
}

.act-details[open] .toggle-icon {
  transform: rotate(45deg);
}

.act-expanded {
  padding-top: 14px;
  font-size: 12px;
  line-height: 1.75;
  color: var(--white-dim);
}

.next-step-box {
  margin-top: 14px;
  padding: 12px 14px;
  background: var(--onyx-2);
  border-left: 2px solid var(--acid);
  border-radius: 0 var(--r-xs) var(--r-xs) 0;
}

.next-title {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--acid);
  display: block;
  margin-bottom: 4px;
}

.activities-footer-note {
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid rgba(250, 250, 250, 0.08);
  font-size: 12px;
  color: var(--white-muted);
  line-height: 1.7;
}

.link-external {
  color: var(--acid);
  text-decoration: underline;
  text-underline-offset: 4px;
  margin-left: 8px;
  transition: opacity var(--t-fast);
}

.link-external:hover {
  opacity: 0.8;
}

/* ── Idea Section (Manifesto Banner) ────────────────────────── */
.idea-section {
  padding-top: 30px;
  padding-bottom: 40px;
}

.idea-banner {
  background: var(--onyx);
  border: 1px solid rgba(250, 250, 250, 0.1);
  border-radius: var(--r-lg);
  padding: clamp(36px, 6vw, 64px);
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 80px 1.4fr 1fr;
  align-items: center;
  gap: 40px;
}

.idea-glow {
  position: absolute;
  top: -50%;
  left: 20%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(204, 255, 0, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

.idea-symbol {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: var(--acid);
  color: var(--void);
  display: grid;
  place-items: center;
  font-size: 32px;
  font-weight: 800;
  box-shadow: 0 0 30px rgba(204, 255, 0, 0.4);
}

.idea-eyebrow {
  margin-bottom: 12px;
}

.idea-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 3.4vw, 44px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.04em;
  margin: 0 0 16px;
}

.idea-lead {
  font-size: 14px;
  line-height: 1.75;
  color: var(--white-dim);
  margin: 0;
  max-width: 540px;
}

.idea-action {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}

.btn-ghost-icon {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--white-muted);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  transition: color var(--t-fast);
}

.btn-ghost-icon:hover {
  color: var(--white);
}

/* ── Focus States ───────────────────────────────────────────── */
a:focus-visible,
button:focus-visible,
summary:focus-visible {
  outline: 2px solid var(--acid);
  outline-offset: 4px;
  border-radius: var(--r-xs);
}

/* ── Responsive ─────────────────────────────────────────────── */
@media (max-width: 1024px) {
  .life-hero {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .life-visual {
    max-width: 540px;
    margin: 0 auto;
    width: 100%;
  }
  .activities-grid {
    grid-template-columns: 1fr 1fr;
  }
  .idea-banner {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .idea-symbol {
    display: none;
  }
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .engagement-grid {
    grid-template-columns: 1fr;
  }
  .activities-grid {
    grid-template-columns: 1fr;
  }
  .activity-toolbar {
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
