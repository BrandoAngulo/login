import { Router } from "express";
import { methods as loginController } from "./../controllers/login.controllers";

const router = Router();

router.get("/",loginController.viewIndex);
router.get("/login",loginController.viewLogin);
router.get("/register",loginController.viewRegister);
export default router;