//requires mongoose for user model/schema
const { Schema, model, Types } = require('mongoose');
const bcrypt = require('bcrypt')

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
            validate: {
                validator: function (email) {
                    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
                },
                message: `Please enter a valid email address`
            }
        },
        password: {
            type: String,
            required: true,
            minlength: 5,


        },
        location: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
// userSchema.methods.isCorrectPassword = async function (password) {
//     return bcrypt.compare(password, this.password, );
//   };

userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};


//call back f

//initializes the user model
const User = model('User', userSchema);

module.exports = User;


//zip code or city name for location?



