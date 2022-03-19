(View Raw will give you the markdown that you can copy to your repos!)


![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# PROJECT NAME

## Description

_Duration: Weekend Project_

This project is designed to be a dynamic to-do list for the user. It allows the user to input a task and stores the information in a database. The application then displays the tasks, the completion status, and the completion date (shown upon being marked complete). The user is able to toggle the completion status with the click of a button or delete the task with a click followed by a confirmation prompt. Each task entered into the application is defaulted to be marked as incomplete as the purpose is to list tasks still needing to be completed. All of the pieces working together make an easy to use and functional to-do list.


To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

![To-Do Screenshot](Screen Shot 2022-03-19 at 11.19.42 AM.png?raw=true)

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Moment.js] (https://momentjs.com/)
- [jquery.js] (https://jquery.com/)
- [Postgres](https://www.postgresql.org/download/)
- [SweetAlert] (https://sweetalert.js.org/guides/)

## Installation

1. Create a database named `weekend-to-do-app`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.
3. Open up your editor of choice and run an `npm install`
4. Run `postgres -D /usr/local/var/postgres for Intel, M1 is postgres -D /opt/homebrew/var/postgres` in your terminal
to start the database
5. Run `npm start` in your terminal to start the server
6. Open your browser and go to localhost:5000 to see the application.

## Usage
How does someone use this application? Tell a user story here.

1. The user uses the input bar to type in a task to complete.
2. The user can then mark the task as complete using a button which will change the style of the page to indicate completion as well as provide a completion date.
3. If the user wishes to remove a task, they can click on the delete button and follow the prompts to delete the task from the list completely.
4. Tasks can be added and removed as necessary to the user's liking.


## Built With

node.js
express.js
jquery.js
postgres
sweet alerts



## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support
If you have suggestions or issues, please email me at [brandon.m.mccarty12@gmail.com](www.google.com)