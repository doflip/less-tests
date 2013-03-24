/*
 * less-tests
 * http://github.com/upstage/less-tests
 *
 * Copyright (c) 2013 Upstage
 * MIT License
 */

module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({

    // Project paths and files.
    bootstrap: grunt.file.readJSON('test/bootstrap.json'),
    tests:     grunt.file.readJSON('test/tests.json'),
    pkg:       grunt.file.readJSON('package.json'),


    // Run tests using 'less' task
    less: {
      // Global task options. Options can also be set for each target.
      options: {
        paths: ['<%= bootstrap.base %>'],
        require: '<%= bootstrap.less.globals %>',
        concat: false,
        compress: false,    
        optimization: 2,
        yuicompress: false,  
        dumpLineNumbers: false,
        processImports: false,
        strictImports: true,
        strictMaths: true,  
        strictUnits: true  
      },

      // Compile bootstrap.less
      less_1_4_0: {
        version: './test/versions/1.4.0-b1',
        src:  ['<%= bootstrap.lib %>'],
        dest: 'test/result/bootstrap-less_140'
      },

      // Compile bootstrap.less
      less_1_3_3: {
        version: './test/versions/1.3.3',
        src:  ['<%= bootstrap.lib %>'],
        dest: 'test/result/bootstrap-less_133'
      },

      // Compile bootstrap.less
      less_1_3_2: {
        version: './test/versions/1_3_2',
        src:  ['<%= bootstrap.lib %>'],
        dest: 'test/result/bootstrap-less_132'
      },

      // Compile bootstrap.less
      less_1_2_0: {
        version: './test/versions/1_2_0',
        src:  ['<%= bootstrap.lib %>'],
        dest: 'test/result/bootstrap-less_120'
      },


      // Test LESS versions with Bootstrap "bundles"
      bundles_1_4_0: {
        version: './test/versions/1.4.0-b1',
        files: {
          'test/result/1.4.0/bundle/bootstrap.css': ['<%= bootstrap.lib %>'],
          'test/result/1.4.0/bundle/core.css':      ['<%= bootstrap.less.core %>'],
          'test/result/1.4.0/bundle/common.css':    ['<%= bootstrap.less.common %>'],
          'test/result/1.4.0/bundle/nav.css':       ['<%= bootstrap.less.nav %>'],
          'test/result/1.4.0/bundle/zindex.css':    ['<%= bootstrap.less.zindex %>'],
          'test/result/1.4.0/bundle/misc.css':      ['<%= bootstrap.less.misc %>'],
          'test/result/1.4.0/bundle/util.css':      ['<%= bootstrap.less.util %>']
        }
      },
      bundles_1_3_3: {
        version: './test/versions/1.3.3',
        files: {
          'test/result/1.3.3/bundle/bootstrap.css': ['<%= bootstrap.lib %>'],
          'test/result/1.3.3/bundle/core.css':      ['<%= bootstrap.less.core %>'],
          'test/result/1.3.3/bundle/common.css':    ['<%= bootstrap.less.common %>'],
          'test/result/1.3.3/bundle/nav.css':       ['<%= bootstrap.less.nav %>'],
          'test/result/1.3.3/bundle/zindex.css':    ['<%= bootstrap.less.zindex %>'],
          'test/result/1.3.3/bundle/misc.css':      ['<%= bootstrap.less.misc %>'],
          'test/result/1.3.3/bundle/util.css':      ['<%= bootstrap.less.util %>']
        }
      },

      example: {
        src:  'test/example.less',
        dest: 'test'
      },

      // Compile all 
      all: {
        src:  '<%= tests.all %>',
        dest: 'test/result'
      },

      glob: {
        src:  '<%= tests.fixtures %>/*.less',
        dest: 'test/result'
      },

      compression: {
        src:  '<%= tests.compression %>',
        dest: 'test/result/compression'
      },

      debug: {
        options: {
          paths: ['<%= tests.debug.import %>']
        },
        src:  '<%= tests.debug.linenumbers %>',
        dest: 'test/result/debug'
      },

      imports: {
        files: {
          'test/result/import': [
            '<%= tests.fixtures %>/import/*.less'
          ]
        }
      },

      legacy: {
        files: {
          'test/result/legacy': [
            '<%= tests.fixtures %>/legacy/*.less'
          ]
        }
      },

      maths: {
        src:  'test/fixtures/strict-maths.less',
        dest: 'test/result'
      },

      static_urls: {
        files: {
          'test/result/static_urls': [
            '<%= tests.fixtures %>/static-urls/*.less'
          ]
        }
      },

      tests: {
        files: {
          'test/result': [
            '<%= tests.test.charsets %>',
            '<%= tests.test.colors %>',
            '<%= tests.test.comments %>',
            '<%= tests.test.css_3 %>', 
            '<%= tests.test.css_escapes %>', 
            '<%= tests.test.css %>', 
            '<%= tests.test.extend %>',
            '<%= tests.test.extend_chaining %>', 
            '<%= tests.test.extend_clearfix %>', 
            '<%= tests.test.extend_exact %>',
            '<%= tests.test.extend_media %>',
            '<%= tests.test.extend_nest %>', 
            '<%= tests.test.extend_selector %>', 
            '<%= tests.test.functions %>', 
            '<%= tests.test.ie_filters %>',
            '<%= tests.test.import %>',
            '<%= tests.test.import_once %>', 
            '<%= tests.test.import_interpolation %>',
            '<%= tests.test.javascript %>',
            '<%= tests.test.lazy_eval %>', 
            '<%= tests.test.media %>', 
            '<%= tests.test.mixins %>',
            '<%= tests.test.mixins_args %>', 
            '<%= tests.test.mixins_closure %>',
            '<%= tests.test.mixins_guards %>', 
            '<%= tests.test.mixins_important %>',
            '<%= tests.test.mixins_named_args %>',
            '<%= tests.test.mixins_nested %>', 
            '<%= tests.test.mixins_pattern %>',
            '<%= tests.test.operations %>',
            '<%= tests.test.parens %>',
            '<%= tests.test.rulesets %>',
            '<%= tests.test.scope %>', 
            '<%= tests.test.selectors %>', 
            '<%= tests.test.strings %>', 
            '<%= tests.test.urls %>',
            '<%= tests.test.variables %>', 
            '<%= tests.test.whitespace %>'
          ]
        }
      },

      // This target is supposed to throw errors, it will NOT compile. 
      errors: {
        options: {
          paths: ['<%= tests.errors.imports %>']
        },
        src:  '<%= tests.errors.fixtures %>/add-mixed-units.less',
        dest: 'test/result/errors'
      }
    },

    // Run simple unit tests to detect changes in CSS files.
    nodeunit: {
      tests: ['test/fixtures/*_test.js'],
      less:  ['less/test/*.js']
    },

    jshint: {
      tests: ['test/test.js'],
      gruntfile: ['Gruntfile.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      }
    },

    clean: {
      // Clear out example files before creating new ones.
      tests: { src: 'test/actual' }
    },

    watch: {
      project: {
        files: ['test/**/*.{less,json,js}'],
        tasks: ['test']
      }
    }

  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks to be run.
  grunt.registerTask('default', [
    'clean:tests',

    // Build LESS components
    'less:example',
    'less:all',
    'less:glob',
    'less:compression',
    'less:debug',
    'less:imports',
    'less:legacy',
    'less:static_urls'
  ]);

  // Test versions of LESS. Experimental and 
  // NOT working yet. Hang tight.
  grunt.registerTask('versions', [
    'clean:tests',
    // Test versions
    'less:less_1_3_2',
    'less:less_1_3_3',
    'less:less_1_2_0',
    'less:less_1_4_0'
  ]);

  // Tests to be run.
  grunt.registerTask('test', [
    'default',
    'jshint',
    'nodeunit:tests'
  ]);
};