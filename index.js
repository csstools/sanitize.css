var fs  = require('fs');

require('postcss-cssnext')({
	features: {
		autoprefixer: {
			remove: false
		}
	}
}).process(fs.readFileSync('sanitize.css', 'utf8'), {
	from: 'sanitize.css',
	to:   'dist/sanitize.css',
	map:  {
		inline: false
	},
}).then(function (result) {
	fs.writeFileSync('dist/sanitize.css', result.css);
	fs.writeFileSync('dist/sanitize.css.map', result.map);

	require('cssnano')().process(result.css, {
		from: 'dist/sanitize.css',
		to:   'dist/sanitize.min.css',
		map:  {
			inline: false
		},
	}).then(function (result) {
		fs.writeFileSync('dist/sanitize.min.css', result.css);
		fs.writeFileSync('dist/sanitize.min.css.map', result.map);
	});
});
