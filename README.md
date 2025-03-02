# main-website

This monorepo contains multiple projects:

## Client App 1

Client App 1 is a React application.

### Scripts

- `start`: Starts the development server using Vite.
- `build`: Builds the application for production.

### Configuration

- Entry point: `packages/client-app-1/src/index.tsx`
- Configuration: `packages/client-app-1/vite.config.ts`

## Client App 2

Client App 2 is a React application.

### Scripts

- `start`: Starts the application using ts-node.
- `build`: Builds the application using TypeScript.

### Configuration

- Entry point: `packages/client-app-2/src/index.ts`
- Configuration: `packages/client-app-2/tsconfig.json`

## Server App

Server App is an Express server.

Before starting the server make builds (i.e. generate static files) of the client apps.

### Scripts

- `start`: Starts the server using nodemon.
- `build`: Builds the server using TypeScript.

### Configuration

- Entry point: `packages/server-app/src/index.ts`
- Configuration: `packages/server-app/tsconfig.json`

## Instructions

### Starting the Server

To start the server, run the following command from the root of the monorepo:

```sh
yarn workspace server-app start