const router = require('express').Router();
const listController = require('../controllers/bucketController')

router.get('/list', listController.getAllList);
router.post('/list', listController.addlistItem);

module.exports = router;