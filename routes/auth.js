const router = require('express').Router();
const bcrypt = require('bcryptjs');

// Importing the Model
const User = require('../model/User');

// Import Validation file
const { registerValidation, loginValidation } = require('../validation')

router.post('/register', async (req, res) => {

    // Validate the data before making a user
    const {error} = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message);

    // Check if the user is already in the database
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).send('Email already exists');

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    try {
        const savedUser = await user.save();
        res.send({ user: user._id })
    } catch(err) {
        res.status(400).send(err)
    }
});

// LOGIN
router.post('/login', async (req, res) => {

    // Validate the data before making a user
    const {error} = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message);

    // Check if the email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email is not found!');

    // Check if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Invalid password")

    res.send('Logged in')
})


module.exports = router;