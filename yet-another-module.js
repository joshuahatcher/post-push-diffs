const yetAnotherModule = {};

// Comment pertaining to the something project...

// This comment should get into the diff

yetAnotherModule.someFunc = function() {
  console.log('This module will have absolutely no connection to the something module');
}

module.exports = yetAnotherModule;
