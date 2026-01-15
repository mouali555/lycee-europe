# LYCÉE EUROPE — Secure Console

Un mini-"social" privé façon console terminal : accès par invitation, rooms, keys, et un copilote @ia.

## Structure (v2)

- `index.html` : landing
- `console.html` : console chat (v2)
- `css/` : thèmes + layout
- `js/` : front (modules)
  - `core/` : config + utils
  - `services/` : Firebase, auth, chat, AI
  - `ui/` : rendering chat + HUD
  - `console/main.js` : point d'entrée console
- `functions/` : Cloud Function `aiReply` (OpenAI)

## Déploiement

### Front
Ce repo peut être servi en statique (GitHub Pages, Firebase Hosting, Netlify…).

### Backend (@ia)
1. Crée un secret `OPENAI_API_KEY` dans ton projet Firebase.
2. Déploie les functions :

```bash
cd functions
npm i
firebase deploy --only functions
```

La fonction `aiReply` est protégée :
- vérifie le **token Firebase Auth** (header `Authorization: Bearer <idToken>`)
- vérifie l'**adhésion** (`spaces/<spaceId>/members/<uid>`) avant de répondre.

## Commandes console

- `/help`
- `/keys`
- `/use <clé>`
- `@ia <prompt>`
