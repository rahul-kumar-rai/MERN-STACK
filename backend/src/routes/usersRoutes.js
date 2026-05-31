import Router from "express";
import {createUser, getAllUsers} from "./../controllers/user.controller.js";

const userRouter = Router();

userRouter.post('/', createUser);

userRouter.get("/", getAllUsers);



export default userRouter;
