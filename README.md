# Formation Angular

![Angular 14+](https://img.shields.io/badge/Angular-14%2B-dd0031?logo=angular&logoColor=white)
![Angular 21 Ready](https://img.shields.io/badge/Angular-21%20ready-0f172a?logo=angular)
![Status](https://img.shields.io/badge/status-active-success)

Training repository to practice Angular fundamentals (module-based style for Angular 13/14) and modern Angular concepts (up to Angular 21).

## Quick Start

```bash
git clone https://github.com/Invivoo/formation-angular.git
cd formation-angular
npm install
npm run start
```

Open `http://localhost:4200`.

> Backend API examples:
> - https://github.com/Invivoo/spring-crud
> - https://github.com/Invivoo/node-crud-api

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Development Steps](#development-steps)
- [Conventions and Best Practices](#conventions-and-best-practices)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Resources](#resources)

## Prerequisites

- Node.js managed with NVM
- npm
- Angular CLI

### NVM installation

- Windows: https://github.com/coreybutler/nvm-windows/releases
- Linux/macOS:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

or

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

### Angular version compatibility

Reference: https://angular.dev/reference/versions

```bash
# Angular 13/14 style training
nvm use 14.15
npm install -g @angular/cli@14

# Angular 21 experimentation
nvm use 22
npm install -g @angular/cli@21
```

## Setup

```bash
npm install
npm run start
```

## Project Structure

```text
.
├── README.md
├── SETUP.md
├── CONTRIBUTING.md
├── angular.json
├── package.json
├── tsconfig.json
└── src
    ├── index.html
    ├── main.ts
    ├── styles.css
    └── app
        ├── app.component.ts
        ├── app.component.html
        ├── app.component.css
        ├── app.module.ts
        ├── app-routing.module.ts
        └── users
            ├── users.module.ts
            ├── users-routing.module.ts
            ├── model/user.model.ts
            ├── services/users.service.ts
            ├── crud
            │   ├── crud.component.ts
            │   ├── crud.component.html
            │   └── crud.component.css
            └── user-card
                ├── user-card.component.ts
                ├── user-card.component.html
                └── user-card.component.css
```

## Development Steps

1. Create an Angular app scaffold.
2. Add a `users` feature module with routing.
3. Add a typed `UserModel`.
4. Add `UsersService` for API CRUD operations.
5. Add `CrudComponent` and `UserCardComponent`.
6. Add Bootstrap global styles.
7. Connect navbar routing (`/users/all`, `/users/create`).

## Conventions and Best Practices

- Use strict TypeScript typing (`Partial<T>`, explicit interfaces).
- Keep feature code grouped by module (`users/*`).
- Keep services thin and reusable.
- Use presentational components (`user-card`) for rendering.
- Avoid business logic in templates.
- Keep routes explicit and predictable.

## Troubleshooting

- **`ng: command not found`**: install Angular CLI globally (`npm i -g @angular/cli`).
- **Port 4200 already used**:
  ```bash
  npm run start -- --port 4300
  ```
- **Backend connection refused**: ensure API is running on `http://localhost:8081` or update service base URL.
- **Node version mismatch**: run `nvm use` with the expected version.

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a PR.

## Resources

- Angular docs: https://angular.dev
- RxJS docs: https://rxjs.dev
- Bootstrap docs: https://getbootstrap.com/docs
- Setup guide: [SETUP.md](./SETUP.md)
