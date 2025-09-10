const admin = require('../firebase/firebase');
const User = require('../model/userModel');

exports.authCheck = async (req, res, next) => {
    try {
        // Take token from request headers (client must send `authtoken` header)
        const token = req.headers.authtoken;
        if (!token) {
            return res.status(400).json({ error: 'No auth token provided' });
        }
        // Verify the token using Firebase Admin SDK
        const firebaseUser = await admin.auth().verifyIdToken(token);
        // Attach verified Firebase user data to request object
        req.user = firebaseUser;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({
            err: 'Invalid or expired token',
        });
    }
};

// adminCheck is a middleware that checks if the user is admin or not
exports.adminCheck = async (req, res, next) => {
    try {
        const { email } = req.user;
        const adminUser = await User.findOne({ email }).exec();
        if (!adminUser.role !== 'admin') {
            throw new Error('Admin resource.Access denied');
        }
        next();
    } catch (err) {
        console.log(err);
        res.status(403).json({ err: err.message });
    }
};
