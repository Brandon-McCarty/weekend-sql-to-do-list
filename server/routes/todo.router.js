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

module.exports = toDoRouter;