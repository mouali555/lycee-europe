<template>
  <main class="auth-page">
    <section class="auth-story" aria-labelledby="story-title">
      <NuxtLink to="/" class="auth-brand" aria-label="Lycée Europe — Accueil">
        <span class="brand-mark" aria-hidden="true">e<span>↗</span></span>
        <span>lycée<br><strong>europe.</strong></span>
      </NuxtLink>
      <div class="story-copy">
        <span class="eyebrow"><span></span> L’ESPACE DE TOUTES VOS IDÉES</span>
        <h1 id="story-title">La suite<br> s’écrit <em>ensemble.</em></h1>
        <p>Un devoir à partager. Une question à poser.<br>Une idée à faire grandir. Vous êtes au bon endroit.</p>
      </div>
      <div class="community-art" aria-hidden="true">
        <div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div>
        <span class="art-star">✳</span>
        <div class="idea-note"><span class="note-label">UNE IDÉE, UN DÉBUT.</span><strong>Et si on<br>le faisait<br><em>ensemble ?</em></strong><span class="note-arrow">↗</span></div>
        <div class="community-note"><span class="mini-icon">↗</span><div><strong>Le collectif fait la différence.</strong><span>Échanger · S’entraider · Avancer</span></div></div>
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
          <button type="button" :class="{ selected: activeTab === 'login' }" :aria-pressed="activeTab === 'login'" @click="changeTab('login')">Se connecter</button>
          <button type="button" :class="{ selected: activeTab === 'register' }" :aria-pressed="activeTab === 'register'" @click="changeTab('register')">Créer un compte</button>
        </div>
        <form @submit.prevent="activeTab === 'login' ? handleLogin() : handleRegister()">
          <div v-if="activeTab === 'register'" class="field-group"><label for="register-name">Prénom et nom</label><input id="register-name" v-model="name" autocomplete="name" placeholder="Camille Martin" required maxlength="80" :disabled="isLoading" /></div>
          <div class="field-group"><label for="auth-email">Adresse e-mail</label><input id="auth-email" v-model="email" type="email" autocomplete="email" placeholder="vous@exemple.fr" required :disabled="isLoading" /></div>
          <div class="field-group">
            <div class="label-row"><label for="auth-password">Mot de passe</label><button v-if="activeTab === 'login'" type="button" class="text-button" @click="handleForgotPassword" :disabled="isLoading">Mot de passe oublié ?</button></div>
            <div class="password-field">
              <input id="auth-password" v-model="password" :type="showPassword ? 'text' : 'password'" :autocomplete="activeTab === 'login' ? 'current-password' : 'new-password'" :placeholder="activeTab === 'register' ? '8 caractères minimum' : 'Votre mot de passe'" :minlength="activeTab === 'register' ? 8 : undefined" required :disabled="isLoading" />
              <button type="button" class="password-toggle" :aria-label="showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'" :aria-pressed="showPassword" @click="showPassword = !showPassword">
                <svg v-if="!showPassword" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m3 3 18 18M10.5 5.1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3 3.8M6.1 6.1A20 20 0 0 0 2 12s3.5 7 10 7a12 12 0 0 0 5.1-1.1M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>
              </button>
            </div>
            <p v-if="activeTab === 'register'" class="field-hint">Choisissez un mot de passe unique d’au moins 8 caractères.</p>
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
  return runAuth(async auth => {
    const credential = await createUserWithEmailAndPassword(auth, email.value.trim(), password.value)
    try { await updateProfile(credential.user, { displayName: name.value.trim() }) }
    catch { successMsg.value = 'Votre compte a été créé. Votre nom pourra être ajouté plus tard.' }
  })
}
function handleGoogleLogin() { return runAuth(auth => signInWithPopup(auth, new GoogleAuthProvider())) }
async function handleForgotPassword() {
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
.auth-page{min-height:100svh;display:grid;grid-template-columns:1fr 1fr;background:#f8f7f2;color:#162b32;font-family:'Manrope',sans-serif}.auth-page *{box-sizing:border-box}.auth-page button,.auth-page input{font:inherit}.auth-page button,.auth-page a{touch-action:manipulation}.auth-page a{color:inherit;text-decoration:none}.auth-page button{cursor:pointer}.auth-page button:disabled{opacity:.55;cursor:wait}.auth-page :focus-visible{outline:3px solid #91a4ff;outline-offset:4px}.auth-story{background:#2748df;color:white;min-height:100svh;padding:42px 52px 28px;display:flex;flex-direction:column;position:relative;overflow:hidden}.auth-brand{display:flex;gap:12px;align-items:center;width:fit-content;font-size:17px;line-height:1.03;letter-spacing:-.5px}.auth-brand strong{font-size:24px;font-weight:750}.brand-mark{width:49px;height:49px;display:flex;align-items:center;justify-content:center;font-size:47px;line-height:1;font-weight:800;letter-spacing:-5px;color:#2748df;background:#e5ef97;border-radius:5px;position:relative;padding:0 9px 7px 0}.brand-mark span{font-size:20px;letter-spacing:-3px;position:absolute;right:5px;top:4px}.story-copy{margin-top:78px;position:relative;z-index:1}.eyebrow{font-size:10px;letter-spacing:1.8px;font-weight:700;display:flex;gap:10px;align-items:center}.eyebrow>span{width:6px;height:6px;border-radius:50%;background:#e5ef97}.story-copy h1{font-size:clamp(45px,4.5vw,73px);font-weight:500;line-height:1.04;letter-spacing:-3.8px;margin:24px 0}.story-copy h1 em{display:block;font-family:Georgia,serif;font-weight:400;color:#e5ef97;letter-spacing:-3px}.story-copy>p{font-size:13px;line-height:1.9;color:#dfe5ff}.community-art{position:relative;flex:1;min-height:260px;margin-top:35px}.art-orbit{border:1px solid #ffffff21;position:absolute;width:480px;height:280px;border-radius:50%;top:15px;left:-60px;transform:rotate(-28deg)}.orbit-two{transform:rotate(26deg);top:0;left:-35px}.art-star{position:absolute;right:16px;top:12px;font-size:100px;color:#e5ef97;font-weight:400;line-height:1;transform:rotate(10deg)}.idea-note{position:relative;width:225px;background:#e5ef97;color:#162b32;padding:24px 25px 20px;transform:rotate(-9deg);left:35px;top:10px;box-shadow:9px 9px 0 #142fa540;border-radius:2px}.note-label{font-size:8px;font-weight:800;letter-spacing:1.3px}.idea-note strong{font-size:30px;line-height:1.05;display:block;margin-top:23px;letter-spacing:-1px;font-weight:550}.idea-note em{font-family:Georgia,serif;font-weight:400}.note-arrow{display:block;text-align:right;font-size:33px;line-height:1;margin-top:9px}.community-note{position:absolute;right:0;bottom:8px;border:1px solid #ffffff36;background:#2343cc;display:flex;gap:12px;align-items:center;padding:16px 20px;transform:rotate(3deg);border-radius:10px;box-shadow:0 12px 30px #16296623}.mini-icon{background:#fff;color:#2748df;border-radius:50%;width:36px;height:36px;display:grid;place-items:center;font-size:24px}.community-note strong{display:block;font-size:11px}.community-note div>span{font-size:9px;display:block;margin-top:5px;color:#d4ddff}.story-bottom{margin-top:40px;display:flex;justify-content:space-between;gap:12px;font-size:9px;color:#ffffffa6}.story-bottom>span:last-child{letter-spacing:1px}.auth-form-side{padding:42px 52px 28px;display:flex;flex-direction:column}.back-link{font-size:11px;width:fit-content;font-weight:650;display:flex;align-items:center;gap:10px;color:#59676b!important}.back-link span{font-size:18px}.auth-form-wrap{max-width:400px;width:100%;margin:67px auto 48px}.form-kicker{color:#2748df;font-size:10px;font-weight:800;letter-spacing:1.8px}.auth-form-wrap h2{font-size:34px;line-height:1.16;letter-spacing:-1.6px;font-weight:600;margin:16px 0 12px}.form-intro{font-size:12px;color:#727b7c;line-height:1.7;margin:0 0 30px}.auth-tabs{display:grid;grid-template-columns:1fr 1fr;background:#ebece5;padding:4px;gap:5px;border-radius:7px;margin-bottom:29px}.auth-tabs button{background:none;border:0;padding:12px 7px;color:#697575;border-radius:5px;font-weight:700;font-size:11px}.auth-tabs button.selected{background:#fff;color:#162b32;box-shadow:0 2px 5px #162b3208}.field-group{margin-bottom:20px}.field-group label{font-size:11px;font-weight:750}.label-row{display:flex;align-items:center;justify-content:space-between;gap:6px}.field-group input{display:block;width:100%;border:1px solid #dce0d9;border-radius:6px;padding:15px 16px;background:#fff;color:#162b32;font-size:12px;margin-top:9px;height:48px;outline:none;transition:border-color .2s,box-shadow .2s}.field-group input:focus{border-color:#2748df;box-shadow:0 0 0 3px #2748df14}.field-group input::placeholder{color:#929c9b}.text-button{font-size:10px!important;color:#2748df;background:none;padding:0;border:0;font-weight:650!important}.password-field{position:relative}.password-field input{padding-right:50px}.password-toggle{position:absolute;right:10px;top:7px;width:34px;height:34px;border:0;background:none;color:#697674;display:grid;place-items:center}.password-toggle svg{width:19px;height:19px}.field-hint{font-size:10px;color:#798481;line-height:1.5;margin:8px 0 0}.remember{font-size:10px;color:#606d6b;display:flex;gap:9px;align-items:center;margin:2px 0 25px;cursor:pointer}.remember input{width:14px;height:14px;margin:0;accent-color:#2748df}.submit-button{width:100%;height:48px;padding:0 18px;background:#2748df;border:1px solid #2748df;border-radius:6px;color:#fff;font-size:12px!important;font-weight:700!important;display:flex;align-items:center;justify-content:space-between;transition:background .2s}.submit-button:hover{background:#1839c6}.submit-button>span:nth-child(2){font-size:21px}.loading-dot{width:16px;height:16px;border:2px solid #ffffff55;border-top-color:#fff;border-radius:50%;animation:spin 1s linear infinite}.form-divider{display:flex;align-items:center;gap:13px;margin:23px 0;color:#8a9490;font-size:10px}.form-divider:before,.form-divider:after{content:'';height:1px;background:#dfe3da;flex:1}.google-button{width:100%;border:1px solid #dce0d9;border-radius:6px;background:transparent;height:47px;display:flex;align-items:center;justify-content:center;gap:10px;font-weight:650!important;font-size:11px!important;color:#162b32}.google-button:hover{background:white}.community-promise{margin:26px auto 0;max-width:330px;text-align:center;font-size:9px;line-height:1.7;color:#85908a;display:flex;justify-content:center;gap:7px;align-items:flex-start}.community-promise svg{width:14px;height:14px;flex-shrink:0}.auth-bottom{margin-top:auto;display:flex;justify-content:space-between;font-size:9px;color:#89918c;gap:14px}.auth-bottom a{color:#51605d}.auth-bottom a span{margin-left:5px}.feedback{padding:13px 15px;border-radius:6px;font-size:11px;line-height:1.6;margin:0 0 17px}.error{background:#fff0eb;border:1px solid #f5cdc1;color:#9e3f29}.success{background:#e9f3e9;border:1px solid #c4dcc4;color:#346840}.signed-in-note{background:#eaf0ff;padding:13px 16px;border-radius:7px;font-size:10px;line-height:1.6;margin-bottom:18px;color:#2748df}.signed-in-note p{margin:0 0 8px}.signed-in-note a{font-weight:750}.signed-in-note a span{margin-left:8px}@keyframes spin{to{transform:rotate(360deg)}}@media(min-width:1600px){.auth-story{padding-left:max(52px,calc((100vw - 1350px)/2));padding-right:70px}.auth-form-side{padding-left:70px;padding-right:max(52px,calc((100vw - 1350px)/2))}.community-art{max-height:350px}.story-copy{margin-top:100px}.auth-form-wrap{margin-top:100px}}@media(max-width:1100px){.auth-story,.auth-form-side{padding:30px}.story-copy{margin-top:65px}.auth-form-wrap{margin-top:60px}.story-copy h1{font-size:54px;letter-spacing:-3px}.community-note{right:-8px;bottom:0}.art-star{right:0;font-size:78px}.idea-note{left:10px;width:205px}.story-bottom{font-size:8px}}@media(max-width:760px){.auth-page{grid-template-columns:1fr}.auth-story{min-height:auto;padding:24px 25px 32px}.auth-brand{font-size:13px;gap:9px}.auth-brand strong{font-size:20px}.brand-mark{width:41px;height:41px;font-size:39px}.brand-mark span{font-size:16px}.story-copy{margin-top:38px}.eyebrow{font-size:8px;letter-spacing:1.4px}.story-copy h1{font-size:45px;letter-spacing:-2.5px;margin:19px 0 15px;line-height:1.08}.story-copy h1 br{display:none}.story-copy h1 em{display:inline;margin-left:5px;letter-spacing:-1.7px}.story-copy>p{font-size:11px;margin-bottom:0}.community-art,.story-bottom{display:none}.auth-form-side{padding:23px 25px}.auth-form-wrap{margin:32px auto 42px;max-width:430px}.auth-form-wrap h2{font-size:31px}.auth-bottom{font-size:8px}.back-link{font-size:10px}.form-intro{margin-bottom:25px}}@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
</style>
