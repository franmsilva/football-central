const express = require('express');
const cors = require("cors");
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require("body-parser");
// Import from custom files
const dbConnection = require ('./config/dbConfig');
const appRoutes = require('./router');
const SECRET = process.env.SECRET || 'this is not very secure';
const corsConfig = {
    // REMOVE-START
    origin: 'http://localhost:3000',
    credentials: true,
    // REMOVE-END
  };
const app = express();

app.use(logger('tiny'))


// Add midlewares
app.use(cors(corsConfig));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




// Session
app.use(
    session({
      name: 'sid',
      saveUninitialized: false,
      resave: false,
      secret: SECRET,
      cookie: {
        maxAge: 1000 * 60 * 60, // 1hr
        sameSite: true,
        httpOnly: false,
        // we would want to set secure=true in a production environment
        secure: false,
      },
    })
  );



// DB connection
dbConnection();


// Routes
app.use(appRoutes);
// app.use('/', userRoutes);
// app.use('/', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
