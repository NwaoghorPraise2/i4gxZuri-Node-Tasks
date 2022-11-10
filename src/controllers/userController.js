const User = require('../models/userModel');
    //get all users
    let getAllUsers = async (req, res) => {
        try {
            let user = await User.find();
            res.status(200).json({
                success: true,
                message: 'Users Found',
                user
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Internal Server Error',
                error: error.message
            });
        }
    }
    
    //get single users
    
    //update users
    
    //Delete Users
    
    
    //Export Modules
    module.exports = {
        getAllUsers
    };