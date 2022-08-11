

# sds-utils

This project was generated using [Nx](https://nx.dev).

## Running the project:

In order to test the project, install the `serve` package from https://www.npmjs.com/package/serve

After that, run the `serve` command on the root of the project, and navigate to http://localhost:3000/packages/badge/test/testBed

## How to use badge

### Pure html website example:

Insert the following stylesheet into your html page:
Insert the following stylesheet into your html page:

place the following snippet at the html head
``` html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/agencyenterprise/sds-utils@main/dist/packages/badge/src/lib/badge.css"></link>`
```

Insert the following script tags, preferably at the bottom of your page in the sequence shown below:

``` html
<script href="https://cdn.jsdelivr.net/gh/agencyenterprise/sds-utils@main/dist/packages/badge/src/lib/badge.js"></script>`
<script>
  window.onload = () => {
    SDSUtilsBadge({
       expandable: true,
      location: "bottomright",
      position: "fixed",
    }).then(console.log('done'));
  };
</script>
```

### Next.js example:

At your _app.tsx file, inside the `<Head>` component, place the following snippet:

``` jsx
<Head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/agencyenterprise/sds-utils@main/dist/packages/badge/src/lib/badge.css"
  />
</Head>
```

After that, on your main section, after the `<Component>` tag, place the following snippet:

``` jsx
<Script
  id="badge"
  src="https://cdn.jsdelivr.net/gh/agencyenterprise/sds-utils@main/dist/packages/badge/src/lib/badge.js"
  onLoad={() => {
    window.SDSUtilsBadge({
      expandable: true,
      location: "bottomright",
      position: "fixed",
    });
  }}
></Script>
```

You can customize the properties to your liking, for more information read the API below.

## API

* **theme:** string

Accepts one of the following values: `light`, `dark`

Theme indicates the color scheme used for the badge.

* **expandable:** boolean

Marks the badge to expand when hovering over it.

* **position:** string

Accepts one of the following values: `absolute`, `relative`, `fixed`

Position indicates the css position attribute the badge should have.

* **location:** string

Accepts one of the following values: `topleft`,`topright`,`topcenter`,`bottomleft`,`bottomright`,`bottomcenter`

Location indicates where the badge should be placed

**NOTE: Location can only be used when in conjunction with position: 'absolute'**

* **target:** string

Accepts any valid string.

Target indicates a html element id, it will be used as the mounting point for the badge.

For example, if you want the badge to be mounted on a div with the id of `badge`:

`<div id="badge"></div>`

The universal badge will instead of mounting the badge at the end of the html body, it will 
mount on the designated html element with the specified target id.

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@universal/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
