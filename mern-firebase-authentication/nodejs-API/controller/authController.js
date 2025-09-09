const User = require('../model/userModel');
const dotenv = require('dotenv');
dotenv.config();

// Create or update user
exports.createOrUpdateUSer = async (req, res) => {
    try {
        const { name, picture, email } = req.body;
        const nameFromEmail = email && email.split('@')[0];
        const updatedName = name ? name : nameFromEmail;
        const pictureProcess = picture
            ? picture
            : process.env.DEFAULT_IMAGE_URL;

        const user = await User.findByIdAndUpdate(
            { email },
            { name: updatedName, picture: pictureProcess },
            { new: true }
        );

        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                picture: user.picture,
                bio: user.bio,
                role: user.role,
            });
        } else {
            const newUser = new User({
                email,
                name: updatedName,
                picture: pictureProcess,
            }).save();

            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                picture: user.picture,
                bio: user.bio,
                role: user.role,
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            err: 'Something went wrong',
        });
    }
};
