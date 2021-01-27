const { Router } = require('express');
const authController = require('../controllers/authControllers');
const dataController = require('../controllers/dataControllers');
const { requireAuth, checkUser } = require('../middleware/authMiddleware');

const router = Router();

router.get('/all-data', requireAuth, checkUser, dataController.getAllData);
router.get('/update-data', dataController.updateData);
router.get('/dashboard', requireAuth, checkUser, dataController.dashBoard);
router.delete('/delete-data', requireAuth, checkUser,dataController.deletaAllData);
module.exports = router;
