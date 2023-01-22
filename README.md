# Ampersand Prototyping Frontend

Frontend framework for prototyping Ampersand applications; implemented in Angular

## Generate application specific components using the Ampersand compiler

Significant amount of code is generated using the [Ampersand compiler](https://github.com/AmpersandTarski/Ampersand) based upon the ADL model files. The generated frontend module is contained in the `/src/app/generated` folder.

To update the generated application, when ADL model files have changed or when changes are made to [template](./src/app/generated/.templates), you can run the following command:

> `./ampersand proto --no-backend --frontend-version Angular <path-to-application-entry-script>.adl --proto-dir ./src/app/generated`

The required Ampersand compiler with support for generating new frontend module is still work in progress. You can build a compiler yourself using this [feature branch](https://github.com/AmpersandTarski/Ampersand/tree/feature/angularGenerator) or request a distribution at the Ampersand team.

## How to install and start up the local instance?

1. First, install the project files from this github repo to your computer.
2. Open a command prompt (for windows users cmd is alright) and navigate to the root folder of the project where you just installed it to.
3. Use `npm install` to install all the dependencies of the project, this can take a short amount of time.
4. To run the project, type `npm start`. This command will execute the `npm serve` command to start up the local instance of the project.

When you already have installed the project and it's dependencies on your computer and want to start it up again, repeat stap 2 and 4 to run the local instance of the project.
