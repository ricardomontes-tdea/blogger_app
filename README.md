# Blogger

An educational Blog API (Blog, Comments, Users) built with **Node.js + Express + TypeScript**, structured using a simplified **Hexagonal Architecture**. Built as a teaching project — code style favors clarity over cleverness: plain functions, no classes, no premature abstractions.

## Architecture

The app is split into three layers, each with a single responsibility:

```
application/     HTTP concerns: routes, controllers, middlewares (Express-specific)
domain/          Business logic: services and repositories (framework-agnostic)
infrastructure/  External concerns: database configuration and drivers
```

Request flow:

```
HTTP request
    │
    ▼
application/routes        (maps a URL + verb to a controller)
    │
    ▼
application/controllers   (reads req, calls a service, shapes the response)
    │
    ▼
domain/services           (business rules — currently pass-through stubs)
    │
    ▼
domain/repositories        (data access contract — currently empty stubs)
    │
    ▼
infrastructure/           (Mongoose/DB implementation — not wired up yet)
```

The point of the split: `domain/` never imports Express or Mongoose. Swapping the HTTP framework or the database later only touches `application/` or `infrastructure/`.

## Project Structure

```
src/
├── application/
│   ├── controllers/     # blog, comment, user controllers
│   ├── routes/          # one router per resource + an index that mounts them
│   └── middlewares/     # request logger, global error handler
├── domain/
│   ├── services/        # business logic (empty stubs)
│   └── repositories/     # data access contracts (empty stubs)
├── infrastructure/
│   └── db/               # Mongoose connection + models (to be added)
└── index.ts              # app entry point
```

## Code style

- Functional, not object-oriented: `export const getAll = async (...) => { ... }`, no classes.
- Each repository/service function is a stub (`async () => {}`) meant to be filled in during class.
- Reserved words are avoided as identifiers — delete operations are exported as `remove`, not `delete`.

## Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
npm install       # install dependencies
npm run dev       # start in watch mode (ts-node-dev)
npm run build     # compile TypeScript to dist/
npm start         # run the compiled app (after build)
```

The server listens on `PORT` (defaults to `3000`).

## API Endpoints

Each resource exposes the same CRUD shape:

| Method | Path                | Description       |
| ------ | ------------------- | ------------------ |
| GET    | `/api/blogs`         | List all blogs     |
| GET    | `/api/blogs/:id`     | Get one blog       |
| POST   | `/api/blogs`         | Create a blog      |
| PUT    | `/api/blogs/:id`     | Update a blog      |
| DELETE | `/api/blogs/:id`     | Delete a blog      |
| GET    | `/api/comments`      | List all comments  |
| GET    | `/api/comments/:id`  | Get one comment    |
| POST   | `/api/comments`      | Create a comment   |
| PUT    | `/api/comments/:id`  | Update a comment   |
| DELETE | `/api/comments/:id`  | Delete a comment   |
| GET    | `/api/users`         | List all users     |
| GET    | `/api/users/:id`     | Get one user       |
| POST   | `/api/users`         | Create a user      |
| PUT    | `/api/users/:id`     | Update a user      |
| DELETE | `/api/users/:id`     | Delete a user      |

All service and repository functions are currently stubs, so responses will be `undefined` until they're implemented.

## TODOs

- [ ] **Implement the ODM with Mongoose**: connection module and schemas/models under `infrastructure/db`, then fill in the `domain/repositories` functions (`findAll`, `findById`, `create`, `update`, `remove`) for Blog, Comment and User against MongoDB Atlas.
- [ ] **Implement an ORM later**: swap in a relational alternative (e.g. Prisma or TypeORM) against Postgres/MySQL, implementing the same repository functions, to compare ODM vs. ORM patterns behind the same hexagonal boundary.

## License

ISC
