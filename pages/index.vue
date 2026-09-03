<template>
  <main class="brand-site">
    <nav class="site-nav">
      <NuxtLink to="/" class="wordmark">NEGEV <span>NO. 7</span></NuxtLink>
      <div class="nav-links"><a href="#story">L'histoire</a><a href="#collection">La collection</a><NuxtLink to="/clubs">Journal</NuxtLink><NuxtLink to="/chat">Tchat</NuxtLink></div>
      <a class="nav-cta" href="#collection">Découvrir <span>↗</span></a>
    </nav>
    <section class="hero-section">
      <div class="hero-copy reveal-up"><p class="eyebrow"><span class="eyebrow-line"></span> תל אביב · ISRAËL · 2026</p><h1>Le soleil<br /><em>en bouteille.</em></h1><p class="hero-intro">Un spiritueux de grenade et d'agrumes, distillé en petites séries sous le ciel du Negev.</p><a href="#story" class="text-link">Entrer dans l'histoire <span>↓</span></a></div>
      <div class="bottle-stage" aria-label="Bouteille de Negev No. 7"><div class="sun-disc"></div><div class="bottle"><div class="bottle-cap"><span>7</span></div><div class="bottle-neck"><i></i></div><div class="bottle-body"><div class="bottle-glint"></div><div class="label"><span class="label-kicker">DISTILLED IN ISRAEL</span><strong>NEGEV</strong><span class="label-number">NO. 7</span><span class="label-rule"></span><span class="label-type">POMEGRANATE<br />& CITRUS SPIRIT</span><small>700 ML · 40% VOL.</small></div></div></div><span class="bottle-note note-top">01 / soleil brut</span><span class="bottle-note note-bottom">batch 024 · 7.31°E</span></div>
      <div class="hero-aside reveal-up"><span class="aside-number">01</span><p>La première gorgée est vive.<br />La dernière reste longtemps.</p><span class="vertical-label">AN UNCOMMON SPIRIT</span><NuxtLink to="/chat" class="chat-link">Ouvrir le tchat <span>↗</span></NuxtLink></div>
    </section>
    <section id="story" class="story-section content-band"><div class="section-marker">01 / ORIGINE</div><div class="story-grid"><div><p class="eyebrow coral">Fabriqué au bord du désert</p><h2>Un goût de<br /><em>lumière.</em></h2></div><div class="story-text"><p>NEGEV NO. 7 capture une journée israélienne : le rouge profond de la grenade, la fraîcheur du citron et cette chaleur minérale qui arrive juste avant la nuit.</p><p>Distillé lentement à Jaffa, puis assemblé à la main avec des botaniques du désert. Le vendredi, on ralentit : <strong>שבת שלום</strong>, un verre partagé, et la nuit qui commence.</p><a href="#collection" class="text-link dark">Notre méthode <span>↗</span></a></div></div><div class="marquee"><span>JAFFA · NEGEV · SHABBAT SHALOM · JAFFA · NEGEV · SHABBAT SHALOM · </span></div></section>
    <section id="collection" class="collection-section content-band"><div class="section-marker">02 / COLLECTION</div><div class="collection-heading"><h2>Choisissez<br /><em>votre chaleur.</em></h2><p>Deux expressions. Une même origine.</p></div><div class="product-row"><article class="product-card product-main"><div class="mini-bottle mini-red"><span>7</span></div><div><span class="product-index">01</span><h3>Negev No. 7</h3><p>Grenade · citron · zaatar sauvage</p></div><strong class="product-price">€48</strong></article><article class="product-card product-light"><div class="mini-bottle mini-clear"><span>0</span></div><div><span class="product-index">02</span><h3>Negev 0°</h3><p>Verveine · figue · sel marin</p></div><strong class="product-price">€42</strong></article></div></section>
    <footer class="site-footer"><span>NEGEV NO. 7</span><span>Drink slowly. Stay curious.</span><span>© 2026</span></footer>
  </main>
</template>
<script setup>
import { onMounted } from 'vue'
onMounted(() => { const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible') }) }, { threshold: 0.15 }); document.querySelectorAll('.reveal-up').forEach((element) => observer.observe(element)) })
</script>
