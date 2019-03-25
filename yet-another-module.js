const yetAnotherModule = {};

yetAnotherModule.someFunc = function() {
  console.log('This module will have absolutely no connection to the something module');
}

module.exports = yetAnotherModule;
