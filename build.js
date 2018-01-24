const fsextra = require('fs-extra');
const { exec } = require('child_process');

fsextra.copy('./src/app/notify', './dist-lib', err => {
  if (err) return console.error(err);
  console.log('Copied files');
  createTsConfig();
});

function createTsConfig() {
  const tsconfig = {
    "compilerOptions": {
      "declaration": true
    }
  };
  fsextra.writeJson('./dist-lib/tsconfig.json', tsconfig, err => {
    if (err) return console.error(err);
    console.log('Created tsconfig.json');
    createDeclarations();
  });

}

function createDeclarations() {
  exec('cd dist-lib && tsc ', () => {
    console.log('Generated declarations (and some JS files...)');
    createPackageJson();
  });
}


function createPackageJson() {
  const packageJSON =  {
    "name": "ngx-toastytoast",
    "version": "0.0.6",
    "description": "Simple yet customizable notifications for Angular2+, well suited in combination with Material Design",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "pub": "git add --all && git commit -m update && npm version patch && npm publish && git push"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/bersling/notify-angular.git"
    },
    "keywords": [
      "Angular",
      "Angular2",
      "Notifications",
      "Material",
      "Material Design",
      "Simple"
    ],
    "author": "bersling@gmail.com",
    "license": "MIT",
    "bugs": {
      "url": "https://github.com/bersling/notify-angular/issues"
    },
    "homepage": "https://github.com/bersling/notify-angular#readme",
    "types": "index.d.ts"
  };
  fsextra.writeJson('./dist-lib/package.json', packageJSON, err => {
    if (err) return console.error(err);
    console.log('Created package.json');
  });

}
