// const mongoose = require("mongoose");

// const connectDatabase = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL, {
//             // useNewUrlParser: true,
//             // useUnifiedTopology: true,
//             // useCreateIndex: true,
//         });
//     } catch (err) {
//         console.error('Failed to connect to MongoDB', err);
//     }
// };

// module.exports = connectDatabase;

const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const connectDatabase = async () => {
    try {
        const mongoURI = process.env.MONGO_URL;

        if (!mongoURI) {
            throw new Error('MONGO_URL is not defined in environment variables');
        }

        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = connectDatabase;
