<template>
  <main class="information-page">
    <header class="information-intro">
      <div class="info-container">
        <div class="intro-kicker"><span class="info-eyebrow"><span /> Le portail, en toute clarté</span><span>INFORMATIONS / 04</span></div>
        <div class="intro-layout"><div><h1>Tout est<br /><span>plus clair.</span></h1><p>Le projet, vos données, vos choix.<br />Les repères essentiels pour explorer sereinement.</p></div><div class="clarity-symbol" aria-hidden="true">✳<span>UN ESPACE OUVERT<br />DES REPÈRES CLAIRS</span></div></div>
        <div class="intro-bottom"><span>À propos & confidentialité</span><a href="#projet">L’essentiel, juste ici <span aria-hidden="true">↓</span></a></div>
      </div>
    </header>

    <div class="information-layout info-container">
      <aside class="information-sidebar">
        <span class="sidebar-label">DANS CETTE PAGE</span>
        <nav aria-label="Sommaire des informations">
          <a href="#projet"><span>01</span> Le projet <span aria-hidden="true">↗</span></a>
          <a href="#donnees"><span>02</span> Vos données <span aria-hidden="true">↗</span></a>
          <a href="#preferences"><span>03</span> Votre navigation <span aria-hidden="true">↗</span></a>
          <a href="#credits"><span>04</span> Sources & crédits <span aria-hidden="true">↗</span></a>
        </nav>
        <div class="official-note"><span aria-hidden="true">↗</span><h2>À la bonne adresse.</h2><p>Pour une démarche scolaire ou une information administrative, consultez le site officiel du lycée.</p><a href="https://www.lycee-europe-dunkerque.fr/" target="_blank" rel="noopener noreferrer">Site de l’établissement <span aria-hidden="true">↗</span><span class="sr-only"> (nouvel onglet)</span></a></div>
      </aside>

      <div class="information-content">
        <section id="projet" aria-labelledby="project-heading">
          <span class="section-number">01 / À PROPOS</span><h2 id="project-heading">Un projet autour<br />du lycée.</h2>
          <p>Ce portail est un projet indépendant de présentation et de communauté autour du Lycée de l’Europe à Dunkerque. Il réunit la découverte de l’établissement, un espace d’échange et Nexus, une galerie d’univers visuels.</p>
          <div class="project-callout"><span aria-hidden="true">✦</span><p>Il ne constitue pas le site institutionnel de l’établissement. Les inscriptions, les démarches administratives et les informations officielles relèvent du <a href="https://www.lycee-europe-dunkerque.fr/" target="_blank" rel="noopener noreferrer">site du Lycée de l’Europe<span class="sr-only"> (nouvel onglet)</span></a>.</p></div>
        </section>
        <section id="donnees" aria-labelledby="data-heading">
          <span class="section-number">02 / VOTRE COMPTE</span><h2 id="data-heading">Comprendre ce<br />que vous partagez.</h2>
          <div class="data-item"><span class="data-index" aria-hidden="true">A</span><div><h3>Connexion et profil</h3><p>L’espace membre utilise Firebase Authentication, un service Google, pour gérer la connexion par e-mail ou avec Google. Votre adresse e-mail, votre identifiant et les informations de profil associées à votre compte servent à vous identifier dans cet espace.</p></div></div>
          <div class="data-item"><span class="data-index" aria-hidden="true">B</span><div><h3>Messages et fichiers</h3><p>Les échanges sont enregistrés dans Cloud Firestore. Les fichiers partagés utilisent Firebase Storage. Les messages et leurs pièces jointes sont visibles par les personnes qui ont accès au salon concerné ; ce sont des échanges de groupe.</p><p>Partagez uniquement les informations et les fichiers que vous souhaitez rendre accessibles aux autres participants. Les accès et la conservation des données dépendent de la configuration du projet Firebase associé à ce portail.</p></div></div>
          <div class="data-item"><span class="data-index" aria-hidden="true">C</span><div><h3>Une question sur vos données ?</h3><p>Adressez-vous à la personne qui vous a donné accès à ce portail pour les demandes liées à votre compte, à vos messages ou à vos fichiers. Les coordonnées du gestionnaire de ce projet ne sont pas renseignées ici.</p></div></div>
        </section>
        <section id="preferences" aria-labelledby="preferences-heading">
          <span class="section-number">03 / VOTRE NAVIGATION</span><h2 id="preferences-heading">Vos choix.<br />Votre navigateur.</h2>
          <p>Certaines préférences de l’interface peuvent être enregistrées sur cet appareil. L’option « Rester connecté sur cet appareil » conserve votre session au-delà de la fermeture du navigateur. Sans cette option, la connexion utilise la session du navigateur.</p>
          <p>Sur un appareil partagé, déconnectez-vous après utilisation. Vous pouvez également effacer les données de ce site dans les paramètres de votre navigateur ; vos préférences et votre session locale seront alors supprimées.</p>
          <p>Les polices Inter et Space Grotesk sont chargées depuis Google Fonts. Leur affichage implique une connexion aux serveurs de ce service. Les liens vers les sites externes vous conduisent vers des services qui appliquent leurs propres règles de confidentialité.</p>
          <div class="motion-note"><span aria-hidden="true">↳</span><p><strong>À votre rythme.</strong> Les animations de l’interface respectent le réglage « Réduire les animations » de votre appareil. Les vidéos de Nexus disposent aussi d’un bouton de pause.</p></div>
        </section>
        <section id="credits" aria-labelledby="credits-heading">
          <span class="section-number">04 / SOURCES & CRÉDITS</span><h2 id="credits-heading">Des contenus.<br />Des origines.</h2>
          <div class="source-links"><a href="https://www.lycee-europe-dunkerque.fr/" target="_blank" rel="noopener noreferrer"><span><strong>Le site du Lycée de l’Europe</strong><small>Présentation, vie de l’établissement et actualités</small><span class="sr-only"> (nouvel onglet)</span></span><span aria-hidden="true">↗</span></a><a href="https://www.onisep.fr/ressources/structures-enseignement/hauts-de-france/nord/lycee-de-l-europe" target="_blank" rel="noopener noreferrer"><span><strong>La fiche de l’établissement sur Onisep</strong><small>Informations et orientation</small><span class="sr-only"> (nouvel onglet)</span></span><span aria-hidden="true">↗</span></a></div>
          <p>Les actualités et informations sur les formations renvoient vers leurs sources officielles.</p><p><strong>Univers Nexus :</strong> trois ambiances visuelles accompagnent la galerie.</p>
        </section>
      </div>
    </div>
    <div class="information-end info-container"><span>La découverte continue.</span><NuxtLink to="/">Retour à l’accueil <span aria-hidden="true">↗</span></NuxtLink></div>
  </main>
</template>

<script setup>
useHead({ title: 'À propos & confidentialité', meta: [{ name: 'description', content: 'Découvrez le projet Lycée Europe, le fonctionnement des comptes et des données, ainsi que les sources et crédits des contenus du portail.' }] })
</script>

<style scoped>
.information-page { background:var(--paper); color:var(--ink); padding-bottom:52px; }
.info-container { width:min(1220px,calc(100% - 112px)); margin-inline:auto; }
.information-intro { background:#0b071b; color:#f6f0ff; padding-top:36px; }
.intro-kicker { display:flex; align-items:center; justify-content:space-between; gap:24px; font-size:9px; letter-spacing:.11em; font-weight:600; color:#a999c0; }
.info-eyebrow { display:flex; align-items:center; gap:10px; text-transform:uppercase; color:#d2bee9; }.info-eyebrow>span { width:7px; height:7px; background:var(--acid,#dfff78); }
.intro-layout { display:grid; grid-template-columns:1.5fr 1fr; gap:50px; align-items:center; padding:57px 0 56px; }
.information-intro h1 { margin:0 0 26px; font:700 clamp(64px,8vw,104px)/.93 var(--font-display); letter-spacing:-.07em; text-transform:uppercase; }.information-intro h1>span { color:var(--accent-soft,#b995f5); }
.intro-layout p { font-size:14px; line-height:1.8; color:#c4b4d9; margin:0; }
.clarity-symbol { position:relative; text-align:center; font:500 clamp(160px,23vw,295px)/1 var(--font-display); transform:rotate(-12deg); color:#b991f6; background:linear-gradient(145deg,#f7eaff 20%,#8b5acc 34%,#e3c9ff 46%,#8e65c1 53%,#351c52 65%,#dfc3ff 83%); background-clip:text; -webkit-text-fill-color:transparent; filter:drop-shadow(7px 8px 0 #3e235c) drop-shadow(0 15px 35px #7940b355); }
.clarity-symbol>span { position:absolute; top:calc(100% + 7px); left:0; right:0; font:600 8px/1.7 var(--font-sans); letter-spacing:.15em; color:#bcadd0; -webkit-text-fill-color:#bcadd0; transform:rotate(12deg); }
.intro-bottom { padding:20px 0; border-top:1px solid #ffffff29; display:flex; align-items:center; justify-content:space-between; gap:24px; font-size:9px; font-weight:600; letter-spacing:.06em; text-transform:uppercase; color:#b3a2c7; }.intro-bottom a { color:#e4d9f3; display:flex; align-items:center; gap:20px; min-height:28px; }.intro-bottom a>span { color:var(--acid,#dfff78); font-size:20px; }
.information-layout { display:grid; grid-template-columns:265px 1fr; gap:86px; padding-top:58px; }.information-sidebar { align-self:start; position:sticky; top:112px; }.sidebar-label { display:block; font-size:9px; font-weight:700; letter-spacing:.1em; color:var(--muted); margin-bottom:12px; text-transform:uppercase; }
.information-sidebar nav { display:flex; flex-direction:column; }.information-sidebar nav a { display:flex; align-items:center; gap:15px; padding:17px 0; min-height:54px; border-bottom:1px solid var(--line); color:var(--ink); font-size:12px; font-weight:600; transition:color .2s; }.information-sidebar nav a>span:first-child { color:var(--accent-soft); font-size:9px; font-weight:600; }.information-sidebar nav a>span:last-child { margin-left:auto; font-size:19px; color:var(--accent); }.information-sidebar nav a:hover { color:var(--acid); }
.official-note { background:var(--acid,#dfff78); color:#1b1425; padding:25px; margin-top:35px; border:1px solid #b4c867; }.official-note>span { font:400 37px/1 var(--font-display); display:block; margin-bottom:30px; }.official-note h2 { margin:0 0 12px; font:600 24px/1.04 var(--font-display); letter-spacing:-.05em; text-transform:uppercase; }.official-note p { font-size:12px; line-height:1.8; margin:0; color:#41472e; }.official-note a { display:flex; align-items:center; justify-content:space-between; gap:10px; color:#171e0c; min-height:42px; border-top:1px solid #a8ba61; padding-top:15px; margin-top:23px; font-size:10px; font-weight:700; }.official-note a>span[aria-hidden] { font-size:22px; }
.information-content { min-width:0; }.information-content section { scroll-margin-top:115px; padding-bottom:43px; margin-bottom:43px; border-bottom:1px solid var(--line); }.information-content section:last-child { padding-bottom:0; margin-bottom:0; border-bottom:0; }.section-number { display:block; color:var(--accent-soft); font-size:9px; font-weight:650; letter-spacing:.12em; text-transform:uppercase; }.information-content h2 { font:600 clamp(31px,3.3vw,44px)/1.04 var(--font-display); letter-spacing:-.05em; text-transform:uppercase; margin:18px 0 26px; }.information-content p { font-size:13px; line-height:1.9; color:var(--muted); margin:0 0 17px; }.information-content p:last-child { margin-bottom:0; }.information-content p a { color:var(--accent-soft); text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:1px; }.information-content strong { color:var(--ink); font-weight:650; }
.project-callout { display:flex; align-items:start; gap:18px; background:rgba(var(--accent-rgb),.08); padding:21px; margin-top:24px; border:1px solid rgba(var(--accent-rgb),.2); }.project-callout>span { color:var(--accent-soft); font-size:25px; line-height:1.2; }.project-callout p { font-size:12px; color:var(--muted); }
.data-item { display:grid; grid-template-columns:35px 1fr; gap:16px; padding:23px 0; border-top:1px solid var(--line); }.data-item:last-child { padding-bottom:0; }.data-index { display:grid; place-items:center; width:29px; height:29px; border:1px solid rgba(var(--accent-rgb),.3); background:rgba(var(--accent-rgb),.1); color:var(--accent-soft); font:500 12px var(--font-display); }.information-content h3 { font-size:14px; font-weight:650; letter-spacing:-.02em; margin:1px 0 12px; color:var(--ink); }
.motion-note { display:flex; gap:17px; border-left:2px solid var(--accent); padding:3px 0 3px 20px; margin-top:25px; }.motion-note>span { color:var(--accent-soft); font-size:25px; }.motion-note p { font-size:12px; }.motion-note strong { display:block; margin-bottom:3px; color:var(--ink); }
.source-links { display:flex; flex-direction:column; border:1px solid var(--line); background:rgba(255,255,255,.025); padding:0 21px; margin-bottom:26px; }.source-links a { display:flex; align-items:center; justify-content:space-between; gap:18px; padding:22px 0; color:var(--ink); transition:color .2s; }.source-links a+a { border-top:1px solid var(--line); }.source-links a>span:last-child { font-size:28px; color:var(--accent-soft); }.source-links strong { display:block; font-size:13px; font-weight:600; }.source-links small { display:block; font-size:11px; line-height:1.6; color:var(--muted); margin-top:6px; }.source-links a:hover strong { color:var(--acid); }
.information-end { display:flex; align-items:center; justify-content:space-between; gap:24px; margin-top:65px; padding-top:25px; border-top:1px solid var(--line); font-size:12px; }.information-end>span { color:var(--muted); }.information-end a { display:flex; align-items:center; gap:24px; min-height:44px; font-weight:650; color:var(--accent-soft); transition:color .2s; }.information-end a:hover { color:var(--acid); }.information-end a>span { display:grid; place-items:center; width:43px; height:43px; background:var(--accent); color:var(--accent-ink); font-size:24px; }
.information-page a:focus-visible { outline:3px solid #8050b5; outline-offset:5px; }
@supports(animation-timeline:view()) { @media(prefers-reduced-motion:no-preference) { .information-content section { animation:info-reveal both linear; animation-timeline:view(); animation-range:entry 0% entry 20%; } } }
@keyframes info-reveal { from { opacity:.45; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
@media(max-width:1100px) { .info-container { width:calc(100% - 64px); }.information-layout { grid-template-columns:230px 1fr; gap:45px; }.intro-layout { gap:25px; }.information-intro h1 { font-size:8.1vw; }.official-note { padding:21px; }.official-note h2 { font-size:22px; } }
@media(max-width:760px) { .information-page { padding-bottom:32px; }.info-container { width:calc(100% - 40px); }.information-intro { padding-top:26px; }.intro-kicker { font-size:8px; letter-spacing:.06em; }.intro-kicker>span:last-child { display:none; }.intro-layout { grid-template-columns:1fr; gap:22px; padding:43px 0 30px; }.information-intro h1 { font-size:clamp(55px,12.8vw,88px); margin-bottom:20px; }.intro-layout p { font-size:13px; }.clarity-symbol { position:absolute; right:22px; top:185px; font-size:95px; opacity:.2; pointer-events:none; }.clarity-symbol>span { display:none; }.information-intro { position:relative; }.intro-layout>div:first-child { position:relative; z-index:1; }.intro-bottom { font-size:8px; gap:15px; padding-block:16px; }.intro-bottom a { gap:10px; }.information-layout { grid-template-columns:1fr; gap:38px; padding-top:30px; }.information-sidebar { position:static; }.information-sidebar nav { display:grid; grid-template-columns:1fr 1fr; gap:0 22px; }.information-sidebar nav a { font-size:11px; gap:9px; padding-block:13px; }.official-note { display:grid; grid-template-columns:31px 1fr; gap:9px 14px; padding:20px; margin-top:24px; }.official-note>span { margin:0; grid-row:1 / 3; font-size:29px; }.official-note h2 { font-size:22px; margin:0; }.official-note p { font-size:11px; grid-column:2; }.official-note a { grid-column:2; margin-top:5px; padding-top:9px; font-size:10px; }.information-content h2 { font-size:clamp(30px,7.8vw,44px); }.information-content p { font-size:12px; line-height:1.85; }.information-content section { padding-bottom:31px; margin-bottom:31px; scroll-margin-top:94px; }.data-item { grid-template-columns:29px 1fr; gap:12px; padding-block:20px; }.data-index { width:27px; height:27px; }.information-content h3 { font-size:13px; }.project-callout { gap:12px; padding:17px; }.source-links { padding-inline:17px; }.source-links strong { font-size:12px; }.source-links small { font-size:10px; }.information-end { margin-top:40px; font-size:10px; }.information-end a { gap:14px; }.information-end a>span { width:38px; height:38px; } }
@media(prefers-reduced-motion:reduce) { *,*::before,*::after { animation:none!important; scroll-behavior:auto!important; } }
</style>

