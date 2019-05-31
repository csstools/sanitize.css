document.addEventListener('DOMContentLoaded', function () {
	if (window.top !== window) {
		return;
	}

	var $fieldsetInset = create('div', null,
		label('forms.css'),
		' ',
		label('typography.css'),
		' ',
		label('page.css')
	);

	var $fieldset = create('fieldset', null,
		create('legend', null, 'Additional Features'), 
		$fieldsetInset
	);

	$fieldset.style.backgroundColor = '#fff';
	$fieldset.style.bottom = '1em';
	$fieldset.style.boxShadow = '0 0 0 .75em #fff, 0 1em 0 0 #fff';
	$fieldset.style.margin = '0 auto';
	$fieldset.style.maxWidth = '32em';
	$fieldset.style.position = 'fixed';
	$fieldset.style.position = '-webkit-sticky';
	$fieldset.style.position = 'sticky';
	$fieldset.style.width = '100%';

	$fieldsetInset.style.display = 'flex';
	$fieldsetInset.style.justifyContent = 'space-around';

	document.body.appendChild($fieldset);

	function label (name) {
		return create('label', null,
			' ',
			create('input', { checked: true, name: name, onchange: onChange, type: 'checkbox' }),
			name
		);
	}

	function onChange (event) {
		var $link = document.head.querySelector('[href="' + event.target.name + '"]');

		if ($link) {
			$link.rel = event.target.checked ? 'stylesheet' : 'preload';

			onScrollIntoView();
		}
	}

	function onScrollIntoView () {
		if (scrollable && location.hash.slice(1)) {
			var element = document.getElementById(location.hash.slice(1));

			if (element) {
				element.scrollIntoView();

				scrollable = true;

				setTimeout(function () {
					element.scrollIntoView();

					scrollable = true;
				}, 60);
			}
		}
	}

	function create (name, props) {
		var element = name === Object(name) ? name : document.createElement(name);

		for (var prop in props) {
			element[prop] = props[prop];
		}

		for (var i = 2; i < arguments.length; ++i) {
			element.appendChild(
				typeof arguments[i] === 'string'
					? document.createTextNode(arguments[i])
				: arguments[i]
			);
		}

		return element;
	}

	var scrollable = true;

	window.addEventListener('scroll', function () {
		scrollable = false;
	});

	window.addEventListener('hashchange', function () {
		scrollable = true;
	});

	window.addEventListener('load', onScrollIntoView);

	Array.prototype.forEach.call(
		document.querySelectorAll('[id]'),
		function ($id) {
			const $h1 = $id.querySelector('h1');

			if ($h1) {
				const $fragment = create.apply(null, [document.createDocumentFragment(), null,
					create('a', { href: '#' + $id.id }, '#'),
					' '
				].concat(
					Array.prototype.slice.call($h1.childNodes)
				));

				$h1.appendChild($fragment);
			}
		}
	);
});
