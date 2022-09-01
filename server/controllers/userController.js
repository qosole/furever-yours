const User = require('../models/User');


module.exports = {
    // gets all of the user
    getUsers(req, res) {
        console.log('hitting function')
        User.find()
            .then((users) => {
                console.log("data: ", users)
                res.json(users)
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            });
    },

    //gets one user 
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Aww man no user was found with that ID!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    //creates a new user
    createUser(req, res) {
        console.log('i am here')
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            });
    },

    //updates a user 
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with this ID' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    //deletes a user 
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Sorry no user with that ID was found' })
                    : Thought.deleteMany({ _id: { $in: user.thoughts } })
            )
            .then(() => res.json({ message: 'User and its associated thoughts have been deleted!' }))
            .catch((err) => res.status(500).json(err));
    },

    register(req, res) {
        // console.log(res.body)
        const existingUser = User.findOne({ email: req.body.email })
        console.log(existingUser)
        if (existingUser)
            res.status(204).json({ message: "User with this email already exists" })
        User.create(req.body)
            .then((newuser) => {
                console.log(newuser)
                res.status(200).json({ message: `${newuser} has been created` })
            })
            .catch((err) => res.status(500).json(err))
    },

    login(req, res) {
        console.log(req, res)
        
    }
};