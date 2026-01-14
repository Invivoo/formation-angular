## Angular Training

NVM Install For Windows 
https://github.com/coreybutler/nvm-windows/releases/download/1.2.2/nvm-setup.zip
```
Installation Steps :
    1-Download and run the nvm-setup.exe installer
    2-Select the NVM installation path (e.g., C:\nvm)
    3-Select the Node.js installation path (e.g., C:\nodejs)
    4-Confirm the installation
```
NVM Install For Linux/MacOS 
Using the Installation Script

Open a terminal and execute one of the following commands:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```
Or:
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```
Version compatibility : https://angular.dev/reference/versions
```
1 - working with angular 13/14 :
    nvm use 14.15
    npm i @angular/cli@13
2 - working with angular 21
    nouveatés depuis la version 15 - 21
    * Les Standalone Components 
    * Les Signals
    * Les Signal Forms (expérimental)
    * Nouvelle syntaxe de contrôle de flux (@if, @for, @switch
    nvm use 22 ou 24
    npm i @angular/cli@21
```
1️⃣ Créer une application Angular
```
ng new formation-angular
cd formation-angular
ng serve
```
use backend api : 
```
https://github.com/Invivoo/spring-crud
```
test :
```sh
 http://localhost:4200
```
Project structure version 13/14
```
  .
  ├── nodes_modules
  └── src
      ├── app
      │   ├── app.component.css
      │   ├── app.component.html
      │   ├── app.component.spec.ts
      │   ├── app.component.ts
      │   ├── app.module.ts
      │   ├── app.routing.module.ts
      |
      └── index.html
      └── main.ts
      └── styles.css
      └── test.ts
 ├── angular.json
 ├── package.json
 ├── package-lock.json
 ├── README.md
 ├── tsconfig.app.json
 ├── tsconfig.app
 ├── tsconfig.spec.json

```

Project structure version 21
```
  .
  ├── nodes_modules
  └── src
      ├── app
      │   ├── app.config.ts
      │   ├── app.css
      │   ├── app.html
      │   ├── app.routes.ts
      │   ├── app.spec.ts
      │   └── app.ts
      └── index.html
      └── main.ts
      └── styles.css
 ├── angular.json
 ├── package.json
 ├── package-lock.json
 ├── README.md
 ├── tsconfig.app.json
 ├── tsconfig.app
 ├── tsconfig.spec.json


2️⃣ Interpolation & binding

1 exercice app component
```ts
title = 'Formation Angular';
```
app.component.html

```html

 <p>Bonjour {{ name }}</p>
 <input [(ngModel)]="name" />
```
➡ Ajoute FormsModule dans app.module.ts

✔ Le texte change quand tu tapes dans l’input

3️⃣ Créer un module / composant
```
ng generate/g module users
ng g c user-card
```
Exercice : Passe un username depuis AppComponent

Affiche-le dans UserCardComponent

✔ Utilise @Input()

4️⃣ Gestion des événements

user-card.component.html
```html
<button (click)="sayHello()">Dire bonjour</button>
```
user-card.component.ts
```js
sayHello() {
  alert('Bonjour depuis UserCard !');
}
```

🔄 Niveau 3 : Directives Angular
5️⃣ Boucle avec *ngFor

ts
```
users = ['Alice', 'Bob', 'Charlie'];
```
html
```html
<li *ngFor="let user of users">{{ user }}</li>
```

✔ Ajoute un champ pour créer un nouvel utilisateur dynamiquement

6️⃣ Condition avec *ngIf

Objectif : Affichage conditionnel

Exercice :

Crée un booléen isLoggedIn

Affiche un message seulement s’il est true

Ajoute un bouton pour basculer l’état

7️⃣ Créer un service

```sh
ng generate service user
```
Exercice :

Stocke la liste des utilisateurs dans le service

Injecte le service dans un composant

Récupère les données depuis le service

8️⃣ Introduction aux Observables

Objectif : Comprendre le mode réactif

Exercice :

Retourne les utilisateurs sous forme de Observable

Utilise subscribe()

⭐ Bonus : utilise le async pipe dans le template

9️⃣ Navigation

Objectif : Créer plusieurs pages

```sh
ng generate component home
ng generate component about
```
### EXERCICE

 Configure les routes `<router-outlet>` , navigue avec `routerLink`
 
🎯 Mini-projet CRUD « Gestion des utilisateurs »
