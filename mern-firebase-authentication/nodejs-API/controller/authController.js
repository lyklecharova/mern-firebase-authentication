const User = require('../model/userModel');
const dotenv = require('dotenv');
dotenv.config();

// Create or update user
exports.createOrUpdateUser = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ err: 'Request body is missing' });
        }

        const { name, picture, email } = req.body;
        if (!email) {
            return res.status(400).json({ err: 'Email is required' });
        }
        
        const nameFromEmail = email && email.split('@')[0];
        const updatedName = name ? name : nameFromEmail;
        const pictureProcess = picture
            ? picture
            : process.env.DEFAULT_IMAGE_URL;

        let user = await User.findOneAndUpdate(
            { email },
            { name: updatedName, picture: pictureProcess },
            { new: true }
        );

        if (!user) {
            user = await new User({
                email,
                name: updatedName,
                picture: pictureProcess,
            }).save();
        }
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            picture: user.picture,
            bio: user.bio,
            role: user.role,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            err: 'Something went wrong',
        });
    }
};

// Current user
exports.currentUser = async (req, res) => {
    try {
        const { email } = req.body;
        // .exec() runs the query and returns a real Promise, ensuring safe use with async/await
        const user = await User.findOne({ email }).exec();
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            picture: user.picture,
            bio: user.bio,
            role: user.role,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            err: 'Something went wrong',
        });
    }
};
