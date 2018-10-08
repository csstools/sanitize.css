# Changes to sanitize.css

### 8.0.0 (October 8, 2018)

- Changed: Apply `aria-disabled` disabled styles when `[aria-disabled="true"]`
- Changed: Apply `svg { fill: currentColor }` when `svg:not([fill])`
- Fixed: Apply appropriate system font fallbacks for KDE Plasma

### 7.0.3 (September 4, 2018)

- Fix disabled cursor

### 7.0.2 (September 4, 2018)

- Restore form control margin normalizations in Firefox
- Re-order a few rules (opinionated)

### 7.0.1 (August 25, 2018)

- Support the 4-space tab width in Firefox (opinionated)
- Update documentation

### 7.0.0 (August 22, 2018)

- Use the default user interface font in all browsers (opinionated)
- Use the default monospace user interface font in all browsers (opinionated)
- Use a 4-space tab width in all browsers (opinionated)
- Fix correction of cursor style of increment and decrement buttons
  in Safari, not Chrome
- Correct the text style of placeholders in Chrome, Edge, and Safari
- Remove unnecessary form control margin normalizations in Firefox
- Remove opinionated fieldset padding in all browsers
- Remove `::-moz-focus-inner` and `:-moz-focusring` normalizations
  fixed in Firefox 53
  https://bugzilla.mozilla.org/show_bug.cgi?id=140562

### 6.0.0 (June 24, 2018)

- Added: `word-break: break-word` to `html`
- Added: `font-family: inherit` on form elements
- Added: normalize.css updates
- Added: `box-sizing: border-box` to `*, ::before, ::after`
- Removed: `box-sizing: border-box` from `html` and `box-sizing: inherit` from
  `html`
- Removed: `color: inherit` and `background-color: transparent` from
  `form`

### 5.0.0 (March 1, 2017)

- Added: normalize.css v6 parity, including `summary` display
- Added: form elements to inherit line-height from html
- Removed: font styles on `html`
- Removed: unnecessary `border-spacing` zeroing

### 4.1.0 (July 1, 2016)

- Updated: The focus removal on `:hover` now targets `a:hover`

### 4.0.0 (June 20, 2016)

- Added: All improvements from normalize.css v4.1.1
- Added: Documentation for each opinionated feature
- Added: Universal `background-repeat: no-repeat`
- Removed: Reset of universal `margin` and `padding`
- Removed: Inheritance of `font-size` on elements
           (form control elements still have it)
- Removed: Pre-compiled files that used variables
- Updated: `abbr[title]` styled using `border-bottom` over `text-decoration`
- Updated: Tests and linting

#### Why are variables removed in v4?

Variables were there for developers to override styles in sanitize.css without
editing the original file or overriding the rule. However, you *should* override
the rule so that your change is explicit, and so that your source maps
accurately indicate your changes coming from your files.

### 3.3.0 (March 3, 2016)

- Added: `b` and `strong` normalization
- Added: `::-moz-focus-inner` normalization
- Added: `hr` normalization
- Added: `svg` fill as the current color
- Updated: Organized rules into normalization, universal inheritance,
           opinionated defaults, and configurable defaults
- Updated: Moved source and compiled libraries

### 3.2.0 (February 3, 2016)

- Added: `selection.less`
- Updated: Use `root`-prefixed values across all formats
- Updated: Documentation

## 3.1.1 (February 1, 2016)

- Updated: `box-sizing` variable corrected to `border-box` in sass, scss, styl

### 3.1.0 (February 1, 2016)

- Added: Project configuration (.editorconfig)
- Added: Style linting rules and tests
- Added: `touch-action: manipulation` to remove delays during mobile tapping
- Removed: `text-rendering` due to performance issues
- Updated: `::selection` color variable corrected to `--selection-color`
- Updated: Use direct nesting

### 3.0.0 (October 23, 2015)

- Added: Normalization for **iOS 8+**
- Added: `background-repeat` for all elements
- Added: CONTRIBUTING.md
- Updated: background color and color for `:root` previously `html`
- Updated: `::selection` color to `#ffffff`
- Updated: dist from CSS source using PostCSS, cssnext, and cssnano
- Updated: Documentation

### 2.1.1 (October 5, 2015)

- Updated: bower.json

### 2.1.1 (October 5, 2015)

- Added: CSS version
- Updated: Use percentage `font-size` on `:root`
- Updated: Documentation
- Removed: `background-color` inheritance

### 2.0.0 (September 3, 2015)

- Added: Visually hidden element style `[hidden][aria-hidden="false"]`
- Added: Currently updating element style `[aria-busy="true"]`
- Added: Trigger element style `[aria-controls]`
- Added: Color style for `html`
- Added: CHANGELOG.md
- Removed: Standards-breaking visually hidden style `[hidden~="screen"]`
- Removed: Standards-breaking IE-proprietary style `[unselectable="on"]`
- Removed: Prefix-less properties and the use of Autoprefixer
- Updated: Form styling
- Updated: Support for the latest **Chrome**, **Edge**, **Firefox**,
           and **Safari**
- Updated: Licensing reference in package.json
- Updated: Development dependencies
- Updated: README.md and code documentation

### 1.2.0 (June 16, 2015)

- Added: Control over options via Sass variables
- Added: Overflow normalization on :root
- Added: `font-style` inheritance
- Updated: Support for the latest **Firefox**
- Removed: Redundant inheritance in ::before and ::after
- Removed: redundant cursor inheritance in anchor and form elements

### 1.1.0 (March 20, 2015)

- Added: Form support
- Updated: Normalization
- Updated: Border assignment

### 1.0.0 (11 6, 2012)

- Updated: Moved from normalize.css to sanitize.css

> Normalize.css had and still has opinionated, developer-centric styles. For
example, `sub` and `sup` elements are styled to not impact the line height of
text, and `table`, `th`, and `td` omit all spacing. As Nicolas pushed
Normalize.css into maturity, future preferences like these no longer had a
place in the project. Almost a year later, Sanitize was officially branded.
Where Normalize.css conservatively follows user agent consensus and results
in more pre-styled elements, Sanitize.css liberally follows developer
consensus and results in more unstyled elements.

### 0.0.0 (4 21, 2011)

- Added: Normalize.css
