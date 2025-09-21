import express from 'express'
import { Router } from 'express';

let route = Router();
route.get('/', (req,res) => {
    res.send("Hello Friend")
})
route.post("/go", (req, res) => {
    res.send("Call the post Method")
})
export {route}