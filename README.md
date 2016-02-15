# sanitize.css

<a href="https://github.com/10up/sanitize.css"><img src="https://10up.github.io/sanitize.css/logo.svg" alt="PostHTML Logo" width="80" height="80" align="right"></a>

[![npm][npm-image]][npm-url] [![bower][bower-image]][bower-url]

[sanitize.css] renders elements consistently while following today’s best practices.

**NPM**

```sh
npm install --save-dev sanitize.css
```

**Bower**

```sh
bower install --save sanitize-css
```

[sanitize.css] corrects broken and missing styles in all browsers so that elements always render consistently. sanitize.css then styles new defaults based on today’s best practices.

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

Controls the page box-sizing inherited by all elements (default: `border-box`)

##### `root-color`

Controls the page text color inherited by all elements (default: `#ffffff`)

##### `root-cursor`

Controls the page cursor (default: `default`)

##### `root-font-family`

Controls the page font inherited by all elements (default: `sans-serif`)

##### `root-font-size`

Controls the page text size inherited by all elements (default: `100%`)

##### `root-line-height`

Controls the page text line box height inherited by all elements (default: `1.5`)

##### `background-repeat`

Controls how background images are repeated on all elements (default: `no-repeat`)

##### `form-background-color`

Controls the background color of form controls (default: `transparent`)

##### `form-color`

Controls the text color of form controls (default: `inherit`)

##### `form-min-height`

Controls the minimum height of form controls (default: `1.5em`)

##### `media-element-vertical-align`

Controls the vertical align of media elements (default: `middle`)

##### `monospace-font-family`

Controls the font used by markup elements (default: `monospace`)

##### `nav-list-style`

Controls the list style for navigation lists (default: `none`)

##### `selection-background-color`

Controls the background color of selected text (default: `#b3d4fc`)

##### `selection-color`

Controls the text color of selected text (default: `#ffffff`)

##### `selection-text-shadow`

Controls the text shadow of selected text (default: `none`)

##### `small-font-size`

Controls the text size of `<small>` elements (default: `75%`)

##### `table-border-collapse`

Controls how borders collapse within `<table>` elements (default: `collapse`)

##### `table-border-spacing`

Controls the distance between borders within `<table>` elements (default: `0`)

##### `textarea-resize`

Controls the resizability of `<textarea>` elements (default: `vertical`)

## Differences

[sanitize.css] styles render elements more consistently with developers’ expectations and preferences. [normalize.css] styles render elements more consistently with each other. [reset.css] unstyles every element. Both sanitize.css and normalize.css are maintained in sync, and both projects correct browser bugs while carefully testing and documenting every change.

## Support

At present, sanitize.css supports the current and previous major releases of common web browsers. When a new version is released, we begin supporting that version and stop supporting the third most recent version. Many older browsers happen to be remain supported using the same CSS without additional needs.

Currently tested and supported browsers include **Android 4.3-4.4+**, **Chrome 47-48+**, **Edge 12-13+**, **Firefox 43-44+**, **Internet Explorer 10-11**, **iOS 7-8+**, **Opera 34-35+**, **Safari 8-9+**, and **Windows Phone 8.1+**.

It’s worth noting that **Internet Explorer 9** and **Safari 7** are also supported, as nothing needed by those browsers wasn’t also needed by a supported browser.

## License

**sanitize.css** is dedicated to the [public domain](LICENSE.md).

[npm-image]: https://img.shields.io/npm/v/sanitize.css.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/sanitize.css
[bower-image]: https://img.shields.io/bower/v/sanitize-css.svg?style=flat-square
[bower-url]: https://libraries.io/bower/sanitize-css
[normalize.css]: https://github.com/necolas/normalize.css
[reset.css]: http://meyerweb.com/eric/tools/css/reset/
[sanitize.css]: https://github.com/10up/sanitize.css
