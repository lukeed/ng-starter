const fanny = require('fannypack');
const C = fanny.Config;

require('fannypack-angular-templatecache');

C.root = {
  src: './src',
  dest: './build'
};

C.js.src = ''; // root.src
C.js.dest = 'assets/js';
C.js.entries = {
  main: ['./main.js']
};

C.sass.src = ''; // root.src
C.sass.dest = 'assets/css';

C.html.src = 'html';

C.ngTemplates = {
	src: 'app',
	dest: 'assets/js',
	watchTask: true,
	codeTask: true,
	options: {
		module: 'app.templates',
		standalone: true
	},
	extensions: ['html']
};

C.browsersync = {
  server: {
    baseDir: C.root.dest
  }
};

fanny.init();
