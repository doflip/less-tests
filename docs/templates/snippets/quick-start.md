## Quick start

Three quick start options are available:

* [Download the latest release](https://github.com/{{docs.org}}/{{docs.name}}/zipball/master).
* Clone the repo: `git clone git://github.com/{{docs.org}}/{{docs.name}}.git`.
* Install with Twitter's [Bower](http://twitter.github.com/bower): `bower install {{docs.name}}`.


### Compile CSS and Run Tests
`less-tests` provides convenient methods for compiling and running tests on LESS and CSS file. Before getting started, be sure to install [the required local dependencies](package.json):

```
$ npm install
```

When completed, you'll be able to run the various `grunt` commands provided:

#### build - `grunt`
Runs the Less.js compiler to rebuild the specified `/test/fixtures/*.less` files. Requires [Less.js](http://github.com/cloudhead/less.js) and [assemble-styles](http://github.com/assemble/assemble-styles).

#### test - `grunt test`
Runs jshint on JavaScripts and nodeunit tests on CSS file. Yeah, I know, but I'm hoping this will pave the way or inspire a better solution.

#### watch - `grunt watch`
This is a convenience method for watching all Less files and automatically re-building them whenever you save. Requires the [grunt-contrib-watch](http://github.com/gruntjs/grunt-contrib-watch) Grunt plugin.

Should you encounter problems with installing dependencies or running the `grunt` commands, be sure to first uninstall any previous versions (global and local) you may have installed, and then rerun `npm install`.