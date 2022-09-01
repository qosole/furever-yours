const router = require('express').Router();

// route ---> /api/users
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser, 
    register, 
    login
    
} = require('../../controllers/userController');

//this is combining the get and post route for user
router.route('/').get(getUsers).post(createUser)
router.route('/register').post(register);


router
.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser)


module.exports = router;