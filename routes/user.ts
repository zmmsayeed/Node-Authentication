import express from 'express';
import controller from '../controller/user';
import extractJWT from '../middleware/extractJWT'

const router = express.Router();

router.get('/validate', extractJWT, controller.validateToken);
router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/get/all', controller.getAllUsers);

export default router;