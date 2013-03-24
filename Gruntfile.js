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
    less:      grunt.file.readJSON('test/less.json'),
    pkg:       grunt.file.readJSON('package.json'),

    // Run tests using 'styles' task
    styles: {
      // Global task options. Options can also be set for each target.
      options: {
        // version: 'less',
        require: '',
        concat: false,
        compress: false,    
        optimization: 1,
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
        src:  '<%= less.all %>',
        dest: 'test/result'
      },

      glob: {
        src:  '<%= less.fixtures %>/*.less',
        dest: 'test/result'
      },

      compression: {
        src:  '<%= less.compression %>',
        dest: 'test/result/compression'
      },

      debug: {
        options: {
          paths: ['<%= less.debug.import %>']
        },
        src:  '<%= less.debug.linenumbers %>',
        dest: 'test/result/debug'
      },

      imports: {
        files: {
          'test/result/import': [
            '<%= less.fixtures %>/import/*.less'
          ]
        }
      },

      legacy: {
        files: {
          'test/result/legacy': [
            '<%= less.fixtures %>/legacy/*.less'
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
            '<%= less.fixtures %>/static-urls/*.less'
          ]
        }
      },

      tests: {
        files: {
          'test/result': [
            '<%= less.test.charsets %>',
            '<%= less.test.colors %>',
            '<%= less.test.comments %>',
            '<%= less.test.css_3 %>', 
            '<%= less.test.css_escapes %>', 
            '<%= less.test.css %>', 
            '<%= less.test.extend %>',
            '<%= less.test.extend_chaining %>', 
            '<%= less.test.extend_clearfix %>', 
            '<%= less.test.extend_exact %>',
            '<%= less.test.extend_media %>',
            '<%= less.test.extend_nest %>', 
            '<%= less.test.extend_selector %>', 
            '<%= less.test.functions %>', 
            '<%= less.test.ie_filters %>',
            '<%= less.test.import %>',
            '<%= less.test.import_once %>', 
            '<%= less.test.import_interpolation %>',
            '<%= less.test.javascript %>',
            '<%= less.test.lazy_eval %>', 
            '<%= less.test.media %>', 
            '<%= less.test.mixins %>',
            '<%= less.test.mixins_args %>', 
            '<%= less.test.mixins_closure %>',
            '<%= less.test.mixins_guards %>', 
            '<%= less.test.mixins_important %>',
            '<%= less.test.mixins_named_args %>',
            '<%= less.test.mixins_nested %>', 
            '<%= less.test.mixins_pattern %>',
            '<%= less.test.operations %>',
            '<%= less.test.parens %>',
            '<%= less.test.rulesets %>',
            '<%= less.test.scope %>', 
            '<%= less.test.selectors %>', 
            '<%= less.test.strings %>', 
            '<%= less.test.urls %>',
            '<%= less.test.variables %>', 
            '<%= less.test.whitespace %>'
          ]
        }
      },

      // This target is supposed to throw errors, it will NOT compile. 
      errors: {
        options: {
          paths: ['<%= less.errors.imports %>']
        },
        src:  '<%= less.errors.fixtures %>/add-mixed-units.less',
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
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('assemble-styles');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks to be run.
  grunt.registerTask('default', [
    'clean:tests',
    'styles:less_1_3_2',
    'styles:less_1_3_3',
    'styles:less_1_2_0',
    'styles:less_1_4_0',

    'styles:example',
    'styles:all',
    'styles:glob',
    'styles:compression',
    'styles:debug',
    'styles:imports',
    'styles:legacy',
    'styles:static_urls'
  ]);

  // Tests to be run.
  grunt.registerTask('test', [
    'default',
    'jshint',
    'nodeunit:tests'
  ]);
};