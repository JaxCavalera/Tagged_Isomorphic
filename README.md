# **Tagged - Isomorphic**


* * *



## Contents
**[◄ Purpose ►](#purpose)**   

**[◄ Project Overview ►](#project-overview)**   
[Key Components](#key-components)   
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ► Heading](#heading)   
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ► Home](#home)   
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ► Gallery](#gallery)   
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ► Editor](#editor)   
[Primary Modules Used](#primary-modules-used)   

**[◄ Development Milestones ►](#development-milestones)**   
[Milestone Notes](#milestone-notes)   
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

## Key Components    
Below are the key components that Tagged will be constructed with.

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

## Primary Modules Used
The following list of modules is not exhaustive but will provide a quick overview of notable API's used in the development of Tagged.

- Webpack
- React (views)
- React-Router (routing views)
- SASS via PostCSS (precss plugin for advanced CSS using the SCSS syntax)
- Babel-Loader (transpiling)
- Mobservable (state management)
- ExpressJS (server)
- Passport (social authentication)
- PG-Promise (db queries for postgreSQL)
- Dotenv (managing environment variables)

[Back to Top](#contents)

- - -

# Development Milestones
Completion of the following development milestones will signify the finalisation of this project.

1. Create display components
2. Establish routing and view components
3. Configure passport for social login
4. Configure postgreSQL database tables
5. Configure session management
6. Create functional view logic

The order of these milestones is subject to change depending on requirements of specific modules to ensure testing is complete.

## Milestone Notes
Milestone notes are divided into 2 categories per milestone, Pre-Development and Post-Development.

#### Display Components
Display components are the React components that rely on inherited props to perform functions and have no knowledge of the store.  These components define the CSS styling and DOM element structure.

##### Display Components Pre-Development
Pre-Development notes regarding Display Components will be listed in this section of the document and describe important design decisions for future reference.

##### Display Components Post-Development
Post-Development notes regarding Display Components will be listed in this section of the document and describe changes that were made to the originally proposed layout.
