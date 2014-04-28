#Boilerplate for using jQuery + Twitter Bootstrap + Require.js

Inspired by https://github.com/requirejs/example-jquery-shim

Includes:

 - jQuery 2.1.0
 - Twitter Bootstrap 3.1.1
 - Require.js 2.1.11


##How to start developing
First checkout the documentation at http://requirejs.org, especially the motivation at http://requirejs.org/docs/whyamd.html. Requre.js is a module loader that enables us to better organize our web app code.  It does so by offering a module loader that tracks dependencies (ie. we can declare that are code depends on Bootstrap, require.js then figures out that Bootstrap depends on jQuery and loads it... and so on).

 - `js/lib/*`: libraries from the web
 - `js/app/*`: our own code
 - `js/app.js`: code that initializes Require.js (setting proper paths and defining dependencies of modules that don't declare them themselves. This is often the case with libraries from the web.)

Application entry point is in `js/app/main.js`. You can start extending from there.