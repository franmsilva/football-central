const express = require('express');
const cors = require("cors");
const passport = require('passport');
const session = require('express-session');
const bodyParser = require("body-parser");
// Import from custom files
const dbConnection = require ('./config/dbConfig');
const userRoutes = require('./controllers/auth');
const postRoutes = require('./controllers/post')
const passportConfig = require('./config/passportConfig');
const appRoutes = require('./router');

const app = express();

// Passport config
passportConfig(passport);

// Add midlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




// Session
app.use(session({
    secret: 'secretkey',
    resave: true,
    saveUninitialized: true
}))

// app.use(express.static('uploads'))
app.use(passport.initialize())
app.use(passport.session())

// DB connection
dbConnection();


// Routes
app.use(appRoutes);
// app.use('/', userRoutes);
// app.use('/', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
