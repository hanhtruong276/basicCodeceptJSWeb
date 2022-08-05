exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://web.qa.app',
      show: true,
      browser: 'chromium',
      windowSize: '1200x550'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/web_app/common/login.page.js', 
    leftNavPage: './pages/web_app/common/left_nav.page.js',
    devicesPage: './pages/web_app/profile/devices.page.js',
    chatsPage: './pages/web_app/chats/chats.page.js'
  },
  mocha: {},
  bootstrap: false,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/send_message.steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'test'
}
