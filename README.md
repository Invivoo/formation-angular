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

```

2️⃣ Services api and crud components

1 add module users on app/ directory
```
ng g module users --routing
```
2 add model folder : 
```
add user.model.ts
```
3 add a new component : 
```
ng g component crud
```
4 add services folder : 
```
ng g service users
```
```
└── src
      ├── app
      │   ├── users 
          │   ├── model 
              │   ├── user.model.ts
          │   ├── services 
              │   ├── users.service.ts    
          │   ├── crud 
              │   ├── crud.component.css   
              │   ├── crud.component.html  
              │   ├── crud.component.ts  
          │   ├── users.module.ts
          │   ├── users-routing.module.ts
      │   ├── app.component.html
      │   ├── app.component.spec.ts
      │   ├── app.component.ts
      │   ├── app.module.ts
      │   ├── app.routing.module.ts
```

3️⃣ users.serice.ts
```ts
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../model/user.model';

const baseUrl = 'http://localhost:8081/api/v1/employees';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByEmail(email: any): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${baseUrl}?email=${email}`);
  }
}

```
- crud.component.ts
```ts
  export class CrudComponent implements OnInit {

  userList: UserModel[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(rep => {
      this.userList  = rep
    });
  }
.
.
.
```
- add a user-card component
  add : ```@Input() user: UserModel;```

- user-card component html :
```html
- <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header">USER</div>
  <div class="card-body">
    <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
    <p class="card-text">
      {{ user.email }}
    </p>
  </div>
</div>
```
- crud.component.html 
```html
<div *ngFor="let user of userList">
  <app-user-card [user]="user"></app-user-card>
</div>
```
- app.compoent.html
  add :
  ```html
  <app-crud></app-crud>
  <router-outlet></router-outlet>
  ```

