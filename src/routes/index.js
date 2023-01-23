import { Router  } from 'express'
import publicRoutes from './public/public.routes.js'
import authRoutes from './auth/auth.routes.js'
import appRoutes from './protected/protected.routes.js'
const router = Router()

router.use('/', publicRoutes)
router.use("/auth", authRoutes)
router.use('/app', appRoutes)

export default router