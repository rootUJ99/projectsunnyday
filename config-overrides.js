const path = require('path');

module.exports = {
    paths: function (paths, env) {       
      paths.appPath = path.resolve(__dirname, 'client');
      paths.appBuild = path.resolve(__dirname, 'client/build');
      paths.appPublic = path.resolve(__dirname, 'client/public');
      paths.appHtml = path.resolve(__dirname, 'client/public/index.html');
      paths.appIndexJs = path.resolve(__dirname, 'client/src/index.js');
      paths.appSrc = path.resolve(__dirname, 'client/src');
      console.log('paths', paths); 
        return paths;
    },
}