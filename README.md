## Prérequis
- Node & npm

## Installation
```bash
  git clone https://github.com/HarryPotter7777/test-technique.git
  cd test-technique && npm i
```

## Build
Le projet utilise parcel, il faut démarrer le serveur local
```bash
  npm run serve
```
## Note
Les données de l'api sont mis en cache, un message s'affiche quand l'api envoi une erreur.
Pour tester le message d'erreur, et si le message ne s'affiche pas, il faut supprimer le cache du navigateur et actualiser la page:
- chrome: devtools -> application -> Local Storage -> http://localhost:1234 -> clic droit -> supprimer
- firefox: devtools -> stockage -> stockage local ->  http://localhost:1234 -> clic droit -> tout supprimer

## Stack technique
- React, react-router, redux et react-thunk.
- Material UI
- Parcel
- NPM
