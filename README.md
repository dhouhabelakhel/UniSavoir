# 🎓 Unisavoir Platform

Une plateforme web moderne pour la gestion d'activités de formation et d'apprentissage, permettant aux utilisateurs de découvrir, s'inscrire et participer à diverses activités éducatives.

## 📋 Table des Matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Technologies Utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Structure du Projet](#structure-du-projet)
- [API Endpoints](#api-endpoints)
- [Utilisation](#utilisation)
- [Contribution](#contribution)
- [Licence](#licence)

## 🌟 Aperçu

Unisavoir Platform est une application web complète qui facilite la gestion d'activités de formation. Elle permet aux formateurs de créer et gérer des activités, aux utilisateurs de s'inscrire aux formations, et à tous de partager des expériences via un système de blog intégré.

### 🌐 Liens de Démonstration

- **🚀 Application Live** : [https://unisavoir.netlify.app/](https://unisavoir.netlify.app/)
- **📊 API JSON Server** : [https://unisavoir-json-server-backend.onrender.com/](https://unisavoir-json-server-backend.onrender.com/)
- **📋 Documentation API** : [https://unisavoir-json-server-backend.onrender.com/](https://unisavoir-json-server-backend.onrender.com/)

### Caractéristiques Principales

- **Gestion des Utilisateurs** : Système d'authentification avec rôles (Admin/Utilisateur)
- **Activités de Formation** : Création, gestion et inscription aux activités
- **Système de Blog** : Partage d'expériences et d'actualités
- **Compétences et Certifications** : Suivi des compétences acquises
- **Interface Responsive** : Compatible mobile et desktop

## ✨ Fonctionnalités

### 👥 Gestion des Utilisateurs
- Inscription et connexion sécurisées
- Profils utilisateurs complets
- Gestion des rôles (Admin/Utilisateur)
- Historique des activités

### 📚 Activités de Formation
- Création d'activités avec détails complets
- Système d'inscription avec limitation de places
- Gestion des compétences et niveaux
- Suivi des formateurs
- Calendrier des formations

### 📝 Blog Intégré
- Publication d'articles
- Système de commentaires
- Gestion des auteurs
- Horodatage des publications

### 🏆 Compétences et Certifications
- Suivi des compétences par activité
- Niveaux de compétence (Initiation, Avancé, Expert)
- Certificats de formation
- Profil de compétences personnalisé

## 🛠 Technologies Utilisées

- **Frontend** : HTML5, CSS3, JavaScript, Angular
- **Backend** : JSON Server (développement)
- **Base de données** : JSON Server (développement)
- **Authentification** : JWT
- **Styling** : Bootstrap, CSS personnalisé, Angular Material
- **Outils** : Git, npm

## 🚀 Installation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn
- Git

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/dhouhabelakhel/UniSavoir.git
   cd UniSavoir
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Accéder à l'application**
   - Frontend : `http://localhost:4200`
   - API : `http://localhost:3000`

### Scripts disponibles

```json
{
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "start:server": "json-server --watch data.json --port 3000",
    "build": "ng build --configuration production --optimization=true --aot=true --build-optimizer=true",
    "dev": "concurrently \"npm run start\" \"npm run start:server\""
  }
}
```

### Démarrage des services

**Option 1 : Démarrage séparé (recommandé pour le développement)**

1. **Terminal 1 - Démarrer le serveur JSON**
   ```bash
   npm run start:server
   ```
   - Démarre json-server sur le port 3000
   - Surveille les changements dans `data.json`

2. **Terminal 2 - Démarrer Angular**
   ```bash
   npm start
   ```
   - Démarre l'application Angular sur le port 4200

**Option 2 : Démarrage simultané (avec concurrently)**

1. **Installer concurrently** (si pas déjà installé)
   ```bash
   npm install --save-dev concurrently
   ```

2. **Démarrer les deux services**
   ```bash
   npm run dev
   ```

### 🌐 Déploiement

L'application est déployée et accessible en ligne :
- **Production** : [https://votre-app-demo.netlify.app](https://votre-app-demo.netlify.app)
- **API Backend** : [https://unisavoir-json-server-backend.onrender.com](https://unisavoir-json-server-backend.onrender.com)

## 📁 Structure du Projet

```
UniSavoir/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   ├── models/
│   │   └── guards/
│   ├── assets/
│   └── environments/
├── data.json              # Base de données JSON
├── package.json
├── angular.json
└── README.md
```

## 🔗 API Endpoints

**Base URL** : `https://unisavoir-json-server-backend.onrender.com`

### Utilisateurs
- `GET /users` - Liste des utilisateurs
- `POST /users` - Créer un utilisateur
- `PUT /users/:id` - Modifier un utilisateur
- `DELETE /users/:id` - Supprimer un utilisateur

### Activités
- `GET /activities` - Liste des activités
- `POST /activities` - Créer une activité
- `PUT /activities/:id` - Modifier une activité
- `DELETE /activities/:id` - Supprimer une activité

### Blog
- `GET /blogs` - Liste des articles
- `POST /blogs` - Créer un article
- `PUT /blogs/:id` - Modifier un article
- `DELETE /blogs/:id` - Supprimer un article

### Exemples d'utilisation
```bash
# Récupérer tous les utilisateurs
curl https://unisavoir-json-server-backend.onrender.com/users

# Récupérer toutes les activités
curl https://unisavoir-json-server-backend.onrender.com/activities

# Récupérer tous les articles de blog
curl https://unisavoir-json-server-backend.onrender.com/blogs
```

## 💡 Utilisation

### Pour les Administrateurs
1. Connexion avec les identifiants admin
2. Gestion des utilisateurs et leurs permissions
3. Création et modification d'activités
4. Supervision des inscriptions
5. Gestion du contenu du blog

### Pour les Utilisateurs
1. Inscription/Connexion sur la plateforme
2. Consultation des activités disponibles
3. Inscription aux formations
4. Suivi de ses compétences
5. Participation au blog

### Comptes de Test
- **Admin** : username: `admin`, password: `admin`
- **Utilisateur** : username: `zina`, password: `Zinachatte1@`

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

1. **Fork** le projet
2. **Créer** une branche pour votre feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** vos changements (`git commit -m 'Add some AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. **Ouvrir** une Pull Request

### Standards de Code
- Utiliser ESLint pour le linting
- Suivre les conventions de nommage Angular
- Documenter les nouvelles fonctionnalités
- Écrire des tests unitaires

## 🛡️ Sécurité

- Authentification JWT
- Validation des données côté serveur
- Gestion sécurisée des mots de passe

## 📈 Roadmap

- [ ] Système de notifications en temps réel
- [ ] Intégration de paiements en ligne
- [ ] Application mobile Flutter
- [ ] Système de visioconférence intégré
- [ ] Analyse avancée des performances
- [ ] Support multilingue

## 🔧 Dépannage

### Problèmes courants

1. **Port 3000 ou 4200 déjà utilisé**
   ```bash
   # Trouver le processus qui utilise le port
   lsof -i :3000
   # ou
   lsof -i :4200
   
   # Tuer le processus
   kill -9 <PID>
   ```

2. **Erreur CORS**
   - JSON Server gère automatiquement les CORS
   - Vérifiez que l'URL de l'API est correcte dans votre service

3. **Fichier data.json non trouvé**
   - Assurez-vous que `data.json` est à la racine du projet
   - Vérifiez que le fichier contient un JSON valide

4. **Problème de connexion à l'API**
   - Vérifiez que json-server est démarré
   - Contrôlez l'URL de l'API dans vos services Angular

## 📞 Support

Pour toute question ou problème :
- **🌐 Demo Live** : [https://unisavoir.netlify.app/](https://unisavoir.netlify.app/)
- **📊 API JSON Server** : [https://unisavoir-json-server-backend.onrender.com](https://unisavoir-json-server-backend.onrender.com)
- **Email** : dhouhabelakhel2001@gmail.com
<!--- **Issues** : [GitHub Issues](https://github.com/dhouhabelakhel/UniSavoir/issues)-->
<!--- **Documentation** : [Wiki du projet](https://github.com/dhouhabelakhel/UniSavoir/wiki)-->

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">
  <p>Développé avec ❤️ par l'équipe UniSavoir</p>
  <p>
    <a href="https://github.com/dhouhabelakhel">GitHub</a> •
    <a href="https://linkedin.com/in/dhouha-belakhel">LinkedIn</a> •
   <!-- <a href="https://twitter.com/dhouha_belakhel">Twitter</a>-->
  </p>
</div>
