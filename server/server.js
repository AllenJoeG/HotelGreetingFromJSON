// Load the express library from node_modules/express:
const express = require('express');

// Create app. This variable is an instance of an express server:
const app = express();

// Define a global variable to hold our port address:
const PORT = 5001;

// Require my routers:
const salutationsRouter = require('./routes/salutationsRouter.js');
const companiesRouter = require('./routes/companiesRouter.js');
const guestsRouter = require('./routes/guestsRouter.js');
const templatesRouter = require('./routes/templatesRouter.js');

// Give us the ability to "read" HTTP request body data if
// it comes as JSON:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Tell express where to find our "public" files:
app.use(express.static('./server/public'));

// ----- /salutations routes ---------------
app.use('/salutations', salutationsRouter);

// ----- /companies routes ---------------
app.use('/companies', companiesRouter);

// ----- /guests routes ---------------
app.use('/guests', guestsRouter);

// ----- templates routes ---------------
app.use('/templates', templatesRouter);

// Starts the server, and listens for requests:
app.listen(PORT, function() {
  console.log(`We get signal. Main screen turn on: http://localhost:${PORT}`)
});
