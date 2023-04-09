const {
	src,
	dest
} = require('gulp');
const bs = require('browser-sync');

module.exports = function script() {
    return src('src/**/*.+(js)')
    .pipe(dest('build'))
  .pipe(bs.stream())
}