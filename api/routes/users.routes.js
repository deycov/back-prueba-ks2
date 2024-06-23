import express from "express";
import UsersService from "../services/users.services.js";

const router = express.Router();
const Users = new UsersService();


router.get('/users', async (req, res, next)=>{
  try {
    const response = await Users.get();
    
    return res.status(200).json(response);  
  } catch (error) {
    next(error);
  }
});

router.get('/users/:id', async (req, res, next)=>{
  try {
    const { id } = req.params;
    const response = await Users.find(id);
    
    return res.status(200).json(response);  
  } catch (error) {
    next(error);
  }
});

router.post('/users/', async (req, res, next)=>{
  try {
    const body = await req.body;
    const response = await Users.post(body);
    
    return res.status(200).json(response);  
  } catch (error) {
    next(error);
  }
});

router.put('/users/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const response = await Users.put(id, body);
    
    return res.status(200).json(response); 
  } catch (error) {
    next(error);
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const { id } = await req.params; 
    const response = await Users.delete(id);
    
    return res.status(200).json(response); 
  } catch (error) {
    next(error);
  }
});


export default router;