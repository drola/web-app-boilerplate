requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app"
    },
    "shim": {
        "bootstrap": ["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);