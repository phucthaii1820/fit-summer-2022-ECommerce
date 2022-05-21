import express from "express";

import authRoute from '../routes/auth/auth.js'

const router = express.Router();

router.use('/auth', authRoute);

export default router;