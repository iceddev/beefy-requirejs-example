({
  baseUrl: './',
  name: 'node_modules/requirejs/require',
  include: ['main'],
  insertRequire: ['main'],
  optimize: 'uglify2',
  generateSourceMaps: true,
  preserveLicenseComments: false,
  logLevel: 3,
  out: function(text, sourceMapText){
    process.stdout.write(text);
    process.stdout.write('\n');
    process.stdout.write('//# sourceMappingURL=data:application/json;base64,');
    process.stdout.write(new Buffer(sourceMapText).toString('base64'));
  }
})
