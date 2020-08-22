const puppeteer = require('puppeteer');

module.exports = {
  ci: {
    collect: {
      chromePath: puppeteer.executablePath(),
      settings: {
        chromeFlags: [
          '--headless',
          'CI' in process.env && '--no-sandbox',
        ].filter(Boolean),
      },
      numberOfRuns: 1,
      startServerCommand: 'yarn serve',
      startServerReadyPattern: 'Hit CTRL-C to stop the server',
      startServerReadyTimeout: 10000,
      url: ['http://localhost:8080'],
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 0.94 }],
      },
    },
  },
};
