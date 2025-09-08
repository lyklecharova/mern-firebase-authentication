const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
            trim: true,
        },
        password: {
            type: String,
            require: true,
        },
        picture: {
            type: String,
            default: 'avatar.png',
        },
        bio: {
            type: String,
            default: 'bio',
        },
        role: {
            type: String,
            require: true,
            default: 'subscriber',
            //subscriber, author, admin
        },
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model('User', userSchema);
module.exports = User;
