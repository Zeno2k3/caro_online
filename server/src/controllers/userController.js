const db = require('../models');

const userController = {
    create_user: async function (req, res) {
        try {
            console.log(req.body);
            const newUser = await db.user.create(req.body);
            res.status(201).json({
                message: 'Create user success',
                data: newUser
            });
        } catch (error) {
            res.status(500).json({
                message: 'Không thể tạo người dùng',
                error: error.message
            });
        }
    },

    get_user_byID: async function (req, res) {
        try {
            const user = await userModel.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({
                message: 'Get user success',
                data: user
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error getting user',
                error: error.message
            });
        }
    },

    delete_user_byID: async function (req, res) {
        try {
            const deletedUser = await userModel.findByIdAndDelete(req.params.id);
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({
                message: 'Delete user success',
                data: deletedUser
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error deleting user',
                error: error.message
            });
        }
    },

    update_user: async function (req, res) {
        try {
            const updatedUser = await userModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({
                message: 'Update user success',
                data: updatedUser
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error updating user',
                error: error.message
            });
        }
    }
};

module.exports = { userController };