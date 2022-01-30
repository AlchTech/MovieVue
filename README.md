# Projet VueJSMovie

Créer un application pouvant afficher des listes de film: 
 - Afficher la liste de film
 - Ajouter de nouveau film
 - Modifier des films
 - Supprimer un films

## frontend
 - Vuejs et Vuerouter
 - Appel d'api
 - Affichage dynamique
 - Recherche via champs de saisie (titre)
 - Trie acendant et descendant (titre et années) 

 - 1 page listant la totalité des films
 - 1 page d'ajout de film
 - 1 page de modification de film
 - 1 button de supression


## Backend
 - Serveur nodeJS / Express
 - Affichage de la liste de filme               GET/movies
 - Ajouter un film dans la .json                POST/movies
 - Modifier un film                             PUT/movies/:id
 - Supprimer un film                            DELETE/movies/:id



### Installation
Clone le projet
```code

git clone https://github.com/AlchTech/MovieVue.git

``` 

Puis
``` 
cd frontend
npm run serve
```
new terminal

``` 
cd backend
node server
```