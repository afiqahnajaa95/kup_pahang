exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 110000,
  specs: ['spec.js'],
  multiCapabilities: [{
    browserName: 'chrome'
  }]
}
