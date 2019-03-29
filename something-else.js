const someOtherModule = {};

someOtherModule.someFunc = function() {
  console.log('This function is unrelated to the someModule module...');
}

someOtherModule.exists = function() {
  return true; // This module exists, after all!
}

// This comment should NOT get into the diff

module.exports = someOtherModule;