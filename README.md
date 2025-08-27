# 📚 SkillUp – Application de cours particuliers

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js) 
![Express](https://img.shields.io/badge/Express.js-Backend-black?logo=express) 
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb) 
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 🎯 Problématique
- Les élèves manquent de suivi personnalisé  
- Les parents recherchent une solution simple et fiable  
- Les enseignants veulent une plateforme efficace pour gérer leurs cours  

---

## 💡 Solution proposée
**SkillUp** est une application web qui centralise :  
- La gestion des cours particuliers  
- La création et l’authentification sécurisée des utilisateurs  
- Un système d’administration pour les professeurs  

---

## ⚙️ Fonctionnalités principales
- 📖 **Cours** : récupérer la liste des cours (`GET /api/courses`)  
- 👤 **Utilisateurs** : création d’un utilisateur (`POST /api/user`)  
- 🔑 **Connexion** : authentification sécurisée avec JWT (`POST /api/login`)  
- 📝 **Logs** : suivi des actions avec **Pino** → fichier `logs.txt`  

---

## 🛠️ Stack technique
- **Backend** : [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)  
- **Base de données** : [MongoDB](https://www.mongodb.com/) avec [Mongoose](https://mongoosejs.com/)  
- **Sécurité** :  
  - [bcrypt](https://www.npmjs.com/package/bcrypt) pour le hash des mots de passe  
  - [jsonwebtoken (JWT)](https://www.npmjs.com/package/jsonwebtoken) pour l’authentification  
- **Outils** :  
  - [Pino](https://www.npmjs.com/package/pino) pour la journalisation  
  - [CORS](https://www.npmjs.com/package/cors) pour la gestion des origines  

---
