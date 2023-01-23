import {Router} from 'express'
import passportAuth from '../../middleware/passportAuth.js'
const router = Router()

router.use(passportAuth)

router.get('/dashboard',  (req, res) => {
res.render('protected/dashboard')
})

router.get('/lessons',  (req, res) => {
    res.render('protected/lessons')
    })


export default router