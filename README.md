# sanitize.css

<img align="right" width="128" height="128" src="http://10up.github.io/sanitize.css/logo.png" alt="">

[![npm][npm-image]][npm-url] [![bower][bower-image]][bower-url]

Render elements consistently. Style with best practices.

## Installation

**Bower**

```sh
bower install --save sanitize-css
```

**NPM**

```sh
npm install sanitize.css
```

**Sass**

```scss
@import 'vendors/sanitize.scss';
```

**CSS**

```css
@import url(vendors/sanitize.css);
```

## Highlights

- CSS inheritance is universal so that styles are easier to control.
- The box model is more intuitive with border-box ([reference](http://www.paulirish.com/2012/box-sizing-border-box-ftw/)) ([reference](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)).
- Smaller font-sizes display consistently across browsers ([reference](https://github.com/servo/servo/issues/3423#issuecomment-56321664)).
- Monospace fonts render consistently ([reference](http://code.stephenmorley.org/html-and-css/fixing-browsers-broken-monospace-font-handling/)).
- Border styles work as expected ([reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#Values)).
- Text selections containing a drop shadow remain legible ([reference](https://twitter.com/miketaylr/status/12228805301)).
- Content may be hidden from the screen but not screenreaders ([reference](http://www.paciellogroup.com/blog/2012/05/html5-accessibility-chops-hidden-and-aria-hidden/)) ([reference](https://www.drupal.org/node/897638)).

## Differences

**Sanitize.css** styles browsers to render elements more consistently with developer expectations and preferences. **Normalize.css** styles browsers to render elements more consistently with each other. **Reset.css** unstyles every element. Each one has its own advantages.

In **Sanitize.css**, CSS inheritance is assigned universally so that styles cascade naturally and consistently. Wherever possible, the box model operates more intuitively. Every normalization and opinionated default is carefully documented, and most are configurable from Sass.

## Options

To give you complete control, **sanitize.css** is available in every major style markup language, including CSS, Less, Sass, SCSS, and Stylus. Each flavor allows you to define your own defaults for every feature — box-sizing, font family, text rendering, selection, etc. — so you never need to re-write these rules later.

```css
/* overwrite defaults in sanitize.css */
:root {
	--root-font-family: "Open Sans", sans-serif;
	--root-color: #333;
}

import url("vendors/sanitize.css");
```

```less
import "vendors/sanitize.less"

// overwrite defaults in sanitize.less
@root-font-family: sans-serif;
@root-color: #333333;
```

```sass
// overwrite defaults in sanitize.sass
$root-font-family: "Open Sans", sans-serif
$root-color: #333333

import "vendors/sanitize.scss"
```

```scss
// overwrite defaults in sanitize.scss
$root-font-family: "Open Sans", sans-serif;
$root-color: #333333;

import "vendors/sanitize.scss";
```

```stylus
// overwrite defaults in sanitize.styl
root-font-family = "Open Sans", sans-serif
root-color = #333333

@import "vendors/sanitize.styl"
```

- **root-background-color**: the default background color is `#ffffff`.
- **root-box-sizing**: the default box-sizing is `border-box`.
- **root-color**: the default text color is `#000000`.
- **root-cursor**: the default cursor is `default`.
- **root-font-family**: the default font family is `sans-serif`.
- **root-font-size**: the default font size `100%`.
- **root-line-height**: the default line height is `1.5`.
- **anchor-text-decoration**: the default anchor text decoration is `none`.
- **background-repeat**: the default background repeat is `no-repeat`.
- **form-element-background-color**: the default form background color is `transparent`.
- **form-element-min-height**: the default form element minimum height is `1.5em`
- **media-element-vertical-align**: the default vertical alignment for media elements is `middle`.
- **monospace-font-family**: the default font for code elements is `monospace`.
- **nav-list-style**: the default list style for navigation lists is `none`.
- **selection-background-color**: the default selection background color is `#b3d4fc`.
- **selection-color**: the default selection text color is `#ffffff`.
- **selection-text-shadow**: the default select text shadow is `none`.
- **small-font-size**: the default font size for small elements is `75%`.
- **table-border-collapse**: the default border collapse for tables is `collapse`.
- **table-border-spacing**: the default border spacing for tables is `0`.
- **textarea-resize**: the default resize for textarea’s is `vertical`.

## Support

At present, we support the current and previous major releases of popular web browsers. When a new version is released, we begin supporting that version and stop supporting the third most recent version. Many older browsers happen to be remain supported using the same CSS without additional needs.

Currently tested and supported browsers include **Android 4.3-4.4+**, **Chrome 39-45+**, **Edge 12+**, **Firefox 34-40+**, **Internet Explorer 9-11**, **iOS 7-8+**, **Safari 7-9+**, **Windows Phone 8.1+**.

## License

**sanitize.css** is dedicated to the [public domain](LICENSE.md).

[npm-image]: https://img.shields.io/npm/v/sanitize.css.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/sanitize.css
[bower-image]: https://img.shields.io/bower/v/sanitize-css.svg?style=flat-square
[bower-url]: https://libraries.io/bower/sanitize-css
