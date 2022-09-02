// const router = require('express').Router();
// const { User } = require('../models');

// router.get('/', async (req, res) => {
//     //this is grabbing the user_id of whoever's logged in

//     if (req.session.logged_in) {

//         const userId = req.session.user_id

//         const userData = await User.findOne({
//             where: {
//                 id:
//                     userId
//             }
//         });
//         res.render('home', userData.dataValues)
//     } else {
//         res.redirect('/login')
//         return;
//     }
// });

// router.get('/login', async (req, res) => {
//     try {
//         //if they are logged in, redirect to root page
//         if (req.session.logged_in) {
//             res.redirect('/')
//             return;
//         }

//         //if the user isnt logged in then render login page
//         if (!req.session.logged_in) {
//             res.render('login')
//         }

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// module.exports = router;


//login requests are post requests 
//create, update,
//login, logout, get requests 

//save pets model maybe? or save it in the user data. 
