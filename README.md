![WH-banner](https://user-images.githubusercontent.com/51062974/131181893-7ba2f478-956b-46bf-853f-a53d3f88a2fc.png)

<p align="center">connecting music fans all over the world</p>

* [Deployed Site](https://the-wormhole.herokuapp.com/)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Walkthrough](#walkthrough)
* [Authors](#authors)
* [Technologies](#technologies)

## Description

A "music discovery app" using global streaming data to present users with the most commonly streamed artists and songs in most countries around the world.

This was a group project in which were given two weeks to push ourselves to learn a new technology, as well as to reinforce our knowledge of React and associated libraries and technologies.

As a group we agreed to use Redux, React, Router, asynchronous JavaScript, Cypress testing, and conditional rendering. The Assignment Rubric & Spec for this project can be found [here](https://frontend.turing.edu/projects/module-3/stretch.html)

## Notable Features

* Custom-built dataset of all countries with valid Last.fm data allows user to manually select or randomize a location and render the top artists and tracks in a given country via Last.fm API
* Additional API request to retrieve and display individual "artist bio" pages.
* Generates individual artist images using another proprietary dataset, built personally using links to license-free images on Wikimedia Commons and matching image links to API data.
* Integrates global state using Redux, implemented mid-development over existing codebase.
* Thoroughly tested using Cypress integration testing of all user flows
* Responsive design: can be used on all screen sizes with considerations for tabbing, color choices, and button sizing for enhanced UX

## Installation

1. Clone this repo using:
  * `git clone` `https://github.com/pcmueller/the-wormhole`
2. `cd` into your cloned directory
3. Run `npm install`
4. Run `npm start`

#### Cypress Testing

1. Once the app is set up locally, from the root directory, install `Cypress`
  * Run `npm install cypress --save-dev`
2. To open and run the tests
  * Run `npx cypress open`

## Walkthrough

1. Once loaded, the home page welcomes the user to their country of origin, with the United States set as the default location.  Displayed below are Last.fm's "Top Tracks" and "Top Artists" streaming data from that location, automatically populated in the form of two vertical lists.
<img width="450" height="400" alt="Home Page View" src="https://user-images.githubusercontent.com/51062974/131179730-f361fcfd-a5d2-4dbd-a382-23aa856bf65c.png">

2. In order to switch locations, a user can either select a specific country from the dropdown menu in the navigation bar, or click the "Randomize Location" button above, which will randomly select an option from the list of available countries and automatically generate new streaming data for that location.

3. If a user wants to see more information about a particular artist, they can reach that artist's "details" page by either clicking the thumbnail image of one of the "Top Artists" listed below, or by using the search bar next the dropdown menu to search for an artist by name.  

4. Once an artist image is clicked - or if the search returns a succesful match from the Last.fm database - the page will reroute to the appropriate "artist details" view, which will display the artist's name, image, and biography. The artist's name can be clicked to link out of the **Wormhole** domain and over to that artist's Last.fm page, where the user can learn more about the artist and stream individual songs.

5. In order to return to the home page, a user can click either the "Return Home" button in the header, or the _W O R M H O L E_ page title itself.  

## Learning Goals

* Further understand and implement modularity of Reacts Component structure with SCSS styling
* Build on React Application using the *Global State Management* tool, Redux
* Test all Component flows and Asynchronous JavaScript using cypress

## Evolution of the Project

We were given this project as an opportunity to stretch ourselves to learn a new technology and implement it.  All of our work to better learn React, Cypress, Router and finally Redux was independent of our instructors. We met as a team every day to pull apart our iterations and apply what we were learning on Redux together, and to make sure we were on track with our work/life balance goals. As a team we found our other classmates to be a huge resource in discovering how redux is best applied in an application.

## Future Iterations

* Refactor all of modular files for best practice approaches for redux, to ensure all user flows are accounted for

* Access to the images paired in our artists api
  * This may mean the use of a new api
  * Otherwise we will implement a crawler to help grab the images from the wiki pages our api has them living on, at the moment

* Implementing Aria inside the react component structure to verify that our page is truly accessible

* Creating the ability to save our users favorites

## Authors

<table>
    <tr>
        <td> Peter Muellerleile <a href="https://github.com/pcmueller">GH</td>
        <td> Bryan Hohn <a href="https://github.com/bhohnco">GH</td>
        <td> Angie Battillo <a href="https://github.com/battan40">GH</td>
    </tr>
    </tr>
        <td><img src="https://avatars.githubusercontent.com/u/51062974?v=4" alt="P. Muellerleile" width="125" height="auto" /></td>
        <td><img src="https://avatars.githubusercontent.com/u/71860165?v=4" alt="B. Hohn" width="125" height="auto" /></td>
        <td><img src="https://avatars.githubusercontent.com/u/58871312?v=4" alt="A. Battillo" width="125" height="auto" /></td>
    </tr>
</table>

## Technologies

<table>
    <tr>
        <td>JavaScript</td>
        <td>React</td>
        <td>Redux</td>
        <td>Router</td>
        <td>HTML</td>
        <td>CSS</td>
        <td>Sass</td>
        <td>Cypress</td>
        <td>Heroku</td>
    </tr>
    </tr>
        <td><img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-plain.svg" alt="javascript" width="100" height="auto" /></td>
        <td><img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" alt="react" width="100" height="auto" /></td>
        <td><img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" alt="redux" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119361186-9d808b80-bc68-11eb-97ee-05bde2700716.png" alt="react router" width="100" height="auto" /></td>
        <td><img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" alt="html" width="100" height="auto" /></td>
        <td><img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg" alt="css" width="100" height="auto" /></td>
        <td><img src="https://github.com/devicons/devicon/blob/master/icons/sass/sass-original.svg" alt="sass" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119361263-b5f0a600-bc68-11eb-9f41-8e10aa013e7a.png" alt="cypress" width="100" height="auto" /></td>
        <td><img src="https://github.com/devicons/devicon/blob/master/icons/heroku/heroku-original.svg" alt="heroku" width="100" height="auto" /></td>
    </tr>
</table>
