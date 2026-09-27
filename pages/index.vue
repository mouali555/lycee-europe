<script setup>
useHead({title:"L'avenir commence ici",meta:[{name:'description',content:'Lycée Europe à Dunkerque — plateforme créative et communautaire. Formations, vie lycéenne, studio Nexus et espace élève.'}]})
const newsFilter=ref('Tout')
const news=[{category:'Savoir-faire',title:"L'acier entre les mains des lycéens.",description:'Découpe, pliage, soudure : des élèves de terminale découvrent la chaudronnerie en fabriquant leurs propres objets.',image:'/images/atelier.jpg',alt:'Créations et atelier du stage de chaudronnerie au lycée',tag:'IMMERSION EN ATELIER'},{category:'Ouverture',title:'La citoyenneté se vit aussi hors des murs.',description:"Les élèves de l'atelier défense découvrent le Sénat et les lieux où s'écrit la vie démocratique.",image:'/images/senat.png',alt:"Visite de l'atelier défense au Sénat",tag:'SORTIE PÉDAGOGIQUE'},{category:'Culture',title:'Un autre regard sur le grand écran.',description:"L'option et le club audiovisuel partent à la rencontre des séries et de leurs créateurs au festival Séries Mania.",image:null,alt:'',tag:'CINÉMA & AUDIOVISUEL'}]
const filteredNews=computed(()=>newsFilter.value==='Tout'?news:news.filter(n=>n.category===newsFilter.value))
const tracks=[{number:'01',label:'EXPLORER & CHOISIR',title:'La voie générale',description:'Cultiver sa curiosité, approfondir ses spécialités et dessiner la suite.',tag:'Seconde · Première · Terminale',icon:'orbit'},{number:'02',label:'COMPRENDRE & CRÉER',title:'La voie technologique',description:"Passer de l'idée au projet, avec les sciences et les technologies.",tag:'Baccalauréat STI2D',icon:'cube'},{number:'03',label:'SE SPÉCIALISER & AVANCER',title:"L'enseignement supérieur",description:'Développer son expertise en BTS ou préparer les grandes écoles.',tag:'BTS · Classes préparatoires',icon:'arrow'}]
</script>
<template><main class="home">

<!-- ═══════════════════════════════════════
     HERO — ouverture manifeste
═══════════════════════════════════════ -->
<section class="hero" aria-labelledby="hero-title">
  <!-- Formes décoratives flottantes -->
  <div class="hero-shapes" aria-hidden="true">
    <svg class="shape-ring-lg anim-float" viewBox="0 0 200 200" fill="none">
      <ellipse cx="100" cy="100" rx="98" ry="98" stroke="rgba(204,255,0,.15)" stroke-width="1"/>
      <ellipse cx="100" cy="100" rx="74" ry="74" stroke="rgba(204,255,0,.08)" stroke-width="1"/>
    </svg>
    <svg class="shape-star-hero anim-float" style="animation-delay:-8s" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <path d="M40 0v80M0 40h80M11.7 11.7l56.6 56.6M11.7 68.3l56.6-56.6" stroke="var(--acid)" stroke-width="2.5"/>
    </svg>
    <div class="hero-blob-acid" aria-hidden="true"></div>
  </div>

  <div class="hero-grid container">
    <!-- Left copy -->
    <div class="hero-copy">
      <p class="hero-eyebrow text-label-acid">Bienvenue au lycée europe · Dunkerque</p>
      <h1 id="hero-title" class="hero-title">
        <span class="ht-line">L'avenir</span>
        <span class="ht-line ht-outline">commence</span>
        <span class="ht-line ht-acid">ici.<span class="hero-star-inline" aria-hidden="true">✦</span></span>
      </h1>
      <p class="hero-desc">Des idées à explorer. Des talents à révéler.<br>À Dunkerque, un lieu pour apprendre, grandir<br class="desktop-br"/> et construire ce qui vient après.</p>
      <div class="hero-actions">
        <NuxtLink to="/filieres" class="btn-acid btn-acid-lg">Trouver ma voie <span aria-hidden="true">↗</span></NuxtLink>
        <a href="#lycee" class="hero-discover">Découvrir <span aria-hidden="true">↓</span></a>
      </div>
      <div class="hero-meta" aria-hidden="true">
        <span></span>
        <span class="text-label">De la seconde à l'enseignement supérieur</span>
      </div>
    </div>

    <!-- Right visual -->
    <div class="hero-visual">
      <div class="photo-frame">
        <img src="/images/campus.jpg" alt="L'entrée du lycée de l'Europe à Dunkerque, éclairée au petit matin" width="1024" height="682" fetchpriority="high" class="photo-img"/>
        <div class="photo-overlay" aria-hidden="true"></div>
        <div class="photo-top-bar" aria-hidden="true">
          <span class="photo-label"><i></i> UN LIEU, TOUS LES POSSIBLES</span>
          <span class="photo-code">01 / EUROPE</span>
        </div>
        <div class="photo-coords" aria-hidden="true">
          <svg width="13" height="15" viewBox="0 0 20 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 9c0 7-8 13-8 13S2 16 2 9a8 8 0 1 1 16 0Z"/><circle cx="10" cy="9" r="2.5"/></svg>
          <span>51°N · 02°E<br/><strong>Dunkerque</strong></span>
        </div>
      </div>
      <!-- Postcard -->
      <div class="hero-postcard" aria-hidden="true">
        <span class="postcard-glyph">✦</span>
        <div>
          <span class="postcard-label">TA PROCHAINE</span>
          <strong class="postcard-main">grande aventure.</strong>
        </div>
        <NuxtLink to="/clubs" aria-label="Découvrir la vie lycéenne" tabindex="-1">↗</NuxtLink>
      </div>
      <!-- Index vertical -->
      <span class="visual-index" aria-hidden="true">LYCÉE EUROPE / CAMPUS</span>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════
     MARQUEE — rupture rythme
═══════════════════════════════════════ -->
<div class="section-marquee" aria-hidden="true">
  <div class="marquee-track marquee-acid">
    <div class="marquee-inner">
      <template v-for="i in 4" :key="i">
        <span class="marquee-item">APPRENDRE<span>✦</span></span>
        <span class="marquee-item">EXPLORER<span>✦</span></span>
        <span class="marquee-item">CRÉER<span>✦</span></span>
        <span class="marquee-item">DUNKERQUE<span>✦</span></span>
        <span class="marquee-item">EUROPE<span>✦</span></span>
      </template>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════
     QUICK LINKS
═══════════════════════════════════════ -->
<div class="quick-links-bar container">
  <a href="https://0590072h.index-education.net/pronote/eleve.html?login=true" target="_blank" rel="noopener noreferrer" class="ql-item">
    <span class="ql-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 2v6M16 2v6M4 11h16M8 15h3m2 0h3"/></svg></span>
    <span class="ql-text">Pronote<small>Suivi scolaire</small></span>
    <span class="ql-arrow" aria-hidden="true">↗</span>
  </a>
  <NuxtLink to="/chat" class="ql-item">
    <span class="ql-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 16a2 2 0 0 1-2 2H9l-5 4V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z"/><path d="M8 9h8M8 13h5"/></svg></span>
    <span class="ql-text">La communauté<small>Échanger & s'entraider</small></span>
    <span class="ql-arrow" aria-hidden="true">↗</span>
  </NuxtLink>
  <NuxtLink to="/filieres" class="ql-item">
    <span class="ql-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 5c4-1 7 0 9 2 2-2 5-3 9-2v15c-4-1-7 0-9 2-2-2-5-3-9-2ZM12 7v15"/></svg></span>
    <span class="ql-text">Mon orientation<small>Imaginer la suite</small></span>
    <span class="ql-arrow" aria-hidden="true">↗</span>
  </NuxtLink>
  <NuxtLink to="/nexus" class="ql-item ql-accent">
    <span class="ql-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="M12 3v18M4 7.5l8 4.5 8-4.5"/></svg></span>
    <span class="ql-text">Studio Nexus<small>Univers créatifs</small></span>
    <span class="ql-arrow" aria-hidden="true">✦</span>
  </NuxtLink>
</div>

<!-- ═══════════════════════════════════════
     INTRO — l'esprit europe
═══════════════════════════════════════ -->
<section id="lycee" class="intro-section container" aria-labelledby="intro-title">
  <div class="intro-index" aria-hidden="true">
    <span class="text-label">L'esprit europe</span>
    <span class="intro-number">02</span>
  </div>
  <div class="intro-body">
    <h2 id="intro-title" class="intro-heading">
      Bien plus qu'un lycée.<br>
      <span class="text-outline">Un point</span> <em class="intro-em">de départ.</em>
    </h2>
    <div class="intro-bottom">
      <p>On vient pour apprendre. On reste pour les rencontres, les projets et les déclics. À Europe, chacun peut trouver sa place et donner une nouvelle dimension à ses ambitions.</p>
      <NuxtLink to="/clubs" class="intro-link">Vivre le lycée <span aria-hidden="true">↗</span></NuxtLink>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════
     FORMATIONS — grille tracks
═══════════════════════════════════════ -->
<section class="pathways-section" aria-labelledby="paths-title">
  <div class="container">
    <div class="section-header">
      <div>
        <p class="text-label-acid">À chacun son parcours</p>
        <h2 id="paths-title" class="section-title">Le bon chemin,<br>c'est <em class="text-acid">le tien.</em></h2>
      </div>
      <div class="section-aside">
        <p class="text-body-sm">Des parcours différents.<br>La même envie d'aller plus loin.</p>
        <NuxtLink to="/filieres" class="link-acid">Toutes nos formations <span aria-hidden="true">↗</span></NuxtLink>
      </div>
    </div>
    <div class="paths-grid">
      <NuxtLink v-for="track in tracks" :key="track.number" to="/filieres" class="track-card">
        <div class="track-num" aria-hidden="true">{{track.number}}</div>
        <div class="track-label text-label">{{track.label}}</div>
        <div class="track-illustration" :class="track.icon" aria-hidden="true">
          <svg v-if="track.icon==='orbit'" viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="1.2">
            <ellipse cx="100" cy="70" rx="64" ry="23" transform="rotate(-35 100 70)"/>
            <ellipse cx="100" cy="70" rx="64" ry="23" transform="rotate(35 100 70)"/>
            <ellipse cx="100" cy="70" rx="64" ry="23" transform="rotate(90 100 70)"/>
            <circle cx="100" cy="70" r="7" fill="currentColor"/>
          </svg>
          <svg v-else-if="track.icon==='cube'" viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="1.2">
            <path d="m100 12 55 32v62l-55 32-55-32V44Z M45 44l55 32 55-32 M100 76v62 M100 12v62"/>
          </svg>
          <svg v-else viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="1.2">
            <path d="M45 120V87h35V54h35V21h38v99ZM45 120 153 21M111 21h42v42"/>
          </svg>
        </div>
        <h3 class="track-title">{{track.title}}</h3>
        <p class="track-desc">{{track.description}}</p>
        <div class="track-footer">
          <span class="track-tag text-label">{{track.tag}}</span>
          <span class="track-go" aria-hidden="true">↗</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════
     VIE LYCÉENNE — section contrastée
═══════════════════════════════════════ -->
<section class="life-section container" aria-labelledby="life-title">
  <div class="life-art" aria-hidden="true">
    <div class="life-art-label">
      <span>LA VIE EN GRAND</span>
      <span>EUROPE / COLLECTIF</span>
    </div>
    <div class="life-art-word">À toi<br>de <em>jouer.</em></div>
    <svg class="life-art-star" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <path d="M100 0v200M0 100h200M29 29l142 142M29 171 171 29" stroke="var(--void)" stroke-width="44" stroke-opacity=".3"/>
    </svg>
    <div class="life-tags" aria-hidden="true">
      <span>Culture</span><span>Sport</span><span>Engagement</span><span>Rencontres</span>
    </div>
  </div>
  <div class="life-copy">
    <p class="text-label-acid">La vie ne s'arrête pas aux cours</p>
    <h2 id="life-title" class="life-heading">Des passions.<br>Des rencontres.<br><em class="text-acid">Tes années lycée.</em></h2>
    <p class="text-body life-desc">Une scène, un terrain, une idée à partager. Les clubs et les projets sont là pour sortir du cadre, essayer autre chose et faire bouger le lycée.</p>
    <div class="life-facts">
      <div class="life-fact">
        <span class="life-fact-num">01</span>
        <div><strong>Trouve ton collectif</strong>Du sport à la création, des envies à partager.</div>
      </div>
      <div class="life-fact">
        <span class="life-fact-num">02</span>
        <div><strong>Fais entendre ta voix</strong>Avec la Maison des lycéens et le CVL.</div>
      </div>
    </div>
    <NuxtLink to="/clubs" class="btn-acid">Explorer la vie lycéenne <span aria-hidden="true">↗</span></NuxtLink>
  </div>
</section>

<!-- ═══════════════════════════════════════
     MARQUEE rupture
═══════════════════════════════════════ -->
<div class="section-marquee" aria-hidden="true">
  <div class="marquee-track marquee-void">
    <div class="marquee-inner">
      <template v-for="i in 4" :key="i">
        <span class="marquee-item">PROJETS<span>✦</span></span>
        <span class="marquee-item">ACTUALITÉS<span>✦</span></span>
        <span class="marquee-item">LE LYCÉE EN MOUVEMENT<span>✦</span></span>
        <span class="marquee-item">SAVOIR-FAIRE<span>✦</span></span>
      </template>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════
     ACTUALITÉS
═══════════════════════════════════════ -->
<section id="actualites" class="news-section container" aria-labelledby="news-title">
  <div class="section-header">
    <div>
      <p class="text-label-acid">Les projets à Europe</p>
      <h2 id="news-title" class="section-title">Le lycée<br><em class="text-acid">en mouvement.</em></h2>
    </div>
    <a class="link-acid" href="https://www.lycee-europe-dunkerque.fr/" target="_blank" rel="noopener noreferrer">Le journal de l'établissement <span aria-hidden="true">↗</span></a>
  </div>
  <div class="news-filters" aria-label="Filtrer les actualités">
    <button v-for="filter in ['Tout','Savoir-faire','Ouverture','Culture']"
      :key="filter"
      :class="{selected:newsFilter===filter}"
      :aria-pressed="newsFilter===filter"
      @click="newsFilter=filter">{{filter}}</button>
    <span class="news-count text-label">{{filteredNews.length}} {{filteredNews.length>1?'histoires':'histoire'}}</span>
  </div>
  <div class="news-grid" aria-live="polite">
    <a v-for="(item,i) in filteredNews" :key="item.title"
      href="https://www.lycee-europe-dunkerque.fr/"
      class="news-card"
      :class="{featured: i===0}"
      target="_blank" rel="noopener noreferrer">
      <div class="news-media">
        <img v-if="item.image" :src="item.image" :alt="item.alt" loading="lazy" width="600" height="400" class="news-img"/>
        <div v-else class="news-cinema" aria-hidden="true">
          <span>SÉRIES<br><em>MANIA</em><small>LE MONDE FAIT SON CINÉMA.</small></span>
          <span class="cinema-star">✦</span>
        </div>
        <span class="news-cat badge-acid">{{item.category}}</span>
        <span class="news-go" aria-hidden="true">↗</span>
      </div>
      <div class="news-body">
        <p class="news-tag text-label">{{item.tag}}</p>
        <h3 class="news-title">{{item.title}}</h3>
        <p class="news-desc">{{item.description}}</p>
      </div>
    </a>
  </div>
  <p class="news-source text-label">Sélection de projets présentés sur le <a href="https://www.lycee-europe-dunkerque.fr/" target="_blank" rel="noopener noreferrer">site de l'établissement ↗</a></p>
</section>

<!-- ═══════════════════════════════════════
     COMMUNAUTÉ — invitation
═══════════════════════════════════════ -->
<section class="community-section container" aria-labelledby="community-title">
  <div class="community-inner">
    <div class="community-copy">
      <p class="text-label-acid">On avance mieux ensemble</p>
      <h2 id="community-title" class="community-heading">Ton lycée.<br><em class="text-outline-acid">Ton espace.</em></h2>
      <p class="text-body">Une question sur un cours ? Une idée à partager ?<br>Retrouve la communauté dans ton espace élève.</p>
      <NuxtLink to="/login" class="btn-acid btn-acid-lg" style="margin-top:28px">Rejoindre mon espace <span aria-hidden="true">↗</span></NuxtLink>
    </div>
    <div class="community-visual" aria-hidden="true">
      <!-- Chat preview card -->
      <div class="chat-preview">
        <div class="chat-preview-top">
          <span class="chat-brand">europe<span>✦</span></span>
          <span class="text-label">L'ESPACE QUI NOUS RASSEMBLE</span>
        </div>
        <div v-for="(room,i) in [{name:'général',desc:'La vie du lycée, ensemble.'},{name:'entraide',desc:'Un coup de main fait la différence.'},{name:'détente',desc:'On fait une pause ?'}]" :key="room.name" class="chat-room">
          <span class="chat-hash" :class="'hash-'+i">#</span>
          <div><strong>{{room.name}}</strong><small>{{room.desc}}</small></div>
          <span class="chat-arr">↗</span>
        </div>
        <span class="chat-label text-label">UN ESPACE POUR CHACUN</span>
      </div>
      <!-- Decorative shapes -->
      <div class="comm-ring ring-1"></div>
      <div class="comm-ring ring-2"></div>
      <span class="comm-star">✦</span>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════
     CONTACT
═══════════════════════════════════════ -->
<section id="contact" class="contact-section container" aria-labelledby="contact-title">
  <div class="contact-intro">
    <p class="text-label-acid">Et si on se rencontrait ?</p>
    <h2 id="contact-title" class="section-title">Tout commence<br>par un <em class="text-acid">premier pas.</em></h2>
    <a href="mailto:ce.0590072h@ac-lille.fr" class="link-acid">Écrire à l'établissement <span aria-hidden="true">↗</span></a>
  </div>
  <div class="contact-cards">
    <div class="contact-card">
      <span class="text-label">Nous trouver</span>
      <p>809, rue du Banc Vert<br>59640 Dunkerque</p>
      <a href="https://www.google.com/maps/search/?api=1&query=Lyc%C3%A9e+de+l%27Europe+809+rue+du+Banc+Vert+Dunkerque" target="_blank" rel="noopener noreferrer" class="link-acid-sm">Voir l'itinéraire ↗</a>
    </div>
    <div class="contact-card">
      <span class="text-label">Nous contacter</span>
      <a href="tel:+33328587210" class="contact-phone">03 28 58 72 10</a>
      <a href="mailto:ce.0590072h@ac-lille.fr" class="link-acid-sm">ce.0590072h@ac-lille.fr ↗</a>
      <small class="text-label">Coordonnées de l'établissement</small>
    </div>
  </div>
</section>

</main></template>

<style scoped>
/* ── Base ─────────────────────────────────────────────────────── */
.home{background:var(--void);color:var(--white)}
.section-marquee{overflow:hidden;margin:0}
.section-title{font-family:var(--font-display);font-size:clamp(36px,5vw,72px);font-weight:800;line-height:1.0;letter-spacing:-.04em}
.section-title em{font-style:normal}
.section-header{display:flex;align-items:flex-end;justify-content:space-between;gap:32px;margin-bottom:48px}
.section-aside{text-align:right;flex-shrink:0;max-width:280px}
.link-acid{font-family:var(--font-display);font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:var(--acid);display:inline-flex;align-items:center;gap:8px;transition:opacity var(--t-fast)}
.link-acid:hover{opacity:.7}
.link-acid-sm{font-size:11px;color:var(--acid);font-weight:600;display:inline-flex;align-items:center;gap:6px;transition:opacity var(--t-fast)}
.link-acid-sm:hover{opacity:.7}

/* ── Hero ────────────────────────────────────────────────────── */
.hero{position:relative;overflow:hidden;padding-bottom:0}
.hero-shapes{position:absolute;inset:0;pointer-events:none;z-index:0}
.shape-ring-lg{position:absolute;width:700px;height:700px;top:-200px;right:-200px;opacity:.4}
.shape-star-hero{position:absolute;width:90px;height:90px;top:60px;right:80px}
.hero-blob-acid{
  position:absolute;width:600px;height:600px;
  background:radial-gradient(circle,rgba(204,255,0,.08) 0%,transparent 65%);
  top:-100px;left:-100px;pointer-events:none;filter:blur(40px);
}
.hero-grid{
  display:grid;grid-template-columns:1fr 1fr;
  gap:clamp(32px,5vw,80px);
  padding-top:clamp(48px,7vh,96px);
  padding-bottom:clamp(48px,7vh,80px);
  align-items:center;position:relative;z-index:1;
}
.hero-copy{min-width:0}
.hero-eyebrow{display:block;margin-bottom:20px}
.hero-title{
  font-family:var(--font-display);font-weight:800;
  font-size:clamp(52px,6.5vw,96px);
  line-height:.92;letter-spacing:-.05em;
  margin-bottom:28px;
}
.ht-line{display:block}
.ht-outline{-webkit-text-stroke:1.5px var(--white);color:transparent}
.ht-acid{color:var(--acid);display:flex;align-items:center;gap:20px}
.hero-star-inline{font-size:.5em;line-height:1;vertical-align:middle}
.hero-desc{font-size:14px;color:var(--white-dim);line-height:1.8;margin-bottom:32px}
.desktop-br{}
.hero-actions{display:flex;align-items:center;gap:24px;flex-wrap:wrap}
.hero-discover{
  font-family:var(--font-display);font-size:12px;font-weight:700;
  letter-spacing:.04em;text-transform:uppercase;
  color:var(--white-muted);
  display:inline-flex;align-items:center;gap:10px;
  transition:color var(--t-fast);
}
.hero-discover:hover{color:var(--white)}
.hero-meta{display:flex;align-items:center;gap:12px;margin-top:28px}
.hero-meta>span:first-child{width:20px;height:1px;background:rgba(250,250,250,.2);flex-shrink:0}

/* Photo frame */
.hero-visual{position:relative;padding-bottom:32px}
.photo-frame{
  border-radius:80px 8px 8px 8px;
  overflow:hidden;height:clamp(360px,50vh,540px);
  position:relative;background:var(--onyx-2);
}
.photo-img{width:100%;height:100%;object-fit:cover;object-position:50% 40%;filter:saturate(.85) brightness(.95)}
.photo-overlay{
  position:absolute;inset:0;
  background:linear-gradient(180deg,rgba(0,0,0,.3) 0%,transparent 40%,rgba(0,0,0,.5) 100%);
}
.photo-top-bar{
  position:absolute;z-index:1;top:24px;left:36px;right:20px;
  color:#fff;display:flex;justify-content:space-between;align-items:center;
}
.photo-label{font-family:var(--font-mono);font-size:8px;letter-spacing:.14em;display:flex;align-items:center;gap:8px}
.photo-label>i{width:5px;height:5px;background:var(--acid);border-radius:50%;font-style:normal}
.photo-code{font-family:var(--font-mono);font-size:8px;letter-spacing:.1em;opacity:.65}
.photo-coords{
  position:absolute;z-index:1;right:20px;bottom:22px;
  color:#fff;display:flex;align-items:center;gap:10px;
}
.photo-coords>span{font-family:var(--font-mono);font-size:8px;letter-spacing:.08em;line-height:1.7}
.photo-coords strong{font-size:10px;font-weight:500;letter-spacing:0}

/* Postcard */
.hero-postcard{
  position:absolute;left:-24px;bottom:50px;
  background:var(--acid);color:var(--void);
  display:flex;align-items:center;gap:14px;
  padding:18px 16px;
  transform:rotate(-4deg);
  border-radius:2px;
  box-shadow:0 12px 40px rgba(0,0,0,.4);
  z-index:2;
}
.postcard-glyph{font-size:30px;line-height:1}
.postcard-label{font-family:var(--font-mono);font-size:7px;letter-spacing:.15em;display:block;margin-bottom:4px}
.postcard-main{font-family:var(--font-display);font-size:13px;font-weight:700}
.hero-postcard>a{
  border:1px solid rgba(0,0,0,.2);width:28px;height:28px;
  border-radius:50%;display:grid;place-items:center;font-size:14px;
  margin-left:8px;flex-shrink:0;
}
.visual-index{
  position:absolute;bottom:6px;right:0;
  font-family:var(--font-mono);font-size:7px;letter-spacing:.15em;
  text-transform:uppercase;color:var(--white-muted);
  writing-mode:horizontal-tb;
}

/* ── Quick links ─────────────────────────────────────────────── */
.quick-links-bar{
  display:grid;grid-template-columns:repeat(4,1fr);
  border-top:1px solid rgba(250,250,250,.08);
  border-bottom:1px solid rgba(250,250,250,.08);
}
.ql-item{
  display:flex;align-items:center;gap:14px;
  padding:20px 24px;
  border-right:1px solid rgba(250,250,250,.08);
  transition:background var(--t-fast),color var(--t-fast);
}
.ql-item:last-child{border-right:0}
.ql-item:hover{background:rgba(250,250,250,.04)}
.ql-icon{width:22px;height:22px;flex-shrink:0;color:var(--white-muted)}
.ql-icon svg{width:100%;height:100%}
.ql-text{font-family:var(--font-display);font-size:11px;font-weight:700;line-height:1.2}
.ql-text small{display:block;font-family:var(--font-body);font-size:9px;font-weight:400;color:var(--white-muted);margin-top:3px}
.ql-arrow{margin-left:auto;font-size:16px;color:var(--white-muted)}
.ql-accent{background:rgba(204,255,0,.05)}
.ql-accent .ql-icon,.ql-accent .ql-arrow{color:var(--acid)}
.ql-accent .ql-text{color:var(--acid)}
.ql-accent:hover{background:rgba(204,255,0,.1)}

/* ── Intro ───────────────────────────────────────────────────── */
.intro-section{
  display:grid;grid-template-columns:.4fr 1fr;gap:clamp(40px,7vw,120px);
  padding-top:clamp(72px,10vh,120px);padding-bottom:clamp(72px,10vh,120px);
  align-items:end;
}
.intro-index{display:flex;flex-direction:column;gap:40px;justify-content:space-between}
.intro-number{
  font-family:var(--font-display);font-size:clamp(72px,10vw,148px);
  font-weight:800;color:var(--onyx-3);line-height:1;letter-spacing:-.06em;
  -webkit-text-stroke:1px rgba(250,250,250,.15);
}
.intro-heading{
  font-family:var(--font-display);font-size:clamp(36px,5vw,64px);
  font-weight:800;line-height:1.05;letter-spacing:-.04em;margin-bottom:28px;
}
.intro-heading .text-outline{-webkit-text-stroke:1.5px var(--white)}
.intro-em{font-style:normal;color:var(--acid)}
.intro-bottom{display:flex;align-items:flex-end;gap:40px}
.intro-bottom p{font-size:14px;line-height:1.8;color:var(--white-dim);max-width:380px}
.intro-link{font-family:var(--font-display);font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:var(--acid);white-space:nowrap;transition:opacity var(--t-fast)}
.intro-link:hover{opacity:.7}

/* ── Formations ──────────────────────────────────────────────── */
.pathways-section{
  background:var(--onyx);
  padding:clamp(64px,10vh,112px) 0;
  border-top:1px solid rgba(250,250,250,.07);
  border-bottom:1px solid rgba(250,250,250,.07);
}
.paths-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;border:1px solid rgba(250,250,250,.08)}
.track-card{
  background:var(--onyx);padding:32px 28px 24px;
  border-right:1px solid rgba(250,250,250,.07);
  display:flex;flex-direction:column;
  transition:background var(--t-base);
  position:relative;overflow:hidden;
}
.track-card:last-child{border-right:0}
.track-card::before{
  content:'';position:absolute;inset:0;
  background:linear-gradient(135deg,rgba(204,255,0,.05),transparent);
  opacity:0;transition:opacity var(--t-base);
}
.track-card:hover{background:var(--onyx-2)}
.track-card:hover::before{opacity:1}
.track-num{
  font-family:var(--font-display);font-size:clamp(48px,6vw,80px);
  font-weight:800;color:var(--onyx-3);letter-spacing:-.06em;
  line-height:1;margin-bottom:8px;
  -webkit-text-stroke:1px rgba(250,250,250,.12);
}
.track-label{margin-bottom:16px}
.track-illustration{height:130px;display:flex;align-items:center;justify-content:center;margin:16px 0 24px;color:var(--acid)}
.track-illustration svg{height:100%;width:auto;max-width:100%}
.track-card:nth-child(2) .track-illustration{color:var(--ice)}
.track-card:nth-child(3) .track-illustration{color:var(--hyper)}
.track-title{font-family:var(--font-display);font-size:clamp(18px,2.2vw,26px);font-weight:800;letter-spacing:-.03em;margin-bottom:10px}
.track-desc{font-size:12px;color:var(--white-muted);line-height:1.75;flex:1;margin-bottom:20px}
.track-footer{
  display:flex;justify-content:space-between;align-items:center;
  padding-top:16px;border-top:1px solid rgba(250,250,250,.07);
}
.track-tag{}
.track-go{
  width:32px;height:32px;border-radius:50%;
  border:1px solid rgba(250,250,250,.1);
  display:grid;place-items:center;font-size:14px;color:var(--white-muted);
  transition:all var(--t-base);flex-shrink:0;
}
.track-card:hover .track-go{background:var(--acid);border-color:var(--acid);color:var(--void)}

/* ── Vie lycéenne ────────────────────────────────────────────── */
.life-section{
  display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,7vw,100px);
  padding-top:clamp(72px,12vh,130px);padding-bottom:clamp(72px,12vh,130px);
  align-items:center;
}
.life-art{
  height:clamp(380px,50vh,520px);
  background:var(--acid);color:var(--void);
  border-radius:8px;position:relative;overflow:hidden;
  padding:28px;
}
.life-art-label{display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:7px;letter-spacing:.18em;position:relative;z-index:2}
.life-art-label>span:last-child{opacity:.55}
.life-art-word{
  font-family:var(--font-display);font-size:clamp(56px,7vw,88px);
  font-weight:800;line-height:1.0;letter-spacing:-.06em;
  margin-top:clamp(24px,4vh,48px);position:relative;z-index:2;
}
.life-art-word em{font-style:normal;display:block;-webkit-text-stroke:2px var(--void);color:transparent}
.life-art-star{
  position:absolute;width:300px;height:300px;
  right:-80px;bottom:20px;transform:rotate(15deg);
  opacity:.5;
}
.life-tags{position:absolute;left:28px;bottom:28px;right:28px;display:flex;flex-wrap:wrap;gap:6px;z-index:2}
.life-tags>span{
  border:1px solid rgba(0,0,0,.25);padding:6px 12px;border-radius:50px;
  font-family:var(--font-mono);font-size:8px;letter-spacing:.1em;
  background:rgba(0,0,0,.15);
}
.life-heading{
  font-family:var(--font-display);font-size:clamp(32px,4.5vw,58px);
  font-weight:800;line-height:1.05;letter-spacing:-.04em;
  margin:16px 0 20px;
}
.life-heading em{font-style:normal}
.life-desc{max-width:380px;margin-bottom:28px}
.life-facts{display:grid;gap:16px;margin-bottom:32px}
.life-fact{display:flex;gap:16px;align-items:flex-start}
.life-fact-num{
  font-family:var(--font-display);font-size:11px;font-weight:800;
  color:var(--acid);width:32px;height:32px;flex-shrink:0;
  border:1px solid rgba(204,255,0,.25);border-radius:50%;
  display:grid;place-items:center;letter-spacing:-.02em;
}
.life-fact strong{display:block;font-size:13px;font-weight:700;margin-bottom:3px}
.life-fact div{font-size:12px;color:var(--white-muted);line-height:1.6}

/* ── Actualités ──────────────────────────────────────────────── */
.news-section{
  padding-top:clamp(56px,8vh,96px);
  padding-bottom:clamp(56px,8vh,96px);
}
.news-filters{display:flex;align-items:center;gap:8px;margin-bottom:32px;flex-wrap:wrap}
.news-filters button{
  font-family:var(--font-mono);font-size:9px;letter-spacing:.15em;text-transform:uppercase;
  border:1px solid rgba(250,250,250,.1);border-radius:50px;
  padding:8px 16px;color:var(--white-muted);
  transition:all var(--t-fast);
}
.news-filters button.selected{background:var(--acid);border-color:var(--acid);color:var(--void)}
.news-filters button:hover:not(.selected){border-color:rgba(250,250,250,.3);color:var(--white)}
.news-count{margin-left:auto}
.news-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(250,250,250,.07);border:1px solid rgba(250,250,250,.07)}
.news-card{background:var(--void);display:flex;flex-direction:column;transition:background var(--t-fast)}
.news-card:hover{background:var(--onyx)}
.news-card.featured{grid-column:1/3}
.news-media{
  aspect-ratio:1.6;overflow:hidden;position:relative;
  background:var(--onyx-2);
}
.news-card.featured .news-media{aspect-ratio:2}
.news-img{width:100%;height:100%;object-fit:cover;transition:transform .5s;filter:saturate(.8)}
.news-card:hover .news-img{transform:scale(1.04)}
.news-cat{position:absolute;top:12px;left:12px;z-index:1}
.news-go{
  position:absolute;bottom:12px;right:12px;z-index:1;
  width:30px;height:30px;border-radius:50%;
  background:var(--acid);color:var(--void);
  display:grid;place-items:center;font-size:14px;font-weight:700;
}
.news-body{padding:20px 20px 24px;flex:1;display:flex;flex-direction:column}
.news-tag{margin-bottom:10px;display:block}
.news-title{
  font-family:var(--font-display);font-size:clamp(16px,2vw,22px);
  font-weight:800;letter-spacing:-.03em;line-height:1.2;
  margin-bottom:10px;
}
.news-desc{font-size:12px;color:var(--white-muted);line-height:1.75;flex:1}
.news-cinema{
  width:100%;height:100%;background:var(--onyx-2);
  padding:24px;display:flex;align-items:center;position:relative;overflow:hidden;
}
.news-cinema>span:first-child{
  font-family:var(--font-display);font-weight:800;
  font-size:clamp(28px,5vw,48px);
  line-height:1;letter-spacing:-.06em;color:var(--white);
}
.news-cinema em{font-family:Georgia;font-weight:400;font-style:italic}
.news-cinema small{display:block;font-family:var(--font-mono);font-size:6px;letter-spacing:.1em;margin-top:12px;color:var(--white-muted)}
.cinema-star{position:absolute;right:0;bottom:-10px;font-size:120px;color:var(--acid);line-height:1;opacity:.4}
.news-source{font-size:10px;color:var(--white-muted);margin-top:24px}
.news-source a{color:var(--acid);transition:opacity var(--t-fast)}
.news-source a:hover{opacity:.7}

/* ── Communauté ──────────────────────────────────────────────── */
.community-section{padding-bottom:clamp(64px,10vh,120px)}
.community-inner{
  background:var(--onyx);border:1px solid rgba(250,250,250,.07);
  border-radius:var(--r-lg);padding:clamp(40px,6vw,80px);
  display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,80px);
  overflow:hidden;position:relative;
}
.community-inner::before{
  content:'';position:absolute;
  width:400px;height:400px;border-radius:50%;
  background:radial-gradient(circle,rgba(204,255,0,.06),transparent 70%);
  top:-100px;left:-100px;pointer-events:none;
}
.community-heading{
  font-family:var(--font-display);font-size:clamp(40px,6vw,80px);
  font-weight:800;line-height:.95;letter-spacing:-.05em;
  margin:16px 0 20px;
}
.text-outline-acid{-webkit-text-stroke:2px var(--acid);color:transparent}
.community-visual{position:relative;display:flex;align-items:center;justify-content:center}
.chat-preview{
  background:var(--onyx-2);border:1px solid rgba(250,250,250,.1);
  border-radius:var(--r-md);padding:20px;
  width:100%;max-width:300px;position:relative;z-index:1;
  transform:rotate(4deg);
  box-shadow:0 24px 64px rgba(0,0,0,.5);
}
.chat-preview-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
.chat-brand{font-family:var(--font-display);font-size:20px;font-weight:800;letter-spacing:-.06em}
.chat-brand>span{color:var(--acid)}
.chat-room{
  display:flex;align-items:center;gap:10px;
  background:var(--onyx-3);border-radius:var(--r-sm);
  padding:10px 12px;margin-top:6px;
}
.chat-hash{
  width:30px;height:30px;display:grid;place-items:center;
  border-radius:var(--r-sm);font-size:18px;font-family:Georgia;
  flex-shrink:0;
  background:var(--onyx);color:var(--white-muted);
}
.hash-0{color:var(--hyper);background:rgba(255,0,255,.1)}
.hash-1{color:var(--ice);background:rgba(0,240,255,.1)}
.hash-2{color:var(--acid);background:rgba(204,255,0,.1)}
.chat-room strong{font-size:11px;font-weight:700;display:block}
.chat-room small{font-size:9px;color:var(--white-muted);display:block;margin-top:2px}
.chat-arr{margin-left:auto;color:var(--white-muted);font-size:12px}
.chat-label{display:block;text-align:center;margin-top:14px}
.comm-ring{position:absolute;border:1px solid rgba(250,250,250,.06);border-radius:50%}
.ring-1{width:320px;height:320px}
.ring-2{width:420px;height:260px;transform:rotate(-45deg)}
.comm-star{
  position:absolute;right:0;top:0;
  font-size:80px;color:var(--acid);
  line-height:1;z-index:0;opacity:.4;
}

/* ── Contact ─────────────────────────────────────────────────── */
.contact-section{
  display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,7vw,100px);
  padding-bottom:clamp(72px,10vh,120px);align-items:start;
}
.contact-intro{}
.contact-intro .section-title{margin:12px 0 24px}
.contact-cards{display:grid;gap:2px;align-self:center}
.contact-card{
  background:var(--onyx);border:1px solid rgba(250,250,250,.07);
  padding:28px 32px;display:flex;flex-direction:column;gap:12px;
}
.contact-card>span.text-label{margin-bottom:4px}
.contact-phone{font-family:var(--font-display);font-size:28px;font-weight:800;letter-spacing:-.04em;transition:color var(--t-fast)}
.contact-phone:hover{color:var(--acid)}
.contact-card a{transition:color var(--t-fast)}
.contact-card a:hover{color:var(--acid)}

/* ── Responsive ──────────────────────────────────────────────── */
@media(max-width:1100px){
  .hero-grid{gap:32px}
  .hero-title{font-size:clamp(48px,7.5vw,88px)}
  .quick-links-bar{grid-template-columns:repeat(2,1fr)}
  .ql-item:nth-child(2){border-right:0}
  .ql-item:nth-child(3){border-top:1px solid rgba(250,250,250,.08)}
  .intro-section{grid-template-columns:1fr;gap:24px}
  .intro-index{flex-direction:row;align-items:center;gap:24px}
  .intro-number{font-size:72px}
  .intro-bottom{flex-direction:column;align-items:flex-start;gap:16px}
  .paths-grid{grid-template-columns:1fr 1fr}
  .track-card:last-child{grid-column:1/-1;flex-direction:row;gap:24px;align-items:center;border-right:0;border-top:1px solid rgba(250,250,250,.07)}
  .track-card:last-child .track-illustration{flex-shrink:0;width:120px}
  .track-card:last-child .track-num{font-size:56px}
  .life-section{gap:40px}
  .news-card.featured{grid-column:auto}
  .community-inner{grid-template-columns:1fr}
  .community-visual{min-height:280px}
  .contact-section{grid-template-columns:1fr}
  .section-header{flex-direction:column;align-items:flex-start}
  .section-aside{text-align:left;max-width:none}
}
@media(max-width:760px){
  .hero-grid{grid-template-columns:1fr;padding-top:36px;padding-bottom:32px;gap:32px}
  .hero-title{font-size:clamp(50px,12vw,80px)}
  .ht-outline{-webkit-text-stroke:1px var(--white)}
  .desktop-br{display:none}
  .photo-frame{border-top-left-radius:60px;height:300px}
  .hero-postcard{left:-10px;bottom:50px}
  .quick-links-bar{grid-template-columns:1fr;border-bottom:0}
  .ql-item{border-right:0;border-bottom:1px solid rgba(250,250,250,.08)}
  .ql-item:nth-child(3){border-top:0}
  .paths-grid{grid-template-columns:1fr}
  .track-card:last-child{grid-column:auto;flex-direction:column}
  .track-card:last-child .track-num{font-size:clamp(48px,10vw,72px)}
  .life-section{grid-template-columns:1fr;gap:40px}
  .news-grid{grid-template-columns:1fr}
  .news-card.featured{grid-column:auto}
  .contact-cards{grid-template-columns:1fr 1fr}
}
@media(max-width:520px){
  .hero-title{font-size:clamp(42px,14vw,72px)}
  .hero-star-inline{font-size:.4em}
  .hero-actions{flex-direction:column;align-items:flex-start;gap:16px}
  .hero-postcard{left:-4px;padding:14px}
  .postcard-main{font-size:11px}
  .life-art-word{font-size:clamp(48px,13vw,72px)}
  .contact-cards{grid-template-columns:1fr}
  .community-inner{padding:28px 20px}
  .news-grid{gap:0}
}
</style>
