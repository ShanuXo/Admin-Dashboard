import express, { Router } from "express"
import { getUser } from "../Controllers/General.js";


const router=express.Router();

router.get("/user/:id", getUser);

export default router;

