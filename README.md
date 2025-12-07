# Agadir Task Manager 2025

**Application**: Agadir Task Manager 2025 — Backend (API REST) + Mobile (React Native) + Documentation OpenAPI

---

## 📌 Résumé du projet

La ville d'Agadir souhaite une petite application mobile permettant aux citoyens et étudiants de gérer leurs tâches quotidiennes : rendez‑vous administratifs, révisions, démarches, rappels, etc. Ce dépôt contient le backend (Node.js/Express), la documentation OpenAPI et les consignes pour l'application React Native.

Le projet doit rester simple : **2 tables** en base de données (`users`, `tasks`).

---

## ✅ Fonctionnalités principales

### Authentification

* **Inscription** : `POST /auth/register` (name, email, password)
* **Connexion** : `POST /auth/login` (email, password)
* **JWT Bearer Token** requis pour toutes les routes liées aux tâches

### Tâches

* **Créer une tâche** : `POST /tasks`
* **Récupérer ses tâches** : `GET /tasks`
* **Modifier une tâche** : `PUT /tasks/{id}`
* **Supprimer une tâche** : `DELETE /tasks/{id}`
* **Marquer comme terminée** : `PATCH /tasks/{id}/done`

---

## 🗂 Structure de la base de données (PostgreSQL)

### Table `users`

* `id` — `SERIAL PRIMARY KEY`
* `name` — `VARCHAR`
* `email` — `VARCHAR UNIQUE`
* `password` — `VARCHAR` (hashé avec bcrypt)
* `created_at` — `TIMESTAMP DEFAULT now()`

### Table `tasks`

* `id` — `SERIAL PRIMARY KEY`
* `user_id` — `INT` (FK → users.id)
* `title` — `VARCHAR`
* `description` — `TEXT`
* `status` — `VARCHAR` / `ENUM('pending','done')` (par défaut `pending`)
* `due_date` — `TIMESTAMP`
* `created_at` — `TIMESTAMP DEFAULT now()`

---

## 📄 Documentation API (OpenAPI)

Le dépôt inclut un fichier `openapi.yaml` (ou `openapi.json`) avec :

* Schéma `User` et `Task`
* Tous les endpoints listés ci‑dessus
* Exemples d'entrée / sortie
* Codes HTTP (200, 201, 400, 401, 404, 500)
* Authentification Bearer JWT

---

## 💻 Backend — Structure du projet (suggestion)

```
backend/
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
├── .env
├── package.json
```

**Principes** : MVC, validation des entrées, gestion des erreurs centralisée, logs basiques.

---

## ⚙️ Variables d'environnement (exemples)

```
PORT=4000
DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/DBNAME
JWT_SECRET=une_chaine_longue_et_secrete
JWT_EXPIRES_IN=7d
NODE_ENV=development
```

---

## ▶️ Commandes utiles (backend)

```bash
# Installer
npm install

# Lancer en dev (nodemon)
npm run dev

# Build & start (production)
npm run build
npm start

```

---

## 🔐 Authentification & sécurité

* Mots de passe hashés avec **bcrypt** (salt >= 10)
* Token **JWT** signé par `JWT_SECRET` et ajouté dans le header `Authorization: Bearer <token>`
* Middleware `auth` vérifie le token et injecte `req.user` pour l'accès aux routes de `tasks`
* Validation des données d'entrée (ex: `express-validator` ou `zod`)

---

## 📱 Application mobile (React Native)

### Écrans

* **Accueil** : logo + boutons `Se connecter` / `Créer un compte`
* **Auth** : Login (email, password) & Register (name, email, password)
* **Dashboard** : liste des tâches + filtres (Toutes, En attente, Terminées)
* **Ajouter tâche** : formulaire (title, description, due_date)
* **Détails tâche** : view complet + boutons `Terminer` / `Supprimer`

### Consommation API

* `axios` instance avec `baseURL`
* `interceptor` pour ajouter automatiquement `Authorization: Bearer <token>`

### Hooks suggérés

* `useLogin()`
* `useRegister()`

---

## 🎨 UI / Contexte local

* Palette: **bleu océan** + **sable**
* Petite icône Hassan II en splash ou header (optionnel, respecter les normes locales)
* Exemples de tâches locales pré‑remplies (RDV Moukawalati, Télé‑déclaration CNSS, Prépa BTS/OFPPT, RAMED/AMO)

---

## 📦 Livrables attendus

1. Code source — Repository GitHub complet
2. API REST fonctionnelle (déployée si possible)
3. Documentation UML (4 diagrammes: cas d'utilisation, classes, séquence, ERD) en PDF/PNG
4. Documentation technique — `README.md` + instructions d'installation
5. Présentation (PowerPoint / PDF) + collection Postman exportée
6. Fichier `openapi.yaml` (Swagger)

---

## 🧪 Critères d'évaluation

* **Fonctionnalités backend**: endpoints fonctionnels et codes HTTP corrects
* **Sécurité**: JWT + bcrypt, protection des routes
* **Frontend**: app RN fonctionnelle (login, CRUD tâches)
* **Qualité**: code propre, architecture MVC, validation, README, Postman
* **Déploiement**: API accessible via URL publique (optionnel mais valorisé)

---

## 🗓 Planning pédagogique (5 jours)

* **Jour 1 (1/12)**: Setup projet backend, DB, modèles, auth
* **Jour 2**: Endpoints CRUD tasks + validation
* **Jour 3**: OpenAPI + tests manuels (Postman)
* **Jour 4**: App React Native (écrans principaux)
* **Jour 5 (5/12)**: Tests finaux, README, UML, build & dépôt final

---

## 📌 Notes & bonnes pratiques

* `.gitignore` doit contenir `node_modules/`, `.env` et fichiers sensibles
* Ne pas pousser la clé `JWT_SECRET` ni `DATABASE_URL` en clair
* Ajouter fixtures ou seed minimal pour tests
* Ajouter scripts npm pour migrations et seed

---

Si tu veux, je peux aussi générer automatiquement dans ce dépôt :

* le **squelette backend** (fichiers controllers/models/routes)
* le **fichier OpenAPI** complet
* les **composants React Native** de base
* un **diagramme de classes** (UML)

Dis‑moi ce que tu veux en priorité et je le crée directement.
