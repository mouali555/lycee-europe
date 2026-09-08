<template>
  <div class="page-wrapper">

    <!-- ══ NAVIGATION ══════════════════════════════════════════ -->
    <nav class="navbar" :class="{ scrolled: isScrolled }">
      <NuxtLink to="/" class="nav-logo">
        <div class="nav-logo-icon">🎓</div>
        <div>
          <span class="nav-logo-text">Lycée Europe</span>
          <span class="nav-logo-sub">Établissement d'excellence</span>
        </div>
      </NuxtLink>

      <ul class="nav-links">
        <li><NuxtLink to="/" class="nav-link active">Accueil</NuxtLink></li>
        <li><a href="#apropos" class="nav-link">À propos</a></li>
        <li><a href="#chiffres" class="nav-link">Chiffres</a></li>
        <li><NuxtLink to="/login" class="btn btn-primary btn-sm">
          <span>✦</span> Espace élève
        </NuxtLink></li>
      </ul>
    </nav>

    <!-- ══ HERO ════════════════════════════════════════════════ -->
    <section class="hero-section">
      <!-- Particules animées -->
      <div class="particles-field" id="particles"></div>

      <!-- Grille de fond -->
      <div class="hero-grid"></div>

      <div class="hero-content container">
        <!-- Badge animé -->
        <div class="badge badge-gradient badge-glow anim-fade-up" style="margin-bottom: 32px;">
          <span class="status-dot"></span>
          Année scolaire 2026 – 2027
        </div>

        <!-- Titre principal -->
        <h1 class="hero-title anim-fade-up delay-1">
          L'excellence<br>
          <span class="text-gradient">réinventée</span>
        </h1>

        <!-- Sous-titre -->
        <p class="hero-subtitle anim-fade-up delay-2">
          Le Lycée Europe, un établissement d'avant-garde qui prépare les esprits de demain.
          Innovation, culture, et ambition au service de chaque élève.
        </p>

        <!-- CTA -->
        <div class="hero-cta anim-fade-up delay-3">
          <NuxtLink to="/login" class="btn btn-primary btn-lg">
            <span>⚡</span>
            Accéder à l'espace élève
          </NuxtLink>
          <a href="#apropos" class="btn btn-glass btn-lg">
            Découvrir le lycée →
          </a>
        </div>

        <!-- Stats rapides -->
        <div class="hero-stats anim-fade-up delay-4">
          <div class="stat-item">
            <span class="stat-num text-gradient">98<span class="stat-pct">%</span></span>
            <span class="stat-label">Taux de réussite au bac</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num text-gradient">1800<span class="stat-pct">+</span></span>
            <span class="stat-label">Élèves actifs</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num text-gradient">60<span class="stat-pct">+</span></span>
            <span class="stat-label">Enseignants passionnés</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num text-gradient">15<span class="stat-pct">+</span></span>
            <span class="stat-label">Clubs & activités</span>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator" @click="scrollDown">
        <div class="scroll-wheel"></div>
        <span>Défiler</span>
      </div>
    </section>

    <!-- ══ À PROPOS ═════════════════════════════════════════════ -->
    <section id="apropos" class="section">
      <div class="container">
        <div class="section-header">
          <div class="badge badge-gradient">Notre établissement</div>
          <h2 class="section-title">Un lycée <span class="text-gradient">d'exception</span></h2>
          <p class="section-subtitle">Au carrefour de la tradition et de l'innovation, le Lycée Europe façonne les leaders de demain.</p>
        </div>

        <div class="features-grid">
          <div
            v-for="(feature, i) in features"
            :key="i"
            class="feature-card card"
            :style="`animation-delay: ${i * 0.1}s`"
          >
            <div class="feature-icon-wrap" :style="`background: ${feature.gradient}`">
              <span class="feature-icon">{{ feature.icon }}</span>
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.desc }}</p>
            <div class="feature-tag">{{ feature.tag }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ CHIFFRES CLÉS ════════════════════════════════════════ -->
    <section id="chiffres" class="section section-dark">
      <div class="container">
        <div class="section-header">
          <div class="badge badge-gradient">En chiffres</div>
          <h2 class="section-title">Des résultats qui <span class="text-gradient">parlent</span></h2>
        </div>

        <div class="metrics-grid">
          <div v-for="(m, i) in metrics" :key="i" class="metric-card glass">
            <div class="metric-glow" :style="`background: ${m.color}`"></div>
            <div class="metric-icon">{{ m.icon }}</div>
            <div class="metric-num" :style="`color: ${m.color}`">{{ m.num }}</div>
            <div class="metric-label">{{ m.label }}</div>
            <div class="metric-bar">
              <div class="metric-fill" :style="`width: ${m.pct}%; background: ${m.color}`"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ ESPACE NUMÉRIQUE ═════════════════════════════════════ -->
    <section class="section">
      <div class="container">
        <div class="digital-section">
          <div class="digital-text">
            <div class="badge badge-gradient">Nouveau</div>
            <h2 class="section-title" style="margin-top: 16px;">Votre espace<br><span class="text-gradient">numérique</span></h2>
            <p class="section-subtitle" style="text-align: left; max-width: 480px;">
              Accédez à votre espace personnel : chat en temps réel avec vos camarades,
              ressources pédagogiques, et bien plus encore.
            </p>
            <div style="margin-top: 32px; display: flex; gap: 16px; flex-wrap: wrap;">
              <NuxtLink to="/login" class="btn btn-primary">
                <span>🚀</span> Se connecter maintenant
              </NuxtLink>
            </div>

            <!-- Features list -->
            <ul class="digital-features">
              <li v-for="f in digitalFeatures" :key="f" class="digital-feature-item">
                <span class="df-check">✓</span>
                {{ f }}
              </li>
            </ul>
          </div>

          <div class="digital-preview">
            <div class="chat-mockup glass-md">
              <div class="chat-mockup-header">
                <div class="cm-dot red"></div>
                <div class="cm-dot yellow"></div>
                <div class="cm-dot green"></div>
                <span class="cm-title">💬 Chat Lycée Europe</span>
              </div>
              <div class="chat-mockup-msgs">
                <div class="cm-msg received anim-fade-up">
                  <div class="cm-avatar">👩‍🎓</div>
                  <div class="cm-bubble">Salut ! T'as les notes de maths ? 📚</div>
                </div>
                <div class="cm-msg sent anim-fade-up delay-2">
                  <div class="cm-bubble">Oui ! Je t'envoie ça tout de suite</div>
                </div>
                <div class="cm-msg received anim-fade-up delay-3">
                  <div class="cm-avatar">👨‍🎓</div>
                  <div class="cm-bubble">Vous avez vu le planning de demain ? 🎯</div>
                </div>
                <div class="cm-msg sent anim-fade-up delay-4">
                  <div class="cm-bubble">Oui, cours de physique annulé ! 🎉</div>
                </div>
                <div class="cm-msg received anim-fade-up delay-5">
                  <div class="cm-avatar">🤖</div>
                  <div class="cm-bubble">
                    <div class="typing-dots">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="chat-mockup-input">
                <span class="cm-placeholder">Écrire un message…</span>
                <div class="cm-send-btn">→</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ FOOTER ═══════════════════════════════════════════════ -->
    <footer class="footer">
      <div class="container">
        <div class="footer-inner">
          <div class="footer-brand">
            <div class="nav-logo-icon" style="margin-bottom: 12px;">🎓</div>
            <div class="nav-logo-text">Lycée Europe</div>
            <p class="footer-desc">Établissement d'excellence formatant les esprits de demain.</p>
          </div>

          <div class="footer-links-group">
            <h4 class="footer-group-title">Navigation</h4>
            <a href="#" class="footer-link">Accueil</a>
            <a href="#apropos" class="footer-link">À propos</a>
            <a href="#chiffres" class="footer-link">Chiffres clés</a>
            <NuxtLink to="/login" class="footer-link">Espace élève</NuxtLink>
          </div>

          <div class="footer-links-group">
            <h4 class="footer-group-title">Contact</h4>
            <a href="mailto:contact@lycee-europe.fr" class="footer-link">📧 contact@lycee-europe.fr</a>
            <a href="tel:+33123456789" class="footer-link">📞 01 23 45 67 89</a>
            <span class="footer-link">📍 Ville, France</span>
          </div>
        </div>

        <div class="divider"></div>

        <div class="footer-bottom">
          <span>© 2026 Lycée Europe. Tous droits réservés.</span>
          <span style="color: var(--text-muted);">Fait avec <span class="text-gradient">❤</span> par les élèves</span>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
useHead({ title: 'Accueil' })

const isScrolled = ref(false)

const features = [
  {
    icon: '🧬',
    title: 'Sciences & Innovation',
    desc: 'Laboratoires de pointe, projets scientifiques ambitieux et partenariats avec des instituts de recherche.',
    tag: 'STEM Excellence',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,.3), rgba(59,130,246,.3))'
  },
  {
    icon: '🌍',
    title: 'Ouverture internationale',
    desc: 'Échanges Erasmus, sections bilingues, et partenariats avec 12 établissements européens.',
    tag: 'Europe & Monde',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,.3), rgba(249,115,22,.3))'
  },
  {
    icon: '🎨',
    title: 'Arts & Culture',
    desc: 'Section artistique, club théâtre, expositions annuelles et résidences d\'artistes.',
    tag: 'Créativité',
    gradient: 'linear-gradient(135deg, rgba(249,115,22,.3), rgba(234,179,8,.3))'
  },
  {
    icon: '⚽',
    title: 'Sport & Équilibre',
    desc: 'Section sportive, sports collectifs et individuels, partenariat avec des clubs régionaux.',
    tag: 'Mens sana',
    gradient: 'linear-gradient(135deg, rgba(20,184,166,.3), rgba(59,130,246,.3))'
  },
  {
    icon: '💻',
    title: 'Numérique & Tech',
    desc: 'NSI, robotique, IA, hackathons annuels et accès à des outils professionnels.',
    tag: 'Future Ready',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,.3), rgba(20,184,166,.3))'
  },
  {
    icon: '🏆',
    title: 'Accompagnement',
    desc: 'Tutorat personnalisé, orientation Parcoursup, préparation aux concours et grandes écoles.',
    tag: 'Réussite garantie',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,.3), rgba(124,58,237,.3))'
  }
]

const metrics = [
  { icon: '🎓', num: '98%', label: 'Taux de réussite au baccalauréat', pct: 98, color: '#a855f7' },
  { icon: '⭐', num: '87%', label: 'Mentions obtenus (TB, B, AB)', pct: 87, color: '#ec4899' },
  { icon: '🏫', num: '1800+', label: 'Élèves de la 2nde à la Terminale', pct: 75, color: '#f97316' },
  { icon: '📚', num: '60+', label: 'Professeurs certifiés & agrégés', pct: 60, color: '#3b82f6' },
  { icon: '🌐', num: '12', label: 'Partenariats européens actifs', pct: 70, color: '#14b8a6' },
  { icon: '🎯', num: '95%', label: 'Orientation en 1er vœu Parcoursup', pct: 95, color: '#f59e0b' }
]

const digitalFeatures = [
  'Chat en temps réel avec vos camarades',
  'Partage de ressources pédagogiques',
  'Notifications instantanées',
  'Profil personnalisé',
  'Salons par matière et par classe'
]

const scrollDown = () => {
  document.getElementById('apropos')?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  // Scroll listener
  const handleScroll = () => { isScrolled.value = window.scrollY > 50 }
  window.addEventListener('scroll', handleScroll)

  // Génération des particules
  generateParticles()

  // Intersection observer pour animations
  observeElements()

  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})

function generateParticles() {
  const field = document.getElementById('particles')
  if (!field) return
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div')
    p.className = 'particle'
    const left = Math.random() * 100
    const delay = Math.random() * 20
    const duration = 8 + Math.random() * 16
    const tx = (Math.random() - 0.5) * 200
    const size = Math.random() * 3 + 1
    p.style.cssText = `
      left: ${left}%;
      animation-duration: ${duration}s;
      animation-delay: -${delay}s;
      --tx: ${tx}px;
      width: ${size}px;
      height: ${size}px;
      opacity: ${0.2 + Math.random() * 0.6};
    `
    field.appendChild(p)
  }
}

function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.feature-card, .metric-card').forEach(el => {
    observer.observe(el)
  })
}
</script>

<style scoped>
/* ── Hero ─────────────────────────────────────────────────── */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: 80px 24px;
  max-width: 900px;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -.03em;
  margin-bottom: 24px;
  color: var(--text-primary);
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 40px;
  line-height: 1.7;
}

.hero-cta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 64px;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
  padding: 28px 32px;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--r-xl);
  max-width: fit-content;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.stat-num {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}

.stat-pct {
  font-size: 1.2rem;
}

.stat-label {
  font-size: .75rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.stat-divider {
  width: 1px;
  height: 48px;
  background: var(--glass-border);
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: .75rem;
  cursor: pointer;
  letter-spacing: .1em;
  text-transform: uppercase;
  transition: color var(--t-base);
  animation: float 3s ease-in-out infinite;
}

.scroll-indicator:hover { color: var(--text-secondary); }

.scroll-wheel {
  width: 24px;
  height: 40px;
  border: 2px solid var(--glass-border-hover);
  border-radius: 12px;
  position: relative;
}

.scroll-wheel::after {
  content: '';
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 8px;
  background: var(--c-purple-2);
  border-radius: 2px;
  animation: scrollWheel 2s ease infinite;
}

@keyframes scrollWheel {
  0% { top: 6px; opacity: 1; }
  100% { top: 22px; opacity: 0; }
}

/* ── Sections ──────────────────────────────────────────────── */
.section {
  padding: 120px 0;
  position: relative;
  z-index: 1;
}

.section-dark {
  background: rgba(0,0,0,.2);
}

.section-header {
  text-align: center;
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -.02em;
  line-height: 1.1;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  text-align: center;
  line-height: 1.7;
}

/* ── Features ──────────────────────────────────────────────── */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) { .features-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .features-grid { grid-template-columns: 1fr; } }

.feature-card {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.feature-icon-wrap {
  width: 60px;
  height: 60px;
  border-radius: var(--r-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,.1);
}

.feature-icon { font-size: 1.8rem; }

.feature-title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
}

.feature-desc {
  font-size: .875rem;
  color: var(--text-secondary);
  line-height: 1.7;
  flex: 1;
}

.feature-tag {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.1);
  border-radius: var(--r-full);
  font-size: .7rem;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--text-muted);
  align-self: flex-start;
}

/* ── Metrics ───────────────────────────────────────────────── */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) { .metrics-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .metrics-grid { grid-template-columns: 1fr; } }

.metric-card {
  padding: 32px;
  border-radius: var(--r-xl);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all var(--t-slow);
}

.metric-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255,255,255,.2);
}

.metric-glow {
  position: absolute;
  top: -40px;
  right: -40px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  opacity: 0.15;
  filter: blur(30px);
}

.metric-icon { font-size: 2rem; }

.metric-num {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
}

.metric-label {
  font-size: .875rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

.metric-bar {
  height: 4px;
  background: rgba(255,255,255,.1);
  border-radius: 2px;
  overflow: hidden;
  margin-top: auto;
}

.metric-fill {
  height: 100%;
  border-radius: 2px;
  transition: width 1.5s ease;
}

/* ── Section numérique ─────────────────────────────────────── */
.digital-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

@media (max-width: 768px) {
  .digital-section { grid-template-columns: 1fr; gap: 48px; }
}

.digital-features {
  list-style: none;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.digital-feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: .9rem;
  color: var(--text-secondary);
}

.df-check {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--c-purple-1), var(--c-pink-1));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .7rem;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 0 12px rgba(168,85,247,.4);
}

/* ── Chat mockup ───────────────────────────────────────────── */
.chat-mockup {
  border-radius: var(--r-xl);
  overflow: hidden;
  box-shadow: var(--glass-shadow-lg), 0 0 60px rgba(168,85,247,.2);
}

.chat-mockup-header {
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0,0,0,.2);
  border-bottom: 1px solid var(--glass-border);
}

.cm-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.cm-dot.red    { background: #ff5f57; }
.cm-dot.yellow { background: #febc2e; }
.cm-dot.green  { background: #28c840; }

.cm-title {
  margin-left: 8px;
  font-size: .85rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.chat-mockup-msgs {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 280px;
}

.cm-msg {
  display: flex;
  align-items: flex-end;
  gap: 10px;
}

.cm-msg.sent {
  flex-direction: row-reverse;
}

.cm-avatar {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.cm-bubble {
  padding: 10px 16px;
  border-radius: 18px;
  font-size: .85rem;
  max-width: 220px;
  line-height: 1.5;
}

.cm-msg.received .cm-bubble {
  background: var(--glass-bg-md);
  border: 1px solid var(--glass-border);
  border-bottom-left-radius: 4px;
  color: var(--text-primary);
}

.cm-msg.sent .cm-bubble {
  background: linear-gradient(135deg, var(--c-purple-1), var(--c-pink-1));
  border-bottom-right-radius: 4px;
  color: #fff;
  box-shadow: 0 4px 16px rgba(168,85,247,.4);
}

.typing-dots {
  display: flex;
  gap: 4px;
  align-items: center;
}

.typing-dots span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--text-muted);
  animation: typing .8s ease infinite;
}
.typing-dots span:nth-child(2) { animation-delay: .15s; }
.typing-dots span:nth-child(3) { animation-delay: .3s; }

.chat-mockup-input {
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(0,0,0,.15);
  border-top: 1px solid var(--glass-border);
}

.cm-placeholder {
  flex: 1;
  font-size: .85rem;
  color: var(--text-muted);
  padding: 10px 14px;
  background: rgba(255,255,255,.06);
  border-radius: var(--r-full);
  border: 1px solid var(--glass-border);
}

.cm-send-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--g-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 0 16px rgba(168,85,247,.5);
}

/* ── Footer ────────────────────────────────────────────────── */
.footer {
  position: relative;
  z-index: 1;
  padding: 80px 0 32px;
  background: rgba(0,0,0,.3);
  border-top: 1px solid var(--glass-border);
}

.footer-inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}

@media (max-width: 768px) {
  .footer-inner { grid-template-columns: 1fr; gap: 32px; }
}

.footer-desc {
  margin-top: 12px;
  font-size: .875rem;
  color: var(--text-muted);
  max-width: 280px;
  line-height: 1.7;
}

.footer-group-title {
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 16px;
}

.footer-link {
  display: block;
  font-size: .875rem;
  color: var(--text-secondary);
  text-decoration: none;
  margin-bottom: 10px;
  transition: color var(--t-base);
}

.footer-link:hover { color: var(--text-primary); }

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  font-size: .8rem;
  color: var(--text-muted);
}
</style>