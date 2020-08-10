const express = require('express');

const router = express.Router();

const mysql = require("mysql");

const db = mysql.createConnection({

    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE

});

/// create and save created note in MYSQL database.... 
router.post('/sites', (req, res) => {
  
    if(!req.body.note) {
        return res.status(400).send({
            message: "mynote content can not be empty"
        });
    }

    // Create a mynote
    const mynote = new mynote({
        
        content: req.body.note
    });

    // Save mynote in the database
    db.query('SELECT username FROM users WHERE username= ?' , [username], (error, results) =>
    {
        if(error)
        {
            console.log(error)
        }
        
        
       
        db.query('INSERT INTO users SET ?', {username: username, password: hpass }, (error, results) => {
                if(error)
                {
                    console.log('error')
                }
                else 
                {
                    return res.render('',{
                        // show appropriate message where note created................
                    });
                }

        })
    })
   
})
