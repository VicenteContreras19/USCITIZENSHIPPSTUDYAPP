export default function isAuthenticated(req,res,next){
    if (!req.session.user) return res.sendStatus(401)

    next()
}