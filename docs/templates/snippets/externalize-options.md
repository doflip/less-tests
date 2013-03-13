Type: `String`
Default value: `null`

If this filename is specified, options defined therein will be used. {{! Task and target options override the options within the `.lessrc` file. }}

``` javascript
styles: {
  options: grunt.file.readJSON('.lessrc')
}
```
The `.lessrc` file must be valid JSON and looks something like this:

``` json
{
  "require": null,
  "concat": false,
  "compress": false,
  "yuicompress": false,
  "optimization": 3,
  "strictImports": true,
  "dumpLineNumbers": false,
  "strictMaths": false,
  "strictUnits": false
}
```

