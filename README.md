# Lycée Europe • IA — Premium 2026

Site statique premium (HTML/CSS/JS) + console Firebase.

## ✅ Lancer en local

> Important : ouvre le site via un serveur local (pas en double-cliquant le HTML), sinon les modules JS peuvent être bloqués.

### Option 1 — Python
```bash
cd lycee-europe-premium-2026
python -m http.server 5500
```
Puis ouvre : http://localhost:5500

### Option 2 — Node (si tu as déjà `serve`)
```bash
npx serve .
```

## ✅ Déploiement

- GitHub Pages : push le dossier, active Pages sur la branche.
- Netlify / Vercel : importe le repo et déploie en statique.
- Firebase Hosting : possible (ajouter `hosting` dans firebase.json).

## Structure

```
assets/
  css/    Design system + pages
  js/     Modules console + scripts globaux
  img/    Images (favicon, photo IA)

index.html      Landing premium
console.html    Console IA (Firebase)
hub.html        Hub projets
about.html      À propos
contact.html    Contact
rules.html      Règles
privacy.html    Confidentialité
functions/      Cloud Functions (IA + modération)
```

## Notes techniques

- Pas de framework : ultra léger et simple à héberger.
- Design system basé sur variables CSS (`assets/css/tokens.css`).
- Animations propres via IntersectionObserver (`assets/js/main.js`).
- Console : logique existante conservée (stabilité) + re-skin complet.
