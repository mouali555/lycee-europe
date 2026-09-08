<template>
  <div class="page-wrapper login-page">

    <!-- Bannière Firebase non configuré -->
    <div v-if="!$firebaseConfigured" class="firebase-warning">
      <span>⚠️</span>
      <div>
        <strong>Firebase non configuré</strong> — Ouvrez
        <code>plugins/firebase.client.ts</code> et renseignez vos clés,
        ou créez un fichier <code>.env</code> à partir de <code>.env.example</code>.
        <a href="https://console.firebase.google.com" target="_blank">console.firebase.google.com →</a>
      </div>
    </div>

    <!-- Logo / retour accueil -->
    <NuxtLink to="/" class="login-back-btn">
      <span>←</span> Retour à l'accueil
    </NuxtLink>

    <!-- Cercles décoratifs additionnels spécifiques à la page login -->
    <div class="login-deco">
      <div class="login-ring ring-1"></div>
      <div class="login-ring ring-2"></div>
      <div class="login-ring ring-3"></div>
      <div class="login-orbit">
        <div class="orbit-dot dot-1">🌟</div>
        <div class="orbit-dot dot-2">📚</div>
        <div class="orbit-dot dot-3">🚀</div>
        <div class="orbit-dot dot-4">💡</div>
      </div>
    </div>

    <!-- ══ FORMULAIRE CENTRÉ ══════════════════════════════════ -->
    <div class="login-container">

      <!-- Panneau gauche — branding -->
      <div class="login-branding anim-fade-up">
        <div class="brand-logo">🎓</div>
        <h1 class="brand-title">
          Bienvenue sur<br>
          <span class="text-gradient">Lycée Europe</span>
        </h1>
        <p class="brand-subtitle">
          Votre espace numérique personnel vous attend.
          Connectez-vous pour accéder au chat, aux ressources et à la communauté.
        </p>

        <!-- Badges features -->
        <div class="brand-features">
          <div class="brand-feature" v-for="f in brandFeatures" :key="f.label">
            <span class="bf-icon">{{ f.icon }}</span>
            <div>
              <div class="bf-title">{{ f.title }}</div>
              <div class="bf-desc">{{ f.desc }}</div>
            </div>
          </div>
        </div>

        <!-- Témoignage -->
        <div class="testimonial glass">
          <p class="testimonial-text">"La plateforme a transformé notre façon de communiquer. Le chat est top !"</p>
          <div class="testimonial-author">
            <span class="ta-avatar">👩‍🎓</span>
            <div>
              <div class="ta-name">Sarah M.</div>
              <div class="ta-role">Terminale S, Promo 2026</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Panneau droit — formulaire -->
      <div class="login-form-panel anim-scale delay-2">
        <div class="login-card glass-heavy">

          <!-- Header du formulaire -->
          <div class="form-header">
            <div class="form-logo-icon">🔐</div>
            <h2 class="form-title">Connexion</h2>
            <p class="form-subtitle">Accédez à votre espace élève</p>
          </div>

          <!-- Tabs -->
          <div class="auth-tabs">
            <button
              class="auth-tab"
              :class="{ active: activeTab === 'login' }"
              @click="activeTab = 'login'"
            >Se connecter</button>
            <button
              class="auth-tab"
              :class="{ active: activeTab === 'register' }"
              @click="activeTab = 'register'"
            >S'inscrire</button>
          </div>

          <!-- Formulaire connexion -->
          <form v-if="activeTab === 'login'" @submit.prevent="handleLogin" class="auth-form">

            <div class="form-group">
              <label class="form-label">Adresse e-mail</label>
              <div class="input-wrapper">
                <span class="input-icon">✉</span>
                <input
                  v-model="loginEmail"
                  type="email"
                  class="input-field"
                  placeholder="prenom.nom@lycee-europe.fr"
                  autocomplete="email"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">
                Mot de passe
                <a href="#" class="forgot-link" @click.prevent="handleForgotPassword">Mot de passe oublié ?</a>
              </label>
              <div class="input-wrapper">
                <span class="input-icon">🔒</span>
                <input
                  v-model="loginPassword"
                  :type="showPassword ? 'text' : 'password'"
                  class="input-field"
                  placeholder="••••••••"
                  autocomplete="current-password"
                  required
                />
                <button type="button" class="eye-toggle" @click="showPassword = !showPassword">
                  {{ showPassword ? '🙈' : '👁' }}
                </button>
              </div>
            </div>

            <div class="remember-row">
              <label class="checkbox-label">
                <input type="checkbox" v-model="rememberMe" class="custom-checkbox" />
                <span class="checkbox-custom"></span>
                Se souvenir de moi
              </label>
            </div>

            <!-- Bouton submit -->
            <button type="submit" class="btn btn-primary btn-login" :disabled="isLoading">
              <span v-if="isLoading" class="spinner"></span>
              <span v-else>⚡</span>
              {{ isLoading ? 'Connexion...' : 'Se connecter' }}
            </button>

            <!-- Message d'erreur -->
            <div v-if="errorMsg" class="error-msg">
              <span>⚠</span> {{ errorMsg }}
            </div>

          </form>

          <!-- Formulaire inscription -->
          <form v-else @submit.prevent="handleRegister" class="auth-form">

            <div class="form-group">
              <label class="form-label">Prénom & Nom</label>
              <div class="input-wrapper">
                <span class="input-icon">👤</span>
                <input
                  v-model="registerName"
                  type="text"
                  class="input-field"
                  placeholder="Marie Dupont"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Adresse e-mail</label>
              <div class="input-wrapper">
                <span class="input-icon">✉</span>
                <input
                  v-model="registerEmail"
                  type="email"
                  class="input-field"
                  placeholder="prenom.nom@lycee-europe.fr"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Mot de passe</label>
              <div class="input-wrapper">
                <span class="input-icon">🔒</span>
                <input
                  v-model="registerPassword"
                  :type="showPassword ? 'text' : 'password'"
                  class="input-field"
                  placeholder="8 caractères minimum"
                  required
                  minlength="8"
                />
                <button type="button" class="eye-toggle" @click="showPassword = !showPassword">
                  {{ showPassword ? '🙈' : '👁' }}
                </button>
              </div>
              <!-- Indicateur force mdp -->
              <div class="pwd-strength" v-if="registerPassword.length > 0">
                <div class="pwd-bars">
                  <div
                    v-for="i in 4"
                    :key="i"
                    class="pwd-bar"
                    :class="{ active: i <= pwdStrength.score, [pwdStrength.level]: i <= pwdStrength.score }"
                  ></div>
                </div>
                <span class="pwd-label" :class="pwdStrength.level">{{ pwdStrength.label }}</span>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Classe</label>
              <div class="input-wrapper">
                <span class="input-icon">🏫</span>
                <select v-model="registerClasse" class="input-field">
                  <option value="" disabled>Choisir votre classe</option>
                  <option v-for="c in classes" :key="c" :value="c">{{ c }}</option>
                </select>
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-login" :disabled="isLoading">
              <span v-if="isLoading" class="spinner"></span>
              <span v-else>🚀</span>
              {{ isLoading ? 'Création...' : 'Créer mon compte' }}
            </button>

            <div v-if="errorMsg" class="error-msg">
              <span>⚠</span> {{ errorMsg }}
            </div>

          </form>

          <!-- Divider -->
          <div class="divider-or">
            <span class="divider-line"></span>
            <span class="divider-text">ou</span>
            <span class="divider-line"></span>
          </div>

          <!-- Bouton Google -->
          <button type="button" class="btn-google" @click="handleGoogleLogin" :disabled="isLoading">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continuer avec Google
          </button>

        </div>
      </div>
    </div>

    <!-- Toast notification -->
    <Transition name="toast-slide">
      <div v-if="toast.show" class="toast" :class="`toast-${toast.type}`">
        <span>{{ toast.type === 'success' ? '✅' : '❌' }}</span>
        {{ toast.message }}
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail, updateProfile } from 'firebase/auth'

useHead({ title: 'Connexion' })


const { $firebase } = useNuxtApp()

const activeTab = ref('login')
const loginEmail = ref('')
const loginPassword = ref('')
const registerName = ref('')
const registerEmail = ref('')
const registerPassword = ref('')
const registerClasse = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)
const isLoading = ref(false)
const errorMsg = ref('')

const toast = reactive({ show: false, type: 'success', message: '' })

const classes = [
  '2nde A', '2nde B', '2nde C', '2nde D',
  '1ère S', '1ère ES', '1ère L', '1ère STI2D',
  'Tale S', 'Tale ES', 'Tale L', 'Tale STI2D',
  'BTS', 'Autres'
]

const pwdStrength = computed(() => {
  const p = registerPassword.value
  let score = 0
  if (p.length >= 8) score++
  if (/[A-Z]/.test(p)) score++
  if (/[0-9]/.test(p)) score++
  if (/[^A-Za-z0-9]/.test(p)) score++
  const levels = ['weak', 'fair', 'good', 'strong']
  const labels = ['Faible', 'Correct', 'Bon', 'Fort']
  return { score, level: levels[score - 1] || 'weak', label: labels[score - 1] || 'Faible' }
})

const brandFeatures = [
  { icon: '💬', title: 'Chat en temps réel', desc: 'Échangez avec vos camarades instantanément' },
  { icon: '📚', title: 'Ressources', desc: 'Accédez aux cours et documents' },
  { icon: '🔔', title: 'Notifications', desc: 'Ne ratez aucune actualité du lycée' },
]

function showToast(message, type = 'success') {
  toast.show = true
  toast.type = type
  toast.message = message
  setTimeout(() => { toast.show = false }, 4000)
}

async function handleLogin() {
  if (!loginEmail.value || !loginPassword.value) return
  isLoading.value = true
  errorMsg.value = ''
  try {
    const auth = getAuth($firebase)
    await signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    showToast('Connexion réussie ! Bienvenue 🎉')
    setTimeout(() => navigateTo('/chat'), 500)
  } catch (err) {
    errorMsg.value = getFriendlyError(err.code)
  } finally {
    isLoading.value = false
  }
}

async function handleRegister() {
  if (!registerName.value || !registerEmail.value || !registerPassword.value) return
  isLoading.value = true
  errorMsg.value = ''
  try {
    const auth = getAuth($firebase)
    const cred = await createUserWithEmailAndPassword(auth, registerEmail.value, registerPassword.value)
    await updateProfile(cred.user, { displayName: registerName.value })
    showToast('Compte créé avec succès ! 🎉')
    setTimeout(() => navigateTo('/chat'), 500)
  } catch (err) {
    errorMsg.value = getFriendlyError(err.code)
  } finally {
    isLoading.value = false
  }
}

async function handleGoogleLogin() {
  isLoading.value = true
  errorMsg.value = ''
  try {
    const auth = getAuth($firebase)
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
    showToast('Connexion Google réussie ! 🎉')
    setTimeout(() => navigateTo('/chat'), 500)
  } catch (err) {
    errorMsg.value = getFriendlyError(err.code)
  } finally {
    isLoading.value = false
  }
}

async function handleForgotPassword() {
  if (!loginEmail.value) {
    errorMsg.value = 'Entrez votre e-mail pour réinitialiser votre mot de passe.'
    return
  }
  try {
    const auth = getAuth($firebase)
    await sendPasswordResetEmail(auth, loginEmail.value)
    showToast('E-mail de réinitialisation envoyé !')
  } catch {
    showToast('Erreur lors de l\'envoi', 'error')
  }
}

function getFriendlyError(code) {
  // Firebase pas configuré
  if (!useNuxtApp().$firebaseConfigured) {
    return '🔧 Firebase n\'est pas encore configuré. Renseignez vos clés dans plugins/firebase.client.ts ou dans le fichier .env.'
  }
  const map = {
    'auth/user-not-found': 'Aucun compte trouvé avec cet e-mail.',
    'auth/wrong-password': 'Mot de passe incorrect.',
    'auth/email-already-in-use': 'Cet e-mail est déjà utilisé.',
    'auth/weak-password': 'Mot de passe trop faible (minimum 8 caractères).',
    'auth/invalid-email': 'Adresse e-mail invalide.',
    'auth/too-many-requests': 'Trop de tentatives. Réessayez dans quelques minutes.',
    'auth/popup-closed-by-user': 'La fenêtre de connexion a été fermée.',
    'auth/invalid-credential': 'Identifiants incorrects. Vérifiez votre e-mail et mot de passe.',
    'auth/invalid-api-key': '🔧 Clé API Firebase invalide. Vérifiez votre configuration.',
    'auth/configuration-not-found': '🔧 Projet Firebase non trouvé. Vérifiez votre projectId.',
  }
  return map[code] || `Une erreur est survenue (${code}). Vérifiez vos identifiants.`
}
</script>

<style scoped>
/* ── Firebase warning banner ────────────────────────────────── */
.firebase-warning {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 24px;
  background: rgba(251, 146, 60, 0.15);
  border-bottom: 1px solid rgba(251, 146, 60, 0.4);
  backdrop-filter: blur(12px);
  font-size: .85rem;
  color: #fed7aa;
  line-height: 1.5;
}

.firebase-warning span { font-size: 1.2rem; flex-shrink: 0; margin-top: 1px; }
.firebase-warning strong { color: #fb923c; }
.firebase-warning code {
  background: rgba(255,255,255,.1);
  border-radius: 4px;
  padding: 1px 6px;
  font-size: .8rem;
  font-family: monospace;
}
.firebase-warning a { color: #fb923c; font-weight: 600; text-decoration: underline; margin-left: 4px; }

/* ── Layout page ────────────────────────────────────────────── */
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
}

.login-back-btn {
  position: fixed;
  top: 24px;
  left: 24px;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  border-radius: var(--r-full);
  color: var(--text-secondary);
  font-size: .875rem;
  font-weight: 500;
  text-decoration: none;
  transition: all var(--t-base);
}

.login-back-btn:hover {
  color: var(--text-primary);
  background: var(--glass-bg-md);
  border-color: var(--glass-border-hover);
  transform: translateX(-2px);
}

/* Rings décoratifs */
.login-deco {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.login-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,.05);
}

.ring-1 {
  width: 500px; height: 500px;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  animation: ringPulse 8s ease-in-out infinite;
}

.ring-2 {
  width: 750px; height: 750px;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  animation: ringPulse 10s ease-in-out infinite reverse;
}

.ring-3 {
  width: 1000px; height: 1000px;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  animation: ringPulse 14s ease-in-out infinite;
}

@keyframes ringPulse {
  0%, 100% { opacity: .05; transform: translate(-50%, -50%) scale(1); }
  50%       { opacity: .15; transform: translate(-50%, -50%) scale(1.05); }
}

/* Orbit dots */
.login-orbit {
  position: absolute;
  width: 600px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: orbitRotate 30s linear infinite;
}

.orbit-dot {
  position: absolute;
  font-size: 1.5rem;
  animation: orbitRotateReverse 30s linear infinite;
  filter: drop-shadow(0 0 8px rgba(168,85,247,.6));
}

.dot-1 { top: 0; left: 50%; transform: translateX(-50%); }
.dot-2 { top: 50%; right: 0; transform: translateY(-50%); }
.dot-3 { bottom: 0; left: 50%; transform: translateX(-50%); }
.dot-4 { top: 50%; left: 0; transform: translateY(-50%); }

@keyframes orbitRotate { to { transform: translate(-50%, -50%) rotate(360deg); } }
@keyframes orbitRotateReverse { to { transform: rotate(-360deg); } }

/* ── Container principal ────────────────────────────────────── */
.login-container {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  max-width: 1100px;
  width: 100%;
  align-items: center;
}

@media (max-width: 900px) {
  .login-container { grid-template-columns: 1fr; gap: 40px; }
  .login-deco { display: none; }
}

/* ── Branding ───────────────────────────────────────────────── */
.login-branding {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.brand-logo {
  font-size: 4rem;
  animation: anim-float 4s ease-in-out infinite;
  filter: drop-shadow(0 0 20px rgba(168,85,247,.6));
}

.brand-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: -.02em;
  line-height: 1.1;
}

.brand-subtitle {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 420px;
}

.brand-features {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
}

.brand-feature {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--r-lg);
  backdrop-filter: blur(12px);
  transition: all var(--t-base);
}

.brand-feature:hover {
  background: var(--glass-bg-md);
  border-color: var(--glass-border-hover);
  transform: translateX(4px);
}

.bf-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.bf-title {
  font-weight: 600;
  font-size: .9rem;
  color: var(--text-primary);
}

.bf-desc {
  font-size: .8rem;
  color: var(--text-muted);
}

/* Testimonial */
.testimonial {
  margin-top: 8px;
  padding: 20px 24px;
  border-radius: var(--r-lg);
}

.testimonial-text {
  font-size: .9rem;
  color: var(--text-secondary);
  font-style: italic;
  margin-bottom: 16px;
  line-height: 1.6;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ta-avatar { font-size: 1.5rem; }

.ta-name {
  font-weight: 600;
  font-size: .85rem;
}

.ta-role {
  font-size: .75rem;
  color: var(--text-muted);
}

/* ── Card formulaire ────────────────────────────────────────── */
.login-form-panel {
  display: flex;
  justify-content: center;
}

.login-card {
  width: 100%;
  max-width: 460px;
  border-radius: var(--r-xl);
  padding: 40px;
  position: relative;
  overflow: hidden;
}

.login-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--g-accent);
}

/* Header form */
.form-header {
  text-align: center;
  margin-bottom: 28px;
}

.form-logo-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
  display: block;
  animation: float 3s ease-in-out infinite;
}

.form-title {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.form-subtitle {
  font-size: .875rem;
  color: var(--text-muted);
}

/* Tabs */
.auth-tabs {
  display: flex;
  gap: 4px;
  background: rgba(255,255,255,.05);
  border-radius: var(--r-full);
  padding: 4px;
  margin-bottom: 28px;
}

.auth-tab {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: var(--r-full);
  background: transparent;
  color: var(--text-muted);
  font-size: .875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--t-base);
}

.auth-tab.active {
  background: var(--g-accent);
  color: white;
  box-shadow: 0 4px 16px rgba(168,85,247,.4);
}

/* Auth form */
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group { display: flex; flex-direction: column; gap: 8px; }

.form-label {
  font-size: .8rem;
  font-weight: 600;
  color: var(--text-secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: .03em;
  text-transform: uppercase;
}

.forgot-link {
  color: var(--c-purple-2);
  text-decoration: none;
  font-weight: 500;
  font-size: .75rem;
  text-transform: none;
  letter-spacing: 0;
  transition: color var(--t-fast);
}

.forgot-link:hover { color: var(--c-pink-2); }

.eye-toggle {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 4px;
}

/* Password strength */
.pwd-strength {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 6px;
}

.pwd-bars {
  display: flex;
  gap: 4px;
  flex: 1;
}

.pwd-bar {
  height: 4px;
  flex: 1;
  border-radius: 2px;
  background: rgba(255,255,255,.1);
  transition: all var(--t-base);
}

.pwd-bar.active.weak   { background: #ef4444; }
.pwd-bar.active.fair   { background: #f97316; }
.pwd-bar.active.good   { background: #eab308; }
.pwd-bar.active.strong { background: #22c55e; }

.pwd-label {
  font-size: .7rem;
  font-weight: 600;
}
.pwd-label.weak   { color: #ef4444; }
.pwd-label.fair   { color: #f97316; }
.pwd-label.good   { color: #eab308; }
.pwd-label.strong { color: #22c55e; }

/* Remember */
.remember-row { display: flex; align-items: center; }

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: .875rem;
  color: var(--text-secondary);
  cursor: pointer;
}

.custom-checkbox { display: none; }

.checkbox-custom {
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border: 2px solid var(--glass-border-hover);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--t-fast);
  flex-shrink: 0;
}

.custom-checkbox:checked + .checkbox-custom {
  background: var(--g-accent);
  border-color: transparent;
}

.custom-checkbox:checked + .checkbox-custom::after {
  content: '✓';
  color: white;
  font-size: .7rem;
}

/* Submit button */
.btn-login {
  width: 100%;
  padding: 15px;
  font-size: .95rem;
  border-radius: var(--r-lg);
  margin-top: 4px;
  position: relative;
}

.btn-login:disabled {
  opacity: .7;
  cursor: not-allowed;
}

/* Spinner */
.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin .7s linear infinite;
  display: inline-block;
}

/* Erreur */
.error-msg {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(239,68,68,.1);
  border: 1px solid rgba(239,68,68,.3);
  border-radius: var(--r-md);
  color: #fca5a5;
  font-size: .85rem;
}

/* Divider OR */
.divider-or {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 24px 0;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: var(--glass-border);
}

.divider-text {
  font-size: .75rem;
  color: var(--text-muted);
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
}

/* Google button */
.btn-google {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px;
  background: rgba(255,255,255,.07);
  border: 1px solid var(--glass-border);
  border-radius: var(--r-lg);
  color: var(--text-primary);
  font-size: .9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--t-base);
}

.btn-google:hover {
  background: rgba(255,255,255,.12);
  border-color: rgba(255,255,255,.25);
  transform: translateY(-1px);
}

.btn-google:disabled { opacity: .6; cursor: not-allowed; }

/* Select */
select.input-field {
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

/* Toast transition */
.toast-slide-enter-active, .toast-slide-leave-active {
  transition: all .4s var(--t-spring);
}
.toast-slide-enter-from, .toast-slide-leave-to {
  transform: translateY(20px) translateX(20px);
  opacity: 0;
}
</style>
