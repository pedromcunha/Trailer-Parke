'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    User = require('../models/user.js'),
    bcrypt = require('bcryptjs');

exports.login = function(req, res) {
    //use username to find password hash
    var password = req.body.password,
        username = req.body.username,
        isMatching;
    User.model.findOne({
        username: username
    }, function(err, user) {
        if (err) {
            res.status(404)
            .send({
                message: 'Username not found! Why not create one?',
                user: null
            });
        } 
        else if (!user) {
            res.status(404)
            .send({
                message: 'Username not found! Why not create one?',
                user: null
            });
        }
        else {
            //check to see if hashed password matched the stored hash
            if (bcrypt.compareSync(password, user.password)) {
                res.send({
                    message: 'Successfully logged in!',
                    user: user
                });
            } else {
                res.status(401) //unauthorized
                .send({
                    message: 'Username and password do not match.',
                    user: null
                });
            }
        }
    });
};