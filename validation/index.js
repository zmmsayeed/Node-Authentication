const Jio = require('joi');

// Register Validation
const registerValidation = data => {
    const schema = Jio.object({
        name: Jio.string().min(6).required(),
        email: Jio.string().min(6).required().email(),
        password: Jio.string().min(6).required()
    })

    return schema.validate(data);
}

// Login Validation
const loginValidation = data => {
    const schema = Jio.object({
        email: Jio.string().min(6).required().email(),
        password: Jio.string().min(6).required()
    })

    return schema.validate(data);
}

module.exports = {
    registerValidation,
    loginValidation
}
