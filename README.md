# **Tagged - Isomorphic**


* * *



## Contents
**[◄ Purpose ►](#purpose)**   

**[◄ Project Overview ►](#project-overview)**   
[Primary Modules Used](#primary-modules-used)   
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

An Agile Scrum management method will be deployed using [Taiga](https://tree.taiga.io/) with a new github branch being created at the completion of each Sprint Backlog.

The project will use Test Driven Development and testing will be carried out using [Tape](https://github.com/substack/tape) based on [this setup](http://12devsofxmas.co.uk/2015/12/day-2-testing-react-applications/). The testing process will adhere to the following guidelines.

- All tests will be written before the code they are testing is developed.
>Each test will initially fail and then pass when the code it is testing has been completed successfully.

- Code rot will be avoided by removing interdependencies between functions/features where possible.
- Tests should be simple and fast to run.
- Keep test descriptions clear enough that they can be used as documentation.
- The intent of code should be defined by what you are testing.
- Spike Solutions (prototypes) should be basic representations of a problem and used to fill in knowledge gaps prior to starting the TDD process on a task.

TDD is based on tests that are used to define the final product by testing **how a task should run**. This typically requires one or more additional steps that can be merged together if a Declarative approach is taken.

What I am calling **Declarative TDD** is best demonstrated in the following short case study.   

**Task**   
Display Component that toggles visibility of a Rectangle by clicking a button.

**Imperative TDD**   
- **Linear Step** map involved elements to complete the Task
>work out how many properties and functions are needed for the test by working through the sub-tasks step-by-step.

- create a test for the toggle function
- build the toggle function to pass the test
- pass props to the visual component
- create the visual component that has a button element and container div with child div element using the props names passed in from the functional code being tested.
- use CSS to shape the rectangle that will show/hide and style the button etc.

**Declarative TDD**
- **Linear Step** create the visual component that has a button element and container div with child div element with {this.props.varNames} for onClick and CSS Display Property Values.
- use CSS to shape the rectangle that will show/hide and style the button etc.
- create a test for the toggle function
- build the toggle function to pass the test
- pass props to the visual component

**Summary**   
Both forms of TDD require an initial linear step that all consecutive steps have a dependency on.  The benefits of the Declarative approach are :
- A simplified development process, that combines the Imperative sub-task of producing a roadmap into the Declarative construction of the display component.

- It is more robust to changes because the roadmap and display component are one in the same thing.
>Any change made to the display component is the equivalent of re-working the entire roadmap to include a change with cascading effects automatically factored into the equation.

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

## Release Backlog    
Tagged will be constructed from the following key components and User Stories (features listed as dot-points).

#### Heading
- Login and logout versions
- Tagged logo
- Authentication sub-components
- Additional information shared by all views

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
2. Establish routing and view components
3. Configure passport for social login
4. Configure postgreSQL database tables
5. Configure session management
6. Create view logic components (smart)

**Tests for Logic (smart) Components**   
The following tests will be slightly different when working with Mobservable to Redux (they were initially designed for redux).
- The rendering of a React component given a particular state
- The behaviour of a React component and how it affects the state via dispatched actions.
- The state or the application (the default values and how it changes with to subscribed actions)

The order of these Sprint Backlogs is subject to change depending on requirements of specific modules to ensure testing is complete.

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

* **Heading Display Components**
  - Login Panel
  - Logout Panel
  - Nav Bar
  - Heading Wrapper
* **Home Display Components**
  - Logged Out Home Body
  - Logged In Home Body
* **Gallery Display Components**
  - Gallery Image Template
  - Gallery Body
  - Gallery Footer CP
* **Editor Display Components**
  - Editor Sidebar CP
  - Editor Body
  - Editor Footer CP

##### Display Components Post-Development
Post-Development notes regarding Display Components will be listed in this section of the document and describe changes that were made to the originally proposed layout.

[Back to Top](#contents)

- - -
