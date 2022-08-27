import { defineConfig } from 'cypress'
// declare function require(name:string);

const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;

const devConfig: Partial<Cypress.PluginConfigOptions> = {
  baseUrl: 'http://localhost:3000',
  env: {
    intercept: true,
  },
  specPattern: '**/*Unit.{feature,features}',
  excludeSpecPattern: ['*.ts', '**/*Flow.{feature,features}', '**/*Api.{feature,features}']
}

const getFlowTestsConfig = (hostUrl = 'http://localhost:3000'): Partial<Cypress.PluginConfigOptions> => ({
  baseUrl: `${hostUrl}`,
  env: {
    intercept: false,
    TAGS: 'not @ignore'
  },
  specPattern: '**/*Flow.{feature,features}',
  excludeSpecPattern: ['*.ts', '**/*feature.{feature,features}', '**/*Api.{feature,features}']
})

const getApiTestsConfig = (hostUrl = 'http://localhost:3000'): Partial<Cypress.PluginConfigOptions> => ({
  baseUrl: `${hostUrl}`,
  env: {
    intercept: false,
    TAGS: 'not @ignore'
  },
  specPattern: '**/*Api.{feature,features}',
  excludeSpecPattern: ['*.ts', '**/*Flow.{feature,features}', '**/*Unit.{feature,features}']
})

export const setupNodeEvents = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      const options = {
        ...browserify.defaultOptions,
        typescript: require('resolve').sync('typescript', { baseDir: config.projectRoot }),
      };

      on('file:preprocessor', cucumber(options));
      return (config.env.testType === 'flow'
        ? getFlowTestsConfig()
        : getApiTestsConfig()) as Cypress.PluginConfigOptions;
    },
  },
}).e2e?.setupNodeEvents;

const config = defineConfig({
  video: false,
  e2e:{
    setupNodeEvents,
  },
  viewportHeight: 1080,
  viewportWidth: 1900
})

export default config;
