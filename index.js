var fs = require('fs');
var cssnext = require('postcss-cssnext');

var enc  = 'utf8';

var opts = {
	from: 'lib/sanitize.css',
	to:   'sanitize.css'
};

cssnext.process(fs.readFileSync(opts.from, enc), opts).then(function (result) {
	fs.writeFileSync(opts.to, result.css, enc);
});
