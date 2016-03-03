var fs        = require('fs');
var postcss   = require('postcss');
var reporter  = require('postcss-reporter');
var stylelint = require('stylelint');

var enc  = 'utf8';

var opts = {
	from: 'lib/sanitize.css'
};

var reporterOpts = {
	clearMessages: true,
	throwError: true
};

postcss([
	stylelint(),
	reporter(reporterOpts)
]).process(fs.readFileSync(opts.from, enc), opts).catch(function (error) {
	console.error(error.stack);
});
