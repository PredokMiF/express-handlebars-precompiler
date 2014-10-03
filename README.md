# express-handlebars-precompiler

Precompile handlebar templates when it changed without restart server

## Installation

```npm install express-handlebars-precompiler```

## Usage

This is how you might use it in an Express project:

```javascript
app.use(require('express-handlebars-precompiler')({
    templatesPath: 'private/templates',
    amd: true,
    output: 'public/js/templates.js'
}));
```

In this example set templates dir (with all subdirectories) and compile/recompile it to ```public/js/templates.js```

It is sync method. All options gets from [handlebars-precompiler](https://www.npmjs.org/package/handlebars-precompiler) but you should set ```templatesPath``` is is path to
templates directory. All files in this dir and its subdir with ```*.handlebars``` will be compiled when it is necessary.