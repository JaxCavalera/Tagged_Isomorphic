# **Tagged - Isomorphic**


* * *



## Contents
**[◄ Purpose ►](#purpose)**   

**[◄ Project Overview ►](#project-overview)**   
[Declarative TDD](#declarative-tdd)   
[Primary Modules Used](#primary-modules-used)   
[Wireframe Layout and Style Guide](#wireframe-layout-and-style-guide)   
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ► Wireframes](#wireframes)   
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ► Style Guide](#style-guide)   
[Release Backlog](#release-backlog)   
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ► Heading](#heading)   
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ► Home](#home)   
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ► Gallery](#gallery)   
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ► Editor](#editor)   


**[◄ Sprint Backlogs ►](#sprint-backlogs)**   
[Sprint Backlog Summaries](#sprint-backlog-summaries)   
[&nbsp;&nbsp;&nbsp; Display Components](#display-components)   
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ► Pre-Development](#display-components-pre--development)   
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ► Post-Development](#display-components-post--development)   

<br/>

- - -





# Purpose
The purpose of this project is to explore developing within an isomorphic environment. The project will serve as a source code view for the completed application being included within my portfolio.

Commenting within both the code and also describing the nature of commits will be crucial in maintaining a clear representation of the development process.

[Back to Top](#contents)

- - -

# Project Overview    
Tagged is a simple web application that allows a user to register / login and upload images from their device. Once uploaded, the user will be able to tag other registered users in their images using the editor provided.

All images will remain private exclusive to the user that uploaded them since the underlying functionality to include public and private galleries would not demand additional skills and therefore would not contribute anything substantial towards this project as a portfolio candidate.

Development will begin by establishing a basic stack environment and producing a "Hello World" test component using server-side rendering.  Once this is running, test driven development can begin.

An Agile Scrum management method will be deployed using [Taiga](https://tree.taiga.io/) with a new github branch being created at the completion of each Sprint Backlog.

The project will use Test Driven Development and testing will be carried out using [Tape](https://github.com/substack/tape) based on [this setup](http://12devsofxmas.co.uk/2015/12/day-2-testing-react-applications/). The testing process will adhere to the following guidelines.

- All tests will be written before the code they are testing is developed.   

>Each test will initially fail and then pass when the code it is testing has been completed successfully.   

- Code rot will be avoided by removing interdependencies between functions/features where possible.
- Tests should be simple and fast to run.
- Keep test descriptions clear enough that they can be used as documentation.
- The intent of code should be defined by what you are testing.
- Spike Solutions (prototypes) should be basic representations of a problem and used to fill in knowledge gaps prior to starting the TDD process on a task.

[Back to Top](#contents)

- - -

## Declarative TDD   
Test Driven Development (TDD) is based on tests that are used to define the final product by testing **how a task should run**. This typically requires one or more additional steps that can be merged together if a Declarative approach is taken.

Declarative TDD is best demonstrated in the following short case study.

**Task**   
Build a Display Component that toggles visibility of a Rectangle by clicking a button.

**Imperative TDD Approach**   
- **Linear Step :** Map involved elements to complete the Task   

>Work out how many properties and functions are needed for the test by working through the sub-tasks step-by-step.   

- Create a test for the toggle function
- Build the toggle function to pass the test
- Pass props to the display component
- Create the display component with a button, container and child div elements using the props names passed in from the functional code being tested.
- Use CSS to shape the rectangle that will show/hide and style the button etc.

**Declarative TDD Approach**
- **Linear Step :** Create the display component with a button, container and child div elements.   

>Props required are defined in this step for onClick and CSS Display values.   

- Use CSS to shape the rectangle that will show/hide and style the button etc.
- Create a test for the toggle function
- Build the toggle function to pass the test
- Pass props to the display component

**Summary**   
Both approaches require an initial linear step that all consecutive steps have a dependency on.  The benefits of the Declarative approach are :
- A simplified development process, that combines the Imperative sub-task of producing a roadmap into the Declarative construction of the display component.   

>It is declarative because it is defining what the end result will look like in a declarative manner instead of using a Step-by-Step process to explain what needs to happen to reach this result.   

- It is more robust to changes because the roadmap and display component are one in the same thing.   

>Any change made to the display component is the equivalent of re-working the entire roadmap to include a change with cascading effects automatically factored into the equation.

Declarative TDD is still dynamic enough that additional, unknown props and content can be added to the "dumb" Display components any time and then tests can be produced.

[Back to Top](#contents)

- - -

## Primary Modules Used
The following list of modules is not exhaustive but will provide a quick overview of notable API's used in the development of Tagged.

- Webpack
- React (views)
- React-Router (routing views)
- SASS via PostCSS (precss plugin for advanced CSS using the SCSS syntax)
- Babel-Loader (transpiling)
- Mobservable (state management)
- ExpressJS (node.js server)
- Passport (social authentication)
- PG-Promise (db queries for postgreSQL)
- Dotenv (managing environment variables)

[Back to Top](#contents)

- - -

## Wireframe Layout and Style Guide
#### Wireframes
Below are the wireframe mock-ups for the layout of application views.   

<img src='public/images/home-view-wireframe.jpg'/>
<br/><br/>

- - -
<br/>
<img src='public/images/gallery-view-wireframe.jpg'/>
<br/><br/>

- - -
<br/>
<img src='public/images/editor-view-wireframe.jpg'/>
<br/><br/>

Include a toggle button in the Details area to Hide/Show Tags with Tags off by default.  This will be a universal toggle so it will remember the individual user setting and apply it to all images displayed in the Editor View.   

Footer and Sidebar panels should be collapsible or shrinkable by the end user with state being saved.

[Back to Top](#contents)

- - -

#### Style Guide
**Font Family**   
Verdana, Arial, Helvetica, sans-serif   

**Colours**   
Logo Blue = rgba(0, 125, 241, 1)   
Sky Blue = rgba(180, 213, 242, 1)   
Navy = rgba(0, 12, 77, 1)   
Ice Blue = rgba(236, 248, 255, 1)   

**Other**   
A margin of 5px should be maintained between DOM elements where practicable.

[Back to Top](#contents)

- - -

## Release Backlog    
Tagged will be constructed from the following key components and User Stories (features listed as dot-points).

#### Heading
- Login and logout versions
- Tagged logo
- Authentication sub-components
- Additional information shared by all views
- Navigation bar when logged in

#### Home
- Basic information about Tagged
- Login and logout versions
- Logout version contains user statistics (images in gallery, number of times the user has been Tagged)

#### Gallery
- Private thumbnail image gallery
- Add and Remove images
- Click an image to open in the full editor

#### Editor
- Add, delete and modify tagged users in images
- Rename images
- Toggle tag visibility
- Toggle control panels

[Back to Top](#contents)

- - -

# Sprint Backlogs
Completion of the following Sprint Backlogs will signify the finalisation of this project.

1. Create display components (dumb)
2. Style display components (tweak DOM elements as needed)
3. Establish routing and view components
4. Configure passport for social login
5. Configure postgreSQL database tables
6. Configure session management
7. Create view logic components (smart)

The order of these Sprint Backlogs is subject to change depending on requirements of specific modules to ensure testing is complete.

**Tests for Logic (smart) Components**   
The following tests will be slightly different when working with Mobservable to Redux (they were initially designed for redux).
- The rendering of a React component given a particular state
- The behaviour of a React component and how it affects the state via dispatched actions.
- The state or the application (the default values and how it changes with to subscribed actions)

Sprint Backlogs will be documented in the [Sprint Backlog Summaries](#sprint-backlog-summaries) which are divided into 2 stages; **Pre-Development** and **Post-Development**.

The Pre-Development stage will provide a rundown of each User Story being completed during a Sprint.  User Stories will be defined as Tasks and Sub-Tasks, designed to suit a test driven development process.

The Post-Development stage will review any obstacles or changes that occurred during development. A brief summary will wrap up each Milestone detailing any differences between the Burndown Velocity and the Estimated Completion Date, plus what actions will be taken to keep the project on track.

[Back to Top](#contents)

- - -

## Sprint Backlog Summaries

#### Display Components
Display components are the React components that rely on inherited props to enable interactivity and have no knowledge of the store. These components define the CSS styling and DOM element structure.

Declarative TDD will use each Display Component as the framework for reference purposes when developing the automatic tests in future Sprint Backlogs.

##### Display Components Pre-Development
Below is a list of User Stories broken down into Tasks and Sub-Tasks that will be completed during this Sprint.

>Spike Solutions will need to be developed in order to complete the commented sub-tasks.

* **Heading Display Components**
  - Login
  - Logout
  - Navigation Bar
  - Logo
* **Home Display Components**
  - Home Login Body
  - Home Logout Body
* **Gallery Display Components**
  - Gallery Image
  >*Missing props to handle checkbox related functions & onClick function if the image is clicked on to go to the Editor View*   

  - Gallery Body   
  >*run galleryImgList.map() in the gallery-body-view.jsx render() function, and have the callback function passed to map() return a child component element.(edited)  will result in an array proptype*   

  - Gallery Footer
* **Editor Display Components**
  - Editor Sidebar
  - Editor Body
  - Editor Footer

##### Display Components Post-Development
Post-Development notes regarding Display Components will be listed in this section of the document and describe changes that were made to the originally proposed layout or Spike Solutions that were produced as part of the development process.   

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="111" height="18">
	<g id="dp_dp001" transform="matrix(1,0,0,1,0,14.3791)" stroke="#007df1" stroke-width="0.5">
		<path id="dp_path002" fill="#007df1" fill-rule="evenodd"  d="M 8.77333,-7.62933 C 8.74,-8.416 8.55067,-9.06133 8.2,-9.564 C 7.85067,-10.068 7.38267,-10.44 6.796,-10.68 C 6.20933,-10.92 5.54533,-11.04 4.80533,-11.0373 C 4.13467,-11.0387 3.504,-10.928 2.91333,-10.7027 C 2.32267,-10.4787 1.84133,-10.1333 1.47067,-9.668 C 1.09867,-9.20267 0.908,-8.608 0.896,-7.884 C 0.913333,-7.108 1.15333,-6.524 1.612,-6.132 C 2.07333,-5.74133 2.64267,-5.456 3.32267,-5.27733 C 4.004,-5.1 4.684,-4.94133 5.364,-4.80267 C 6.04533,-4.664 6.61467,-4.46133 7.07467,-4.18933 C 7.53467,-3.91733 7.77333,-3.49333 7.792,-2.91467 C 7.78267,-2.40267 7.64267,-2.00267 7.372,-1.71733 C 7.10267,-1.43067 6.76,-1.232 6.34667,-1.11867 C 5.932,-1.00533 5.504,-0.952 5.06133,-0.954667 C 4.50933,-0.954667 3.99733,-1.04533 3.524,-1.22533 C 3.05067,-1.40667 2.66667,-1.69067 2.37467,-2.07333 C 2.08267,-2.456 1.932,-2.94667 1.92267,-3.548 L 0.554667,-3.548 C 0.565333,-2.68133 0.770667,-1.96667 1.17333,-1.40533 C 1.57467,-0.842667 2.11067,-0.426667 2.78,-0.154667 C 3.45067,0.117333 4.19333,0.252 5.01067,0.250667 C 5.68133,0.254667 6.336,0.146667 6.97733,-0.0733333 C 7.616,-0.290667 8.148,-0.637333 8.56933,-1.11067 C 8.99067,-1.58267 9.20933,-2.2 9.22533,-2.96 C 9.20667,-3.79467 8.968,-4.428 8.50667,-4.85867 C 8.048,-5.28933 7.47733,-5.60267 6.79733,-5.79867 C 6.11733,-5.99467 5.436,-6.16 4.75467,-6.29333 C 4.076,-6.42667 3.50533,-6.61333 3.04533,-6.85333 C 2.58533,-7.09333 2.34667,-7.47333 2.32667,-7.99067 C 2.33467,-8.45467 2.45333,-8.82133 2.68267,-9.092 C 2.91067,-9.36133 3.208,-9.552 3.57333,-9.66533 C 3.93867,-9.77867 4.328,-9.83333 4.74267,-9.832 C 5.49733,-9.836 6.108,-9.66267 6.576,-9.31333 C 7.04533,-8.96133 7.324,-8.4 7.41467,-7.62933 Z "/>
		<path id="dp_path003" fill="#007df1" fill-rule="evenodd"  d="M 11.1987,2.99467 L 12.48,2.99467 L 12.48,-1.044 L 12.5107,-1.044 C 12.7027,-0.74 12.9453,-0.498667 13.2387,-0.32 C 13.5307,-0.141333 13.8373,-0.0133333 14.156,0.0626667 C 14.472,0.14 14.7653,0.177333 15.0347,0.174667 C 15.8293,0.166667 16.492,-0.02 17.0187,-0.384 C 17.5467,-0.748 17.9413,-1.23333 18.204,-1.844 C 18.4667,-2.45333 18.5973,-3.132 18.5973,-3.87867 C 18.5973,-4.62133 18.4653,-5.30267 18.2,-5.92 C 17.9333,-6.53733 17.5347,-7.032 17.0027,-7.40533 C 16.472,-7.77733 15.804,-7.968 15.004,-7.97867 C 14.4493,-7.984 13.952,-7.88667 13.508,-7.688 C 13.064,-7.488 12.732,-7.17467 12.5107,-6.748 L 12.48,-6.748 L 12.48,-7.80267 L 11.1987,-7.80267 Z M 17.24,-3.972 C 17.2427,-3.45467 17.1707,-2.96933 17.0227,-2.51333 C 16.8747,-2.056 16.628,-1.68533 16.284,-1.4 C 15.94,-1.112 15.4787,-0.965333 14.8987,-0.954667 C 14.312,-0.964 13.8373,-1.10667 13.4747,-1.38267 C 13.112,-1.66 12.848,-2.02267 12.6813,-2.468 C 12.516,-2.91467 12.4333,-3.396 12.4347,-3.912 C 12.432,-4.40267 12.5107,-4.86933 12.668,-5.316 C 12.8267,-5.76 13.08,-6.124 13.432,-6.408 C 13.7827,-6.69067 14.2467,-6.83867 14.8227,-6.848 C 15.3747,-6.84 15.8307,-6.69867 16.188,-6.42667 C 16.5453,-6.15333 16.8093,-5.8 16.9827,-5.36533 C 17.1547,-4.93067 17.24,-4.46533 17.24,-3.96933 Z "/>
		<path id="dp_path004" fill="#007df1" fill-rule="evenodd"  d="M 21.8613,-10.7853 L 20.58,-10.7853 L 20.58,-9.21467 L 21.8613,-9.21467 Z M 20.58,-0.00133333 L 21.8613,-0.00133333 L 21.8613,-7.80267 L 20.58,-7.80267 Z "/>
		<path id="dp_path005" fill="#007df1" fill-rule="evenodd"  d="M 24.3253,-0.00133333 L 25.6067,-0.00133333 L 25.6067,-2.95867 L 26.816,-4.076 L 29.4893,-0.00133333 L 31.12,-0.00133333 L 27.7973,-4.96533 L 30.8933,-7.80267 L 29.172,-7.80267 L 25.6067,-4.39333 L 25.6067,-10.7853 L 24.3253,-10.7853 Z "/>
		<path id="dp_path006" fill="#007df1" fill-rule="evenodd"  d="M 33.4347,-4.656 C 33.48,-5.272 33.696,-5.788 34.0853,-6.20267 C 34.4733,-6.61733 35.0053,-6.832 35.676,-6.848 C 36.328,-6.832 36.8547,-6.61867 37.2573,-6.208 C 37.66,-5.796 37.8853,-5.28 37.9307,-4.656 Z M 37.9013,-2.47867 C 37.784,-1.96667 37.5507,-1.58533 37.204,-1.33333 C 36.856,-1.08133 36.4133,-0.954667 35.872,-0.954667 C 35.3027,-0.962667 34.836,-1.084 34.4693,-1.31867 C 34.1053,-1.556 33.8387,-1.868 33.6667,-2.25467 C 33.4973,-2.64133 33.42,-3.06533 33.4347,-3.52533 L 39.288,-3.52533 C 39.32,-4.172 39.2307,-4.836 39.02,-5.51733 C 38.8093,-6.196 38.4413,-6.772 37.9147,-7.24267 C 37.3893,-7.71333 36.668,-7.95867 35.7507,-7.97867 C 35.0333,-7.972 34.4013,-7.796 33.8507,-7.45067 C 33.3,-7.10533 32.8693,-6.62933 32.556,-6.024 C 32.244,-5.41733 32.084,-4.72 32.0787,-3.932 C 32.1027,-3.136 32.252,-2.428 32.5293,-1.81333 C 32.8053,-1.19867 33.216,-0.713333 33.7627,-0.362667 C 34.308,-0.0106667 34.996,0.168 35.8267,0.174667 C 36.7187,0.173333 37.4547,-0.0533333 38.032,-0.501333 C 38.608,-0.950667 38.9867,-1.60933 39.1667,-2.47867 Z "/>
		<path id="dp_path007" fill="#007df1" fill-rule="evenodd"  d="M 53.4,-7.62933 C 53.3667,-8.416 53.1773,-9.06133 52.8267,-9.564 C 52.4773,-10.068 52.0093,-10.44 51.4227,-10.68 C 50.836,-10.92 50.172,-11.04 49.432,-11.0373 C 48.7613,-11.0387 48.1307,-10.928 47.54,-10.7027 C 46.9493,-10.4787 46.468,-10.1333 46.0973,-9.668 C 45.7253,-9.20267 45.5347,-8.608 45.5227,-7.884 C 45.54,-7.108 45.78,-6.524 46.2387,-6.132 C 46.7,-5.74133 47.2693,-5.456 47.9493,-5.27733 C 48.6307,-5.1 49.3107,-4.94133 49.9907,-4.80267 C 50.672,-4.664 51.2413,-4.46133 51.7013,-4.18933 C 52.1613,-3.91733 52.4,-3.49333 52.4187,-2.91467 C 52.4093,-2.40267 52.2693,-2.00267 51.9987,-1.71733 C 51.7293,-1.43067 51.3867,-1.232 50.9733,-1.11867 C 50.5587,-1.00533 50.1307,-0.952 49.688,-0.954667 C 49.136,-0.954667 48.624,-1.04533 48.1507,-1.22533 C 47.6773,-1.40667 47.2933,-1.69067 47.0013,-2.07333 C 46.7093,-2.456 46.5587,-2.94667 46.5493,-3.548 L 45.1813,-3.548 C 45.192,-2.68133 45.3973,-1.96667 45.8,-1.40533 C 46.2013,-0.842667 46.7373,-0.426667 47.4067,-0.154667 C 48.0773,0.117333 48.82,0.252 49.6373,0.250667 C 50.308,0.254667 50.9627,0.146667 51.604,-0.0733333 C 52.2427,-0.290667 52.7747,-0.637333 53.196,-1.11067 C 53.6173,-1.58267 53.836,-2.2 53.852,-2.96 C 53.8333,-3.79467 53.5947,-4.428 53.1333,-4.85867 C 52.6747,-5.28933 52.104,-5.60267 51.424,-5.79867 C 50.744,-5.99467 50.0627,-6.16 49.3813,-6.29333 C 48.7027,-6.42667 48.132,-6.61333 47.672,-6.85333 C 47.212,-7.09333 46.9733,-7.47333 46.9533,-7.99067 C 46.9613,-8.45467 47.08,-8.82133 47.3093,-9.092 C 47.5373,-9.36133 47.8347,-9.552 48.2,-9.66533 C 48.5653,-9.77867 48.9547,-9.83333 49.3693,-9.832 C 50.124,-9.836 50.7347,-9.66267 51.2027,-9.31333 C 51.672,-8.96133 51.9507,-8.4 52.0413,-7.62933 Z "/>
		<path id="dp_path008" fill="#007df1" fill-rule="evenodd"  d="M 56.716,-3.89467 C 56.7347,-4.84133 56.972,-5.56933 57.4307,-6.07733 C 57.888,-6.58533 58.4627,-6.84267 59.1533,-6.848 C 59.844,-6.84267 60.4187,-6.58533 60.876,-6.07733 C 61.3347,-5.56933 61.572,-4.84133 61.5907,-3.89467 C 61.572,-2.948 61.3347,-2.22267 60.876,-1.71867 C 60.4187,-1.21467 59.844,-0.96 59.1533,-0.954667 C 58.4627,-0.96 57.888,-1.21467 57.4307,-1.71867 C 56.972,-2.22267 56.7347,-2.948 56.716,-3.89467 Z M 55.36,-3.89467 C 55.36,-3.128 55.504,-2.43867 55.792,-1.828 C 56.0787,-1.21733 56.504,-0.732 57.0667,-0.373333 C 57.6307,-0.016 58.3253,0.168 59.1533,0.174667 C 59.9813,0.168 60.676,-0.016 61.24,-0.373333 C 61.8027,-0.732 62.228,-1.21733 62.516,-1.828 C 62.8027,-2.43867 62.9467,-3.128 62.9467,-3.89467 C 62.9467,-4.66533 62.8027,-5.35867 62.516,-5.97067 C 62.228,-6.584 61.8027,-7.06933 61.24,-7.428 C 60.676,-7.788 59.9813,-7.97067 59.1533,-7.97867 C 58.3253,-7.97067 57.6307,-7.788 57.0667,-7.428 C 56.504,-7.06933 56.0787,-6.584 55.792,-5.97067 C 55.504,-5.35867 55.36,-4.66533 55.36,-3.89467 Z "/>
		<path id="dp_path009" fill="#007df1" fill-rule="evenodd"  d="M 64.9253,-0.00133333 L 66.2067,-0.00133333 L 66.2067,-10.7853 L 64.9253,-10.7853 Z "/>
		<path id="dp_path010" fill="#007df1" fill-rule="evenodd"  d="M 75.0507,-7.80267 L 73.7693,-7.80267 L 73.7693,-3.39867 C 73.7693,-2.684 73.5787,-2.10133 73.1973,-1.652 C 72.816,-1.20267 72.2373,-0.970667 71.46,-0.954667 C 70.9653,-0.96 70.58,-1.10133 70.3013,-1.37867 C 70.0227,-1.65467 69.8827,-2.036 69.8773,-2.52533 L 69.8773,-7.80267 L 68.596,-7.80267 L 68.596,-2.67467 C 68.58,-1.824 68.7693,-1.13867 69.168,-0.621333 C 69.568,-0.104 70.2707,0.161333 71.28,0.174667 C 71.8467,0.178667 72.3427,0.0653333 72.7667,-0.166667 C 73.192,-0.397333 73.5413,-0.753333 73.8147,-1.232 L 73.844,-1.232 L 73.844,-0.00133333 L 75.0507,-0.00133333 Z "/>
		<path id="dp_path011" fill="#007df1" fill-rule="evenodd"  d="M 79.1893,-10.144 L 77.908,-10.144 L 77.908,-7.80267 L 76.5787,-7.80267 L 76.5787,-6.672 L 77.908,-6.672 L 77.908,-1.70533 C 77.9013,-1.00667 78.0453,-0.544 78.3373,-0.316 C 78.6307,-0.0866667 79.1053,0.0173333 79.7627,-0.00133333 L 80.7493,-0.00133333 L 80.7493,-1.132 L 80.16,-1.132 C 79.768,-1.12267 79.5053,-1.16267 79.3733,-1.252 C 79.2413,-1.34133 79.18,-1.53333 79.1893,-1.82667 L 79.1893,-6.672 L 80.7493,-6.672 L 80.7493,-7.80267 L 79.1893,-7.80267 Z "/>
		<path id="dp_path012" fill="#007df1" fill-rule="evenodd"  d="M 83.9293,-10.7853 L 82.648,-10.7853 L 82.648,-9.21467 L 83.9293,-9.21467 Z M 82.648,-0.00133333 L 83.9293,-0.00133333 L 83.9293,-7.80267 L 82.648,-7.80267 Z "/>
		<path id="dp_path013" fill="#007df1" fill-rule="evenodd" d="M 87.2467,-3.89467 C 87.2653,-4.84133 87.5027,-5.56933 87.9613,-6.07733 C 88.4187,-6.58533 88.9933,-6.84267 89.684,-6.848 C 90.3747,-6.84267 90.9493,-6.58533 91.4067,-6.07733 C 91.8653,-5.56933 92.1027,-4.84133 92.1213,-3.89467 C 92.1027,-2.948 91.8653,-2.22267 91.4067,-1.71867 C 90.9493,-1.21467 90.3747,-0.96 89.684,-0.954667 C 88.9933,-0.96 88.4187,-1.21467 87.9613,-1.71867 C 87.5027,-2.22267 87.2653,-2.948 87.2467,-3.89467 Z M 85.8907,-3.89467 C 85.8907,-3.128 86.0347,-2.43867 86.3227,-1.828 C 86.6093,-1.21733 87.0347,-0.732 87.5973,-0.373333 C 88.1613,-0.016 88.856,0.168 89.684,0.174667 C 90.512,0.168 91.2067,-0.016 91.7707,-0.373333 C 92.3333,-0.732 92.7587,-1.21733 93.0467,-1.828 C 93.3333,-2.43867 93.4773,-3.128 93.4773,-3.89467 C 93.4773,-4.66533 93.3333,-5.35867 93.0467,-5.97067 C 92.7587,-6.584 92.3333,-7.06933 91.7707,-7.428 C 91.2067,-7.788 90.512,-7.97067 89.684,-7.97867 C 88.856,-7.97067 88.1613,-7.788 87.5973,-7.428 C 87.0347,-7.06933 86.6093,-6.584 86.3227,-5.97067 C 86.0347,-5.35867 85.8907,-4.66533 85.8907,-3.89467 Z "/>
		<path id="dp_path014" fill="#007df1" fill-rule="evenodd" d="M 95.3813,-0.00133333 L 96.6627,-0.00133333 L 96.6627,-4.404 C 96.6627,-5.12 96.852,-5.70267 97.2333,-6.152 C 97.6147,-6.60133 98.1947,-6.83333 98.9707,-6.848 C 99.4653,-6.844 99.852,-6.70267 100.131,-6.42533 C 100.408,-6.148 100.549,-5.76667 100.555,-5.27867 L 100.555,-0.00133333 L 101.836,-0.00133333 L 101.836,-5.12933 C 101.852,-5.98 101.661,-6.664 101.263,-7.18133 C 100.864,-7.69867 100.16,-7.96533 99.1507,-7.97867 C 98.584,-7.98267 98.088,-7.86933 97.664,-7.63733 C 97.2387,-7.40533 96.8907,-7.05067 96.6173,-6.572 L 96.5867,-6.572 L 96.5867,-7.80267 L 95.3813,-7.80267 Z "/>
		<path id="dp_path015" fill="#007df1" fill-rule="evenodd" d="M 103.699,-2.46267 C 103.731,-1.824 103.897,-1.30933 104.2,-0.921333 C 104.501,-0.533333 104.897,-0.253333 105.387,-0.0786667 C 105.875,0.0933333 106.415,0.178667 107.007,0.174667 C 107.548,0.18 108.071,0.105333 108.573,-0.0466667 C 109.079,-0.198667 109.493,-0.454667 109.821,-0.814667 C 110.148,-1.17467 110.319,-1.664 110.329,-2.28133 C 110.323,-2.77467 110.197,-3.16533 109.953,-3.456 C 109.711,-3.74667 109.397,-3.97067 109.011,-4.128 C 108.625,-4.28533 108.213,-4.40933 107.779,-4.49867 C 107.369,-4.584 106.971,-4.67333 106.583,-4.76933 C 106.193,-4.864 105.873,-4.99467 105.617,-5.16 C 105.361,-5.32533 105.229,-5.55733 105.22,-5.85333 C 105.225,-6.112 105.312,-6.31467 105.48,-6.46 C 105.647,-6.604 105.856,-6.70667 106.108,-6.764 C 106.361,-6.82133 106.619,-6.84933 106.883,-6.848 C 107.316,-6.856 107.713,-6.76267 108.073,-6.56667 C 108.432,-6.372 108.639,-6.02933 108.696,-5.54 L 109.977,-5.54 C 109.9,-6.47067 109.572,-7.11467 108.989,-7.47067 C 108.407,-7.82667 107.671,-7.996 106.777,-7.97867 C 106.308,-7.98133 105.853,-7.90533 105.411,-7.75333 C 104.969,-7.60133 104.603,-7.36133 104.313,-7.03467 C 104.024,-6.70933 103.872,-6.28533 103.863,-5.76533 C 103.876,-5.176 104.053,-4.72933 104.395,-4.42533 C 104.735,-4.124 105.157,-3.90133 105.663,-3.76267 C 106.165,-3.62267 106.671,-3.50267 107.175,-3.404 C 107.677,-3.30267 108.1,-3.16133 108.441,-2.97867 C 108.781,-2.79467 108.959,-2.50667 108.973,-2.11733 C 108.964,-1.79333 108.86,-1.548 108.66,-1.38133 C 108.46,-1.212 108.216,-1.09867 107.928,-1.03867 C 107.64,-0.978667 107.357,-0.952 107.083,-0.954667 C 106.541,-0.948 106.065,-1.056 105.656,-1.28133 C 105.248,-1.50667 105.023,-1.90133 104.98,-2.46533 Z "/>
	</g>
</svg>   
The following Spike Solutions were produced in order to solve PropType and DOM Element Structure problems.

**Problem**   
Generate unique instances of a React component and insert them into another component programmatically.

**Solution**   
- Retrieve unique information as an array and use the map() function to cycle through each array element.

[Back to Top](#contents)

- - -
