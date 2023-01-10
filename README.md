# Drum SAMPLE PAD

This is website/app is for a sample pad that plays audio files based on user input, is has been developed for those interested in audio production. The user can activate audio files based on their direct input by clicking or pressing the corresponding keyboard key, more information on how use the app in the instruction of the webpage.

The aim was to build an interactive front-end website which is repsonsive to the users actions.

[Live link to website](https://ogc1231.github.io/sample-pad/)

![Website preview](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/preview.png)

## UX
The design of the page was purposefully kept simple to make it as intuitive as possible for user to interact with the website and to avoid distracting the user from the main purpose of the webpage. 

### Colour Scheme
[coolors.co](https://coolors.co/171717-ffffff-ff3939-777777-d3d3d3) to generate my colour palette.

![Colours Used](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/coolors.png)

- `#171717` used for backgrounds and secondary text.
- `#ffffff` used for primary text.
- `#777777` used for primary highlights
- `#FF3939` used for secondary highlights and secondary text.
- `#D3D3D3` used for secondary highlights.

### Typography

Monserrat and Lato used for fonts and linked via Google Fonts. Icons linked via Remix Icon and Font Awesome.

- [Montserrat](https://fonts.google.com/specimen/Montserrat) was used for the body text.

- [Lato](https://fonts.google.com/specimen/Lato) was used for h1 and h2 text.

- [Remix Icon](https://remixicon.com/) icons were used for the keyboard symbol on the pad buttons.

- ![Remix Icon Icons Used](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/remix-icon-icons.png)

- [Font Awesome](https://fontawesome.com/) icons were used for social media icons on the footer.

- ![Font Awesome Icons Used](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/font-awesome-icons.png)

## User Stories
### Site Users

- As a user, I want to activate audio files based on my input.
- As a user, I want to see what see what audio sample i'm playing. 
- As a user, I want to see the corresponding button/key to activate the audio sample.
- As a user, I want to adjust the volume of audio playing directly on the webpage/app.
- As a user, I want to be able to change to another bank of audio files.
- As a user, I want to be able to open/expand and close the instructions sections.
- As a user, I want to be able to learn how to use the sample pad.

## Wireframes

[Balsamiq](https://balsamiq.com/wireframes) to design site wireframes.

### Home Page Wireframes

As the wireframe was created in the early stages of the project some things changed

![Website preview](https://github.com/ogc1231/sample-pad/blob/main/documentation/wireframes/wireframe.png)

## Features
### Existing Features

- **Homepage**

    - Homepage where the majority of the features can be seen.

    ![Homepage](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/firefox.png)

- **Favicon**

    - The favicon on the browser tab is a picture of a musical note which is synonymous with audio/music which fits with the theme of the project and also uses the same colours used on the webpage

    ![Favicon](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/favicon.png)

- **Main Header**

    - Drum Sample Pad, self explanatory title stating the purpose of the website.

    ![Main Header](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/main-header.png)

- **Volume Slider**

    - Volume slider, used to adjust the output volume of the audio directly on the page. Shown below in three main postions

    - Default Postion - 50% volume

    ![Volume Slider Default](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/volume-slider.png)

    - Highest Postion - 100% full volume

    ![Volume Slider Highest](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/volume-slider-full.png)

    - Lowest Postion - 0% no volume

    ![Volume Slider Lowest](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/volume-slider-lowest.png)

- **Change Sample Bank Checkbox**

    - Change Sample Bank Checkbox, used to change the sound bank to alternative audio files when engaged while still being usable with pad buttons and keyboard key presses.

    - Checkbox Default(Unchecked) - Default Sound Files Loaded

    ![Change Sample Bank Checkbox Default Unchecked](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/checkbox.png)

    - Checkbox Enagaged(Checked) - Alternative Sound Files Loaded

    ![Change Sample Bank Checkbox Enagaged Checked](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/checkbox-engaged.png)

- **Pad Button Grid**

    - Pad Button Grid, twelve pad buttons which be pressed directly or via corresponding keyboard key to play audio file named.

    ![Pad Button Grid](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/pad-button-grid.png)

- **Instructions Header**

    - Header for instructions section of the webpage

![Instructions Header](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/instructions-header.png)

- **Instruction 1**

    - Instructions Question 1, shown in closed and open states

![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/instructions-one-closed.png)
![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/q1-open.png)

- **Instruction 2**

    - Instructions Question 2, shown in closed and open states

![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/instructions-two-closed.png)
![screenshot](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/q2-open.png)

- **Footer**

    - Footer, social media links and developer credit

![Footer](https://github.com/ogc1231/sample-pad/blob/main/documentation/testing/footer.png)

### Future Features

Ideas for future features that add a lot of value to the website.

- More customisation
    - Allow users to upload their own audio files to make the webpage more versatile and user friendly to those who use more then just drums.

- Change pad name based on file loaded
    - Add a feature where the names on the pad button update when the banks are changed or different audio files are added.

- Add midi/recording functionally 
    - Add a feature to allow midi files to be created to save ideas and also record ideas

- Backing tracks
    - Add a feature to upload music/backing tracks so users can tap out a drum beat to their musical creations.

## Tools & Technologies Used

The following are all the tools and technologies used to build the webpage.

- [HTML](https://en.wikipedia.org/wiki/HTML) used for the main site content.

- [CSS](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.

- [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp).

- [CSS Grid](https://www.w3schools.com/css/css_grid.asp) used for an enhanced responsive layout.

- [JavaScript](https://www.javascript.com) used for user interaction on the site.

- [Git](https://git-scm.com) used for version control. (`git add`, `git commit`, `git push`).

- [GitHub](https://github.com) used for secure online code storage.

- [GitHub Pages](https://pages.github.com) used for hosting the deployed front-end site.

- [Gitpod](https://gitpod.io) used as a cloud-based IDE for development.

- [Markdown Builder by Tim Nelson](https://traveltimn.github.io/readme-builder) used to help generate the Markdown files.

## Testing

For all testing, please refer to the [TESTING.md](https://github.com/ogc1231/sample-pad/blob/main/TESTING.md) file.

## Deployment

The site was deployed to GitHub Pages. The steps to deploy are as follows:
- In the [GitHub repository](https://github.com/ogc1231/sample-pad), navigate to the Settings tab 
- From the source section drop-down menu, select the **Main** Branch, then click "Save".
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://ogc1231.github.io/sample-pad)

### Local Deployment

This project can be cloned or forked in order to make a local copy on your own system.

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/ogc1231/sample-pad) 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
	- `git clone https://github.com/ogc1231/sample-pad.git`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/ogc1231/sample-pad)

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/ogc1231/sample-pad)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!

## Credits

In this section you need to reference where you got your content, media, and extra help from.
It is common practice to use code from other repositories and tutorials,
however, it is important to be very specific about these sources to avoid plagiarism.

### Content

Links to pages who's code which heavily inspired and help build this webpage with some tweaks.
| Source | File | Use |
| --- | --- | --- |
| [Code Institute's](https://github.com/Code-Institute-Solutions/love-running-2.0-sourcecode/tree/main/01-getting-set-up/01-getting-set-up) | footer | Code for the footer was taken from Love Running walkthrough project with required tweaks to suit.
| [Markdown Builder by Tim Nelson](https://traveltimn.github.io/readme-builder) | README and TESTING | tool to help generate the Markdown files |
| [YouTube](https://www.youtube.com/watch?v=vjco5yKZpU8) | entire page | Inspiration |
| [YouTube](https://www.youtube.com/watch?v=Mv1ZYpo8q4g) | JavaScript, html | volume slider, checkbox idea(not fucntionality), linking keyboard presses to buttons |
| [YouTube](https://www.youtube.com/watch?v=dr8Emho-kYo) | JavaScript, html, css | Accordion/instructions section |
| [Wes Bos](https://courses.wesbos.com/account/access/6331d80b7a4bee445fa04dcd/view/194130650) | html, css | pad buttons, pad buttons transformations |

### Media

Links to audio files used
| Source | File | File type | Use|
| --- | --- | --- | --- |
| [Remix Icon](https://iconscout.com/icon/music-863) | entire site | image, icon | favicon, keyboard icon |
| [Font Awesome](https://fontawesome.com) | entire site| image | social media icons |
| [Samplefocus](https://samplefocus.com/samples/hardbass-donk-one-shot) | entire site | audio | tom-floor.wav, tom-medium.wav, tom-high.wav, crash-left.wav, crash-right.wav, china.wav, china2.wav, ride.wav |
| [Samplefocus](https://samplefocus.com/collections/fusion-drum-kit) | entire site | audio | donk.wav |
| [YouTube](https://www.youtube.com/watch?v=mNnCiTOSof0) | entire site | audio | donk2.wav |
| [Soundcamp](https://soundcamp.org/tag/crash) | entire site | audio |  crash-left2.wav, crash-right2.wav |
| [Soundcamp](https://soundcamp.org/tag/ride-cymbal) | entire site | audio | ride2.wav |
| [Drumforge](https://drumforge.com/collections/drumshotz/products/drumshotz-joel-wanasek-no-small-time-edition) | entire site | audio | kick.wav, kick2.wav, snare.wav, snare2.wav, tom-floor2.wav, tom-medium2.wav, tom-high2.wav |

### Acknowledgements

- Thanks to, [Tim Nelson](https://github.com/TravelTimN) for his support throughout the development of this project.
- Thanks to, [Alan](https://learn.codeinstitute.net) for helping fix bug 5.
