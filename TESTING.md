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
| Home | Mobile | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/lighthouse-mobile.png) | No major issues |
| Home | Desktop | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/lighthouse-desktop.png) | No major issues |

## User Story Testing

Testing user stories is actually quite simple, once you've already got the stories defined on your README.

Most of your project's **features** should already align with the **user stories**,
so this should as simple as creating a table with the user story, matching with the re-used screenshot
from the respective feature.

| User Story | Screenshot |
| --- | --- |
| As a user, I want to activate audio files based on my input. | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/active.png) ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/mouse.png) |
| As a user, I want to see what see what audio sample i'm playing.  | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/pad-button-grid.png) |
| As a user, I want to see the corresponding button/key to activate the audio sample. | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/pad-button-grid.png) |
| As a user, I want to adjust the volume of audio playing directly on the webpage/app. | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/volume-slider-full.png) ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/volume-slider.png) ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/volume-slider-lowest.png) |
| As a user, I want to be able to change to another bank of audio files.| ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/checkbox-engaged.png) ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/checkbox.png) |
| As a user, I want to be able to open/expand and close the instructions sections. | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/instructions-one-closed.png) ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/q1-open.png) ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/instructions-two-closed.png) ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/q2-open.png) |
| As a user, I want to be able to learn how to use the sample pad. | ![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/q2-open.png) |

## Bugs

Below are the currently known bugs, there may be other that have not yet been discovered. 

### Bug 1
When two keyboard keys are pressed at the same time pad gets stuck in active postion until that same key is pressed again.

![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/bug.png)

### Bug 2
When two keyboard keys are pressed at the same time only one of the pressed audio files will play

### Bug 3
Sometimes there a delay after a pad button is pressed via mouse or keyboard before the audio plays.

### Bug 4
When multiple button pads are spam pressed on mobile the audio cuts out completely.