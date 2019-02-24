'use strict';

const express = require('express');
const router = express.Router();
const dbUserFunctions = require("../../database_functions/user_functions.js");
const cors = require('cors');

module.exports = () => {

    router.get('/', cors(), (req, resp, next) => {

        dbUserFunctions.getUsersByLastName("Chang", function (err, results) {
            if(err) { resp.send(500,"Server Error"); return;}
            resp.send(results);
        });
    });

    router.get('/:userName', (req, resp, next) => {
        return resp.send(`This is the profile page for ${req.params.userName}`);
    });

    return router;
};
