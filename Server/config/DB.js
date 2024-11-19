const mongoose = require('mongoose');
const mongodb = process.env.mongoURL;

const database = async () => {
    try {
        await mongoose.connect(mongodb, {
            useNewUrlParser: true,
            useUnifiedTopology: true, // Ensures proper connection settings
        });
        console.log(`Database connected successfully`);
    } catch (err) {
        console.error(`Database connection error: ${err.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = database;
