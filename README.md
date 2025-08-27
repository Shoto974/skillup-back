SkillUp – Application de cours particuliers
🎯 Problématique

Les élèves manquent de suivi personnalisé

Les parents cherchent une solution simple et fiable

Les enseignants veulent une plateforme efficace pour gérer leurs cours

💡 Solution proposée

Une application web qui centralise :

La gestion des cours particuliers

La création et l’authentification sécurisée des utilisateurs

Un système d’administration pour les professeurs

⚙️ Fonctionnalités principales

Cours : récupérer la liste des cours (GET /api/courses)

Utilisateurs : créer un utilisateur (POST /api/user)

Connexion : authentification sécurisée avec JWT (POST /api/login)

Logs : suivi des actions avec Pino → fichier logs.txt

🛠️ Technologies utilisées

Backend : Node.js, Express

Base de données : MongoDB avec Mongoose

Sécurité : bcrypt (hash des mots de passe), JWT (authentification)

Outils : Pino (logs), CORS, Express Router

🏗️ Architecture
Frontend (React futur)
       ↓
API REST (Express)
       ↓
MongoDB (Mongoose)

🔐 Sécurité

Hashage des mots de passe (bcrypt)

Jetons JWT pour les sessions utilisateur

Gestion des rôles (isAdmin)

Journalisation centralisée

🚀 Avantages

Simple et rapide à déployer

Sécurisé dès la base

Extensible : ajout facile de nouvelles routes et fonctionnalités

Fiable : stack éprouvée (Node.js + MongoDB)

🖥️ Démonstration API

Créer un utilisateur :
POST /api/user → { name, password, isAdmin }

Se connecter :
POST /api/login → retourne un JWT si login OK

📈 Roadmap

Interface frontend en React

Tableau de bord pour les administrateurs

Notifications en temps réel

IA de recommandation de cours

✅ Conclusion

SkillUp : une solution moderne, sécurisée et évolutive pour la mise en relation entre élèves, parents et enseignants.

👉 Prochaines étapes : déploiement, frontend et recherche de partenaires.
