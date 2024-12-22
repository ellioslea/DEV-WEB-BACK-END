# API de Site de Rencontres

## Description
Une API RESTful pour un site de rencontres avec des fonctionnalités comme le matching des utilisateurs, la messagerie et la modération.

## Membres
- Ellios TAGNE-CHIBY lea
- Gianna QUENUM
- Anta THIAM

## Fonctionnalités
Authentification & Autorisation : Authentification basée sur JWT et contrôle d'accès basé sur les rôles

Profils Utilisateurs : Profils utilisateurs détaillés avec informations personnelles et préférences

Système de Matching : Matching des utilisateurs avec fonctionnalité d'accepter/refuser

Messagerie : Messagerie privée entre utilisateurs appariés

Modération : Signalement d'utilisateurs et modération de contenu

Sécurité : Hashage des mots de passe et protection des données

## Stack Technique
Node.js

Express.js

PostgreSQL

ORM Sequelize

JWT pour l'authentification

bcrypt pour le hashage des mots de passe

## Endpoints de l'API
Authentification

POST /api/auth/register : Inscription d'un nouvel utilisateur
POST /api/auth/login : Connexion d'un utilisateur

Utilisateurs

GET /api/users : Récupérer des correspondances potentielles
GET /api/users/:id : Récupérer le profil d'un utilisateur
PUT /api/users/:id : Mettre à jour le profil d'un utilisateur
DELETE /api/users/:id : Supprimer un compte

Matching
POST /api/matches : Créer une demande de correspondance
PUT /api/matches/:id : Accepter/refuser une correspondance
GET /api/matches : Obtenir les correspondances de l'utilisateur
DELETE /api/matches/:id : Annuler une correspondance

Messages
POST /api/messages : Envoyer un message
GET /api/messages : Obtenir l'historique des conversations
PUT /api/messages/:id : Marquer un message comme lu
DELETE /api/messages/:id : Supprimer un message

Signalements
POST /api/reports : Signaler un utilisateur
GET /api/reports : Obtenir les signalements (modérateurs uniquement)
PUT /api/reports/:id : Mettre à jour le statut d'un signalement (modérateurs uniquement)

Installation
Cloner le dépôt
Créer une base de données PostgreSQL
Configurer un fichier .env avec vos identifiants de base de données
Exécuter npm install
Exécuter npm run dev pour le mode développement
L'API sera disponible à l'adresse http://localhost:3000

## Configuration de la Base de Données
Installer PostgreSQL
Créer une base de données nommée dating_site
Mettre à jour le fichier .env avec vos identifiants PostgreSQL
Les tables seront créées automatiquement lors de la première exécution



