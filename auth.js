const express = require('express');

const router = express.Router();

const mysql = require("mysql");

const db = mysql.createConnection({

	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE

});

const bcrypt  = require('bcryptjs');

router.post('/users/login', async (req, res) => {
 try
 {
 	const {username, password} = req.body;

 	if( !username || !password){
 		/// some message
 	}
 	db.query('SELECT * from username WHERE username= ?', [username], async (error, results) => 
 	{
 			if(error){
 				res.status(401);
 			}
 			else
 			{
 				const id = results[0].id
 				// code of retrieve data. from page.
. 			}

 	})
 }
 catch (error)
 {

 }

})

router.post('users/register', (req, res) => {
	
	const username = req.body.username;
	const password = req.body.password; 

	db.query('SELECT username FROM users WHERE username= ?' , [username], (error, results) =>
	{
		if(error)
		{
			console.log(error)
		}
	    if(results.length > 0)
		{
			return res.render('register', {
				message: 'username already exists'
			})
		}
		
        let hpass = await bcrypt.hash(password, 8 );
		db.query('INSERT INTO users SET ?', {username: username, password: hpass }, (error, results) => {
				if(error)
				{
					console.log('error')
				}
				else 
				{
					return res.render('register',{
						message: 'User registered'	
					});
				}

		})
	})

});