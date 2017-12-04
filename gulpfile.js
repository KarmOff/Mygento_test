'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
  },
  gulp: require('gulp'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
	'img:min',
    'copy:image',
	'css:foundation',
    'sprite:svg'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
