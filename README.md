# Comment mettre en place le server-side rendering avec React ?

:warning: Article en cours de rédaction :warning:

On parle beaucoup de l'isomorphisme (ou server-side rendering) avec React ou Angular, mais comment le mettre en place concrètement ?

* Premier pré-requis : un serveur avec Node.js, nous utiliserons ici Heroku.

Avec React, ce qui risque d'être le plus impactant dans notre application sera :
* la génération du bundle : la configuration webpack devrait être adapté, le chargement des assets et des styles également.
* l'utilisation des routes avec [react-router](https://reacttraining.com/react-router/web/guides/server-rendering), car le serveur devra configurer ces routes également en node pour les rendre accessibles avant que le javascript ne reprenne la main. 
* [redux](http://redux.js.org/docs/recipes/ServerRendering.html), les données initiales du states devront être fournies par le serveur afin de pouvoir afficher une première fois l'application dans son état d'origine.

## À partir d'un nouveau projet

Le plus simple est évidemment de prévoir le fait d'avoir un rendu serveur au démarrage du projet.

Pour celà, il éxiste différents boilerplates clé-en-main qui gèrent le server-rendering. Ce n'est hélas pas encore le cas des projets générés avec le CLI create-react-app. Néanmoins, [une liste de projets alternatifs](https://github.com/facebookincubator/create-react-app#alternatives) est disponible sur leur repo.

Paris cette liste, **[Next.js](https://github.com/zeit/next.js)** semble très intéréssant si l'on souhaite débuter un projet NodeJS/React.

L'utilisation de Next.js est très simple, il suffit d'installer le package en question et d'utiliser le composant *Link* qu'il propose afin de gérer les routes. Rien de plus, next s'occupe de tout ! Next dispose de tuto très simple ainsi que son propre service de déployement : [Now](https://zeit.co/now).

[Démo ici](https://react-isomorphic-01.herokuapp.com/)


## À partir d'un projet existant

### Avec Next (le plus simple)

Il est aussi possible d'utiliser Next sur un projet existant. Prenons ici l'exemple d'un projet généré via create-react-app. Ce qui va changer :
* Plus besoin de webpack ou react-scripts, next pends la main sur la génération du bundle.
* Par conséquent, toute configuration "custom" de webpack devra être adaptée, il faudra repenser l'utilisation des loaders.
* Next embarque [style-jsx](https://github.com/zeit/styled-jsx) d'écrire le css dans les composants jsx. Vos css devront donc être soit directement dans le jsx, soit complétement indépendant de React et appelés via une feuille de style de manière classique avec un [custom document](https://github.com/zeit/next.js#custom-document).

[Démo ici](https://react-isomorphic-02.herokuapp.com/)

### Pas à pas avec express (plus compliqué)

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