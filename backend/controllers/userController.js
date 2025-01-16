const User = require("../models/userModel");

const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        next(error);
    }
};

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            throw new Error("Invalid email or password");
        }
        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        next(error);
    }
};

module.exports = { registerUser, loginUser };
