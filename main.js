define([
  './another-module'
], function(another){
  'use strict';

  console.log('inside main');

  console.log('another-module dep:', another);
});
