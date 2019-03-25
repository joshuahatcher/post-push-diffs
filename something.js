import * as someService from './some-svc.js';

const someModule = {};

someModule.someFunc = function() {
  console.log('Here is some code...');
}

someModule.checkServiceFunc = function() {
  if (someService.someServiceFunc) {
    console.log('Found service function...');
  } else {
    console.log('Did not find service function...');
  }
}

module.exports = someModule;