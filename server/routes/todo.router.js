const express = require('express');
// Set up /toDo router
const toDoRouter = express.Router();

const pool = require('../modules/pool.js');


// GET ROUTE
toDoRouter.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "todo" ORDER BY "status" ASC;';
    pool.query(queryText).then(result => {
      // Sends back the results in an object
      res.send(result.rows);
    })
      .catch(error => {
        console.log('Error getting To-Do List', error);
        res.sendStatus(500);
      });
  }); // end GET




module.exports = toDoRouter;