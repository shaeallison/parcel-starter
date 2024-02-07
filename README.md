# Parcel Start App

## Getting Started

### Environment

### Running App

- Install Node dependencies:<br>

```
npm i
```

- Run local:<br>

```
npm run start
```

## Parcel

- This project uses Parcel as it's builder. Please see React Recipe and Typescript docs for more information.
- https://parceljs.org/recipes/react/
- https://parceljs.org/languages/typescript/

### Tips / Warnings

- Fast Refresh only works with functional components & hooks (please avoid class components). See other tips <a href="https://parceljs.org/recipes/react/#tips">here</a>.

### ESLint Validator

The @parcel/validator-eslint does not support <a href="https://github.com/parcel-bundler/parcel/issues/8063">eslint 8</a> at this time and this causes subsequent versioning issues on other popular linting plugins (<a href="https://github.com/standard/eslint-config-standard-with-typescript/tree/master#readme">config standard w/ typescript</a> and <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme">jsx-a11y</a> for example). For that reason we are using babel parser for linting.

### Linter Plugins

- https://github.com/jsx-eslint/eslint-plugin-react/tree/master#readme
- https://github.com/prettier/eslint-plugin-prettier/tree/master#readme
- https://www.npmjs.com/package/eslint-plugin-react-hooks
- https://github.com/standard/eslint-config-standard-with-typescript/tree/master#readme
- https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme

## Husky

This app uses a husky pre-commit hook to format and lint code. If needed, escape this step, use `--no-verify` flag on git commit.
<a href="https://typicode.github.io/husky/get-started.html">https://typicode.github.io/husky/get-started.html</a>

### Deployment Process

TBD

## Troubleshooting

### Engines

When specifying engines in the `package.json`, be sure to also include `browserlists` or `targets` or you can run into a parcel build issue like "External modules are not supported when building for browser".
<a href="https://docs.npmjs.com/cli/v10/configuring-npm/package-json#engines">https://docs.npmjs.com/cli/v10/configuring-npm/package-json#engines</a>
