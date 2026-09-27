<script setup>
useHead({
  title: 'À propos & Confidentialité — Mentions Légales',
  meta: [
    {
      name: 'description',
      content: 'Découvrez la philosophie du projet Lycée Europe, la gouvernance de vos données, l’architecture technique et les sources documentaires du portail.'
    }
  ]
})
</script>

<template>
  <main class="information-page">
    <!-- ══════════════════════════════════════════
         INTRO HEADER
    ══════════════════════════════════════════ -->
    <header class="information-intro info-container">
      <p class="info-eyebrow text-label-acid">
        <span class="eyebrow-dot"></span> 04 / GOUVERNANCE & TRANSPARENCE
      </p>
      <h1 class="info-title">
        <span>UN ESPACE OUVERT.</span>
        <span class="ht-outline">DES REPÈRES</span>
        <span class="ht-acid">CLAIRS.<span class="info-star" aria-hidden="true">✦</span></span>
      </h1>
      <p class="info-lead">
        À propos de cette plateforme indépendante, de la gestion de vos données et de la déontologie qui guide cet espace numérique.
      </p>
    </header>

    <!-- ══════════════════════════════════════════
         MAIN LAYOUT (SIDEBAR + CONTENT)
    ══════════════════════════════════════════ -->
    <div class="information-layout info-container">
      <!-- Sticky Sidebar -->
      <aside class="information-sidebar">
        <nav aria-label="Sommaire des sections" class="info-nav">
          <a href="#projet" class="nav-item">
            <span class="item-num">01 //</span>
            <span class="item-label">Le projet</span>
            <span class="item-arrow" aria-hidden="true">↗</span>
          </a>
          <a href="#donnees" class="nav-item">
            <span class="item-num">02 //</span>
            <span class="item-label">Vos données</span>
            <span class="item-arrow" aria-hidden="true">↗</span>
          </a>
          <a href="#preferences" class="nav-item">
            <span class="item-num">03 //</span>
            <span class="item-label">Votre navigation</span>
            <span class="item-arrow" aria-hidden="true">↗</span>
          </a>
          <a href="#credits" class="nav-item">
            <span class="item-num">04 //</span>
            <span class="item-label">Sources & crédits</span>
            <span class="item-arrow" aria-hidden="true">↗</span>
          </a>
        </nav>

        <!-- Official Lycée Notice Box -->
        <div class="official-notice-card">
          <div class="notice-icon" aria-hidden="true">✦</div>
          <span class="notice-badge">CANAL OFFICIEL</span>
          <h2 class="notice-heading">Démarches scolaires & administratives</h2>
          <p class="notice-desc">
            Pour toute inscription, dossier Parcoursup, scolarité officielle ou contact avec le secrétariat, consultez le portail institutionnel.
          </p>
          <a href="https://www.lycee-europe-dunkerque.fr/" target="_blank" rel="noopener noreferrer" class="notice-btn">
            Site de l’établissement <span aria-hidden="true">↗</span>
          </a>
        </div>
      </aside>

      <!-- Articles Content -->
      <div class="information-content">
        <!-- Section 01 -->
        <section id="projet" aria-labelledby="project-heading" class="info-section">
          <div class="section-tag-line">
            <span class="section-number">01 / À PROPOS DE LA PLATEFORME</span>
          </div>
          <h2 id="project-heading" class="section-headline">Un projet communautaire autour du lycée.</h2>
          <p>
            Ce portail est une initiative indépendante de présentation, de design et de communauté autour du <strong>Lycée de l’Europe à Dunkerque</strong>.
            Il réunit la découverte dynamique des filières, un espace d’échange en temps réel et le studio créatif <strong>Nexus</strong>.
          </p>
          <p>
            Il ne se substitue pas au site institutionnel du Ministère de l’Éducation Nationale.
            Les démarches officielles, les formalités de rentrée et les informations légales relèvent du
            <a href="https://www.lycee-europe-dunkerque.fr/" target="_blank" rel="noopener noreferrer" class="text-link">
              site officiel du Lycée de l’Europe ↗
            </a>.
          </p>
        </section>

        <!-- Section 02 -->
        <section id="donnees" aria-labelledby="data-heading" class="info-section">
          <div class="section-tag-line">
            <span class="section-number">02 / VOTRE COMPTE & VOS DONNÉES</span>
          </div>
          <h2 id="data-heading" class="section-headline">Comprendre ce que vous partagez.</h2>

          <div class="data-block">
            <h3 class="data-title">Authentification & Profils</h3>
            <p>
              L’espace communautaire utilise <strong>Firebase Authentication</strong> (Google Cloud Platform) pour gérer les sessions sécurisées par e-mail ou via un compte Google.
              Votre adresse e-mail, pseudonyme et identifiant unique servent exclusivement à vous reconnaître dans l’espace d’échange.
            </p>
          </div>

          <div class="data-block">
            <h3 class="data-title">Messages & Pièces Jointes</h3>
            <p>
              Les flux de conversation sont enregistrés sur <strong>Cloud Firestore</strong> et les éventuelles pièces jointes sur <strong>Firebase Storage</strong>.
              Les salons étant des espaces d’échange collectifs, les messages y sont accessibles à tous les membres connectés du salon concerné.
            </p>
            <p>
              Adoptez les règles fondamentales de prudence numérique : ne partagez jamais de données personnelles sensibles, de coordonnées bancaires ou de mots de passe.
            </p>
          </div>

          <div class="data-block">
            <h3 class="data-title">Gestion de vos données</h3>
            <p>
              Pour toute demande de rectification ou de suppression de vos contributions ou de votre compte, adressez-vous directement aux modérateurs de la communauté ou aux administrateurs du projet Firebase.
            </p>
          </div>
        </section>

        <!-- Section 03 -->
        <section id="preferences" aria-labelledby="preferences-heading" class="info-section">
          <div class="section-tag-line">
            <span class="section-number">03 / NAVIGATEUR & EXPÉRIENCE</span>
          </div>
          <h2 id="preferences-heading" class="section-headline">Votre appareil garde le contrôle.</h2>
          <p>
            Les préférences d'interface sont conservées en local dans le stockage de votre navigateur (LocalStorage).
            L'option « Rester connecté sur cet appareil » maintient la persistance de votre session Firebase au-delà de la fermeture de la fenêtre.
          </p>
          <p>
            Sur un poste partagé (en salle informatique ou au CDI), pensez toujours à vous déconnecter en fin d’utilisation via le bouton prévu à cet effet dans la barre latérale du chat.
          </p>
          <p>
            Les typographies modernes <em>Syne</em>, <em>Space Grotesk</em> et <em>Space Mono</em> sont servies via Google Fonts.
            Leur affichage peut impliquer un appel sécurisé aux réseaux de diffusion de contenu.
          </p>
        </section>

        <!-- Section 04 -->
        <section id="credits" aria-labelledby="credits-heading" class="info-section">
          <div class="section-tag-line">
            <span class="section-number">04 / SOURCES & CRÉDITS CRÉATIFS</span>
          </div>
          <h2 id="credits-heading" class="section-headline">Des contenus, des origines.</h2>

          <div class="source-links-grid">
            <a href="https://www.lycee-europe-dunkerque.fr/" target="_blank" rel="noopener noreferrer" class="source-card">
              <div>
                <strong class="source-name">Le site officiel du Lycée de l’Europe</strong>
                <span class="source-desc">Présentation des cursus, vie scolaire et calendrier</span>
              </div>
              <span class="source-arrow" aria-hidden="true">↗</span>
            </a>

            <a href="https://www.onisep.fr/ressources/structures-enseignement/hauts-de-france/nord/lycee-de-l-europe" target="_blank" rel="noopener noreferrer" class="source-card">
              <div>
                <strong class="source-name">Fiche établissement ONISEP</strong>
                <span class="source-desc">Nomenclature officielle des spécialités et filières BTS</span>
              </div>
              <span class="source-arrow" aria-hidden="true">↗</span>
            </a>
          </div>

          <div class="credits-notes">
            <p>
              <strong>Iconographie du campus :</strong> Photographies © Lycée de l'Europe Dunkerque & A-Z Production.
            </p>
            <p>
              <strong>Univers Nexus :</strong> Les clips vidéo <em>Submerge</em> et <em>Chivalry</em> ainsi que le concept <em>Genesis</em> sont des œuvres visuelles originales intégrées au studio créatif.
            </p>
          </div>
        </section>
      </div>
    </div>

    <!-- ══════════════════════════════════════════
         FOOTER RETURN CALLOUT
    ══════════════════════════════════════════ -->
    <div class="information-end info-container">
      <span class="end-quote">La curiosité commence ici. L'exploration continue.</span>
      <NuxtLink to="/" class="end-link">
        Retour à l’accueil <span aria-hidden="true">↗</span>
      </NuxtLink>
    </div>
  </main>
</template>

<style scoped>
/* ── Container & Global Reset ───────────────────────────────── */
.information-page {
  background: var(--void);
  color: var(--white);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  padding-bottom: 96px;
}

.info-container {
  width: min(var(--container-max), calc(100% - var(--container-pad) * 2));
  margin-inline: auto;
}

/* ── Intro Header ───────────────────────────────────────────── */
.information-intro {
  padding-top: clamp(60px, 8vw, 100px);
  padding-bottom: clamp(40px, 6vw, 60px);
  border-bottom: 1px solid rgba(250, 250, 250, 0.08);
}

.info-eyebrow {
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

.info-title {
  font-family: var(--font-display);
  font-size: clamp(46px, 6vw, 80px);
  font-weight: 800;
  line-height: 0.98;
  letter-spacing: -0.05em;
  margin: 0 0 24px;
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

.info-star {
  font-size: 0.6em;
  color: var(--acid);
}

.info-lead {
  font-size: clamp(15px, 1.2vw, 17px);
  line-height: 1.75;
  color: var(--white-dim);
  max-width: 600px;
  margin: 0;
}

/* ── Main Layout ────────────────────────────────────────────── */
.information-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: clamp(40px, 6vw, 80px);
  padding-top: 50px;
  align-items: flex-start;
}

/* ── Sidebar & Nav ──────────────────────────────────────────── */
.information-sidebar {
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.info-nav {
  display: flex;
  flex-direction: column;
  background: var(--onyx-2);
  border: 1px solid rgba(250, 250, 250, 0.08);
  border-radius: var(--r-md);
  overflow: hidden;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  color: var(--white-dim);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(250, 250, 250, 0.06);
  transition: all var(--t-fast);
}

.nav-item:last-child {
  border-bottom: none;
}

.nav-item:hover {
  background: var(--onyx-3);
  color: var(--acid);
}

.item-num {
  color: var(--acid);
  font-size: 10px;
}

.item-arrow {
  margin-left: auto;
  opacity: 0.6;
}

/* ── Official Notice Card ───────────────────────────────────── */
.official-notice-card {
  background: var(--onyx-2);
  border: 1px solid rgba(204, 255, 0, 0.3);
  border-radius: var(--r-md);
  padding: 28px 24px;
  position: relative;
  overflow: hidden;
}

.notice-icon {
  color: var(--acid);
  font-size: 20px;
  margin-bottom: 12px;
}

.notice-badge {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--acid);
  display: block;
  margin-bottom: 8px;
}

.notice-heading {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 10px;
  color: var(--white);
}

.notice-desc {
  font-size: 12px;
  line-height: 1.7;
  color: var(--white-dim);
  margin: 0 0 20px;
}

.notice-btn {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--void);
  background: var(--acid);
  padding: 10px 16px;
  border-radius: var(--r-xs);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 700;
  transition: opacity var(--t-fast);
}

.notice-btn:hover {
  opacity: 0.9;
}

/* ── Articles Content ───────────────────────────────────────── */
.info-section {
  padding-bottom: 48px;
  margin-bottom: 48px;
  border-bottom: 1px solid rgba(250, 250, 250, 0.08);
  scroll-margin-top: 120px;
}

.info-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.section-tag-line {
  margin-bottom: 12px;
}

.section-number {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--acid);
}

.section-headline {
  font-family: var(--font-display);
  font-size: clamp(28px, 3.2vw, 42px);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin: 0 0 20px;
  color: var(--white);
}

.info-section p {
  font-size: 14px;
  line-height: 1.85;
  color: var(--white-dim);
  margin: 0 0 18px;
  max-width: 720px;
}

.text-link {
  color: var(--acid);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.data-block {
  background: var(--onyx-2);
  border: 1px solid rgba(250, 250, 250, 0.08);
  border-radius: var(--r-md);
  padding: 24px 28px;
  margin-bottom: 20px;
}

.data-title {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 10px;
  color: var(--white);
}

.data-block p {
  margin: 0 0 10px;
}

.data-block p:last-child {
  margin-bottom: 0;
}

/* ── Source Links Grid ──────────────────────────────────────── */
.source-links-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 24px 0 32px;
}

.source-card {
  background: var(--onyx-2);
  border: 1px solid rgba(250, 250, 250, 0.1);
  border-radius: var(--r-md);
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: inherit;
  transition: border-color var(--t-fast), transform var(--t-fast);
}

.source-card:hover {
  border-color: var(--acid);
  transform: translateY(-2px);
}

.source-name {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 700;
  color: var(--white);
  display: block;
  margin-bottom: 4px;
}

.source-desc {
  font-size: 12px;
  color: var(--white-muted);
  display: block;
}

.source-arrow {
  color: var(--acid);
  font-size: 18px;
}

.credits-notes {
  border-left: 2px solid var(--acid);
  padding-left: 18px;
  margin-top: 24px;
}

.credits-notes p {
  font-size: 13px;
  margin-bottom: 8px;
}

/* ── Footer Return Bar ──────────────────────────────────────── */
.information-end {
  margin-top: 60px;
  padding-top: 32px;
  border-top: 1px solid rgba(250, 250, 250, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.end-quote {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--white-muted);
}

.end-link {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--acid);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  transition: opacity var(--t-fast);
}

.end-link:hover {
  opacity: 0.8;
}

/* ── Focus States ───────────────────────────────────────────── */
a:focus-visible {
  outline: 2px solid var(--acid);
  outline-offset: 4px;
  border-radius: var(--r-xs);
}

/* ── Responsive ─────────────────────────────────────────────── */
@media (max-width: 1024px) {
  .information-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .information-sidebar {
    position: static;
  }
  .source-links-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .information-end {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
}
</style>
