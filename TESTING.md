# Testing

Return back to the [README.md](README.md) file.

The website was tested on mutiple devices and screen sizes including phones, computers, tablets and various monitor sizes.

## Code Validation

Use the space to discuss code validation for any of your own code files (where applicable).
You are not required to validate external libraries/frameworks, such as imported Bootstrap, Materialize, Font Awesome, etc.

**IMPORTANT**: You must provide a screenshot for each file you validate.

**PRO TIP**: Always validate the live site pages, not your local code. There could be subtle/hidden differences.

### HTML

The recommended [HTML W3C Validator](https://validator.w3.org) was used to validate the HTML file.

- `https://validator.w3.org/nu/?doc=https%3A%2F%2Fogc1231.github.io%2Fsample-pad%2Findex.html`

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fogc1231.github.io%2Fsample-pad%2Findex.html) | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/html-validation.png) | No warnings or errors |

### CSS

The recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) was used to validate the CSS file.

- `https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fogc1231.github.io%2Fsample-pad`

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fogc1231.github.io%2Fsample-pad) | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/css-validation.png) | No Errors |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fogc1231.github.io%2Fsample-pad) | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/css-warnings.png) | Two Warnings |


### JavaScript

The recommended [JShint Validator](https://jshint.com) was used to validate the JS file.

| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/jshint.png) | No errors or warnings |
| script.js | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/jshint-metrics.png) | Metrics |

## Browser Compatibility

Webpage tested on multiple browsers to check for compatibility issues. All worked as expected.

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/chrome.png) | Works as expected |
| Firefox | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/firefox.png) | Works as expected |
| Edge | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/edge.png) | Works as expected |
| Brave Mobile | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/brave-plite.png) | Works as expected |

## Responsiveness

Webpage tested on multiple devices to check for compatibility issues. All worked as expected.

| Device | Screenshot | Notes |
| --- | --- | --- |
| Iphone 12 (DevTools) | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/iphone12.png) | Works as expected |
| Ipad Pro (DevTools) | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/ipadpro.png) | Works as expected |
| Huawei P30 Lite | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/brave-plite.png) | Works as expected |


## Lighthouse Audit

Project tested using the Lighthouse Audit tool to check for any major issues.

| Page | Size | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | Mobile | ![screenshot](documentation/lighthouse-home-mobile.png) | No major issues |
| Home | Desktop | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/lighthouse-desktop.png) | No major issues |

## User Story Testing

Testing user stories is actually quite simple, once you've already got the stories defined on your README.

Most of your project's **features** should already align with the **user stories**,
so this should as simple as creating a table with the user story, matching with the re-used screenshot
from the respective feature.

| User Story | Screenshot |
| --- | --- |
| As a user, I want to activate audio files based on my input. | ![screenshot](documentation/feature01.png) |

| As a user, I want to see what see what audio sample i'm playing.  | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/pad-button-grid.png) |

| As a user, I want to see the corresponding button/key to activate the audio sample. | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/pad-button-grid.png) |

| As a user, I want to adjust the volume of audio playing directly on the webpage/app. | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/volume-slider-full.png) ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/volume-slider.png) ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/volume-slider-lowest.png) |

| As a user, I want to be able to change to another bank of audio files.| ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/checkbox-engaged.png) ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/checkbox.png) |

| As a user, I want to be able to open/expand and close the instructions sections. | ![screenshot](documentation/feature06.png) |
| As a user, I want to be able to learn how to use the sample pad. | ![screenshot](documentation/feature08.png) |

## Bugs

It's very important to document any bugs you've discovered while developing the project.
Make sure to include any necessary steps you've implemented to fix the bug(s) as well.

For JavaScript and Python applications, it's best to screenshot the errors to include them as well.

**PRO TIP**: screenshots of bugs are extremely helpful, and go a long way!

- JS Uncaught ReferenceError: `foobar` is undefined/not defined

    ![screenshot](documentation/bug01.png)

    - To fix this, I _____________________.

- JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).

    ![screenshot](documentation/bug02.png)

    - To fix this, I _____________________.

- Python `'ModuleNotFoundError'` when trying to import module from imported package

    ![screenshot](documentation/bug03.png)

    - To fix this, I _____________________.

- Django `TemplateDoesNotExist` at /appname/path appname/template_name.html

    ![screenshot](documentation/bug04.png)

    - To fix this, I _____________________.

- Python `E501 line too long` (93 > 79 characters)

    ![screenshot](documentation/bug04.png)

    - To fix this, I _____________________.
