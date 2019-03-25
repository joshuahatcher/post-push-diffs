import * as someService from './some-svc.js';
import * as someOtherModule from './something-else.js';

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

// Here's a comment...
someModule.isSomeOtherModule = function() {
  if (someOtherModule.exists()) {
    return true;
  }

  return false;
}

module.exports = someModule;