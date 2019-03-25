const someOtherModule = {};

someOtherModule.someFunc = function() {
  console.log('This function is unrelated to the someModule module...');
}

module.exports = someOtherModule;