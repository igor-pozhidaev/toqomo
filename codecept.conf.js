exports.config = {
  tests: 'tests/*_test.js',
  output: 'output',
  helpers: {
    WebDriver: {
      host: 'localhost',
      port: 4444,
      url: 'https://dev-shop.jowi.club',
      browser: 'chrome',
      restart: true,
      timeouts: {
        script: 60000,
      },
      windowSize: '1400x900',
    }
  },
  include: {
    I: './steps_file.js',
  },
  bootstrap: null,
  mocha: {
    "reporterOptions": {
      "reportDir": "output"
    }
  },
  name: 'toqomo'
}
