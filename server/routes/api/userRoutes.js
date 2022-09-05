const router = require('express').Router();

// route ---> /api/users
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser, 
    register, 
    login,
 
    
} = require('../../controllers/userController');

//this is combining the get and post route for user
router.route('/').get(getUsers).post(createUser)
router.route('/register').post(register)
router.route('/login').post(login)


router
.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser)


// router
// .route('/pets/:userid')
// .put(addPet)


module.exports = router;