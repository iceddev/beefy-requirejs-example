define([
  './another-module'
], function(another){

  console.log('inside main.js');

  console.log('another-module dependency:', another);

});
