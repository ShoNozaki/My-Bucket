const router = require('express').Router();
const listController = require('../controllers/bucketController')

router.get('/list', listController.getAllList);
router.post('/list', listController.addlistItem);
router.delete('/list', listController.deleteItem);

module.exports = router;