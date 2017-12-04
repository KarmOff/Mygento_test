'use strict';

module.exports = function() {
	$.gulp.task('img:min', function() {
		return $.gulp.src('./source/images/**/*.*')
			.pipe($.gp.imagemin())
			.pipe($.gulp.dest($.config.root + '/assets/img'));
	});
};
