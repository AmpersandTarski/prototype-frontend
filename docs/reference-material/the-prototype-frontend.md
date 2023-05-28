# prototype-frontend

This document describes the necessary setup to run the **prototype-frontend** application.

## Installation prerequisites:

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. Install [NPM](https://nodejs.org/en/download/)
3. (For developers) Install [VSCode](https://code.visualstudio.com/)

## Project setup:

1. Clone the repository [prototype-frontend](https://github.com/AmpersandTarski/prototype-frontend).
2. Install **NPM packages** through the terminal: `npm install`. This requires you to be in the **prototype-frontend** folder.
3. Clone the repository [project-administration](https://github.com/Michiel-s/Project-administration).
4. Within the **project-administration** folder, change the name of the file `.env.example` to `.env`.
5. Inside the **project-administration** folder, run the docker command `docker compose up -d --build`. This installs the environment into **Docker Desktop**.
6. Install the database. [Run the application](#running-the-application) and go to the _Installer_ page. In here, you can install the database.

## VSCode Setup

The following extensions are recommended to be used for this project:

1. Angular Language Service
2. ESLint
3. Prettier

**ESLint** and **Prettier** are used for linting the project in order to keep the same coding style.

## Running the application

When everything is installed, you can run the **prototype-frontend** application using the command `npm start`. This opens an application on `localhost:4200`. Make sure the docker containers are running in **Docker Desktop**. This is required to make a connection with the database.
