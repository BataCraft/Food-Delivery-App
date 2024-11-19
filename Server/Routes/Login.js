const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const User = require('../Models/User');

// Route to login a user
router.post(
    '/login',
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) {
            return res.status(400).json({ errors: err.array() });
        }
        try {
            let email = req.body.email;
            let userData = await User.findOne({ email });

            if (!userData) {
                return res.status(400).json({ success: false, message: `Invalid Email!` });
            }

            if (req.body.password !== userData.password) { // Fixed the typo here
                return res.status(400).json({ success: false, message: `Invalid Password!` });
            }

            return res.json({
                success: true, 
                // user: user
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: error.message });
        }
    }
);

module.exports = router;
