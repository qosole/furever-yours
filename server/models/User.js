//requires mongoose for user model/schema
const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            // email regex validator
            validate: {
                validator: function (email) {
                    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
                },
                message: `Please enter a valid email address`
            }
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
);


//initializes the user model
const User = model('User', userSchema);

module.exports = User;