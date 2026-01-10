# Documentation Technique - Lycée de l'Europe

## 📋 Table des Matières

1. [Architecture du Projet](#architecture-du-projet)
2. [Technologies Utilisées](#technologies-utilisées)
3. [Structure des Fichiers](#structure-des-fichiers)
4. [Guide de Style CSS](#guide-de-style-css)
5. [Composants JavaScript](#composants-javascript)
6. [Accessibilité](#accessibilité)
7. [Performance et Optimisation](#performance-et-optimisation)
8. [SEO](#seo)
9. [Guide de Contribution](#guide-de-contribution)

---

## Architecture du Projet

Le site du Lycée de l'Europe est une application web statique moderne construite avec les technologies web standards (HTML5, CSS3, JavaScript ES6+).

### Philosophie de Design

- **Mobile First**: Développement en priorité pour mobile, puis adapté pour desktop
- **Progressive Enhancement**: Fonctionnalités de base pour tous, améliorations pour navigateurs modernes
- **Accessibilité**: Conformité WCAG 2.1 niveau AA
- **Performance**: Temps de chargement optimisé, animations 60fps

---

## Technologies Utilisées

### Frontend

- **HTML5**: Structure sémantique moderne
- **CSS3**: 
  - Variables CSS pour la thématique
  - Flexbox et CSS Grid pour le layout
  - Animations CSS natives
  - Media queries pour le responsive
- **JavaScript Vanilla ES6+**:
  - Modules natifs
  - Async/Await
  - Intersection Observer API
  - LocalStorage API
  - Performance API

### Librairies Externes

- **Font Awesome 6.0.0**: Iconographie
- **Google Fonts**: 
  - Playfair Display (titres)
  - Lato (contenu)

### Services Backend (Chat VIP)

- **Firebase Firestore**: Base de données temps réel
- **Firebase Authentication**: Authentification sécurisée

---

## Structure des Fichiers

```
lycee-europe/
├── index.html              # Page d'accueil
├── style.css              # Styles principaux (2245 lignes)
├── components.js          # Composants JavaScript réutilisables
├── assets/
│   └── animated-logo.svg  # Logo animé SVG
├── chat.html              # Chat public
├── chatvip.html           # Chat VIP authentifié
├── formations.html        # Page des formations
├── evenements.html        # Événements
├── erasmus.html           # Programme Erasmus+
├── le-lycee.html          # Présentation du lycée
├── les-bts.html           # BTS CIEL
├── la-prepa-ptsi-pt.html  # Classes préparatoires
├── mentions-legales.html  # Mentions légales
├── sitemap.xml            # Sitemap pour SEO
├── robots.txt             # Directives pour robots
└── .gitignore             # Fichiers à ignorer
```

---

## Guide de Style CSS

### Variables CSS

Toutes les couleurs et valeurs réutilisables sont définies dans `:root`:

```css
:root {
  /* Couleurs de luxe */
  --luxury-gold: #D4AF37;
  --luxury-gold-light: #F4E4C1;
  --luxury-gold-dark: #B8941E;
  --luxury-black: #0A0A0A;
  --luxury-charcoal: #1a1a1a;
  
  /* Gradients */
  --luxury-gradient: linear-gradient(135deg, #D4AF37 0%, #F4E4C1 50%, #B8941E 100%);
  
  /* Transitions */
  --transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Convention de Nommage

- **BEM partiel**: `.block__element--modifier` pour composants complexes
- **Utilitaires**: Classes préfixées (ex: `.fade-in-scroll`, `.slide-in-left`)
- **États**: Classes d'état descriptives (`.visible`, `.active`, `.loaded`)

### Architecture CSS

1. **Reset & Base**: Styles de base et reset
2. **Variables**: Définition des variables CSS
3. **Layout**: Grid container, header, footer
4. **Composants**: Cards, menus, boutons
5. **Utilitaires**: Classes d'aide pour animations
6. **Responsive**: Media queries en fin de fichier

### Animations

Toutes les animations utilisent `transform` et `opacity` pour garantir 60fps:

```css
/* BON - Performance optimale */
.card {
  transition: transform 0.3s, opacity 0.3s;
}

/* À ÉVITER - Déclenche reflow */
.card {
  transition: height 0.3s, width 0.3s;
}
```

---

## Composants JavaScript

### components.js

Fichier principal contenant tous les composants réutilisables.

#### Structure

```javascript
// Composant Cookie Banner
function initCookieBanner() { ... }
function acceptCookies() { ... }
function refuseCookies() { ... }

// Composant Navigation Mobile
function initMobileNavigation() { ... }

// Composant Animations
function initScrollAnimations() { ... }

// Composant Images
function enhanceImages() { ... }

// Composant Thème
function initThemeToggle() { ... }

// Composant Scroll to Top
function initScrollToTop() { ... }

// Initialisation
document.addEventListener('DOMContentLoaded', () => { ... });
```

#### Initialisation

Tous les composants s'initialisent automatiquement au chargement DOM:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    showLoadingAnimation();
    initCookieBanner();
    initMobileNavigation();
    initScrollAnimations();
    enhanceImages();
    initThemeToggle();
    initScrollToTop();
});
```

---

## Accessibilité

### Conformité WCAG 2.1 Niveau AA

#### Sémantique HTML

```html
<header role="banner">
<main role="main" id="main-content">
<aside role="complementary" aria-label="Menu principal">
<footer role="contentinfo">
```

#### Navigation Clavier

- **Skip Link**: Lien "Aller au contenu principal" pour utilisateurs clavier
- **Focus Visible**: Outline doré sur tous les éléments focusables
- **Tab Order**: Ordre logique de tabulation

```css
*:focus-visible {
  outline: 3px solid var(--luxury-gold);
  outline-offset: 2px;
}
```

#### ARIA Labels

```html
<button aria-label="Basculer entre mode clair et sombre" aria-pressed="false">
<nav aria-label="Navigation principale">
<img alt="Description précise de l'image" loading="lazy">
```

#### Contraste

- Ratio minimum 4.5:1 pour texte normal
- Ratio minimum 3:1 pour texte large
- Or (#D4AF37) sur noir (#0A0A0A) = ratio 6.2:1 ✓

### Tests Recommandés

1. **Navigation clavier**: Tab, Shift+Tab, Enter, Espace
2. **Lecteur d'écran**: NVDA, JAWS, VoiceOver
3. **Zoom**: 200% sans perte de fonctionnalité
4. **Outils**: axe DevTools, Lighthouse Accessibility

---

## Performance et Optimisation

### Stratégies Implémentées

#### 1. Chargement Critique

```html
<!-- Preconnect aux domaines externes -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://cdnjs.cloudflare.com">

<!-- Preload des ressources critiques -->
<link rel="preload" href="style.css" as="style">
```

#### 2. Lazy Loading

```html
<!-- Images -->
<img src="image.jpg" loading="lazy" alt="Description">

<!-- Iframes -->
<iframe src="video.html" loading="lazy"></iframe>
```

#### 3. Optimisation Images

- Format WebP avec fallback JPEG
- Dimensions appropriées (pas de resize CSS)
- Compression optimisée (80% qualité)
- Lazy loading avec Intersection Observer

#### 4. CSS

- Variables CSS pour éviter répétitions
- Animations GPU-accelerated (transform, opacity)
- Media queries organisées
- Minification pour production

#### 5. JavaScript

- Code modulaire réutilisable
- Event delegation quand possible
- Debouncing pour scroll/resize
- RequestAnimationFrame pour animations

### Métriques Cibles

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Outils de Mesure

```bash
# Lighthouse CLI
lighthouse https://lycee-europe.fr --view

# WebPageTest
https://webpagetest.org

# Chrome DevTools
Performance tab + Coverage tab
```

---

## SEO

### Meta Tags

```html
<!-- Base -->
<title>Lycée de l'Europe - Dunkerque | Excellence & Innovation</title>
<meta name="description" content="...">
<link rel="canonical" href="https://lycee-europe.fr/">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://lycee-europe.fr/">
<meta property="og:image" content="...">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
```

### Données Structurées

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Lycée de l'Europe",
  "address": { ... },
  "telephone": "+33328587200",
  "hasCredential": [ ... ]
}
```

### Sitemap

Fichier `sitemap.xml` listant toutes les pages avec priorités:

- Homepage: priority 1.0
- Pages principales: priority 0.9
- Pages secondaires: priority 0.7-0.8
- Utilitaires: priority 0.3

### Robots.txt

```
User-agent: *
Allow: /
Disallow: /chatvip.html
Sitemap: https://lycee-europe.fr/sitemap.xml
```

---

## Guide de Contribution

### Standards de Code

#### HTML

- Indentation: 4 espaces
- Attributs: guillemets doubles
- Sémantique: balises appropriées
- Accessibilité: ARIA labels obligatoires

#### CSS

- Indentation: 2 espaces
- Organisation: par section avec commentaires
- Variables: utiliser les CSS custom properties
- Naming: descriptif et cohérent

#### JavaScript

- Indentation: 4 espaces
- Style: ESLint compatible
- Commentaires: JSDoc pour fonctions
- Performance: éviter les opérations coûteuses

### Workflow Git

```bash
# Créer une branche
git checkout -b feature/nom-feature

# Commits atomiques et descriptifs
git commit -m "feat: ajouter animation SVG"
git commit -m "fix: corriger contraste bouton"

# Push et Pull Request
git push origin feature/nom-feature
```

### Conventions de Commit

- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Documentation
- `style:` Formatage, CSS
- `refactor:` Refactoring code
- `perf:` Amélioration performance
- `test:` Ajout de tests
- `chore:` Maintenance

### Tests Avant Commit

1. Valider HTML: https://validator.w3.org/
2. Tester responsive: DevTools responsive mode
3. Vérifier accessibilité: axe DevTools
4. Tester navigation clavier
5. Vérifier performance: Lighthouse

---

## Support et Contact

**Équipe BTS CIEL - Lycée de l'Europe**

- 📧 Email: ce.0590072h@ac-lille.fr
- 📞 Téléphone: 03 28 58 72 00
- 🏢 Adresse: 530 Av. de l'Université, 59140 Dunkerque

---

*Documentation mise à jour le 10 janvier 2026*
