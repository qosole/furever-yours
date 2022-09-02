//requires mongoose for user model/schema
const { Schema, model, Types } = require('mongoose');

const petsSchema = new Schema(
    {
        petId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(), 
        },
        pros: {
            type: String,
            required: true, 
            max: 300,
        },
        cons: {
            type: String,
            required: true, 
            max: 300,
        },
        addedAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => new Date(timestamp).toLocaleString()
        },
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false
    }
);


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
        pets: [petsSchema],
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