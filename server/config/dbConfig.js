const mongoose = require('mongoose');

function dbConfig() {
    mongoose.connect('mongodb://localhost:27017/admin',
      {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false
      },
      (err) => {
          if(err) {
              console.log("Error connection to DB ...")
          } else {
              console.log('Connected to the database...🥋');
          }
      }
      );
}

module.exports = dbConfig;