import { Router } from "express";
const router = Router()

router.get('/', (req,res)=>{
    res.render('public/index')
})

router.get('/signIn',(req,res)=>{
    res.render('public/signIn')
})

router.get('/register',(req,res)=>{
    res.render('public/register')
})

router.get('/about',(req,res)=>{
    res.render('public/about')
})

router.get('/curriculum',(req,res)=>{
    res.render('public/curriculum')
})


export default router