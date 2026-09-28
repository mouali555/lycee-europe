# Lycée Europe

Refonte du portail du Lycée Europe à Dunkerque : univers violet et spatial, accueil animé, parcours de formation interactif, actualités illustrées en CSS, vie lycéenne, Nexus et communauté.

## Lancer le site

À la racine du projet, exécute :

    npm ci
    npm run dev

Pour générer le site statique destiné à GitHub Pages :

    npm run generate

## Déploiement et Firebase

Le workflow .github/workflows/deploy.yml publie le site sur GitHub Pages après chaque mise à jour de main. Pour que la connexion, les salons et les messages Firebase fonctionnent aussi sur le site publié, ajoute ces six valeurs dans les secrets Actions du dépôt :

- NUXT_PUBLIC_FIREBASE_API_KEY
- NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN
- NUXT_PUBLIC_FIREBASE_PROJECT_ID
- NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET
- NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
- NUXT_PUBLIC_FIREBASE_APP_ID

Le fichier .env.example liste les mêmes variables pour un lancement local. public/CNAME conserve le domaine du site.
