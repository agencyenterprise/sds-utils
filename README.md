# SDS Utils repo

## How to use badge

#### Pure html website example:

Insert the following stylesheet into your html page:

1. Place the following snippet inside `<head>` HTML element.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/agencyenterprise/sds-utils@latest/dist/packages/badge/src/lib/badge.css"></link>
```

2. Insert the following script tags, preferably at the bottom of your page in the sequence shown below:

```html
<script
  href="https://cdn.jsdelivr.net/gh/agencyenterprise/sds-utils@latest/dist/packages/badge/src/lib/badge.js"
></script>

<script>
  window.onload = () => {
    SDSUtilsBadge({
      expandable: true,
      location: 'bottomright',
      position: 'fixed',
    }).then(console.log('done'));
  };
</script>
```

## Options

| Prop       | Type    | Values                                                              | Description                                                                                                               |
|------------|---------|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| theme      | string  | light, dark                                                         | Indicates the color scheme used for the badge                                                                             |
| expandable | boolean | true, false                                                         | Marks the badge to expand when hovering over it                                                                           |
| position   | string  | absolute, relative, fixed                                           | Indicates the css position attribute the badge should have                                                                |
| location   | string  | topleft, topright, topcenter, bottomleft, bottomright, bottomcenter | Indicates where the badge should be placed. NOTE: Location can only be used when in conjunction with position: 'absolute' |
| target     | string  | id of element                                                       | Indicates a html element id, it will be used as the mounting point for the badge                                          |
## More examples

### Next.js:

In your `_app` file, inside the `<Head>` (`import Head from 'next/head'`) component, place the following snippet:

```jsx
<Head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/agencyenterprise/sds-utils@latest/dist/packages/badge/src/lib/badge.css"
  />
</Head>
```

After that, on your main section, after the `<Component>` tag, place the following snippet:

```jsx
<Script
  id="badge"
  src="https://cdn.jsdelivr.net/gh/agencyenterprise/sds-utils@latest/dist/packages/badge/src/lib/badge.js"
  onLoad={() => {
    window.SDSUtilsBadge({
      expandable: true,
      location: 'bottomright',
      position: 'fixed',
    });
  }}
></Script>
```

You can customize the properties to your liking, for more information read the API below.

## Running the project:

In order to test the project, install the `serve` package from https://www.npmjs.com/package/serve

After that, run the `serve` command on the root of the project, and navigate to http://localhost:3000/packages/badge/test/testBed
http://news.yconmbinator.com/
