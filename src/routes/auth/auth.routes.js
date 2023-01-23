import {  Router } from "express";
import authControllers from "../../controllers/authController.js";
import authController from '../../controllers/auth/auth.controllers.js'

const {signIn, register} = authControllers

const router = Router()


router.post("/register",register);


router.post('/signIn', authController.login)

router.get('/logout', (req,res,next)=>{
    req.logout(error=>{
        if(error)
        return next(error)

        res.redirect('/signIn')
    })
})

export default router;