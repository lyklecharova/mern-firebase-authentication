const User = require('../model/userModel');

exports.listAllUser = async (req, res) => {
    try {
        // Get pagination values from query parameters
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit; // records to skip

        // Get filter values
        const name = req.query.name || '';
        const email = req.query.email || '';

        // Find users matching filters (case-insensitive)
        const users = await User.find({
            name: { $regex: name, $options: 'i' },
            email: { $regex: email, $options: 'i' },
        })
            .skip(skip)
            .limit(limit)
            .exec(); // Returns a real Promise

        // Count the total matching documents
        const count = await User.countDocuments({
            name: { $regex: name, $options: 'i' },
            email: { $regex: email, $options: 'i' },
        });

        const totalPage = Math.ceil(count / limit);

        // Map documents to plain objects
        const listsAllUsers = users.map((user) => ({
            _id: user._id,
            name: user.name,
            email: user.email,
            picture: user.picture,
            bio: user.bio,
            role: user.role,
        }));

        res.json({
            count,
            page,
            limit,
            totalPage,
            users: listsAllUsers,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// get user by id
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).exec();
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
        res.status(500).json({ message: 'Internal server error' });
    }
};

// update user by id
exports.updateUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).exec();
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.role = req.body.role;
        await user.save();

        res.json({ user });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
