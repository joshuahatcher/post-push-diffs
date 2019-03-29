const someOtherModule = {};

someOtherModule.someFunc = function() {
  console.log('This function is unrelated to the someModule module...');
}

// This comment should get into the diff

someOtherModule.exists = function() {
  return true; // This module exists, after all!
}

// This comment should NOT get into the diff

module.exports = someOtherModule;