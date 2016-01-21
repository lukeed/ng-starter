const fanny = require('fannypack');
const C = fanny.Config;

C.root = {
  src: './src',
  dest: './build'
};

C.js.src = 'scripts';
C.js.dest = 'assets/js';
C.js.entries = {
  app: ['./app.js']
};

C.sass.src = 'styles';
C.sass.dest = 'assets/css';

C.html.src = '';
C.browsersync = {
  server: {
    baseDir: C.root.dest
  }
};

fanny.init();
