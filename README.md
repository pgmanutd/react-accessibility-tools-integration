# ♿ react-accessibility-tools-integration ![CI](https://github.com/pgmanutd/react-accessibility-tools-integration/workflows/CI/badge.svg)

> Integration of available react accessibility tools

## Development

- Make sure [yarn](https://yarnpkg.com) is installed.

- Checkout [the repository](https://github.com/pgmanutd/react-accessibility-tools-integration).

- Open your favorite Terminal and run these commands:

```bash
cd react-accessibility-tools-integration

yarn

yarn run check
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn lint`

For running eslint on source code.

### `yarn format`

For running prettier on source code.

### `yarn typecheck`

For running typescript typecheck.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:lh-ci`

For running [lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci).

### `yarn run check`

For running lint, typecheck and all the test commands.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn serve`

Run local server on port `8080`. Please ensure you ran `yarn build` first before running this command.
