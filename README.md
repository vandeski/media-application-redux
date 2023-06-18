# Getting Started with media-application-redux

This project was created for a technical assessment.

## Available Scripts

In the project directory, first run:

### `npm i`

To start the client application, run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm api`

Launches the mock api endpoint. 
Open [http://localhost:4000/mediaList](http://localhost:4000/mediaList) to view the current state of the data.

## Application Overview and How To's

On launching the application you will arrive at the landing page, where you will find a table filled with the currently available media content.

### Searching Media Content

Toward the top of the page is a text input that can be used to search the media offerings by title. Simply click the `Search` button after entering your query. The `Clear` button will reset the list to the full data set.
* Note: The query is NOT case sensative

### View by Media Type

Under the search input are four green buttons. The first three, `Movies`, `TV Shows`, and `Games` will limit the list of media by the indicated value. While the last, `Clear` will reset the list to its original state.

### Create a New Media Entry

To create new media content to be added to the list, click the `New Media` button in the top right of the table. The application will navigate to a form where you can enter the fields required for a new entry into the system. Once all of the fields are filled click the `Save` button. The entry will be added and will be navigated back to the landing page where you will be able to see the new media content.

If you change your mind and want to return to the landing page, hit `Cancel` instead.

### View Media Entry

From the landing page you will see that each entry in the table has a black `View/Update` button on the right side of the table. Clicking it will navigate the application to the `View/Edit Media` form. Here will find all of the entry's information, including:

 - `ID`
 - `Title`
 - `Type`
 - `Genre`
 - `Release Year`
 - `Rating`

### Edit Media Entry

If you wish to update a field, navigate to the `View/Edit Media` form and click on the input you wish to change. Once changes are complete click `Update`. Once the update is made the application will be navigated back to the landing page.

* Note: The `ID` field is generated and can not be changed.

### Delete Media Entry

To remove the entry from the list of available content, navigate to the `View/Edit Media` form and click `Delete`

## Creator's Notes/Ramblings

This incomplete project uses React, Typescript, and Redux (instead of MobX). I started on it early in the morning on 6/17/2023 and am currently working on this README.md the same day, just before 10pm CST. 

The hours of work has yielded a solid application that, while missing some pieces, does fulfill the functional requirements from a user's perspective. SInce I am working toward a Front End Engineering position I chose to spend most of my time on the React/Typescript. Making sure the user could complete all CRUD operations for the Media objects they would be handling in the application.

In lieu of MobX, I chose to use Redux for state management. I made this decision because there was a greater amount of documentation on Redux over MobX and I thought it would help as my experience with 3rd party state management outside of React is limited. I have found that most application's I have worked on professionally did not require the heavy lifting that such technologies would require. Especially since React's hooks and built-in state management have greatly improved over the last few years. 

In this repo you will find that I have built out the Redux store (state, actions, reducers, types) but decided not to implement it into the application's state as I am concerned about running out of time and being forced to stop with the process only partially complete. 

You may also note that the application is missing RxJS. While I managed to build out an api layer for the application to complete the CRUD functions, I ran out of time. In full transparency I would like to note that I am not familiar with the technology and thought I would have time to refactor it into the project after finishing the Redux store. 

Though the assessment requirement's calls for a `MediaForm` component for adding/editing media content and a `MediaItem` for displaying and deleting; I chose to combine them into a single component in order to save development time.

Despite the incompleteness of the project I have enjoyed this process and look forward to discussing it. 

## Future Consideration

Since this project was built in a day there are a number of improvements I would have liked to implement. Below is a list of future considerations if I were to continue this project.

- Finish the Redux Implementation
- Add RxJS
- e2e testing via Cypress
- Improved Form Validation
- Toast component for use feedback
- Put less functionality in the App.tsx
- Improved UX/Designs