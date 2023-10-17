const router = require('express').Router();
const {
    addUserInfo,
    getAllUsers, deleteUsers
} = require('../controller/userController');

router.get('/getusers', getAllUsers);
router.put('/addusers', addUserInfo);
router.delete('/deleteUser/:id', deleteUsers)

module.exports = router;