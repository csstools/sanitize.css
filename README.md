# sanitize.css

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

- CSS inheritance is universal so that styles are easier to control ([code](sanitize.scss#L48-L60)).
- The box model is more intuitive with border-box ([reference](http://www.paulirish.com/2012/box-sizing-border-box-ftw/)) ([reference](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)) ([code](sanitize.scss#L77)).
- Smaller font-sizes display consistently across browsers ([reference](https://github.com/servo/servo/issues/3423#issuecomment-56321664)) ([code](sanitize.scss#L31)).
- Monospace fonts render consistently ([reference](http://code.stephenmorley.org/html-and-css/fixing-browsers-broken-monospace-font-handling/)) ([code](sanitize.scss#L94)).
- Border width works as expected ([reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#Values)) ([code](sanitize.scss#L64)).
- Text selections containing a drop shadow remain legible ([reference](https://twitter.com/miketaylr/status/12228805301)) ([code](sanitize.scss#L129)).
- Content may be hidden from the screen but not screenreaders ([reference](http://www.paciellogroup.com/blog/2012/05/html5-accessibility-chops-hidden-and-aria-hidden/)) ([reference](https://www.drupal.org/node/897638)) ([code](sanitize.scss#L140-L149)).

To give you even more control, [sanitize.scss](sanitize.scss) allows you to define your own defaults for box-sizing, font family, monospace font family, text rendering, selection background color, and smaller font size - all without over-declaring them later.

```scss
// overwrite defaults in sanitize.scss
$default-font-family: "Open Sans";
$default-text-rendering: optimizeSpeed;

import 'vendors/sanitize.scss';
```

- **$default-box-sizing**: the default box-sizing is `border-box`.
- **$default-font-family**: the default font family is `sans-serif`.
- **$default-text-rendering**: the default text-rendering is `optimizeLegibility`.
- **$default-monospace-font-family**: the default monospace font is `monospace`.
- **$default-selection-background-color**: the default selection background color is `#B3D4FC`.
- **$default-small-font-size**: the default small font size is `75%`.



## Support

At present, we support the current and previous major releases of popular web browsers. When a new version is released, we begin supporting that version and stop supporting the third most recent version.

These browsers currently include Android 4.3-4.4+, Chrome 39-40+, Firefox 34-35+, Internet Explorer 10-11+, iOS 7-8+, Safari 7-8+, Windows Phone 8.1+.



## License

**sanitize.css** is dedicated to the [public domain](LICENSE.md).
