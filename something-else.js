const someOtherModule = {};

someOtherModule.someFunc = function() {
  console.log('This function is unrelated to the someModule module...');
}

someOtherModule.exists = function() {
  return true; // This module exists, after all!
}

module.exports = someOtherModule;