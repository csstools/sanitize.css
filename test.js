var fs        = require('fs');
var postcss   = require('postcss');
var reporter  = require('postcss-reporter');
var stylelint = require('stylelint');

postcss([
	stylelint(),
	reporter({
		clearMessages: true,
		throwError: true
	})
]).process(fs.readFileSync('sanitize.css', 'utf8'), {
	from: 'sanitize.css'
}).catch(function (error) {
	console.error(error.stack);
});
