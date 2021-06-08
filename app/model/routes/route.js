const express = require('express');
const router = express.Router();

const user = require('../controller/controller.js');

router.get('/', (req, res) => {
    res.json({"message": "CRUD application."});

});

router.post('/user', (req, res, next) => {
    user.create(req, res)
});

router.delete('/user/:userId', (req, res, next) => {
    user.delete(req, res)
});

router.get('/user/get-user', (req, res, next) => {
    user.findOne(req, res)
});
    
router.put('/user/:userId', (req, res, next) => {
    user.update(req, res)
}); 

    module.exports = router;

