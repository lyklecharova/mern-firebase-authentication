const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

dotenv.config();

// import routes
const authRouters = require('./routes/authRoutes');
const userRouters = require('./routes/userRoutes');

//* App
const app = express();

// * connect to database

mongoose
    .connect(process.env.MONGO_URL, {
        dbName: 'firebase-auth-sample',
    })
    .then(() => {
        console.log('Connected to DB');
    })
    .catch((err) => {
        console.log(err);
    });

// * middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// routes
app.use('/api', authRouters);
app.use('/api', userRouters);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running at ${port}/`);
});
