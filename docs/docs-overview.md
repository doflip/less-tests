In your project's Gruntfile, the `{{ docs.name }}` task is already configured with a number of build `targets`. This is for convenience to show you how to create your own tests:

```js
grunt.initConfig({
  // This is a task
  styles: {
    options: {
      // Task-specific options go here.
    },
    // This is a target
    example: {
      options: {
        // Target-specific options go here.
      },
      files: {
        'dest/files': ['source/files/*.*']
      }
    }
  },
  jshint: {
    ...
  }
});
grunt.loadNpmTasks('styles');

grunt.registerTask('default', [
  'jshint', 
  'styles'
]);
```
Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.
