# formation-angular

1️⃣ Créer une application Angular

ng new formation-angular
cd formation-angular
ng serve

✔ Ouvre http://localhost:4200

2️⃣ Interpolation & binding

Objectif : Comprendre le lien HTML ↔ TypeScript

app.component.ts

name = 'Apprenant Angular';

app.component.html

<h1>Bonjour {{ name }}</h1>
<input [(ngModel)]="name" />

➡ Ajoute FormsModule dans app.module.ts
✔ Le texte change quand tu tapes dans l’input

3️⃣ Créer un composant

ng generate/g component/c user-card

Exercice :

Passe un username depuis AppComponent

Affiche-le dans UserCardComponent

✔ Utilise @Input()

4️⃣ Gestion des événements

user-card.component.html

<button (click)="sayHello()">Dire bonjour</button>

user-card.component.ts

sayHello() {
  alert('Bonjour depuis UserCard !');
}

🔄 Niveau 3 : Directives Angular
5️⃣ Boucle avec *ngFor

users = ['Alice', 'Bob', 'Charlie'];

<li *ngFor="let user of users">{{ user }}</li>

✔ Ajoute un champ pour créer un nouvel utilisateur dynamiquement

6️⃣ Condition avec *ngIf

Objectif : Affichage conditionnel

Exercice :

Crée un booléen isLoggedIn

Affiche un message seulement s’il est true

Ajoute un bouton pour basculer l’état

7️⃣ Créer un service

ng generate service user

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

ng generate component home
ng generate component about

Exercice :

Configure les routes

Utilise <router-outlet>

Navigue avec routerLink

🎯 Mini-projet CRUD 
🔥 Application « Gestion des utilisateurs »
