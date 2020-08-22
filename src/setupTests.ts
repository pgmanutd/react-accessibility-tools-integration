// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

import { configureAxe } from 'jest-axe';

// As we're testing on the JSDOM, color-contrast testing can't run.
// The types of results fetched are limited for performance reasons
configureAxe({
  rules: {
    'color-contrast': { enabled: false },
  },
  resultTypes: ['violations', 'incomplete'],
});
