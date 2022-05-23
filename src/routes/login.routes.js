import { Router } from "express";
import { methods as loginController } from "./../controllers/login.controllers";

const router = Router();

router.get("/",loginController.getLogin);

export default router;