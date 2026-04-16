# Setup Guide

## 1) Install prerequisites

- Install NVM
- Install Node.js with NVM
- Install Angular CLI

```bash
nvm install 22
nvm use 22
npm install -g @angular/cli@19
```

## 2) Install dependencies

```bash
npm install
```

## 3) Start the app

```bash
npm run start
```

Open `http://localhost:4200`.

## 4) Backend API

Run one backend API before testing CRUD calls:

- https://github.com/Invivoo/spring-crud
- https://github.com/Invivoo/node-crud-api

Default API URL in this project: `http://localhost:8081/api/v1/employees`.

## 5) Build

```bash
npm run build
```
