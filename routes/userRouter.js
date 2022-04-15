import express from "express";
import { getAllProducts } from "../Controllers/productController.js";
import { Login, SignUp } from "../Controllers/userController.js"; 

const router=express.Router();  

// localhost:5000/user

router.get('/',getAllProducts);
router.post('/',SignUp);
router.post('/logIn',Login);



export default router;      
 
