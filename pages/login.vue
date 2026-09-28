<template>
  <main class="auth-page">
    <section class="auth-story" aria-labelledby="story-title">
      <NuxtLink to="/" class="auth-brand" aria-label="Lycée Europe — Accueil">
        <span class="brand-mark" aria-hidden="true"><img src="/europe-orbit.svg" alt="" /></span>
        <span>lycée<br><strong>europe.</strong></span>
      </NuxtLink>
      <div class="story-copy">
        <span class="eyebrow"><span></span> L’ESPACE DE TOUTES VOS IDÉES</span>
        <h1 id="story-title">La suite<br> s’écrit<br><em>ensemble.</em></h1>
        <p>Un devoir à partager. Une question à poser.<br>Une idée à faire grandir. Vous êtes au bon endroit.</p>
      </div>
      <div class="community-art" aria-hidden="true">
        <div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div>
        <span class="art-star">✳</span>
        <img class="community-emblem" src="/europe-orbit.svg" alt="" />
        <span class="art-coordinate">EUROPE / LE COLLECTIF</span>
      </div>
      <div class="story-bottom"><span>Votre lycée. Votre communauté.</span><span>EST. EUROPE ↗</span></div>
    </section>

    <section class="auth-form-side" aria-labelledby="form-title">
      <NuxtLink to="/" class="back-link"><span aria-hidden="true">←</span> Retour au site</NuxtLink>
      <div class="auth-form-wrap">
        <span class="form-kicker">BIENVENUE CHEZ VOUS</span>
        <h2 id="form-title">{{ activeTab === 'login' ? 'Heureux de vous revoir.' : 'Faites partie du collectif.' }}</h2>
        <p class="form-intro">{{ activeTab === 'login' ? 'Retrouvez les échanges et la vie de votre lycée.' : 'Créez votre compte pour rejoindre les échanges.' }}</p>
        <div v-if="currentUser" class="signed-in-note"><p>Vous êtes connecté avec <strong>{{ currentUser.displayName || currentUser.email }}</strong>.</p><NuxtLink to="/chat">Rejoindre la communauté <span aria-hidden="true">↗</span></NuxtLink></div>
        <div class="auth-tabs" aria-label="Choisir un formulaire">
          <button type="button" :class="{ selected: activeTab === 'login' }" :aria-pressed="activeTab === 'login'" :disabled="isLoading" @click="changeTab('login')">Se connecter</button>
          <button type="button" :class="{ selected: activeTab === 'register' }" :aria-pressed="activeTab === 'register'" :disabled="isLoading" @click="changeTab('register')">Créer un compte</button>
        </div>
        <form :aria-busy="isLoading" @submit.prevent="activeTab === 'login' ? handleLogin() : handleRegister()">
          <div v-if="activeTab === 'register'" class="field-group"><label for="register-name">Prénom et nom</label><input id="register-name" v-model="name" autocomplete="name" placeholder="Camille Martin" required maxlength="80" :disabled="isLoading" /></div>
          <div class="field-group"><label for="auth-email">Adresse e-mail</label><input id="auth-email" v-model="email" type="email" autocomplete="email" autocapitalize="none" :spellcheck="false" placeholder="vous@exemple.fr" maxlength="254" required :disabled="isLoading" /></div>
          <div class="field-group">
            <div class="label-row"><label for="auth-password">Mot de passe</label><button v-if="activeTab === 'login'" type="button" class="text-button" @click="handleForgotPassword" :disabled="isLoading">Mot de passe oublié ?</button></div>
            <div class="password-field">
              <input id="auth-password" v-model="password" :type="showPassword ? 'text' : 'password'" :autocomplete="activeTab === 'login' ? 'current-password' : 'new-password'" :placeholder="activeTab === 'register' ? '8 caractères minimum' : 'Votre mot de passe'" :minlength="activeTab === 'register' ? 8 : undefined" :aria-describedby="activeTab === 'register' ? 'password-hint' : undefined" required :disabled="isLoading" />
              <button type="button" class="password-toggle" :aria-label="showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'" :aria-pressed="showPassword" @click="showPassword = !showPassword">
                <svg v-if="!showPassword" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m3 3 18 18M10.5 5.1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3 3.8M6.1 6.1A20 20 0 0 0 2 12s3.5 7 10 7a12 12 0 0 0 5.1-1.1M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>
              </button>
            </div>
            <p v-if="activeTab === 'register'" id="password-hint" class="field-hint">Choisissez un mot de passe unique d’au moins 8 caractères.</p>
          </div>
          <label class="remember"><input v-model="rememberMe" type="checkbox" :disabled="isLoading" /><span>Rester connecté sur cet appareil</span></label>
          <p v-if="errorMsg" class="feedback error" role="alert">{{ errorMsg }}</p>
          <p v-if="successMsg" class="feedback success" role="status">{{ successMsg }}</p>
          <button class="submit-button" type="submit" :disabled="isLoading || !$firebaseConfigured"><span>{{ isLoading ? 'Un instant…' : activeTab === 'login' ? 'Se connecter' : 'Créer mon compte' }}</span><span v-if="!isLoading" aria-hidden="true">↗</span><span v-else class="loading-dot" aria-hidden="true"></span></button>
        </form>
        <div class="form-divider"><span>ou, tout simplement</span></div>
        <button class="google-button" type="button" @click="handleGoogleLogin" :disabled="isLoading || !$firebaseConfigured">
          <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Continuer avec Google
        </button>
        <p v-if="!$firebaseConfigured" class="feedback error" role="status">La connexion est momentanément indisponible. Réessayez un peu plus tard.</p>
        <p class="community-promise"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/></svg>Un espace pour échanger avec respect et bienveillance.</p>
      </div>
      <div class="auth-bottom"><span>© {{ new Date().getFullYear() }} Lycée Europe</span><NuxtLink to="/chat">Découvrir l’espace élèves <span aria-hidden="true">↗</span></NuxtLink></div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail, updateProfile, setPersistence, browserLocalPersistence, browserSessionPersistence } from 'firebase/auth'

useHead({ title: 'Votre espace' })
const { $firebase, $firebaseConfigured } = useNuxtApp()
const activeTab = ref('login')
const name = ref('')
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)
const isLoading = ref(false)
const errorMsg = ref('')
const successMsg = ref('')
const currentUser = ref(null)
let unsubscribeAuth
let disposed = false
onMounted(() => {
  if (!$firebaseConfigured || !$firebase) return
  try { unsubscribeAuth = onAuthStateChanged(getAuth($firebase), user => { if (!disposed) currentUser.value = user }) }
  catch { errorMsg.value = 'La connexion est momentanément indisponible. Réessayez dans un instant.' }
})
onUnmounted(() => { disposed = true; unsubscribeAuth?.() })
function changeTab(tab) {
  if (isLoading.value) return
  activeTab.value = tab; password.value = ''; errorMsg.value = ''; successMsg.value = ''; showPassword.value = false
}
async function runAuth(action) {
  if (isLoading.value) return
  errorMsg.value = ''; successMsg.value = ''
  if (!$firebaseConfigured || !$firebase) { errorMsg.value = 'La connexion est momentanément indisponible.'; return }
  isLoading.value = true
  try {
    const auth = getAuth($firebase)
    await setPersistence(auth, rememberMe.value ? browserLocalPersistence : browserSessionPersistence)
    await action(auth)
    if (!disposed) await navigateTo('/chat')
  } catch (error) { errorMsg.value = friendlyError(error.code) }
  finally { isLoading.value = false }
}
function handleLogin() { return runAuth(auth => signInWithEmailAndPassword(auth, email.value.trim(), password.value)) }
function handleRegister() {
  if (!name.value.trim()) { errorMsg.value = 'Indiquez votre prénom et votre nom.'; return }
  if (password.value.length < 8) { errorMsg.value = 'Choisissez un mot de passe d’au moins 8 caractères.'; return }
  return runAuth(async auth => {
    const credential = await createUserWithEmailAndPassword(auth, email.value.trim(), password.value)
    try { await updateProfile(credential.user, { displayName: name.value.trim() }) }
    catch { successMsg.value = 'Votre compte a été créé. Votre nom pourra être ajouté plus tard.' }
  })
}
function handleGoogleLogin() { return runAuth(auth => signInWithPopup(auth, new GoogleAuthProvider())) }
async function handleForgotPassword() {
  if (isLoading.value) return
  errorMsg.value = ''; successMsg.value = ''
  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { errorMsg.value = 'Saisissez votre adresse e-mail ci-dessus pour recevoir un lien de réinitialisation.'; return }
  if (!$firebaseConfigured || !$firebase) { errorMsg.value = 'La connexion est momentanément indisponible.'; return }
  isLoading.value = true
  try {
    await sendPasswordResetEmail(getAuth($firebase), email.value.trim())
    successMsg.value = 'Si un compte correspond à cette adresse, un lien de réinitialisation vous sera envoyé. Pensez à vérifier vos courriers indésirables.'
  } catch (error) { errorMsg.value = friendlyError(error.code) }
  finally { isLoading.value = false }
}
function friendlyError(code) {
  const messages = {
    'auth/invalid-credential': 'L’adresse e-mail ou le mot de passe est incorrect.',
    'auth/user-not-found': 'L’adresse e-mail ou le mot de passe est incorrect.',
    'auth/wrong-password': 'L’adresse e-mail ou le mot de passe est incorrect.',
    'auth/email-already-in-use': 'Un compte utilise déjà cette adresse. Essayez de vous connecter.',
    'auth/invalid-email': 'Vérifiez le format de votre adresse e-mail.',
    'auth/user-disabled': 'Ce compte est désactivé. Contactez l’équipe du lycée pour retrouver votre accès.',
    'auth/cancelled-popup-request': 'Une connexion Google est déjà en cours. Terminez-la ou réessayez.',
    'auth/weak-password': 'Choisissez un mot de passe plus robuste, d’au moins 8 caractères.',
    'auth/too-many-requests': 'Trop de tentatives rapprochées. Réessayez dans quelques minutes.',
    'auth/popup-closed-by-user': 'La fenêtre Google a été fermée. Vous pouvez réessayer.',
    'auth/popup-blocked': 'Votre navigateur a bloqué la fenêtre Google. Autorisez les fenêtres pour ce site, puis réessayez.',
    'auth/network-request-failed': 'La connexion a été interrompue. Vérifiez votre accès à Internet.',
    'auth/unauthorized-domain': 'La connexion Google n’est pas encore disponible sur cette adresse du site. Utilisez votre e-mail.',
    'auth/operation-not-allowed': 'Ce mode de connexion est momentanément indisponible.'
  }
  return messages[code] || 'Impossible de terminer la connexion. Réessayez dans un instant.'
}
</script>

<style scoped>
.auth-page { --auth-dark: #0c061d; --auth-light: #f1eef5; min-height: 100svh; display: grid; grid-template-columns: 1.08fr 1fr; background: var(--auth-light); color: #1c142b; font-family: var(--font-sans, sans-serif); }
.auth-page * { box-sizing: border-box; }
.auth-page button, .auth-page input { font: inherit; }
.auth-page button, .auth-page a { touch-action: manipulation; }
.auth-page a { color: inherit; text-decoration: none; }
.auth-page button { cursor: pointer; }
.auth-page button:disabled { opacity: .5; cursor: not-allowed; }
.auth-page :focus-visible { outline: 3px solid #8053cf; outline-offset: 4px; }
.auth-story { position: relative; min-height: 100svh; padding: 44px clamp(28px, 4vw, 70px) 28px; display: flex; flex-direction: column; overflow: hidden; color: #f7f4fb; background: radial-gradient(ellipse at 78% 69%, #6e32b847, transparent 51%), var(--auth-dark); }
.auth-story::before { content: ''; position: absolute; inset: 0; pointer-events: none; opacity: .25; background: linear-gradient(#ffffff08 1px, transparent 1px), linear-gradient(90deg, #ffffff08 1px, transparent 1px); background-size: 88px 88px; mask-image: linear-gradient(transparent, #000); }
.auth-brand { position: relative; display: flex; gap: 12px; align-items: center; width: fit-content; font-size: 13px; line-height: 1; letter-spacing: .02em; text-transform: uppercase; }
.auth-brand strong { display: block; margin-top: 4px; font-size: 23px; font-family: var(--font-display, sans-serif); letter-spacing: -.04em; }
.brand-mark { display: grid; place-items: center; width: 48px; height: 48px; }
.brand-mark img { width: 100%; height: 100%; object-fit: contain; }
.story-copy { position: relative; z-index: 1; margin-top: clamp(52px, 7vh, 86px); }
.eyebrow { display: flex; align-items: center; gap: 10px; color: #c9bddb; font-size: 10px; font-weight: 650; letter-spacing: .13em; }
.eyebrow > span { width: 7px; height: 7px; background: var(--acid, #dfff78); }
.story-copy h1 { font-family: var(--font-display, sans-serif); font-size: clamp(46px, 5.25vw, 82px); line-height: .93; letter-spacing: -.055em; text-transform: uppercase; font-weight: 750; margin: 26px 0; }
.story-copy h1 em { font-style: normal; color: var(--accent, #a980ff); }
.story-copy > p { max-width: 400px; font-size: 13px; line-height: 1.8; color: #beb2d1; }
.community-art { position: relative; display: grid; place-items: center; flex: 1; min-height: 290px; margin: 12px 0 18px; }
.community-emblem { position: relative; width: min(76%, 335px); aspect-ratio: 1; z-index: 1; object-fit: contain; filter: drop-shadow(0 16px 38px #9e65eb44); animation: emblem-drift 8s ease-in-out infinite; }
.art-orbit { position: absolute; width: 95%; height: 57%; border: 1px solid #bd8cff24; border-radius: 50%; transform: rotate(-26deg); }
.orbit-two { width: 64%; height: 92%; transform: rotate(40deg); }
.art-star { position: absolute; right: 7%; top: 12%; font-size: 48px; color: var(--acid, #dfff78); line-height: 1; }
.art-coordinate { position: absolute; left: 0; bottom: 14px; font-size: 8px; letter-spacing: .16em; color: #ad98c7; writing-mode: vertical-rl; transform: rotate(180deg); }
.story-bottom { position: relative; display: flex; justify-content: space-between; gap: 12px; padding-top: 20px; border-top: 1px solid #ffffff24; font-size: 9px; line-height: 1.5; color: #b8aacb; }
.story-bottom > span:last-child { letter-spacing: .08em; }
.auth-form-side { display: flex; flex-direction: column; padding: 42px clamp(28px, 4.5vw, 76px) 28px; background: radial-gradient(ellipse at 100% 100%, #cbb7ed60, transparent 45%), var(--auth-light); }
.back-link { display: flex; gap: 12px; align-items: center; width: fit-content; font-size: 11px; font-weight: 650; color: #655b72 !important; }
.back-link:hover { color: #382645 !important; }
.back-link span { font-size: 19px; }
.auth-form-wrap { width: 100%; max-width: 410px; margin: auto; padding: 58px 0; }
.form-kicker { color: #6a40a5; font-size: 10px; letter-spacing: .13em; font-weight: 750; }
.auth-form-wrap h2 { margin: 17px 0 14px; font-family: var(--font-display, sans-serif); font-size: clamp(32px, 3.1vw, 46px); line-height: .98; font-weight: 750; letter-spacing: -.045em; text-transform: uppercase; }
.form-intro { font-size: 13px; color: #716579; line-height: 1.7; margin: 0 0 30px; }
.auth-tabs { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid #2c18352e; margin-bottom: 27px; }
.auth-tabs button { border: 0; background: transparent; min-height: 47px; padding: 12px 8px; color: #716579; font-size: 11px; font-weight: 750; }
.auth-tabs button + button { border-left: 1px solid #2c18352e; }
.auth-tabs button.selected { color: #fff; background: #20132f; }
.field-group { margin-bottom: 20px; }
.field-group label { font-size: 11px; font-weight: 750; }
.label-row { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px; }
.field-group input { display: block; width: 100%; height: 51px; margin-top: 9px; padding: 14px; border: 1px solid #2c183537; border-radius: 0; background: #ffffff60; color: #24162e; font-size: 14px; outline: none; transition: border-color .2s, background .2s; }
.field-group input:focus { border-color: #8053cf; background: #fff; box-shadow: 0 0 0 2px #8053cf17; }
.field-group input::placeholder { color: #8c8294; }
.text-button { padding: 4px 0; border: 0; background: none; font-size: 10px !important; font-weight: 650 !important; color: #7249a8; }
.text-button:hover { text-decoration: underline; }
.password-field { position: relative; }
.password-field input { padding-right: 53px; }
.password-toggle { position: absolute; right: 5px; top: 4px; width: 42px; height: 42px; border: 0; background: none; color: #706078; display: grid; place-items: center; }
.password-toggle svg { width: 20px; height: 20px; }
.field-hint { font-size: 11px; line-height: 1.5; color: #716579; margin: 8px 0 0; }
.remember { display: flex; align-items: center; gap: 10px; width: fit-content; padding: 4px 0; margin: 2px 0 22px; font-size: 11px; color: #675b72; cursor: pointer; }
.remember input { width: 16px; height: 16px; margin: 0; accent-color: #7045b5; }
.submit-button { display: flex; align-items: center; justify-content: space-between; width: 100%; min-height: 53px; padding: 0 18px; border: 1px solid #20132f; background: #20132f; color: #fff; font-size: 11px !important; text-transform: uppercase; font-weight: 700 !important; letter-spacing: .05em; transition: background .2s; }
.submit-button:hover:not(:disabled) { background: #56377d; }
.submit-button > span:nth-child(2) { font-size: 25px; color: var(--acid, #dfff78); }
.loading-dot { width: 17px; height: 17px; border: 2px solid #ffffff44; border-top-color: white; border-radius: 50%; animation: spin 1s linear infinite; }
.form-divider { display: flex; align-items: center; gap: 13px; margin: 22px 0; color: #807487; font-size: 10px; }
.form-divider::before, .form-divider::after { content: ''; flex: 1; height: 1px; background: #2c183524; }
.google-button { display: flex; align-items: center; justify-content: center; gap: 11px; width: 100%; min-height: 50px; border: 1px solid #2c183537; background: transparent; color: #32223f; font-size: 12px !important; font-weight: 650 !important; transition: background .2s; }
.google-button:hover:not(:disabled) { background: #fff; }
.community-promise { display: flex; align-items: flex-start; justify-content: center; gap: 8px; margin: 25px auto 0; max-width: 340px; font-size: 10px; line-height: 1.7; color: #786b82; text-align: center; }
.community-promise svg { width: 16px; height: 16px; flex-shrink: 0; }
.auth-bottom { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 15px; color: #786b82; font-size: 9px; line-height: 1.5; }
.auth-bottom a { color: #5b4275; }
.auth-bottom a span { margin-left: 5px; }
.feedback { padding: 13px 15px; font-size: 12px; line-height: 1.6; margin: 0 0 17px; }
.error { background: #ffe5e5; border: 1px solid #e8b8bd; color: #8b293a; }
.success { background: #e1edda; border: 1px solid #b4c5a2; color: #345b28; }
.signed-in-note { padding: 14px 16px; border: 1px solid #c8b3de; background: #e4d6f1; color: #513370; font-size: 12px; line-height: 1.6; margin-bottom: 18px; overflow-wrap: anywhere; }
.signed-in-note p { margin: 0 0 8px; }
.signed-in-note a { font-weight: 750; }
.signed-in-note a span { margin-left: 8px; }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes emblem-drift { 0%, 100% { transform: translateY(0) rotate(-9deg); } 50% { transform: translateY(-14px) rotate(5deg); } }
@media (min-width: 1600px) { .auth-story { padding-left: max(70px, calc((100vw - 1430px) / 2)); } .auth-form-side { padding-right: max(70px, calc((100vw - 1430px) / 2)); } }
@media (max-width: 1100px) { .auth-page { grid-template-columns: 1fr 1fr; } .auth-story, .auth-form-side { padding-inline: 30px; } .story-copy h1 { font-size: clamp(44px, 5.1vw, 60px); } .community-art { min-height: 280px; } .community-emblem { width: 86%; } }
@media (max-width: 760px) { .auth-page { grid-template-columns: 1fr; } .auth-story { min-height: 390px; padding: 25px 24px 27px; } .auth-brand { font-size: 10px; gap: 9px; } .auth-brand strong { font-size: 20px; } .brand-mark { width: 42px; height: 42px; } .story-copy { margin-top: 37px; } .eyebrow { font-size: 8px; letter-spacing: .1em; } .story-copy h1 { max-width: 420px; font-size: clamp(38px, 7.3vw, 56px); margin: 18px 0 20px; } .story-copy h1 br:first-of-type { display: none; } .story-copy h1 em { display: inline; } .story-copy > p { position: relative; z-index: 2; max-width: 260px; font-size: 11px; } .story-copy > p br { display: none; } .community-art { position: absolute; right: -40px; bottom: -10px; width: 240px; min-height: 0; height: 240px; opacity: .6; margin: 0; } .community-emblem { width: 96%; } .art-coordinate, .story-bottom, .art-star { display: none; } .auth-form-side { padding: 26px 24px 24px; } .auth-form-wrap { max-width: 470px; padding: 36px 0 42px; } .auth-form-wrap h2 { max-width: 400px; font-size: 37px; } .field-group input { font-size: 16px; } .auth-bottom { font-size: 9px; } }
@media (max-width: 380px) { .story-copy h1 { font-size: 35px; } .auth-story { min-height: 360px; } .community-art { width: 190px; height: 190px; right: -55px; } .auth-form-wrap h2 { font-size: 32px; } .auth-story, .auth-form-side { padding-inline: 20px; } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
</style>







