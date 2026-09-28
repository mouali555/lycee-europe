<script setup>
import { computed, ref } from 'vue'
useHead({ title: 'La vie lycéenne', meta: [{ name: 'description', content: 'Sport, culture, foyer et engagement : découvrez les possibilités de vivre pleinement vos années au Lycée de l’Europe.' }] })
const selectedCategory = ref('Tout découvrir')
const categories = ['Tout découvrir', 'Sport', 'Culture', 'Détente']
const activities = [
  {
    "id": "sport",
    "category": "Sport",
    "title": "L’esprit d’équipe.",
    "subtitle": "Association sportive",
    "description": "Se retrouver sur le terrain, se dépasser ensemble et faire vivre les couleurs du lycée.",
    "theme": "sport",
    "keywords": [
      "Pratique",
      "Rencontres",
      "Collectif"
    ],
    "detail": "L’association sportive fait partie de la vie de l’établissement. Elle permet de prolonger la pratique sportive et de partager une activité avec d’autres élèves.",
    "next": "Rapprochez-vous des professeurs d’EPS pour connaître les activités proposées, les créneaux de cette année et les conditions d’adhésion."
  },
  {
    "id": "culture",
    "category": "Culture",
    "title": "Un autre regard.",
    "subtitle": "Photo & cinéma-audiovisuel",
    "description": "Observer, imaginer, raconter. Explorer les images et partager son regard sur le monde.",
    "theme": "culture",
    "keywords": [
      "Photographie",
      "Cinéma",
      "Création"
    ],
    "detail": "Le site du lycée présente un club photo ainsi que des activités de cinéma-audiovisuel. L’option et le club audiovisuel participent à la vie culturelle de l’établissement.",
    "next": "Consultez la vie scolaire ou les enseignants concernés pour connaître les projets proposés et les modalités de participation."
  },
  {
    "id": "foyer",
    "category": "Détente",
    "title": "Des moments pour se retrouver.",
    "subtitle": "Les temps hors cours",
    "description": "Une pause, une rencontre, une discussion. Ces petits moments qui font aussi les années lycée.",
    "theme": "relax",
    "keywords": [
      "Pause",
      "Échanges",
      "Rencontres"
    ],
    "detail": "Les temps hors cours font aussi partie de la vie au lycée. Ils sont l’occasion de rencontrer d’autres élèves, de discuter et de prendre part à la vie collective.",
    "next": "La vie scolaire vous renseigne sur les espaces accessibles aux élèves, leurs horaires d’ouverture et les règles d’utilisation."
  }
]
const filteredActivities = computed(() => activities.filter(activity => selectedCategory.value === 'Tout découvrir' || activity.category === selectedCategory.value))
</script>

<template>
  <div class="student-life">
    <section class="life-hero">
      <div class="container life-hero-grid">
        <div class="life-hero-copy">
          <p class="eyebrow"><span class="hero-spark" aria-hidden="true">✦</span> LA VIE LYCÉENNE / LYCÉE EUROPE</p>
          <h1>VOS ANNÉES.<br>VOS IDÉES.<br><em>VOTRE PLACE.</em></h1>
          <p class="hero-description">Un lycée, c’est aussi tout ce qui se passe entre les cours. Des rencontres, des projets et des expériences qui font grandir.</p>
          <a class="page-button" href="#activites"><span>TROUVER CE QUI M’ANIME</span><b aria-hidden="true">↘</b></a>
        </div>
        <div class="life-visual" aria-hidden="true">
          <div class="visual-grid"></div>
          <div class="visual-top"><span>LA CURIOSITÉ NOUS RASSEMBLE.</span><span>↗</span></div>
          <svg class="loop-art" viewBox="0 0 500 500" fill="none">
            <defs><linearGradient id="life-orbit-gradient" x1="80" y1="70" x2="405" y2="420" gradientUnits="userSpaceOnUse"><stop stop-color="#8b42f6"/><stop offset=".25" stop-color="#e1b7ff"/><stop offset=".42" stop-color="#fff"/><stop offset=".61" stop-color="#9a59ec"/><stop offset=".84" stop-color="#ce9aff"/><stop offset="1" stop-color="#7136db"/></linearGradient></defs>
            <ellipse cx="250" cy="250" rx="220" ry="90" transform="rotate(-41 250 250)" stroke="url(#life-orbit-gradient)" stroke-width="12"/>
            <ellipse cx="250" cy="250" rx="220" ry="90" transform="rotate(41 250 250)" stroke="url(#life-orbit-gradient)" stroke-width="12"/>
            <ellipse cx="250" cy="250" rx="152" ry="220" stroke="url(#life-orbit-gradient)" stroke-width="3" opacity=".5"/>
            <circle cx="97" cy="110" r="8" fill="#dfff78"/><circle cx="404" cy="391" r="5" fill="#eacfff"/>
          </svg>
          <div class="circle-word">FAIRE.<br><span>ENSEMBLE.</span></div>
          <span class="visual-star">✦</span>
          <div class="visual-bottom"><span>LES IDÉES PRENNENT VIE ICI.</span><span>01 / ∞</span></div>
        </div>
      </div>
      <div class="life-ribbon"><div class="container"><span>IMAGINER <b aria-hidden="true">✳</b></span><span>PARTAGER <b aria-hidden="true">✳</b></span><span>S’ENGAGER <b aria-hidden="true">✳</b></span><span>GRANDIR <b aria-hidden="true">✳</b></span></div></div>
    </section>

    <section id="engagement" class="engagement-section">
      <div class="container">
        <div class="section-top"><div><p class="eyebrow">01 / PRENDRE PART À LA VIE DU LYCÉE</p><h2>VOTRE VOIX.<br><em>UNE VRAIE PLACE.</em></h2></div><p>Faire bouger les choses commence souvent par une idée, et l’envie de la partager.</p></div>
        <div class="engagement-grid">
          <article class="engagement-card mdl-card">
            <div class="engagement-top"><span>01 / DONNER VIE AUX PROJETS</span><span aria-hidden="true">↗</span></div>
            <div class="acronym-line"><span class="big-acronym">MDL<span>.</span></span><svg viewBox="0 0 72 72" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M17 62V27L36 12l19 15v35M8 62h56M28 62V41h16v21M36 12V3"/><circle cx="36" cy="29" r="5"/></svg></div>
            <h3>La Maison des lycéens</h3><p>Une association portée par les élèves pour faire vivre le lycée : culture, arts, sport, sorties et événements collectifs.</p>
            <div class="engagement-tags"><span>Imaginer</span><span>Organiser</span><span>Partager</span></div>
            <details><summary>Comment participer <span aria-hidden="true">+</span></summary><div class="engagement-detail"><p>Vous avez envie de contribuer à un club, d’aider à organiser un événement ou de proposer une activité ? Adressez-vous aux élèves de la MDL ou à la vie scolaire pour découvrir les projets en cours et les modalités d’adhésion.</p></div></details>
          </article>
          <article class="engagement-card cvl-card">
            <div class="engagement-top"><span>02 / FAIRE ENTENDRE SA VOIX</span><span aria-hidden="true">↗</span></div>
            <div class="acronym-line"><span class="big-acronym">CVL<span>.</span></span><svg viewBox="0 0 72 72" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M12 12h48v37H31L18 62V49h-6V12Z"/><path d="M24 27h24M24 37h16"/></svg></div>
            <h3>Le Conseil de la vie lycéenne</h3><p>Un espace pour représenter les élèves et contribuer aux décisions qui améliorent le quotidien de tous.</p>
            <div class="engagement-tags"><span>Écouter</span><span>Proposer</span><span>Représenter</span></div>
            <details><summary>Comment s’impliquer <span aria-hidden="true">+</span></summary><div class="engagement-detail"><p>Aménagement des espaces, solidarité, santé, environnement : partagez vos propositions avec vos représentants. La vie scolaire peut vous renseigner sur le fonctionnement du CVL et les élections des élèves représentants.</p></div></details>
          </article>
        </div>
      </div>
    </section>

    <section id="activites" class="activities-section">
      <div class="container">
        <div class="section-top"><div><p class="eyebrow">02 / SUIVRE SES ENVIES</p><h2>DU TEMPS POUR<br><em>CE QUI VOUS ANIME.</em></h2></div><p>Sur le terrain, autour des images ou entre deux cours : il y a mille façons de créer des liens.</p></div>
        <div class="activity-toolbar">
          <div class="activity-filters" role="group" aria-label="Filtrer les activités"><button v-for="category in categories" :key="category" type="button" :class="{ active: selectedCategory === category }" :aria-pressed="selectedCategory === category" @click="selectedCategory = category">{{ category }}</button></div>
          <p role="status">{{ filteredActivities.length }} univers à découvrir</p>
        </div>
        <div class="activities-grid">
          <article v-for="activity in filteredActivities" :key="activity.id" class="activity-card" :class="activity.theme">
            <div class="activity-illustration" aria-hidden="true">
              <div class="illustration-label"><span>{{ activity.category }}</span><span>↗</span></div>
              <svg v-if="activity.id === 'sport'" viewBox="0 0 300 210" fill="none"><circle cx="150" cy="111" r="66" fill="currentColor" fill-opacity=".06" stroke="currentColor" stroke-width="2"/><path d="M84 111h132M150 45v132M103 65c63 20 63 70 0 91M197 65c-63 20-63 70 0 91" stroke="currentColor" stroke-width="2"/><path d="m39 91 28-7m-27 27h23m-21 27 25 5" stroke="currentColor" stroke-width="2"/><path d="M246 46v22m-11-11h22" stroke="currentColor" stroke-width="1.5"/></svg>
              <svg v-else-if="activity.id === 'culture'" viewBox="0 0 300 210" fill="none"><path d="M76 78h34l11-19h58l11 19h33v91H76V78Z" fill="currentColor" fill-opacity=".06" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="150" cy="121" r="31" stroke="currentColor" stroke-width="2"/><circle cx="150" cy="121" r="21" stroke="currentColor" stroke-width="2"/><circle cx="203" cy="94" r="4" fill="currentColor"/><path d="M78 158h143M132 49h36M246 38v22m-11-11h22" stroke="currentColor" stroke-width="1.5"/></svg>
              <svg v-else viewBox="0 0 300 210" fill="none"><path d="M77 50h89v68h-45l-27 24v-24H77V50Z" fill="currentColor" fill-opacity=".06" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M181 89h43v68h-16v21l-25-21h-46v-26" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M97 74h49M97 91h34M167 116h37M158 132h46M237 38v22m-11-11h22" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <div class="activity-content">
              <p class="activity-subtitle">{{ activity.subtitle }}</p><h3>{{ activity.title }}</h3><p class="activity-description">{{ activity.description }}</p>
              <div class="activity-keywords"><span v-for="keyword in activity.keywords" :key="keyword">{{ keyword }}</span></div>
              <details><summary>En savoir plus <span aria-hidden="true">+</span></summary><div class="activity-detail"><p>{{ activity.detail }}</p><h4>Le premier pas</h4><p>{{ activity.next }}</p></div></details>
            </div>
          </article>
        </div>
        <p class="activities-note">Les activités et les créneaux peuvent évoluer dans l’année. La vie scolaire vous renseigne sur les possibilités du moment. <a href="https://lycee-europe-dunkerque.fr/" target="_blank" rel="noopener noreferrer">Consulter les actualités du lycée ↗<span class="visually-hidden"> (nouvel onglet)</span></a></p>
      </div>
    </section>

    <section class="idea-section">
      <div class="container idea-grid"><div class="idea-symbol" aria-hidden="true">✳</div><div><p class="eyebrow">03 / LE PROCHAIN PROJET</p><h2>ET SI ÇA COMMENÇAIT<br>PAR <em>VOUS ?</em></h2><p class="idea-description">Un club à imaginer, une cause à défendre, un événement à créer : échangez avec la MDL, vos représentants ou la vie scolaire pour donner une première forme à votre idée.</p><a class="page-button" href="#engagement"><span>DÉCOUVRIR LES INTERLOCUTEURS</span><b aria-hidden="true">↑</b></a></div></div>
    </section>
  </div>
</template>

<style scoped>
.student-life{--life-dark:#0c061d;--life-light:#f0edf7;--life-text:#1b102d;--life-muted:#655b73;--life-line:#24133730;background:var(--life-dark);color:#fff}
h1,h2,h3,h4,p{margin:0}h1,h2,h3{font-family:var(--font-display,'Space Grotesk',sans-serif)}em{font:inherit;color:var(--accent,#a980ff)}.eyebrow{font-size:10px;line-height:1.5;font-weight:700;letter-spacing:.13em;color:inherit}.life-hero{background:radial-gradient(ellipse at 78% 50%,#a452e920,transparent 43%),var(--life-dark);overflow:hidden}.life-hero-grid{display:grid;grid-template-columns:1.07fr 1fr;gap:34px;align-items:center;padding-top:77px;padding-bottom:75px}.life-hero-copy{position:relative;z-index:1}.life-hero-copy .eyebrow{display:flex;align-items:center;gap:12px;color:#e4dcf3}.hero-spark{font-size:24px;color:var(--acid,#dfff78)}h1{font-weight:700;font-size:clamp(48px,6.1vw,88px);line-height:.98;letter-spacing:-.06em;margin:25px 0}.hero-description{font-size:14px;line-height:1.9;color:#c4b9d4;max-width:405px;margin-bottom:28px}.page-button{display:inline-flex;align-items:stretch;max-width:100%;border:1px solid #a980ff80;background:transparent;color:#fff;font:700 10px/1.5 var(--font-sans,Inter,sans-serif);letter-spacing:.05em;cursor:pointer;text-decoration:none;transition:background .2s,transform .2s}.page-button>span{align-self:center;padding:15px 20px}.page-button>b{display:grid;place-items:center;min-width:54px;padding:8px;background:var(--acid,#dfff78);color:#180c2d;font-size:26px;line-height:1;font-weight:400;transition:background .2s}.page-button:hover{background:#a980ff18;transform:translateY(-2px)}.page-button:hover>b{background:#edffb7}.life-visual{position:relative;isolation:isolate;aspect-ratio:1;min-width:0}.life-visual:before{content:'';position:absolute;inset:15%;border-radius:50%;background:radial-gradient(ellipse,#b75afe3b,transparent 70%);filter:blur(18px)}.visual-grid{position:absolute;inset:5%;background-image:linear-gradient(#ae7fff0a 1px,transparent 1px),linear-gradient(90deg,#ae7fff0a 1px,transparent 1px);background-size:42px 42px;mask-image:radial-gradient(ellipse,#000 30%,transparent 70%)}.visual-top,.visual-bottom{position:absolute;inset-inline:10px;display:flex;align-items:center;justify-content:space-between;gap:12px;color:#bcacd2;font-size:7px;letter-spacing:.13em;z-index:2}.visual-top{top:0}.visual-top>span:last-child{font-size:23px;color:var(--acid,#dfff78)}.visual-bottom{bottom:0}.loop-art{position:absolute;inset:0;width:100%;height:100%;filter:drop-shadow(0 9px 13px #964eff54)}.circle-word{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:1;text-align:center;font:700 clamp(30px,3.4vw,49px)/.99 var(--font-display);letter-spacing:-.06em;text-shadow:0 3px 20px #150326;background:radial-gradient(ellipse at center,#15052f70,transparent 50%)}.circle-word>span{color:#dcc1ff}.visual-star{position:absolute;right:2%;top:18%;color:var(--acid,#dfff78);font-size:52px;line-height:1}.life-ribbon{border-top:1px solid #ffffff28;border-bottom:1px solid #ffffff28;background:#100923}.life-ribbon>.container{display:flex;align-items:center;justify-content:space-between;gap:25px;padding-top:20px;padding-bottom:20px}.life-ribbon span{display:flex;align-items:center;gap:clamp(20px,6vw,84px);font:500 clamp(13px,1.45vw,21px) var(--font-display);letter-spacing:-.025em}.life-ribbon b{font-size:28px;line-height:1;color:var(--acid,#dfff78);font-weight:400}
.engagement-section{background:var(--life-light);color:var(--life-text);padding:84px 0 0;scroll-margin-top:85px}.section-top{display:flex;justify-content:space-between;align-items:flex-end;gap:50px;margin-bottom:40px}.section-top h2,.idea-section h2{font-size:clamp(32px,4.2vw,58px);line-height:1.03;letter-spacing:-.055em;font-weight:700;margin-top:19px}.section-top h2 em{color:#776188}.section-top>p{font-size:14px;line-height:1.85;max-width:310px;color:var(--life-muted);padding-bottom:3px}.engagement-grid{display:grid;grid-template-columns:1fr 1fr;gap:17px;align-items:start}.engagement-card{padding:25px 30px 0;display:flex;flex-direction:column;border:1px solid var(--life-line)}.mdl-card{background:#ded1f0;color:#231036}.cvl-card{background:#e7edce;color:#223016}.engagement-top{display:flex;justify-content:space-between;align-items:center;gap:20px}.engagement-top>span:first-child{font-size:9px;letter-spacing:.09em;font-weight:600}.engagement-top>span:last-child{font-size:26px;line-height:1}.acronym-line{display:flex;justify-content:space-between;align-items:center;gap:16px;margin:34px 0 20px}.big-acronym{font:600 clamp(65px,7.8vw,110px)/.9 var(--font-display);letter-spacing:-.08em}.big-acronym>span{color:#8251af}.cvl-card .big-acronym>span{color:#637c29}.acronym-line svg{width:68px;height:68px;opacity:.75}.engagement-card h3{font-size:25px;letter-spacing:-.03em;font-weight:600;line-height:1.25}.engagement-card>p{font-size:13px;line-height:1.85;max-width:410px;color:#574368;margin-top:15px;min-height:73px}.cvl-card>p{color:#485c38}.engagement-tags{display:flex;flex-wrap:wrap;gap:7px;margin:24px 0 28px}.engagement-tags>span{font-size:9px;padding:6px 10px;line-height:1.4;border:1px solid #32174130}.cvl-card .engagement-tags>span{border-color:#2d421c30}details{border-top:1px solid #32174130;margin-top:auto}.cvl-card details{border-color:#2d421c30}details summary{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:18px 0;font-size:12px;font-weight:700;cursor:pointer;list-style:none}summary::-webkit-details-marker{display:none}summary>span{display:grid;place-items:center;width:30px;height:30px;font-size:23px;line-height:1;font-weight:400;background:#ffffff45;transition:transform .2s}details[open]>summary>span{transform:rotate(45deg)}.engagement-detail{padding:8px 0 27px}.engagement-detail p{font-size:12px;line-height:1.9;color:#574368}.cvl-card .engagement-detail p{color:#485c38}
.activities-section{background:radial-gradient(ellipse at 100% 100%,#ab7bea35,transparent 50%),var(--life-light);color:var(--life-text);padding:90px 0 60px;scroll-margin-top:85px}.activity-toolbar{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-bottom:25px}.activity-toolbar>p{font-size:10px;color:var(--life-muted)}.activity-filters{display:flex;flex-wrap:wrap;gap:7px}.activity-filters button{font:600 11px var(--font-sans);min-height:43px;padding:11px 17px;cursor:pointer;border:1px solid var(--life-line);background:transparent;color:var(--life-muted);transition:color .2s,background .2s}.activity-filters button:hover{background:#e2d8f1;color:var(--life-text)}.activity-filters button.active{background:var(--life-dark);color:#fff;border-color:var(--life-dark)}.activities-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;align-items:start}.activity-card{border:1px solid var(--life-line);background:#faf8fd;overflow:hidden;transition:border-color .2s}.activity-card:hover{border-color:#9479ae}.activity-illustration{height:225px;position:relative;overflow:hidden;background:#dfff78;color:#304407;border-bottom:1px solid var(--life-line)}.culture .activity-illustration{background:#b998e8;color:#31144e}.relax .activity-illustration{background:#1a0d2d;color:#ccb0ed}.illustration-label{position:absolute;inset:18px 20px auto;display:flex;justify-content:space-between;align-items:center;font-size:9px;text-transform:uppercase;letter-spacing:.1em;font-weight:700;z-index:1}.illustration-label>span:last-child{font-size:20px;font-weight:400;line-height:1}.activity-illustration>svg{position:absolute;bottom:0;left:0;width:100%;height:205px;transition:transform .45s ease}.activity-card:hover .activity-illustration>svg{transform:translateY(-4px) rotate(-3deg)}.activity-content{padding:26px 23px 0}.activity-subtitle{font-size:9px;line-height:1.5;letter-spacing:.04em;font-weight:700;text-transform:uppercase;color:#776485;margin-bottom:13px;min-height:27px}.activity-content h3{font-size:29px;line-height:1.07;letter-spacing:-.045em;font-weight:600;min-height:95px}.activity-description{font-size:12px;line-height:1.85;color:var(--life-muted);min-height:90px;margin-top:14px}.activity-keywords{display:flex;flex-wrap:wrap;gap:6px;margin:22px 0 24px}.activity-keywords>span{font-size:8px;line-height:1.4;padding:6px 8px;border:1px solid var(--life-line);color:#6c5a7a}.activity-content details{border-color:var(--life-line)}.activity-content summary>span{background:#eae2f3}.activity-detail{padding:5px 0 25px}.activity-detail p{font-size:12px;line-height:1.85;color:var(--life-muted)}.activity-detail h4{font-size:12px;margin:20px 0 9px}.activities-note{font-size:11px;line-height:1.9;color:var(--life-muted);margin-top:26px;max-width:940px}.activities-note a{color:#61328a;text-decoration:underline;text-underline-offset:3px}
.idea-section{padding:82px 0 88px;background:var(--life-dark)}.idea-grid{display:grid;grid-template-columns:250px 1fr;gap:80px;align-items:center}.idea-symbol{color:var(--acid,#dfff78);font:400 240px/1 var(--font-sans);text-align:center}.idea-section .eyebrow{color:var(--accent,#a980ff)}.idea-section h2{font-size:clamp(33px,4.3vw,61px)}.idea-description{font-size:14px;line-height:1.85;color:#c4b9d4;max-width:580px;margin-top:23px}.idea-section .page-button{margin-top:27px}
.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}button:focus-visible,a:focus-visible,summary:focus-visible{outline:3px solid #8755ba;outline-offset:5px}.life-hero a:focus-visible,.idea-section a:focus-visible{outline-color:var(--acid,#dfff78)}
@media(min-width:701px) and (prefers-reduced-motion:no-preference){.loop-art{animation:life-orbit 11s ease-in-out infinite}@keyframes life-orbit{0%,100%{transform:rotate(-8deg) translateY(0)}50%{transform:rotate(8deg) translateY(-7px)}}}
@supports(animation-timeline:view()){ @media(prefers-reduced-motion:no-preference){.engagement-card,.activity-card,.idea-grid{animation:life-enter both linear;animation-timeline:view();animation-range:entry 0% entry 22%}@keyframes life-enter{from{opacity:.35;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}}}
@media(max-width:1000px){.life-hero-grid{gap:22px;padding-top:60px;padding-bottom:60px}.life-hero-copy .eyebrow{font-size:8px}h1{font-size:clamp(43px,6.1vw,67px)}.hero-description{font-size:13px}.visual-top,.visual-bottom{font-size:6px}.visual-star{font-size:38px;right:0}.section-top{gap:30px}.section-top>p{max-width:260px}.engagement-card{padding-inline:24px}.engagement-card h3{font-size:22px}.engagement-card>p{min-height:96px}.activities-grid{gap:12px}.activity-content{padding:23px 18px 0}.activity-content h3{font-size:25px;min-height:84px}.activity-description{min-height:113px}.activity-illustration{height:200px}.activity-illustration>svg{height:177px}.activity-keywords{gap:4px}.activity-keywords>span{font-size:7px;padding:5px 6px}.idea-grid{grid-template-columns:175px 1fr;gap:45px}.idea-symbol{font-size:175px}}
@media(max-width:700px){.life-hero-grid{grid-template-columns:1fr;padding-top:45px;padding-bottom:30px;gap:35px}h1{font-size:clamp(43px,10.1vw,69px);margin:24px 0}.life-hero-copy .eyebrow{font-size:8px}.hero-description{font-size:14px;max-width:430px;margin-bottom:25px}.page-button>span{padding:14px 15px;font-size:9px}.page-button>b{min-width:47px}.life-visual{max-width:415px;width:100%;justify-self:center}.circle-word{font-size:clamp(36px,9.7vw,49px)}.visual-top,.visual-bottom{font-size:7px}.visual-star{font-size:43px;right:2%}.life-ribbon>.container{display:grid;grid-template-columns:1fr 1fr;gap:15px 25px;padding-top:19px;padding-bottom:19px}.life-ribbon span{justify-content:space-between;font-size:16px;gap:8px}.life-ribbon b{font-size:23px}.engagement-section{padding-top:52px}.section-top{display:block;margin-bottom:28px}.section-top h2{font-size:clamp(29px,7.65vw,43px);margin-top:17px}.section-top>p{max-width:100%;margin-top:20px;font-size:13px}.eyebrow{font-size:9px}.engagement-grid{grid-template-columns:1fr;gap:15px}.engagement-card{padding:23px 24px 0}.big-acronym{font-size:96px}.acronym-line{margin-top:30px}.acronym-line svg{width:62px;height:62px}.engagement-card h3{font-size:26px}.engagement-card>p{min-height:0;max-width:100%}.activities-section{padding-top:55px;padding-bottom:39px}.activity-toolbar{display:block;margin-bottom:22px}.activity-toolbar>p{margin-top:15px}.activity-filters{gap:6px}.activity-filters button{font-size:10px;padding-inline:13px}.activities-grid{grid-template-columns:1fr;gap:18px}.activity-content{padding:24px 24px 0}.activity-content h3{font-size:32px;min-height:0;max-width:340px}.activity-subtitle{min-height:0;font-size:9px;margin-bottom:13px}.activity-description{min-height:0;font-size:13px}.activity-illustration{height:216px}.activity-illustration>svg{height:195px}.activity-keywords{gap:6px}.activity-keywords>span{font-size:9px;padding:6px 9px}.activities-note{font-size:10px}.idea-section{padding:48px 0 56px}.idea-grid{grid-template-columns:1fr;gap:28px}.idea-symbol{font-size:81px;text-align:left;line-height:.8}.idea-section h2{font-size:clamp(31px,8vw,44px)}.idea-description{font-size:13px}.idea-section .page-button>span{font-size:8px}}
@media(max-width:360px){h1{font-size:40px}.life-hero-copy .eyebrow{font-size:7px}.engagement-card{padding-inline:19px}.big-acronym{font-size:84px}.activity-filters button{font-size:9px;padding-inline:10px}.activity-content{padding-inline:20px}}
</style>