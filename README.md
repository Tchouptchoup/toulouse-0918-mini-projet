# Mini-projet final

On approche de la fin de la formation ! L'occasion de faire le point... Je te propose un mini projet qui permettra de récapituler les connaissances acquises depuis le début.

Au programme :
* React
* Modélisation de base de données
* API REST avec Node.js / Express
* Redux

Le thème : un site de e-commerce.

## User Stories

* En tant que visiteur, je veux consulter une liste des produits
* En tant que visiteur, je veux pouvoir filtrer les produits par leur nom
* En tant que visiteur, je veux pouvoir ajouter un produit à mon panier
* En tant que visiteur, je peux créer mon compte et m'y connecter
* En tant que visiteur, je veux éditer les données de mon compte
* En tant que visiteur, je veux pouvoir passer une commande
* En tant que visiteur, je veux consulter l'historique de mes commandes
* En tant que visiteur, je veux pouvoir filtrer les produits par leur catégorie
* En tant qu'administrateur, je veux pouvoir créer/modifier/supprimer un produit
* En tant qu'administrateur, je veux pouvoir consulter la liste de toute les commandes passées
* En tant qu'administrateur, je veux pouvoir lister les produits
* En tant qu'administrateur, je veux pouvoir créer/modifier/supprimer une catégorie de produits
* En tant qu'administrateur, je veux pouvoir attribuer une catégorie à un produit
* En tant qu'administrateur, je veux pouvoir ajouter une photo au produit (au lieu d'une URL en dur)

## Données

Tu auras besoin de 4 tables. **Les relations entre les tables ne sont pas indiquées ici**, cela fait partie de l'exercice que de trouver quelle(s) colonne(s) ajouter à chaque table pour que le tout fonctionne :

* `product` contiendra les champs suivants :

    * `brand` la marque du produit, par ex. "Asus" (`string` sauf si tu tiens **vraiment** à créer une table `brand` pour les marques)
    * `name` le nom du produit, par ex. "Moniteur 24 pouces Full HD XBZ2"
    * `reference`, une référence pour le produit à 6 chiffres, par ex `762874`
    * `slug` le nom du produit "slugifié", concaténation de la marque, du nom, par ex. `asus-moniteur-24-pouces-full-hd-xbz2`
    * `description`, par ex. "Moniteur d'une qualité d'affichage exceptionnelle avec sa résolution de 1920x1080 pixels"
    * `stock` le nombre de produits en stock
    * `price` le prix du produit
    * `picture` l'URL d'une image
    * `createdAt` date de l'ajout du produit (type `DATETIME` pouvant être indiqué dans le schéma avec le temps courant par défaut, en utilisant `DEFAULT CURRENT_TIMESTAMP`)

* `user` :

    * `email`
    * `password`
    * `firstname`
    * `lastname`

* `order` :

    * `date` la date de la commande (type `DATETIME` en MySQL, sur lequel on peut aussi indiquer `DEFAULT CURRENT_TIMESTAMP`)

* `order_product` :

    * `quantity` la quantité du produit dans la commande
    * `price` le prix unitaire du produit pour cette commande (le champ `price` de `product` pouvant varier dans le temps)

**En option**

* `category` :

    * `name` le nom de la catégorie, par ex: "Informatique"
    * `slug` le nom "slugifié", par ex : `informatique`

## Structure du projets

Trois répertoires :

* `back`
* `front-public` pour la partie visiteur
* `front-admin` pour la partie admin

N'oublie pas d'utiliser ESLint !!

## Par où commencer ?

* Créer le repo (sauf si vous forkez celui-ci)
* Créer les répertoires (à la main pour le back, avec CRA pour les front)
* Dans les `package.json` des front, ajouter la config ESLint (voir annexes)
* Dans le back, initialiser ESLint avec `eslint --init`, puis dans les menus, choisir successivement :

    * "Use a popular style guide"
    * "Airbnb"
    * N à la question "Do you use React"?
    * JavaScript
    * Y à la question "Would you like to install them now with npm?" (installation des dépendances)
* Après cette initialisation, modifier le fichier `.eslintrc.js` généré automatiquement, pour y mettre ce qu'on trouve en annexes

## Annexes

### Configuration ESLint côté front

Ajouter ce bloc dans le `package.json` :

    "eslintConfig": {
      "extends": "airbnb",
      "env": {
        "browser": true,
        "jest": true,
        "serviceworker": true
      },
      "rules": {
        "react/jsx-filename-extension": 0,
        "react/jsx-one-expression-per-line": 0,
        "no-underscore-dangle": 0,
        "no-console": 0,
        "comma-dangle": 0,
        "arrow-parens": 0
      }
    },

Pour info, on désactive certaines "règles" édictées par AirBnb, comme par exemple :

* le fait de forcer l'extension `.jsx` pour les composants React (`react/jsx-filename-extension`)
* le fait d'interdire `console.log()` (`no-console`)
* le fait de forcer les parenthèses autour des paramètres, pour les fonctions fléchées qui n'en attendent qu'un (`arrow-parens`)

### Configuration ESLint côté back

Remplacer le contenu de `.eslintrc` par ceci :

    module.exports = {
        "extends": "airbnb-base",
        "env": {
          "browser": false,
          "node": true,
          "jasmine": true
        },
        "rules": {
          "no-console": 0,
          "comma-dangle": 0,
          "arrow-parens": 0,
          "no-restricted-globals": 0
        }
    };