# Ampersand Prototyping Frontend

Frontend framework for prototyping Ampersand applications; implemented in Angular

## Generate application specific components using the Ampersand compiler

Significant amount of code is generated using the [Ampersand compiler](https://github.com/AmpersandTarski/Ampersand) based upon the ADL model files. The generated frontend module is contained in the `/src/app/generated` folder.

To update the generated application, when ADL model files have changed or when changes are made to [template](./src/app/generated/.templates), you can run the following command:

> `./ampersand proto --no-backend --frontend-version Angular --proto-dir ./src/app/generated --crud-defaults cRud <path-to-application-entry-script>.adl`

E.g. to generate an application for the ProjectAdministration project (which is available as test asset), run:

> `./ampersand proto --no-backend --frontend-version Angular <path-to-application-entry-script>.adl --proto-dir ./src/app/generated --crud-defaults cRud .\test\assets\project-administration\model\ProjectAdministration.adl`

The required Ampersand compiler with support for generating new frontend module is still work in progress. You can download a compiler version from [Github here](https://github.com/AmpersandTarski/Ampersand/releases). Use a version >= v4.7.6.

## How to install and start up the local instance?

A step by step guide on how to install and run this project can be found in `docs/README.md`

## Using the dev container

Inside the dev container, use the dev-container configuration to serve the application: `ng serve -c dev-container`.

This is needed because the dev-container needs a different proxy configuration; forwarding `/api` to `http://host.docker.internal:80` instead of `http://localhost:80`.

To have a backend running at port 80 for the frontend to connect to, deploy an [Ampersand prototype application](https://github.com/AmpersandTarski/prototype). E.g. the [Project Administration application](https://github.com/Michiel-s/Project-administration).

## Testing

The [Robot Framework Install & Run Guide](/docs/robot_framework_README.md) contains instructions for installing and running Robot Framework.
