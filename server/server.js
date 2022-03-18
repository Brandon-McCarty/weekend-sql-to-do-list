const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const toDoRouter = require('./routes/toDo.router')


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//Routes
app.use('/toDo', toDoRouter)

// Server will listen for requests on a port
app.listen(PORT, () => {
    console.log('listening on port', PORT);
  });