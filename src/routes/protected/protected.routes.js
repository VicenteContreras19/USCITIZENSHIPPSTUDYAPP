import {Router} from 'express'
import passportAuth from '../../middleware/passportAuth.js'
const router = Router()

router.use(passportAuth)

router.get('/dashboard',  (req, res) => {
res.render('protected/dashboard')
})


export default router