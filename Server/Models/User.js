const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
       
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date, // Use `Date` for proper date handling
        default: Date.now,
    },
});

// Export the model
module.exports = mongoose.model('user', userSchema);
