const Admin = require("../models/adminModel");

const loginAdmin = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username });
        if (!admin || admin.password !== password) {
            throw new Error("Invalid username or password");
        }
        res.status(200).json({ message: "Admin login successful", admin });
    } catch (error) {
        next(error);
    }
};

module.exports = { loginAdmin };
