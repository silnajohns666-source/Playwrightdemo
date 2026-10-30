# SauceDemo Playwright Tests

End-to-end tests for [SauceDemo](https://www.saucedemo.com) using Playwright,
JavaScript, and the Page Object Model.

## Setup

```sh
npm ci
npx playwright install
```

## Run tests

```sh
npm test
npm run test:chromium
npm run test:headed
npm run test:ui
npm run report
```

The default test command runs the Chromium, Firefox, and WebKit projects.
Install the matching Playwright browsers before running tests.

## Project structure

- `pages/` contains page objects with locators and user actions.
- `tests/` contains specs, setup, and assertions.
- `playwright.config.js` configures the test directory, site URL, and browsers.

The login specs use SauceDemo's `standard_user` and `locked_out_user` demo
accounts with the `secret_sauce` password.
