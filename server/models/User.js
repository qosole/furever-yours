const { Schema, model, Types } = require('mongoose');
const bcrypt = require('bcryptjs');

const petsSchema = new Schema(
    {
        petId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        apiId: {
            type: Number,
            required: true
        },
        species: {
            type: String
        },
        breed: {
            type: String
        },
        name: {
            type: String
        },
        age: {
            type: String
        },
        sex: {
            type: String
        },
        color: {
            type: String
        },
        location: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
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
        
            validate: {
                validator: function (email) {
                    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
                },
                message: `Please enter a valid email address`
            }
        },

        pets: [petsSchema],

        password: {
            type: String,
            required: true,
            minlength: 5,


        },
        location: {
            type: String,
            required: false
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



userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;






