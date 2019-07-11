# Contributing to sanitize.css

Please review this document in order to make the contribution process easy and
effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of
the developers managing and developing this project. In return, we will
reciprocate that respect in addressing your issues, patches, and features.

## Using the issue tracker

The issue tracker is the preferred channel for [bug reports](#bug-reports),
[feature requests](#feature-requests) and [pull
requests](#pull-requests), but please respect the following restrictions:

* Please **do not** use the issue tracker for personal support requests.
* Please **do not** derail or troll issues. Keep the discussion on topic and
  respect the opinions of others.

## Bug reports

A bug is a _demonstrable problem_ caused by the code in this repository.

1. **Use the GitHub issue search** to see if the issue has
   [already been reported].

2. **Check if the issue has been fixed** by trying to reproduce it using the
   latest `master` branch in the repository.

3. **Isolate the problem** to create a [live example] of a [reduced test case].

A good bug report shouldn't leave others needing to chase you up for more
information. Please be as detailed as possible in your report. What is your
environment? What steps will reproduce the issue? What browser(s) and OS
experience the problem? What would you expect to be the outcome? All these
details will help people to fix any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If
> suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> `<url>` - a link to the reduced test case
>
> Any other information you want to share that is relevant to the issue being
> reported. This might include the lines of code that you have identified as
> causing the bug, and potential solutions (and your opinions on their
> merits).

## Feature requests

Feature requests are welcome. Take a moment to find out whether your idea fits
with the scope and aims of the project. It's up to *you* to make a strong case
to convince the project's developers of the merits of this feature. Please
provide as much detail and context as possible.

## Pull requests

Good pull requests - patches, improvements, new features - are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant work, otherwise you
risk spending a lot of time working on something that the project's developers
might not want to merge into the project.

Please adhere to the coding conventions used throughout a project (whitespace,
accurate comments, etc.) and any other requirements (such as test coverage).

Follow this process if you'd like your work considered for inclusion in the
project:

1. To begin: [fork this project], clone your fork, and add our upstream.
   ```bash
   # Clone your fork of the repo into the current directory
   git clone git@github.com:YOUR_USER/sanitize.css.git

   # Navigate to the newly cloned directory
   cd sanitize.css

   # Assign the original repo to a remote called "upstream"
   git remote add upstream git@github.com:csstools/sanitize.css.git

   # Install the tools necessary for testing
   npm install
   ```

2. Create a branch for your feature or fix:
   ```bash
   # Move into a new branch for your feature
   git checkout -b feature/thing
   ```
   ```bash
   # Move into a new branch for your fix
   git checkout -b fix/something
   ```

3. If your code follows our practices, then push your feature branch:
   ```bash
   # Test current code
   npm test
   ```
   ```bash
   # Push the branch for your new feature
   git push origin feature/thing
   ```
   ```bash
   # Or, push the branch for your update
   git push origin update/something
   ```

   Be sure to add a test to the `test.html` file if appropriate, and test
   your change in all supported browsers.


Now [open a pull request] with a clear title and description. Remember,
by submitting a patch, you agree to allow the project owner to license your
work under the same license as that used by the project.

### CSS Conventions

Keep the CSS file as readable as possible by following these guidelines:

- Comments are short and to the point.
- Comments without a number reference the entire rule.
- Comments describe the selector when the selector does not make the
  normalization obvious.
- Comments begin with “Correct the...” when they deal with less obvious side
  effects.
- Rules are sorted by section, cascade, specificity, and then alphabetic order.
- Selectors are sorted by low-to-high specificity and then alphabetic order.
- `in browser` applies to all versions.
- `in browser v+` applies to all versions after and including the version.
- `in browser v-` applies to all versions up to and including the version.
- `in browser v-v` applies to all versions including and between the versions.

## Maintainers

If you have commit access, please follow this process for merging patches and
cutting new releases.

### Accepting patches

1. Check that a patch is within the scope and philosophy of the project.
2. Check that a patch has any necessary tests and a proper, descriptive commit
   message.
3. Test the patch locally.
4. Use GitHub’s merge button with caution or apply the patch locally, squashing
   any commits.

### Releasing a new version

1. Include all new functional changes in CHANGELOG.md.
2. Create an annotated tag for the version: `git tag -m "0.0.0" 0.0.0`.
3. Push the changes and tags to GitHub: `git push --tags origin master`
4. Update the `gh-pages` branch,
   1. Copy the latest sanitize.css and test.html from the master branch into
      the root directory, the `latest` directory, and a new directory named
      after the new version: `0.0.0`.
   2. Update the sanitize.css version and supported browsers in `index.html`.

### Semver strategy

[Semver](http://semver.org/) is a widely accepted method for deciding how
version numbers are incremented in a project. Versions are written as
MAJOR.MINOR.PATCH.

Any change to CSS rules whatsoever is considered backwards-breaking and will
result in a new **major** release. Others changes with no impact on rendering
are considered backwards-compatible and will result in a new **patch** release.

No changes to CSS rules can add functionality in a backwards-compatible manner,
therefore no changes are considered **minor**. For instance, a normalization on
an element selector may override a user style on a universal selector, or a
change to `opacity` might cause [inputs to disappear](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/3901363/),
or a change to `background-color` might cause [backgrounds to shrink](https://github.com/csstools/sanitize.css/issues/42).

[already been reported]: https://github.com/csstools/sanitize.css/issues
[fork this project]:     https://github.com/csstools/sanitize.css/fork
[live example]:          https://codepen.io/pen
[open a pull request]:   https://help.github.com/articles/using-pull-requests/
[reduced test case]:     https://css-tricks.com/reduced-test-cases/
