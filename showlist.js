
const express = require('express');

const router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({

	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE

});



router.get('/sites/lists',  (req, res) => {
    db.query('SELECT username FROM users WHERE username= ?' , [username], (error, results) =>
    {
        if(error)
        {
            console.log(error)
        }
        
        else
        {
        	(mynotes => {
        res.send(results.lists);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving mynotes."
        });
    });
        }
       
       
    })
    
};