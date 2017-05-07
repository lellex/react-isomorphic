# Comment mettre en place le server-side rendering ?

:warning: Article en cours de rédaction :warning:

On parle beaucoup de l'isomorphisme (ou server-side rendering) avec React ou Angular, mais comment le mettre en place concrètement ?

Avec React, ce qui risque d'être le plus impactant dans notre application sera :
* l'utilisation des routes avec [react-router](https://reacttraining.com/react-router/web/guides/server-rendering), car le serveur devra configurer ces routes également en node pour les rendre accessibles avant que le javascript ne reprenne la main. 
* [redux](http://redux.js.org/docs/recipes/ServerRendering.html), les données initiales du states devront être fournies par le serveur afin de pouvoir afficher une première fois l'application dans son état d'origine.

## À partir d'un nouveau projet

Le plus simple est évidemment de prévoir dès le départ le rendu serveur. 

Pour celà, il éxiste différents boilerplate clé-en-main qui gèrent le server-rendering. Ce n'est hélas pas encore le cas des projets généré avec le CLI create-react-app.

L'un des mieux notés sur Github est **[Next.js](https://github.com/zeit/next.js)**, il est encore récent mais semble être correctement maintenu et testé.

L'utilisation de Next.js est très simple, il suffit d'installer le package en question et d'utiliser le composant *Link* qu'il propose afin de gérer les routes. Rien de plus, next s'occupe de tout !


## À partir d'un projet existant

Nous allons voir ici comment procéder à partir d'une application existante, par exemple avec une app générée à partir de create-react-app.

Premièrement, on initialise le projet avec le CLI et on extrait les sources afin de pouvoir adapter la configuration au rendu serveur.

```bash
create-react-app react-isomorphic
cd react-isomorphic
npm run eject
```

On installe les dépendances nécéssaires au serveur

```bash
npm i -D request single-child
npm i -S express
```

## Sources

https://github.com/facebookincubator/create-react-app/pull/172