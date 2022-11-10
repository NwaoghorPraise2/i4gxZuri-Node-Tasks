const User = require('../models/userModel');

    //get all users
    let getAllUsers = async (req, res) => {
        try {
            let users = await User.find();
            if (users.length === 0) {
                return res.status(404).json({
                    success:false,
                    message: 'No user not found'
                });
            };
            res.status(200).json({
                success: true,
                message: 'Users Found',
                users
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Internal Server Error',
                error: err.message
            });
        }
    }
    
    //get single users
    let getSingleUSer = async (req, res) => {
        try {
            let id = {_id: req.params.id};
            let user = await User.findOne(id);
                if (!user) return res.status(404).json({
                    success: false,
                    message: 'user not found'
                });
                res.status(200).json({
                    success: true,
                    message: 'User Found',
                    user
                });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Internal Error',
                error: err.message
            });
        }
    };
    
    //create user
    let createUser = async (req, res) => {
        try {
            let user = await req.body;
            // console.log(user);
            let createdUser = await User.create(user);
            if (!createdUser) return res.status(404).json({
                message: false,
                message: 'User Creation failed'
            })
            return res.status(201).json({
                success: true,
                message: 'User Creation Successful',
                user: createdUser
            })
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'internal matters',
                error: err.message
            });
        }
    };
    
    //update users
    let updateUser = async (req, res) => {
        try {
            let id = {_id: req.params.id}
            let user = await req.body;
            let updateUser = await User.findByIdAndUpdate(id, user, {new: true});
        
        if (!updateUser) return res.status(500).json({
            success: false,
            message: 'User not updated'
        });
        
        return res.status(200).json({
            success: true,
            message: 'User Updated',
            updateUser
        });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Internal Error',
                error: err.body
            });            
        }
    };
    
    //Delete Users
    let deleteUser = async (req, res) => {
        try {
            let id = {_id: req.params.id};
            let deleteUser = await User.findOneAndDelete(id);
            
            if (!deleteUser) return res.status(400).json({
                success: false,
                message: 'User not deleted'
            });
            
            return res.status(200).json({
                success: true,
                message: "User Successfully Deleted",
                deletedUser: deleteUser
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Internal Errors',
                error: err.message
            })
        }
    }
    
    //Export Modules
    module.exports = {
        getAllUsers,
        getSingleUSer,
        createUser,
        updateUser,
        deleteUser
    };