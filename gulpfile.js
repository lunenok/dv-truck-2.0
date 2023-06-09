const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.style = tasks.style;
exports.html = tasks.html;
exports.bs_html = tasks.bs_html;
exports.watch = tasks.watch;
exports.rastr = tasks.rastr;
exports.webp = tasks.webp;
exports.font = tasks.font;
exports.dev_js = tasks.dev_js;

exports.default = gulp.parallel(
	exports.style,
    exports.font,
    exports.rastr,
    exports.webp,
    exports.dev_js,
	exports.html,
	exports.bs_html,
    exports.watch
);