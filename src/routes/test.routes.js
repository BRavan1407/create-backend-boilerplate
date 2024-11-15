import express from "express";
import { getStatus } from "../contollers/test.controller.js";

const router = express.Router();

// Define the route
router.get('/status', getStatus);

export default router;