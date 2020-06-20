const express = require("express");
const route = express.Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const passport = require("passport");

// Register function
function registerUser(req, res) {
    
  const { firstName, lastName, email, password } = req.body;
// email from table = email from req.body
    User.findOne({ email })
        .then((user, error) => {
            if(user) {
                res.send({
                    type: "error",
                    message: "This email already registered."
                })
            } else {
                // Instanciating from User schema
                let newUser = new User({
                    firstName,
                    lastName,
                    email,
                    password
                })

                bcrypt.genSalt(10, (hash, salt) => 
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        
                        newUser.password = hash;

                        //save user to db
                        newUser.save()
                            .then(user => {
                                res.send({
                                    type: 'success',
                                    message: 'You are registered successfully.'
                                })
                            })
                            .catch(err => console.log(err))
                    })
                )
            }
        })
}

// Login function
function loginUser(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        let errors = [];
        if(err) {
            console.log("err loging in:", err)
            errors.push(err)
            res.send({
                errors,
                type: 'error'
            })
            next()
        }

         if(info) {
            console.log("info: ", info)
            errors.push(info)
            res.send({
                errors,
                type: 'error'
            })
            next()
        }

        if(user) {
            req.logIn(user, function(err) {
                if(err) {
                    console.log("err loging in:", err)
                    errors.push(err)
                    res.send({
                        errors,
                        type: 'error'
                    })
                    next()
                } else {
                    console.log("user: ", user)
                    res.send({ 
                        user: {
                            _id: user._id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                        },
                        errors: [],
                        type: 'success',
                        message: 'You are logged in successfully.'
                    })
                    next()
                }
            });
        }
    })(req, res,next)
}

module.exports = {
    loginUser,
    registerUser
}