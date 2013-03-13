'use strict';

var grunt = require('grunt');

exports.less_js = {

  setUp: function(done) {
    // setup here if necessary
    done();
  },

  charsets: function(test) {
    var name = 'colors';
    
    test.expect(1);
    var result   = grunt.file.read('test/result/' + name + '.css');
    var expected = grunt.file.read('test/expected/' + name + '.css');
    test.equal(result, expected, 'Detecting changes in CSS for ' + name + ' stylesheet');
    test.done();
  }
};
