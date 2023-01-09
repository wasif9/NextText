const express = require('express')
const {protect} = require('../middleware/authMiddleware');
const {registerUser, authUser, allusers} = require("../controllers/userControllers");

const router = express.Router()

router.route('/').post(registerUser).get(protect,allusers);
router.post('/login',authUser)

module.exports = router;