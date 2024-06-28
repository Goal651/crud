const express = require('express')
const router = express.Router();
const { createUser, getUsers, getUser, updateUser, deleteTask, } = require('../controllers/controller')

router.post('/signup', createUser);
router.get('/allData', getUsers);
router.get('/data/:id', getUser);
router.put('/edit/:id',updateUser)
router.delete('delete',deleteTask)


module.exports = router;