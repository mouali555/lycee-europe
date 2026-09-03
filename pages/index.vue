<template>
  <main class="negev-home">
    <header class="nav-shell">
      <NuxtLink to="/" class="brand-lockup"><span class="brand-mark">✡</span><span>NEGEV</span><small>NO. 7 / ISRAEL</small></NuxtLink>
      <nav><a href="#origin">Origin</a><a href="#ritual">Ritual</a><a href="#collection">Collection</a><NuxtLink to="/chat">קהילה / Chat</NuxtLink></nav>
      <a class="nav-button" href="#collection">Shop the drop <span>↗</span></a>
    </header>

    <section class="hero-immersion">
      <div class="hero-grid-lines"></div>
      <div class="hero-copy reveal"><p class="micro-label"><span></span> Small batch spirit / Jaffa, IL</p><h1>Made of<br /><i>sunlight.</i></h1><p class="hero-lede">A bright pomegranate spirit from the edge of the desert. Distilled in Israel. Poured everywhere.</p><a class="outline-link" href="#origin">Explore the origin <span>↓</span></a></div>
      <div class="hero-bottle-wrap"><div class="flag-badge"><b>✡</b><span>ISRAEL<br />ישראל</span></div><div class="halo"></div><div class="hero-bottle"><div class="cap">7</div><div class="neck"></div><div class="body"><div class="shine"></div><div class="front-label"><small>NEGEV DISTILLERY</small><strong>NEGEV</strong><em>NO. 7</em><span></span><b>POMEGRANATE<br />CITRUS SPIRIT</b><i>700 ML · 40% VOL.</i></div></div></div><div class="bottle-caption">BATCH 024 <span>/</span> 7.31°E</div></div>
      <div class="hero-index"><span>001</span><p>THE FIRST<br />ISRAELI<br />NIGHT SPIRIT</p><div class="vertical-rule"></div><small>SCROLL TO TASTE</small></div>
    </section>

    <div class="ticker"><span>JAFFA / NEGEV / SHABBAT SHALOM / MADE IN ISRAEL / </span><span>JAFFA / NEGEV / SHABBAT SHALOM / MADE IN ISRAEL / </span></div>

    <section id="origin" class="origin-section page-section"><div class="section-kicker">02 / The place</div><div class="origin-layout"><div class="origin-title"><p class="micro-label orange"><span></span> A spirit with a postcode</p><h2>From the<br /><i>desert</i><br />to the sea.</h2></div><div class="origin-copy"><p class="big-copy">The Negev gives us the heat. Jaffa gives us the edge.</p><p>We make Negev No. 7 where old stone streets meet open water, using pomegranates, bitter citrus and wild zaatar gathered under the long Israeli sun.</p><p>Every bottle is blended by hand, numbered, and released when it feels ready. No shortcuts. No filler.</p><a class="dark-link" href="#ritual">See how we make it <span>↗</span></a></div></div><div class="origin-stamp">DISTILLED<br /><b>IN</b><br />ISRAEL</div></section>

    <section id="ritual" class="ritual-section page-section"><div class="section-kicker light">03 / The ritual</div><div class="ritual-intro"><h2>Friday night<br /><i>starts here.</i></h2><p>At golden hour, the city exhales. Ice hits glass. The first pour is for the table.</p></div><div class="ritual-steps"><article><span>01</span><div class="step-icon sun-icon"></div><h3>Sunset</h3><p>Open when the sky turns copper over the Mediterranean.</p></article><article><span>02</span><div class="step-icon glass-icon"></div><h3>Pour</h3><p>Two fingers, one clear cube, a twist of lemon peel.</p></article><article><span>03</span><div class="step-icon star-icon">✡</div><h3>Shabbat שלום</h3><p>Pass the bottle. Stay for the conversation.</p></article></div><NuxtLink to="/chat" class="ritual-chat">Join the Negev table <span>קהילה ↗</span></NuxtLink></section>

    <section id="collection" class="collection-section page-section"><div class="section-kicker">04 / The collection</div><div class="collection-head"><h2>Three ways<br /><i>to stay up.</i></h2><p>Limited release / 2026<br />Free shipping over €80</p></div><div class="product-grid"><article class="product product-red"><div class="mini-product"><span>7</span></div><div class="product-info"><small>01 / SIGNATURE</small><h3>Negev No. 7</h3><p>Pomegranate · lemon · wild zaatar</p><strong>€48 <small>700 ML</small></strong></div></article><article class="product product-sand"><div class="mini-product pale"><span>0</span></div><div class="product-info"><small>02 / ZERO PROOF</small><h3>Negev 0°</h3><p>Verveine · green fig · sea salt</p><strong>€42 <small>700 ML</small></strong></div></article><article class="product product-teal"><div class="mini-product teal"><span>A</span></div><div class="product-info"><small>03 / NIGHT EDITION</small><h3>After Sun</h3><p>Bitter orange · cardamom · smoke</p><strong>€52 <small>700 ML</small></strong></div></article></div></section>

    <section class="community-section"><div class="community-star">✡</div><div><p class="micro-label orange"><span></span> Negev community</p><h2>Same sun.<br /><i>Different stories.</i></h2><p>Meet the people, places and late-night recipes behind the bottle.</p></div><NuxtLink to="/chat" class="solid-link">Open the chat <span>קהילה ↗</span></NuxtLink></section>
    <footer class="site-footer"><span>NEGEV NO. 7</span><span>Drink slowly. Stay curious.</span><span>© 2026 / Jaffa, Israel</span></footer>
  </main>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue'
let onScroll
onMounted(() => { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.target.classList.toggle('visible', entry.isIntersecting)), { threshold: .15 }); document.querySelectorAll('.reveal').forEach((element) => observer.observe(element)); const bottle = document.querySelector('.hero-bottle-wrap'); onScroll = () => { if (bottle) bottle.style.setProperty('--scroll-scale', Math.max(.68, 1 - window.scrollY / 1100)) }; window.addEventListener('scroll', onScroll, { passive: true }); onScroll() })
onUnmounted(() => { if (onScroll) window.removeEventListener('scroll', onScroll) })
</script>
