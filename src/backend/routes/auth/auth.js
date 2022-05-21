import express from "express";
import loginController from "../../controllers/auth/login.js";
import registerController from "../../controllers/auth/register.js";

const router = express.Router();

router.post('/login', loginController.login)

router.post('/register', registerController.register)

export default router;