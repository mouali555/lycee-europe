<template>
  <main class="auth-page">
    <!-- Panneau gauche — identité de marque -->
    <section class="auth-story" aria-labelledby="story-title">
      <!-- Brand -->
      <NuxtLink to="/" class="auth-brand" aria-label="Lycée Europe — Accueil">
        <span class="brand-glyph" aria-hidden="true">E</span>
        <span class="brand-name">lycée<strong>europe<span class="brand-dot">.</span></strong></span>
      </NuxtLink>

      <!-- Copy principal -->
      <div class="story-copy">
        <div class="story-eyebrow">
          <span class="eyebrow-dot" aria-hidden="true"></span>
          L'ESPACE DE TOUTES VOS IDÉES
        </div>
        <h1 id="story-title" class="story-heading">
          La suite<br>
          s'écrit<br>
          <em>ensemble.</em>
        </h1>
        <p class="story-desc">Un devoir à partager. Une question à poser.<br>Une idée à faire grandir. Vous êtes au bon endroit.</p>
      </div>

      <!-- Art décoratif -->
      <div class="story-art" aria-hidden="true">
        <div class="art-ring ring-a"></div>
        <div class="art-ring ring-b"></div>
        <div class="idea-card">
          <span class="idea-label">UNE IDÉE, UN DÉBUT.</span>
          <strong class="idea-headline">Et si on<br>le faisait<br><em>ensemble ?</em></strong>
          <span class="idea-arrow">↗</span>
        </div>
        <div class="collective-card">
          <span class="coll-icon">↗</span>
          <div>
            <strong>Le collectif fait la différence.</strong>
            <span>Échanger · S'entraider · Avancer</span>
          </div>
        </div>
        <span class="art-star">✦</span>
      </div>

      <!-- Bottom -->
      <div class="story-bottom">
        <span>Votre lycée. Votre communauté.</span>
        <span>EST. EUROPE ↗</span>
      </div>
    </section>

    <!-- Panneau droit — formulaire -->
    <section class="auth-form-side" aria-labelledby="form-title">
      <NuxtLink to="/" class="back-link">
        <span aria-hidden="true">←</span> Retour au site
      </NuxtLink>

      <div class="auth-form-wrap">
        <span class="form-kicker">BIENVENUE CHEZ VOUS</span>
        <h2 id="form-title" class="form-heading">
          {{ activeTab === 'login' ? 'Heureux de vous revoir.' : 'Faites partie du collectif.' }}
        </h2>
        <p class="form-intro">
          {{ activeTab === 'login' ? 'Retrouvez les échanges et la vie de votre lycée.' : 'Créez votre compte pour rejoindre les échanges.' }}
        </p>

        <!-- Connecté -->
        <div v-if="currentUser" class="signed-in-note" role="status">
          <p>Vous êtes connecté avec <strong>{{ currentUser.displayName || currentUser.email }}</strong>.</p>
          <NuxtLink to="/chat">Rejoindre la communauté <span aria-hidden="true">↗</span></NuxtLink>
        </div>

        <!-- Onglets -->
        <div class="auth-tabs" aria-label="Choisir un formulaire" role="tablist">
          <button type="button" role="tab" :class="{ selected: activeTab === 'login' }" :aria-pressed="activeTab === 'login'" @click="changeTab('login')">Se connecter</button>
          <button type="button" role="tab" :class="{ selected: activeTab === 'register' }" :aria-pressed="activeTab === 'register'" @click="changeTab('register')">Créer un compte</button>
        </div>

        <!-- Formulaire -->
        <form @submit.prevent="activeTab === 'login' ? handleLogin() : handleRegister()">
          <div v-if="activeTab === 'register'" class="field-group">
            <label for="register-name">Prénom et nom</label>
            <input id="register-name" v-model="name" autocomplete="name" placeholder="Camille Martin" required maxlength="80" :disabled="isLoading"/>
          </div>
          <div class="field-group">
            <label for="auth-email">Adresse e-mail</label>
            <input id="auth-email" v-model="email" type="email" autocomplete="email" placeholder="vous@exemple.fr" required :disabled="isLoading"/>
          </div>
          <div class="field-group">
            <div class="label-row">
              <label for="auth-password">Mot de passe</label>
              <button v-if="activeTab === 'login'" type="button" class="text-button" @click="handleForgotPassword" :disabled="isLoading">Mot de passe oublié ?</button>
            </div>
            <div class="password-field">
              <input id="auth-password" v-model="password"
                :type="showPassword ? 'text' : 'password'"
                :autocomplete="activeTab === 'login' ? 'current-password' : 'new-password'"
                :placeholder="activeTab === 'register' ? '8 caractères minimum' : 'Votre mot de passe'"
                :minlength="activeTab === 'register' ? 8 : undefined"
                required :disabled="isLoading"/>
              <button type="button" class="password-toggle"
                :aria-label="showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'"
                :aria-pressed="showPassword"
                @click="showPassword = !showPassword">
                <svg v-if="!showPassword" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m3 3 18 18M10.5 5.1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3 3.8M6.1 6.1A20 20 0 0 0 2 12s3.5 7 10 7a12 12 0 0 0 5.1-1.1M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>
              </button>
            </div>
            <p v-if="activeTab === 'register'" class="field-hint">Choisissez un mot de passe unique d'au moins 8 caractères.</p>
          </div>
          <label class="remember">
            <input v-model="rememberMe" type="checkbox" :disabled="isLoading"/>
            <span>Rester connecté sur cet appareil</span>
          </label>
          <p v-if="errorMsg" class="feedback error" role="alert">{{ errorMsg }}</p>
          <p v-if="successMsg" class="feedback success" role="status">{{ successMsg }}</p>
          <button class="submit-btn" type="submit" :disabled="isLoading || !$firebaseConfigured">
            <span>{{ isLoading ? 'Un instant…' : activeTab === 'login' ? 'Se connecter' : 'Créer mon compte' }}</span>
            <span v-if="!isLoading" class="submit-arrow" aria-hidden="true">↗</span>
            <span v-else class="loading-dot" aria-hidden="true"></span>
          </button>
        </form>

        <div class="form-divider"><span>ou, tout simplement</span></div>

        <button class="google-btn" type="button" @click="handleGoogleLogin" :disabled="isLoading || !$firebaseConfigured">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continuer avec Google
        </button>

        <p v-if="!$firebaseConfigured" class="feedback error" role="status">La connexion est momentanément indisponible. Réessayez un peu plus tard.</p>

        <p class="community-promise">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/></svg>
          Un espace pour échanger avec respect et bienveillance.
        </p>
      </div>

      <div class="auth-bottom">
        <span>© {{ new Date().getFullYear() }} Lycée Europe</span>
        <NuxtLink to="/chat">Découvrir l'espace élèves <span aria-hidden="true">↗</span></NuxtLink>
      </div>
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
    'auth/invalid-credential': "L'adresse e-mail ou le mot de passe est incorrect.",
    'auth/user-not-found': "L'adresse e-mail ou le mot de passe est incorrect.",
    'auth/wrong-password': "L'adresse e-mail ou le mot de passe est incorrect.",
    'auth/email-already-in-use': 'Un compte utilise déjà cette adresse. Essayez de vous connecter.',
    'auth/invalid-email': 'Vérifiez le format de votre adresse e-mail.',
    'auth/weak-password': "Choisissez un mot de passe plus robuste, d'au moins 8 caractères.",
    'auth/too-many-requests': 'Trop de tentatives rapprochées. Réessayez dans quelques minutes.',
    'auth/popup-closed-by-user': 'La fenêtre Google a été fermée. Vous pouvez réessayer.',
    'auth/popup-blocked': 'Votre navigateur a bloqué la fenêtre Google. Autorisez les fenêtres pour ce site, puis réessayez.',
    'auth/network-request-failed': 'La connexion a été interrompue. Vérifiez votre accès à Internet.',
    'auth/unauthorized-domain': "La connexion Google n'est pas encore disponible sur cette adresse du site. Utilisez votre e-mail.",
    'auth/operation-not-allowed': 'Ce mode de connexion est momentanément indisponible.'
  }
  return messages[code] || 'Impossible de terminer la connexion. Réessayez dans un instant.'
}
</script>

<style scoped>
/* ── Base ─────────────────────────────────────────────────────── */
.auth-page{
  min-height:100svh;display:grid;grid-template-columns:1fr 1fr;
  background:var(--void);color:var(--white);
  font-family:var(--font-body);
}
.auth-page *{box-sizing:border-box}
.auth-page button,.auth-page input{font:inherit}
.auth-page button,.auth-page a{touch-action:manipulation}
.auth-page a{color:inherit;text-decoration:none}
.auth-page button{cursor:pointer}
.auth-page button:disabled{opacity:.45;cursor:not-allowed}
.auth-page :focus-visible{outline:2px solid var(--acid);outline-offset:3px;border-radius:2px}

/* ── Story (panneau gauche) ─────────────────────────────────── */
.auth-story{
  background:var(--onyx);
  min-height:100svh;padding:40px 52px 28px;
  display:flex;flex-direction:column;
  position:relative;overflow:hidden;
  border-right:1px solid rgba(250,250,250,.07);
}
/* Gradient blob décoratif */
.auth-story::before{
  content:'';position:absolute;
  width:500px;height:500px;border-radius:50%;
  background:radial-gradient(circle,rgba(204,255,0,.08),transparent 65%);
  top:-100px;left:-100px;pointer-events:none;filter:blur(40px);
}

/* Brand */
.auth-brand{display:flex;gap:12px;align-items:center;width:fit-content;position:relative;z-index:1}
.brand-glyph{
  width:44px;height:44px;border-radius:4px;
  background:var(--acid);color:var(--void);
  font-family:var(--font-display);font-size:26px;font-weight:800;
  display:grid;place-items:center;line-height:1;flex-shrink:0;
}
.brand-name{font-family:var(--font-display);font-size:15px;letter-spacing:-.04em;line-height:1.1}
.brand-name strong{display:block;font-size:20px;font-weight:800}
.brand-dot{color:var(--acid)}

/* Copy */
.story-copy{margin-top:clamp(48px,8vh,96px);position:relative;z-index:1}
.story-eyebrow{
  font-family:var(--font-mono);font-size:9px;letter-spacing:.2em;
  text-transform:uppercase;color:var(--white-muted);
  display:flex;align-items:center;gap:10px;margin-bottom:24px;
}
.eyebrow-dot{width:5px;height:5px;border-radius:50%;background:var(--acid);flex-shrink:0}
.story-heading{
  font-family:var(--font-display);font-size:clamp(48px,5vw,80px);
  font-weight:800;line-height:.95;letter-spacing:-.06em;
  margin-bottom:20px;
}
.story-heading em{
  font-style:normal;display:block;
  -webkit-text-stroke:2px var(--acid);color:transparent;
  letter-spacing:-.06em;
}
.story-desc{font-size:13px;line-height:1.9;color:var(--white-muted)}

/* Art décoratif */
.story-art{position:relative;flex:1;min-height:240px;margin-top:40px}
.art-ring{
  border:1px solid rgba(250,250,250,.08);
  position:absolute;border-radius:50%;
}
.ring-a{width:460px;height:270px;top:0;left:-60px;transform:rotate(-28deg)}
.ring-b{width:360px;height:360px;top:-20px;left:-30px;transform:rotate(20deg)}
.idea-card{
  position:relative;width:220px;
  background:var(--acid);color:var(--void);
  padding:22px 22px 18px;
  transform:rotate(-7deg);left:30px;top:20px;
  box-shadow:8px 8px 0 rgba(0,0,0,.4);border-radius:2px;
}
.idea-label{font-family:var(--font-mono);font-size:7px;font-weight:700;letter-spacing:.18em;display:block;margin-bottom:16px}
.idea-headline{
  font-family:var(--font-display);font-size:26px;
  line-height:1.05;letter-spacing:-.04em;font-weight:700;display:block;
}
.idea-headline em{font-style:normal;-webkit-text-stroke:1.5px var(--void);color:transparent;letter-spacing:-.04em}
.idea-arrow{display:block;text-align:right;font-size:28px;margin-top:10px}
.collective-card{
  position:absolute;right:-10px;bottom:0;
  background:var(--onyx-2);border:1px solid rgba(250,250,250,.1);
  display:flex;gap:12px;align-items:center;padding:14px 18px;
  transform:rotate(3deg);border-radius:var(--r-md);
  box-shadow:0 16px 40px rgba(0,0,0,.5);
}
.coll-icon{
  background:var(--acid);color:var(--void);
  border-radius:50%;width:32px;height:32px;
  display:grid;place-items:center;font-size:18px;flex-shrink:0;
}
.collective-card strong{display:block;font-size:11px;font-weight:700}
.collective-card div>span{font-size:9px;color:var(--white-muted);display:block;margin-top:3px}
.art-star{
  position:absolute;right:16px;top:8px;
  font-size:80px;color:var(--acid);line-height:1;opacity:.4;
}

/* Bottom */
.story-bottom{
  margin-top:32px;display:flex;justify-content:space-between;gap:12px;
  font-family:var(--font-mono);font-size:8px;letter-spacing:.15em;
  text-transform:uppercase;color:rgba(250,250,250,.3);
}

/* ── Form (panneau droit) ─────────────────────────────────────── */
.auth-form-side{
  padding:40px 52px 28px;display:flex;flex-direction:column;
  background:var(--void);
}
.back-link{
  font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;
  color:var(--white-muted);display:inline-flex;align-items:center;gap:10px;
  transition:color var(--t-fast);width:fit-content;
}
.back-link:hover{color:var(--white)}
.back-link span{font-size:16px}

.auth-form-wrap{max-width:420px;width:100%;margin:clamp(48px,8vh,96px) auto clamp(32px,5vh,56px)}
.form-kicker{
  font-family:var(--font-mono);font-size:9px;letter-spacing:.2em;text-transform:uppercase;
  color:var(--acid);display:block;margin-bottom:12px;
}
.form-heading{
  font-family:var(--font-display);font-size:clamp(24px,3vw,36px);
  font-weight:800;letter-spacing:-.04em;line-height:1.1;margin-bottom:10px;
}
.form-intro{font-size:13px;color:var(--white-muted);line-height:1.7;margin-bottom:28px}

/* Tabs */
.auth-tabs{
  display:grid;grid-template-columns:1fr 1fr;
  background:var(--onyx);border:1px solid rgba(250,250,250,.08);
  padding:4px;gap:4px;border-radius:var(--r-sm);margin-bottom:28px;
}
.auth-tabs button{
  background:none;border:0;padding:12px 8px;
  color:var(--white-muted);border-radius:4px;
  font-family:var(--font-display);font-weight:700;font-size:11px;
  letter-spacing:.02em;transition:all var(--t-fast);
}
.auth-tabs button.selected{
  background:var(--acid);color:var(--void);
}
.auth-tabs button:not(.selected):hover{color:var(--white)}

/* Fields */
.field-group{margin-bottom:20px}
.field-group label{
  font-family:var(--font-mono);font-size:9px;letter-spacing:.15em;
  text-transform:uppercase;color:var(--white-muted);display:block;margin-bottom:8px;
}
.label-row{display:flex;align-items:center;justify-content:space-between;gap:6px}
.field-group input{
  display:block;width:100%;
  border:1px solid rgba(250,250,250,.12);border-radius:var(--r-sm);
  padding:14px 16px;background:var(--onyx);color:var(--white);
  font-size:14px;height:48px;outline:none;
  transition:border-color var(--t-fast),box-shadow var(--t-fast);
}
.field-group input:focus{border-color:var(--acid);box-shadow:0 0 0 3px rgba(204,255,0,.12)}
.field-group input::placeholder{color:var(--white-muted)}
.field-group input:disabled{opacity:.5}
.text-button{
  font-family:var(--font-mono);font-size:9px;letter-spacing:.12em;text-transform:uppercase;
  color:var(--acid);background:none;padding:0;border:0;font-weight:700;
  transition:opacity var(--t-fast);
}
.text-button:hover{opacity:.7}
.password-field{position:relative}
.password-field input{padding-right:50px}
.password-toggle{
  position:absolute;right:10px;top:8px;
  width:32px;height:32px;border:0;background:none;
  color:var(--white-muted);display:grid;place-items:center;
  transition:color var(--t-fast);
}
.password-toggle:hover{color:var(--white)}
.password-toggle svg{width:18px;height:18px}
.field-hint{font-size:11px;color:var(--white-muted);line-height:1.5;margin-top:8px}

.remember{
  font-size:12px;color:var(--white-muted);
  display:flex;gap:10px;align-items:center;margin:4px 0 24px;cursor:pointer;
}
.remember input{width:14px;height:14px;accent-color:var(--acid);flex-shrink:0}

/* Submit */
.submit-btn{
  width:100%;height:50px;padding:0 20px;
  background:var(--acid);border:none;border-radius:var(--r-sm);
  color:var(--void);font-family:var(--font-display);font-size:13px;font-weight:800;
  letter-spacing:.04em;text-transform:uppercase;
  display:flex;align-items:center;justify-content:space-between;
  transition:all var(--t-base);
}
.submit-btn:hover:not(:disabled){box-shadow:var(--glow-acid);transform:translateY(-1px)}
.submit-btn:active:not(:disabled){transform:translateY(0)}
.submit-arrow{font-size:20px}
.loading-dot{
  width:16px;height:16px;border:2px solid rgba(0,0,0,.3);
  border-top-color:var(--void);border-radius:50%;
  animation:spin 1s linear infinite;
}
@keyframes spin{to{transform:rotate(360deg)}}

/* Divider */
.form-divider{
  display:flex;align-items:center;gap:14px;
  margin:22px 0;color:var(--white-muted);font-size:11px;
}
.form-divider::before,.form-divider::after{content:'';height:1px;background:rgba(250,250,250,.1);flex:1}

/* Google */
.google-btn{
  width:100%;border:1px solid rgba(250,250,250,.12);border-radius:var(--r-sm);
  background:transparent;height:48px;
  display:flex;align-items:center;justify-content:center;gap:10px;
  font-family:var(--font-display);font-weight:700;font-size:12px;letter-spacing:.02em;
  color:var(--white);transition:background var(--t-fast),border-color var(--t-fast);
}
.google-btn:hover:not(:disabled){background:var(--onyx);border-color:rgba(250,250,250,.25)}

/* Feedback */
.feedback{padding:12px 16px;border-radius:var(--r-sm);font-size:12px;line-height:1.6;margin-bottom:16px}
.error{background:rgba(255,61,87,.1);border:1px solid rgba(255,61,87,.3);color:var(--error)}
.success{background:rgba(0,230,118,.1);border:1px solid rgba(0,230,118,.3);color:var(--success)}

/* Signed in */
.signed-in-note{
  background:rgba(204,255,0,.08);border:1px solid rgba(204,255,0,.2);
  padding:14px 16px;border-radius:var(--r-sm);
  font-size:12px;line-height:1.6;margin-bottom:18px;color:var(--acid);
}
.signed-in-note p{margin-bottom:8px}
.signed-in-note a{font-weight:700;text-decoration:underline;text-underline-offset:3px}

/* Promise */
.community-promise{
  margin:24px auto 0;max-width:320px;text-align:center;
  font-size:11px;line-height:1.7;color:var(--white-muted);
  display:flex;justify-content:center;gap:8px;align-items:flex-start;
}
.community-promise svg{width:14px;height:14px;flex-shrink:0;color:var(--acid)}

/* Bottom */
.auth-bottom{
  margin-top:auto;display:flex;justify-content:space-between;
  font-family:var(--font-mono);font-size:8px;letter-spacing:.1em;
  text-transform:uppercase;color:var(--white-muted);gap:12px;
}
.auth-bottom a{transition:color var(--t-fast)}
.auth-bottom a:hover{color:var(--acid)}

/* ── Responsive ──────────────────────────────────────────────── */
@media(min-width:1600px){
  .auth-story,.auth-form-side{padding-left:max(52px,calc((100vw - 1400px)/2));padding-right:70px}
  .auth-form-side{padding-left:70px;padding-right:max(52px,calc((100vw - 1400px)/2))}
}
@media(max-width:1000px){
  .auth-story,.auth-form-side{padding:32px}
  .story-copy{margin-top:48px}
  .auth-form-wrap{margin-top:56px}
  .story-heading{font-size:54px}
  .collective-card{right:0}
  .art-star{font-size:60px}
  .idea-card{left:10px;width:200px}
}
@media(max-width:720px){
  .auth-page{grid-template-columns:1fr}
  .auth-story{min-height:auto;padding:24px}
  .story-heading{font-size:48px;letter-spacing:-.05em}
  .story-heading br{display:none}
  .story-heading em{display:inline;margin-left:8px}
  .story-desc{font-size:12px}
  .story-art,.story-bottom{display:none}
  .auth-form-side{padding:24px}
  .auth-form-wrap{margin:32px auto 40px;max-width:100%}
}
@media(max-width:400px){
  .auth-story,.auth-form-side{padding:16px}
  .story-heading{font-size:40px}
  .auth-tabs button{font-size:10px;padding:10px 6px}
}
@media(prefers-reduced-motion:reduce){
  *{animation:none!important;transition:none!important}
}
</style>
