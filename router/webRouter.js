import express from "express"
import { loginControl, signUpControl } from "../controller/webController.js"


const router = express.Router()

router.post("/login",loginControl)
router.post("/register",signUpControl)

export default router