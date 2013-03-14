'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.less_js = {

  setUp: function(done) {
    // setup here if necessary
    done();
  },

  charsets: function(test) {
    var name = 'charsets';
    
    test.expect(1);
    var result   = grunt.file.read('test/result/' + name + '.css');
    var expected = grunt.file.read('test/expected/' + name + '.css');
    test.equal(result, expected, 'No changes detected in CSS for' + name);
    test.done();
  }
};
