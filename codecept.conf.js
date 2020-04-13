require('import-export');

exports.config = {
  output: './output',
  helpers: {
    // WebDriver: {
    //   url: 'https://google.com',
    //   browser: 'chrome',
    //   host: '127.0.0.1',
    //   port: 4444,
    //   // port: 9515,
    //   browser: 'chrome',
    //   // path: '/',
    //   restart: false,
    //   windowSize: '1920x1680',
    //   desiredCapabilities: {
    //     chromeOptions: {
    //       args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox"]
    //     }
    //   }
    // },
    Playwright: {
      url: 'https://www.google.com',
      show: true,
      browser: 'chromium',
      waitForNavigation: 'domcontentloaded',
      waitForAction: 1000,
      getPageTimeout: 10000,
      waitForTimeout: 10000,
      windowSize: '1366x784',
      chromium: {
        args: ['--disable-gpu',
          '--disable-extensions',
          'disable-popup-blocking',
          'disable-infobars'
        ]
      }
    }
  },
  include: {
    I: './steps_file.js',
    testPage: './pages/test.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    // wdio: {
    //   enabled: true,
    //   services: ['selenium-standalone']
    // },
    retryFailedStep: {
      enabled: true
    }
  },
  name: 'gf-service-booking-service-testing'
}