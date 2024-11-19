const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');

const User = require('../Models/User');

// Route to create a user
router.post('/createuser',
    body('email').isEmail(),
    body('password').isLength({min: 5}),
    body('name').isLength({min: 3}),
    
    async (req, res) => {
        const err = validationResult(req);
        if(!err.isEmpty()){
            return res.status(400).json({errors : err.array()});
        }
    try {
        const newUser = await User.create(req.body);
        res.json({ success: true, user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router; 
