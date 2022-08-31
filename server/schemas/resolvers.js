const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        Users: async () => {
            return User.find();
        },
        User: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
        // By adding context to our query, we can retrieve the logged in user without specifically searching for them
        me: async (parent, args, context) => {
            //do not understand the 'parent' + the args aren't being used?? 
            if (context.user) {
                //line 16 user should be different than line 17 user. MERN 25
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
};









    module.exports = resolvers;