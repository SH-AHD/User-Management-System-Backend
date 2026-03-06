import { Router } from "express";
import {create, deleteUser, getAllUsers, getUserById, updatetUserData} from "../controllers/user.controller.js"

const userRoutes=Router();

userRoutes.post("/user", create)
userRoutes.get("/users", getAllUsers);
userRoutes.get("/user/:id", getUserById);

userRoutes.put("/update/user/:id", updatetUserData);
userRoutes.delete("/delete/user/:id", deleteUser);










export default userRoutes;


