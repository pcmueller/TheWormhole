![WH-banner](https://user-images.githubusercontent.com/51062974/131181893-7ba2f478-956b-46bf-853f-a53d3f88a2fc.png)

<p align="center"><em>connecting music fans all over the world</em></p>

View our deployed site [H E R E](https://the-wormhole.herokuapp.com/)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Walkthrough](#walkthrough)
* [Authors](#authors)
* [Technologies](#technologies)

## Description

A "music discovery app" using global streaming data to present users with the top artists and songs in countries around the world.

This was a group project in which were given two weeks to push ourselves to learn a new technology, as well as to reinforce our knowledge of React and associated libraries and technologies.

As a group we agreed to learn and implement Global State Management using Redux, layered into React in cooperation with Router, asynchronous JavaScript, Cypress testing, and UI design using Sass. The assignment rubric & spec for this project can be found [here](https://frontend.turing.edu/projects/module-3/stretch.html)

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
![WH-home-glow-US](https://user-images.githubusercontent.com/51062974/131186705-dcc3663c-8a9a-4ab6-8da2-a5a8e7c5179d.png)

2. In order to switch locations, a user can either select a specific country from the dropdown menu in the navigation bar, or click the "Randomize Location" button above, which will randomly select an option from the list of available countries and automatically generate new streaming data for that location.
![WH-dropdown](https://user-images.githubusercontent.com/51062974/131186719-321d5b7f-01a3-4625-90b2-4c9f6b0a34a7.png)
![WH-home-glow-AR](https://user-images.githubusercontent.com/51062974/131186757-91d2f80c-4c2c-454f-944a-587b1e996a52.png)

3. If a user wants to see more information about a particular artist, they can reach that artist's "details" page by either clicking the thumbnail image of one of the "Top Artists" listed below, or by using the search bar next the dropdown menu to search for an artist by name.  
![WH-artist-bowie](https://user-images.githubusercontent.com/51062974/131186795-2ab1b752-8946-429d-893f-b0eddb104b01.png)

4. Once an artist image is clicked - or if the search returns a succesful match from the Last.fm database - the page will reroute to the appropriate "artist details" view, which will display the artist's name, image, and biography. The artist's name can be clicked to link out of the **Wormhole** domain and over to that artist's Last.fm page, where the user can learn more about the artist and stream individual songs.

5. While on the home page, any of the "Top Tracks" can also be clicked to link out of the **Wormhole** domain and over to that songs's Last.fm page, where 
where the user can learn more about the track and stream it if available.

5. In order to return to the home page from the "artist details" view, a user can click either the "Return Home" button or the _W O R M H O L E_ page title itself, both in the page header.  

## Learning Goals

* Successfully implement Global State Mangement using Redux, build over an existing React application.
* Further understand and incorporate React's modular component structure by integrating SCSS styling.
* Test all Component flows, asynchronous JavaScript, and conditional rendering using Cypress.

## Future Iterations

* Refactor all Redux files for best practices, using actions, reducers, and thunks as appropriately and efficiently as possible.
* Build out functionality to allow users to save their favorite artists and tracks.
* Implement ARIA inside the React component structure to verify that our page is truly accessible.


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
