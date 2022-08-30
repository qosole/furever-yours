const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    //this is grabbing the user_id of whoever's logged in

    if (req.session.logged_in) {

        const userId = req.session.user_id

        const userData = await User.findOne({
            where: {
                id:
                    userId
            }
        });
        res.render('home', userData.dataValues)
    } else {
        res.redirect('/login')
        return;
    }
});

module.exports = router;