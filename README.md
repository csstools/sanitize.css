# sanitize.css

<a href="https://github.com/10up/sanitize.css"><img src="https://10up.github.io/sanitize.css/logo.svg" alt="PostHTML Logo" width="80" height="80" align="right"></a>

> Render elements consistently. Follow best practices.

[![npm][npm-image]][npm-url] [![bower][bower-image]][bower-url] [![gitter][gitter-image]][gitter-url]

**NPM**

```sh
npm install --save-dev sanitize.css
```

**Bower**

```sh
bower install --save sanitize-css
```

[sanitize.css] corrects broken and missing styles in all browsers so that elements always render consistently. Next, it adds new default styles based on modern best practices. Finally, it exposes opinionated defaults as governable variables.

```css
*,
::before,
::after {
	box-sizing: inherit;
}

:root {
	box-sizing: var(--root-box-sizing, border-box);
}
```

Each new default is easily configurable with variables available in your favorite CSS, Less, Sass, SCSS, and Stylus flavors.

```css
@import url("node_modules/sanitize.css/sanitize.css");

/* overwrite defaults in sanitize.css */
:root {
	--root-box-sizing: border-box;
	--root-font-family: "Open Sans", sans-serif;
	--root-color: #333;
}
```

```less
@import "node_modules/sanitize.css/sanitize.less";

// overwrite defaults in sanitize.less
@root-box-sizing: border-box;
@root-font-family: sans-serif;
@root-color: #333333;
```

```sass
// overwrite defaults in sanitize.sass
$root-box-sizing: border-box
$root-font-family: "Open Sans", sans-serif
$root-color: #333333

import "node_modules/sanitize.css/sanitize.scss"
```

```scss
// overwrite defaults in sanitize.scss
$root-box-sizing: border-box;
$root-font-family: "Open Sans", sans-serif;
$root-color: #333333;

import "node_modules/sanitize.css/sanitize.scss";
```

```stylus
// overwrite defaults in sanitize.styl
root-box-sizing = border-box;
root-font-family = "Open Sans", sans-serif
root-color = #333333

@import "node_modules/sanitize.css/sanitize.styl"
```

## Variables

##### `root-background-color`

Controls the page background color (default: `#ffffff`)

##### `root-box-sizing`

Controls the page box model inherited by all elements (default: `border-box`)

##### `root-color`

Controls the page text color inherited by all elements (default: `#ffffff`)

##### `root-cursor`

Controls the default page cursor (default: `default`)

##### `root-font-family`

Controls the page font inherited by all elements (default: `sans-serif`)

##### `root-font-size`

Controls the page text size inherited by all elements (default: `100%`)

##### `root-line-height`

Controls the page text line height inherited by all elements (default: `1.5`)

##### `background-repeat`

Controls how background images are repeated on all elements (default: `no-repeat`)

##### `form-element-background-color`

Controls the background color of form controls (`button`, `input`, `select`, `textarea`) (default: `transparent`)

##### `form-element-color`

Controls the text color of form controls (`button`, `input`, `select`, `textarea`) (default: `inherit`)

##### `form-element-min-height`

Controls the minimum height of form controls (`button`, `[type="button"]`, `[type="date"]`, `[type="datetime"]`, `[type="datetime-local"]`, `[type="email"]`, `[type="month"]`, `[type="number"]`, `[type="password"]`, `[type="reset"]`, `[type="search"]`, `[type="submit"]`, `[type="tel"]`, `[type="text"]`, `[type="time"]`, `[type="url"]`, `[type="week"]`, `select`, `textarea`) (default: `1.5em`)

##### `media-element-vertical-align`

Controls the vertical align of media elements (`audio`, `canvas`, `iframe`, `img`, `svg`, `video`) (default: `middle`)

##### `monospace-font-family`

Controls the font used by markup elements (`code`, `kbd`, `pre`, `samp`) (default: `monospace`)

##### `nav-list-style`

Controls the list style for navigation lists (`nav ol, nav ul`) (default: `none`)

##### `selection-background-color`

Controls the background color of selected text (default: `#b3d4fc`)

##### `selection-color`

Controls the text color of selected text (default: `#ffffff`)

##### `selection-text-shadow`

Controls the text shadow of selected text (default: `none`)

##### `small-font-size`

Controls the text size of `small` elements (default: `75%`)

##### `table-border-collapse`

Controls how borders collapse within `table` elements (default: `collapse`)

##### `table-border-spacing`

Controls the distance between borders within `table` elements (default: `0`)

##### `textarea-resize`

Controls the resizability of `textarea` elements (default: `vertical`)

## Differences

[sanitize.css] styles elements more consistently with developers’ expectations and preferences. [normalize.css] styles elements more consistently between browsers. [reset.css] unstyles every element. Both sanitize.css and normalize.css are maintained in sync, and both projects correct browser bugs while carefully testing and documenting every change.

## Support

At present, sanitize.css supports the current and previous major releases of common web browsers. When a new version is released, we begin supporting that newer version and stop supporting the third version back. Additionally, many older browsers remain supported without supplementary CSS.

Currently tested and supported browsers include **Android 4.3-4.4+**, **Chrome 47-48+**, **Edge 12-13+**, **Firefox 43-44+**, **Internet Explorer 10-11**, **iOS 7-8+**, **Opera 34-35+**, **Safari 8-9+**, and **Windows Phone 8.1+**.

Additionally tested and supported browsers (requiring no supplementary CSS) include **Internet Explorer 9** and **Safari 7**.

## License

**sanitize.css** is dedicated to the [public domain](LICENSE.md).

[npm-image]: https://img.shields.io/npm/v/sanitize.css.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/sanitize.css
[bower-image]: https://img.shields.io/bower/v/sanitize-css.svg?style=flat-square
[bower-url]: https://libraries.io/bower/sanitize-css
[gitter-image]: https://img.shields.io/gitter/room/10up/sanitize.css.svg
[gitter-url]: https://gitter.im/10up/sanitize.css
[normalize.css]: https://github.com/necolas/normalize.css
[reset.css]: http://meyerweb.com/eric/tools/css/reset/
[sanitize.css]: https://github.com/10up/sanitize.css
