/*
 * less-tests
 * http://github.com/upside/less-tests
 *
 * Copyright (c) 2013 Upside
 * MIT License
 */

module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({

    // Project paths and files.
    less: grunt.file.readJSON('test/less.json'),
    pkg:  grunt.file.readJSON('package.json'),


    // Run simple unit tests to detect changes in CSS files.
    nodeunit: {
      tests: ['test/test.js', 'test/fixtures/*_test.js'],
      less:  ['less/test/*.js']
    },

    // Run tests using 'assemble-styles' task
    styles: {
      // Global task options. Options can also be set for each target.
      options: {
        require: '',
        concat: false,
        compress: false,    // whether to compress
        yuicompress: false,  // whether to compress with YUI
        optimization: 3,
        strictImports: true,
        dumpLineNumbers: false,
        strictMaths: false,  // whether maths has to be within parenthesis
        strictUnits: false    // whether units need to evaluate correctly
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
        src:  ['<%= less.compression %>'],
        dest: 'test/result/compression'
      },

      debug: {
        options: {
          paths:   ['<%= less.debug.import %>']
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
      tests: { src: 'test/result' }
    },

    // Internal task to manage README's across projects.
    assemble: {
      readme: {
        options: {
          changelog: grunt.file.readYAML('CHANGELOG'),
          roadmap:   grunt.file.readYAML('ROADMAP'),
          today: '<%= grunt.template.today() %>',
          partials: ['docs/*.md','docs/templates/snippets/*.md'],
          data: ['docs/docs.json'],
          ext: '.md'
        },
        files: {
          '.': ['docs/templates/README.hbs']
        }
      }
    },
    watch: {
      project: {
        files: ['test/bootstrap/**/*.{less,json}'],
        tasks: ['styles']
      }
    }

  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('styles');
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks to be run.
  grunt.registerTask('default', [
    'clean:tests',
    'styles:all',
    'styles:glob',
    'styles:compression',
    'styles:debug',
    'styles:imports',
    'styles:legacy',
    'styles:static_urls'
  ]);

  // Tests to be run.
  grunt.registerTask('readme', [
    'assemble'
  ]);

  // Tests to be run.
  grunt.registerTask('test', [
    'default',
    'readme',
    'jshint',
    'nodeunit:tests'
  ]);

  // Tests to be run.
  grunt.registerTask('node', [
    'nodeunit:less'
  ]);
};
