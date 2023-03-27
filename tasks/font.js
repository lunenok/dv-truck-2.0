const {
	src,
	dest
} = require('gulp');
const bs = require('browser-sync');

module.exports = function font() {
    return src('src/fonts/**/*.+(woff|woff2|ttf)')
    .pipe(dest('build/fonts'))
  .pipe(bs.stream())
}