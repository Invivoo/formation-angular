# Formation Angular

![Angular](https://img.shields.io/badge/Angular-21-dd0031?logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)
![Status](https://img.shields.io/badge/status-ready_for_training-success)

A practical Angular training starter focused on user CRUD concepts and modular project organization.

## Quick Start

```bash
npm install
npm start
```

Then open: [http://localhost:4200](http://localhost:4200)

## Table of Contents

- [Overview](#overview)
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Development Steps](#development-steps)
- [Related Resources](#related-resources)
- [Contributing](#contributing)

## Overview

This repository provides a clean Angular foundation with:

- App bootstrap and root shell
- `users` feature module with routing
- User model and API service
- CRUD list + reusable user card component
- Bootstrap global styling

## Setup

Detailed instructions: [SETUP.md](./SETUP.md)

Quick compatibility notes:

- Angular: 21+
- Node.js: 20+
- npm: 10+

## Project Structure

```text
.
├── angular.json
├── package.json
├── tsconfig.json
├── src
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   └── app
│       ├── app.component.ts
│       ├── app.component.html
│       ├── app.component.css
│       └── users
│           ├── users.module.ts
│           ├── users-routing.module.ts
│           ├── model
│           │   └── user.model.ts
│           ├── services
│           │   └── users.service.ts
│           ├── crud
│           │   ├── crud.component.ts
│           │   ├── crud.component.html
│           │   └── crud.component.css
│           └── user-card
│               ├── user-card.component.ts
│               ├── user-card.component.html
│               └── user-card.component.css
├── CONTRIBUTING.md
└── SETUP.md
```

## Development Steps

1. Install dependencies.
2. Start the Angular dev server.
3. Ensure backend API is running: [Invivoo/spring-crud](https://github.com/Invivoo/spring-crud)
4. Open `http://localhost:4200` and navigate to **Users List**.

## Related Resources

- [Angular Documentation](https://angular.dev)
- [Angular Version Compatibility](https://angular.dev/reference/versions)
- [Bootstrap Documentation](https://getbootstrap.com/docs)
- [RxJS Documentation](https://rxjs.dev)

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening issues or pull requests.
