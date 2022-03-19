const express = require('express');
// Set up /toDo router
const toDoRouter = express.Router();

const pool = require('../modules/pool.js');


// GET ROUTE
toDoRouter.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "todo" ORDER BY "id" ASC;';
    pool.query(queryText).then(result => {
        // Sends back the results in an object
        res.send(result.rows);
    })
        .catch(error => {
            console.log('Error getting To-Do List', error);
            res.sendStatus(500);
        });
}); // end GET

// POST ROUTE
toDoRouter.post('/', (req, res) => {
    let newTask = req.body;
    console.log(`Adding task`, newTask);

    let queryText = `
                    INSERT INTO "todo" ("task")
                    VALUES ($1);
                     `;

    const values = [newTask.task]

    pool.query(queryText, values)
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new task`, error);
            res.sendStatus(500);
        });
}); // end POST

toDoRouter.put('/:id', (req, res) => {
    let id = req.params.id;
    console.log('Updating completion status:', id);
  
    let queryText = `UPDATE "todo"
    SET "status" = NOT "status"
    Where "id" = $1;`;

    const values = [id];
  
    pool.query(queryText, values)
      .then(result => {
        res.sendStatus(200);
      }).catch(err => {
        console.log(err);
        res.sendStatus(500);
      })
  }); // end PUT

  // Delete
  router.delete('/:id', (req, res) => {
    // grab the specific id of the book
    let id = req.params.id;
    console.log('Need to delete:', id);
    // res.sendStatus(200);
  
    const queryText = `
          DELETE FROM "todo"
          WHERE "id" = $1;
      `;
    // Sanitize the data
    values = [id];
  
    pool.query(queryText, values)
      .then(result => {
        res.sendStatus(204);
      }).catch(err => {
        console.log(err);
        res.sendStatus(500);
      })
  
  }); // end delete

module.exports = toDoRouter;